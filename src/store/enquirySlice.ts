import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type EnquiryType = 'general' | 'franchise';
export interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  enquiryType: EnquiryType;
}
export interface EnquiryRecord extends EnquiryPayload {
  id: string;
  createdAt: string;
  status: 'pending' | 'sent' | 'failed';
  error?: string;
}

export const sendEnquiry = createAsyncThunk<EnquiryRecord, EnquiryPayload>(
  'enquiry/send',
  async (payload, { rejectWithValue }) => {
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const record: EnquiryRecord = { ...payload, id, createdAt, status: 'pending' };

    const webhook = (import.meta as any).env?.VITE_ENQUIRY_WEBHOOK_URL as string | undefined;

    if (!webhook) {
      return rejectWithValue('Missing VITE_ENQUIRY_WEBHOOK_URL') as any;
    }

    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          to: 'support@seoulcha.com',
          submittedAt: createdAt,
          source: 'seoulcha-website',
        }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      return { ...record, status: 'sent' };
    } catch (err: any) {
      return rejectWithValue(err?.message || 'Failed to send enquiry') as any;
    }
  }
);

interface EnquiryState {
  items: EnquiryRecord[];
  sending: boolean;
  error: string | null;
}

const initialState: EnquiryState = {
  items: [],
  sending: false,
  error: null,
};

const enquirySlice = createSlice({
  name: 'enquiry',
  initialState,
  reducers: {
    addLocal(state, action: PayloadAction<EnquiryRecord>) {
      state.items.unshift(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(sendEnquiry.pending, (state) => {
        state.sending = true;
        state.error = null;
      })
      .addCase(sendEnquiry.fulfilled, (state, action) => {
        state.sending = false;
        state.items.unshift(action.payload);
      })
      .addCase(sendEnquiry.rejected, (state, action) => {
        state.sending = false;
        state.error = (action.payload as string) || 'Failed to send enquiry';
        // queue locally as failed
        const id = crypto.randomUUID();
        state.items.unshift({
          id,
          createdAt: new Date().toISOString(),
          status: 'failed',
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          enquiryType: 'general',
          ...((action.meta.arg as EnquiryPayload) || {}),
        });
      });
  },
});

export const { addLocal } = enquirySlice.actions;
export default enquirySlice.reducer;
