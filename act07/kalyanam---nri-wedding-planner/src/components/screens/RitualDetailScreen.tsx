import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, Check, Send, Share2 } from 'lucide-react';

interface Props {
  onBack?: () => void;
  onSendToPatti?: () => void;
  onViewRunsheet?: () => void;
}

export const RitualDetailScreen: React.FC<Props> = ({ onBack, onSendToPatti, onViewRunsheet }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [inBlueprint, setInBlueprint] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSendToPatti = () => {
    setToastMessage("Sent voice note & ritual summary to Patti via WhatsApp");
    setTimeout(() => setToastMessage(null), 3000);
    if (onSendToPatti) onSendToPatti();
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Top Bar with Audio Header */}
      <div className="px-4 py-3 bg-[#ECE4D9] flex items-center justify-between border-b border-[#E0D6C8]">
        <button 
          onClick={onBack} 
          className="p-1 rounded-full hover:bg-[#E0D6C8] transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-[#3D352E]" />
        </button>

        {/* Audio Player Strip */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#D8CEBF] text-[11px] font-mono-tag uppercase text-[#5A5046]"
        >
          {isPlaying ? (
            <Pause className="w-3 h-3 fill-[#7A2232] text-[#7A2232]" />
          ) : (
            <Play className="w-3 h-3 fill-[#7A2232] text-[#7A2232]" />
          )}
          <span>MR. SUNDARAM - 3:48</span>
        </button>

        <button onClick={handleSendToPatti} className="p-1 text-[#3D352E]">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      <div className="p-5 flex-1 space-y-4">
        {/* Sub-header label */}
        <p className="text-[13px] text-[#756D65] font-normal">
          Day one · afternoon
        </p>

        {/* Main Title */}
        <h1 className="font-serif-title text-[30px] leading-tight font-medium text-[#1F1A17] -mt-1">
          Panda Kaal Muhurtham
        </h1>

        {/* Lead Paragraph */}
        <p className="text-[13.5px] leading-relaxed text-[#3D352E]">
          The first pole of the wedding pandal is planted and worshipped. It marks the moment the wedding formally begins — from here, the family doesn't travel and the house isn't left empty.
        </p>

        {/* Key-Value Details Table */}
        <div className="pt-2 space-y-3.5 text-[13px]">
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-2 border-b border-[#E8E0D5]/70 pb-3">
            <span className="col-span-3 text-[#756D65] font-medium">Who</span>
            <span className="col-span-9 text-[#1F1A17]">
              Bride's father and mother, purohit, close family. About 60 people.
            </span>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 gap-2 border-b border-[#E8E0D5]/70 pb-3">
            <span className="col-span-3 text-[#756D65] font-medium">How long</span>
            <span className="col-span-9 text-[#1F1A17]">
              An hour, usually late afternoon.
            </span>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 gap-2 border-b border-[#E8E0D5]/70 pb-3">
            <span className="col-span-3 text-[#756D65] font-medium">You'll need</span>
            <span className="col-span-9 text-[#1F1A17]">
              Purohit, samagri kit, a bamboo pole, banana stems, nadaswaram if you want it.
            </span>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-12 gap-2 border-b border-[#E8E0D5]/70 pb-3">
            <span className="col-span-3 text-[#756D65] font-medium">Typical cost</span>
            <span className="col-span-9 text-[#1F1A17]">
              <strong className="font-bold">₹35,000 – ₹60,000</strong> all in
            </span>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-12 gap-2 pb-1">
            <span className="col-span-3 text-[#756D65] font-medium">Optional?</span>
            <span className="col-span-9 text-[#1F1A17]">
              Some families skip it. Iyengar families usually don't.
            </span>
          </div>
        </div>

        {/* Overseas Callout Box */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#3D352E] mt-3 border border-[#EBE0D5]">
          <p>
            <strong className="font-bold text-[#1F1A17]">If you're overseas:</strong> this happens two days before the muhurtham, so you must have landed. Don't book a flight that arrives on day one.
          </p>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="mx-5 mb-3 p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Bottom Sticky Action Row */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2 flex items-center gap-2.5">
        <button
          onClick={() => setInBlueprint(!inBlueprint)}
          className={`flex-1 py-3 px-3 text-[13px] font-medium rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 ${
            inBlueprint
              ? 'bg-[#7A2232] text-white hover:bg-[#5A1924]'
              : 'bg-white text-[#7A2232] border border-[#7A2232]'
          }`}
        >
          <span>{inBlueprint ? "It's in your Blueprint ✓" : "+ Add to Blueprint"}</span>
        </button>

        <button
          onClick={handleSendToPatti}
          className="py-3 px-4 bg-white border border-[#E8E0D5] text-[#1F1A17] font-medium text-[13px] rounded-xl hover:border-[#7A2232] transition-all whitespace-nowrap shadow-xs"
        >
          Send to Patti
        </button>
      </div>
    </div>
  );
};
