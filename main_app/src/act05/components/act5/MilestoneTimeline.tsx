import React from 'react';
import { Milestone } from '../../types/act5';
import { MilestoneCard } from './MilestoneCard';

interface MilestoneTimelineProps {
  milestones: Milestone[];
  currentPercentage: number;
  onRedeemReward?: (rewardId: string) => void;
}

export const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({
  milestones,
  currentPercentage,
  onRedeemReward
}) => {
  return (
    <div className="relative pl-6 space-y-6">
      {/* Vertical Connecting Line */}
      <div className="absolute top-4 bottom-8 left-2.5 w-0.5 bg-[#E8E2D9]" />

      {milestones.map((milestone) => {
        const isReached = currentPercentage >= milestone.percentageRequired;

        return (
          <div key={milestone.id} className="relative">
            {/* Timeline Node Dot */}
            <div 
              className={`absolute -left-6 top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 ${
                isReached 
                  ? 'bg-[#800020] border-[#D4AF37]' 
                  : 'bg-white border-[#E8E2D9]'
              }`}
            >
              {isReached && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>

            <MilestoneCard 
              milestone={milestone} 
              currentProgressPercentage={currentPercentage} 
              onRedeem={() => onRedeemReward && onRedeemReward(milestone.rewardId)}
            />
          </div>
        );
      })}
    </div>
  );
};
