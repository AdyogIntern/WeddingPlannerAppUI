import React, { useState } from 'react';
import { Info, ShieldAlert } from 'lucide-react';
import { ProgressCategory } from '../../types/act5';
import { ProgressCategoryCard } from '../../components/act5/ProgressCategoryCard';
import { ProgressBar } from '../../components/act5/ProgressBar';

interface ProgressDetailsScreenProps {
  categories: ProgressCategory[];
  overallPercentage: number;
  completedDecisionsCount: number;
  totalDecisionsCount: number;
  onToggleDecision: (categoryId: string, decisionId: string) => void;
}

export const ProgressDetailsScreen: React.FC<ProgressDetailsScreenProps> = ({
  categories,
  overallPercentage,
  completedDecisionsCount,
  totalDecisionsCount,
  onToggleDecision
}) => {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>('cat_venue');

  const toggleExpand = (catId: string) => {
    setExpandedCategoryId((prev) => (prev === catId ? null : catId));
  };

  return (
    <div className="space-y-4">
      {/* Overall Summary Card */}
      <div className="bg-white rounded-xl p-5 border border-[#E6DFC8] shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#681D2A]">
              Overall Wedding Progress
            </span>
            <h2 className="text-2xl font-bold font-serif text-[#231F20] mt-0.5">
              {overallPercentage}% Completed
            </h2>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-[#231F20]">
              {completedDecisionsCount} / {totalDecisionsCount}
            </span>
            <p className="text-[10px] text-[#68625D]">Decisions Done</p>
          </div>
        </div>

        <ProgressBar percentage={overallPercentage} height={10} color="#681D2A" backgroundColor="#E6DFC8" showMilestoneTicks={true} />

        {/* Essential Business Rule Banner */}
        <div className="p-3 bg-[#FFF9EB] border border-[#DFBA75]/50 rounded-lg flex items-start gap-2.5 text-xs text-[#68625D]">
          <Info className="w-4 h-4 text-[#681D2A] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-[#231F20]">How progress is calculated:</p>
            <p className="leading-relaxed">
              Every vendor decision contributes equally to your wedding progress regardless of vendor price. A <strong>₹3 Lakh decision</strong> and an <strong>₹8 Lakh decision</strong> carry identical progress weight once finalized.
            </p>
          </div>
        </div>
      </div>

      {/* Category Breakdown List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-[#68625D] uppercase tracking-wider">
          Planning Categories ({categories.length})
        </h3>

        {categories.map((category) => (
          <ProgressCategoryCard 
            key={category.id} 
            category={category} 
            isExpanded={expandedCategoryId === category.id}
            onPress={() => toggleExpand(category.id)}
            onToggleDecision={(decisionId) => onToggleDecision(category.id, decisionId)}
          />
        ))}
      </div>
    </div>
  );
};
