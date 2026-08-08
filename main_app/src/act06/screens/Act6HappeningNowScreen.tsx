import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6HappeningNowScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header Card */}
      <div 
        onClick={() => setScreen('act6_widget')}
        className="bg-[#8B1538] text-white px-6 pt-5 pb-5 flex flex-col shrink-0 cursor-pointer shadow-sm rounded-b-[24px]"
      >
        <span className="text-xs text-white/50">Sun 14 Feb · 7:04 am</span>
        <h1 className="text-[32px] font-serif font-bold text-white mt-2 leading-none">
          Happening now
        </h1>
        <p className="text-xs text-[#F5E9C8] mt-2 font-medium">
          Oonjal · the swing ceremony
        </p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '24px', gap: '16px' }}>
        
        {/* Card: WHAT YOU ARE WATCHING */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            WHAT YOU ARE WATCHING
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            The couple sit on a swing while the women of both families sing and circle them with rice balls to ward off the evil eye. It lasts about twenty minutes.
          </p>
        </div>

        {/* Card: NEXT */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            NEXT
          </div>

          <div className="space-y-4 text-xs text-[#1D1D1F]">
            <div className="flex justify-between items-start py-0.5">
              <span className="font-semibold">7:30 · Kanyadanam</span>
              <span className="text-[#8A8580] text-[11px]">Main hall</span>
            </div>

            <div className="flex justify-between items-start py-0.5">
              <span className="font-semibold">8:12 · Muhurtham — the thread</span>
              <span className="text-[#8B1538] text-[11px] font-bold text-right leading-snug">
                Be seated by<br />8
              </span>
            </div>

            <div className="flex justify-between items-start py-0.5">
              <span className="font-semibold">9:00 · Sappadu, first sitting</span>
              <span className="text-[#8A8580] text-[11px]">Dining hall</span>
            </div>
          </div>
        </div>

        {/* Card: FOR YOU, SPECIFICALLY */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            FOR YOU, SPECIFICALLY
          </div>

          <div className="space-y-2.5 text-xs text-[#8A8580]">
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
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          One link, sent that morning. It answers the four questions every guest asks, so nobody rings the bride's mother.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={() => setScreen('act6_widget')}
          className="w-full py-4 bg-[#8B1538] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center shadow-xs"
        >
          Add to the photo wall
        </button>
      </div>
    </View>
  );
};
