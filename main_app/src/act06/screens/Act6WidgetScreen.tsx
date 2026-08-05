import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, BellOff, Smartphone, Watch, Bell, CheckCircle2, ArrowRight } from 'lucide-react';

export const Act6WidgetScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#0F172A', height: '100%', boxSizing: 'border-box' }}>
      {/* Lockscreen Time Bar */}
      <div className="px-5 py-4 text-center text-white shrink-0 border-b border-white/10">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => setScreen('act6_happening_now')}
            className="p-1.5 rounded-lg bg-white/10 text-white border-none cursor-pointer flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Happening</span>
          </button>
          <span className="text-[10.5px] font-mono text-white/60">LOCK SCREEN VIEW</span>
        </div>

        <p className="text-xs text-white/70 font-medium">Wednesday 3 August</p>
        <h1 className="text-4xl font-mono font-light text-white tracking-tight mt-0.5">9:41</h1>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* iOS Lock Screen Widget Card */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 text-white space-y-2 shadow-lg">
          <div className="flex justify-between items-center text-[10px] font-mono font-bold text-[#F5E9C8] tracking-widest uppercase">
            <span>PRIYA & ARJUN · 38%</span>
            <span>183 DAYS</span>
          </div>

          <p className="text-xs font-bold text-white leading-snug">
            Photography vote closes Friday
          </p>
        </div>

        {/* Lock Screen Notification Pill */}
        <div className="bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/15 text-white flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8B1538] text-white flex items-center justify-center shrink-0">
            <CheckCircle2 size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Appa approved the venue</h4>
            <span className="text-[10px] text-white/60 font-mono">6:40 am IST</span>
          </div>
        </div>

        {/* Card: ALSO LIVES IN */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] text-[#1D1D1F] space-y-2.5 shadow-2xs">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            ALSO LIVES IN
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-[#ECECEC]">
              <Smartphone size={14} className="text-[#8B1538]" />
              <span>Home-screen widget</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-[#ECECEC]">
              <Watch size={14} className="text-[#8B1538]" />
              <span>Apple Watch complication</span>
            </div>
          </div>
        </div>

        {/* Card: NOTIFICATIONS, DELIBERATELY QUIET */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] text-[#1D1D1F] space-y-1.5 shadow-2xs">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase flex items-center gap-1">
            <BellOff size={12} className="text-[#8B1538]" />
            <span>NOTIFICATIONS, DELIBERATELY QUIET</span>
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Two a week maximum, never between 10 pm and 7 am in your timezone.
          </p>
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-[#0F172A] border-t border-white/10 shrink-0 flex gap-2">
        <button
          onClick={() => setScreen('act6_board')}
          className="px-3 py-2.5 rounded-xl text-xs font-semibold text-white/70 bg-white/10 border-none cursor-pointer hover:bg-white/20"
        >
          Board
        </button>

        <button
          onClick={() => setScreen('act6_voice_discussion')}
          className="flex-1 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>14. Voice Notes</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
