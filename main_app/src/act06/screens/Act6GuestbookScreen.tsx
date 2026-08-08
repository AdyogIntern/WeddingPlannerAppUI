import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const Act6GuestbookScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedTag, setSelectedTag] = useState('#PriyaFoundHerArjun');

  const hashtags = [
    '#PriyaFoundHerArjun',
    '#ArjunKiPriya',
    '#SeattleToChennai',
    '#PAforever27',
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF6EE', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0 text-xs font-semibold text-[#8A8580]">
        <span></span>
        <button
          onClick={() => setScreen('act6_photo_wall')}
          className="text-xs font-bold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          Copy
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4 text-left">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">{selectedTag}</h1>
        <p className="text-xs text-[#8E867E] mt-1 font-medium">Live · 214 posts · 62 people</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '24px', gap: '14px' }}>
        
        {/* Card: OTHER OPTIONS WE GENERATED */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            OTHER OPTIONS WE GENERATED
          </div>

          <div className="flex flex-wrap gap-2.5">
            {hashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-[#761A2D] text-white border-[#761A2D]'
                    : 'bg-white text-[#1D1D1F] border-[#EADFCF] hover:bg-gray-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <p className="text-xs text-[#8E867E] font-medium leading-relaxed">
            All four checked — none are already in use.
          </p>
        </div>

        {/* Card: GUESTBOOK · 41 MESSAGES */}
        <div className="bg-white p-5 rounded-[20px] border border-[#EADFCF] space-y-4">
          <div className="text-[10px] font-bold text-[#A39C93] tracking-[0.08em] uppercase font-sans">
            GUESTBOOK · 41 MESSAGES
          </div>

          <div className="space-y-4 text-left">
            {/* Message 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#7A2234] shrink-0 flex items-center justify-center text-sm font-bold text-white select-none">P</div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Patti, Coimbatore</h4>
                <p className="text-xs text-[#1D1D1F] mt-1 leading-normal">
                  I have waited a long time for this. Come home soon.
                </p>
              </div>
            </div>

            {/* Message 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8C7A6B] shrink-0 flex items-center justify-center text-sm font-bold text-white select-none">R</div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Ravi & Anu, Toronto</h4>
                <p className="text-xs text-[#1D1D1F] mt-1 leading-normal">
                  Watching the muhurtham at 2 am with filter coffee. Wouldn't miss it.
                </p>
              </div>
            </div>

            {/* Message 3 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C9A227] shrink-0 flex items-center justify-center text-sm font-bold text-white select-none">M</div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Meera</h4>
                <p className="text-xs text-[#1D1D1F] mt-1 leading-normal">
                  Nobody is allowed to post before the photographer does.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#F5ECE8] p-5 rounded-[20px] text-xs text-[#4A3525] font-medium leading-relaxed">
          The guestbook opens with the invitation and closes with the thank-you cards. It becomes the keepsake page later.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#EADFCF] shrink-0">
        <button
          onClick={() => setScreen('act6_photo_wall')}
          className="w-full py-4 bg-[#761A2D] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#621423] transition-colors flex items-center justify-center"
        >
          Add a voice note
        </button>
      </div>
    </View>
  );
};
