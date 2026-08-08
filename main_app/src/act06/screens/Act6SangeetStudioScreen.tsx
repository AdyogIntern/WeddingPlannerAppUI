import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

interface SongItem {
  id: string;
  title: string;
  status: string;
  duration: string;
}

export const Act6SangeetStudioScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  const songs: SongItem[] = [
    { id: 's1', title: 'Opening · cousins', status: 'Rehearsed', duration: '4:12' },
    { id: 's2', title: 'Bride & groom', status: '2 of 4 rehearsals', duration: '3:40' },
    { id: 's3', title: 'Appa & chithappas', status: 'Not started', duration: '2:55' },
    { id: 's4', title: 'Free floor · DJ', status: 'Playlist open', duration: '--' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div 
        onClick={() => setScreen('act6_crew')}
        className="bg-[#221D1A] text-white px-6 pt-5 pb-5 flex flex-col shrink-0 cursor-pointer"
      >
        <div />
        <h1 className="text-[32px] font-serif font-bold text-white mt-2 leading-none">Sangeet studio</h1>
        <p className="text-xs text-white/60 mt-2 font-medium">Sat 13 Feb · 6 pm · Meera is running this</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '24px', gap: '16px' }}>
        
        {/* Card: THE SET */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            THE SET
          </div>

          <div className="space-y-4">
            {songs.map((s) => (
              <div 
                key={s.id} 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {/* Play Button */}
                  <button className="w-8 h-8 rounded-full border-none flex items-center justify-center cursor-pointer bg-[#FFF0F3] text-[#8B1538]">
                    <span className="text-[10px] ml-0.5">▶</span>
                  </button>
                  <div>
                    <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">{s.title}</h4>
                    <p className="text-[10px] text-[#8A8580] mt-0.5 font-medium">{s.status}</p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-[#8A8580]">{s.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card: REHEARSAL, ACROSS FOUR CITIES */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            REHEARSAL, ACROSS FOUR CITIES
          </div>

          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Meera posts the choreography video, everyone films their part and uploads it. Next call Sunday, 8 pm IST — which is 6:30 am for you.
          </p>

          {/* Avatars / Video Thumbnails with high-quality portraits */}
          <div className="flex items-center gap-3 pt-1">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#EFE8DC] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Meera" className="w-full h-full object-cover" />
            </div>
            <div className="w-[52px] h-[52px] rounded-xl bg-[#EFE8DC] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Arjun" className="w-full h-full object-cover" />
            </div>
            <div className="w-[52px] h-[52px] rounded-xl bg-[#EFE8DC] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Priya" className="w-full h-full object-cover" />
            </div>
            <div className="w-[52px] h-[52px] rounded-xl border-2 border-dashed border-[#ECECEC] bg-transparent text-[#A8A39D] flex items-center justify-center cursor-pointer">
              <span className="text-base font-semibold">+</span>
            </div>
          </div>
        </div>

        {/* Card: GUESTS ARE VOTING ON THE PLAYLIST */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            GUESTS ARE VOTING ON THE PLAYLIST
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#1D1D1F] font-semibold">Tamil hits, 2000s</span>
              <span className="font-bold text-[#1D1D1F]">41 votes</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#1D1D1F] font-semibold">Ilaiyaraaja classics</span>
              <span className="font-bold text-[#1D1D1F]">28</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#1D1D1F] font-semibold">Punjabi floor-fillers</span>
              <span className="font-bold text-[#1D1D1F]">19</span>
            </div>
          </div>
        </div>

        {/* Explainer Footer */}
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          The sangeet is where the twenty-somethings live. Give them a studio and they will drag the whole family into the app for you.
        </div>
      </View>
    </View>
  );
};
