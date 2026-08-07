import React from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, SerifTitle } from '../components/SharedUI';
import { ArrowLeft, Play } from 'lucide-react';

export const VenueProfile: React.FC = () => {
  const { navigate, goBack } = useApp();

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Hero Banner with Navigation Overlay inside it matching 10.png */}
        <div className="w-full h-44 bg-[#EAE1D2] rounded-2xl relative border border-[#DFD5C4] mb-3 p-3 flex flex-col justify-between overflow-hidden group">
          {/* Top overlay row inside the banner */}
          <div className="relative flex items-center justify-center text-[11px] font-mono text-[#786E65]">
            <button
              onClick={goBack}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2B2523] hover:opacity-75 cursor-pointer font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="uppercase tracking-widest text-[10.5px] font-semibold text-[#786E65] pt-18">
              PORTFOLIO · 31 IMAGES
            </span>
          </div>

          {/* Bottom right Walkthrough button */}
          <div className="flex justify-end">
            <button
              onClick={() => navigate('Portfolio')}
              className="bg-[#2B2523] hover:bg-[#7A2234] transition text-white px-3.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Walkthrough</span>
            </button>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-3">
          <SerifTitle className="text-[22px] font-bold text-[#2B2523] leading-tight">
            Sri Sathyanarayana Mandapam
          </SerifTitle>
          <p className="text-[12px] text-[#786E65] mt-0.5">
            Mylapore · air-conditioned · built 1974, renovated 2024
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2.5 mb-3 text-center">
          <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl shadow-2xs">
            <div className="text-[10px] uppercase tracking-wider text-[#8C7A6B] font-mono font-semibold">
              SEATS
            </div>
            <div className="text-[18px] font-bold text-[#2B2523] mt-0.5">650</div>
          </div>
          <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl shadow-2xs">
            <div className="text-[10px] uppercase tracking-wider text-[#8C7A6B] font-mono font-semibold">
              DINING
            </div>
            <div className="text-[18px] font-bold text-[#2B2523] mt-0.5">320</div>
          </div>
          <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl shadow-2xs">
            <div className="text-[10px] uppercase tracking-wider text-[#8C7A6B] font-mono font-semibold">
              PARKING
            </div>
            <div className="text-[18px] font-bold text-[#2B2523] mt-0.5">90</div>
          </div>
        </div>

        {/* Day Rate Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-widest text-[#8C7A6B] font-mono font-semibold mb-1">
            DAY RATE
          </div>
          <div className="text-[16px] font-bold text-[#2B2523] mb-1">
            ₹3.1L <span className="text-[12px] font-normal text-[#786E65]">≈ $3,690 · 6 am to 11 pm</span>
          </div>
          <p className="text-[11.5px] text-[#786E65] leading-normal">
            Includes power backup and 12 rooms. Generator ₹18,000 extra if the mains fail past 4 hours.
          </p>
        </div>

        {/* House Rules Card - No bullet dots matching 10.png */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-widest text-[#8C7A6B] font-mono font-semibold mb-2">
            HOUSE RULES THAT MATTER
          </div>
          <div className="space-y-2 text-[12px] text-[#2B2523]">
            <div>Outside catering allowed · kitchen included</div>
            <div>No non-vegetarian food on the premises</div>
            <div>Homam permitted in the north-east corner</div>
            <div>Loading access is 2.4m — check with decorator</div>
          </div>
        </div>

        {/* Callout */}
        <CalloutBox className="mt-2">
          The things a family only discovers on the day. We publish them because we have stood in this hall.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4 pt-1">
        <PrimaryButton onClick={() => navigate('Availability')}>
          Hold 14 Feb
        </PrimaryButton>
      </div>
    </div>
  );
};


