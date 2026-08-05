import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Share2, Sparkles, MessageCircle, Check, ArrowRight } from 'lucide-react';

export const Act6LookbookScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedLook, setSelectedLook] = useState<'muhurtham' | 'reception' | 'sangeet'>('muhurtham');
  const [askedMeera, setAskedMeera] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#ECECEC] px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_ar_preview')}
            className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-gray-700 cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>AR Mandap</span>
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-[#1D1D1F]">Your looks</h1>
            <p className="text-[10.5px] text-[#666666]">Five functions · 3 looks locked</p>
          </div>
        </div>
        <button className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-[#1D1D1F] cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold">
          <Share2 size={14} />
          <span>Share</span>
        </button>
      </div>

      {/* Main Content Viewport */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Horizontal Outfit Cards Scroll */}
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {/* Card 1: Muhurtham */}
          <button
            onClick={() => setSelectedLook('muhurtham')}
            className={`w-32 h-44 rounded-2xl p-2.5 shrink-0 text-left border-2 cursor-pointer flex flex-col justify-between transition-all ${
              selectedLook === 'muhurtham'
                ? 'border-[#8B1538] bg-[#FFF0F3] shadow-sm'
                : 'border-[#ECECEC] bg-white hover:border-gray-300'
            }`}
          >
            <div className="w-full h-24 rounded-xl bg-[#8B1538]/20 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=300&q=80" 
                alt="Muhurtham Saree" 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1.5 right-1.5 bg-[#8B1538] text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-md">
                LOCKED
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1D1D1F]">Muhurtham</h4>
              <p className="text-[10px] text-[#666666]">Arakku red korvai</p>
            </div>
          </button>

          {/* Card 2: Reception */}
          <button
            onClick={() => setSelectedLook('reception')}
            className={`w-32 h-44 rounded-2xl p-2.5 shrink-0 text-left border-2 cursor-pointer flex flex-col justify-between transition-all ${
              selectedLook === 'reception'
                ? 'border-[#8B1538] bg-[#FFF0F3] shadow-sm'
                : 'border-[#ECECEC] bg-white hover:border-gray-300'
            }`}
          >
            <div className="w-full h-24 rounded-xl bg-[#F5E9C8] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=300&q=80" 
                alt="Reception Look" 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1.5 right-1.5 bg-[#C9A227] text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-md">
                LOCKED
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1D1D1F]">Reception</h4>
              <p className="text-[10px] text-[#666666]">Ivory and gold</p>
            </div>
          </button>

          {/* Card 3: Sangeet */}
          <button
            onClick={() => setSelectedLook('sangeet')}
            className={`w-32 h-44 rounded-2xl p-2.5 shrink-0 text-left border-2 cursor-pointer flex flex-col justify-between transition-all ${
              selectedLook === 'sangeet'
                ? 'border-[#8B1538] bg-[#FFF0F3] shadow-sm'
                : 'border-[#ECECEC] bg-white hover:border-gray-300'
            }`}
          >
            <div className="w-full h-24 rounded-xl bg-[#2E7D32]/20 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80" 
                alt="Sangeet Lehenga" 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1.5 right-1.5 bg-gray-500 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-md">
                DRAFT
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1D1D1F]">Sangeet</h4>
              <p className="text-[10px] text-[#666666]">Emerald lehenga</p>
            </div>
          </button>
        </div>

        {/* Card: THIS LOOK */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            THIS LOOK
          </div>

          <div className="space-y-2 text-xs text-[#1D1D1F]">
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span>Kanchipuram silk · Nalli</span>
              <span className="font-bold text-[#1D1D1F]">₹1.42L</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span>Temple jewellery · rented</span>
              <span className="font-bold text-[#1D1D1F]">₹22,000</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span>Makeup & draping · Shalini</span>
              <span className="font-bold text-[#1D1D1F]">₹34,000</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span>Flowers · jasmine, 2 yards</span>
              <span className="font-semibold text-green-700">Included</span>
            </div>

            <div className="flex justify-between items-center pt-2 font-bold text-sm text-[#8B1538]">
              <span>Look total</span>
              <span>₹1.98L</span>
            </div>
          </div>
        </div>

        {/* Card: FITTING FITS YOUR TRIP */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-2">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            FITTING FITS YOUR TRIP
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Silk ordered by <strong>05 Dec</strong> — fitting on day six, already blocked in your trip plan. Jewellery collected day seven.
          </p>
        </div>

        {/* Explainer Footer Box */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          Outfits are the most photographed decision in the wedding and the one couples agonise over. Treating it as a look, not a shopping list, is what makes it feel designed for them.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-white border-t border-[#ECECEC] shrink-0 flex gap-2">
        <button
          onClick={() => setAskedMeera(!askedMeera)}
          className={`flex-1 py-3 rounded-2xl text-xs font-bold border-none cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-xs ${
            askedMeera ? 'bg-green-700 text-white' : 'bg-[#8B1538] text-white hover:bg-[#72102D]'
          }`}
        >
          {askedMeera ? <Check size={16} /> : <MessageCircle size={16} />}
          <span>{askedMeera ? 'Sent to Meera!' : 'Ask Meera'}</span>
        </button>

        <button
          onClick={() => setScreen('act6_sangeet_studio')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>6. Sangeet Studio</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
