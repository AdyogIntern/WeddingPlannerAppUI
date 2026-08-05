import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, QrCode, Check, ShieldCheck, Camera, Sparkles, ArrowRight } from 'lucide-react';

export const Act6PhotoWallScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [photosReviewed, setPhotosReviewed] = useState(false);
  const [pendingCount, setPendingCount] = useState(4);

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

  const handleReview = () => {
    setPhotosReviewed(true);
    setPendingCount(0);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1D1D1F', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#1D1D1F] text-white px-5 py-3 flex items-center justify-between shrink-0 border-b border-white/10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_guestbook')}
            className="p-1.5 rounded-lg bg-white/10 text-white border-none cursor-pointer flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Guestbook</span>
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-white">The wall</h1>
            <p className="text-[10.5px] text-white/70">
              638 photos from 74 guests · {pendingCount} awaiting review
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold text-red-500 bg-red-950/80 px-2.5 py-1 rounded-full border border-red-800 animate-pulse flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          Live
        </span>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Photo Grid (3x4) */}
        <div className="grid grid-cols-3 gap-2">
          {photoThumbnails.map((src, idx) => (
            <div key={idx} className="h-24 rounded-xl bg-gray-800 overflow-hidden relative border border-white/10 group">
              <img src={src} alt={`Guest Upload ${idx+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>

        {/* Card: HOW GUESTS ADD TO IT */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] text-[#1D1D1F] flex items-center gap-3 shadow-2xs">
          <div className="w-12 h-12 bg-[#1D1D1F] rounded-xl flex items-center justify-center text-white shrink-0">
            <QrCode size={24} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1D1D1F]">HOW GUESTS ADD TO IT</h4>
            <p className="text-[10.5px] text-[#666666] mt-0.5 leading-snug">
              A QR code on every table. No app, no login — the photos land here in seconds.
            </p>
          </div>
        </div>

        {/* Card: MODERATION */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] text-[#1D1D1F] space-y-1.5 shadow-2xs">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase flex items-center gap-1">
            <ShieldCheck size={12} className="text-[#8B1538]" />
            <span>MODERATION QUEUE</span>
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Meera approves anything before it shows on the hall screen. {pendingCount} photos are waiting — one is a blurry ceiling.
          </p>
        </div>

        {/* Explainer Footer */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          The photo wall is free for the family and pure acquisition for you: every guest who uploads sees who ran this wedding.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-[#1D1D1F] border-t border-white/10 shrink-0 flex gap-2">
        <button
          onClick={handleReview}
          className={`flex-1 py-3 rounded-2xl text-xs font-bold border-none cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-xs ${
            photosReviewed ? 'bg-green-700 text-white' : 'bg-[#8B1538] text-white hover:bg-[#72102D]'
          }`}
        >
          {photosReviewed ? <Check size={16} /> : <ShieldCheck size={16} />}
          <span>{photosReviewed ? 'Published!' : `Review (${pendingCount})`}</span>
        </button>

        <button
          onClick={() => setScreen('act6_happening_now')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>12. Happening Now</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
