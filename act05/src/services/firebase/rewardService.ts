import { Reward, Milestone } from '../../types/act5';

/**
 * Service layer abstraction for Milestone Rewards & Wallet.
 * Firestore collection: `weddings/{weddingId}/rewards`
 */
export const rewardService = {
  async fetchRewards(weddingId: string): Promise<Reward[]> {
    console.log(`[Firebase Service] Fetching rewards for wedding: ${weddingId}`);
    return [];
  },

  async fetchMilestones(weddingId: string): Promise<Milestone[]> {
    console.log(`[Firebase Service] Fetching milestones for wedding: ${weddingId}`);
    return [];
  },

  async redeemReward(weddingId: string, rewardId: string): Promise<boolean> {
    console.log(`[Firebase Service] Redeeming reward ${rewardId} for wedding ${weddingId}`);
    return true;
  }
};
