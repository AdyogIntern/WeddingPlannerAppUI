import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6HappeningNowScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header Card */}
      <div 
        onClick={() => setScreen('act6_widget')}
        className="bg-[#761A2D] text-white px-6 pt-3 pb-5 flex flex-col shrink-0 cursor-pointer text-left"
      >
        <div className="flex justify-between items-center text-xs text-white/40 pb-1">
          <span>Sun 14 Feb · 7:04 am</span>
        </div>
        <h1 className="text-[32px] font-serif font-bold text-white mt-2 leading-none">
          Happening now
        </h1>
        <p className="text-xs text-[#FAF2EE]/80 mt-2 font-medium">
          Oonjal · the swing ceremony
        </p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Card: WHAT YOU ARE WATCHING */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] text-left space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            WHAT YOU ARE WATCHING
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            The couple sit on a swing while the women of both families sing and circle them with rice balls to ward off the evil eye. It lasts about twenty minutes.
          </p>
        </div>

        {/* Card: NEXT */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] text-left space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            NEXT
          </div>

          <div className="space-y-4 text-xs text-[#1D1D1F]">
            <div className="flex justify-between items-start py-0.5">
              <span className="font-semibold">7:30 · Kanyadanam</span>
              <span className="text-[#8E867E] text-[11px]">Main hall</span>
            </div>

            <div className="flex justify-between items-start py-0.5">
              <span className="font-semibold">8:12 · Muhurtham — the thread</span>
              <span className="text-[#8B1538] text-[11px] font-bold text-right leading-snug">
                Be seated by<br />8
              </span>
            </div>

            <div className="flex justify-between items-start py-0.5">
              <span className="font-semibold">9:00 · Sappadu, first sitting</span>
              <span className="text-[#8E867E] text-[11px]">Dining hall</span>
            </div>
          </div>
        </div>

        {/* Card: FOR YOU, SPECIFICALLY */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] text-left space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            FOR YOU, SPECIFICALLY
          </div>

          <div className="space-y-2.5 text-xs text-[#8E867E]">
            <div>
              Your table · <strong className="text-[#1D1D1F] font-bold">14, near the north pillar</strong>
            </div>
            <div>
              Meal · <strong className="text-[#1D1D1F] font-bold">no onion garlic, noted</strong>
            </div>
            <div>
              Your car · <strong className="text-[#1D1D1F] font-bold">Sundar, +91 90031 ** **11</strong>
            </div>
          </div>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed text-left">
          One link, sent that morning. It answers the four questions every guest asks, so nobody rings the bride's mother.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#EADFCF] shrink-0">
        <button
          onClick={() => setScreen('act6_widget')}
          className="w-full py-4 bg-[#761A2D] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#621423] transition-colors flex items-center justify-center"
        >
          Add to the photo wall
        </button>
      </div>
    </View>
  );
};
