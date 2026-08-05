import React from 'react';
import { useAct5State } from '../hooks/useAct5State';
import { MobileFrame } from '../components/act5/MobileFrame';
import { ProgressHomeScreen } from '../screens/act5/ProgressHomeScreen';
import { ProgressDetailsScreen } from '../screens/act5/ProgressDetailsScreen';
import { QuestsScreen } from '../screens/act5/QuestsScreen';
import { QuestDetailsScreen } from '../screens/act5/QuestDetailsScreen';
import { RewardsScreen } from '../screens/act5/RewardsScreen';
import { RewardWalletScreen } from '../screens/act5/RewardWalletScreen';
import { RewardDetailsScreen } from '../screens/act5/RewardDetailsScreen';
import { ContributionsScreen } from '../screens/act5/ContributionsScreen';
import { ReferralsScreen } from '../screens/act5/ReferralsScreen';
import { CountdownScreen } from '../screens/act5/CountdownScreen';

export const Act5Navigator: React.FC = () => {
  const {
    currentScreen,
    selectedQuestId,
    selectedRewardId,
    categories,
    quests,
    milestones,
    rewards,
    contributions,
    referrals,
    countdown,
    toastMessage,
    wedding,
    navigateTo,
    toggleDecision,
    completeQuest,
    redeemReward,
    toggleContributionReaction,
    updateWeddingDate,
    toggleCountdownPriority,
    showToast
  } = useAct5State();

  // Screen Title Mapper
  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'home': return 'NRI Wedding Progress';
      case 'progress_details': return 'Planning Breakdown';
      case 'quests': return 'Family Quests';
      case 'quest_details': return 'Quest Details';
      case 'rewards': return 'Milestone Rewards';
      case 'reward_wallet': return 'Reward Wallet';
      case 'reward_details': return 'Reward Details';
      case 'contributions': return "Everyone's Hands";
      case 'referrals': return 'Refer a Family';
      case 'countdown': return 'The Road There';
      default: return 'NRI Wedding Progress';
    }
  };

  const handleBack = () => {
    switch (currentScreen) {
      case 'progress_details':
      case 'quests':
      case 'rewards':
      case 'contributions':
      case 'referrals':
      case 'countdown':
        navigateTo('home');
        break;
      case 'quest_details':
        navigateTo('quests');
        break;
      case 'reward_wallet':
      case 'reward_details':
        navigateTo('rewards');
        break;
      default:
        navigateTo('home');
    }
  };

  const handleSelectTab = (tab: 'home' | 'quests' | 'rewards' | 'wall' | 'more') => {
    if (tab === 'home') navigateTo('home');
    else if (tab === 'quests') navigateTo('quests');
    else if (tab === 'rewards') navigateTo('rewards');
    else if (tab === 'wall') navigateTo('contributions');
    else if (tab === 'more') navigateTo('countdown');
  };

  // Find active items for detail views
  const activeQuest = quests.find((q) => q.id === selectedQuestId) || quests[0];
  const activeReward = rewards.find((r) => r.id === selectedRewardId) || rewards[0];

  return (
    <MobileFrame
      currentScreen={currentScreen}
      screenTitle={getScreenTitle()}
      onBackPress={handleBack}
      onSelectTab={handleSelectTab}
      toastMessage={toastMessage}
    >
      {currentScreen === 'home' && (
        <ProgressHomeScreen
          wedding={wedding}
          categories={categories}
          quests={quests}
          milestones={milestones}
          onNavigate={(screen) => navigateTo(screen)}
          onCompleteQuest={completeQuest}
        />
      )}

      {currentScreen === 'progress_details' && (
        <ProgressDetailsScreen
          categories={categories}
          overallPercentage={wedding.overallCompleteness}
          completedDecisionsCount={wedding.completedDecisionsCount}
          totalDecisionsCount={wedding.totalDecisionsCount}
          onToggleDecision={toggleDecision}
        />
      )}

      {currentScreen === 'quests' && (
        <QuestsScreen
          quests={quests}
          onSelectQuest={(id) => navigateTo('quest_details', { questId: id })}
          onCompleteQuest={completeQuest}
        />
      )}

      {currentScreen === 'quest_details' && activeQuest && (
        <QuestDetailsScreen
          quest={activeQuest}
          onBack={() => navigateTo('quests')}
          onComplete={() => completeQuest(activeQuest.id)}
        />
      )}

      {currentScreen === 'rewards' && (
        <RewardsScreen
          milestones={milestones}
          rewards={rewards}
          currentPercentage={wedding.overallCompleteness}
          onOpenWallet={() => navigateTo('reward_wallet')}
          onRedeemReward={(id) => {
            redeemReward(id);
            navigateTo('reward_wallet');
          }}
        />
      )}

      {currentScreen === 'reward_wallet' && (
        <RewardWalletScreen
          rewards={rewards}
          onRedeemReward={redeemReward}
          onViewRewardDetails={(id) => navigateTo('reward_details', { rewardId: id })}
          onBack={() => navigateTo('rewards')}
        />
      )}

      {currentScreen === 'reward_details' && activeReward && (
        <RewardDetailsScreen
          reward={activeReward}
          onBack={() => navigateTo('reward_wallet')}
          onRedeem={() => redeemReward(activeReward.id)}
        />
      )}

      {currentScreen === 'contributions' && (
        <ContributionsScreen
          contributions={contributions}
          onToggleReaction={toggleContributionReaction}
        />
      )}

      {currentScreen === 'referrals' && (
        <ReferralsScreen
          referrals={referrals}
          onCopyCode={() => {
            navigator.clipboard?.writeText(referrals.referralCode);
            showToast(`Referral link ${referrals.referralLink} copied!`);
          }}
          onShowToast={showToast}
        />
      )}

      {currentScreen === 'countdown' && (
        <CountdownScreen
          countdown={countdown}
          onContinuePlanning={() => navigateTo('progress_details')}
          onTogglePriority={toggleCountdownPriority}
          onDateChange={updateWeddingDate}
          onShowToast={showToast}
        />
      )}
    </MobileFrame>
  );
};
