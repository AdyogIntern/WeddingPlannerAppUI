import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6ShareMomentScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedFormat, setSelectedFormat] = useState<'story' | 'post' | 'whatsapp' | 'save'>('story');

  const handleNext = () => {
    setScreen('act6_guestbook');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0">
        <div />
        <button 
          onClick={handleNext}
          className="text-sm font-semibold text-[#8A8580] border-none bg-transparent cursor-pointer hover:text-[#1D1D1F]"
        >
          Skip
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Share this moment</h1>
        <p className="text-xs text-[#8A8580] mt-1 font-medium">Auto-designed · your board's colours</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingHorizontal: '24px', paddingBottom: '24px', gap: '16px' }}>
        
        {/* Main Auto-Designed Story Card Preview */}
        <div 
          onClick={handleNext}
          className="w-full h-80 rounded-[32px] bg-[#332A26] p-6 flex flex-col justify-end relative shadow-sm border border-white/5 cursor-pointer"
        >
          {/* Centered label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[11px] font-mono font-bold text-white/20 tracking-widest uppercase">
              YOUR IMAGE
            </span>
          </div>

          <div className="space-y-1.5 z-10 text-white">
            <div className="text-[10px] font-mono font-bold tracking-widest text-[#F5E9C8]">
              14 · 02 · 2027
            </div>
            <h2 className="text-[26px] font-serif font-bold tracking-tight leading-none">
              We found the hall.
            </h2>
            <p className="text-[11px] text-white/70 font-semibold">183 days to go</p>
          </div>
        </div>

        {/* Format Selector Pills */}
        <div className="flex items-center gap-2.5 justify-between">
          {([
            { id: 'story', label: 'Story' },
            { id: 'post', label: 'Post' },
            { id: 'whatsapp', label: 'WhatsApp' },
            { id: 'save', label: 'Save' },
          ] as const).map((fmt) => (
            <button
              key={fmt.id}
              onClick={() => setSelectedFormat(fmt.id)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold border cursor-pointer transition-all ${
                selectedFormat === fmt.id
                  ? 'bg-[#8B1538] text-white border-[#8B1538] shadow-xs'
                  : 'bg-white text-[#1D1D1F] border-[#ECECEC] hover:bg-gray-50'
              }`}
            >
              {fmt.label}
            </button>
          ))}
        </div>

        {/* Card: FOUR TEMPLATES, YOUR PALETTE */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            FOUR TEMPLATES, YOUR PALETTE
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="aspect-square rounded-[14px] bg-[#332A26] border border-black/5" />
            <div className="aspect-square rounded-[14px] bg-[#8B1538] border border-black/5" />
            <div className="aspect-square rounded-[14px] bg-[#FAF2EE] border border-black/5" />
            <div className="aspect-square rounded-[14px] bg-[#2E7D32] border border-black/5" />
          </div>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          Every milestone is a shareable card, tagged with your wedding hashtag and — quietly — a referral link. This is how one wedding becomes three.
        </div>
      </View>
    </View>
  );
};
