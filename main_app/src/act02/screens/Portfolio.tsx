import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox } from '../components/SharedUI';
import { ArrowLeft, Play, X } from 'lucide-react';

import sadyaImg from '../../assets/sadya.jpg';
import mandapamImg from '../../assets/mandapam.jpg';
import photoCandidImg from '../../assets/photo_candid.jpg';
import photoRomanticImg from '../../assets/photo_romantic.jpg';
import photoDroneImg from '../../assets/photo_drone.jpg';
import sareeImg from '../../assets/saree.jpg';

export const Portfolio: React.FC = () => {
  const { goBack, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('Muhurtham');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const imagesByTab: Record<string, string[]> = {
    Muhurtham: [mandapamImg, photoCandidImg, photoRomanticImg, photoDroneImg, sareeImg, mandapamImg, photoCandidImg, photoRomanticImg, photoDroneImg],
    'Sadya spread': [
      'https://plus.unsplash.com/premium_photo-1723914299726-0fc2da4c5dfe?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1683533678059-63c6a0e9e3ef?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1742281257687-092746ad6021?auto=format&fit=crop&w=400&h=400&q=80',
      'https://plus.unsplash.com/premium_photo-1726862511458-7886fb9cc1bf?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1742281258189-3b933879867a?auto=format&fit=crop&w=400&h=400&q=80'
    ],
    'Live counters': [
      'https://images.unsplash.com/photo-1621334721541-370a13974de8?auto=format&fit=crop&w=400&h=400&q=80', // Popcorn stall
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&h=400&q=80', // Tea stall
      'https://images.unsplash.com/photo-1501443713114-87e4bad53058?auto=format&fit=crop&w=400&h=400&q=80'  // Ice cream stall
    ],
    Kitchen: [
      'https://plus.unsplash.com/premium_photo-1723823036427-b19e6d270bb6?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1594394491044-67a665a3c925?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1594394490830-4cf54dd62910?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1512149519538-136d1b8c574a?auto=format&fit=crop&w=400&h=400&q=80',
      'https://plus.unsplash.com/premium_photo-1694557831389-ef7d9326fb71?auto=format&fit=crop&w=400&h=400&q=80'
    ],
  };

  const currentImages = imagesByTab[activeTab] || imagesByTab['Muhurtham'];

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Intro Video Header Banner with Navigation Overlay inside it */}
        <div
          className="w-full h-44 rounded-2xl border border-[#DFD5C4] mb-4 flex flex-col justify-between p-3 relative overflow-hidden group"
          style={{
            backgroundImage: `url(${sadyaImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition"></div>

          {isPlayingVideo ? (
            <div className="w-full h-full bg-[#2B2523] text-white flex flex-col items-center justify-center p-3 relative rounded-xl z-20">
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
            <>
              {/* Top overlay row inside the banner */}
              <div className="flex items-center justify-between text-[11px] font-mono text-white z-10">
                <button
                  onClick={goBack}
                  className="text-white hover:opacity-75 cursor-pointer font-bold"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="px-3 py-1 bg-white/90 border border-[#E5DCCE] rounded-full text-[12px] font-mono text-[#2B2523] shadow-2xs">
                  {selectedImage ? 'Verified' : '1 / 24'}
                </span>
              </div>

              {/* Centered Intro Label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <span className="text-white font-mono text-[12px] font-medium tracking-widest uppercase flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                  ► 60-second intro
                </span>
              </div>

              {/* Transparent Click overlay */}
              <button
                onClick={() => {
                  setIsPlayingVideo(true);
                  showToast('Playing 60-second intro video...');
                }}
                className="absolute inset-0 w-full h-full cursor-pointer bg-transparent focus:outline-none z-10"
              />
            </>
          )}
        </div>

        {/* 3x3 Media Thumbnail Grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {currentImages.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="aspect-square border border-[#DFD5C4] rounded-xl hover:opacity-80 transition cursor-pointer flex items-center justify-center relative overflow-hidden"
            >
              <img src={item} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover" />
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
            className="absolute top-4 right-4 p-2 text-white hover:opacity-75 cursor-pointer bg-black/40 rounded-full z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-full max-w-sm aspect-square rounded-2xl border border-[#DFD5C4] relative overflow-hidden bg-[#FAF7F0] flex flex-col justify-end p-4 text-[#2B2523] shadow-lg">
            <img src={selectedImage} alt="Verified Photograph" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-[#E5DCCE] text-left">
              <div className="text-sm font-bold mb-0.5 text-[#2B2523]">Verified Photograph</div>
              <p className="text-[11px] text-[#786E65]">Taken by our team at a real wedding in August 2026</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
