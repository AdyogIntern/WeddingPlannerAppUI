import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Camera, Clock, MapPin, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';

export const Act6HappeningNowScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header Card */}
      <div className="bg-[#8B1538] text-white px-5 py-3.5 rounded-b-2xl shrink-0 shadow-md">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setScreen('act6_photo_wall')}
            className="p-1.5 rounded-lg bg-white/10 text-white border-none cursor-pointer flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Photo Wall</span>
          </button>
          <span className="text-[10.5px] font-mono text-white/80 font-semibold">Sun 14 Feb · 7:04 am</span>
        </div>
        <div className="mt-2">
          <div className="text-[10px] font-mono font-bold text-[#F5E9C8] tracking-widest uppercase">
            HAPENING NOW
          </div>
          <h1 className="text-lg font-serif font-bold text-white mt-0.5">
            Oonjal · the swing ceremony
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Card: WHAT YOU ARE WATCHING */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-2">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            WHAT YOU ARE WATCHING
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            The couple sit on a swing while the women of both families sing and circle them with rice balls to ward off the evil eye. It lasts about twenty minutes.
          </p>
        </div>

        {/* Card: NEXT */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase flex items-center gap-1">
            <Clock size={12} className="text-[#8B1538]" />
            <span>NEXT SCHEDULE</span>
          </div>

          <div className="space-y-2.5 text-xs text-[#1D1D1F]">
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <div>
                <span className="font-bold block">7:30 · Kanyadanam</span>
              </div>
              <span className="text-[10px] text-[#666666]">Main hall</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <div>
                <span className="font-bold text-[#8B1538] block">8:12 · Muhurtham — the thread</span>
              </div>
              <span className="text-[10px] font-bold text-[#8B1538]">Be seated by 8</span>
            </div>

            <div className="flex justify-between items-center py-1">
              <div>
                <span className="font-bold block">9:00 · Sappadu, first sitting</span>
              </div>
              <span className="text-[10px] text-[#666666]">Dining hall</span>
            </div>
          </div>
        </div>

        {/* Card: FOR YOU, SPECIFICALLY */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-2.5">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            FOR YOU, SPECIFICALLY
          </div>

          <div className="space-y-1.5 text-xs text-[#1D1D1F]">
            <div>
              <span className="text-[#666666]">Your table: </span>
              <strong className="text-[#1D1D1F]">14, near the north pillar</strong>
            </div>
            <div>
              <span className="text-[#666666]">Meal: </span>
              <strong className="text-[#8B1538]">no onion garlic, noted</strong>
            </div>
            <div>
              <span className="text-[#666666]">Your car: </span>
              <strong className="text-[#1D1D1F]">Sundar, +91 90031 ** **11</strong>
            </div>
          </div>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          One link, sent that morning. It answers the four questions every guest asks, so nobody rings the bride's mother.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-white border-t border-[#ECECEC] shrink-0 flex gap-2">
        <button
          onClick={() => setScreen('act6_photo_wall')}
          className="flex-1 py-3 bg-[#8B1538] text-white rounded-2xl text-xs font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Camera size={16} />
          <span>Add Photo</span>
        </button>

        <button
          onClick={() => setScreen('act6_widget')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>13. Home Widget</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
