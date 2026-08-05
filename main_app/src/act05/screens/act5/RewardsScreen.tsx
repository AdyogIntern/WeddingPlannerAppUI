import React, { useState } from 'react';
import { Gift, Wallet, CheckCircle2, Lock, Sparkles, Camera, ArrowRight, Share2, X, Eye } from 'lucide-react';
import { Milestone, Reward } from '../../types/act5';
import { PrimaryButton } from '../../components/act5/PrimaryButton';

interface RewardsScreenProps {
  milestones: Milestone[];
  rewards: Reward[];
  currentPercentage: number;
  onOpenWallet: () => void;
  onRedeemReward: (rewardId: string) => void;
}

export const RewardsScreen: React.FC<RewardsScreenProps> = ({
  milestones,
  rewards,
  currentPercentage,
  onOpenWallet,
  onRedeemReward
}) => {
  const [showUnlockModal, setShowUnlockModal] = useState<boolean>(false);
  const availableCount = rewards.filter((r) => r.status === 'available').length;

  return (
    <div className="space-y-4">
      {/* Header Banner - Screen 33 */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold font-serif text-[#231F20]">What you unlock</h2>
          <p className="text-xs text-[#68625D] mt-0.5">
            Real services, not points. Redeemable when you book here.
          </p>
        </div>

        <button
          onClick={onOpenWallet}
          className="px-3 py-1.5 bg-[#2D6A4F] hover:bg-[#1E513B] text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-xs transition-colors cursor-pointer shrink-0"
        >
          <Wallet className="w-3.5 h-3.5" />
          <span>Wallet ({availableCount})</span>
        </button>
      </div>

      {/* Button to view 50% Milestone Unlock Modal Preview (Screen 34) */}
      <button
        onClick={() => setShowUnlockModal(true)}
        className="w-full py-2.5 px-3 bg-[#FFF9EB] hover:bg-[#F8ECEE] border border-[#DFBA75]/50 rounded-xl text-xs text-[#681D2A] font-bold flex items-center justify-between transition-colors cursor-pointer shadow-2xs"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#681D2A]" />
          <span>Preview 50% Milestone Unlock Screen</span>
        </div>
        <span className="text-[10px] bg-[#681D2A] text-white px-2 py-0.5 rounded-full">
          Screen 34
        </span>
      </button>

      {/* Reward Ladder (PDF Screen 33) */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#681D2A]">
          Milestone Reward Ladder
        </h3>

        <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#E6DFC8]">
          {/* Item 1: 25% CLAIMED */}
          <div className="relative space-y-1">
            <span className="absolute -left-[22px] top-0 w-3 h-3 rounded-full bg-[#2D6A4F] ring-4 ring-white" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#231F20]">25% planned</span>
              <span className="text-[10px] font-bold bg-[#E8F3ED] text-[#2D6A4F] px-2 py-0.5 rounded-full">
                CLAIMED
              </span>
            </div>
            <p className="text-xs text-[#68625D] leading-relaxed">
              Complimentary mehendi artist for the bride, 3 hours.
            </p>
          </div>

          {/* Item 2: 50% planned */}
          <div className="relative space-y-1">
            <span className="absolute -left-[22px] top-0 w-3 h-3 rounded-full bg-[#681D2A] ring-4 ring-white" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#231F20]">50% planned</span>
              <span className="text-[10px] font-bold bg-[#FFF9EB] text-[#681D2A] border border-[#DFBA75]/50 px-2 py-0.5 rounded-full">
                12 POINTS AWAY
              </span>
            </div>
            <p className="text-xs text-[#231F20] font-semibold leading-relaxed">
              A pre-wedding shoot, on us.
            </p>
            <p className="text-xs text-[#68625D] leading-relaxed">
              Half-day session with any photographer on your shortlist. Worth about ₹45,000.
            </p>
          </div>

          {/* Item 3: 75% planned */}
          <div className="relative space-y-1">
            <span className="absolute -left-[22px] top-0 w-3 h-3 rounded-full bg-[#E6DFC8] ring-4 ring-white" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#98928B]">75% planned</span>
              <span className="text-[10px] font-semibold text-[#98928B]">LOCKED</span>
            </div>
            <p className="text-xs text-[#68625D] leading-relaxed">
              Upgraded return gifts for 100 guests or airport pickups for 20 arrivals — your choice.
            </p>
          </div>

          {/* Item 4: 100% planned */}
          <div className="relative space-y-1">
            <span className="absolute -left-[22px] top-0 w-3 h-3 rounded-full bg-[#E6DFC8] ring-4 ring-white" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#98928B]">100% planned</span>
              <span className="text-[10px] font-semibold text-[#98928B]">LOCKED</span>
            </div>
            <p className="text-xs text-[#68625D] leading-relaxed">
              A dedicated on-ground coordinator for all five days, and the live stream set up free.
            </p>
          </div>
        </div>
      </div>

      {/* Honest Version Callout Box (Screen 33) */}
      <div className="p-3 bg-[#FAF6F0] border border-[#E6DFC8] rounded-xl text-xs text-[#68625D] space-y-1">
        <p className="font-bold text-[#231F20]">The honest version:</p>
        <p className="leading-relaxed">
          These are paid for out of vendor commissions. A reward only applies to bookings made here. Nothing is added to your bill.
        </p>
      </div>

      <PrimaryButton
        onClick={onOpenWallet}
        icon={<Wallet className="w-4 h-4" />}
      >
        Open Reward Wallet
      </PrimaryButton>

      {/* PDF Screen 34: 06 · Milestone Unlock Modal */}
      {showUnlockModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#681D2A] text-white rounded-3xl p-5 max-w-sm w-full space-y-4 border border-[#DFBA75]/40 shadow-2xl relative overflow-hidden animate-fade-in">
            {/* Close Button */}
            <button 
              onClick={() => setShowUnlockModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Image Slot */}
            <div className="h-32 bg-black/30 rounded-2xl border border-white/20 flex flex-col items-center justify-center gap-1.5 text-center p-3">
              <Camera className="w-8 h-8 text-[#F0D399]" />
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#F0D399]">
                IMAGE SLOT · PRE-WEDDING SHOOT
              </span>
            </div>

            {/* Milestone Text */}
            <div className="text-center space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-0.5 rounded-full text-[#F0D399] border border-white/10">
                HALFWAY THERE
              </span>
              <h3 className="text-xl font-bold font-serif text-white pt-1">
                Your wedding is 50% planned.
              </h3>
              <p className="text-xs text-white/80 leading-relaxed max-w-xs mx-auto">
                Venue, catering and purohit are locked for all five functions — the hardest part is behind you.
              </p>
            </div>

            {/* Unlocked Reward Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A2E3C4] bg-[#2D6A4F] px-2 py-0.5 rounded-full">
                  UNLOCKED
                </span>
                <span className="text-[10px] text-[#F0D399]">50% Milestone</span>
              </div>
              <h4 className="text-sm font-bold text-white font-serif">
                A pre-wedding shoot, on us
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Half-day session with any photographer in your shortlist. Redeemable when you book through the platform.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1 text-center">
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-[#DFBA75]" />
              </div>
              <span className="text-[10px] text-[#F0D399]">50% • Next reward at 75%</span>
            </div>

            {/* Modal Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => {
                  setShowUnlockModal(false);
                  onOpenWallet();
                }}
                className="flex-1 py-2.5 bg-white text-[#681D2A] hover:bg-[#FAF6F0] text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                See what's next
              </button>
              <button
                onClick={() => {
                  alert('Shared milestone update with family!');
                  setShowUnlockModal(false);
                }}
                className="flex-1 py-2.5 bg-[#4A121D] border border-white/20 text-white hover:bg-black/30 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Tell the family</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
