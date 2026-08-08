import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6BoardScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0 text-xs font-semibold text-[#8A8580]">
        <span>9:41</span>
        <button
          onClick={() => setScreen('act6_swipe')}
          className="text-xs font-bold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          + Add
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Your board</h1>
        <p className="text-xs text-[#8E867E] mt-1 font-medium">47 saved · Priya, Meera and Amma</p>
      </div>

      {/* Moodboard / Grid Content */}
      <View style={{ flex: 1, overflowY: 'auto', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '24px', gap: '14px' }}>
        
        {/* Moodboard Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            <div className="h-[180px] rounded-2xl bg-[#EADFCF]" />
            <div className="h-[96px] rounded-2xl bg-[#EADFCF]" />
            <div className="h-[96px] rounded-2xl bg-[#EADFCF]" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            <div className="h-[96px] rounded-2xl bg-[#EADFCF]" />
            <div className="h-[96px] rounded-2xl bg-[#EADFCF]" />
            <div className="h-[180px] rounded-2xl bg-[#EADFCF]" />
          </div>
        </div>

        {/* Card: WHAT YOUR BOARD IS TELLING US */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            WHAT YOUR BOARD IS TELLING US
          </div>

          {/* Color Palette Chips */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#7A1E2D]" />
            <div className="w-8 h-8 rounded-full bg-[#E4B650]" />
            <div className="w-8 h-8 rounded-full bg-[#FAF5EE] border border-[#EADFCF]" />
            <div className="w-8 h-8 rounded-full bg-[#466349]" />
          </div>

          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            <strong className="font-bold">Temple-traditional, with a modern hand.</strong> Heavy on jasmine and kanakambaram, low on drapes, warm lighting.
          </p>
        </div>

        {/* Card: MATCHED TO YOUR BOARD */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            MATCHED TO YOUR BOARD
          </div>

          <div className="grid grid-cols-3 gap-3">
            {['Bloom & Thread', 'Studio Verdant', 'Sri Decorators'].map((name) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className="w-full aspect-square rounded-[14px] bg-[#EADFCF]" />
                <span className="text-[11px] font-bold text-[#1D1D1F] text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Link Box */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed">
          Paste an Instagram link and it lands here. The board is how a 29-year-old starts planning — not with a budget field.
        </div>

      </View>

      {/* Sticky Bottom Action Button */}
      <div className="p-6 bg-white border-t border-[#EADFCF] shrink-0">
        <button
          onClick={() => setScreen('act6_swipe')}
          className="w-full py-4 bg-[#761A2D] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#621423] transition-colors flex items-center justify-center"
        >
          Turn the board into a decor brief
        </button>
      </div>
    </View>
  );
};
