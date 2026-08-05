import { Contribution } from '../../types/act5';

/**
 * Service layer abstraction for Family Contribution Wall.
 * Firestore collection: `weddings/{weddingId}/contributions`
 */
export const contributionService = {
  async fetchContributions(weddingId: string): Promise<Contribution[]> {
    console.log(`[Firebase Service] Fetching contributions for wedding: ${weddingId}`);
    return [];
  },

  async addReaction(weddingId: string, contributionId: string, emoji: string): Promise<boolean> {
    console.log(`[Firebase Service] Adding reaction ${emoji} to contribution ${contributionId}`);
    return true;
  }
};
