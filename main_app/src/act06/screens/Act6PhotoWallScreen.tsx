import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6PhotoWallScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div 
        onClick={() => setScreen('act6_happening_now')}
        className="bg-[#221D1A] text-white px-6 pt-3 pb-5 flex flex-col shrink-0 cursor-pointer text-left"
      >
        <div className="flex justify-between items-center text-xs text-white/40 pb-1">
          <span>Sun 14 Feb · 8:12 am</span>
          <span className="font-bold tracking-wide text-white uppercase">Live</span>
        </div>
        <h1 className="text-[32px] font-serif font-bold text-white mt-2 leading-none">The wall</h1>
        <p className="text-xs text-white/60 mt-2 font-medium">638 photos from 74 guests · 4 awaiting review</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Photo Grid (3x4) with solid placeholders */}
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="aspect-square rounded-[16px] bg-[#EADFCF]" />
          ))}
        </div>

        {/* Card: HOW GUESTS ADD TO IT */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] text-[#1D1D1F] flex items-center gap-4 text-left">
          <div className="w-[52px] h-[52px] bg-[#251C17] rounded-[16px] flex items-center justify-center shrink-0 select-none">
            <span className="text-[10px] font-mono font-bold text-white tracking-widest">QR</span>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">HOW GUESTS ADD TO IT</h4>
            <p className="text-xs text-[#1D1D1F] mt-1.5 leading-normal">
              A QR code on every table. No app, no login — the photos land here in seconds.
            </p>
          </div>
        </div>

        {/* Card: MODERATION */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] text-[#1D1D1F] space-y-3 text-left">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            MODERATION
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Meera approves anything before it shows on the hall screen. Four photos are waiting — one is a blurry ceiling.
          </p>
        </div>

        {/* Explainer Footer */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed text-left">
          The photo wall is free for the family and pure acquisition for you: every guest who uploads sees who ran this wedding.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#EADFCF] shrink-0">
        <button
          onClick={() => setScreen('act6_happening_now')}
          className="w-full py-4 bg-[#761A2D] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#621423] transition-colors flex items-center justify-center"
        >
          Review 4 photos
        </button>
      </div>
    </View>
  );
};
