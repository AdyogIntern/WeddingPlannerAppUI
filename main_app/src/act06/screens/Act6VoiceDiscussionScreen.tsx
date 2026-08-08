import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6VoiceDiscussionScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [messageText, setMessageText] = useState('');

  const handleNext = () => {
    setScreen('act6_sangeet_kitty');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0 text-xs font-semibold text-[#8A8580]">
        <span>9:41</span>
        <button 
          onClick={handleNext}
          className="text-xs font-bold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          Mute
        </button>
      </div>

      {/* Title Block */}
      <div className="px-6 pb-4 text-left">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">Mandap decor</h1>
        <p className="text-xs text-[#8E867E] mt-1 font-medium">Discussion · 8 messages</p>
      </div>

      {/* Main Chat Stream Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '24px', gap: '14px' }}>
        
        {/* Message 1: Appa Voice Note */}
        <div className="flex items-start gap-4 text-left">
          <div className="w-10 h-10 rounded-full bg-[#EADFCF] shrink-0" />
          <div className="flex-1 bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
            <div>
              <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Appa · voice note</h4>
            </div>

            {/* Audio Waveform Player */}
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full bg-[#761A2D] text-white border-none flex items-center justify-center cursor-pointer shrink-0">
                <span className="text-[10px] ml-0.5">▶</span>
              </button>
              {/* Waveform graphic */}
              <div className="flex-1 flex items-center gap-0.5 h-6">
                {[12, 18, 24, 10, 16, 22, 28, 14, 20, 12, 18, 26, 15, 8, 14, 20, 12].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 rounded-full bg-[#D5CFC7]" 
                    style={{ height: `${h * 0.7}px` }}
                  />
                ))}
              </div>
              <span className="text-[11px] font-mono font-semibold text-[#8E867E]">0:38</span>
            </div>

            {/* Transcript Box */}
            <p className="text-xs text-[#1D1D1F] leading-relaxed">
              Transcribed and translated:<br />
              "Kanakambaram is what your grandmother had, and it costs eighty thousand less."
            </p>
          </div>
        </div>

        {/* Message 2: Priya Video Reply */}
        <div className="flex items-start gap-4 justify-end text-left">
          <div className="flex-1 bg-[#F5ECE8] p-5 rounded-[20px] space-y-3 max-w-[280px]">
            <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Priya · video reply</h4>
            <div className="aspect-[1.6] bg-[#EADFCF] rounded-xl" />
            <p className="text-[11px] text-[#8E867E] font-medium leading-normal">
              Filmed her board and pointed at what she means. Ten seconds instead of four paragraphs.
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#EADFCF] shrink-0" />
        </div>

        {/* Message 3: Quote Card */}
        <div className="flex items-start gap-4 text-left">
          <div className="w-10 h-10 rounded-full bg-[#EADFCF] shrink-0" />
          <div className="flex-1 bg-white p-5 rounded-[20px] border-2 border-dashed border-[#C9A227] space-y-2">
            <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Bloom & Thread</h4>
            <p className="text-xs text-[#8E867E] font-medium leading-normal">
              ₹1.85L for the mix. Two reference photos attached.
            </p>
          </div>
        </div>

        {/* Explainer Footer */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed">
          Appa will send a voice note. Priya will send a video. Neither will write a paragraph. The transcript is what makes it a decision record.
        </div>
      </View>

      {/* Input Bar */}
      <div className="p-3 bg-white border-t border-[#EADFCF] shrink-0 flex items-center gap-2">
        <input 
          type="text" 
          placeholder="Message..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="flex-1 bg-[#FAF6EE] px-3.5 py-2.5 rounded-xl border border-[#EADFCF] text-xs outline-none text-[#1D1D1F]"
        />
        <button 
          onClick={handleNext}
          className="w-10 h-10 rounded-xl bg-[#761A2D] text-white border-none flex items-center justify-center cursor-pointer shrink-0"
        >
          <span className="text-base">🎙️</span>
        </button>
      </div>
    </View>
  );
};
