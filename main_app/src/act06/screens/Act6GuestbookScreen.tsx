import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Copy, Check, Mic, MessageSquare, Heart, ArrowRight } from 'lucide-react';

export const Act6GuestbookScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [copiedTag, setCopiedTag] = useState(false);
  const [selectedTag, setSelectedTag] = useState('#PriyaFoundHerArjun');
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);

  const hashtags = [
    '#PriyaFoundHerArjun',
    '#ArjunKiPriya',
    '#SeattleToChennai',
    '#PAForever27',
  ];

  const handleCopyTag = () => {
    setCopiedTag(true);
    setTimeout(() => setCopiedTag(false), 2000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#ECECEC] px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_share_moment')}
            className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-gray-700 cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Share</span>
          </button>
          <div>
            <h1 className="text-base font-serif font-bold text-[#8B1538]">{selectedTag}</h1>
            <p className="text-[10.5px] text-[#666666]">Live · 214 posts · 62 people</p>
          </div>
        </div>
        <button
          onClick={handleCopyTag}
          className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-[#1D1D1F] cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
        >
          {copiedTag ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
          <span>{copiedTag ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Card: OTHER OPTIONS WE GENERATED */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            OTHER OPTIONS WE GENERATED
          </div>

          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border-none cursor-pointer transition-all ${
                  selectedTag === tag
                    ? 'bg-[#8B1538] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#1D1D1F] border border-[#ECECEC] hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <p className="text-[10.5px] text-green-700 font-medium">
            All four checked — none are already in use.
          </p>
        </div>

        {/* Card: GUESTBOOK · 41 MESSAGES */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase flex items-center justify-between">
            <span>GUESTBOOK · 41 MESSAGES</span>
            <MessageSquare size={12} className="text-[#8B1538]" />
          </div>

          <div className="space-y-3 text-xs text-[#1D1D1F]">
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#ECECEC] space-y-1">
              <div className="flex justify-between items-center font-bold text-[#1D1D1F]">
                <span>Patti, Coimbatore</span>
                <span className="text-[9.5px] text-[#666666]">2h ago</span>
              </div>
              <p className="text-[11px] text-[#4A4244] italic">
                "I have waited a long time for this. Come home soon."
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#ECECEC] space-y-1">
              <div className="flex justify-between items-center font-bold text-[#1D1D1F]">
                <span>Ravi & Anu, Toronto</span>
                <span className="text-[9.5px] text-[#666666]">5h ago</span>
              </div>
              <p className="text-[11px] text-[#4A4244] italic">
                "Watching the muhurtham at 2 am with filter coffee. Wouldn't miss it."
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#ECECEC] space-y-1">
              <div className="flex justify-between items-center font-bold text-[#1D1D1F]">
                <span>Meera</span>
                <span className="text-[9.5px] text-[#666666]">1d ago</span>
              </div>
              <p className="text-[11px] text-[#4A4244] italic">
                "Nobody is allowed to post before the photographer does."
              </p>
            </div>
          </div>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          The guestbook opens with the invitation and closes with the thank-you cards. It becomes the keepsake page later.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-white border-t border-[#ECECEC] shrink-0 flex gap-2">
        <button
          onClick={() => setIsRecordingVoice(!isRecordingVoice)}
          className={`flex-1 py-3 rounded-2xl text-xs font-bold border-none cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-xs ${
            isRecordingVoice ? 'bg-red-600 text-white animate-pulse' : 'bg-[#8B1538] text-white hover:bg-[#72102D]'
          }`}
        >
          <Mic size={16} />
          <span>{isRecordingVoice ? 'Recording...' : 'Add voice note'}</span>
        </button>

        <button
          onClick={() => setScreen('act6_photo_wall')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>11. Photo Wall</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
