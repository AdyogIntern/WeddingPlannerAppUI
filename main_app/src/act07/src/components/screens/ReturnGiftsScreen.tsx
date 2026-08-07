import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

interface Props {
  onNavigateNext?: () => void;
}

export const ReturnGiftsScreen: React.FC<Props> = ({ onNavigateNext }) => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
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
          Return gifts
        </h1>
        <p className="text-[12.5px] leading-relaxed text-[#756D65] mt-1 font-normal">
          620 guests · 3 functions
        </p>
      </div>

      <div className="px-5 space-y-3.5 flex-1">
        {/* 2x2 Grid of Product Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Item 1 */}
          <div 
            onClick={() => setSelectedCard(0)}
            className={`bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all ${
              selectedCard === 0 ? 'border-2 border-[#7A2232]' : 'border-[#E8E0D5]'
            }`}
          >
            <div className="h-28 bg-[#ECE4D9]" />
            <div className="p-3">
              <h4 className="text-[13px] font-bold text-[#1F1A17] leading-snug">
                Silver kumkum box
              </h4>
              <p className="text-[11px] text-[#756D65] mt-1">
                ₹640 each · 420
              </p>
              <p className="text-[10px] font-semibold text-[#2E7D32] mt-1.5 leading-tight">
                Reward: upgrade unlocked at 75%
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div 
            onClick={() => setSelectedCard(1)}
            className={`bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all ${
              selectedCard === 1 ? 'border-2 border-[#7A2232]' : 'border-[#E8E0D5]'
            }`}
          >
            <div className="h-28 bg-[#ECE4D9]" />
            <div className="p-3">
              <h4 className="text-[13px] font-bold text-[#1F1A17] leading-snug">
                Brass diya set
              </h4>
              <p className="text-[11px] text-[#756D65] mt-1">
                ₹410 each
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div 
            onClick={() => setSelectedCard(2)}
            className={`bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all ${
              selectedCard === 2 ? 'border-2 border-[#7A2232]' : 'border-[#E8E0D5]'
            }`}
          >
            <div className="h-28 bg-[#ECE4D9]" />
            <div className="p-3">
              <h4 className="text-[13px] font-bold text-[#1F1A17] leading-snug">
                Thamboolam bags
              </h4>
              <p className="text-[11px] text-[#756D65] mt-1">
                ₹290 each · Sumangali
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div 
            onClick={() => setSelectedCard(3)}
            className={`bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all ${
              selectedCard === 3 ? 'border-2 border-[#7A2232]' : 'border-[#E8E0D5]'
            }`}
          >
            <div className="h-28 bg-[#ECE4D9]" />
            <div className="p-3">
              <h4 className="text-[13px] font-bold text-[#1F1A17] leading-snug">
                Welcome hamper
              </h4>
              <p className="text-[11px] text-[#756D65] mt-1">
                ₹1,150 · 62 travelling guests
              </p>
            </div>
          </div>
        </div>

        {/* Running total card */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] flex items-center justify-between">
          <div>
            <h4 className="text-[13.5px] font-bold text-[#1F1A17]">
              Running total
            </h4>
            <p className="text-[11px] font-semibold text-[#2E7D32] mt-0.5">
              ₹36,000 under the category budget
            </p>
          </div>
          <span className="font-bold text-[16px] text-[#1F1A17]">
            ₹3.84L
          </span>
        </div>

        {/* Soft Callout Box */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#3D352E] border border-[#EBE0D5]">
          Meera owns this category. She will spend three weeks on it and enjoy every minute — and it is ₹4L of commissionable spend you would otherwise never see.
        </div>
      </div>

      {sent && (
        <div className="mx-5 mb-3 p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>Sent return gift breakdown to Amma for approval via WhatsApp</span>
        </div>
      )}

      {/* Fixed Bottom Action */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2 space-y-2">
        <button 
          onClick={handleSend}
          className="w-full py-3 px-4 bg-[#7A2232] text-white font-medium text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm"
        >
          Send for Amma to approve
        </button>

        {onNavigateNext && (
          <button 
            onClick={onNavigateNext}
            className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Step 12: Muhurtham Day Timeline</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};
