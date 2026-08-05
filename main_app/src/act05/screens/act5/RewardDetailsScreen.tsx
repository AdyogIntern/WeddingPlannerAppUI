import React from 'react';
import { ArrowLeft, Gift, ShieldCheck, Phone, Mail, User } from 'lucide-react';
import { Reward } from '../../types/act5';
import { StatusBadge } from '../../components/act5/StatusBadge';
import { PrimaryButton } from '../../components/act5/PrimaryButton';

interface RewardDetailsScreenProps {
  reward: Reward;
  onBack: () => void;
  onRedeem: () => void;
}

export const RewardDetailsScreen: React.FC<RewardDetailsScreenProps> = ({
  reward,
  onBack,
  onRedeem
}) => {
  const isAvailable = reward.status === 'available';
  const isRedeemed = reward.status === 'redeemed';

  return (
    <div className="space-y-4">
      <button 
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-semibold text-[#681D2A] hover:underline cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Wallet</span>
      </button>

      <div className="bg-white rounded-xl p-5 border border-[#E6DFC8] shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-bold text-[#681D2A]">
            {reward.serviceCategory}
          </span>
          <StatusBadge status={reward.status} />
        </div>

        <div>
          <h2 className="text-xl font-bold font-serif text-[#231F20]">{reward.title}</h2>
          <p className="text-sm text-[#68625D] mt-2 leading-relaxed">{reward.description}</p>
        </div>

        <div className="p-3 bg-[#FFF9EB] border border-[#DFBA75]/40 rounded-lg text-xs space-y-1">
          <p className="font-semibold text-[#681D2A]">Unlocked Requirement:</p>
          <p className="text-[#68625D]">Reached {reward.unlockedAtPercentage}% planning completeness.</p>
        </div>

        {reward.redemptionCode && (
          <div className="p-3 bg-[#FAF6F0] border border-[#E6DFC8] rounded-lg space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#98928B]">Redemption Voucher Code</span>
            <p className="text-sm font-mono font-bold text-[#681D2A]">{reward.redemptionCode}</p>
          </div>
        )}

        {reward.coordinatorContact && (
          <div className="p-4 bg-[#E8F3ED] rounded-xl border border-[#2D6A4F]/30 space-y-2">
            <h4 className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Assigned Wedding Concierge</span>
            </h4>
            <div className="text-xs text-[#231F20] space-y-1 font-medium">
              <p className="flex items-center gap-2"><User className="w-3.5 h-3.5 text-[#2D6A4F]" /> {reward.coordinatorContact.name}</p>
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#2D6A4F]" /> {reward.coordinatorContact.phone}</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#2D6A4F]" /> {reward.coordinatorContact.email}</p>
            </div>
          </div>
        )}

        {isAvailable && (
          <PrimaryButton onClick={onRedeem} icon={<Gift className="w-4 h-4" />}>
            Redeem Reward Now
          </PrimaryButton>
        )}

        {isRedeemed && (
          <div className="p-3 bg-[#E8F3ED] text-[#2D6A4F] text-xs font-bold text-center rounded-xl">
            Voucher Active & Service Confirmed
          </div>
        )}
      </div>
    </div>
  );
};
