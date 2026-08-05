import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { colors } from '../theme';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, X, Clock, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

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
  const [shortlisted, setShortlisted] = useState<string[]>([]);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const card = mockDecorCards[currentIndex] || mockDecorCards[0];
  const itemsLeft = mockDecorCards.length - currentIndex;

  const handleAction = (action: 'skip' | 'later' | 'shortlist') => {
    if (action === 'shortlist') {
      setShortlisted([...shortlisted, card.vendorName]);
      setLastAction(`Shortlisted ${card.vendorName}`);
    } else if (action === 'skip') {
      setLastAction(`Skipped ${card.vendorName}`);
    } else {
      setLastAction(`Saved ${card.vendorName} for later`);
    }

    if (currentIndex < mockDecorCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Done -> Navigate to Reels or Blueprint
      setScreen('act6_reels');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Header with Progress Bar */}
      <div className="bg-[#1D1D1F] text-white px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_board')}
            className="p-1.5 rounded-lg bg-white/10 text-white border-none cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm font-serif font-bold">Mandap decor</span>
        </div>
        <span className="text-xs text-white/70 font-mono font-semibold">{itemsLeft} left</span>
      </div>

      {/* Top Gold Progress Bar */}
      <div className="w-full bg-[#1D1D1F] px-4 pb-2">
        <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
          <div 
            className="bg-[#C9A227] h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / mockDecorCards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Swipeable Card Area */}
      <View style={{ flex: 1, padding: '16px', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Card Container */}
        <div className="w-full max-w-[340px] bg-white rounded-3xl overflow-hidden shadow-xl border border-[#ECECEC] relative flex flex-col">
          {/* Main Visual Image */}
          <div className="h-[300px] bg-[#EBE4D8] relative overflow-hidden flex items-center justify-center">
            <img 
              src={card.image} 
              alt={card.mandapName}
              className="w-full h-full object-cover"
            />
            {/* Overlay Title */}
            <div className="absolute top-4 left-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl text-center">
              <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                {card.mandapName}
              </span>
            </div>
          </div>

          {/* Floating Details Box */}
          <div className="p-4 bg-white space-y-3">
            <div>
              <h2 className="text-base font-bold text-[#1D1D1F]">{card.vendorName}</h2>
              <p className="text-xs text-[#666666] mt-0.5">
                <span className="font-semibold text-[#8B1538]">{card.cost}</span> · {card.cost} fits your budget · {card.availableDate}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#FFF0F3] text-[#8B1538] border border-[#F8C8D4] text-[10px] font-bold px-2.5 py-1 rounded-full">
                {card.matchBadge}
              </span>
              <span className="bg-[#FAF7F2] text-[#4A4244] border border-[#E6D8C4] text-[10px] font-bold px-2.5 py-1 rounded-full">
                {card.familyBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls: Skip, Maybe Later, Shortlist */}
        <div className="flex items-center justify-center gap-5 mt-6">
          {/* Skip Button (X) */}
          <button
            onClick={() => handleAction('skip')}
            className="w-13 h-13 rounded-full bg-white border border-[#ECECEC] shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 cursor-pointer active:scale-95 transition-transform"
            title="Skip"
          >
            <X size={22} />
          </button>

          {/* Maybe Later Button (Clock) */}
          <button
            onClick={() => handleAction('later')}
            className="w-11 h-11 rounded-full bg-white border border-[#ECECEC] shadow-md flex items-center justify-center text-[#C9A227] hover:bg-gray-50 cursor-pointer active:scale-95 transition-transform"
            title="Maybe Later"
          >
            <Clock size={18} />
          </button>

          {/* Shortlist Button (Heart) */}
          <button
            onClick={() => handleAction('shortlist')}
            className="w-14 h-14 rounded-full bg-[#8B1538] text-white shadow-lg flex items-center justify-center hover:bg-[#72102D] cursor-pointer active:scale-95 transition-transform"
            title="Shortlist"
          >
            <Heart size={24} className="fill-white" />
          </button>
        </div>

        {/* Labels below controls */}
        <div className="flex justify-between w-[220px] text-[10px] text-[#666666] font-semibold mt-2 px-1">
          <span>Skip</span>
          <span>Maybe later</span>
          <span>Shortlist</span>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] text-center max-w-[340px] mt-4 leading-snug">
          Twelve cards, ninety seconds, and the decor shortlist is done. Then the family votes on what you kept.
        </div>
      </View>
    </View>
  );
};
