import React, { useState } from 'react';
import { Video, Eye, ShieldAlert, Check } from 'lucide-react';

interface Props {
  onNavigateNext?: () => void;
}

export const ProxyInspectionScreen: React.FC<Props> = ({ onNavigateNext }) => {
  const [selectedInspection, setSelectedInspection] = useState<number>(1);
  const [booked, setBooked] = useState(false);

  const handleBookCall = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 3000);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="font-serif-title text-[28px] leading-tight font-medium text-[#1F1A17] tracking-tight">
          See it for yourself
        </h1>
        <p className="text-[12.5px] leading-relaxed text-[#756D65] mt-1 font-normal">
          Three ways to inspect a vendor without flying.
        </p>
      </div>

      <div className="px-5 space-y-3.5 flex-1">
        {/* Card 1: Recorded walkthrough */}
        <div 
          onClick={() => setSelectedInspection(0)}
          className={`bg-white rounded-2xl p-4 border cursor-pointer transition-all ${
            selectedInspection === 0 ? 'border-2 border-[#7A2232]' : 'border-[#E8E0D5]'
          }`}
        >
          <div className="flex items-start justify-between">
            <h3 className="text-[14px] font-bold text-[#1F1A17]">
              Recorded walkthrough
            </h3>
            <span className="text-[12px] font-semibold text-[#2E7D32]">
              Free
            </span>
          </div>
          <p className="text-[12px] text-[#60574E] leading-relaxed mt-1.5">
            The vendor films the hall, kitchen or studio to a checklist we set. Within 72 hours.
          </p>
        </div>

        {/* Card 2: Live video call, on site (Maroon Border) */}
        <div 
          onClick={() => setSelectedInspection(1)}
          className={`bg-white rounded-2xl p-4 border cursor-pointer transition-all ${
            selectedInspection === 1 ? 'border-2 border-[#7A2232] shadow-xs' : 'border-[#E8E0D5]'
          }`}
        >
          <div className="flex items-start justify-between">
            <h3 className="text-[14px] font-bold text-[#1F1A17]">
              Live video call, on site
            </h3>
            <span className="text-[13px] font-bold text-[#1F1A17]">
              ₹1,500
            </span>
          </div>
          <p className="text-[12px] text-[#60574E] leading-relaxed mt-1.5">
            You, Appa and the vendor, walking the venue together. Scheduled for your timezone.
          </p>

          <div className="flex flex-wrap gap-2 mt-3 pt-1">
            <span className="px-3 py-1.5 rounded-xl text-[11px] font-medium bg-[#F5ECE5] text-[#3D352E] border border-[#EBE0D5]">
              Tue 8:00 am PST
            </span>
            <span className="px-3 py-1.5 rounded-xl text-[11px] font-medium bg-white text-[#3D352E] border border-[#E8E0D5]">
              Wed 7:30 am
            </span>
            <span className="px-3 py-1.5 rounded-xl text-[11px] font-medium bg-white text-[#3D352E] border border-[#E8E0D5]">
              Sat 9:00 am
            </span>
          </div>
        </div>

        {/* Card 3: We go instead of you */}
        <div 
          onClick={() => setSelectedInspection(2)}
          className={`bg-white rounded-2xl p-4 border cursor-pointer transition-all ${
            selectedInspection === 2 ? 'border-2 border-[#7A2232]' : 'border-[#E8E0D5]'
          }`}
        >
          <div className="flex items-start justify-between">
            <h3 className="text-[14px] font-bold text-[#1F1A17]">
              We go instead of you
            </h3>
            <span className="text-[13px] font-bold text-[#1F1A17]">
              ₹4,500
            </span>
          </div>
          <p className="text-[12px] text-[#60574E] leading-relaxed mt-1.5">
            A named person from our team visits, photographs everything, and writes an honest report — including what's wrong with the place.
          </p>
        </div>

        {/* Section: Your last inspection */}
        <div className="space-y-2 pt-2">
          <h3 className="text-[15px] font-bold text-[#1F1A17]">
            Your last inspection
          </h3>

          <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECE4D9] shrink-0" />
              <div>
                <h4 className="text-[14px] font-bold text-[#1F1A17]">
                  Sri Amirtham kitchen
                </h4>
                <p className="text-[11.5px] text-[#756D65] mt-0.5">
                  Visited 06 Sep by Anand K.
                </p>
              </div>
            </div>

            <p className="text-[12px] italic text-[#3D352E] leading-relaxed bg-[#FAF7F2] p-3 rounded-xl border border-[#F0EAE1]">
              "Clean, FSSAI board displayed, separate vessels for no-onion-no-garlic. Their loading area is tight — if the mandapam has narrow access, ask about it."
            </p>

            <button className="text-[12px] font-bold text-[#7A2232] hover:underline">
              Read the full report · 14 photos
            </button>
          </div>
        </div>

        {/* Soft Callout Box */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#3D352E] border border-[#EBE0D5]">
          Reports go to your whole family, not just you — Appa can read it and form his own view.
        </div>
      </div>

      {booked && (
        <div className="mx-5 mb-3 p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>On-site video inspection booked for Tue 8:00 am PST!</span>
        </div>
      )}

      {/* Fixed Bottom Action */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2 space-y-2">
        <button 
          onClick={handleBookCall}
          className="w-full py-3 px-4 bg-[#7A2232] text-white font-medium text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm"
        >
          Book inspection
        </button>

        {onNavigateNext && (
          <button 
            onClick={onNavigateNext}
            className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Continue</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};
