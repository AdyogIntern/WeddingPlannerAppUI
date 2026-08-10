export type Currency = 'USD' | 'EUR' | 'GBP' | 'AED' | 'AUD' | 'CAD';

export type WeddingType = 'Traditional' | 'Modern' | 'Destination' | 'Simple';

export type PriorityId = 
  | 'Price' 
  | 'Luxury' 
  | 'Traditions' 
  | 'Food' 
  | 'Photography' 
  | 'Decoration' 
  | 'Guest Experience';

export type DeciderId = 'Bride' | 'Groom' | 'Parents' | 'Grandparents' | 'Planner';

export type SlotStatus = 'booked' | 'open' | 'voting' | 'hold';

export interface LocationOption {
  id: string;
  name: string;
  details?: string;
  selected?: boolean;
}

export interface DeciderOption {
  id: string;
  name: string;
  selected: boolean;
}

export type OnboardingStep = 
  | 'welcome' 
  | 'location' 
  | 'deciders' 
  | 'timeline' 
  | 'budget' 
  | 'priorities' 
  | 'complete';

export type ActiveScreenSlide = 'screen01' | 'screen02' | 'screen03' | 'screen04';

export type ViewMode = 'presentation' | 'interactive' | 'single' | 'code';

export interface VendorSlot {
  id: string;
  category: string;
  vendorName: string;
  status: SlotStatus;
  costINR: number;
  costUSD: number;
  note?: string;
  owner?: string;
  rating?: number;
  tags?: string[];
  specs?: string;
}

export interface WeddingFunction {
  id: string;
  name: string;
  date: string;
  timeSlot: string;
  guests: number;
  owner: string;
  estimatedCostINR: number;
  estimatedCostUSD: number;
  slots: VendorSlot[];
}

export interface OnboardingData {
  weddingDate?: string; // e.g. "14 Feb 2027"
  dateOptionType?: 'fixed' | 'exploring' | 'muhurtham_help' | '';
  country?: string; // e.g. "Seattle, United States"
  city?: string; // e.g. "Chennai"
  guestCount?: number | null; // e.g. 420
  weddingType: WeddingType; // e.g. "Traditional"
  community: string; // e.g. "Iyengar"
  currency?: Currency | ''; // e.g. "USD"
  rawBudgetAmount: number; // e.g. 48000
  budgetINR: number; // e.g. 4030000 (approx INR)
  functionsRequired: string[]; // e.g. ["Nichayathartham", "Panda Kaal", "Mehendi & Sangeet", "Muhurtham", "Reception"]
  topPriorities: PriorityId[]; // Exactly 3 e.g. ["Food", "Traditions", "Photography"]
  deciders: DeciderId[]; // e.g. ["Bride", "Parents", "Groom"]
}

export interface NudgeCard {
  id: string;
  type: 'urgent' | 'nudge' | 'info';
  title: string;
  subtitle: string;
  actionText: string;
  badge?: string;
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

export interface PlanVersion {
  id: 'priya' | 'amma';
  title: string; // "Priya's version" | "Amma's version"
  totalCostINR: number;
  totalCostUSD: number;
  venue: string;
  venueCostINR: number;
  guestCount: number;
  decorStyle: string;
  decorCostINR: number;
  agreedCount: number;
  totalDecisionsCount: number;
}

export type AppScreen = 
  | 'landing' 
  | 'questions' 
  | 'generating' 
  | 'blueprint_generated' 
  | 'blueprint_home' 
  | 'function_details' 
  | 'compare_plans' 
  | 'share_plan'
  | 'invitation'
  | 'visa_letter'
  | 'who_pays'
  | 'records'
  | 'registration';
