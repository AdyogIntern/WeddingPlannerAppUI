import React from 'react';
import { Wallet, Sparkles, CheckCircle2, Gift, ArrowLeft, ArrowRight } from 'lucide-react';
import { Reward } from '../../types/act5';

interface RewardWalletScreenProps {
  rewards: Reward[];
  onRedeemReward: (rewardId: string) => void;
  onViewRewardDetails: (rewardId: string) => void;
  onBack: () => void;
}

export const RewardWalletScreen: React.FC<RewardWalletScreenProps> = ({
  rewards,
  onRedeemReward,
  onViewRewardDetails,
  onBack
}) => {
  return (
    <div className="space-y-4">
      {/* Header Banner - PDF Screen 35 */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-1 -ml-1 text-[#68625D] hover:text-[#231F20] cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold font-serif text-[#231F20]">Your rewards</h2>
            <p className="text-xs text-[#681D2A] font-bold">
              ₹1.24L of services earned so far
            </p>
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-[#E8F3ED] text-[#2D6A4F] flex items-center justify-center shrink-0">
          <Wallet className="w-5 h-5" />
        </div>
      </div>

      {/* Rewards Cards List */}
      <div className="space-y-3">
        {/* Card 1: Mehendi Artist */}
        <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#98928B]">
                IMAGE · MEHENDI
              </span>
              <h3 className="text-sm font-bold text-[#231F20] mt-0.5">Mehendi artist · 3 hours</h3>
              <p className="text-xs text-[#68625D] mt-0.5">
                Ready to use · expires 14 Feb 2027
              </p>
            </div>
            <span className="text-xs font-bold text-[#681D2A] bg-[#FFF9EB] px-2.5 py-1 rounded-full border border-[#DFBA75]/40">
              ₹18,000
            </span>
          </div>

          <button
            onClick={() => onRedeemReward('rew_mehendi')}
            className="w-full py-2 bg-[#681D2A] hover:bg-[#4A121D] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Apply to the Sangeet slot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: Referral Credit */}
        <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#E8F3ED] px-2 py-0.5 rounded-full">
                CREDIT UNLOCKED
              </span>
              <h3 className="text-sm font-bold text-[#231F20] mt-1">Referral credit: ₹25,000</h3>
              <p className="text-xs text-[#68625D] mt-0.5">
                When Divya & Kartik booking their venue
              </p>
            </div>
            <span className="text-xs font-bold text-[#2D6A4F] bg-[#E8F3ED] px-2.5 py-1 rounded-full">
              ₹25,000
            </span>
          </div>
        </div>

        {/* Card 3: Pre-wedding shoot */}
        <div className="bg-[#FAF6F0] rounded-xl p-4 border border-[#E6DFC8] space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#68625D]">Pre-wedding shoot</h3>
            <span className="text-[10px] font-semibold text-[#681D2A] bg-[#FFF9EB] px-2 py-0.5 rounded-full border border-[#DFBA75]/30">
              Unlocked 12 points away
            </span>
          </div>
          <p className="text-[11px] text-[#98928B]">
            Half-day session with any photographer on your shortlist. Worth about ₹45,000.
          </p>
        </div>
      </div>

      {/* How Redemption Works Section (PDF Screen 35) */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs space-y-3">
        <h3 className="text-xs font-bold text-[#681D2A] uppercase tracking-wider">
          How redemption works
        </h3>

        <div className="space-y-2.5 text-xs text-[#68625D]">
          <div className="flex items-start gap-2.5 p-2 bg-[#FAF6F0] rounded-lg">
            <span className="w-5 h-5 rounded-full bg-[#681D2A] text-white font-bold flex items-center justify-center text-[10px] shrink-0 font-serif">
              1
            </span>
            <p>Apply the reward to any open vendor slot</p>
          </div>

          <div className="flex items-start gap-2.5 p-2 bg-[#FAF6F0] rounded-lg">
            <span className="w-5 h-5 rounded-full bg-[#681D2A] text-white font-bold flex items-center justify-center text-[10px] shrink-0 font-serif">
              2
            </span>
            <p>Book that vendor through the platform</p>
          </div>

          <div className="flex items-start gap-2.5 p-2 bg-[#FAF6F0] rounded-lg">
            <span className="w-5 h-5 rounded-full bg-[#681D2A] text-white font-bold flex items-center justify-center text-[10px] shrink-0 font-serif">
              3
            </span>
            <p>We credit the vendor directly. It never appears on your invoice.</p>
          </div>
        </div>
      </div>

      {/* Footer Callout */}
      <div className="p-3 bg-[#FFF9EB] border border-[#DFBA75]/50 rounded-xl text-xs text-[#68625D] leading-relaxed">
        Rewards can be gifted to another family in your circle if you'd rather not use them.
      </div>
    </div>
  );
};
