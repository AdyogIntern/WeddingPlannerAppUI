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
    { id: 's4', title: 'Free floor · DJ', status: 'Playlist open', duration: '—' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div 
        onClick={() => setScreen('act6_crew')}
        className="bg-[#221D1A] text-white px-6 pt-3 pb-5 flex flex-col shrink-0 cursor-pointer"
      >
        <div className="flex justify-between items-center text-xs text-white/40 pb-1">
          <span>9:41</span>
        </div>
        <h1 className="text-[32px] font-serif font-bold text-white mt-2 leading-none">Sangeet studio</h1>
        <p className="text-xs text-white/60 mt-2 font-medium">Sat 13 Feb · 6 pm · Meera is running this</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Card: THE SET */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
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
                  <button className="w-10 h-10 rounded-[12px] border-none flex items-center justify-center cursor-pointer bg-[#F5ECE8] text-[#8B1538] shrink-0">
                    <span className="text-[10px] ml-0.5">▶</span>
                  </button>
                  <div>
                    <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">{s.title}</h4>
                    <p className="text-[10px] text-[#8E867E] mt-0.5 font-medium">{s.status}</p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-[#8E867E]">{s.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card: REHEARSAL, ACROSS FOUR CITIES */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            REHEARSAL, ACROSS FOUR CITIES
          </div>

          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Meera posts the choreography video, everyone films their part and uploads it. Next call Sunday, 8 pm IST — which is 6:30 am for you.
          </p>

          {/* Solid Placeholder Boxes */}
          <div className="flex items-center gap-3 pt-1">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#EADFCF]" />
            <div className="w-[52px] h-[52px] rounded-xl bg-[#EADFCF]" />
            <div className="w-[52px] h-[52px] rounded-xl bg-[#EADFCF]" />
            <div className="w-[52px] h-[52px] rounded-xl border-2 border-dashed border-[#D4C9BC] bg-transparent text-[#9C9388] flex items-center justify-center cursor-pointer">
              <span className="text-base font-semibold">+</span>
            </div>
          </div>
        </div>

        {/* Card: GUESTS ARE VOTING ON THE PLAYLIST */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            GUESTS ARE VOTING ON THE PLAYLIST
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#1D1D1F] font-medium">Tamil hits, 2000s</span>
              <span className="font-bold text-[#1D1D1F]">41 votes</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#1D1D1F] font-medium">Ilaiyaraaja classics</span>
              <span className="font-bold text-[#1D1D1F]">28</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#1D1D1F] font-medium">Punjabi floor-fillers</span>
              <span className="font-bold text-[#1D1D1F]">19</span>
            </div>
          </div>
        </div>

        {/* Explainer Footer */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed">
          The sangeet is where the twenty-somethings live. Give them a studio and they will drag the whole family into the app for you.
        </div>
      </View>
    </View>
  );
};
