import React from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6PhotoWallScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  const photoThumbnails = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div 
        onClick={() => setScreen('act6_happening_now')}
        className="bg-[#221D1A] text-white px-6 pt-5 pb-5 flex flex-col shrink-0 cursor-pointer"
      >
        <div className="flex justify-between items-center text-xs text-white/50">
          <span>Sun 14 Feb · 8:12 am</span>
          <span className="font-bold tracking-wide text-white uppercase">Live</span>
        </div>
        <h1 className="text-[32px] font-serif font-bold text-white mt-2 leading-none">The wall</h1>
        <p className="text-xs text-white/60 mt-2 font-medium">638 photos from 74 guests · 4 awaiting review</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '24px', gap: '16px' }}>
        
        {/* Photo Grid (3x4) with real guest photo thumbnails */}
        <div className="grid grid-cols-3 gap-3">
          {photoThumbnails.map((src, idx) => (
            <div key={idx} className="aspect-square rounded-2xl bg-[#EFE8DC] overflow-hidden">
              <img src={src} alt={`Guest Photo ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-200" />
            </div>
          ))}
        </div>

        {/* Card: HOW GUESTS ADD TO IT */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] text-[#1D1D1F] flex items-center gap-4 shadow-2xs">
          <div className="w-[52px] h-[52px] bg-[#1E1718] rounded-2xl flex items-center justify-center shrink-0">
            <span className="text-[10px] font-mono font-bold text-white tracking-widest">QR</span>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">HOW GUESTS ADD TO IT</h4>
            <p className="text-xs text-[#1D1D1F] mt-1.5 leading-normal">
              A QR code on every table. No app, no login — the photos land here in seconds.
            </p>
          </div>
        </div>

        {/* Card: MODERATION */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] text-[#1D1D1F] space-y-3 shadow-2xs">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            MODERATION
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Meera approves anything before it shows on the hall screen. Four photos are waiting — one is a blurry ceiling.
          </p>
        </div>

        {/* Explainer Footer */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          The photo wall is free for the family and pure acquisition for you: every guest who uploads sees who ran this wedding.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={() => setScreen('act6_happening_now')}
          className="w-full py-4 bg-[#8B1538] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center shadow-xs"
        >
          Review 4 photos
        </button>
      </div>
    </View>
  );
};
