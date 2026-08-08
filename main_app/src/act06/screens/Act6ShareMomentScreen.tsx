import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

import imgShareMomentBg from '../../assets/share_moment_bg.jpg';

export const Act6ShareMomentScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedFormat, setSelectedFormat] = useState<'story' | 'post' | 'whatsapp' | 'save'>('story');

  const handleNext = () => {
    setScreen('act6_guestbook');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0 text-xs font-semibold text-[#8A8580]">
        <span></span>
        <button 
          onClick={handleNext}
          className="text-xs font-bold text-[#8A8580] border-none bg-transparent cursor-pointer hover:text-[#1D1D1F]"
        >
          Skip
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Share this moment</h1>
        <p className="text-xs text-[#8E867E] mt-1 font-medium">Auto-designed · your board's colours</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '24px', gap: '14px' }}>
        
        {/* Main Auto-Designed Story Card Preview */}
        <div 
          onClick={handleNext}
          className="w-full h-80 rounded-[24px] p-6 flex flex-col justify-end relative border border-white/5 cursor-pointer select-none overflow-hidden"
          style={{
            backgroundImage: `url(${imgShareMomentBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Black gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 pointer-events-none"></div>

          <div className="space-y-1.5 z-10 text-white text-left">
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
                  ? 'bg-[#761A2D] text-white border-[#761A2D]'
                  : 'bg-white text-[#1D1D1F] border-[#EADFCF] hover:bg-gray-50'
              }`}
            >
              {fmt.label}
            </button>
          ))}
        </div>

        {/* Card: FOUR TEMPLATES, YOUR PALETTE */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            FOUR TEMPLATES, YOUR PALETTE
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="aspect-square rounded-[14px] bg-[#332A26]" />
            <div className="aspect-square rounded-[14px] bg-[#8B1538]" />
            <div className="aspect-square rounded-[14px] bg-[#FAF2EE] border border-[#EADFCF]" />
            <div className="aspect-square rounded-[14px] bg-[#2E7D32]" />
          </div>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed">
          Every milestone is a shareable card, tagged with your wedding hashtag and — quietly — a referral link. This is how one wedding becomes three.
        </div>
      </View>
    </View>
  );
};
