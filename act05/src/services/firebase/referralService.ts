import { ReferralSummary } from '../../types/act5';

/**
 * Service layer abstraction for Family Referrals.
 * Firestore collection: `users/{userId}/referrals`
 */
export const referralService = {
  async fetchReferrals(userId: string): Promise<ReferralSummary | null> {
    console.log(`[Firebase Service] Fetching referrals for user: ${userId}`);
    return null;
  },

  async inviteFamily(userId: string, emailOrPhone: string): Promise<boolean> {
    console.log(`[Firebase Service] Sending referral invite to ${emailOrPhone}`);
    return true;
  }
};
