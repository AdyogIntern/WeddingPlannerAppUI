import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, UserPlus, Send, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const Act6CrewScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [nudged, setNudged] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#ECECEC] px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_sangeet_studio')}
            className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-gray-700 cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Sangeet</span>
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-[#1D1D1F]">The crew</h1>
            <p className="text-[10.5px] text-[#666666]">6 people · 3 cities · 11 timezones apart</p>
          </div>
        </div>
        <button className="flex items-center gap-1 bg-[#8B1538] text-white px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer border-none shadow-xs hover:bg-[#72102D]">
          <UserPlus size={14} />
          <span>Invite</span>
        </button>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Card: THIS WEEK, TOGETHER */}
        <div className="bg-white p-4 rounded-2xl border-2 border-[#8B1538] shadow-2xs flex items-center gap-4">
          {/* Progress Ring */}
          <div className="w-16 h-16 rounded-full border-4 border-[#8B1538] flex items-center justify-center font-bold text-[#8B1538] text-sm shrink-0 bg-[#FFF0F3]">
            7/9
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#8B1538] tracking-wider uppercase mb-0.5">
              THIS WEEK, TOGETHER
            </div>
            <p className="text-xs text-[#1D1D1F] leading-snug">
              Seven of nine things done. Finish the last two and the whole crew unlocks the guest welcome kits.
            </p>
          </div>
        </div>

        {/* Member Cards */}
        <div className="space-y-2.5">
          {[
            { name: 'Meera', role: 'Shortlisted 12 · owns Mehendi & Sangeet', progress: '3 of 3', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80', complete: true },
            { name: 'Appa', role: 'Approved catering and purohit', progress: '2 of 2', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80', complete: true },
            { name: 'Amma', role: 'Guest list · 620 names', progress: '1 of 2', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80', complete: false },
            { name: 'Arjun', role: "Groom's side travel", progress: '0 of 1', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', complete: false },
            { name: 'Chithappa', role: 'Nadaswaram · his gift', progress: '1 of 1', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80', complete: true },
          ].map((m) => (
            <div key={m.name} className="bg-white p-3 rounded-2xl border border-[#ECECEC] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <img src={m.img} alt={m.name} className="w-10 h-10 rounded-full object-cover border border-[#ECECEC]" />
                <div>
                  <h4 className="text-xs font-bold text-[#1D1D1F]">{m.name}</h4>
                  <p className="text-[10px] text-[#666666]">{m.role}</p>
                </div>
              </div>
              <span className={`text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-full ${m.complete ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                {m.progress}
              </span>
            </div>
          ))}
        </div>

        {/* Caption Box */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          Co-operative, never competitive. Nobody is ranked against anybody, and nothing is compared with another family's wedding.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-white border-t border-[#ECECEC] shrink-0 flex gap-2">
        <button
          onClick={() => setNudged(true)}
          className={`flex-1 py-3 rounded-2xl text-xs font-bold border-none cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-xs ${
            nudged ? 'bg-green-700 text-white' : 'bg-[#8B1538] text-white hover:bg-[#72102D]'
          }`}
        >
          <Send size={14} />
          <span>{nudged ? 'Nudge sent!' : 'Nudge Arjun'}</span>
        </button>

        <button
          onClick={() => setScreen('act6_wrapped')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>8. Wrapped</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
