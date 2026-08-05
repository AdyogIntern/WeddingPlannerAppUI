import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Play, Pause, Plus, ThumbsUp, Video, Music, ArrowRight } from 'lucide-react';

interface SongItem {
  id: string;
  title: string;
  status: string;
  duration: string;
}

export const Act6SangeetStudioScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);

  const [votes, setVotes] = useState({
    tamilHits: 41,
    ilaiyaraaja: 28,
    punjabi: 19,
  });

  const [votedOption, setVotedOption] = useState<string | null>(null);

  const songs: SongItem[] = [
    { id: 's1', title: 'Opening - cousins', status: 'Rehearsed', duration: '4:12' },
    { id: 's2', title: 'Bride & groom', status: '2 of 4 rehearsals', duration: '3:40' },
    { id: 's3', title: 'Appa & chithappas', status: 'Not started', duration: '2:55' },
    { id: 's4', title: 'Free floor - DJ', status: 'Playlist open', duration: '--' },
  ];

  const handleVote = (option: 'tamilHits' | 'ilaiyaraaja' | 'punjabi') => {
    if (votedOption === option) return;
    setVotes({ ...votes, [option]: votes[option] + 1 });
    setVotedOption(option);
  };

  const togglePlay = (id: string) => {
    if (playingSongId === id) {
      setPlayingSongId(null);
    } else {
      setPlayingSongId(id);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#1D1D1F] text-white px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_lookbook')}
            className="p-1.5 rounded-lg bg-white/10 text-white border-none cursor-pointer flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Lookbook</span>
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-white">Sangeet studio</h1>
            <p className="text-[10.5px] text-white/70">Sat 13 Feb · 6 pm · Meera is running this</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Card: THE SET */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase flex items-center gap-1.5">
            <Music size={12} className="text-[#8B1538]" />
            <span>THE SET</span>
          </div>

          <div className="space-y-2">
            {songs.map((s) => {
              const isPlaying = playingSongId === s.id;
              return (
                <div 
                  key={s.id} 
                  className="flex items-center justify-between p-2 rounded-xl bg-[#FAF8F5] border border-[#ECECEC]"
                >
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => togglePlay(s.id)}
                      className={`w-7 h-7 rounded-full border-none flex items-center justify-center cursor-pointer transition-colors ${
                        isPlaying ? 'bg-[#8B1538] text-white' : 'bg-red-100 text-[#8B1538] hover:bg-red-200'
                      }`}
                    >
                      {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                    </button>
                    <div>
                      <h4 className="text-xs font-bold text-[#1D1D1F]">{s.title}</h4>
                      <p className="text-[10px] text-[#666666]">{s.status}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-semibold text-[#666666]">{s.duration}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card: REHEARSAL, ACROSS FOUR CITIES */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            REHEARSAL, ACROSS FOUR CITIES
          </div>

          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Meera posts the choreography video, everyone films their part and uploads it. Next call Sunday, 8 pm IST — which is 6:30 am for you.
          </p>

          {/* Avatars / Video Thumbnails */}
          <div className="flex items-center gap-2 pt-1">
            <div className="w-12 h-12 rounded-xl bg-[#EBE4D8] border border-[#ECECEC] overflow-hidden flex items-center justify-center relative">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Meera" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[8px] text-white text-center font-bold">Seattle</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#EBE4D8] border border-[#ECECEC] overflow-hidden flex items-center justify-center relative">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Arjun" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[8px] text-white text-center font-bold">Toronto</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#EBE4D8] border border-[#ECECEC] overflow-hidden flex items-center justify-center relative">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Priya" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[8px] text-white text-center font-bold">Chennai</span>
            </div>

            <button className="w-12 h-12 rounded-xl border-2 border-dashed border-[#ECECEC] bg-[#FAF8F5] text-gray-500 flex items-center justify-center cursor-pointer hover:bg-white">
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Card: GUESTS ARE VOTING ON THE PLAYLIST */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            GUESTS ARE VOTING ON THE PLAYLIST
          </div>

          <div className="space-y-2">
            {[
              { id: 'tamilHits', label: 'Tamil hits, 2000s', count: votes.tamilHits },
              { id: 'ilaiyaraaja', label: 'Ilaiyaraaja classics', count: votes.ilaiyaraaja },
              { id: 'punjabi', label: 'Punjabi floor-fillers', count: votes.punjabi },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => handleVote(v.id as any)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                  votedOption === v.id
                    ? 'border-[#8B1538] bg-[#FFF0F3]'
                    : 'border-[#ECECEC] bg-white hover:bg-gray-50'
                }`}
              >
                <span className="text-xs font-semibold text-[#1D1D1F]">{v.label}</span>
                <span className="text-xs font-mono font-bold text-[#8B1538] flex items-center gap-1">
                  <span>{v.count} votes</span>
                  <ThumbsUp size={12} />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Explainer Footer */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          The sangeet is where the twenty-somethings live. Give them a studio and they will drag the whole family into the app for you.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-white border-t border-[#ECECEC] shrink-0 flex items-center justify-between gap-2">
        <button
          onClick={() => setScreen('act6_board')}
          className="px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 border-none cursor-pointer hover:bg-gray-200"
        >
          Board
        </button>

        <button
          onClick={() => setScreen('act6_crew')}
          className="flex-1 py-3 rounded-2xl text-xs font-bold bg-[#8B1538] text-white border-none cursor-pointer hover:bg-[#72102D] flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>7. The Crew</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
