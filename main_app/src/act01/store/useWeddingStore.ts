import { create } from 'zustand';
import { 
  AppScreen, 
  OnboardingData, 
  WeddingFunction, 
  Currency, 
  SlotStatus, 
  PlanVersion, 
  NudgeCard 
} from '../types';
import { 
  initialOnboardingData, 
  mockFunctions, 
  mockPlanVersions, 
  mockNudgeCards 
} from '../mock/weddingData';

// Currency exchange rates against INR (1 Unit = X INR)
export const currencyRates: Record<Currency, number> = {
  USD: 84.02,
  EUR: 91.50,
  GBP: 108.20,
  AED: 22.88,
  AUD: 55.40,
  CAD: 61.30,
};

interface WeddingStoreState {
  currentScreen: AppScreen;
  questionIndex: number; // 0..9 (Question 1 to 10)
  onboarding: OnboardingData;
  functions: WeddingFunction[];
  selectedFunctionId: string;
  weddingScore: number;
  currency: Currency;
  planVersions: { priya: PlanVersion; amma: PlanVersion };
  nudges: NudgeCard[];
  isGenerating: boolean;
  generatingProgress: number; // 0..100
  generatingStepText: string;

  // Actions
  setScreen: (screen: AppScreen) => void;
  setQuestionIndex: (index: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  updateOnboarding: (data: Partial<OnboardingData>) => void;
  setCurrency: (currency: Currency) => void;
  setSelectedFunctionId: (id: string) => void;
  updateSlotStatus: (functionId: string, slotId: string, status: SlotStatus) => void;
  reorderFunctions: (startIndex: number, endIndex: number) => void;
  removeFunction: (id: string) => void;
  addFunction: () => void;
  updateFunction: (id: string, data: Partial<WeddingFunction>) => void;
  mergeAgreedDecisions: () => void;
  startGeneratingBlueprint: () => void;
  setGeneratingProgress: (progress: number, text: string) => void;
  resetAll: () => void;
  
  // Computed helpers
  getTotalCostINR: () => number;
  getTotalCostInCurrency: () => number;
  getFilledSlotsCount: () => { filled: number; total: number };
}

export const useWeddingStore = create<WeddingStoreState>((set, get) => ({
  currentScreen: 'landing',
  questionIndex: 0,
  onboarding: initialOnboardingData,
  functions: mockFunctions,
  selectedFunctionId: 'f4', // Muhurtham by default
  weddingScore: 38,
  currency: '' as any,
  planVersions: mockPlanVersions,
  nudges: mockNudgeCards,
  isGenerating: false,
  generatingProgress: 0,
  generatingStepText: 'Creating Functions...',

  setScreen: (screen) => set({ currentScreen: screen }),

  setQuestionIndex: (index) => set({ questionIndex: Math.max(0, Math.min(6, index)) }),

  nextQuestion: () => {
    const { questionIndex, setScreen } = get();
    if (questionIndex < 6) {
      set({ questionIndex: questionIndex + 1 });
    } else {
      // After completing 7 questions, navigate to registration screen
      setScreen('registration');
    }
  },

  prevQuestion: () => {
    const { questionIndex } = get();
    if (questionIndex > 0) {
      set({ questionIndex: questionIndex - 1 });
    } else {
      set({ currentScreen: 'landing' });
    }
  },

  updateOnboarding: (data) => {
    const currentOnboarding = get().onboarding;
    const updated = { ...currentOnboarding, ...data };
    
    // Recalculate INR budget if raw input changed
    if (data.rawBudgetAmount || data.currency) {
      const rate = currencyRates[updated.currency] || 84.02;
      updated.budgetINR = Math.round(updated.rawBudgetAmount * rate);
    }

    set({ onboarding: updated });
  },

  setCurrency: (currency) => {
    const currentOnboarding = get().onboarding;
    const rate = currencyRates[currency] || 84.02;
    const updatedINR = Math.round(currentOnboarding.rawBudgetAmount * rate);
    
    set({ 
      currency,
      onboarding: { ...currentOnboarding, currency, budgetINR: updatedINR }
    });
  },

  setSelectedFunctionId: (id) => set({ selectedFunctionId: id }),

  updateSlotStatus: (functionId, slotId, newStatus) => {
    const functions = get().functions.map((fn) => {
      if (fn.id !== functionId) return fn;
      const updatedSlots = fn.slots.map((slot) => {
        if (slot.id === slotId) {
          return { ...slot, status: newStatus };
        }
        return slot;
      });
      return { ...fn, slots: updatedSlots };
    });

    set({ functions });
  },

  reorderFunctions: (startIndex, endIndex) => {
    const list = [...get().functions];
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    set({ functions: list });
  },

  removeFunction: (id) => {
    set({ functions: get().functions.filter(f => f.id !== id) });
  },

  addFunction: () => {
    const newFn = {
      id: `f${Date.now()}`,
      name: 'New Function (Mehendi, Dance etc.)',
      date: 'TBD',
      timeSlot: 'TBD',
      guests: 100,
      owner: 'TBD',
      estimatedCostINR: 100000,
      estimatedCostUSD: 1200,
      slots: [],
    };
    set({ functions: [...get().functions, newFn] });
  },

  updateFunction: (id, data) => {
    set({
      functions: get().functions.map(fn => fn.id === id ? { ...fn, ...data } : fn)
    });
  },

  mergeAgreedDecisions: () => {
    const currentVersions = get().planVersions;
    set({
      planVersions: {
        ...currentVersions,
        priya: { ...currentVersions.priya, agreedCount: 10 },
        amma: { ...currentVersions.amma, agreedCount: 10 },
      },
      weddingScore: 50,
    });
  },

  // Navigation actions
  goToRegistration: () => set({ currentScreen: 'registration' }),
  goToGenerating: () => set({ currentScreen: 'generating' }),
  goToVision: () => set({ currentScreen: 'generating' }),

  startGeneratingBlueprint: () => {
    set({ 
      currentScreen: 'generating', 
      isGenerating: true, 
      generatingProgress: 0,
      generatingStepText: 'Creating Functions...' 
    });
  },

  setGeneratingProgress: (progress, text) => {
    set({ generatingProgress: progress, generatingStepText: text });
  },

  resetAll: () => set({
    currentScreen: 'landing',
    questionIndex: 0,
    onboarding: initialOnboardingData,
    functions: mockFunctions,
    selectedFunctionId: 'f4',
    weddingScore: 38,
    currency: '' as any,
    planVersions: mockPlanVersions,
    isGenerating: false,
    generatingProgress: 0,
  }),

  getTotalCostINR: () => {
    return get().functions.reduce((sum, fn) => {
      return sum + fn.slots.reduce((slotSum, slot) => slotSum + slot.costINR, 0);
    }, 0);
  },

  getTotalCostInCurrency: () => {
    const totalINR = get().getTotalCostINR();
    const rate = currencyRates[get().currency] || 84.02;
    return Math.round(totalINR / rate);
  },

  getFilledSlotsCount: () => {
    let filled = 0;
    let total = 0;
    get().functions.forEach((fn) => {
      fn.slots.forEach((slot) => {
        total += 1;
        if (slot.status === 'booked' || slot.status === 'hold') {
          filled += 1;
        }
      });
    });
    return { filled, total };
  },
}));
