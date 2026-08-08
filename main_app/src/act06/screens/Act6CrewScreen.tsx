import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6CrewScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0">
        <div />
        <button
          onClick={() => setScreen('act6_wrapped')}
          className="text-sm font-semibold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          Invite
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">The crew</h1>
        <p className="text-xs text-[#8A8580] mt-1 font-medium">6 people · 3 cities · 11 timezones apart</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingHorizontal: '24px', paddingBottom: '24px', gap: '16px' }}>
        
        {/* Card: THIS WEEK, TOGETHER */}
        <div className="bg-white p-5 rounded-[24px] border-2 border-[#8B1538] shadow-2xs flex items-center gap-5">
          {/* Progress Ring (Simulated SVG circle) */}
          <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="26"
                className="text-[#FAF2EE]"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="32"
                cy="32"
                r="26"
                className="text-[#8B1538]"
                strokeWidth="6"
                strokeDasharray={2 * Math.PI * 26}
                strokeDashoffset={2 * Math.PI * 26 * (1 - 7/9)}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <span className="absolute text-sm font-bold text-[#1D1D1F]">7/9</span>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono mb-1">
              THIS WEEK, TOGETHER
            </div>
            <p className="text-xs text-[#1D1D1F] leading-normal font-medium">
              Seven of nine things done. Finish the last two and the whole crew unlocks the guest welcome kits.
            </p>
          </div>
        </div>

        {/* Member Cards */}
        <div className="space-y-3">
          {[
            { name: 'Meera', role: 'Shortlisted 12 · owns Mehendi & Sangeet', progress: '3 of 3', complete: true, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
            { name: 'Appa', role: 'Approved catering and purohit', progress: '2 of 2', complete: true, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
            { name: 'Amma', role: 'Guest list · 620 names', progress: '1 of 2', complete: false, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' },
            { name: 'Arjun', role: "Groom's side travel", progress: '0 of 1', complete: false, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
            { name: 'Chithappa', role: 'Nadaswaram · his gift', progress: '1 of 1', complete: true, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80' },
          ].map((m) => (
            <div key={m.name} className="bg-white p-4 rounded-[20px] border border-[#ECECEC] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">{m.name}</h4>
                  <p className="text-[10px] text-[#8A8580] mt-1 font-medium leading-tight">{m.role}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold ${m.complete ? 'text-green-700' : 'text-[#C9A227]'} whitespace-nowrap`}>
                {m.progress}
              </span>
            </div>
          ))}
        </div>

        {/* Caption Box */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          Co-operative, never competitive. Nobody is ranked against anybody, and nothing is compared with another family's wedding.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={() => setScreen('act6_wrapped')}
          className="w-full py-4 bg-[#8B1538] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center shadow-xs"
        >
          Nudge Arjun, kindly
        </button>
      </div>
    </View>
  );
};
