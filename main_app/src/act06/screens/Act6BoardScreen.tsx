import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6BoardScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0">
        <div />
        <button
          onClick={() => setScreen('act6_gift_registry')}
          className="text-sm font-bold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          + Add
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Your board</h1>
        <p className="text-xs text-[#8A8580] mt-1 font-medium">47 saved · Priya, Meera and Amma</p>
      </div>

      {/* Main Content Scrollable Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingHorizontal: '24px', paddingBottom: '24px', gap: '16px' }}>
        
        {/* Moodboard Image Tiles Grid (Photo Pins) */}
        <div className="grid grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            <div className="h-[180px] rounded-2xl bg-[#EFE8DC] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80" 
                alt="Jasmine Canopy Mandap" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[96px] rounded-2xl bg-[#EFE8DC] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80" 
                alt="Floral Details" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[96px] rounded-2xl bg-[#EFE8DC] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80" 
                alt="Brass Kuthuvilakku" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            <div className="h-[96px] rounded-2xl bg-[#EFE8DC] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=400&q=80" 
                alt="Marigold details" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[96px] rounded-2xl bg-[#EFE8DC] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=400&q=80" 
                alt="Arakku Red Silk saree" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[180px] rounded-2xl bg-[#EFE8DC] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519225495810-7517c296517a?auto=format&fit=crop&w=400&q=80" 
                alt="Wedding decor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Card: WHAT YOUR BOARD IS TELLING US */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            WHAT YOUR BOARD IS TELLING US
          </div>

          {/* Color Palette Chips */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8B1538] border border-black/5" />
            <div className="w-8 h-8 rounded-full bg-[#C9A227] border border-black/5" />
            <div className="w-8 h-8 rounded-full bg-[#F5E9C8] border border-black/5" />
            <div className="w-8 h-8 rounded-full bg-[#2E7D32] border border-black/5" />
          </div>

          <p className="text-sm text-[#1D1D1F] leading-relaxed">
            <strong className="font-bold">Temple-traditional, with a modern hand.</strong> Heavy on jasmine and kanakambaram, low on drapes, warm lighting.
          </p>
        </div>

        {/* Card: MATCHED TO YOUR BOARD */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            MATCHED TO YOUR BOARD
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { name: 'Bloom & Thread', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=150&q=80' },
              { name: 'Studio Verdant', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=150&q=80' },
              { name: 'Sri Decorators', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=150&q=80' },
            ].map((v) => (
              <div key={v.name} className="flex flex-col items-center gap-2">
                <div className="w-full aspect-square rounded-[14px] bg-[#EFE8DC] overflow-hidden">
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] font-semibold text-[#1D1D1F] text-center leading-tight">{v.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Link Box */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] border-none">
          <p className="text-xs text-[#8B1538] font-medium leading-relaxed">
            Paste an Instagram link and it lands here. The board is how a 29-year-old starts planning — not with a budget field.
          </p>
        </div>

      </View>

      {/* Sticky Bottom Action Button */}
      <div className="p-6 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={() => setScreen('act6_swipe')}
          className="w-full py-4 bg-[#8B1538] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center shadow-xs"
        >
          Turn the board into a decor brief
        </button>
      </div>
    </View>
  );
};
