import React, { useState } from 'react';
import { Star, Gift, ExternalLink, Heart, ChevronRight, CheckCircle2 } from 'lucide-react';

export const ItIsDoneScreen: React.FC = () => {
  const [showKeepsakeModal, setShowKeepsakeModal] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleOpenKeepsake = () => {
    setShowKeepsakeModal(true);
  };

  const handleRateVendors = () => {
    setToastMsg('Opening vendor rating form for 11 booked vendors...');
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="font-serif-title text-[32px] leading-tight font-medium text-[#1F1A17] tracking-tight">
          It is done
        </h1>
        <p className="text-[12.5px] leading-relaxed text-[#756D65] mt-1 font-normal">
          14 Feb 2027 · three days, six functions, 620 guests
        </p>
      </div>

      <div className="px-5 space-y-3.5 flex-1">
        {/* Photo Slot */}
        <div 
          onClick={handleOpenKeepsake}
          className="bg-[#ECE4D9] h-40 rounded-2xl flex flex-col items-center justify-center border border-[#E0D6C8] cursor-pointer hover:border-[#7A2232] transition-all group relative overflow-hidden"
        >
          <span className="font-mono-tag text-[11px] text-[#857B70] uppercase font-medium bg-white/60 px-3 py-1 rounded-full">
            IMAGE SLOT · THE MUHURTHAM
          </span>
          <span className="text-[10px] text-[#7A2232] font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to View Digital Keepsake Album →
          </span>
        </div>

        {/* Your Wedding In Numbers Card */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-2.5">
          <p className="font-mono-tag text-[10px] text-[#8A8075] uppercase tracking-wider font-semibold">
            YOUR WEDDING, IN NUMBERS
          </p>

          <div className="flex items-center justify-between text-[13.5px]">
            <span className="text-[#5C5248]">Final spend</span>
            <span className="font-bold text-[#1F1A17]">₹44.1L · $52,490</span>
          </div>

          <div className="flex items-center justify-between text-[13.5px]">
            <span className="text-[#5C5248]">Against your band</span>
            <span className="font-bold text-[#2E7D32]">₹50L — under</span>
          </div>

          <div className="flex items-center justify-between text-[13.5px]">
            <span className="text-[#5C5248]">Vendors booked here</span>
            <span className="font-bold text-[#1F1A17]">11 of 12</span>
          </div>

          <div className="flex items-center justify-between text-[13.5px]">
            <span className="text-[#5C5248]">Rewards used</span>
            <span className="font-bold text-[#1F1A17]">₹1.24L</span>
          </div>
        </div>

        {/* Action Card: Thank-you cards */}
        <div 
          onClick={() => {
            setToastMsg('Thank-you cards addressed to 620 guests sent to print queue.');
            setTimeout(() => setToastMsg(null), 3500);
          }}
          className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5] flex items-center gap-3 cursor-pointer hover:border-[#7A2232] transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-[#ECE4D9] shrink-0 flex items-center justify-center font-bold text-[#7A2232] text-xs">
            💌
          </div>
          <div className="flex-1">
            <h3 className="text-[14px] font-bold text-[#1F1A17]">
              Thank-you cards
            </h3>
            <p className="text-[11.5px] text-[#756D65] mt-0.5">
              Addressed from your guest list, printed and posted
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-[#8A8075]" />
        </div>

        {/* Action Card: Grihapravesham & honeymoon */}
        <div 
          onClick={() => {
            setToastMsg('Opening Grihapravesham checklist & itinerary...');
            setTimeout(() => setToastMsg(null), 3500);
          }}
          className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5] flex items-center gap-3 cursor-pointer hover:border-[#7A2232] transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-[#ECE4D9] shrink-0 flex items-center justify-center font-bold text-[#7A2232] text-xs">
            🏡
          </div>
          <div className="flex-1">
            <h3 className="text-[14px] font-bold text-[#1F1A17]">
              Grihapravesham & honeymoon
            </h3>
            <p className="text-[11.5px] text-[#756D65] mt-0.5">
              Two things still worth planning
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-[#8A8075]" />
        </div>

        {/* Maroon Review Callout Card */}
        <div 
          onClick={handleRateVendors}
          className="bg-[#7A2232] text-white rounded-2xl p-4.5 space-y-2 shadow-sm cursor-pointer hover:bg-[#5A1924] transition-all"
        >
          <h3 className="font-serif-title text-[20px] leading-tight font-normal">
            Rate your vendors — honestly.
          </h3>
          <p className="text-[12px] leading-relaxed text-[#F3E2E5] font-normal">
            Your review decides who the next family sees. Nine vendors have been removed because of reviews like yours.
          </p>
        </div>

        {/* Soft Referral Box */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#3D352E] border border-[#EBE0D5]">
          Refer a cousin and you both get ₹25,000. Most of our next 40 weddings will come from this screen.
        </div>
      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <div className="mx-5 mb-3 p-3 bg-[#1F1A17] text-white rounded-xl text-[12px] font-medium flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Fixed Bottom Action */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2">
        <button 
          onClick={handleOpenKeepsake}
          className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-medium text-[14px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm"
        >
          Open the keepsake page
        </button>
      </div>

      {/* Keepsake Modal Sheet */}
      {showKeepsakeModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] w-full max-w-md rounded-t-2xl sm:rounded-2xl p-5 border border-[#E8E0D5] shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-3">
              <div>
                <span className="text-[10px] font-mono-tag uppercase tracking-widest text-[#7A2232] font-bold">
                  DIGITAL KEEPSAKE ALBUM
                </span>
                <h2 className="font-serif-title text-[20px] font-bold text-[#1F1A17]">
                  Priya & Arjun's Muhurtham
                </h2>
              </div>
              <button 
                onClick={() => setShowKeepsakeModal(false)}
                className="text-xs font-bold text-[#7A2232] bg-[#FAF0EC] px-2.5 py-1 rounded-lg"
              >
                Close ✕
              </button>
            </div>

            <div className="bg-[#ECE4D9] h-48 rounded-xl flex items-center justify-center text-center p-4">
              <div>
                <Heart className="w-8 h-8 text-[#7A2232] mx-auto mb-2 fill-[#7A2232]/20" />
                <p className="text-[13px] font-bold text-[#1F1A17]">
                  620 Guests · 420 Meals Served · 100% On-Time Muhurtham
                </p>
                <p className="text-[11px] text-[#756D65] mt-1">
                  14 Feb 2027 · Mayor Ramanathan Hall, Chennai
                </p>
              </div>
            </div>

            <div className="space-y-2 text-[12.5px] text-[#5C5248]">
              <p className="font-bold text-[#1F1A17]">Keepsake Highlights:</p>
              <ul className="space-y-1.5 list-disc pl-4">
                <li>Complete 4K Live Stream Recording (4 hours 12 mins)</li>
                <li>Vendor Escrow Clearances & Ratings completed</li>
                <li>Digital Thank-You Note Dispatch sent to all 620 guests</li>
              </ul>
            </div>

            <button
              onClick={() => {
                setShowKeepsakeModal(false);
                setToastMsg('Keepsake link copied to clipboard!');
                setTimeout(() => setToastMsg(null), 3000);
              }}
              className="w-full py-3 bg-[#7A2232] text-white font-bold rounded-xl text-[13px] hover:bg-[#5A1924] transition-all"
            >
              Share Keepsake Link →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

