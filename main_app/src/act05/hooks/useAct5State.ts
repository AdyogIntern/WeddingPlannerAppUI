import { useState, useCallback, useMemo } from 'react';
import { 
  Wedding, 
  ProgressCategory, 
  Quest, 
  Milestone, 
  Reward, 
  Contribution, 
  ReferralSummary, 
  WeddingCountdown,
  Act5ScreenId
} from '../types/act5';

import {
  initialWedding,
  initialCategories,
  initialQuests,
  initialMilestones,
  initialRewards,
  initialContributions,
  initialReferralSummary,
  initialWeddingCountdown,
  initialFamilyMembers
} from '../data/act5MockData';

export function useAct5State() {
  // Primary Navigation
  const [currentScreen, setCurrentScreen] = useState<Act5ScreenId>('home');
  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null);
  const [selectedRewardId, setSelectedRewardId] = useState<string | null>(null);

  // App Data State
  const [categories, setCategories] = useState<ProgressCategory[]>(initialCategories);
  const [quests, setQuests] = useState<Quest[]>(initialQuests);
  const [rewards, setRewards] = useState<Reward[]>(initialRewards);
  const [contributions, setContributions] = useState<Contribution[]>(initialContributions);
  const [referrals, setReferrals] = useState<ReferralSummary>(initialReferralSummary);
  const [countdown, setCountdown] = useState<WeddingCountdown>(initialWeddingCountdown);

  // Toast / Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  }, []);

  // Recalculated Wedding Progress Stats
  const { totalDecisions, completedDecisions, overallPercentage } = useMemo(() => {
    let total = 0;
    let completed = 0;

    categories.forEach((cat) => {
      cat.decisions.forEach((dec) => {
        total += 1;
        if (dec.completed) {
          completed += 1;
        }
      });
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return {
      totalDecisions: total,
      completedDecisions: completed,
      overallPercentage: percentage
    };
  }, [categories]);

  // Derived Milestones with lock/unlock calculated from overall percentage
  const milestones: Milestone[] = useMemo(() => {
    return initialMilestones.map((m) => {
      const isUnlocked = overallPercentage >= m.percentageRequired;
      return {
        ...m,
        isUnlocked
      };
    });
  }, [overallPercentage]);

  // Sync rewards availability with milestone unlocking
  const activeRewards = useMemo(() => {
    return rewards.map((r) => {
      const isUnlockedByPercentage = overallPercentage >= r.unlockedAtPercentage;
      if (r.status === 'redeemed') return r;
      return {
        ...r,
        status: isUnlockedByPercentage ? ('available' as const) : ('locked' as const)
      };
    });
  }, [rewards, overallPercentage]);

  // Actions
  const navigateTo = useCallback((screen: Act5ScreenId, params?: { questId?: string; rewardId?: string }) => {
    if (params?.questId) setSelectedQuestId(params.questId);
    if (params?.rewardId) setSelectedRewardId(params.rewardId);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Toggle Decision Completion (Pure planning progress, zero money tied)
  const toggleDecision = useCallback((categoryId: string, decisionId: string) => {
    setCategories((prevCats) => {
      return prevCats.map((cat) => {
        if (cat.id !== categoryId) return cat;

        const updatedDecisions = cat.decisions.map((dec) => {
          if (dec.id !== decisionId) return dec;
          const nextCompleted = !dec.completed;
          return {
            ...dec,
            completed: nextCompleted,
            completedBy: nextCompleted ? 'Priya (You)' : undefined,
            completedAt: nextCompleted ? 'Just now' : undefined
          };
        });

        const completedCount = updatedDecisions.filter((d) => d.completed).length;
        const catTotal = updatedDecisions.length;
        const catPct = Math.round((completedCount / catTotal) * 100);
        const catStatus = catPct === 100 ? 'Completed' : catPct > 0 ? 'In Progress' : 'Not Started';

        return {
          ...cat,
          decisions: updatedDecisions,
          completedDecisions: completedCount,
          percentage: catPct,
          status: catStatus
        };
      });
    });

    showToast('Planning decision updated! Progress calculated.');
  }, [showToast]);

  // Complete a Family Quest
  const completeQuest = useCallback((questId: string) => {
    let questTitle = '';
    let assigneeName = '';

    setQuests((prevQuests) => {
      return prevQuests.map((q) => {
        if (q.id !== questId) return q;
        questTitle = q.title;
        assigneeName = q.assignedMember.name;
        return {
          ...q,
          status: 'completed',
          progress: q.maxProgress
        };
      });
    });

    // Add entry to Family Contribution Wall
    if (questTitle) {
      const newContribution: Contribution = {
        id: `c_gen_${Date.now()}`,
        member: initialFamilyMembers.priya,
        actionText: `✓ Completed quest: ${questTitle}`,
        timestamp: 'Just now',
        reactions: [
          { emoji: '👏', count: 1, reactedByMe: true },
          { emoji: '❤️', count: 1, reactedByMe: false }
        ]
      };
      setContributions((prev) => [newContribution, ...prev]);
    }

    showToast(`Quest "${questTitle || 'Item'}" completed! Family contribution recorded.`);
  }, [showToast]);

  // Redeem Reward
  const redeemReward = useCallback((rewardId: string) => {
    setRewards((prevRewards) => {
      return prevRewards.map((r) => {
        if (r.id !== rewardId) return r;
        return {
          ...r,
          status: 'redeemed'
        };
      });
    });
    showToast('Reward redeemed! Concierge details sent to family group.');
  }, [showToast]);

  // React to Contribution
  const toggleContributionReaction = useCallback((contributionId: string, emoji: string) => {
    setContributions((prevList) => {
      return prevList.map((c) => {
        if (c.id !== contributionId) return c;
        const updatedReactions = c.reactions.map((r) => {
          if (r.emoji !== emoji) return r;
          const nextReacted = !r.reactedByMe;
          return {
            ...r,
            reactedByMe: nextReacted,
            count: nextReacted ? r.count + 1 : Math.max(0, r.count - 1)
          };
        });
        return {
          ...c,
          reactions: updatedReactions
        };
      });
    });
  }, []);

  // Update Countdown Wedding Date
  const updateWeddingDate = useCallback((newDateISO: string) => {
    const today = new Date();
    const target = new Date(newDateISO);
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    setCountdown((prev) => ({
      ...prev,
      weddingDateISO: newDateISO,
      daysRemaining: diffDays
    }));
    showToast(`Wedding date updated to ${newDateISO}. Countdown recalibrated.`);
  }, [showToast]);

  const toggleCountdownPriority = useCallback((priorityId: string) => {
    setCountdown((prev) => ({
      ...prev,
      monthlyPriorities: prev.monthlyPriorities.map((p) => 
        p.id === priorityId ? { ...p, completed: !p.completed } : p
      )
    }));
  }, []);

  return {
    currentScreen,
    selectedQuestId,
    selectedRewardId,
    categories,
    quests,
    milestones,
    rewards: activeRewards,
    contributions,
    referrals,
    countdown,
    toastMessage,
    wedding: {
      ...initialWedding,
      overallCompleteness: overallPercentage,
      completedDecisionsCount: completedDecisions,
      totalDecisionsCount: totalDecisions
    },
    navigateTo,
    toggleDecision,
    completeQuest,
    redeemReward,
    toggleContributionReaction,
    updateWeddingDate,
    toggleCountdownPriority,
    showToast
  };
}
