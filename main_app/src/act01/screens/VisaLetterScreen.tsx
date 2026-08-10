import React, { useState } from 'react';
import { Download, FileText, Check, ChevronLeft } from 'lucide-react';
import { useWeddingStore } from '../store/useWeddingStore';

interface Props {
  onBack?: () => void;
}

export const VisaLetterScreen: React.FC<Props> = ({ onBack }) => {
  const { setScreen } = useWeddingStore();
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Navigation Header */}
      <div className="w-full px-5 pt-4 pb-0 bg-[#FAF7F2] flex items-center shrink-0">
        <button
          onClick={() => setScreen('blueprint_home')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#4A423A] hover:text-[#7A2232] text-[12px] font-bold border border-[#E8E0D5] shadow-sm hover:border-[#7A2232] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
      </div>

      {/* Header */}
      <div className="px-5 pt-4 pb-4">
        <h1 className="font-serif-title text-[28px] leading-tight font-medium text-[#1F1A17] tracking-tight">
          Invitation letter
        </h1>
        <p className="text-[12.5px] leading-relaxed text-[#756D65] mt-1 font-normal">
          For Mr. R. Balasubramanian · London
        </p>
      </div>

      <div className="px-5 space-y-4 flex-1">
        {/* Paper Document Container */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8E0D5] shadow-xs space-y-3 font-sans text-[12.5px] text-[#2C241E] leading-relaxed">
          <p className="font-mono-tag text-[10px] text-[#8A8075] uppercase font-semibold">
            16 SEPTEMBER 2026
          </p>

          <div className="space-y-0.5">
            <p className="font-semibold text-[#1F1A17]">To the Visa Officer,</p>
            <p className="text-[#5C5248]">High Commission of India, London</p>
          </div>

          <p>
            I, R. Raghavan, resident of Chennai, invite Mr. R. Balasubramanian to attend the wedding of my daughter Priya to Arjun Srinivasan, to be held on 14 February 2027 at The Leela Palace, Chennai.
          </p>

          <p>
            Accommodation for the period 11 – 16 February 2027 has been arranged at the Radisson Blu, Chennai. Booking reference and the wedding invitation are enclosed.
          </p>

          <div className="pt-2">
            <p className="font-bold text-[#1F1A17]">R. Raghavan</p>
            <p className="text-[11.5px] text-[#756D65] font-mono-tag">+91 98410 •• •32</p>
          </div>
        </div>

        {/* Card: ENCLOSED AUTOMATICALLY */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-2">
          <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#8A8075] font-semibold">
            ENCLOSED AUTOMATICALLY
          </p>

          <p className="text-[12.5px] text-[#3D352E] font-medium leading-relaxed flex items-center justify-between">
            <span>Wedding invitation, PDF</span>
            <span className="text-[10px] text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded font-semibold">ATTACHED</span>
          </p>

          <p className="text-[12.5px] text-[#3D352E] font-medium leading-relaxed flex items-center justify-between">
            <span>Hotel booking confirmation</span>
            <span className="text-[10px] text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded font-semibold">ATTACHED</span>
          </p>

          <p className="text-[12.5px] text-[#3D352E] font-medium leading-relaxed flex items-center justify-between">
            <span>Host identity proof</span>
            <span className="text-[10px] text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded font-semibold">VERIFIED</span>
          </p>
        </div>

        {/* Soft Callout Box */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#3D352E] border border-[#EBE0D5]">
          18 guests need one of these. Each takes about forty minutes to write by hand. Here it is one tap, and it is the kind of chore that makes a family loyal.
        </div>
      </div>

      {downloaded && (
        <div className="mx-5 mb-3 p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>Downloaded official signed PDF packet with enclosures</span>
        </div>
      )}

      {/* Fixed Bottom Action */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2">
        <button 
          onClick={handleDownload}
          className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-medium text-[14px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download visa packet (PDF)</span>
        </button>
      </div>
    </div>
  );
};
