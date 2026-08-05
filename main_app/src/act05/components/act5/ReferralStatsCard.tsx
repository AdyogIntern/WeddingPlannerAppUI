import React from 'react';
import { Users, CalendarCheck, ShieldCheck, Share2, Copy } from 'lucide-react';
import { ReferralSummary } from '../../types/act5';

interface ReferralStatsCardProps {
  referrals: ReferralSummary;
  onShare?: () => void;
  onCopyCode?: () => void;
}

export const ReferralStatsCard: React.FC<ReferralStatsCardProps> = ({
  referrals,
  onShare,
  onCopyCode
}) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-[#E6DFC8] shadow-2xs space-y-4">
      {/* Overview Stat Grid */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-lg bg-[#FAF6F0] border border-[#E6DFC8]">
          <span className="block text-2xl font-bold font-serif text-[#231F20]">
            {referrals.invitedCount}
          </span>
          <span className="text-[11px] font-semibold text-[#68625D] uppercase tracking-wider">
            Invited
          </span>
        </div>

        <div className="p-3 rounded-lg bg-[#FFF9EB] border border-[#DFBA75]/50">
          <span className="block text-2xl font-bold font-serif text-[#681D2A]">
            {referrals.planningCount}
          </span>
          <span className="text-[11px] font-semibold text-[#681D2A] uppercase tracking-wider">
            Planning
          </span>
        </div>

        <div className="p-3 rounded-lg bg-[#E8F3ED] border border-[#2D6A4F]/40">
          <span className="block text-2xl font-bold font-serif text-[#2D6A4F]">
            {referrals.bookedCount}
          </span>
          <span className="text-[11px] font-semibold text-[#2D6A4F] uppercase tracking-wider">
            Booked
          </span>
        </div>
      </div>

      {/* Referral Reward Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#F8ECEE] to-[#FFF9EB] border border-[#DFBA75]/40 flex items-center justify-between">
        <div>
          <span className="text-xs text-[#681D2A] font-semibold uppercase tracking-wider">
            Referral Reward
          </span>
          <h4 className="text-2xl font-bold font-serif text-[#681D2A]">
            ₹{referrals.rewardAmountINR.toLocaleString('en-IN')}
          </h4>
          <p className="text-[11px] text-[#68625D] mt-0.5">
            Condition: {referrals.conditionText}
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-[#681D2A] text-white flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
      </div>

      {/* Code Share Strip */}
      <div className="pt-2 flex items-center gap-2">
        <div className="flex-1 p-2.5 bg-[#FAF6F0] border border-[#E6DFC8] rounded-lg flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-[#231F20]">
            {referrals.referralCode}
          </span>
          <button 
            onClick={onCopyCode}
            className="text-xs text-[#681D2A] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy</span>
          </button>
        </div>

        {onShare && (
          <button
            onClick={onShare}
            className="px-4 py-2.5 bg-[#681D2A] hover:bg-[#4A121D] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Invite</span>
          </button>
        )}
      </div>
    </div>
  );
};
