export type Currency = 'INR' | 'USD';

export interface BudgetItem {
  id: string;
  category: string;
  amountINR: number; // in Lakhs
  spentINR?: number;
  variance?: string; // e.g. "+₹2.4L over", "on band", "-₹40K under", "estimated"
  varianceType?: 'over' | 'onband' | 'under' | 'estimated';
  owner: string; // e.g., "Appa", "Priya", "Meera"
  details: string; // e.g., "2 of 5 functions", "420 + 180 plates"
  icon?: string;
}

export interface PaymentScheduleItem {
  id: string;
  title: string;
  vendor: string;
  amountINR: number; // in INR
  amountUSD: number;
  dueDate: string;
  daysLeft?: number;
  status: 'due' | 'paid' | 'upcoming' | 'escrow' | 'delayed';
  note?: string;
  isHero?: boolean;
}

export interface EscrowItem {
  id: string;
  vendor: string;
  category: string;
  amountINR: string; // e.g. "₹8.4L"
  amountUSD?: string;
  status: 'paid_in' | 'confirmed' | 'release_requested' | 'released' | 'disputed';
  steps: {
    label: string;
    completed: boolean;
  }[];
  description: string;
  details?: string;
  requestDate?: string;
}

export interface DisputeCase {
  id: string;
  caseNumber: string;
  vendor: string;
  category: string;
  amountHeld: string;
  reason: string;
  timeline: {
    id: string;
    title: string;
    timestamp: string;
    completed: boolean;
    active?: boolean;
    subtext?: string;
  }[];
  contractNotes: string[];
}

export interface Contributor {
  id: string;
  name: string;
  amountINR: string; // e.g. "₹22.1L"
  amountUSD?: string;
  percentage: number;
  categories: string;
  color: string;
  avatar?: string;
  isUser?: boolean;
}

export interface DocumentItem {
  id: string;
  title: string;
  vendor?: string;
  details: string;
  amount?: string;
  date?: string;
  type: 'invoice' | 'statement' | 'tax' | 'contract' | 'receipt';
}

export interface BookingDetails {
  vendorName: string;
  eventType: string;
  eventDate: string;
  guests: number;
  quoteItems: {
    label: string;
    amount: string;
    included?: boolean;
  }[];
  totalINR: string;
  totalUSD: string;
  savingsNote: string;
  approvals: {
    person: string;
    time: string;
  }[];
  contractStatus: string;
  escrowNote: string;
  progressChange: {
    from: number;
    to: number;
    unlockedReward: string;
  };
  relationshipManager: {
    name: string;
    role: string;
    languages: string;
    hours: string;
  };
}
