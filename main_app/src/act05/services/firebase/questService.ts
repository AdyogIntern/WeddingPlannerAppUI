import { Quest, QuestStatus } from '../../types/act5';

/**
 * Service layer abstraction for Family Quests.
 * Firestore collection: `weddings/{weddingId}/quests`
 */
export const questService = {
  async fetchQuests(weddingId: string): Promise<Quest[]> {
    console.log(`[Firebase Service] Fetching quests for wedding: ${weddingId}`);
    return [];
  },

  async updateQuestStatus(weddingId: string, questId: string, status: QuestStatus): Promise<boolean> {
    console.log(`[Firebase Service] Updating quest ${questId} status to ${status}`);
    return true;
  }
};
