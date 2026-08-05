import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Share2, Sparkles, Check } from 'lucide-react';

export const Act6WrappedScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [shared, setShared] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#671B2B', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-5 py-3 flex items-center justify-between shrink-0 border-b border-white/10 text-white">
        <button
          onClick={() => setScreen('act6_crew')}
          className="p-1.5 rounded-lg bg-white/10 text-white border-none cursor-pointer flex items-center gap-1 text-xs font-semibold"
        >
          <ChevronLeft size={16} />
          <span>The Crew</span>
        </button>
        <span className="text-xs font-mono font-bold text-[#F5E9C8] tracking-widest uppercase">
          SIX MONTHS IN
        </span>
        <button 
          onClick={() => setScreen('act6_share_moment')}
          className="p-1.5 rounded-lg bg-white/10 text-white border-none cursor-pointer"
        >
          <Share2 size={16} />
        </button>
      </div>

      {/* Main Content Scrollable Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '20px', gap: '16px' }}>
        
        {/* Title */}
        <div>
          <h1 className="text-2xl font-serif font-bold text-white tracking-tight">Your planning, wrapped.</h1>
          <p className="text-xs text-white/70 mt-1">183 days of coordination across 3 continents</p>
        </div>

        {/* Big Card 1: DECISIONS MADE */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white space-y-1">
          <div className="text-[10px] font-mono font-bold text-white/70 tracking-widest uppercase">
            DECISIONS MADE
          </div>
          <div className="text-4xl font-serif font-bold text-white">64</div>
          <p className="text-xs text-[#F5E9C8] font-medium">Nineteen of them by Meera</p>
        </div>

        {/* Grid Stats: VENDORS SEEN & SAVED VS BAND */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-white space-y-0.5">
            <div className="text-[9px] font-mono font-bold text-white/70 tracking-widest uppercase">
              VENDORS SEEN
            </div>
            <div className="text-2xl font-serif font-bold">218</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-white space-y-0.5">
            <div className="text-[9px] font-mono font-bold text-white/70 tracking-widest uppercase">
              SAVED VS BAND
            </div>
            <div className="text-2xl font-serif font-bold text-[#F5E9C8]">₹5.9L</div>
          </div>
        </div>

        {/* Big Card 2: MOST DEBATED DECISION */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white space-y-1.5">
          <div className="text-[10px] font-mono font-bold text-white/70 tracking-widest uppercase">
            MOST DEBATED DECISION
          </div>
          <p className="text-sm font-bold text-white leading-snug">
            The mandap flowers - 23 messages
          </p>
          <p className="text-xs text-[#F5E9C8] font-semibold">(Appa won.)</p>
        </div>

        {/* Big Card 3: YOUR PLANNING HOUR */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white space-y-1.5">
          <div className="text-[10px] font-mono font-bold text-white/70 tracking-widest uppercase">
            YOUR PLANNING HOUR
          </div>
          <p className="text-sm font-bold text-white">
            10:40 pm PST, Wednesdays
          </p>
          <p className="text-xs text-white/80 leading-relaxed">
            Appa's is 6:15 am IST. You have never once been online together.
          </p>
        </div>

      </View>

      {/* Bottom CTA Action Button */}
      <div className="p-4 bg-[#671B2B] shrink-0 border-t border-white/10">
        <button
          onClick={() => {
            setShared(true);
            setScreen('act6_share_moment');
          }}
          className="w-full py-3.5 bg-white text-[#8B1538] rounded-2xl text-xs font-bold border-none cursor-pointer hover:bg-gray-100 transition-colors shadow-lg"
        >
          Share to my story
        </button>
      </div>
    </View>
  );
};
