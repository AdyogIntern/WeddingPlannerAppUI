import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Camera, Video, Check, Sparkles, ArrowRight } from 'lucide-react';

export const Act6ArPreviewScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedStyle, setSelectedStyle] = useState<'kanakambaram' | 'jasmine' | 'temple'>('kanakambaram');
  const [isRecording, setIsRecording] = useState(false);
  const [inBlueprint, setInBlueprint] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#261C1C', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Navigation & AR Preview Tag */}
      <div className="px-5 py-3 flex items-center justify-between shrink-0 bg-[#261C1C] border-b border-white/10 z-20">
        <button
          onClick={() => setScreen('act6_reels')}
          className="p-1.5 rounded-lg bg-white/10 text-white border-none cursor-pointer flex items-center gap-1 text-xs font-semibold"
        >
          <ChevronLeft size={16} />
          <span>Back to Reels</span>
        </button>
        <span className="text-xs font-mono font-bold text-[#F5E9C8] bg-white/10 px-3 py-1 rounded-full border border-white/10">
          AR preview
        </span>
      </div>

      {/* Main AR Camera Viewport */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Simulated Camera Stream */}
        <div className="h-[240px] rounded-3xl overflow-hidden relative border border-white/20 bg-black/60 shadow-xl flex items-center justify-center">
          <img 
            src={
              selectedStyle === 'kanakambaram'
                ? 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
                : selectedStyle === 'jasmine'
                ? 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80'
                : 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80'
            }
            alt="Hall AR Overlay"
            className="w-full h-full object-cover opacity-85"
          />

          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[9.5px] font-mono text-white/80">
            CAMERA · LEELA PALACE HALL
          </div>

          <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md p-2.5 rounded-2xl border border-white/10 text-white">
            <h3 className="text-xs font-bold text-white">Mandap · Bloom & Thread</h3>
            <p className="text-[10px] text-white/70">Scaled to the hall's real dimensions (24ft x 18ft grid)</p>
          </div>
        </div>

        {/* Style Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <button
            onClick={() => setSelectedStyle('kanakambaram')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border-none cursor-pointer transition-all ${
              selectedStyle === 'kanakambaram'
                ? 'bg-[#8B1538] text-white shadow-xs'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Kanakambaram
          </button>

          <button
            onClick={() => setSelectedStyle('jasmine')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border-none cursor-pointer transition-all ${
              selectedStyle === 'jasmine'
                ? 'bg-[#8B1538] text-white shadow-xs'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            White jasmine
          </button>

          <button
            onClick={() => setSelectedStyle('temple')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border-none cursor-pointer transition-all ${
              selectedStyle === 'temple'
                ? 'bg-[#8B1538] text-white shadow-xs'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Temple style
          </button>
        </div>

        {/* Card: WHAT CHANGES IF YOU SWITCH */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-2.5">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            WHAT CHANGES IF YOU SWITCH
          </div>

          <div className="flex justify-between items-center text-xs text-[#1D1D1F] py-1 border-b border-[#ECECEC]">
            <span>White jasmine instead</span>
            <span className="font-bold text-[#8B1538]">+₹80,000</span>
          </div>

          <div className="flex justify-between items-center text-xs text-[#1D1D1F] py-1 border-b border-[#ECECEC]">
            <span>Setup time</span>
            <span className="font-semibold text-[#666666]">+2 hrs</span>
          </div>

          <div className="flex justify-between items-center text-xs text-[#1D1D1F] py-1">
            <span>Amma's vote</span>
            <span className="font-bold text-[#C9A227]">Kanakambaram</span>
          </div>
        </div>

        {/* Card: SEND AS A VIDEO */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#8B1538]/20 space-y-2">
          <div className="text-[10px] font-bold text-[#8B1538] tracking-wider uppercase flex items-center justify-between">
            <span>SEND AS A VIDEO</span>
            {isRecording && <span className="text-red-600 animate-pulse font-mono">REC 0:15</span>}
          </div>
          <p className="text-[10.5px] text-[#4A4244] leading-relaxed">
            Record fifteen seconds of this and drop it in the family thread. Far better than describing a mandap over the phone.
          </p>
          <button 
            onClick={() => setIsRecording(!isRecording)}
            className="w-full py-2 bg-white border border-[#E6D8C4] rounded-xl text-xs font-bold text-[#8B1538] flex items-center justify-center gap-1.5 cursor-pointer hover:bg-gray-50"
          >
            <Video size={14} />
            <span>{isRecording ? 'Stop & Send Video' : 'Record 15s Video Clip'}</span>
          </button>
        </div>

        <div className="bg-[#FAF7F2] p-3 rounded-xl text-[10.5px] text-[#666666] leading-relaxed border border-[#ECECEC] text-center">
          The vendor sends measurements once; every family sees their own hall. It is the closest thing to standing in the room.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-white border-t border-[#ECECEC] shrink-0 flex gap-2">
        <button
          onClick={() => setInBlueprint(!inBlueprint)}
          className={`flex-1 py-3 rounded-2xl text-xs font-bold border-none cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-xs ${
            inBlueprint ? 'bg-green-700 text-white' : 'bg-[#8B1538] text-white hover:bg-[#72102D]'
          }`}
        >
          {inBlueprint && <Check size={16} />}
          <span>{inBlueprint ? 'Added!' : 'Add to Blueprint'}</span>
        </button>

        <button
          onClick={() => setScreen('act6_lookbook')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>5. Lookbook</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
