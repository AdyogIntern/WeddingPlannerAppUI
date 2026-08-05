import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox } from '../components/SharedUI';
import { ArrowLeft, Play, X } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { goBack, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('Muhurtham');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const imagesByTab: Record<string, number[]> = {
    Muhurtham: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    'Sadya spread': [10, 11, 12, 13, 14, 15],
    'Live counters': [16, 17, 18, 19],
    Kitchen: [20, 21, 22, 23, 24],
  };

  const currentImages = imagesByTab[activeTab] || [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex flex-col w-full space-y-6 pb-6 font-sans">
      <div>
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pt-1 pb-3 text-[13px] text-[#2B2523]">
          <button
            onClick={goBack}
            className="p-1 -ml-1 text-[#2B2523] hover:opacity-75 cursor-pointer flex items-center gap-1 font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="px-3 py-1 bg-white/90 border border-[#E5DCCE] rounded-full text-[12px] font-mono text-[#2B2523] shadow-2xs">
            {selectedImage ? `${selectedImage} / 24` : '1 / 24'}
          </span>
        </div>

        {/* 60-Second Intro Header Banner */}
        <div className="w-full h-44 bg-[#EAE1D2] rounded-none border-b border-[#DFD5C4] -mx-4 -mt-1 px-4 mb-4 flex items-center justify-center overflow-hidden relative group">
          {isPlayingVideo ? (
            <div className="w-full h-full bg-[#2B2523] text-white flex flex-col items-center justify-center p-3 relative">
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="absolute top-2 right-2 p-1 text-white hover:opacity-75 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="text-xs font-semibold mb-1 text-amber-300">▶ Playing 60-sec Intro Video</div>
              <p className="text-[10.5px] text-zinc-300 text-center">Sri Amirtham Kitchen & Muhurtham Walkthrough</p>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsPlayingVideo(true);
                showToast('Playing 60-second intro video...');
              }}
              className="text-[#8C7A6B] hover:text-[#7A2234] transition text-[12px] font-mono font-medium tracking-widest uppercase flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>60-second intro</span>
            </button>
          )}
        </div>

        {/* 3x3 Media Thumbnail Grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {currentImages.map((item) => (
            <div
              key={item}
              onClick={() => setSelectedImage(item)}
              className="aspect-square bg-[#EAE1D2] border border-[#DFD5C4] rounded-xl hover:opacity-80 transition cursor-pointer flex items-center justify-center relative"
            >
            </div>
          ))}
        </div>

        {/* Category Filter Chips - Exactly as screenshot */}
        <div className="flex flex-wrap gap-2 mb-4">
          {['Muhurtham', 'Sadya spread', 'Live counters'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#7A2234] text-white shadow-2xs'
                  : 'bg-[#FAF7F0] border border-[#E5DCCE] text-[#2B2523] hover:bg-[#EAE1D2]'
              }`}
            >
              {tab}
            </button>
          ))}
          <button
            key="Kitchen"
            onClick={() => setActiveTab('Kitchen')}
            className={`px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition cursor-pointer ${
              activeTab === 'Kitchen'
                ? 'bg-[#7A2234] text-white shadow-2xs'
                : 'bg-[#FAF7F0] border border-[#E5DCCE] text-[#2B2523] hover:bg-[#EAE1D2]'
            }`}
          >
            Kitchen
          </button>
        </div>

        {/* Shot By Our Team Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A6B] font-semibold mb-1">
            SHOT BY OUR TEAM
          </div>
          <p className="text-[12.5px] text-[#2B2523] leading-relaxed font-normal">
            These are our photographs, taken at a real wedding in August 2026 — not the vendor's marketing images. The top fifty vendors are shot this way.
          </p>
        </div>

        {/* Bottom Callout */}
        <CalloutBox>
          Minimum fifteen images and a live price band, or the vendor does not appear in search. Content standards are enforced quarterly.
        </CalloutBox>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#2B2523]/90 backdrop-blur-xs flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white hover:opacity-75 cursor-pointer bg-black/40 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-full max-w-sm aspect-square bg-[#EAE1D2] rounded-2xl border border-[#DFD5C4] flex items-center justify-center p-4 text-[#2B2523]">
            <div className="text-center">
              <div className="text-base font-bold mb-1">Verified Photograph #{selectedImage}</div>
              <p className="text-xs text-[#786E65]">Taken at a real wedding in August 2026</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

