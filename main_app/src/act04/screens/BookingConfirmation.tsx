import React, { useState } from 'react';
import { CheckCircle2, Share2, FileText, Send, Sparkles, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { AppHeader } from '../components/Header';
import { PrimaryButton, SecondaryButton } from '../components/reusable/Buttons';
import { DocumentCard } from '../components/reusable/Cards';
import { BookingDetails } from '../types';

interface Screen30Props {
  bookingDetails: BookingDetails;
  onSendToFamily: (recipient: string) => void;
  onPreviewDoc: (title: string, details: string) => void;
  onDownloadDoc: (title: string, details: string) => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  onBack?: () => void;
}

export const Screen30_BookingConfirmation: React.FC<Screen30Props> = ({
  bookingDetails,
  onSendToFamily,
  onPreviewDoc,
  onDownloadDoc,
  currency,
  onToggleCurrency,
  onBack
}) => {
  const [subView, setSubView] = useState<'quote' | 'pack'>('quote');

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 animate-fade-in">
      <AppHeader
        title={bookingDetails.vendorName}
        subtitle={
          subView === 'quote'
            ? `${bookingDetails.eventType} · ${bookingDetails.eventDate} · ${bookingDetails.guests} guests`
            : `Booked 16 Sep 2026 · ${bookingDetails.eventType}`
        }
        showBack={true}
        onBack={onBack}
        rightAction={
          <button
            onClick={() => onSendToFamily('Family')}
            className="text-[12px] font-medium text-[#7A1C31] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        }
      />

      {/* Subview Toggle Bar */}
      <div className="px-4 pt-2 pb-1">
        <div className="bg-[#EBE5DC]/70 p-1 rounded-xl flex text-[12px] font-medium">
          <button
            onClick={() => setSubView('quote')}
            className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${subView === 'quote'
              ? 'bg-white text-[#1A1613] font-semibold shadow-2xs'
              : 'text-[#7A716A] hover:text-[#1A1613]'
              }`}
          >
            Confirmation & Quote
          </button>
          <button
            onClick={() => setSubView('pack')}
            className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${subView === 'pack'
              ? 'bg-white text-[#1A1613] font-semibold shadow-2xs'
              : 'text-[#7A716A] hover:text-[#1A1613]'
              }`}
          >
            Contracts & Pack (5)
          </button>
        </div>
      </div>

      {subView === 'quote' ? (
        <div className="px-4 py-3 space-y-5">
          {/* Quote Card */}
          <div className="bg-white border border-[#EBE5DC] rounded-3xl p-5 shadow-2xs space-y-3">
            <span className="text-[10px] font-bold text-[#8C827A] uppercase tracking-wider block">
              THE QUOTE
            </span>

            <div className="space-y-2 text-[13px]">
              {bookingDetails.quoteItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-[#4A423B]">{item.label}</span>
                  <span className="font-medium text-[#1A1613]">{item.amount}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#EBE5DC] pt-3 mt-2">
              <div className="flex justify-between items-baseline">
                <span className="font-serif-title text-[20px] font-bold text-[#1A1613]">Total</span>
                <span className="font-serif-title text-[24px] font-bold text-[#1A1613]">
                  {currency === 'INR' ? bookingDetails.totalINR : bookingDetails.totalUSD}
                </span>
              </div>
              <p className="text-[11px] text-[#8C827A] text-right mt-0.5">
                ≈ {currency === 'INR' ? bookingDetails.totalUSD : bookingDetails.totalINR} · valid for 7 days
              </p>

              <div className="mt-3 p-3 bg-[#F1F9F3] border border-[#C8E6C9] rounded-xl text-[12px] text-[#2A7E3B] font-medium leading-relaxed">
                {bookingDetails.savingsNote}
              </div>
            </div>
          </div>

          {/* Family Approvals Card */}
          <div className="bg-white border border-[#EBE5DC] rounded-3xl p-4 shadow-2xs space-y-2">
            <span className="text-[10px] font-bold text-[#8C827A] uppercase tracking-wider block">
              APPROVALS
            </span>

            <div className="space-y-2">
              {bookingDetails.approvals.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[13px] text-[#1A1613]">
                  <div className="w-5 h-5 rounded-full bg-[#2A7E3B] text-white flex items-center justify-center text-[11px]">
                    ✓
                  </div>
                  <span className="font-medium">{app.person}</span>
                  <span className="text-[#8C827A] text-[12px]">· {app.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmed Maroon Box */}
          <div className="bg-[#7A1C31] text-white rounded-3xl p-5 shadow-md space-y-2">
            <span className="text-[10px] font-bold text-[#E8C2CA] uppercase tracking-wider bg-[#5B1323] px-2.5 py-0.5 rounded-full border border-[#8C233B]">
              CONFIRMED
            </span>

            <h3 className="font-serif-title text-[24px] font-normal leading-tight">
              Your {bookingDetails.vendorName.toLowerCase().includes('leela') ? 'venue' : bookingDetails.vendorName.toLowerCase().includes('cater') ? 'caterer' : bookingDetails.vendorName.toLowerCase().includes('studio') || bookingDetails.vendorName.toLowerCase().includes('photo') ? 'photographer' : 'decorator'} is booked.
            </h3>

            <p className="text-[13px] text-[#E8C2CA] leading-relaxed">
              {bookingDetails.contractStatus} {bookingDetails.escrowNote}
            </p>
          </div>

          {/* Progress Moved Card */}
          <div className="bg-white border border-[#EBE5DC] rounded-2xl p-4 text-[13px] text-[#4A423B] leading-relaxed flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F4EFEA] text-[#7A1C31] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              Progress moved <strong className="text-[#1A1613]">38% → 50%</strong>. {bookingDetails.progressChange.unlockedReward}
            </div>
          </div>
 
          <SecondaryButton onClick={() => setSubView('pack')}>
            Record
          </SecondaryButton>
 
          {/* CTA */}
          <PrimaryButton onClick={() => onSendToFamily('Family')}>
            Tell the family
          </PrimaryButton>
        </div>
      ) : (
        /* CONTRACTS & PACK VIEW */
        <div className="px-4 py-3 space-y-4">
          <DocumentCard
            title="Signed contract"
            details="Countersigned by us · 6 pages"
            onPreview={() => onPreviewDoc('Signed contract', 'Countersigned by us · 6 pages')}
            onDownload={() => onDownloadDoc('Signed contract', 'Countersigned by us · 6 pages')}
          />
          <DocumentCard
            title="Cancellation terms"
            details="Full refund until 14 Dec, 50% until 14 Jan"
            onPreview={() => onPreviewDoc('Cancellation terms', 'Full refund until 14 Dec')}
            onDownload={() => onDownloadDoc('Cancellation terms', 'Full refund until 14 Dec')}
          />
          <DocumentCard
            title="What is included"
            details="Hall, dining, 200 parking, power backup"
            onPreview={() => onPreviewDoc('What is included', 'Hall, dining, 200 parking')}
            onDownload={() => onDownloadDoc('What is included', 'Hall, dining, 200 parking')}
          />
          <DocumentCard
            title="Escrow receipt"
            details="₹4.5L held · release 16 Feb"
            onPreview={() => onPreviewDoc('Escrow receipt', '₹4.5L held · release 16 Feb')}
            onDownload={() => onDownloadDoc('Escrow receipt', '₹4.5L held · release 16 Feb')}
          />
          <DocumentCard
            title="GST invoice"
            details="₹1,44,000 · GSTIN on file"
            onPreview={() => onPreviewDoc('GST invoice', '₹1,44,000 · GSTIN on file')}
            onDownload={() => onDownloadDoc('GST invoice', '₹1,44,000 · GSTIN on file')}
          />

          {/* Your Contact on this booking */}
          <div className="bg-white border border-[#EBE5DC] rounded-2xl p-4">
            <span className="text-[10px] font-bold text-[#8C827A] uppercase tracking-wider block mb-2">
              YOUR CONTACT ON THIS BOOKING
            </span>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EBE5DC] flex items-center justify-center text-[#7A1C31] font-bold">
                AK
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-[#1A1613]">
                  {bookingDetails.relationshipManager.name} · {bookingDetails.relationshipManager.role}
                </h4>
                <p className="text-[11px] text-[#7A716A]">
                  {bookingDetails.relationshipManager.languages} · {bookingDetails.relationshipManager.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Platform Trust Argument Note */}
          <div className="p-4 bg-[#F4EFEA] border border-[#E8E2D9] rounded-2xl text-[12px] text-[#625952] leading-relaxed">
            Families who booked directly with a vendor have none of this — no countersigned contract, no escrow, no named person. That is the argument against going around the platform.
          </div>

          <PrimaryButton onClick={() => onSendToFamily('Appa')} icon={<Send className="w-4 h-4" />}>
            Send the pack to Appa
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};
