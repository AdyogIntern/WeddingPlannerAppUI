import React from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, SerifTitle } from '../components/SharedUI';
import { ArrowLeft, Play, Heart } from 'lucide-react';

export const VenueProfile: React.FC = () => {
  const { navigate, goBack, toggleSaveVendor, vendors } = useApp();
  const venue = vendors.find((v) => v.id === 'venue-1') || vendors[0];

  return (
    <div className="flex flex-col h-full justify-between font-sans">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between pt-1 pb-3 text-[13px] text-[#2B2523]">
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-[#2B2523] hover:opacity-75 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-widest text-[10px] font-mono font-medium text-[#8C7A6B]">
              PORTFOLIO · 31 IMAGES
            </span>
            <button
              onClick={() => toggleSaveVendor(venue.id)}
              className="text-[#7A2234] hover:opacity-80 transition cursor-pointer p-0.5"
            >
              <Heart className="w-4.5 h-4.5 fill-[#7A2234] text-[#7A2234]" />
            </button>
          </div>
        </div>

        {/* Hero Banner with Walkthrough Button */}
        <div className="w-full h-36 bg-[#EAE1D2] rounded-2xl relative border border-[#DFD5C4] mb-3 flex items-end justify-end p-2.5 overflow-hidden group">
          <button
            onClick={() => navigate('Portfolio')}
            className="bg-[#2B2523] hover:bg-[#7A2234] transition text-white px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Walkthrough</span>
          </button>
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
          <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl shadow-2xs">
            <div className="text-[10px] uppercase tracking-wider text-[#8C7A6B] font-mono font-semibold">
              SEATS
            </div>
            <div className="text-[18px] font-bold text-[#2B2523] mt-0.5">650</div>
          </div>
          <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl shadow-2xs">
            <div className="text-[10px] uppercase tracking-wider text-[#8C7A6B] font-mono font-semibold">
              DINING
            </div>
            <div className="text-[18px] font-bold text-[#2B2523] mt-0.5">320</div>
          </div>
          <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl shadow-2xs">
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

        {/* House Rules Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-widest text-[#8C7A6B] font-mono font-semibold mb-2">
            HOUSE RULES THAT MATTER
          </div>
          <ul className="space-y-2 text-[12px] text-[#2B2523]">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2234] shrink-0" />
              <span>Outside catering allowed · kitchen included</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2234] shrink-0" />
              <span>No non-vegetarian food on the premises</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2234] shrink-0" />
              <span>Homam permitted in the north-east corner</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A2234] shrink-0" />
              <span>Loading access is 2.4m — check with decorator</span>
            </li>
          </ul>
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

