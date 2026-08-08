import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6WidgetScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Lockscreen Time Bar */}
      <div 
        onClick={() => setScreen('act6_voice_discussion')}
        className="px-6 pt-6 pb-6 text-center text-white shrink-0 bg-[#251C17] cursor-pointer flex flex-col items-center gap-1"
      >
        <span className="text-[11px] text-white/50 font-bold uppercase tracking-wider">
          Wednesday 3 August
        </span>

        {/* Large Time Text */}

        {/* iOS Lock Screen Widget Card */}
        <div className="w-full max-w-[340px] bg-white/10 backdrop-blur-md p-4 mt-2 rounded-[20px] border border-white/10 text-white space-y-1.5 text-left">
          <div className="flex justify-between items-center text-[9px] font-bold text-white/60 tracking-wider font-mono">
            <span>PRIYA & ARJUN</span>
            <span>38%</span>
          </div>

          <div className="text-[26px] font-serif font-bold text-white leading-tight">
            183 days
          </div>
          <p className="text-[10px] text-white/70 font-semibold">
            Photography vote closes Friday
          </p>
        </div>

        {/* Lock Screen Notification Pill */}
        <div className="w-full max-w-[340px] bg-white/10 backdrop-blur-md py-3 px-4 mt-3 rounded-[16px] border border-white/10 text-white text-left text-xs font-semibold">
          Appa approved the venue · 6:40 am IST
        </div>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Card: ALSO LIVES IN */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] text-[#1D1D1F] space-y-4 text-left">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            ALSO LIVES IN
          </div>

          <div className="space-y-3.5 text-xs font-semibold text-[#1D1D1F]">
            <div className="py-0.5 border-b border-gray-100 pb-2">
              Home-screen widget · days and next action
            </div>
            <div className="py-0.5 border-b border-gray-100 pb-2">
              Apple Watch complication
            </div>
            <div className="py-0.5">
              A shareable story card, refreshed weekly
            </div>
          </div>
        </div>

        {/* Card: NOTIFICATIONS, DELIBERATELY QUIET */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] text-[#1D1D1F] space-y-3 text-left">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            NOTIFICATIONS, DELIBERATELY QUIET
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Two a week maximum, and never between 10 pm and 7 am in your timezone. Approvals and vote deadlines only.
          </p>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed text-left">
          A countdown is the one piece of urgency a couple actually wants. Everything else stays out of their notification tray.
        </div>
      </View>
    </View>
  );
};
