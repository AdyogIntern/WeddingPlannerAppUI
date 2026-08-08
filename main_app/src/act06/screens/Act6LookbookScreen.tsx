import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6LookbookScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedLook, setSelectedLook] = useState<'muhurtham' | 'reception' | 'sangeet'>('muhurtham');

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0">
        <div />
        <button
          onClick={() => setScreen('act6_sangeet_studio')}
          className="text-sm font-semibold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          Share
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Your looks</h1>
        <p className="text-xs text-[#8A8580] mt-1 font-medium">Five functions · 3 looks locked</p>
      </div>

      {/* Main Content Viewport */}
      <View style={{ flex: 1, overflowY: 'auto', paddingHorizontal: '24px', paddingBottom: '24px', gap: '16px' }}>
        
        {/* Horizontal Outfit Cards Scroll */}
        <div className="flex items-center gap-4 overflow-x-auto pb-1 shrink-0 scrollbar-none">
          {/* Card 1: Muhurtham */}
          <button
            onClick={() => setSelectedLook('muhurtham')}
            className="flex flex-col gap-2 shrink-0 text-left border-none bg-transparent p-0 cursor-pointer"
          >
            <div className={`w-[130px] h-[170px] rounded-2xl bg-[#EFE8DC] overflow-hidden transition-all ${
              selectedLook === 'muhurtham' ? 'border-2 border-[#8B1538]' : 'border border-transparent'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=300&q=80" 
                alt="Muhurtham" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1D1D1F]">Muhurtham</h4>
              <p className="text-[10px] text-[#8A8580] font-medium">Arakku red korvai</p>
            </div>
          </button>

          {/* Card 2: Reception */}
          <button
            onClick={() => setSelectedLook('reception')}
            className="flex flex-col gap-2 shrink-0 text-left border-none bg-transparent p-0 cursor-pointer"
          >
            <div className={`w-[130px] h-[170px] rounded-2xl bg-[#EFE8DC] overflow-hidden transition-all ${
              selectedLook === 'reception' ? 'border-2 border-[#8B1538]' : 'border border-transparent'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=300&q=80" 
                alt="Reception" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1D1D1F]">Reception</h4>
              <p className="text-[10px] text-[#8A8580] font-medium">Ivory and gold</p>
            </div>
          </button>

          {/* Card 3: Sangeet */}
          <button
            onClick={() => setSelectedLook('sangeet')}
            className="flex flex-col gap-2 shrink-0 text-left border-none bg-transparent p-0 cursor-pointer"
          >
            <div className={`w-[130px] h-[170px] rounded-2xl bg-[#EFE8DC] overflow-hidden transition-all ${
              selectedLook === 'sangeet' ? 'border-2 border-[#8B1538]' : 'border border-transparent'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80" 
                alt="Sangeet" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1D1D1F]">Sa...</h4>
              <p className="text-[10px] text-[#8A8580] font-medium">Emerald lehenga</p>
            </div>
          </button>
        </div>

        {/* Card: THIS LOOK */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            THIS LOOK
          </div>

          <div className="space-y-2.5 text-xs text-[#1D1D1F]">
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#666666] font-medium">Kanchipuram silk · Nalli</span>
              <span className="font-bold">₹1.42L</span>
            </div>

            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#666666] font-medium">Temple jewellery · rented</span>
              <span className="font-bold">₹22,000</span>
            </div>

            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#666666] font-medium">Makeup & draping · Shalini</span>
              <span className="font-bold">₹34,000</span>
            </div>

            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#666666] font-medium">Flowers · jasmine, 2 yards</span>
              <span className="text-[#8A8580] font-medium">Included</span>
            </div>

            <div className="border-t border-gray-100 pt-3 mt-1 flex justify-between items-center font-bold text-sm">
              <span className="text-[#1D1D1F]">Look total</span>
              <span className="text-[#1D1D1F]">₹1.98L</span>
            </div>
          </div>
        </div>

        {/* Card: FITTING FITS YOUR TRIP */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            FITTING FITS YOUR TRIP
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Silk ordered by 05 Dec · fitting on day six, already blocked in your trip plan. Jewellery collected day seven.
          </p>
        </div>

        {/* Explainer Footer Box */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          Outfits are the most photographed decision in the wedding and the one couples agonise over. Treating it as a look, not a shopping list, is what makes it feel designed for them.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={() => setScreen('act6_sangeet_studio')}
          className="w-full py-4 bg-[#8B1538] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center shadow-xs"
        >
          Ask Meera what she thinks
        </button>
      </div>
    </View>
  );
};
