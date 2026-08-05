import React, { useState } from 'react';
import { Share2, Gift, Send, Copy, CheckCircle, Smartphone, Mail, Users2, ArrowRight } from 'lucide-react';
import { ReferralSummary } from '../../types/act5';
import { PrimaryButton } from '../../components/act5/PrimaryButton';

interface ReferralsScreenProps {
  referrals: ReferralSummary;
  onCopyCode: () => void;
  onShowToast: (msg: string) => void;
}

export const ReferralsScreen: React.FC<ReferralsScreenProps> = ({
  referrals,
  onCopyCode,
  onShowToast
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(referrals.referralLink);
    setCopied(true);
    onShowToast(`Link copied: ${referrals.referralLink}`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Header - PDF Screen 37 */}
      <div className="bg-[#681D2A] text-white rounded-2xl p-5 shadow-sm space-y-3 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />

        <span className="text-[10px] uppercase font-bold tracking-widest text-[#F0D399]">
          REFERRAL NETWORK
        </span>
        
        <h2 className="text-lg font-bold font-serif leading-snug">
          Know someone else planning from abroad?
        </h2>

        <p className="text-xs text-white/90 leading-relaxed">
          They get <strong className="text-[#F0D399]">₹25,000 off</strong> their first booking. You get <strong className="text-[#F0D399]">₹25,000 back</strong> on yours, when theirs is confirmed.
        </p>

        {/* Link box */}
        <div className="bg-black/20 p-2.5 rounded-xl border border-white/20 flex items-center justify-between gap-2">
          <span className="text-xs font-mono text-[#F0D399] truncate">
            {referrals.referralLink}
          </span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-white hover:bg-[#FAF6F0] text-[#681D2A] text-xs font-bold rounded-lg shrink-0 transition-colors cursor-pointer flex items-center gap-1"
          >
            {copied ? <CheckCircle className="w-3.5 h-3.5 text-[#2D6A4F]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Stats Cards - 7 invited / 3 started / 1 booked (PDF Screen 37) */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-white p-3 rounded-xl border border-[#E6DFC8] shadow-2xs">
          <p className="text-xl font-bold font-serif text-[#231F20]">7</p>
          <p className="text-[10px] text-[#68625D] uppercase font-bold tracking-wider mt-0.5">invited</p>
        </div>

        <div className="bg-white p-3 rounded-xl border border-[#E6DFC8] shadow-2xs">
          <p className="text-xl font-bold font-serif text-[#681D2A]">3</p>
          <p className="text-[10px] text-[#68625D] uppercase font-bold tracking-wider mt-0.5">started Blueprint</p>
        </div>

        <div className="bg-[#E8F3ED] p-3 rounded-xl border border-[#2D6A4F]/30 shadow-2xs">
          <p className="text-xl font-bold font-serif text-[#2D6A4F]">1</p>
          <p className="text-[10px] text-[#2D6A4F] uppercase font-bold tracking-wider mt-0.5">booked</p>
        </div>
      </div>

      {/* Where to Share Section (PDF Screen 37) */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs space-y-3">
        <h3 className="text-xs font-bold text-[#681D2A] uppercase tracking-wider">
          Where to share
        </h3>

        <div className="space-y-2 text-xs">
          <button 
            onClick={handleCopy}
            className="w-full p-2.5 bg-[#FAF6F0] hover:bg-[#E6DFC8] rounded-xl flex items-center justify-between text-[#231F20] font-bold transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#E8F3ED] text-[#2D6A4F] flex items-center justify-center">
                💬
              </span>
              <span>Your family WhatsApp groups</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#98928B]" />
          </button>

          <button 
            onClick={handleCopy}
            className="w-full p-2.5 bg-[#FAF6F0] hover:bg-[#E6DFC8] rounded-xl flex items-center justify-between text-[#231F20] font-bold transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#FFF9EB] text-[#681D2A] flex items-center justify-center">
                🏛️
              </span>
              <span>Seattle Tamil Sangam group</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#98928B]" />
          </button>

          <button 
            onClick={handleCopy}
            className="w-full p-2.5 bg-[#FAF6F0] hover:bg-[#E6DFC8] rounded-xl flex items-center justify-between text-[#231F20] font-bold transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#FAF6F0] text-[#231F20] flex items-center justify-center">
                ✉️
              </span>
              <span>Email a friend directly</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#98928B]" />
          </button>
        </div>
      </div>

      {/* Referred by You List (PDF Screen 37) */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs space-y-3">
        <h3 className="text-xs font-bold text-[#68625D] uppercase tracking-wider">
          Referred by you
        </h3>

        <div className="space-y-2">
          {referrals.referralsList.map((ref) => (
            <div key={ref.id} className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E6DFC8]/60 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-[#231F20]">{ref.familyTitle}</p>
                <p className="text-[11px] text-[#68625D] mt-0.5">{ref.dateInvited}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                ref.status === 'Booked' ? 'bg-[#E8F3ED] text-[#2D6A4F]' : 'bg-[#FFF9EB] text-[#681D2A] border border-[#DFBA75]/30'
              }`}>
                {ref.status === 'Booked' ? '₹25,000 Credited' : 'In Progress'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <PrimaryButton
        onClick={handleCopy}
        icon={<Share2 className="w-4 h-4" />}
      >
        Share your link
      </PrimaryButton>
    </div>
  );
};
