import React from 'react';
import { Flower2, Camera, Gift, UserCheck, Lock, Check } from 'lucide-react';
import { Milestone } from '../../types/act5';
import { StatusBadge } from './StatusBadge';

interface MilestoneCardProps {
  milestone: Milestone;
  currentProgressPercentage: number;
  onRedeem?: () => void;
}

const getMilestoneIcon = (iconName: string) => {
  switch (iconName) {
    case 'Flower2': return <Flower2 className="w-5 h-5" />;
    case 'Camera': return <Camera className="w-5 h-5" />;
    case 'Gift': return <Gift className="w-5 h-5" />;
    case 'UserCheck': return <UserCheck className="w-5 h-5" />;
    default: return <Gift className="w-5 h-5" />;
  }
};

export const MilestoneCard: React.FC<MilestoneCardProps> = ({
  milestone,
  currentProgressPercentage,
  onRedeem
}) => {
  const isUnlocked = milestone.isUnlocked;
  const needed = Math.max(0, milestone.percentageRequired - currentProgressPercentage);

  return (
    <div 
      className={`relative rounded-xl p-4 border transition-all ${
        isUnlocked 
          ? 'bg-white border-[#DFBA75] shadow-sm' 
          : 'bg-[#FAF6F0] border-[#E6DFC8] opacity-90'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div 
            className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white font-bold font-serif ${
              isUnlocked ? 'bg-[#681D2A]' : 'bg-[#98928B]'
            }`}
          >
            {getMilestoneIcon(milestone.iconName)}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#681D2A] uppercase tracking-wider">
                {milestone.percentageRequired}% Milestone
              </span>
              {isUnlocked ? (
                <StatusBadge status="available" customText="UNLOCKED" />
              ) : (
                <StatusBadge status="locked" customText="LOCKED" />
              )}
            </div>

            <h4 className="text-base font-bold text-[#231F20] mt-0.5">{milestone.title}</h4>
            <p className="text-xs text-[#68625D] mt-1 leading-relaxed">{milestone.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-[#EFE8D8] flex items-center justify-between">
        {isUnlocked ? (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2D6A4F]">
            <Check className="w-4 h-4" />
            <span>Unlocked & Available to Redeem</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-[#68625D]">
            <Lock className="w-3.5 h-3.5 text-[#98928B]" />
            <span>{needed}% more planning progress needed</span>
          </div>
        )}

        {isUnlocked && onRedeem && (
          <button
            onClick={onRedeem}
            className="px-3 py-1.5 bg-[#681D2A] hover:bg-[#4A121D] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Redeem in Wallet
          </button>
        )}
      </div>
    </div>
  );
};
