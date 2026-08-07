import React, { useState } from 'react';
import { Phone, CheckCircle2, Clock, Camera, Globe, ShieldCheck } from 'lucide-react';

interface Props {
  onOpenLiveStream?: () => void;
  onOpenGuests?: () => void;
  onOpenKeepsake?: () => void;
}

export const MuhurthamDayScreen: React.FC<Props> = ({
  onOpenLiveStream,
  onOpenGuests,
  onOpenKeepsake,
}) => {
  const [called, setCalled] = useState(false);

  const handleCall = () => {
    setCalled(true);
    setTimeout(() => setCalled(false), 3000);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Dark Top Banner Header */}
      <div className="bg-[#1E1815] text-white p-5 pt-6">
        <span className="text-[10px] font-mono-tag uppercase tracking-wider text-[#A89F91]">
          05:10 IST
        </span>
        <h1 className="font-serif-title text-[28px] leading-tight font-medium text-white tracking-tight mt-0.5">
          Muhurtham day
        </h1>
        <p className="text-[12.5px] leading-relaxed text-[#C2B8AA] mt-1 font-normal flex items-center gap-2">
          <span>Sun 14 Feb</span>
          <span>·</span>
          <span>your coordinator: Anand K.</span>
          <span>·</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
          <span className="text-[#34A853] font-semibold">live</span>
        </p>
      </div>

      <div className="p-5 space-y-3 flex-1">
        {/* Timeline Items */}
        <div className="space-y-2.5">
          {/* Item 1 */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
            <span className="font-mono-tag text-[12px] font-bold text-[#1F1A17] w-11 shrink-0 pt-0.5">
              04:30
            </span>
            <div className="flex-1">
              <h4 className="text-[13.5px] font-bold text-[#3D352E]">
                Decor team in · mandap build
              </h4>
              <p className="text-[11.5px] text-[#2E7D32] mt-0.5 font-medium flex items-center gap-1">
                <span>Done · 12 photos sent</span>
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
            <span className="font-mono-tag text-[12px] font-bold text-[#1F1A17] w-11 shrink-0 pt-0.5">
              05:00
            </span>
            <div className="flex-1">
              <h4 className="text-[13.5px] font-bold text-[#3D352E]">
                Nadaswaram arrives
              </h4>
              <p className="text-[11.5px] text-[#2E7D32] mt-0.5 font-medium">
                Done
              </p>
            </div>
          </div>

          {/* Item 3 (Happening Now - Maroon Border) */}
          <div className="bg-white rounded-2xl p-3.5 border-2 border-[#7A2232] flex items-start gap-3 relative shadow-xs">
            <span className="font-mono-tag text-[12px] font-bold text-[#7A2232] w-11 shrink-0 pt-0.5">
              05:15
            </span>
            <div className="flex-1">
              <h4 className="text-[13.5px] font-bold text-[#1F1A17]">
                Bridal makeup begins
              </h4>
              <p className="text-[11.5px] text-[#7A2232] mt-0.5 font-semibold">
                Happening now
              </p>
            </div>
          </div>

          {/* Item 4 - Clickable Live Stream */}
          <div 
            onClick={onOpenLiveStream}
            className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5] flex items-start gap-3 cursor-pointer hover:border-[#7A2232] transition-all group"
          >
            <span className="font-mono-tag text-[12px] font-bold text-[#1F1A17] w-11 shrink-0 pt-0.5">
              06:00
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-[13.5px] font-bold text-[#3D352E] group-hover:text-[#7A2232] transition-colors">
                  Live stream goes on air
                </h4>
                <span className="text-[10px] font-bold text-[#7A2232] bg-[#FAF0EC] px-2 py-0.5 rounded uppercase">
                  Open Stream →
                </span>
              </div>
              <p className="text-[11.5px] text-[#756D65] mt-0.5">
                42 guests joining from 6 countries
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
            <span className="font-mono-tag text-[12px] font-bold text-[#1F1A17] w-11 shrink-0 pt-0.5">
              06:34
            </span>
            <div className="flex-1">
              <h4 className="text-[13.5px] font-bold text-[#3D352E]">
                Lagnam begins · muhurtham
              </h4>
              <p className="text-[11.5px] text-[#756D65] mt-0.5">
                Purohit on site since 05:40
              </p>
            </div>
          </div>

          {/* Item 6 - Clickable Guests */}
          <div 
            onClick={onOpenGuests}
            className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5] flex items-start gap-3 cursor-pointer hover:border-[#7A2232] transition-all group"
          >
            <span className="font-mono-tag text-[12px] font-bold text-[#1F1A17] w-11 shrink-0 pt-0.5">
              09:00
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-[13.5px] font-bold text-[#3D352E] group-hover:text-[#7A2232] transition-colors">
                  Sappadu · 420 plates in two sittings
                </h4>
                <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded uppercase">
                  Guests →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Callout Box */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#3D352E] border border-[#EBE0D5]">
          <strong className="font-bold text-[#1F1A17]">One number for everything today.</strong> Anand is on site from 4 am. Nobody in your family has to chase a vendor.
        </div>

        {/* Escrow note card */}
        <div className="p-4 bg-white rounded-2xl border border-[#E8E0D5] text-[12.5px] leading-relaxed text-[#5C5248] flex items-center justify-between">
          <span>Escrow releases 48 hours after each function, once you confirm it went well.</span>
        </div>

        {/* Next Step Interconnect Banner */}
        {onOpenKeepsake && (
          <div className="p-4 bg-[#7A2232] text-white rounded-2xl space-y-2">
            <h4 className="font-bold text-[14px]">After the wedding...</h4>
            <p className="text-[12px] text-[#F3E2E5] leading-relaxed">
              620 guests attended, 6 functions completed. View vendor ratings & digital keepsake.
            </p>
            <button
              onClick={onOpenKeepsake}
              className="w-full py-2.5 px-3 bg-white text-[#7A2232] font-bold text-[12.5px] rounded-xl hover:bg-[#FAF7F2] transition-all text-center shadow-xs"
            >
              Open Keepsake Page (It Is Done) →
            </button>
          </div>
        )}
      </div>

      {/* Call toast */}
      {called && (
        <div className="mx-5 mb-3 p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center justify-between">
          <span>Calling Anand K. (+91 98410 •• •32)...</span>
        </div>
      )}

      {/* Fixed Bottom Actions */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2 space-y-2">
        {onOpenKeepsake && (
          <button 
            onClick={onOpenKeepsake}
            className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[14px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Step 13: Keepsake (It Is Done)</span>
            <span>→</span>
          </button>
        )}
        <button 
          onClick={handleCall}
          className="w-full py-2.5 px-4 bg-white text-[#7A2232] border border-[#7A2232]/40 font-medium text-[13px] rounded-xl hover:bg-[#FAF0EC] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          <span>Call Coordinator Anand</span>
        </button>
      </div>
    </div>
  );
};
