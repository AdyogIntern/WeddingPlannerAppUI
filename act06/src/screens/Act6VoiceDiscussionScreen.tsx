import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Volume2, Play, Pause, Mic, Send, Image as ImageIcon, ArrowRight } from 'lucide-react';

export const Act6VoiceDiscussionScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [messageText, setMessageText] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#ECECEC] px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_widget')}
            className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-gray-700 cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Widget</span>
          </button>
          <div>
            <h1 className="text-base font-serif font-bold text-[#1D1D1F]">Mandap decor</h1>
            <p className="text-[10.5px] text-[#666666]">Discussion · 8 messages</p>
          </div>
        </div>
        <button className="px-3 py-1 rounded-full bg-white border border-[#ECECEC] text-[10.5px] font-semibold text-[#666666] cursor-pointer">
          Mute
        </button>
      </div>

      {/* Main Chat Stream Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Message 1: Appa Voice Note */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#EBE4D8] text-[9px] font-bold text-gray-800 flex items-center justify-center">
              A
            </div>
            <span className="text-[11px] font-bold text-[#1D1D1F]">Appa · voice note</span>
          </div>

          <div className="ml-8 bg-white p-3 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-2 max-w-[300px]">
            {/* Audio Waveform Player */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] p-2 rounded-xl border border-[#ECECEC]">
              <button
                onClick={() => setIsPlayingVoice(!isPlayingVoice)}
                className="w-8 h-8 rounded-full bg-[#8B1538] text-white border-none flex items-center justify-center cursor-pointer shrink-0"
              >
                {isPlayingVoice ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
              </button>
              {/* Waveform graphic */}
              <div className="flex-1 flex items-center gap-0.5 h-6">
                {[12, 18, 24, 10, 16, 22, 28, 14, 20, 12, 18, 26, 15, 8, 14, 20, 12].map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-full ${isPlayingVoice && i < 8 ? 'bg-[#8B1538]' : 'bg-gray-300'}`} 
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono font-semibold text-[#666666]">0:38</span>
            </div>

            {/* Transcript Box */}
            <div className="text-[10.5px] text-[#4A4244] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E6D8C4] leading-relaxed">
              <strong className="text-[#8B1538] block mb-0.5">Transcribed & translated:</strong>
              "Kanakambaram is what your grandmother had, and it costs eighty thousand less."
            </div>
          </div>
        </div>

        {/* Message 2: Priya Video Reply */}
        <div className="space-y-1 flex flex-col items-end">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#1D1D1F]">Priya · video reply</span>
            <div className="w-6 h-6 rounded-full bg-[#8B1538] text-[9px] font-bold text-white flex items-center justify-center">
              P
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-1.5 max-w-[280px]">
            <div className="h-32 bg-[#EBE4D8] rounded-xl overflow-hidden relative border border-[#ECECEC]">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80" alt="Video Reply" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center">
                  <Play size={16} className="ml-0.5" />
                </div>
              </div>
            </div>
            <p className="text-[10.5px] text-[#666666]">
              Filmed her board and pointed at what she means. Ten seconds instead of four paragraphs.
            </p>
          </div>
        </div>

        {/* Message 3: Quote Card */}
        <div className="ml-8 bg-white p-3 rounded-2xl border-2 border-dashed border-[#C9A227] shadow-2xs space-y-1 max-w-[300px]">
          <h4 className="text-xs font-bold text-[#1D1D1F]">Bloom & Thread</h4>
          <p className="text-[11px] text-[#666666]">
            ₹1.85L for the mix. Two reference photos attached.
          </p>
        </div>

        {/* Explainer Footer */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          Appa will send a voice note. Priya will send a video. Neither will write a paragraph. The transcript is what makes it a decision record.
        </div>
      </View>

      {/* Input Bar */}
      <div className="p-3 bg-white border-t border-[#ECECEC] shrink-0 flex items-center gap-2">
        <input 
          type="text" 
          placeholder="Message..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="flex-1 bg-[#FAF8F5] px-3.5 py-2.5 rounded-xl border border-[#ECECEC] text-xs outline-none text-[#1D1D1F]"
        />
        <button className="w-10 h-10 rounded-xl bg-[#8B1538] text-white border-none flex items-center justify-center cursor-pointer shrink-0">
          <Mic size={18} />
        </button>
        <button
          onClick={() => setScreen('act6_sangeet_kitty')}
          className="px-3 py-2.5 rounded-xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1 shrink-0 whitespace-nowrap shadow-xs"
        >
          <span>15. Kitty</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </View>
  );
};
