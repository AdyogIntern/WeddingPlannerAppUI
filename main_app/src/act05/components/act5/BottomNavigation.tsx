import React from 'react';
import { LayoutDashboard, Gift, Heart, Calendar } from 'lucide-react';
import { Act5ScreenId } from '../../types/act5';

interface BottomNavigationProps {
  currentScreen: Act5ScreenId;
  onSelectTab: (tab: 'home' | 'quests' | 'rewards' | 'wall' | 'more') => void;
  activeQuestsCount?: number;
  unlockedRewardsCount?: number;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentScreen,
  onSelectTab,
  activeQuestsCount = 3,
  unlockedRewardsCount = 2
}) => {
  const isProgressActive = currentScreen === 'home' || currentScreen === 'progress_details';
  const isQuestsActive = currentScreen === 'quests' || currentScreen === 'quest_details';
  const isRewardsActive = currentScreen === 'rewards' || currentScreen === 'reward_wallet' || currentScreen === 'reward_details';
  const isWallActive = currentScreen === 'contributions';
  const isMoreActive = currentScreen === 'referrals' || currentScreen === 'countdown';

  return (
    <div className="bg-white border-t border-[#E6DFC8] px-2 py-2 flex items-center justify-around shrink-0 z-30 shadow-lg select-none">
      {/* Progress Tab */}
      <button
        onClick={() => onSelectTab('home')}
        className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer py-1 px-2 rounded-lg ${
          isProgressActive ? 'text-[#681D2A]' : 'text-[#98928B] hover:text-[#68625D]'
        }`}
      >
        <LayoutDashboard className="w-4 h-4" />
        <span className="text-[10px] font-bold">Progress</span>
      </button>

      {/* Rewards Tab */}
      <button
        onClick={() => onSelectTab('rewards')}
        className={`relative flex flex-col items-center gap-0.5 transition-colors cursor-pointer py-1 px-2 rounded-lg ${
          isRewardsActive ? 'text-[#681D2A]' : 'text-[#98928B] hover:text-[#68625D]'
        }`}
      >
        <Gift className="w-4 h-4" />
        <span className="text-[10px] font-bold">Rewards</span>
        {unlockedRewardsCount > 0 && (
          <span className="absolute top-0.5 right-1.5 w-2 h-2 rounded-full bg-[#2D6A4F]" />
        )}
      </button>

      {/* Wall Tab */}
      <button
        onClick={() => onSelectTab('wall')}
        className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer py-1 px-2 rounded-lg ${
          isWallActive ? 'text-[#681D2A]' : 'text-[#98928B] hover:text-[#68625D]'
        }`}
      >
        <Heart className="w-4 h-4" />
        <span className="text-[10px] font-bold">Wall</span>
      </button>

      {/* Roadmap / Referrals & Countdown Tab */}
      <button
        onClick={() => onSelectTab('more')}
        className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer py-1 px-2 rounded-lg ${
          isMoreActive ? 'text-[#681D2A]' : 'text-[#98928B] hover:text-[#68625D]'
        }`}
      >
        <Calendar className="w-4 h-4" />
        <span className="text-[10px] font-bold">Roadmap</span>
      </button>
    </div>
  );
};
