import React, { useState } from 'react';
import { Check, Sparkles, AlertCircle, Info, ChevronRight, Calendar } from 'lucide-react';

interface Props {
  onSelectDate?: (date: string) => void;
  onAskPurohit?: () => void;
  onNavigateToRituals?: () => void;
  onNavigateToRunsheet?: () => void;
}

export const AuspiciousDatesScreen: React.FC<Props> = ({ 
  onSelectDate, 
  onAskPurohit,
  onNavigateToRituals,
  onNavigateToRunsheet
}) => {
  const [selectedRange, setSelectedRange] = useState('Nov 26 – Jun 27');
  const [selectedSampradaya, setSelectedSampradaya] = useState('Iyengar');
  const [selectedTime, setSelectedTime] = useState('Morning');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    setShowConfirmation(true);
    if (onAskPurohit) onAskPurohit();
    // Auto flow to next step (Rituals) after short confirmation toast
    setTimeout(() => {
      if (onNavigateToRituals) onNavigateToRituals();
    }, 1200);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Header Area */}
      <div className="px-5 pt-6 pb-4 bg-[#FAF7F2]">
        <h1 className="font-serif-title text-[28px] leading-tight font-medium text-[#1F1A17] tracking-tight">
          Auspicious dates
        </h1>
        <p className="text-[13px] leading-relaxed text-[#756D65] mt-1.5 font-normal">
          Panchangam, cross-checked against real venue availability.
        </p>
      </div>

      {/* Filter Pills Bar */}
      <div className="px-5 pb-5 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setSelectedRange('Nov 26 – Jun 27')}
          className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors whitespace-nowrap ${
            selectedRange === 'Nov 26 – Jun 27'
              ? 'bg-[#7A2232] text-white shadow-xs'
              : 'bg-white text-[#4A423A] border border-[#E8E0D5]'
          }`}
        >
          Nov 26 – Jun 27
        </button>
        <button
          onClick={() => setSelectedSampradaya('Iyengar')}
          className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors whitespace-nowrap ${
            selectedSampradaya === 'Iyengar'
              ? 'bg-[#FAF0EC] text-[#7A2232] border border-[#7A2232]'
              : 'bg-white text-[#4A423A] border border-[#E8E0D5]'
          }`}
        >
          Iyengar
        </button>
        <button
          onClick={() => setSelectedTime('Morning')}
          className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors whitespace-nowrap ${
            selectedTime === 'Morning'
              ? 'bg-[#FAF0EC] text-[#7A2232] border border-[#7A2232]'
              : 'bg-white text-[#4A423A] border border-[#E8E0D5]'
          }`}
        >
          Morning
        </button>
      </div>

      {/* Date Cards Stack */}
      <div className="px-5 flex-1 space-y-3.5">
        {/* Jathagam Matching & Porutham Summary Card (PDF Section 01) */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7A2232]" />
              <h3 className="font-bold text-[14px] text-[#1F1A17]">
                Jathagam Porutham & Horoscope Match
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E2F0D9] text-[#2E7D32]">
              10 / 10 MATCHED
            </span>
          </div>
          <p className="text-[11.5px] text-[#60574E] leading-relaxed">
            Patti & Purohit verified: Dina, Gana, Yoni, Rasi, Rajju & Vedha poruthams checked. Sevvai dosham nivarana pooja completed at Thirunageswaram.
          </p>
          <div className="flex items-center justify-between pt-1 border-t border-[#E8E0D5] text-[11px]">
            <span className="text-[#756D65]">Astrologer Video Call for NRIs</span>
            <span className="font-bold text-[#7A2232] cursor-pointer hover:underline">
              Book Call with Sastrigal →
            </span>
          </div>
        </div>

        {/* Card 1: Sun 14 Feb 2027 (STRONG) */}
        <div 
          onClick={() => onSelectDate && onSelectDate('14 Feb 2027')}
          className="bg-white rounded-2xl p-4 border-2 border-[#7A2232] shadow-xs relative cursor-pointer hover:shadow-md transition-all"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-[17px] font-bold text-[#1F1A17]">
              Sun 14 Feb 2027
            </h2>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E2F0D9] text-[#2E7D32]">
              STRONG
            </span>
          </div>

          <p className="text-[12px] leading-relaxed text-[#60574E] mt-1">
            Uthiram nakshatram · Shukla paksha · lagnam 6:34–8:12 am
          </p>

          <div className="flex flex-wrap gap-2 mt-3.5 pt-1">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F5ECE5] text-[#5C5248]">
              9 venues free
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F5ECE5] text-[#5C5248]">
              Long weekend in the US
            </span>
          </div>
        </div>

        {/* Card 2: Sun 21 Feb 2027 (Strong) */}
        <div 
          onClick={() => onSelectDate && onSelectDate('21 Feb 2027')}
          className="bg-white rounded-2xl p-4 border border-[#E8E0D5] relative cursor-pointer hover:border-[#B8AFA2] transition-all"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-[16px] font-bold text-[#1F1A17]">
              Sun 21 Feb 2027
            </h2>
            <span className="text-[12px] font-medium text-[#2E7D32]">
              Strong
            </span>
          </div>

          <p className="text-[12px] leading-relaxed text-[#60574E] mt-1">
            Rohini nakshatram · lagnam 7:02–9:40 am
          </p>

          <div className="flex flex-wrap gap-2 mt-3 pt-1">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F5ECE5] text-[#5C5248]">
              14 venues free
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F5ECE5] text-[#5C5248]">
              Cheaper — off-peak
            </span>
          </div>
        </div>

        {/* Card 3: Fri 05 Mar 2027 (Moderate) */}
        <div 
          onClick={() => onSelectDate && onSelectDate('05 Mar 2027')}
          className="bg-white rounded-2xl p-4 border border-[#E8E0D5] relative cursor-pointer hover:border-[#B8AFA2] transition-all"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-[16px] font-bold text-[#1F1A17]">
              Fri 05 Mar 2027
            </h2>
            <span className="text-[12px] font-medium text-[#B86E00]">
              Moderate
            </span>
          </div>

          <p className="text-[12px] leading-relaxed text-[#60574E] mt-1">
            Weekday — harder for overseas guests to attend
          </p>
        </div>

        {/* Card 4: Apr – mid May 2027 (Avoid) */}
        <div 
          onClick={() => onSelectDate && onSelectDate('Apr-May 2027')}
          className="bg-white rounded-2xl p-4 border border-[#E8E0D5] relative cursor-pointer hover:border-[#B8AFA2] transition-all"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-[16px] font-bold text-[#1F1A17]">
              Apr – mid May 2027
            </h2>
            <span className="text-[12px] font-medium text-[#C62828]">
              Avoid
            </span>
          </div>

          <p className="text-[12px] leading-relaxed text-[#60574E] mt-1">
            Aadi and the sunya masam period. Also 40°C in Chennai.
          </p>
        </div>

        <hr className="my-5 border-[#E8E0D5]" />

        {/* Cross-checked Section */}
        <div className="pt-1 pb-2">
          <h3 className="text-[15px] font-bold text-[#1F1A17]">
            Cross-checked with
          </h3>
          <ul className="mt-2.5 space-y-2 text-[12.5px] leading-relaxed text-[#5C5248]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2232] mt-1.5 shrink-0" />
              <span>Your family purohit's preferred sampradaya</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2232] mt-1.5 shrink-0" />
              <span>Live availability of your 3 shortlisted venues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2232] mt-1.5 shrink-0" />
              <span>School holidays in the US, UK and Singapore</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2232] mt-1.5 shrink-0" />
              <span>Chennai's peak-season pricing calendar</span>
            </li>
          </ul>
        </div>

        {/* Interconnect Quick Banners */}
        <div className="p-3.5 bg-[#FAF0EC] rounded-2xl border border-[#7A2232]/20 space-y-2 text-[12.5px]">
          <p className="font-bold text-[#7A2232]">
            Selected Date: Feb 14, 2027
          </p>
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <button
              onClick={onNavigateToRituals}
              className="py-2 px-2.5 bg-white text-[#7A2232] font-semibold border border-[#7A2232]/40 rounded-xl text-[11.5px] hover:bg-[#7A2232] hover:text-white transition-all text-center"
            >
              5 Rituals Explained →
            </button>
            <button
              onClick={onNavigateToRunsheet}
              className="py-2 px-2.5 bg-[#7A2232] text-white font-semibold rounded-xl text-[11.5px] hover:bg-[#5A1924] transition-all text-center"
            >
              Day Runsheet (Live) →
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal Toast */}
      {showConfirmation && (
        <div className="mx-5 mb-3 p-3.5 bg-[#E2F0D9] border border-[#A5D6A7] rounded-xl flex items-center justify-between text-[#2E7D32]">
          <div className="flex items-center gap-2 text-[12px] font-medium">
            <Check className="w-4 h-4 shrink-0" />
            <span>Sent date options & Panchangam report to your family purohit</span>
          </div>
          <button 
            onClick={() => setShowConfirmation(false)}
            className="text-[11px] underline font-semibold ml-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Fixed Footer Action */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2">
        <button 
          onClick={handleConfirm}
          className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-medium text-[14px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2"
        >
          Ask our purohit to confirm
        </button>
      </div>
    </div>
  );
};
