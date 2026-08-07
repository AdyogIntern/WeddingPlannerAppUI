import React, { useState } from 'react';
import { Send, Check, Mail, MessageSquare, Printer } from 'lucide-react';

interface Props {
  onNavigateNext?: () => void;
}

export const InvitationScreen: React.FC<Props> = ({ onNavigateNext }) => {
  const [style, setStyle] = useState<'Traditional' | 'Kolam border' | 'Modern'>('Traditional');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="font-serif-title text-[28px] leading-tight font-medium text-[#1F1A17] tracking-tight">
          Invitation
        </h1>
        <p className="text-[12.5px] leading-relaxed text-[#756D65] mt-1 font-normal">
          Digital · print-ready · Tamil and English
        </p>
      </div>

      <div className="px-5 space-y-4 flex-1">
        {/* Invitation Preview Card */}
        <div className={`bg-white rounded-2xl p-6 border text-center shadow-xs space-y-3 transition-all ${
          style === 'Kolam border' 
            ? 'border-2 border-dashed border-[#7A2232]' 
            : style === 'Modern'
            ? 'border-2 border-[#332B25]'
            : 'border border-[#E8E0D5]'
        }`}>
          <p className="font-mono-tag text-[9.5px] uppercase tracking-widest text-[#8A8075]">
            WITH THE BLESSINGS OF OUR ELDERS
          </p>

          <h2 className="font-serif-title text-[30px] font-normal text-[#1F1A17] py-1">
            Priya & Arjun
          </h2>

          <div className="text-[12.5px] text-[#4A423A] space-y-1 font-medium">
            <p>Sunday, 14 February 2027</p>
            <p>Muhurtham 6:34 am</p>
            <p>The Leela Palace, Chennai</p>
          </div>

          <hr className="w-2/3 mx-auto border-[#E8E0D5] my-2" />

          <p className="text-[11.5px] text-[#756D65] font-normal">
            Three days of functions · full schedule inside
          </p>
        </div>

        {/* Style Selector Tabs */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setStyle('Traditional')}
            className={`py-2 px-2 text-[12px] font-medium rounded-xl border transition-all ${
              style === 'Traditional'
                ? 'bg-[#FAF0EC] text-[#7A2232] border-[#7A2232] font-semibold'
                : 'bg-white text-[#4A423A] border-[#E8E0D5]'
            }`}
          >
            Traditional
          </button>

          <button
            onClick={() => setStyle('Kolam border')}
            className={`py-2 px-2 text-[12px] font-medium rounded-xl border transition-all ${
              style === 'Kolam border'
                ? 'bg-[#FAF0EC] text-[#7A2232] border-[#7A2232] font-semibold'
                : 'bg-white text-[#4A423A] border-[#E8E0D5]'
            }`}
          >
            Kolam border
          </button>

          <button
            onClick={() => setStyle('Modern')}
            className={`py-2 px-2 text-[12px] font-medium rounded-xl border transition-all ${
              style === 'Modern'
                ? 'bg-[#FAF0EC] text-[#7A2232] border-[#7A2232] font-semibold'
                : 'bg-white text-[#4A423A] border-[#E8E0D5]'
            }`}
          >
            Modern
          </button>
        </div>

        {/* Card: Sends As */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-2.5">
          <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#8A8075] font-semibold">
            SENDS AS
          </p>

          <p className="text-[12.5px] text-[#3D352E] font-medium leading-relaxed">
            WhatsApp card with an RSVP button · 620 guests
          </p>

          <p className="text-[12.5px] text-[#3D352E] font-medium leading-relaxed">
            Email with calendar invites in six timezones
          </p>

          <p className="text-[12.5px] text-[#3D352E] font-medium leading-relaxed">
            Print file for 200 physical cards · ₹18,000
          </p>
        </div>

        {/* Soft Callout Box */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#3D352E] border border-[#EBE0D5]">
          The invitation carries the RSVP, which populates the guest list, which drives catering headcount. One artefact, three jobs.
        </div>
      </div>

      {sent && (
        <div className="mx-5 mb-3 p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>Dispatched WhatsApp RSVP cards & calendar invites to 620 guests</span>
        </div>
      )}

      {/* Fixed Bottom Action */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2 space-y-2">
        <button 
          onClick={handleSend}
          className="w-full py-3 px-4 bg-[#7A2232] text-white font-medium text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm"
        >
          Send to 620 guests
        </button>

        {onNavigateNext && (
          <button 
            onClick={onNavigateNext}
            className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Step 11: Return Gifts & Moi Ledger</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};
