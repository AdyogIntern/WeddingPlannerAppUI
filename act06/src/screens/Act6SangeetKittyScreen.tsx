import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Check, Clock, Send, Globe, DollarSign, ArrowRight } from 'lucide-react';

export const Act6SangeetKittyScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [nudged, setNudged] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#ECECEC] px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_voice_discussion')}
            className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-gray-700 cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Voice Notes</span>
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-[#1D1D1F]">Sangeet kitty</h1>
            <p className="text-[10.5px] font-semibold text-[#8B1538]">₹1.24L of ₹1.80L collected</p>
          </div>
        </div>
        <button 
          onClick={() => setScreen('act6_board')}
          className="px-3 py-1 rounded-full bg-white border border-[#ECECEC] text-xs font-semibold text-gray-700 cursor-pointer"
        >
          Close
        </button>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Progress Bar Header */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-[#1D1D1F]">9 of 14 have paid</span>
            <span className="text-[10px] text-[#666666]">Closes 20 Oct</span>
          </div>

          <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
            <div className="bg-[#8B1538] h-full rounded-full" style={{ width: '68%' }} />
          </div>
        </div>

        {/* Member Contribution Rows */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            CONTRIBUTIONS
          </div>

          <div className="space-y-2.5 text-xs">
            {/* Meera */}
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <div>
                <span className="font-bold text-[#1D1D1F] block">Meera · Bangalore</span>
                <span className="text-[10px] text-green-700 font-semibold">Paid ₹18,000</span>
              </div>
              <Check size={16} className="text-green-600" />
            </div>

            {/* Ravi */}
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <div>
                <span className="font-bold text-[#1D1D1F] block">Ravi · Toronto</span>
                <span className="text-[10px] text-green-700 font-semibold">Paid CAD 300 = ₹18,400</span>
              </div>
              <Check size={16} className="text-green-600" />
            </div>

            {/* Anu */}
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <div>
                <span className="font-bold text-[#1D1D1F] block">Anu · Melbourne</span>
                <span className="text-[10px] text-green-700 font-semibold">Paid AUD 320 = ₹17,900</span>
              </div>
              <Check size={16} className="text-green-600" />
            </div>

            {/* Karthik */}
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <div>
                <span className="font-bold text-[#1D1D1F] block">Karthik · Chennai</span>
                <span className="text-[10px] text-amber-700 font-semibold">Reminded twice · ₹18,000</span>
              </div>
              <Clock size={16} className="text-amber-600" />
            </div>

            {/* Divya */}
            <div className="flex justify-between items-center py-1">
              <div>
                <span className="font-bold text-[#1D1D1F] block">Divya · London</span>
                <span className="text-[10px] text-gray-500 font-semibold">Not yet · £170</span>
              </div>
              <Clock size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Card: PAYS FROM ANYWHERE */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-1.5">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase flex items-center gap-1">
            <Globe size={12} className="text-[#8B1538]" />
            <span>PAYS FROM ANYWHERE</span>
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            UPI, card, or a local bank transfer in their own currency. Everyone sees the same total in rupees.
          </p>
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
          <span>{nudged ? 'Nudges sent!' : 'Nudge last five'}</span>
        </button>

        <button
          onClick={() => setScreen('act6_gift_registry')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>16. Gift Registry</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
