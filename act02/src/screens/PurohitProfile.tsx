import React from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, ScreenHeader, SerifTitle, TextMuted } from '../components/SharedUI';
import { Heart, Video } from 'lucide-react';

export const PurohitProfile: React.FC = () => {
  const { navigate, goBack, showToast, toggleSaveVendor, vendors } = useApp();
  const purohit = vendors.find((v) => v.id === 'purohit-1') || vendors[0];

  const handleBookCall = () => {
    showToast('30-minute video call scheduled with Sri Venkatesa Sastrigal!');
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <ScreenHeader
          onBack={goBack}
          rightAction={
            <button
              onClick={() => toggleSaveVendor(purohit.id)}
              className="text-[#91877E] hover:text-[#7A2234] transition cursor-pointer p-0.5"
            >
              <Heart className={`w-4.5 h-4.5 ${purohit.isSaved ? 'fill-[#7A2234] text-[#7A2234]' : ''}`} />
            </button>
          }
        />

        {/* Title */}
        <div className="mb-3">
          <SerifTitle className="text-[25px]">Sri Venkatesa Sastrigal</SerifTitle>
          <TextMuted>Vadakalai Iyengar · 34 years · Chennai</TextMuted>
        </div>

        {/* Performs Section Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium mb-2">
            Performs
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Nichayathartham', 'Panda Kaal', 'Muhurtham', 'Homam', 'Grihapravesham'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[#F2ECE1] border border-[#E8DFC0] text-[11.5px] text-[#2B2523] rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Fees Section Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium mb-2">
            Fees
          </div>
          <div className="space-y-1.5 text-[12.5px] border-b border-[#EAE1D2] pb-2 mb-2">
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Muhurtham, with two assistants</span>
              <span className="font-bold text-[#2B2523]">₹42,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Panda Kaal</span>
              <span className="font-bold text-[#2B2523]">₹8,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Samagri kit, arranged</span>
              <span className="font-bold text-[#2B2523]">₹14,500</span>
            </div>
          </div>
          <p className="text-[11px] text-[#786E65]">
            Dakshinai is separate and entirely your choice.
          </p>
        </div>

        {/* Before The Day Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium mb-1">
            Before the day
          </div>
          <p className="text-[12px] text-[#2B2523] leading-relaxed mb-2">
            He will do a 30-minute video call with the couple to explain each step of the muhurtham — in English if you prefer. Most NRI couples take this.
          </p>
          <button
            onClick={handleBookCall}
            className="text-[11.5px] text-[#7A2234] font-medium hover:underline cursor-pointer flex items-center gap-1"
          >
            <Video className="w-3.5 h-3.5" /> Book the call →
          </button>
        </div>

        {/* Languages & Travel Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#EAE1D2] border border-[#DFD5C4] shrink-0 flex items-center justify-center font-bold text-xs text-[#786E65]">
            SV
          </div>
          <div className="text-[12px]">
            <div className="font-semibold text-[#2B2523]">Speaks Tamil, Sanskrit, English</div>
            <div className="text-[11px] text-[#786E65]">Will travel to Coimbatore and Madurai</div>
          </div>
        </div>

        {/* Callout */}
        <CalloutBox className="mt-2">
          Matching the purohit to the family sampradaya is the sort of detail that tells a sceptical father you know what you are doing.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4 pt-1">
        <PrimaryButton onClick={() => navigate('VendorSwap')}>
          Add to all five functions
        </PrimaryButton>
      </div>
    </div>
  );
};
