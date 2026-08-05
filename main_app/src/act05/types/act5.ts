export type QuestStatus = 'not_started' | 'in_progress' | 'waiting' | 'completed';

export type RewardStatus = 'locked' | 'available' | 'redeemed';

export type RelationshipRole = 
  | 'Bride' 
  | 'Groom' 
  | 'Parent (Appa)' 
  | 'Parent (Amma)' 
  | 'Sibling' 
  | 'Grandparent' 
  | 'Relative' 
  | 'Family Member';

export interface FamilyMember {
  id: string;
  name: string;
  role: RelationshipRole;
  avatarUrl?: string;
  initials: string;
  location?: string;
}

export interface DecisionItem {
  id: string;
  title: string;
  categoryId: string;
  completed: boolean;
  completedBy?: string; // FamilyMember name
  completedAt?: string;
  notes?: string;
}

export interface ProgressCategory {
  id: string;
  name: string;
  iconName: string;
  completedDecisions: number;
  totalDecisions: number;
  percentage: number;
  status: 'Not Started' | 'In Progress' | 'Completed';
  decisions: DecisionItem[];
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  assignedMember: FamilyMember;
  progress: number;
  maxProgress: number;
  status: QuestStatus;
  periodInfo: string;
  categoryId?: string;
  rewardIncentive?: string; // Non-monetary collaboration milestone tag
}

export interface Milestone {
  id: string;
  percentageRequired: number;
  title: string;
  description: string;
  iconName: string;
  isUnlocked: boolean;
  rewardId: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  unlockedAtPercentage: number;
  status: RewardStatus;
  iconName: string;
  serviceCategory: string;
  redemptionCode?: string;
  redemptionTerms?: string;
  coordinatorContact?: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface Contribution {
  id: string;
  member: FamilyMember;
  actionText: string;
  timestamp: string;
  categoryName?: string;
  reactions: {
    emoji: string;
    count: number;
    reactedByMe?: boolean;
  }[];
}

export interface Referral {
  id: string;
  familyTitle: string;
  status: 'Invited' | 'Planning' | 'Booked';
  dateInvited: string;
  rewardEligible: boolean;
}

export interface ReferralSummary {
  invitedCount: number;
  planningCount: number;
  bookedCount: number;
  rewardAmountINR: number;
  conditionText: string;
  referralCode: string;
  referralLink: string;
  referralsList: Referral[];
}

export interface CountdownPriority {
  id: string;
  title: string;
  completed: boolean;
}

export interface WeddingCountdown {
  weddingDateISO: string; // e.g. 2026-12-01
  daysRemaining: number;
  targetCity: string;
  coupleName: string;
  overallProgressPercentage: number;
  monthlyPriorities: CountdownPriority[];
  nextImportantDecision: string;
}

export interface Wedding {
  id: string;
  coupleTitle: string; // e.g. "Priya & Arjun"
  nriLocation: string; // e.g. "San Francisco, USA"
  destinationCity: string; // e.g. "Jaipur, Rajasthan"
  weddingDateISO: string;
  overallCompleteness: number;
  completedDecisionsCount: number;
  totalDecisionsCount: number;
}

export type Act5ScreenId = 
  | 'home'
  | 'progress_details'
  | 'quests'
  | 'quest_details'
  | 'rewards'
  | 'reward_wallet'
  | 'reward_details'
  | 'contributions'
  | 'referrals'
  | 'countdown';
