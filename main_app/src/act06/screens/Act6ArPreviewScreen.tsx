import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

import imgArPreview from '../../assets/ar_stage_preview.jpg';

export const Act6ArPreviewScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedStyle, setSelectedStyle] = useState<'kanakambaram' | 'jasmine' | 'temple'>('kanakambaram');

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Simulated Camera Area */}
      <div 
        onClick={() => setScreen('act6_lookbook')}
        className="w-full aspect-[1.1] relative overflow-hidden flex items-center justify-center cursor-pointer select-none"
        style={{
          backgroundImage: `url(${imgArPreview})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* AR Preview Pill in top right */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-[10px] border border-white/10 z-10">
          <span className="text-[10px] font-mono font-bold text-[#1D1D1F] tracking-wide">
            AR preview
          </span>
        </div>

        <span className="absolute text-xs font-mono font-bold text-white/60 tracking-[0.12em] uppercase pointer-events-none z-10 drop-shadow-sm">
          CAMERA · LEELA PALACE HALL
        </span>

        {/* Text Overlay at bottom of Camera View */}
        <div className="absolute bottom-5 left-6 text-white space-y-0.5 pointer-events-none text-left">
          <h2 className="text-sm font-bold text-white leading-tight">
            Mandap · Bloom & Thread
          </h2>
          <p className="text-[10px] font-mono text-white/60 tracking-wider">
            Scaled to the hall's real dimensions
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Horizontal Chips */}
        <div className="flex items-center gap-3">
          {[
            { id: 'kanakambaram', label: 'Kanakambaram' },
            { id: 'jasmine', label: 'White jasmine' },
            { id: 'temple', label: 'Temple style' },
          ].map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                selectedStyle === style.id
                  ? 'bg-[#761A2D] text-white border-[#761A2D]'
                  : 'bg-white text-[#1D1D1F] border-[#EADFCF] hover:bg-gray-50'
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>

        {/* Card: WHAT CHANGES IF YOU SWITCH */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            WHAT CHANGES IF YOU SWITCH
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#666666] font-medium">White jasmine instead</span>
              <span className="font-bold text-[#1D1D1F]">+₹80,000</span>
            </div>

            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#666666] font-medium">Setup time</span>
              <span className="font-bold text-[#1D1D1F]">+2 hrs</span>
            </div>

            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#666666] font-medium">Amma's vote</span>
              <span className="font-bold text-[#C9A227]">Kanakambaram</span>
            </div>
          </div>
        </div>

        {/* Card: SEND AS A VIDEO */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-3">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            SEND AS A VIDEO
          </div>
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            Record fifteen seconds of this and drop it in the family thread. Far better than describing a mandap over the phone.
          </p>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed">
          The vendor sends measurements once; every family sees their own hall. It is the closest thing to standing in the room.
        </div>

      </View>

      {/* Sticky Bottom Action Button */}
      <div className="p-6 bg-white border-t border-[#EADFCF] shrink-0">
        <button
          onClick={() => setScreen('act6_lookbook')}
          className="w-full py-4 bg-[#761A2D] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#621423] transition-colors flex items-center justify-center"
        >
          Put this in the Blueprint
        </button>
      </div>
    </View>
  );
};
