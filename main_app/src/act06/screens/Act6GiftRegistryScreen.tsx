import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6GiftRegistryScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  const handleNext = () => {
    setScreen('act6_board');
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
          Edit
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Gift registry</h1>
        <p className="text-xs text-[#8A8580] mt-1 font-medium">Shared with the invitation</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingHorizontal: '24px', paddingBottom: '24px', gap: '16px' }}>
        
        {/* Card: WHAT THE COUPLE WOULD LOVE */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            WHAT THE COUPLE WOULD LOVE
          </div>

          <div className="space-y-4">
            {/* Item 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1D1D1F]">Honeymoon in Sri Lanka</span>
                <span className="font-bold text-[#1D1D1F]">₹2.4L</span>
              </div>
              <div className="w-full bg-[#FAF2EE] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8B1538] h-full rounded-full" style={{ width: '62%' }} />
              </div>
              <span className="text-[10px] text-[#8A8580] font-medium block">62% funded</span>
            </div>

            {/* Item 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1D1D1F]">First home fund</span>
                <span className="font-bold text-[#1D1D1F]">₹5L</span>
              </div>
              <div className="w-full bg-[#FAF2EE] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8B1538] h-full rounded-full" style={{ width: '18%' }} />
              </div>
              <span className="text-[10px] text-[#8A8580] font-medium block">18% funded</span>
            </div>

            {/* Item 3 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1D1D1F]">A gift to Udhavum Karangal</span>
                <span className="font-bold text-[#1D1D1F]">Any amount</span>
              </div>
              <div className="w-full bg-[#8B1538] h-1.5 rounded-full" />
              <span className="text-[10px] text-[#8A8580] font-medium block">₹41,000 so far</span>
            </div>
          </div>
        </div>

        {/* Card: OR THE TRADITIONAL WAY */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            OR THE TRADITIONAL WAY
          </div>

          <div className="flex flex-wrap gap-2.5">
            {['Silver items', 'Kanchipuram silk', 'Brass vessels'].map((tag) => (
              <span key={tag} className="px-4 py-2.5 rounded-xl bg-white text-[#1D1D1F] border border-[#ECECEC] text-xs font-bold">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs text-[#8A8580] font-medium leading-relaxed">
            Elders can still give what they always give. Nobody is embarrassed.
          </p>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          Overseas guests hate carrying gifts on a flight and love giving something that gets used. This screen also tells you exactly which honeymoon to sell them.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-[#8B1538] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center shadow-xs"
        >
          Share with 620 guests
        </button>
      </div>
    </View>
  );
};
