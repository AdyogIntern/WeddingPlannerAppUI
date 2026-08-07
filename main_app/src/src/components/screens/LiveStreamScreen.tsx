import React, { useState } from 'react';
import { Video, Heart, MessageCircle, Send, Check } from 'lucide-react';

interface Props {
  onNavigateNext?: () => void;
}

export const LiveStreamScreen: React.FC<Props> = ({ onNavigateNext }) => {
  const [activeCam, setActiveCam] = useState<'Mandap' | 'Wide hall' | 'Nadaswaram'>('Mandap');
  const [blessingSent, setBlessingSent] = useState(false);
  const [blessingText, setBlessingText] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSendBlessing = () => {
    if (!showInput) {
      setShowInput(true);
      return;
    }
    setBlessingSent(true);
    setShowInput(false);
    setBlessingText('');
    setTimeout(() => setBlessingSent(false), 3000);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Dark Header Banner */}
      <div className="bg-[#1E1815] text-white p-5 pt-6">
        <h1 className="font-serif-title text-[24px] leading-tight font-medium text-white tracking-tight">
          Priya & Arjun · Muhurtham
        </h1>
        <p className="text-[12px] leading-relaxed text-[#C2B8AA] mt-1 font-normal flex items-center gap-1.5">
          <span>Starts in 6 minutes</span>
          <span>·</span>
          <span>1:58 am for you in London</span>
        </p>
      </div>

      {/* Video Viewport Container */}
      <div className="bg-[#382E2B] h-48 relative flex items-center justify-center text-white">
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 rounded-full backdrop-blur-xs text-[11px] font-mono-tag tracking-wider uppercase text-[#D8CEBF]">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-ping" />
            LIVE · {activeCam.toUpperCase()} CAMERA
          </div>
        </div>

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/80 font-mono-tag">
          <span>4K · 60fps</span>
          <span>2.4k viewers</span>
        </div>
      </div>

      <div className="p-5 space-y-3.5 flex-1">
        {/* Camera Switcher Pills */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setActiveCam('Mandap')}
            className={`py-2 px-2 text-[12px] font-medium rounded-xl transition-all ${
              activeCam === 'Mandap'
                ? 'bg-[#7A2232] text-white shadow-xs font-semibold'
                : 'bg-white text-[#4A423A] border border-[#E8E0D5]'
            }`}
          >
            Mandap
          </button>

          <button
            onClick={() => setActiveCam('Wide hall')}
            className={`py-2 px-2 text-[12px] font-medium rounded-xl transition-all ${
              activeCam === 'Wide hall'
                ? 'bg-[#7A2232] text-white shadow-xs font-semibold'
                : 'bg-white text-[#4A423A] border border-[#E8E0D5]'
            }`}
          >
            Wide hall
          </button>

          <button
            onClick={() => setActiveCam('Nadaswaram')}
            className={`py-2 px-2 text-[12px] font-medium rounded-xl transition-all ${
              activeCam === 'Nadaswaram'
                ? 'bg-[#7A2232] text-white shadow-xs font-semibold'
                : 'bg-white text-[#4A423A] border border-[#E8E0D5]'
            }`}
          >
            Nadaswaram
          </button>
        </div>

        {/* Card: WHAT IS HAPPENING NOW */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-2">
          <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#8A8075] font-semibold">
            WHAT IS HAPPENING NOW
          </p>

          <p className="text-[12.5px] text-[#3D352E] font-medium leading-relaxed">
            <strong className="font-bold text-[#1F1A17]">Kasi Yatra</strong> — the groom pretends to leave for Kashi and the bride's father persuades him to stay. It is meant to be funny.{' '}
            <span className="text-[#7A2232] font-semibold cursor-pointer hover:underline">
              Read more →
            </span>
          </p>
        </div>

        {/* Card: 42 WATCHING */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-2.5">
          <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#8A8075] font-semibold">
            42 WATCHING
          </p>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#D4C5B2] border-2 border-white flex items-center justify-center text-[10px] font-bold">
                T
              </div>
              <div className="w-7 h-7 rounded-full bg-[#C5B5A0] border-2 border-white flex items-center justify-center text-[10px] font-bold">
                M
              </div>
              <div className="w-7 h-7 rounded-full bg-[#B8A792] border-2 border-white flex items-center justify-center text-[10px] font-bold">
                D
              </div>
            </div>

            <p className="text-[11.5px] text-[#60574E] font-medium">
              Toronto, Melbourne, Dubai, Trichy..
            </p>
          </div>

          <p className="text-[12px] italic text-[#5C5248] pt-1">
            "Blessings to both of them from all of us in Toronto"
          </p>
        </div>

        {/* Soft Callout Box */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#3D352E] border border-[#EBE0D5]">
          A running commentary of the ritual, in English, as it happens. This is the screen that makes a grandmother in Melbourne feel present.
        </div>
      </div>

      {showInput && (
        <div className="px-5 mb-3">
          <input 
            type="text" 
            placeholder="Write your blessing to Priya & Arjun..."
            value={blessingText}
            onChange={(e) => setBlessingText(e.target.value)}
            className="w-full p-3 bg-white border border-[#7A2232] rounded-xl text-[13px] text-[#1F1A17] focus:outline-none"
            autoFocus
          />
        </div>
      )}

      {blessingSent && (
        <div className="mx-5 mb-3 p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>Your blessing was broadcast on the venue screen in Chennai!</span>
        </div>
      )}

      {/* Fixed Bottom Action */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2 space-y-2">
        <button 
          onClick={handleSendBlessing}
          className="w-full py-3 px-4 bg-[#7A2232] text-white font-medium text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <Heart className="w-4 h-4 fill-white" />
          <span>{showInput ? "Submit blessing" : "Send a blessing"}</span>
        </button>

        {onNavigateNext && (
          <button 
            onClick={onNavigateNext}
            className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Step 10: Digital Invitation</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};
