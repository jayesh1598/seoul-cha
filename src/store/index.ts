import { configureStore } from '@reduxjs/toolkit';
import enquiry from './enquirySlice';

export const store = configureStore({
  reducer: {
    enquiry,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
