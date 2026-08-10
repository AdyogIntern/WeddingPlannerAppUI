import React, { useEffect, useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, Clock, ShieldAlert, ArrowLeft, MessageSquarePlus, ChevronRight } from 'lucide-react';
import { AppHeader } from '../components/Header';
import { PrimaryButton, SecondaryButton } from '../components/reusable/Buttons';
import { EscrowItem, DisputeCase } from '../types';

interface Screen27Props {
  escrowItems: EscrowItem[];
  disputeCase: DisputeCase;
  onRaiseDispute: (vendor: string, amount: string) => void;
  onReleaseEscrow: (id: string) => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  onBack?: () => void;
  initialTab?: 'overview' | 'dispute';
}

export const Screen27_EscrowProtection: React.FC<Screen27Props> = ({
  escrowItems,
  disputeCase,
  onRaiseDispute,
  onReleaseEscrow,
  currency,
  onToggleCurrency,
  onBack,
  initialTab = 'overview'
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'dispute'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  const [releasedIds, setReleasedIds] = useState<string[]>([]);
  const [caseNoteAdded, setCaseNoteAdded] = useState(false);

  const handleRelease = (id: string) => {
    setReleasedIds((prev) => [...prev, id]);
    onReleaseEscrow(id);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 animate-fade-in">
      {/* App Header */}
      <AppHeader
        title={activeTab === 'overview' ? 'Held safely' : 'Issue raised'}
        subtitle={
          activeTab === 'overview'
            ? '₹22.1L in escrow · released only when you say so'
            : `${disputeCase.vendor} · ${disputeCase.category}`
        }
        headerMeta={activeTab === 'dispute' ? disputeCase.caseNumber : undefined}
        showBack={true}
        onBack={activeTab === 'dispute' ? () => setActiveTab('overview') : onBack}
        backLabel="Payments"
      />

      {activeTab === 'overview' ? (
        <div className="px-5 py-3 space-y-5">
          {/* Main Escrow Card 1 (Leela Palace) */}
          <div className="bg-white border border-[#EBE5DC] rounded-2xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[17px] text-[#1A1613]">
                Leela Palace · Venue
              </h3>
              <span className="font-semibold text-[17px] text-[#1A1613]">
                ₹8.4L
              </span>
            </div>

            {/* Stepper */}
            <div className="relative py-2 my-2">
              {/* Connecting Lines */}
              <div className="absolute top-[18px] left-6 right-6 h-[2px] bg-[#EBE5DC] -translate-y-1/2 z-0" />
              <div className="absolute top-[18px] left-6 w-[33%] h-[2px] bg-[#2A7E3B] -translate-y-1/2 z-0" />
              <div className="absolute top-[18px] left-[33%] w-[33%] h-[2px] bg-[#C5A059] -translate-y-1/2 z-0" />

              <div className="relative z-10 flex justify-between items-start">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-[#2A7E3B] text-white flex items-center justify-center text-[11px] font-bold shadow-2xs">
                    ✓
                  </div>
                  <span className="text-[11px] font-medium text-[#2C2621] mt-1.5">Paid in</span>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-[#2A7E3B] text-white flex items-center justify-center text-[11px] font-bold shadow-2xs">
                    ✓
                  </div>
                  <span className="text-[11px] font-medium text-[#2C2621] mt-1.5">Confirmed</span>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-[#C5A059] flex items-center justify-center shadow-2xs" />
                  <span className="text-[11px] font-medium text-[#7A716A] mt-1.5">Event day</span>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-[#D8D2C7] flex items-center justify-center shadow-2xs" />
                  <span className="text-[11px] font-medium text-[#8C827A] mt-1.5">Released</span>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[#EBE5DC]/80 my-4" />

            <p className="text-[13px] text-[#7A716A] leading-relaxed">
              The vendor sees the money is committed. It reaches them 48 hours after the function, once you or Appa confirm it went well.
            </p>
          </div>

          {/* Release Requested Card (Sri Amirtham Catering) */}
          <div className="bg-white border-2 border-[#C5A059] rounded-2xl p-5 shadow-2xs">
            <span className="text-[11px] font-semibold text-[#B38600] tracking-wider uppercase block mb-1.5">
              RELEASE REQUESTED
            </span>

            <h3 className="font-semibold text-[16px] text-[#1A1613] mb-2">
              Sri Amirtham Catering · ₹1.58L
            </h3>

            <p className="text-[13px] text-[#7A716A] mb-4 leading-relaxed">
              Menu tasting completed on video call, 14 Sep. They've asked for the advance to be released.
            </p>

            {releasedIds.includes('e2') ? (
              <div className="p-3 bg-[#F1F9F3] border border-[#C8E6C9] rounded-xl text-[13px] text-[#2A7E3B] font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Funds Released to Vendor
              </div>
            ) : (
              <div className="flex gap-2.5">
                <button
                  onClick={() => handleRelease('e2')}
                  className="flex-1 py-2.5 px-4 bg-[#7A1C31] text-white font-medium text-[14px] rounded-xl hover:bg-[#621627] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Release
                </button>
                <button
                  onClick={() => {
                    setActiveTab('dispute');
                    onRaiseDispute('Sri Amirtham Catering', '₹1.58L');
                  }}
                  className="flex-1 py-2.5 px-4 bg-white border border-[#D5CBC0] text-[#1A1613] font-medium text-[14px] rounded-xl hover:bg-[#F2ECE4] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Raise an issue
                </button>
              </div>
            )}
          </div>

          {/* If something goes wrong section */}
          <div>
            <h3 className="font-serif-title text-[20px] text-[#1A1613] font-normal mb-3 mt-4">
              If something goes wrong
            </h3>

            <div className="space-y-2.5">
              <div className="bg-white border border-[#EBE5DC] rounded-xl p-4 text-[13px] text-[#3D352E] font-normal leading-snug">
                Money stays with us until the dispute is settled — it never sits with the vendor.
              </div>
              <div className="bg-white border border-[#EBE5DC] rounded-xl p-4 text-[13px] text-[#3D352E] font-normal leading-snug">
                A named person from our team steps in within 24 hours, in your timezone.
              </div>
              <div className="bg-white border border-[#EBE5DC] rounded-xl p-4 text-[13px] text-[#3D352E] font-normal leading-snug">
                Every vendor here signs an SLA with penalty clauses. We've removed nine who broke them.
              </div>
            </div>
          </div>

          {/* Regulatory Footer Note */}
          <p className="text-[11px] text-[#8C827A] text-center leading-relaxed px-4 pt-4 pb-2">
            Escrow held with a licensed payment aggregator. FEMA–compliant for inbound NRE/NRO transfers.
          </p>
        </div>
      ) : (
        /* DISPUTE CASE VIEW (Case #4471) */
        <div className="px-5 py-3 space-y-5">
          {/* Gold Warning Held Box */}
          <div className="bg-[#FFFDF7] border-2 border-[#E3D1A6] rounded-3xl p-5 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#B38600] uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>{disputeCase.amountHeld}</span>
            </div>

            <p className="text-[13px] text-[#4A3B10] leading-relaxed font-medium">
              {disputeCase.reason}
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-[#EBE5DC] rounded-3xl p-5 space-y-4">
            <h4 className="text-[12px] font-semibold text-[#8C827A] uppercase tracking-wider">
              Dispute Resolution Timeline
            </h4>

            <div className="space-y-4 relative pl-2">
              {disputeCase.timeline.map((step, idx) => (
                <div key={step.id} className="flex items-start gap-3 relative">
                  {idx < disputeCase.timeline.length - 1 && (
                    <div className="absolute left-3.5 top-7 bottom-0 w-0.5 bg-[#EBE5DC]" />
                  )}

                  <div className="shrink-0 mt-0.5 z-10">
                    {step.completed ? (
                      <div className="w-7 h-7 rounded-full bg-[#2A7E3B] text-white flex items-center justify-center text-[12px] font-bold">
                        ✓
                      </div>
                    ) : step.active ? (
                      <div className="w-7 h-7 rounded-full bg-white border-2 border-[#B38600] flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#B38600]" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-white border-2 border-[#EBE5DC]" />
                    )}
                  </div>

                  <div>
                    <h5 className="text-[14px] font-semibold text-[#1A1613]">
                      {step.title}
                    </h5>
                    <p className="text-[12px] text-[#7A716A] mt-0.5">
                      {step.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What is on your side box */}
          <div className="bg-[#FAF7F2] border border-[#E8E2D9] rounded-2xl p-4">
            <span className="text-[11px] font-bold text-[#8C827A] uppercase tracking-wider block mb-2">
              WHAT IS ON YOUR SIDE
            </span>
            <p className="text-[13px] text-[#4A423B] leading-relaxed">
              A signed contract countersigned by us · the approved reference photos in the decision thread · a written record of every change request.
            </p>
          </div>

          {/* Testimonial Quote */}
          <div className="p-4 bg-[#F8EFF1] border border-[#E8D1D6] rounded-2xl text-[12px] text-[#5B1323] leading-relaxed italic">
            "One bad story on an NRI Facebook group is existential for this business. This screen is the insurance policy."
          </div>

          {caseNoteAdded && (
            <div className="p-3 bg-[#F1F9F3] border border-[#C8E6C9] rounded-xl text-[12px] text-[#2A7E3B] font-medium text-center">
              Photo evidence & note appended to Case #4471.
            </div>
          )}

          {/* Button */}
          <PrimaryButton
            onClick={() => setCaseNoteAdded(true)}
            icon={<MessageSquarePlus className="w-4 h-4" />}
          >
            Add to the case
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};
