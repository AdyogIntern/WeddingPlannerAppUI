import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { Heart, CornerUpRight, Music } from 'lucide-react';

import imgMandapam from '../../assets/mandapam.jpg';

export const Act6ReelsScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [activeTab, setActiveTab] = useState<'For you' | 'Muhurtham' | 'Sangeet' | 'Decor'>('For you');
  const [liked, setLiked] = useState(false);

  const handleNext = () => {
    setScreen('act6_ar_preview');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#251C17', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Filter Tabs */}
      <div className="px-6 py-4 flex items-center justify-between shrink-0 bg-[#251C17]">
        {(['For you', 'Muhurtham', 'Sangeet', 'Decor'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="bg-transparent border-none cursor-pointer flex flex-col items-center"
          >
            <span className={`text-sm font-semibold transition-all ${
              activeTab === tab ? 'text-white font-bold' : 'text-white/50'
            }`}>
              {tab}
            </span>
            {activeTab === tab && (
              <div className="w-6 h-0.5 bg-[#C9A227] mt-1 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Main Reels Video Viewport */}
      <View style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* Simulated Video Frame with real wedding preview */}
        <div 
          onClick={handleNext}
          className="w-full h-full relative overflow-hidden flex items-center justify-center cursor-pointer select-none"
          style={{
            backgroundImage: `url(${imgMandapam})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Black gradient overlay for text and icons readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/45 pointer-events-none"></div>

          <span className="relative z-10 text-xs font-mono font-bold text-white/70 tracking-[0.16em] uppercase">
            VIDEO · 0:24
          </span>

          {/* Right Floating Action Sidebar Icons */}
          <div className="absolute right-6 bottom-16 flex flex-col items-center gap-6 z-20 text-white animate-fade-in">
            <button 
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className="flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer text-white"
            >
              <Heart size={22} className={liked ? 'fill-[#761A2D] text-[#761A2D]' : 'text-white'} />
              <span className="text-[10px] font-bold mt-1">2.1k</span>
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer text-white"
            >
              <CornerUpRight size={22} className="text-white" />
              <span className="text-[10px] font-bold mt-1">Send</span>
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer text-white"
            >
              <Music size={20} className="text-white" />
              <span className="text-[10px] font-bold mt-1">Save</span>
            </button>
          </div>

          {/* Bottom Overlay Info & Action Buttons */}
          <div className="absolute bottom-6 left-6 right-20 z-20 text-white space-y-4">
            <div>
              <h2 className="text-sm font-bold text-white leading-tight">
                Bloom & Thread · mandap, Feb 2026
              </h2>
              <p className="text-[11px] text-white/80 mt-1.5 leading-relaxed font-medium">
                420-guest Iyengar muhurtham at the Leela. Kanakambaram, banana stems, no drapes.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="px-5 py-3 rounded-xl text-xs font-bold bg-white text-[#1D1D1F] border-none cursor-pointer hover:bg-gray-100 font-sans"
              >
                Add to Muhurtham · ₹1.6L
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); setScreen('act6_board'); }}
                className="px-5 py-3 rounded-xl text-xs font-bold bg-transparent text-white border border-white/60 cursor-pointer hover:bg-white/10 font-sans"
              >
                Board
              </button>
            </div>
          </div>
        </div>
      </View>

      {/* Light Bottom Info Area */}
      <View style={{ backgroundColor: '#FAF6EE', flexShrink: 0 }}>
        {/* Explainer Footer Card */}
        <div className="p-6">
          <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed text-center">
            Every clip is a real wedding your team ran, and every clip has a price and a booking button attached. Browsing joy that converts.
          </div>
        </div>

        {/* Local Bottom Navigation Bar */}
        <div className="flex items-center justify-between border-t border-gray-200/80 px-6 py-4 bg-white">
          {[
            { label: 'Today', active: false },
            { label: 'Blueprint', active: false },
            { label: 'Discover', active: true },
            { label: 'Family', active: false },
            { label: 'Money', active: false },
          ].map((item) => (
            <button
              key={item.label}
              onClick={handleNext}
              className="bg-transparent border-none cursor-pointer flex flex-col items-center justify-center flex-1"
            >
              <span className={`text-[11px] font-bold ${item.active ? 'text-[#761A2D]' : 'text-[#A39C93]'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </View>
    </View>
  );
};
