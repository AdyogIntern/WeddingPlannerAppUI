import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { colors } from '../theme';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Check, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export const ComparePlansScreen: React.FC = () => {
  const { 
    planVersions, 
    mergeAgreedDecisions, 
    setScreen 
  } = useWeddingStore();

  const [activeVersion, setActiveVersion] = useState<'priya' | 'amma'>('priya');
  const [merged, setMerged] = useState(false);

  const { priya, amma } = planVersions;

  const handleMerge = () => {
    mergeAgreedDecisions();
    setMerged(true);
    setTimeout(() => {
      setScreen('share_plan'); // Smooth navigation to Screen 11 (198 days to go / Nudges)
    }, 600);
  };

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: '#FAF8F5', 
        paddingLeft: '22px', paddingRight: '22px',
        paddingTop: '12px',
        paddingBottom: '80px',
        minHeight: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* ================= TOP HEADER ================= */}
      <View style={{ flexShrink: 0 }}>
        <div className="flex justify-between items-center mb-1">
          <button
            onClick={() => setScreen('blueprint_home')}
            className="flex items-center gap-1 text-xs font-semibold text-gray-700 bg-transparent border-none cursor-pointer hover:text-gray-900"
          >
            <ChevronLeft size={16} />
            <span>Blueprint</span>
          </button>
          
          <button
            onClick={() => setScreen('share_plan')}
            className="text-[11px] font-bold text-[#671B2B] bg-[#F5E9C8] px-2.5 py-1 rounded-full border border-[#E0D0A0] cursor-pointer hover:bg-[#EEDCA8]"
          >
            Nudges (Screen 11) →
          </button>
        </div>

        <h1 className="text-xl font-serif font-bold text-gray-900 leading-tight">
          Two versions
        </h1>
        <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
          Compare, then merge what everyone agrees on.
        </p>

        {/* Priya's / Amma's Top Version Selector Pills */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button
            onClick={() => setActiveVersion('priya')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border-none cursor-pointer text-center ${
              activeVersion === 'priya' 
                ? 'bg-[#671B2B] text-white shadow-2xs' 
                : 'bg-[#EFE7DC] text-gray-800 hover:bg-[#E5DACB]'
            }`}
          >
            Priya's
          </button>
          <button
            onClick={() => setActiveVersion('amma')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border-none cursor-pointer text-center ${
              activeVersion === 'amma' 
                ? 'bg-[#671B2B] text-white shadow-2xs' 
                : 'bg-[#EFE7DC] text-gray-800 hover:bg-[#E5DACB]'
            }`}
          >
            Amma's
          </button>
        </div>
      </View>

      {/* ================= MAIN SIDE-BY-SIDE COMPARISON GRID ================= */}
      <View style={{ flex: 1, overflowY: 'auto', paddingRight: '2px', gap: '10px', paddingTop: '10px' }}>
        
        {/* Row 1: TOTAL COST */}
        <div className="grid grid-cols-2 gap-2">
          {/* Priya Total */}
          <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs space-y-0.5">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">
              TOTAL
            </span>
            <div className="text-base font-bold text-gray-900 font-sans">
              ₹{(priya.totalCostINR / 100000).toFixed(1)}L
            </div>
          </div>

          {/* Amma Total */}
          <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs space-y-0.5">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">
              TOTAL
            </span>
            <div className="text-base font-bold text-gray-900 font-sans">
              ₹{(amma.totalCostINR / 100000).toFixed(1)}L
            </div>
          </div>
        </div>

        {/* Row 2: VENUE */}
        <div className="space-y-1">
          <span className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">
            VENUE
          </span>
          <div className="grid grid-cols-2 gap-2">
            {/* Priya's Venue (Highlighted with burgundy border) */}
            <div className="bg-white p-3 rounded-2xl border-2 border-[#671B2B] shadow-2xs space-y-1">
              <div className="text-xs font-bold text-gray-900 leading-snug">
                {priya.venue}
              </div>
              <div className="text-[10px] text-gray-500 font-semibold">
                ₹8.4L
              </div>
            </div>

            {/* Amma's Venue */}
            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs space-y-1">
              <div className="text-xs font-bold text-gray-900 leading-snug">
                {amma.venue}
              </div>
              <div className="text-[10px] text-gray-500 font-semibold">
                ₹3.1L
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: GUESTS · MUHURTHAM */}
        <div className="space-y-1">
          <span className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">
            GUESTS · MUHURTHAM
          </span>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs text-xs font-bold text-gray-900">
              {priya.guestCount}
            </div>
            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs text-xs font-bold text-gray-900">
              {amma.guestCount}
            </div>
          </div>
        </div>

        {/* Row 4: DECOR */}
        <div className="space-y-1">
          <span className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">
            DECOR
          </span>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs space-y-1">
              <div className="text-xs font-bold text-gray-900 leading-snug">
                {priya.decorStyle}
              </div>
              <div className="text-[10px] text-gray-500 font-semibold">
                ₹2.4L
              </div>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs space-y-1">
              <div className="text-xs font-bold text-gray-900 leading-snug">
                {amma.decorStyle}
              </div>
              <div className="text-[10px] text-gray-500 font-semibold">
                ₹1.6L
              </div>
            </div>
          </div>
        </div>

        {/* PINKISH SUMMARY CALLOUT BOX */}
        <div className="bg-[#FAF0F2] p-3.5 rounded-2xl border border-[#F2D6DC] text-[10.5px] text-[#671B2B] leading-relaxed">
          {merged 
            ? 'All decisions have been merged into the master blueprint!' 
            : 'You agree on 7 of 10 decisions. The gap is venue and guest count — worth one call, not ten messages.'}
        </div>

      </View>

      {/* ================= BOTTOM ACTION BAR ================= */}
      <View style={{ paddingTop: '8px', flexShrink: 0 }}>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleMerge}
            className="w-[65%] max-w-[210px] py-2.5 bg-[#671B2B] text-white rounded-md text-xs font-bold border-none cursor-pointer shadow-2xs hover:bg-[#521422] transition-colors flex items-center justify-center gap-1.5 text-center"
          >
            {merged ? <Check size={14} /> : null}
            <span>{merged ? 'Merged Agreed 7!' : 'Merge the agreed 7'}</span>
          </button>

          <button
            onClick={() => setScreen('share_plan')}
            className="py-2.5 px-3.5 bg-[#EFE7DC] text-gray-800 rounded-md text-xs font-bold border-none cursor-pointer hover:bg-[#E5DACB] transition-colors text-center"
          >
            Discuss
          </button>
        </div>
      </View>
    </View>
  );
};
