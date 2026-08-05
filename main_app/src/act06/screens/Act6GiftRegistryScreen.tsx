import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Gift, Heart, Share2, Check, ArrowRight } from 'lucide-react';

export const Act6GiftRegistryScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [shared, setShared] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#ECECEC] px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_sangeet_kitty')}
            className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-gray-700 cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Sangeet Kitty</span>
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-[#1D1D1F]">Gift registry</h1>
            <p className="text-[10.5px] text-[#666666]">Shared with the invitation</p>
          </div>
        </div>
        <button className="px-3 py-1 rounded-full bg-white border border-[#ECECEC] text-xs font-semibold text-gray-700 cursor-pointer">
          Edit
        </button>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Card: WHAT THE COUPLE WOULD LOVE */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase flex items-center gap-1">
            <Gift size={12} className="text-[#8B1538]" />
            <span>WHAT THE COUPLE WOULD LOVE</span>
          </div>

          <div className="space-y-3">
            {/* Item 1 */}
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#ECECEC] space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1D1D1F]">Honeymoon in Sri Lanka</span>
                <span className="font-bold text-[#8B1538]">₹2.4L</span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8B1538] h-full rounded-full" style={{ width: '62%' }} />
              </div>
              <span className="text-[10px] text-[#666666] block text-right font-medium">62% funded</span>
            </div>

            {/* Item 2 */}
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#ECECEC] space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1D1D1F]">First home fund</span>
                <span className="font-bold text-[#8B1538]">₹5.0L</span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8B1538] h-full rounded-full" style={{ width: '18%' }} />
              </div>
              <span className="text-[10px] text-[#666666] block text-right font-medium">18% funded</span>
            </div>

            {/* Item 3 */}
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#ECECEC] space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1D1D1F]">Gift to Udhavum Karangal</span>
                <span className="font-bold text-green-700">₹41,000 so far</span>
              </div>
              <span className="text-[10px] text-[#666666]">Any amount contribution</span>
            </div>
          </div>
        </div>

        {/* Card: OR THE TRADITIONAL WAY */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-2.5">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            OR THE TRADITIONAL WAY
          </div>

          <div className="flex flex-wrap gap-2">
            {['Silver items', 'Kanchipuram silk', 'Brass vessels'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-[#FAF7F2] text-[#4A4244] border border-[#E6D8C4] text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          South Asian guests want to give. Give them options they feel good about, and stop three pressure cookers arriving at the hall.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-white border-t border-[#ECECEC] shrink-0 flex gap-2">
        <button
          onClick={() => setShared(true)}
          className={`flex-1 py-3 rounded-2xl text-xs font-bold border-none cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-xs ${
            shared ? 'bg-green-700 text-white' : 'bg-[#8B1538] text-white hover:bg-[#72102D]'
          }`}
        >
          {shared ? <Check size={16} /> : <Share2 size={16} />}
          <span>{shared ? 'Registry shared!' : 'Share with 620 guests'}</span>
        </button>

        <button
          onClick={() => setScreen('act6_board')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>1. Live Board</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
