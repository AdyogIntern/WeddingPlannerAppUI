import {
  BudgetItem,
  PaymentScheduleItem,
  EscrowItem,
  DisputeCase,
  Contributor,
  DocumentItem,
  BookingDetails
} from '../types';

export const INITIAL_BUDGET_ITEMS: BudgetItem[] = [
  {
    id: 'b1',
    category: 'Venue',
    amountINR: 14.2,
    spentINR: 14.2,
    variance: '+₹2.4L over',
    varianceType: 'over',
    owner: 'Appa',
    details: '2 of 5 functions',
    icon: 'Building2'
  },
  {
    id: 'b2',
    category: 'Catering',
    amountINR: 9.8,
    spentINR: 9.8,
    variance: 'on band',
    varianceType: 'onband',
    owner: 'Appa',
    details: '420 + 180 plates',
    icon: 'Utensils'
  },
  {
    id: 'b3',
    category: 'Photography',
    amountINR: 3.4,
    spentINR: 0,
    variance: 'estimated',
    varianceType: 'estimated',
    owner: 'Priya',
    details: 'not locked',
    icon: 'Camera'
  },
  {
    id: 'b4',
    category: 'Decor & florals',
    amountINR: 5.1,
    spentINR: 5.1,
    variance: '-₹40K under',
    varianceType: 'under',
    owner: 'Meera',
    details: '',
    icon: 'Flower2'
  },
  {
    id: 'b5',
    category: 'Jewellery',
    amountINR: 6.2,
    spentINR: 6.0,
    variance: 'on band',
    varianceType: 'onband',
    owner: 'Amma',
    details: 'Heritage gold set & diamond thali',
    icon: 'Gem'
  },
  {
    id: 'b6',
    category: 'Attire & Trousseau',
    amountINR: 2.8,
    spentINR: 2.8,
    variance: 'on band',
    varianceType: 'onband',
    owner: 'Priya',
    details: 'Kanchipuram silk + Sabyasachi lehenga',
    icon: 'Shirt'
  },
  {
    id: 'b7',
    category: 'Travel & Logistics',
    amountINR: 1.1,
    spentINR: 0.9,
    variance: '-₹20K under',
    varianceType: 'under',
    owner: 'Arjun',
    details: 'NRI guest flights & tempo travellers',
    icon: 'Plane'
  }
];

export const INITIAL_PAYMENT_SCHEDULE: PaymentScheduleItem[] = [
  {
    id: 'p1',
    title: 'Venue advance',
    vendor: 'Leela Palace',
    amountINR: 450000,
    amountUSD: 5360,
    dueDate: '22 Sep',
    daysLeft: 5,
    status: 'due',
    note: 'Muhurtham & reception hall blocking',
    isHero: true
  },
  {
    id: 'p2',
    title: 'Catering — 30% advance',
    vendor: 'Sri Amirtham',
    amountINR: 158000,
    amountUSD: 1880,
    dueDate: '14 Oct',
    status: 'upcoming',
    note: 'Sri Amirtham Catering'
  },
  {
    id: 'p3',
    title: 'Photography — booking fee',
    vendor: 'Studio Anantham',
    amountINR: 85000,
    amountUSD: 1010,
    dueDate: '01 Nov',
    status: 'upcoming',
    note: 'Candid + traditional coverage'
  },
  {
    id: 'p4',
    title: 'Venue — balance',
    vendor: 'Leela Palace',
    amountINR: 390000,
    amountUSD: 4640,
    dueDate: '05 Feb',
    status: 'upcoming',
    note: 'on arrival'
  },
  {
    id: 'p5',
    title: 'Decor, music, makeup',
    vendor: 'Multiple vendors',
    amountINR: 440000,
    amountUSD: 5240,
    dueDate: 'Not yet scheduled',
    status: 'upcoming',
    note: 'Not yet scheduled'
  }
];

export const INITIAL_ESCROW_ITEMS: EscrowItem[] = [
  {
    id: 'e1',
    vendor: 'Leela Palace',
    category: 'Venue',
    amountINR: '₹8.4L',
    amountUSD: '$10,000',
    status: 'confirmed',
    steps: [
      { label: 'Paid in', completed: true },
      { label: 'Confirmed', completed: true },
      { label: 'Event day', completed: false },
      { label: 'Released', completed: false }
    ],
    description: 'The vendor sees the money is committed. It reaches them 48 hours after the function, once you or Appa confirm it went well.'
  },
  {
    id: 'e2',
    vendor: 'Sri Amirtham Catering',
    category: 'Catering',
    amountINR: '₹1.58L',
    amountUSD: '$1,880',
    status: 'release_requested',
    steps: [
      { label: 'Paid in', completed: true },
      { label: 'Confirmed', completed: true },
      { label: 'Release Requested', completed: true },
      { label: 'Released', completed: false }
    ],
    description: 'Menu tasting completed on video call, 14 Sep. They\'ve asked for the advance to be released.',
    requestDate: '14 Sep'
  }
];

export const INITIAL_DISPUTE_CASE: DisputeCase = {
  id: 'c4471',
  caseNumber: 'Case #4471',
  vendor: 'Bloom & Thread',
  category: 'mandap decor',
  amountHeld: '₹1.85L HELD · NOT RELEASED',
  reason: 'You reported that the mandap flowers did not match the approved reference photos. The money stays with us until this is settled.',
  timeline: [
    {
      id: 't1',
      title: 'You raised it with 6 photos',
      timestamp: 'Sun 14 Feb, 11:20 am IST',
      completed: true
    },
    {
      id: 't2',
      title: 'Anand called you within 3 hours',
      timestamp: 'Named person, not a ticket queue',
      completed: true
    },
    {
      id: 't3',
      title: 'Vendor has 48 hours to respond',
      timestamp: 'Their SLA has a penalty clause for this',
      completed: false,
      active: true
    },
    {
      id: 't4',
      title: 'Resolution',
      timestamp: 'partial release, full refund, or make-good',
      completed: false
    }
  ],
  contractNotes: [
    'A signed contract countersigned by us',
    'The approved reference photos in the decision thread',
    'A written record of every change request'
  ]
};

export const INITIAL_CONTRIBUTORS: Contributor[] = [
  {
    id: 'c1',
    name: "Bride's family",
    amountINR: '₹22.1L',
    percentage: 52,
    categories: 'Venue, catering, purohit, decor',
    color: '#7A1C31',
    avatar: 'A'
  },
  {
    id: 'c2',
    name: 'Priya & Arjun',
    amountINR: '₹11.9L',
    amountUSD: '$14,170',
    percentage: 28,
    categories: 'Photography, outfits, sangeet · paid in USD',
    color: '#B38600',
    avatar: 'P',
    isUser: true
  },
  {
    id: 'c3',
    name: "Groom's family",
    amountINR: '₹6.0L',
    percentage: 14,
    categories: "Reception, groom's side travel",
    color: '#7D766F',
    avatar: 'G'
  },
  {
    id: 'c4',
    name: 'Chithappa · Boston',
    amountINR: '₹2.6L',
    percentage: 6,
    categories: 'Nadaswaram, thamboolam — his gift',
    color: '#B2A99E',
    avatar: 'C'
  }
];

export const INITIAL_DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc1',
    title: 'GST invoice · Sri Amirtham',
    details: '₹1.58L · 5% GST · 14 Sep',
    amount: '₹1.58L',
    date: '14 Sep',
    type: 'invoice'
  },
  {
    id: 'doc2',
    title: 'Escrow statement',
    details: 'All movements to date',
    type: 'statement'
  },
  {
    id: 'doc3',
    title: 'TDS note · venue payment',
    details: 'Applies above ₹5L to one vendor',
    type: 'tax'
  },
  {
    id: 'doc4',
    title: 'Signed vendor contracts · 4',
    details: 'Countersigned by us',
    type: 'contract'
  }
];

export const INITIAL_BOOKING_DETAILS: BookingDetails = {
  vendorName: 'Leela Palace',
  eventType: 'Muhurtham',
  eventDate: '14 Feb 2027',
  guests: 420,
  quoteItems: [
    { label: 'Hall + dining, 6 am – 1 pm', amount: '₹7,20,000' },
    { label: 'Power backup, 200 parking', amount: 'Included', included: true },
    { label: 'Extra hours (2)', amount: '₹80,000' },
    { label: 'GST 18%', amount: '₹1,44,000' }
  ],
  totalINR: '₹9,44,000',
  totalUSD: '$11,235',
  savingsNote: '₹56,000 below their published rate — our negotiated rate for platform bookings.',
  approvals: [
    { person: 'Appa approved', time: '6:40 am IST' },
    { person: 'Amma approved', time: '6:52 am IST' }
  ],
  contractStatus: 'Contract countersigned by us.',
  escrowNote: '₹4.5L advance sits in escrow until the morning of the 14th.',
  progressChange: {
    from: 38,
    to: 50,
    unlockedReward: 'Your pre-wedding shoot is unlocked.'
  },
  relationshipManager: {
    name: 'Anand K.',
    role: 'relationship manager',
    languages: 'Tamil and English',
    hours: '9 am – 8 pm IST'
  }
};
