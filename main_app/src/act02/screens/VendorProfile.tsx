import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OutlineButton, PrimaryButton, SerifTitle } from '../components/SharedUI';
import { ArrowLeft, Play } from 'lucide-react';

export const VendorProfile: React.FC = () => {
  const { navigate, goBack, vendors, selectedVendorId, showToast } = useApp();
  const currentVendor = vendors.find((v) => v.id === selectedVendorId) || vendors[0];

  const [requestedWalkthrough, setRequestedWalkthrough] = useState(false);

  const handleRequestWalkthrough = () => {
    setRequestedWalkthrough(true);
    showToast('Kitchen video walkthrough requested! Vendor team will reach out via WhatsApp.');
  };

  const handleReferenceCall = () => {
    showToast('Reference call requested with Lakshmi & Shyam! We will arrange a 15-min slot.');
  };

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Hero Video Banner Box matching 5.png */}
        <div
          onClick={() => navigate('Portfolio')}
          className="w-full h-40 bg-[#EAE1D2] rounded-2xl relative border border-[#DFD5C4] overflow-hidden cursor-pointer mb-3 p-3 flex flex-col justify-between"
        >
          {/* Top overlay row */}
          <div className="relative flex items-center justify-center text-[11px] font-mono text-[#786E65]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goBack();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-[#2B2523] hover:opacity-75 cursor-pointer font-bold z-10"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="uppercase tracking-widest text-[10.5px] font-medium text-[#786E65]">
              HERO · 1 OF 24
            </span>
          </div>

          {/* Bottom right 60-sec intro button */}
          <div className="flex justify-end">
            <div className="bg-[#2B2523] text-white text-[11px] px-3 py-1 rounded-full flex items-center gap-1.5 font-medium shadow-xs">
              <Play className="w-3 h-3 fill-current" />
              <span>60-sec intro</span>
            </div>
          </div>
        </div>

        {/* Title & Meta */}
        <div className="mb-3">
          <SerifTitle className="text-[28px] leading-tight">{currentVendor.name}</SerifTitle>
          <p className="text-[12px] text-[#786E65] mt-0.5">
            Mylapore · established 1988 · 1,500 plates a day
          </p>
        </div>

        {/* Badges Row */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11.5px] font-medium rounded-lg">
            ✓ Visited by our team
          </span>
          <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11.5px] font-medium rounded-lg">
            ✓ FSSAI
          </span>
          <span className="px-2.5 py-1 bg-[#F8EDE9] border border-[#7A2234]/20 text-[#7A2234] text-[11.5px] font-medium rounded-lg">
            31 NRI weddings
          </span>
        </div>

        {/* Price Bands Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3">
          <h3 className="text-[13.5px] font-bold text-[#2B2523] mb-2.5">
            Price bands · published, not negotiated in the dark
          </h3>

          <div className="space-y-2 text-[12.5px] border-b border-[#EAE1D2] pb-3 mb-2.5">
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Standard sappadu</span>
              <span className="font-bold text-[#2B2523]">₹950–1,150 <span className="text-[11px] font-normal text-[#786E65]">/plate</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Muhurtham full spread</span>
              <span className="font-bold text-[#2B2523]">₹1,250–1,600</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Tiffin / evening</span>
              <span className="font-bold text-[#2B2523]">₹420–600</span>
            </div>
          </div>

          <p className="text-[11.5px] text-[#786E65] leading-normal">
            Same price for you as for a family in Chennai. Rate is contracted with us, not quoted per customer.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div
            onClick={() => navigate('Reviews')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl text-center cursor-pointer hover:border-[#7A2234] transition"
          >
            <div className="text-[10px] uppercase tracking-wider text-[#786E65] font-semibold">RATING</div>
            <div className="text-[15px] font-bold text-[#2B2523] mt-0.5">
              4.8 <span className="text-[12px] font-normal text-[#786E65]">· 62</span>
            </div>
          </div>

          <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl text-center">
            <div className="text-[10px] uppercase tracking-wider text-[#786E65] font-semibold">REPLIES IN</div>
            <div className="text-[15px] font-bold text-[#2B2523] mt-0.5">4 hrs</div>
          </div>

          <div
            onClick={() => navigate('Availability')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl text-center cursor-pointer hover:border-[#7A2234] transition"
          >
            <div className="text-[10px] uppercase tracking-wider text-[#786E65] font-semibold">14 FEB</div>
            <div className="text-[15px] font-bold text-[#15803D] mt-0.5">Free</div>
          </div>
        </div>

        {/* Family Quote Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-4">
          <h4 className="text-[13.5px] font-bold text-[#2B2523] mb-1.5">
            A family like yours
          </h4>
          <p className="text-[12.5px] text-[#2B2523] leading-relaxed italic mb-2.5">
            "420 guests, Iyengar menu, our parents in Chennai and us in Boston. The tasting was over video call. Nothing went wrong."
          </p>
          <p className="text-[11.5px] text-[#786E65]">
            — Lakshmi & Shyam, Nov 2025 ·{' '}
            <button
              onClick={handleReferenceCall}
              className="text-[#7A2234] underline font-medium hover:opacity-80 cursor-pointer inline"
            >
              Reference call available
            </button>
          </p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-2">
        <div className="flex gap-2.5 mb-2.5">
          <div className="flex-1">
            <PrimaryButton onClick={() => navigate('VendorSwap')}>
              Add to Muhurtham
            </PrimaryButton>
          </div>
          <div className="w-28">
            <OutlineButton onClick={() => navigate('CompareVendors')}>
              Compare
            </OutlineButton>
          </div>
        </div>
        <button
          onClick={handleRequestWalkthrough}
          className="w-full text-center text-[12px] text-[#786E65] py-1 font-normal transition cursor-pointer hover:underline"
        >
          Request a video walkthrough of their kitchen
        </button>
      </div>
    </div>
  );
};

