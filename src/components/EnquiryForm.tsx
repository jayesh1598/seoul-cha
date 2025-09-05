import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner@2.0.3";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useRef } from "react";

interface EnquiryFormProps {
  type?: 'general' | 'franchise';
  title?: string;
}

export function EnquiryForm({ type = 'general', title = "Get in Touch" }: EnquiryFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const formName = type === 'franchise' ? 'seoulcha-franchise-enquiry' : 'seoulcha-general-enquiry';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    enquiryType: type === 'franchise' ? 'franchise' : 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhook = (import.meta as any).env?.VITE_ZAPIER_WEBHOOK_URL as string | undefined;

    try {
      if (webhook) {
        const res = await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            form: formName,
            to: 'support@seoulcha.com',
            receivedAt: new Date().toISOString(),
          }),
        });
        if (!res.ok) throw new Error('Webhook failed');
      } else {
        const encode = (data: Record<string, string>) =>
          Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');

        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': formName,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            enquiryType: formData.enquiryType,
            to: 'support@seoulcha.com',
          }),
        });
      }

      toast.success(
        type === 'franchise'
          ? "Franchise enquiry submitted! We'll contact you within 24 hours."
          : "Message sent successfully! We'll get back to you soon."
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        enquiryType: type === 'franchise' ? 'franchise' : 'general',
      });
    } catch (err) {
      toast.error('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader className="text-center pb-6">
        <CardTitle className="korean-handwritten text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <p className="text-gray-600 text-sm">
          {type === 'franchise' 
            ? "Join the Seoul Cha family and bring Korean bubble tea culture to your city!"
            : "We'd love to hear from you! Send us a message and we'll respond as soon as possible."
          }
        </p>
      </CardHeader>
      
      <CardContent>
        <form
          ref={formRef}
          name={formName}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value={formName} />
          <input type="hidden" name="enquiryType" value={formData.enquiryType} />
          <input type="hidden" name="to" value="support@seoulcha.com" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User size={16} className="text-pink-500" />
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your full name"
              required
              className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail size={16} className="text-pink-500" />
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email address"
              required
              className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone size={16} className="text-pink-500" />
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter your phone number"
              className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
            />
          </div>

          {/* Subject Field (only for general enquiries) */}
          {type === 'general' && (
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select onValueChange={(value) => handleInputChange('subject', value)}>
                <SelectTrigger className="border-pink-200 focus:border-pink-400 focus:ring-pink-200">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="menu">Menu Questions</SelectItem>
                  <SelectItem value="catering">Catering Services</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="subject" value={formData.subject} />
            </div>
          )}

          {/* Franchise specific fields */}
          {type === 'franchise' && (
            <div className="space-y-2">
              <Label htmlFor="location">Preferred Location</Label>
              <Input
                id="location"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="City or area for franchise"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
              />
            </div>
          )}

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare size={16} className="text-pink-500" />
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={
                type === 'franchise' 
                  ? "Tell us about your business experience and why you want to join Seoul Cha..."
                  : "Tell us how we can help you..."
              }
              rows={4}
              required
              className="border-pink-200 focus:border-pink-400 focus:ring-pink-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send size={16} />
                {type === 'franchise' ? 'Submit Franchise Enquiry' : 'Send Message'}
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
