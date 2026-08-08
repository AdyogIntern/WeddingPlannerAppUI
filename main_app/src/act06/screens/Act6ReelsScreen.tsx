import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { Heart, CornerUpRight, Music } from 'lucide-react';

export const Act6ReelsScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [activeTab, setActiveTab] = useState<'For you' | 'Muhurtham' | 'Sangeet' | 'Decor'>('For you');
  const [liked, setLiked] = useState(false);

  const handleNext = () => {
    setScreen('act6_ar_preview');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#221E1F', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Filter Tabs */}
      <div className="px-6 py-4 flex items-center justify-between shrink-0 bg-[#221E1F]">
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
        {/* Simulated Video Frame with beautiful cover image */}
        <div 
          onClick={handleNext}
          className="w-full h-full relative overflow-hidden bg-[#221E1F] flex items-center justify-center cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1519225495810-7517c296517a?auto=format&fit=crop&w=800&q=80" 
            alt="Mandap video"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-white/90">
            VIDEO · 0:24
          </div>

          {/* Right Floating Action Sidebar Icons */}
          <div className="absolute right-6 bottom-16 flex flex-col items-center gap-6 z-20 text-white">
            <button 
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className="flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer text-white"
            >
              <Heart size={22} className={liked ? 'fill-[#8B1538] text-[#8B1538]' : 'text-white'} />
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
      <View style={{ backgroundColor: '#FAF8F5', flexShrink: 0 }}>
        {/* Explainer Footer Card */}
        <div className="p-6">
          <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed text-center">
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
              <span className={`text-[11px] font-bold ${item.active ? 'text-[#8B1538]' : 'text-[#A8A39D]'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </View>
    </View>
  );
};
