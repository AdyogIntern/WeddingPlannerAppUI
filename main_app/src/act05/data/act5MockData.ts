import { 
  FamilyMember, 
  ProgressCategory, 
  Quest, 
  Milestone, 
  Reward, 
  Contribution, 
  ReferralSummary, 
  WeddingCountdown,
  Wedding
} from '../types/act5';

export const initialFamilyMembers: Record<string, FamilyMember> = {
  priya: {
    id: 'priya',
    name: 'Priya',
    role: 'Bride',
    initials: 'P',
    location: 'San Francisco, CA'
  },
  arjun: {
    id: 'arjun',
    name: 'Arjun',
    role: 'Groom',
    initials: 'A',
    location: 'London, UK'
  },
  appa: {
    id: 'appa',
    name: 'Appa',
    role: 'Parent (Appa)',
    initials: 'RG',
    location: 'Chennai, India'
  },
  amma: {
    id: 'amma',
    name: 'Amma',
    role: 'Parent (Amma)',
    initials: 'A',
    location: 'Chennai, India'
  },
  meera: {
    id: 'meera',
    name: 'Meera',
    role: 'Sibling',
    initials: 'M',
    location: 'New York, NY'
  },
  patti: {
    id: 'patti',
    name: 'Patti',
    role: 'Grandparent',
    initials: 'P',
    location: 'Bengaluru, India'
  }
};

export const initialWedding: Wedding = {
  id: 'w1',
  coupleTitle: 'Priya & Arjun',
  nriLocation: 'San Francisco & London',
  destinationCity: 'Jaipur, Rajasthan',
  weddingDateISO: '2026-12-01',
  overallCompleteness: 38,
  completedDecisionsCount: 12,
  totalDecisionsCount: 31,
};

export const initialCategories: ProgressCategory[] = [
  {
    id: 'cat_venues',
    name: 'Venues',
    iconName: 'Building2',
    completedDecisions: 2,
    totalDecisions: 5,
    percentage: 40,
    status: 'In Progress',
    decisions: [
      { id: 'v1', title: 'Main Muhurtham Palace shortlisted', categoryId: 'cat_venues', completed: true, completedBy: 'Appa', completedAt: 'July 10' },
      { id: 'v2', title: 'Sangeet lawn reserved', categoryId: 'cat_venues', completed: true, completedBy: 'Appa', completedAt: 'July 18' },
      { id: 'v3', title: 'Backup indoor hall option', categoryId: 'cat_venues', completed: false },
      { id: 'v4', title: 'Mehendi courtyard layout', categoryId: 'cat_venues', completed: false },
      { id: 'v5', title: 'Final venue agreement locked', categoryId: 'cat_venues', completed: false },
    ]
  },
  {
    id: 'cat_food',
    name: 'Food & Catering',
    iconName: 'Utensils',
    completedDecisions: 4,
    totalDecisions: 5,
    percentage: 80,
    status: 'In Progress',
    decisions: [
      { id: 'c1', title: 'South Indian & North Indian fusion menu set', categoryId: 'cat_food', completed: true, completedBy: 'Amma' },
      { id: 'c2', title: 'Live chat & dessert counters selected', categoryId: 'cat_food', completed: true, completedBy: 'Amma' },
      { id: 'c3', title: 'Tasting menu approved', categoryId: 'cat_food', completed: true, completedBy: 'Appa' },
      { id: 'c4', title: 'Traditional sweet vendor finalized', categoryId: 'cat_food', completed: true, completedBy: 'Patti' },
      { id: 'c5', title: 'Final catering headcount contract', categoryId: 'cat_food', completed: false },
    ]
  },
  {
    id: 'cat_rituals',
    name: 'Rituals & Purohit',
    iconName: 'Flame',
    completedDecisions: 3,
    totalDecisions: 3,
    percentage: 100,
    status: 'Completed',
    decisions: [
      { id: 'r1', title: 'Auspicious Muhurtham timing (7:15 AM)', categoryId: 'cat_rituals', completed: true, completedBy: 'Patti' },
      { id: 'r2', title: 'Vadhyar / Priest team booked', categoryId: 'cat_rituals', completed: true, completedBy: 'Appa' },
      { id: 'r3', title: 'Essential Pooja items checklist locked', categoryId: 'cat_rituals', completed: true, completedBy: 'Amma' },
    ]
  },
  {
    id: 'cat_photo',
    name: 'Photography & Video',
    iconName: 'Camera',
    completedDecisions: 1,
    totalDecisions: 4,
    percentage: 30,
    status: 'In Progress',
    decisions: [
      { id: 'p1', title: 'Traditional + Candid style agreed', categoryId: 'cat_photo', completed: true, completedBy: 'Priya' },
      { id: 'p2', title: 'Shortlist top 3 photographers (Voting in progress)', categoryId: 'cat_photo', completed: false },
      { id: 'p3', title: 'Pre-wedding shoot concept & slot', categoryId: 'cat_photo', completed: false },
      { id: 'p4', title: 'Live stream & drone coverage package', categoryId: 'cat_photo', completed: false },
    ]
  },
  {
    id: 'cat_decor',
    name: 'Decor & Theme',
    iconName: 'Sparkles',
    completedDecisions: 1,
    totalDecisions: 5,
    percentage: 15,
    status: 'In Progress',
    decisions: [
      { id: 'd1', title: 'Rajasthani Heritage Mandap moodboard', categoryId: 'cat_decor', completed: true, completedBy: 'Priya' },
      { id: 'd2', title: 'Floral installations & color palette', categoryId: 'cat_decor', completed: false },
      { id: 'd3', title: 'Sangeet lighting setup', categoryId: 'cat_decor', completed: false },
      { id: 'd4', title: 'Seating arrangements & lounge style', categoryId: 'cat_decor', completed: false },
      { id: 'd5', title: 'Welcome arch design', categoryId: 'cat_decor', completed: false },
    ]
  },
  {
    id: 'cat_guests',
    name: 'Guests & Travel',
    iconName: 'Users',
    completedDecisions: 0,
    totalDecisions: 5,
    percentage: 0,
    status: 'Not Started',
    decisions: [
      { id: 'g1', title: 'Overseas NRI guest arrival list', categoryId: 'cat_guests', completed: false },
      { id: 'g2', title: 'Hotel room block allocations', categoryId: 'cat_guests', completed: false },
      { id: 'g3', title: 'Airport shuttle & cab schedules', categoryId: 'cat_guests', completed: false },
      { id: 'g4', title: 'RSVP & dietary preferences tracking', categoryId: 'cat_guests', completed: false },
      { id: 'g5', title: 'Welcome hamper distribution list', categoryId: 'cat_guests', completed: false },
    ]
  },
  {
    id: 'cat_outfits',
    name: 'Outfits & Jewellery',
    iconName: 'ShoppingBag',
    completedDecisions: 0,
    totalDecisions: 4,
    percentage: 0,
    status: 'Not Started',
    decisions: [
      { id: 'o1', title: 'Kanjeevaram Muhurtham Saree selection', categoryId: 'cat_outfits', completed: false },
      { id: 'o2', title: 'Groom Sherwani & Safa fitting', categoryId: 'cat_outfits', completed: false },
      { id: 'o3', title: 'Family matching outfit palette', categoryId: 'cat_outfits', completed: false },
      { id: 'o4', title: 'Jewellery vault & insurance prep', categoryId: 'cat_outfits', completed: false },
    ]
  }
];

export const initialQuests: Quest[] = [
  {
    id: 'q1',
    title: 'Get the family in',
    description: "Invite relatives who'll actually decide something.",
    assignedMember: initialFamilyMembers.priya,
    progress: 2,
    maxProgress: 3,
    status: 'in_progress',
    periodInfo: '2 of 3 joined',
    categoryId: 'cat_guests',
    rewardIncentive: 'Reward: Welcome kits for 40 overseas guests'
  },
  {
    id: 'q2',
    title: 'Lock the anchor',
    description: 'Confirm the Muhurtham venue — everything else flows from here.',
    assignedMember: initialFamilyMembers.appa,
    progress: 0,
    maxProgress: 1,
    status: 'in_progress',
    periodInfo: '0 of 1 locked',
    categoryId: 'cat_venues',
    rewardIncentive: 'Reward: Free 7-day hold on your second venue'
  },
  {
    id: 'q3',
    title: 'Settle a decision together',
    description: 'Cross two family votes with everyone having voted.',
    assignedMember: initialFamilyMembers.amma,
    progress: 1,
    maxProgress: 2,
    status: 'in_progress',
    periodInfo: '1 of 2 votes done',
    categoryId: 'cat_food',
    rewardIncentive: 'Reward: Upgraded thamboolam trays'
  },
  {
    id: 'q4',
    title: 'Know your rituals',
    description: 'Read the explainer for all five of your functions.',
    assignedMember: initialFamilyMembers.patti,
    progress: 1,
    maxProgress: 1,
    status: 'completed',
    periodInfo: 'Done',
    categoryId: 'cat_rituals',
    rewardIncentive: 'Verified'
  }
];

export const assignedToOthersQuests = [
  {
    id: 'ao1',
    member: initialFamilyMembers.meera,
    action: 'Shortlisted 3 mehendi artists',
    progressText: '2 of 3 shortlist',
    status: 'in_progress'
  },
  {
    id: 'ao2',
    member: initialFamilyMembers.appa,
    action: 'Approve the venue',
    progressText: 'Waiting on signature',
    status: 'waiting'
  }
];

export const initialMilestones: Milestone[] = [
  {
    id: 'm25',
    percentageRequired: 25,
    title: 'Complimentary Mehendi Artist',
    description: '3 hours bridal session with top Rajasthan artist.',
    iconName: 'Flower2',
    isUnlocked: true,
    rewardId: 'rew_mehendi'
  },
  {
    id: 'm50',
    percentageRequired: 50,
    title: 'Pre-Wedding Shoot, On Us',
    description: 'Half-day session with any photographer on your shortlist. Worth ~₹45,000.',
    iconName: 'Camera',
    isUnlocked: false,
    rewardId: 'rew_photoshoot'
  },
  {
    id: 'm75',
    percentageRequired: 75,
    title: 'Upgraded Return Gifts',
    description: 'Upgraded return gifts for 100 guests or airport pickups for 20 arrivals.',
    iconName: 'Gift',
    isUnlocked: false,
    rewardId: 'rew_gifts'
  },
  {
    id: 'm100',
    percentageRequired: 100,
    title: 'Dedicated On-Ground Coordinator',
    description: 'Dedicated coordinator for all 5 days + live stream setup free.',
    iconName: 'UserCheck',
    isUnlocked: false,
    rewardId: 'rew_coordinator'
  }
];

export const initialRewards: Reward[] = [
  {
    id: 'rew_mehendi',
    title: 'Mehendi artist · 3 hours',
    description: 'Complimentary mehendi artist for the bride, 3 hours. Ready to use.',
    unlockedAtPercentage: 25,
    status: 'available',
    iconName: 'Flower2',
    serviceCategory: 'Mehendi',
    redemptionCode: 'MEHENDI-25-PRIYA',
    redemptionTerms: 'Expires 14 Feb 2027. Apply directly to your Sangeet or Mehendi slot.',
    coordinatorContact: {
      name: 'Sunita Sharma (Wedding Concierge)',
      phone: '+91 98765 43210',
      email: 'concierge@nriwedding.com'
    }
  },
  {
    id: 'rew_referral',
    title: 'Referral credit: ₹25,000',
    description: 'Earned when Divya & Kartik booked their venue through the platform.',
    unlockedAtPercentage: 25,
    status: 'available',
    iconName: 'Gift',
    serviceCategory: 'Referral Bonus',
    redemptionCode: 'REF-DIVYA-25K'
  },
  {
    id: 'rew_photoshoot',
    title: 'Pre-wedding shoot, on us',
    description: 'Half-day session with any photographer in your shortlist. Worth about ₹45,000.',
    unlockedAtPercentage: 50,
    status: 'locked',
    iconName: 'Camera',
    serviceCategory: 'Photography & Film'
  },
  {
    id: 'rew_gifts',
    title: 'Upgraded return gifts or airport pickups',
    description: 'Upgraded return gifts for 100 guests or airport pickups for 20 arrivals — your choice.',
    unlockedAtPercentage: 75,
    status: 'locked',
    iconName: 'Gift',
    serviceCategory: 'Guest Care'
  },
  {
    id: 'rew_coordinator',
    title: 'Dedicated coordinator & free livestream',
    description: 'A dedicated on-ground coordinator for all five days, and live stream set up free.',
    unlockedAtPercentage: 100,
    status: 'locked',
    iconName: 'UserCheck',
    serviceCategory: 'Concierge & Media'
  }
];

export const initialContributions: Contribution[] = [
  {
    id: 'c1',
    member: initialFamilyMembers.meera,
    actionText: 'Shortlisted 12 vendors — owns Mehendi & Sangeet target. Brought Chithappa in.',
    timestamp: 'Today',
    categoryName: 'Mehendi & Sangeet',
    reactions: [
      { emoji: '❤️', count: 4, reactedByMe: true },
      { emoji: '👏', count: 3, reactedByMe: false }
    ]
  },
  {
    id: 'c2',
    member: initialFamilyMembers.appa,
    actionText: 'Approved catering and the purohit. Negotiated ₹40,000 off the mandapam.',
    timestamp: 'Yesterday',
    categoryName: 'Catering & Venue',
    reactions: [
      { emoji: '🙏', count: 5, reactedByMe: true },
      { emoji: '🎉', count: 4, reactedByMe: true }
    ]
  },
  {
    id: 'c3',
    member: initialFamilyMembers.amma,
    actionText: 'Shortlisted catering and the guest list. Settled the Sumangali Prarthanai menu.',
    timestamp: '2 days ago',
    categoryName: 'Food & Rituals',
    reactions: [
      { emoji: '😋', count: 4, reactedByMe: false },
      { emoji: '❤️', count: 2, reactedByMe: true }
    ]
  },
  {
    id: 'c4',
    member: initialFamilyMembers.patti,
    actionText: 'Reads everything. Reacted to 31 updates. Reminded us which mandap her mother used.',
    timestamp: '3 days ago',
    categoryName: 'Family Wisdom',
    reactions: [
      { emoji: '🌸', count: 6, reactedByMe: true },
      { emoji: '🙏', count: 5, reactedByMe: true }
    ]
  }
];

export const initialReferralSummary: ReferralSummary = {
  invitedCount: 7,
  planningCount: 3,
  bookedCount: 1,
  rewardAmountINR: 25000,
  conditionText: 'They get ₹25,000 off their first booking. You get ₹25,000 back on yours when confirmed.',
  referralCode: 'priya-a',
  referralLink: 'plan.example.in/priya-a',
  referralsList: [
    {
      id: 'ref1',
      familyTitle: 'Divya & Kartik, London',
      status: 'Booked',
      dateInvited: 'Booked their venue · ₹25,000 credited',
      rewardEligible: true
    },
    {
      id: 'ref2',
      familyTitle: 'Sharanya & Vivek, Singapore',
      status: 'Planning',
      dateInvited: 'Blueprint 44% done',
      rewardEligible: false
    }
  ]
};

export const initialWeddingCountdown: WeddingCountdown = {
  weddingDateISO: '2026-12-01',
  daysRemaining: 198,
  targetCity: 'Jaipur, Rajasthan',
  coupleName: 'Priya & Arjun',
  overallProgressPercentage: 38,
  monthlyPriorities: [
    { id: 'p1', title: '6 mo: Venue, catering, purohit locked (2 of 3 done)', completed: true },
    { id: 'p2', title: '5 mo: Save-the-dates and RSVP letters out', completed: true },
    { id: 'p3', title: '4 mo: Photography, decor, music confirmed', completed: false },
    { id: 'p4', title: '3 mo: Outfits ordered, hotel block reserved', completed: false },
    { id: 'p5', title: '1 mo: Final headcount, balances scheduled', completed: false },
    { id: 'p6', title: '12 d: You land. Fittings, tasting, rehearsal.', completed: false }
  ],
  nextImportantDecision: 'Photography, decor, music confirmed'
};
