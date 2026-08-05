import React from 'react';
import { Reward } from '../../types/act5';
import { RewardCard } from './RewardCard';

interface RewardWalletCardProps {
  availableRewards: Reward[];
  lockedRewards: Reward[];
  redeemedRewards: Reward[];
  onRedeemReward: (rewardId: string) => void;
  onViewRewardDetails: (rewardId: string) => void;
}

export const RewardWalletCard: React.FC<RewardWalletCardProps> = ({
  availableRewards,
  lockedRewards,
  redeemedRewards,
  onRedeemReward,
  onViewRewardDetails
}) => {
  return (
    <div className="space-y-6">
      {/* Available Rewards */}
      <div>
        <h3 className="text-sm font-bold text-[#681D2A] uppercase tracking-wider mb-3 flex items-center gap-2">
          <span>Available Rewards</span>
          <span className="bg-[#681D2A] text-white text-xs px-2 py-0.5 rounded-full font-sans">
            {availableRewards.length}
          </span>
        </h3>

        {availableRewards.length === 0 ? (
          <div className="p-6 text-center bg-white rounded-xl border border-[#E6DFC8]">
            <p className="text-sm text-[#68625D]">No available rewards right now.</p>
            <p className="text-xs text-[#98928B] mt-1">Keep completing planning decisions to unlock wedding benefits!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {availableRewards.map((reward) => (
              <RewardCard 
                key={reward.id} 
                reward={reward} 
                onRedeem={() => onRedeemReward(reward.id)}
                onViewDetails={() => onViewRewardDetails(reward.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Redeemed Rewards if any */}
      {redeemedRewards.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-[#2D6A4F] uppercase tracking-wider mb-3 flex items-center gap-2">
            <span>Redeemed Services</span>
            <span className="bg-[#2D6A4F] text-white text-xs px-2 py-0.5 rounded-full font-sans">
              {redeemedRewards.length}
            </span>
          </h3>
          <div className="space-y-3">
            {redeemedRewards.map((reward) => (
              <RewardCard 
                key={reward.id} 
                reward={reward} 
                onViewDetails={() => onViewRewardDetails(reward.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Locked Rewards */}
      <div>
        <h3 className="text-sm font-bold text-[#68625D] uppercase tracking-wider mb-3 flex items-center gap-2">
          <span>Locked Rewards</span>
          <span className="bg-[#E6DFC8] text-[#68625D] text-xs px-2 py-0.5 rounded-full font-sans">
            {lockedRewards.length}
          </span>
        </h3>

        <div className="space-y-3">
          {lockedRewards.map((reward) => (
            <RewardCard 
              key={reward.id} 
              reward={reward} 
              onViewDetails={() => onViewRewardDetails(reward.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
