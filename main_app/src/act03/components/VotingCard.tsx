import React from 'react';

export interface VotingOption {
  id: string;
  title: string;
  priceStudio: string;
  votesCount?: number;
  selected?: boolean;
}

interface VotingCardProps {
  option: VotingOption;
  onSelect?: () => void;
}

export const VotingCard: React.FC<VotingCardProps> = ({ option, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-2xl p-3.5 flex gap-3.5 items-start shadow-2xs cursor-pointer transition-all ${
        option.selected
          ? 'border-2 border-[#7B1D21]'
          : 'border border-[#E5E1D8] hover:border-[#7B1D21]/40'
      }`}
    >
      {/* Beige visual placeholder thumbnail */}
      <div className="w-16 h-16 rounded-xl bg-[#EFE7DC] border border-[#E4DCD0] flex-shrink-0" />

      {/* Details */}
      <div className="flex-1 min-w-0 pt-0.5">
        <h4 className="font-semibold text-[14px] text-[#2C2420] leading-snug">
          {option.title}
        </h4>
        <p className="text-[12px] text-[#867A6E] mt-0.5">
          {option.priceStudio}
        </p>

        {/* Votes display if any */}
        {option.votesCount !== undefined && option.votesCount > 0 && (
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex -space-x-1.5 overflow-hidden">
              {Array.from({ length: option.votesCount }).map((_, i) => (
                <div
                  key={i}
                  className="inline-block h-4 w-4 rounded-full bg-[#C8B99C] border border-white"
                />
              ))}
            </div>
            <span className="text-[11px] text-[#867A6E] font-medium ml-0.5">
              {option.votesCount} {option.votesCount === 1 ? 'vote' : 'votes'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
