import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { X, Clock, Heart } from 'lucide-react';

import imgMandapam from '../../assets/mandapam.jpg';
import imgArPreview from '../../assets/ar_stage_preview.jpg';

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
    image: imgMandapam,
  },
  {
    id: 'd2',
    mandapName: 'WHITE JASMINE CANOPY',
    vendorName: 'Studio Verdant',
    cost: '₹2.1L',
    availableDate: 'free 14 Feb',
    matchBadge: 'High visual match',
    familyBadge: 'Patti approved style',
    image: imgArPreview,
  },
  {
    id: 'd3',
    mandapName: 'TEMPLE BRASS & LOTUS',
    vendorName: 'Sri Decorators',
    cost: '₹1.4L',
    availableDate: 'free 14 Feb',
    matchBadge: 'Fits budget perfectly',
    familyBadge: 'Traditional favorite',
    image: imgMandapam,
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
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Header with Progress Bar */}
      <div className="bg-[#251C17] text-white px-6 pt-5 pb-5 flex items-center justify-between shrink-0 relative">
        <span className="text-sm font-semibold">Mandap decor</span>
        <span className="text-xs text-white/60 font-medium">{itemsLeft} left</span>
        
        {/* Top Gold Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
          <div 
            className="bg-[#E4B650] h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / 12) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Swipeable Card Area */}
      <View style={{ flex: 1, padding: '16px', justifyContent: 'center', alignItems: 'center', gap: '14px' }}>
        
        {/* Card Container */}
        <div className="w-full max-w-[340px] bg-white rounded-[20px] overflow-hidden border border-[#EADFCF] flex flex-col">
          {/* Main Visual Box (Image with centered text label) */}
          <div 
            className="aspect-[1.1] relative flex items-end justify-start p-5 select-none overflow-hidden"
            style={{
              backgroundImage: card.image ? `url(${card.image})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/35 pointer-events-none"></div>
            <span className="relative z-10 text-[11px] font-bold text-white tracking-[0.12em] uppercase font-sans bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              {card.mandapName}
            </span>
          </div>

          {/* Details Box */}
          <div className="p-5 bg-white space-y-3">
            <div>
              <h2 className="text-[17px] font-bold text-[#1D1D1F] leading-tight">{card.vendorName}</h2>
              <p className="text-xs text-[#8E867E] mt-1 font-medium">
                {card.cost} · fits your budget · {card.availableDate}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-[#FAF0F2] text-[#8B1538] text-[10px] font-bold px-3 py-1.5 rounded-full">
                {card.matchBadge}
              </span>
              <span className="bg-[#F5ECE8] text-[#5A483F] text-[10px] font-bold px-3 py-1.5 rounded-full">
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
              className="w-16 h-16 rounded-full bg-white border border-[#EADFCF] flex items-center justify-center text-[#8E867E] hover:bg-gray-50 cursor-pointer active:scale-95 transition-transform"
            >
              <X size={24} strokeWidth={2} />
            </button>

            {/* Maybe Later Button (Clock) */}
            <button
              onClick={handleAction}
              className="w-12 h-12 rounded-full bg-white border border-[#EADFCF] flex items-center justify-center text-[#E4B650] hover:bg-gray-50 cursor-pointer active:scale-95 transition-transform"
            >
              <Clock size={18} strokeWidth={2} />
            </button>

            {/* Shortlist Button (Heart) */}
            <button
              onClick={handleAction}
              className="w-16 h-16 rounded-full bg-[#761A2D] text-white flex items-center justify-center hover:bg-[#621423] cursor-pointer active:scale-95 transition-transform border-none"
            >
              <Heart size={24} className="fill-white" />
            </button>
          </div>

          {/* Labels below controls */}
          <span className="text-[11px] text-[#A39C93] font-bold mt-2 tracking-wide">
            Skip · Maybe later · Shortlist
          </span>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed text-center max-w-[340px] mt-2">
          Twelve cards, ninety seconds, and the decor shortlist is done. Then the family votes on what you kept.
        </div>
      </View>
    </View>
  );
};
