import React from 'react';
import { Flower2, Camera, Gift, UserCheck, CheckCircle, Lock } from 'lucide-react';
import { Reward } from '../../types/act5';
import { StatusBadge } from './StatusBadge';

interface RewardCardProps {
  reward: Reward;
  onRedeem?: () => void;
  onViewDetails?: () => void;
}

const getRewardIcon = (iconName: string) => {
  switch (iconName) {
    case 'Flower2': return <Flower2 className="w-6 h-6 text-[#681D2A]" />;
    case 'Camera': return <Camera className="w-6 h-6 text-[#681D2A]" />;
    case 'Gift': return <Gift className="w-6 h-6 text-[#681D2A]" />;
    case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#681D2A]" />;
    default: return <Gift className="w-6 h-6 text-[#681D2A]" />;
  }
};

export const RewardCard: React.FC<RewardCardProps> = ({
  reward,
  onRedeem,
  onViewDetails
}) => {
  const isAvailable = reward.status === 'available';
  const isRedeemed = reward.status === 'redeemed';
  const isLocked = reward.status === 'locked';

  return (
    <div 
      className={`bg-white rounded-xl p-4 border transition-all ${
        isAvailable 
          ? 'border-[#DFBA75] shadow-sm' 
          : isRedeemed 
          ? 'border-[#2D6A4F]/30 bg-[#FBFDFB]' 
          : 'border-[#E6DFC8] opacity-80 bg-[#FAF6F0]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF9EB] border border-[#DFBA75]/40 flex items-center justify-center shrink-0">
            {getRewardIcon(reward.iconName)}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#681D2A]">
                {reward.serviceCategory}
              </span>
              <StatusBadge status={reward.status} />
            </div>

            <h4 className="text-base font-bold text-[#231F20]">{reward.title}</h4>
            <p className="text-xs text-[#68625D] mt-1 leading-relaxed">{reward.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#EFE8D8] flex items-center justify-between">
        <span className="text-xs text-[#98928B]">
          Unlocked at <strong className="text-[#681D2A]">{reward.unlockedAtPercentage}%</strong> planning progress
        </span>

        {isAvailable && onRedeem && (
          <button
            onClick={onRedeem}
            className="px-3.5 py-1.5 bg-[#681D2A] hover:bg-[#4A121D] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            Redeem Reward
          </button>
        )}

        {isRedeemed && (
          <div className="flex items-center gap-1 text-xs font-bold text-[#2D6A4F]">
            <CheckCircle className="w-4 h-4" />
            <span>Redeemed</span>
          </div>
        )}

        {isLocked && (
          <div className="flex items-center gap-1 text-xs text-[#68625D]">
            <Lock className="w-3.5 h-3.5" />
            <span>Locked</span>
          </div>
        )}
      </div>
    </div>
  );
};
