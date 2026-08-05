import { ProgressCategory, DecisionItem } from '../../types/act5';

/**
 * Service layer abstraction for Wedding Progress & Decisions.
 * Prepared for Firebase Firestore connection (`weddings/{weddingId}/progress`).
 */
export const progressService = {
  async fetchCategories(weddingId: string): Promise<ProgressCategory[]> {
    // Stubbed method - currently returns mock data or handles Firestore query
    console.log(`[Firebase Service] Fetching categories for wedding: ${weddingId}`);
    return [];
  },

  async toggleDecision(
    weddingId: string, 
    categoryId: string, 
    decisionId: string, 
    completed: boolean,
    memberName: string
  ): Promise<{ success: boolean; newPercentage: number }> {
    console.log(`[Firebase Service] Updating decision ${decisionId} to ${completed} by ${memberName}`);
    return { success: true, newPercentage: 38 };
  }
};
