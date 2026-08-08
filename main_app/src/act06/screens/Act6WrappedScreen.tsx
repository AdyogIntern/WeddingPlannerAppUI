import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6WrappedScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#721B2F', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0 text-xs font-semibold text-white/60">
        <span></span>
        <button
          onClick={() => setScreen('act6_share_moment')}
          className="text-xs font-bold text-white bg-transparent border-none cursor-pointer hover:text-white/80"
        >
          Share ↗
        </button>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '24px', gap: '14px' }}>
        
        {/* Title Block */}
        <div className="space-y-1 mt-2">
          <span className="text-[10px] font-bold text-[#F5E9C8] tracking-widest uppercase font-mono">
            SIX MONTHS IN
          </span>
          <h1 className="text-4xl font-serif font-bold text-white leading-tight">
            Your planning,<br />wrapped.
          </h1>
        </div>

        {/* Card 1: DECISIONS MADE */}
        <div className="bg-white/5 border border-white/15 p-5 rounded-[20px] text-white space-y-2">
          <div className="text-[9px] font-bold text-white/60 tracking-wider uppercase font-mono">
            DECISIONS MADE
          </div>
          <div className="text-5xl font-serif font-bold text-white leading-none">64</div>
          <p className="text-xs text-[#FAF2EE] opacity-80 font-medium">Nineteen of them by Meera</p>
        </div>

        {/* Grid Stats: VENDORS SEEN & SAVED VS BAND */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/15 p-5 rounded-[20px] text-white space-y-2">
            <div className="text-[9px] font-bold text-white/60 tracking-wider uppercase font-mono">
              VENDORS SEEN
            </div>
            <div className="text-3xl font-serif font-bold">218</div>
          </div>

          <div className="bg-white/5 border border-white/15 p-5 rounded-[20px] text-white space-y-2">
            <div className="text-[9px] font-bold text-white/60 tracking-wider uppercase font-mono">
              SAVED VS BAND
            </div>
            <div className="text-3xl font-serif font-bold text-[#F5E9C8]">₹5.9L</div>
          </div>
        </div>

        {/* Card 4: MOST DEBATED DECISION */}
        <div className="bg-white/5 border border-white/15 p-5 rounded-[20px] text-white space-y-2.5">
          <div className="text-[9px] font-bold text-white/60 tracking-wider uppercase font-mono">
            MOST DEBATED DECISION
          </div>
          <p className="text-[15px] font-bold text-white leading-snug">
            The mandap flowers · 23 messages
          </p>
          <p className="text-xs text-[#FAF2EE] opacity-85 font-medium">Appa won.</p>
        </div>

        {/* Card 5: YOUR PLANNING HOUR */}
        <div className="bg-white/5 border border-white/15 p-5 rounded-[20px] text-white space-y-2.5">
          <div className="text-[9px] font-bold text-white/60 tracking-wider uppercase font-mono">
            YOUR PLANNING HOUR
          </div>
          <p className="text-[15px] font-bold text-white leading-snug">
            10:40 pm PST, Wednesdays
          </p>
          <p className="text-xs text-white/65 leading-relaxed font-medium">
            Appa’s is 6:15 am IST. You have never once been online together.
          </p>
        </div>

      </View>

      {/* Bottom CTA Action Button */}
      <div className="p-6 shrink-0">
        <button
          onClick={() => setScreen('act6_share_moment')}
          className="w-full py-4 bg-[#FAF6EE] text-[#721B2F] rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#EADFCF] transition-colors"
        >
          Share to my story
        </button>
      </div>
    </View>
  );
};
