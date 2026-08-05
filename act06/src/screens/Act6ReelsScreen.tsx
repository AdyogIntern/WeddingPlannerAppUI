import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { Heart, Send, Bookmark, Play, Plus, Check, Sparkles } from 'lucide-react';

export const Act6ReelsScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [activeTab, setActiveTab] = useState<'For you' | 'Muhurtham' | 'Sangeet' | 'Decor'>('For you');
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(2140);
  const [addedToBlueprint, setAddedToBlueprint] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1A1616', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Filter Tabs */}
      <div className="px-4 py-3 flex items-center gap-2 overflow-x-auto shrink-0 bg-[#1A1616]/80 backdrop-blur-md z-20">
        {(['For you', 'Muhurtham', 'Sangeet', 'Decor'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border-none cursor-pointer transition-all ${
              activeTab === tab 
                ? 'bg-white text-[#1D1D1F] font-bold shadow-xs' 
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Reels Video Viewport */}
      <View style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* Simulated Video Frame */}
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[#2A2526] via-[#121212] to-[#1D1617] flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" 
            alt="Leela Palace Wedding" 
            className="w-full h-full object-cover opacity-90"
          />

          {/* Video Duration Badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-white/90">
            VIDEO · 0:24
          </div>

          {/* Right Floating Action Sidebar Icons */}
          <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-20 text-white">
            <button 
              onClick={handleLike}
              className="flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer group"
            >
              <div className={`p-2.5 rounded-full ${liked ? 'bg-red-600 text-white' : 'bg-black/40 text-white group-hover:bg-black/60'} backdrop-blur-md transition-all`}>
                <Heart size={20} className={liked ? 'fill-white' : ''} />
              </div>
              <span className="text-[10px] font-bold">{likeCount > 1000 ? `${(likeCount/1000).toFixed(1)}k` : likeCount}</span>
            </button>

            <button className="flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer group">
              <div className="p-2.5 rounded-full bg-black/40 text-white group-hover:bg-black/60 backdrop-blur-md">
                <Send size={18} />
              </div>
              <span className="text-[10px] font-bold">Send</span>
            </button>

            <button className="flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer group">
              <div className="p-2.5 rounded-full bg-black/40 text-white group-hover:bg-black/60 backdrop-blur-md">
                <Bookmark size={18} />
              </div>
              <span className="text-[10px] font-bold">Save</span>
            </button>
          </div>

          {/* Bottom Overlay Info & Action Buttons */}
          <div className="absolute bottom-4 left-4 right-16 z-20 text-white space-y-2.5">
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Bloom & Thread</span>
                <span className="text-white/60">• mandap, Feb 2026</span>
              </h2>
              <p className="text-[11px] text-white/80 mt-1 leading-snug">
                420-guest Iyengar muhurtham at the Leela. Kanakambaram, banana stems, no drapes.
              </p>
            </div>

            {/* Action Buttons: Add to Muhurtham, AR Mandap 3D & Board */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <button
                onClick={() => setAddedToBlueprint(!addedToBlueprint)}
                className={`px-3 py-2 rounded-full text-xs font-bold border-none cursor-pointer flex items-center gap-1.5 transition-all ${
                  addedToBlueprint 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-[#1D1D1F] hover:bg-gray-100'
                }`}
              >
                {addedToBlueprint ? <Check size={14} /> : <Plus size={14} />}
                <span>{addedToBlueprint ? 'Added' : 'Add · ₹1.6L'}</span>
              </button>

              <button
                onClick={() => setScreen('act6_ar_preview')}
                className="px-3.5 py-2 rounded-full text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center gap-1 shadow-xs"
              >
                <Sparkles size={13} />
                <span>AR Mandap 3D</span>
              </button>

              <button
                onClick={() => setScreen('act6_board')}
                className="px-3 py-2 rounded-full text-xs font-bold bg-black/40 text-white border border-white/30 backdrop-blur-md cursor-pointer hover:bg-black/60"
              >
                Board
              </button>
            </div>
          </div>
        </div>
      </View>

      {/* Explainer Footer Card */}
      <div className="p-4 bg-[#FAF7F2] text-[#4A4244] text-[10.5px] border-t border-[#ECECEC] shrink-0 text-center leading-relaxed">
        Every clip is a real wedding your team ran, and every clip has a price and a booking button attached. Browsing joy that converts.
      </div>
    </View>
  );
};
