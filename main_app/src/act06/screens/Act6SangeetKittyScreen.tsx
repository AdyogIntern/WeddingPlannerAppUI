import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6SangeetKittyScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  const handleNext = () => {
    setScreen('act6_gift_registry');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0 text-xs font-semibold text-[#8A8580]">
        <span></span>
        <button 
          onClick={handleNext}
          className="text-xs font-bold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          Close
        </button>
      </div>

      {/* Title Block */}
      <div className="px-6 pb-4 text-left">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Sangeet kitty</h1>
        <p className="text-xs text-[#8E867E] mt-1 font-medium">₹1.24L of ₹1.80L collected</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '24px', gap: '14px' }}>
        
        {/* Progress Bar Header */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-3">
          <div className="w-full bg-[#FAF2EE] h-3 rounded-full overflow-hidden">
            <div className="bg-[#761A2D] h-full rounded-full" style={{ width: '68%' }} />
          </div>

          <div className="flex justify-between items-center text-[11px] font-bold text-[#8E867E] font-mono">
            <span>9 of 14 have paid</span>
            <span>Closes 20 Oct</span>
          </div>
        </div>

        {/* Member Contribution Rows */}
        <div className="space-y-3 text-left">
          {/* Meera */}
          <div className="bg-white p-4 rounded-[20px] border border-[#EADFCF] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EADFCF] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Meera · Bangalore</h4>
                <p className="text-[10px] text-[#2E7D32] mt-1 font-bold">Paid</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">₹18,000</span>
          </div>

          {/* Ravi */}
          <div className="bg-white p-4 rounded-[20px] border border-[#EADFCF] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EADFCF] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Ravi · Toronto</h4>
                <p className="text-[10px] text-[#2E7D32] mt-1 font-bold">Paid</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">CAD 300 ≈ ₹18,400</span>
          </div>

          {/* Anu */}
          <div className="bg-white p-4 rounded-[20px] border border-[#EADFCF] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EADFCF] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Anu · Melbourne</h4>
                <p className="text-[10px] text-[#2E7D32] mt-1 font-bold">Paid</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">AUD 320 ≈ ₹17,900</span>
          </div>

          {/* Karthik */}
          <div className="bg-white p-4 rounded-[20px] border border-[#EADFCF] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EADFCF] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Karthik · Chennai</h4>
                <p className="text-[10px] text-[#C9A227] mt-1 font-bold">Reminded twice</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">₹18,000</span>
          </div>

          {/* Divya */}
          <div className="bg-white p-4 rounded-[20px] border border-[#EADFCF] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EADFCF] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Divya · London</h4>
                <p className="text-[10px] text-[#8E867E] mt-1 font-bold">Not yet</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">£170</span>
          </div>
        </div>

        {/* Card: PAYS FROM ANYWHERE */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-3 text-left">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            PAYS FROM ANYWHERE
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            UPI, card, or a local bank transfer in their own currency. Everyone sees the same total in rupees.
          </p>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed text-left">
          Cousins have always split the sangeet. Nobody has ever had a clean way to do it across six countries.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#EADFCF] shrink-0">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-[#761A2D] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#621423] transition-colors flex items-center justify-center"
        >
          Nudge the last five
        </button>
      </div>
    </View>
  );
};
