import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6SangeetKittyScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  const handleNext = () => {
    setScreen('act6_gift_registry');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0">
        <div />
        <button 
          onClick={handleNext}
          className="text-sm font-semibold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          Close
        </button>
      </div>

      {/* Title Block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Sangeet kitty</h1>
        <p className="text-xs text-[#8A8580] mt-1 font-medium">₹1.24L of ₹1.80L collected</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingHorizontal: '24px', paddingBottom: '24px', gap: '16px' }}>
        
        {/* Progress Bar Header */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="w-full bg-[#FAF2EE] h-3 rounded-full overflow-hidden">
            <div className="bg-[#8B1538] h-full rounded-full" style={{ width: '68%' }} />
          </div>

          <div className="flex justify-between items-center text-[11px] font-bold text-[#8A8580] font-mono">
            <span>9 of 14 have paid</span>
            <span>Closes 20 Oct</span>
          </div>
        </div>

        {/* Member Contribution Rows */}
        <div className="space-y-3">
          {/* Meera */}
          <div className="bg-white p-4 rounded-[20px] border border-[#ECECEC] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Meera" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Meera · Bangalore</h4>
                <p className="text-[10px] text-green-700 mt-1 font-bold">Paid</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">₹18,000</span>
          </div>

          {/* Ravi */}
          <div className="bg-white p-4 rounded-[20px] border border-[#ECECEC] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Ravi" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Ravi · Toronto</h4>
                <p className="text-[10px] text-green-700 mt-1 font-bold">Paid</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">CAD 300 ≈ ₹18,400</span>
          </div>

          {/* Anu */}
          <div className="bg-white p-4 rounded-[20px] border border-[#ECECEC] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Anu" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Anu · Melbourne</h4>
                <p className="text-[10px] text-green-700 mt-1 font-bold">Paid</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">AUD 320 ≈ ₹17,900</span>
          </div>

          {/* Karthik */}
          <div className="bg-white p-4 rounded-[20px] border border-[#ECECEC] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Karthik" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Karthik · Chennai</h4>
                <p className="text-[10px] text-[#C9A227] mt-1 font-bold">Reminded twice</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">₹18,000</span>
          </div>

          {/* Divya */}
          <div className="bg-white p-4 rounded-[20px] border border-[#ECECEC] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Divya" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Divya · London</h4>
                <p className="text-[10px] text-[#8A8580] mt-1 font-bold">Not yet</p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D1D1F]">£170</span>
          </div>
        </div>

        {/* Card: PAYS FROM ANYWHERE */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            PAYS FROM ANYWHERE
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            UPI, card, or a local bank transfer in their own currency. Everyone sees the same total in rupees.
          </p>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          Cousins have always split the sangeet. Nobody has ever had a clean way to do it across six countries.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-[#8B1538] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center shadow-xs"
        >
          Nudge the last five
        </button>
      </div>
    </View>
  );
};
