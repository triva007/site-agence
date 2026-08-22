export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  company: string;
  trade: string;
  city: string;
  averageTicket: string;
  phone: string;
  email: string;
  selectedDate: string;
  selectedTime: string;
  notes?: string;
}

export interface TradePreset {
  id: string;
  name: string;
  defaultTicket: number;
  minTicket: number;
  maxTicket: number;
  typicalMargin: number;
  description: string;
}
