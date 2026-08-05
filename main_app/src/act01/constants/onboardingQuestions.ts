import { PriorityId, WeddingType } from '../types';

export interface QuestionDefinition {
  id: number;
  title: string;
  subtitle: string;
  leadSignalNote?: string;
}

export const onboardingQuestionsList: QuestionDefinition[] = [
  {
    id: 1,
    title: 'When is the wedding?',
    subtitle: 'If you don’t know yet, we can find auspicious dates for you later.',
    leadSignalNote: 'Date set is the strongest intent marker — +20 points lead score',
  },
  {
    id: 2,
    title: 'Where are you living now?',
    subtitle: 'This sets your currency, your timezone for calls, and whether we show the NRI toolkit.',
    leadSignalNote: 'Seattle · PST 12.5 hours behind Chennai',
  },
  {
    id: 3,
    title: 'Which city will hold the wedding?',
    subtitle: 'We cross-reference venue availability and vendor teams in this location.',
  },
  {
    id: 4,
    title: 'How many guests are you expecting?',
    subtitle: 'This calculates catering plates, hall capacity, and hotel block sizes.',
  },
  {
    id: 5,
    title: 'Roughly what are you working with?',
    subtitle: 'A band is enough. We’ll only ever suggest vendors that fit it — and show you what each one really costs.',
    leadSignalNote: 'Budget shown in your currency, stored & costed in INR',
  },
  {
    id: 6,
    title: 'What must be perfect?',
    subtitle: 'Pick three. We’ll spend more of your budget here and less elsewhere.',
    leadSignalNote: 'Priorities steer which vendors get recommended',
  },
  {
    id: 7,
    title: 'Who else will be deciding with you?',
    subtitle: 'We’ll set up their access. You can change all of this later.',
    leadSignalNote: 'Weddings planned by 3+ people finish twice as fast',
  },
];

export const priorityOptions: { id: PriorityId; label: string; description: string }[] = [
  { id: 'Food', label: 'The food', description: 'Iyengar sappadu, live counters, tiffin quality' },
  { id: 'Photography', label: 'Photography', description: 'Candid moments, wedding film, same-day trailer' },
  { id: 'Traditions', label: 'Rituals done right', description: 'Panda Kaal, Vadakalai purohit, authentic pooja' },
  { id: 'Decoration', label: 'Stage & Mandap Decor', description: 'Floral canopy, jasmine draping, ambient lighting' },
  { id: 'Price', label: 'Best value / Budget', description: 'Strict budget adherence and published rate bands' },
  { id: 'Luxury', label: 'Luxury Experience', description: '5-star hotel venue, valet, premium hospitality' },
  { id: 'Guest Experience', label: 'Guest comfort', description: 'Airport pickups, hotel blocks, live streams' },
];

export const weddingTypeOptions: { id: WeddingType; label: string; desc: string }[] = [
  { id: 'Traditional', label: 'Traditional', desc: 'Full sampradaya rituals, mandapam & leaf sappadu' },
  { id: 'Modern', label: 'Modern', desc: 'Contemporary aesthetic, fusion music & Sangeet focus' },
  { id: 'Destination', label: 'Destination', desc: 'Resort wedding with guest stays & multi-day events' },
  { id: 'Simple', label: 'Simple & Intimate', desc: 'Under 150 guests, minimal rituals & quick timeline' },
];

export const countryOptions = [
  { id: 'Seattle, United States', name: 'Seattle, United States', details: 'USD · PST: 12.5 hours behind Chennai' },
  { id: 'United Kingdom', name: 'United Kingdom', details: 'GBP · GMT: 4.5 hours behind Chennai' },
  { id: 'Singapore / Malaysia', name: 'Singapore / Malaysia', details: 'SGD / MYR · SGT: 2.5 hours ahead of Chennai' },
  { id: 'UAE / Gulf', name: 'UAE / Gulf', details: 'AED · GST: 1.5 hours behind Chennai' },
  { id: 'Australia / New Zealand', name: 'Australia / New Zealand', details: 'AUD / NZD · AEST: 4.5 hours ahead' },
  { id: 'I\'m in India', name: 'I\'m in India', details: 'INR · IST local timezone' },
];

export const communityOptions = [
  'Iyengar (Vadakalai / Thenkalai)',
  'Iyer (Smartha)',
  'Chettiar (Nattukottai)',
  'Kongu Vellalar Gounder',
  'Mudaliar & Pillai',
  'Naidu & Kamma',
  'Interfaith / Multi-Cultural',
];
