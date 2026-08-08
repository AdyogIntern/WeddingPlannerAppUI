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
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between shrink-0">
        <div />
        <button
          onClick={() => setScreen('act6_photo_wall')}
          className="text-sm font-semibold text-[#8A8580] bg-transparent border-none cursor-pointer hover:text-[#1D1D1F]"
        >
          Copy
        </button>
      </div>

      {/* Title block */}
      <div className="px-6 pb-4">
        <h1 className="text-[32px] font-serif font-bold text-[#1D1D1F] leading-tight">{selectedTag}</h1>
        <p className="text-xs text-[#8A8580] mt-1 font-medium">Live · 214 posts · 62 people</p>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', paddingHorizontal: '24px', paddingBottom: '24px', gap: '16px' }}>
        
        {/* Card: OTHER OPTIONS WE GENERATED */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            OTHER OPTIONS WE GENERATED
          </div>

          <div className="flex flex-wrap gap-2.5">
            {hashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-[#8B1538] text-white border-[#8B1538] shadow-xs'
                    : 'bg-white text-[#1D1D1F] border-[#ECECEC] hover:bg-gray-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <p className="text-xs text-[#8A8580] font-medium leading-relaxed">
            All four checked — none are already in use.
          </p>
        </div>

        {/* Card: GUESTBOOK · 41 MESSAGES */}
        <div className="bg-white p-5 rounded-[24px] border border-[#ECECEC] shadow-2xs space-y-4">
          <div className="text-[10px] font-bold text-[#A8A39D] tracking-wider uppercase font-mono">
            GUESTBOOK · 41 MESSAGES
          </div>

          <div className="space-y-4">
            {/* Message 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Patti" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Patti, Coimbatore</h4>
                <p className="text-xs text-[#1D1D1F] mt-1 leading-normal">
                  I have waited a long time for this. Come home soon.
                </p>
              </div>
            </div>

            {/* Message 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Ravi" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#1D1D1F] leading-tight">Ravi & Anu, Toronto</h4>
                <p className="text-xs text-[#1D1D1F] mt-1 leading-normal">
                  Watching the muhurtham at 2 am with filter coffee. Wouldn't miss it.
                </p>
              </div>
            </div>

            {/* Message 3 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EFE8DC] overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Meera" className="w-full h-full object-cover" />
              </div>
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
        <div className="bg-[#FAF2EE] p-5 rounded-[24px] text-xs text-[#8B1538] font-medium leading-relaxed">
          The guestbook opens with the invitation and closes with the thank-you cards. It becomes the keepsake page later.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-6 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={() => setScreen('act6_photo_wall')}
          className="w-full py-4 bg-[#8B1538] text-white rounded-2xl text-sm font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center shadow-xs"
        >
          Add a voice note
        </button>
      </div>
    </View>
  );
};
