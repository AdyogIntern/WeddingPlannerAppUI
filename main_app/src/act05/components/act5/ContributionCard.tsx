import React from 'react';
import { Contribution } from '../../types/act5';
import { ContributionAvatar } from './ContributionAvatar';

interface ContributionCardProps {
  contribution: Contribution;
  onToggleReaction?: (emoji: string) => void;
}

export const ContributionCard: React.FC<ContributionCardProps> = ({
  contribution,
  onToggleReaction
}) => {
  return (
    <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs">
      <div className="flex items-start gap-3">
        <ContributionAvatar member={contribution.member} size="md" />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-[#231F20]">{contribution.member.name}</h4>
              <span className="text-[11px] font-medium text-[#681D2A] bg-[#F8ECEE] px-2 py-0.5 rounded-full inline-block mt-0.5">
                {contribution.member.role}
              </span>
            </div>
            <span className="text-xs text-[#98928B]">{contribution.timestamp}</span>
          </div>

          <p className="text-sm text-[#231F20] mt-2 font-medium leading-relaxed">
            {contribution.actionText}
          </p>

          {contribution.categoryName && (
            <span className="inline-block text-[10px] uppercase font-semibold tracking-wider text-[#68625D] mt-1">
              Category: {contribution.categoryName}
            </span>
          )}

          {/* Warm Family Reactions */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#EFE8D8]">
            {contribution.reactions.map((r) => (
              <button
                key={r.emoji}
                onClick={() => onToggleReaction && onToggleReaction(r.emoji)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                  r.reactedByMe
                    ? 'bg-[#FFF9EB] border-[#DFBA75] text-[#681D2A] shadow-xs'
                    : 'bg-[#FAF6F0] border-[#E6DFC8] text-[#68625D] hover:bg-white'
                }`}
              >
                <span>{r.emoji}</span>
                <span className="font-semibold">{r.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
