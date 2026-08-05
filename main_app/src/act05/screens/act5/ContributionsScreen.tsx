import React from 'react';
import { Heart, Users, Sparkles, Share2 } from 'lucide-react';
import { Contribution } from '../../types/act5';
import { ContributionCard } from '../../components/act5/ContributionCard';

interface ContributionsScreenProps {
  contributions: Contribution[];
  onToggleReaction: (contributionId: string, emoji: string) => void;
}

export const ContributionsScreen: React.FC<ContributionsScreenProps> = ({
  contributions,
  onToggleReaction
}) => {
  return (
    <div className="space-y-4">
      {/* Header - PDF Screen 36 */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F8ECEE] text-[#681D2A] flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 fill-[#681D2A]" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-serif text-[#231F20]">Everyone's hands</h2>
            <p className="text-xs text-[#68625D]">
              Recognition, not a scoreboard. No ranking, no points.
            </p>
          </div>
        </div>
      </div>

      {/* Contributions Cards List */}
      <div className="space-y-3">
        {contributions.map((contribution) => (
          <ContributionCard 
            key={contribution.id} 
            contribution={contribution} 
            onToggleReaction={(emoji) => onToggleReaction(contribution.id, emoji)}
          />
        ))}
      </div>

      {/* A Moment Worth Keeping Banner (PDF Screen 36) */}
      <div className="bg-[#681D2A] text-white rounded-2xl p-5 border border-[#DFBA75]/50 shadow-md space-y-3 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />

        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#F0D399]">
            A MOMENT WORTH KEEPING
          </span>
          <h3 className="text-sm font-bold font-serif text-white mt-1 leading-snug">
            Six people, four cities, eleven time zones apart — and the venue was settled in nine days.
          </h3>
        </div>

        <p className="text-xs text-white/80 leading-relaxed">
          We'll compile these into a keepsake page after the wedding.
        </p>

        <button
          onClick={() => alert('Wall link copied to share with family group!')}
          className="w-full py-2.5 bg-white hover:bg-[#FAF6F0] text-[#681D2A] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share this wall on the family group</span>
        </button>
      </div>
    </div>
  );
};
