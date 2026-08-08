import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { X, Clock, Heart } from 'lucide-react';

interface DecorCardItem {
  id: string;
  mandapName: string;
  vendorName: string;
  cost: string;
  availableDate: string;
  matchBadge: string;
  familyBadge: string;
  image: string;
}

const mockDecorCards: DecorCardItem[] = [
  {
    id: 'd1',
    mandapName: 'KANAKAMBARAM MANDAP',
    vendorName: 'Bloom & Thread',
    cost: '₹1.6L',
    availableDate: 'free 14 Feb',
    matchBadge: 'Matches your board',
    familyBadge: 'Amma will like this',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'd2',
    mandapName: 'WHITE JASMINE CANOPY',
    vendorName: 'Studio Verdant',
    cost: '₹2.1L',
    availableDate: 'free 14 Feb',
    matchBadge: 'High visual match',
    familyBadge: 'Patti approved style',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'd3',
    mandapName: 'TEMPLE BRASS & LOTUS',
    vendorName: 'Sri Decorators',
    cost: '₹1.4L',
    availableDate: 'free 14 Feb',
    matchBadge: 'Fits budget perfectly',
    familyBadge: 'Traditional favorite',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
  },
];

export const Act6SwipeScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const card = mockDecorCards[currentIndex] || mockDecorCards[0];
  const itemsLeft = 12 - currentIndex;

  const handleAction = () => {
    if (currentIndex < mockDecorCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setScreen('act6_reels');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Header with Progress Bar */}
      <div className="bg-[#1C1617] text-white px-6 pt-5 pb-3 flex items-center justify-between shrink-0">
        <span className="text-sm font-semibold">Mandap decor</span>
        <span className="text-xs text-white/60 font-medium">{itemsLeft} left</span>
      </div>

      {/* Top Gold Progress Bar */}
      <div className="w-full bg-[#1C1617] px-6 pb-4">
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-[#C9A227] h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / 12) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Swipeable Card Area */}
      <View style={{ flex: 1, padding: '24px', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        
        {/* Card Container */}
        <div className="w-full max-w-[340px] bg-white rounded-[24px] overflow-hidden shadow-md border border-[#ECECEC] flex flex-col">
          {/* Main Visual Image (Solid beige box with image and text overlay) */}
          <div className="aspect-[1.1] bg-[#EFE8DC] overflow-hidden relative">
            <img 
              src={card.image} 
              alt={card.mandapName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-white tracking-widest uppercase bg-black/40 px-3 py-1.5 rounded-lg">
                {card.mandapName}
              </span>
            </div>
          </div>

          {/* Details Box */}
          <div className="p-5 bg-white space-y-3">
            <div>
              <h2 className="text-[17px] font-bold text-[#1D1D1F] leading-tight">{card.vendorName}</h2>
              <p className="text-xs text-[#8A8580] mt-1 font-medium">
                {card.cost} · fits your budget · {card.availableDate}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-[#FFF0F3] text-[#8B1538] text-[10px] font-bold px-3 py-1 rounded-full">
                {card.matchBadge}
              </span>
              <span className="bg-[#FAF2EE] text-[#8B1538]/80 text-[10px] font-bold px-3 py-1 rounded-full">
                {card.familyBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls: Skip, Maybe Later, Shortlist */}
        <div className="flex flex-col items-center gap-2 mt-2 w-full">
          <div className="flex items-center justify-center gap-5">
            {/* Skip Button (X) */}
            <button
              onClick={handleAction}
              className="w-16 h-16 rounded-full bg-white border border-[#EBE7DF] shadow-xs flex items-center justify-center text-[#1D1D1F] hover:bg-gray-50 cursor-pointer active:scale-95 transition-transform"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* Maybe Later Button (Clock) */}
            <button
              onClick={handleAction}
              className="w-14 h-14 rounded-full bg-white border border-[#EBE7DF] shadow-xs flex items-center justify-center text-[#C9A227] hover:bg-gray-50 cursor-pointer active:scale-95 transition-transform"
            >
              <Clock size={20} strokeWidth={2.5} />
            </button>

            {/* Shortlist Button (Heart) */}
            <button
              onClick={handleAction}
              className="w-16 h-16 rounded-full bg-[#8B1538] text-white shadow-sm flex items-center justify-center hover:bg-[#72102D] cursor-pointer active:scale-95 transition-transform border-none"
            >
              <Heart size={24} className="fill-white" />
            </button>
          </div>

          {/* Labels below controls */}
          <span className="text-[11px] text-[#A8A39D] font-bold mt-2 tracking-wide">
            Skip · Maybe later · Shortlist
          </span>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed text-center max-w-[340px] mt-2">
          Twelve cards, ninety seconds, and the decor shortlist is done. Then the family votes on what you kept.
        </div>
      </View>
    </View>
  );
};
