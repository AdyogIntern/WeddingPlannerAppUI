import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OutlineButton, PrimaryButton, SerifTitle } from '../components/SharedUI';
import { ArrowLeft, Heart, Play, Check, Video, PhoneCall } from 'lucide-react';

export const VendorProfile: React.FC = () => {
  const { navigate, goBack, vendors, toggleSaveVendor, selectedVendorId, showToast } = useApp();
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
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Back Navigation Header */}
        <div className="flex items-center justify-between pt-1 pb-2 text-[12.5px] text-[#786E65]">
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-[#2B2523] hover:opacity-75 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wider text-[10.5px] font-medium text-[#91877E]">
              Hero · 1 of 24
            </span>
            <button
              onClick={() => toggleSaveVendor(currentVendor.id)}
              className="text-[#91877E] hover:text-[#7A2234] transition cursor-pointer p-0.5"
            >
              <Heart className={`w-4.5 h-4.5 ${currentVendor.isSaved ? 'fill-[#7A2234] text-[#7A2234]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Hero Video Banner Box */}
        <div
          onClick={() => navigate('Portfolio')}
          className="w-full h-28 bg-[#EAE1D2] rounded-2xl relative border border-[#DFD5C4] overflow-hidden cursor-pointer group mb-3 flex items-end justify-end p-2"
        >
          <div className="bg-[#2B2523]/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium shadow-xs group-hover:bg-[#7A2234] transition">
            <Play className="w-3 h-3 fill-current" />
            <span>60-sec intro</span>
          </div>
        </div>

        {/* Title & Meta */}
        <div className="mb-2.5">
          <SerifTitle className="text-[26px]">{currentVendor.name}</SerifTitle>
          <p className="text-[12px] text-[#786E65] mt-0.5">
            Mylapore · established 1988 · 1,500 plates a day
          </p>
        </div>

        {/* Badges Row */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-medium rounded-lg">
            ✓ Visited by our team
          </span>
          <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-medium rounded-lg">
            ✓ FSSAI
          </span>
          <span className="px-2.5 py-1 bg-[#F8EDE9] border border-[#7A2234]/20 text-[#7A2234] text-[11px] font-medium rounded-lg">
            31 NRI weddings
          </span>
        </div>

        {/* Price Bands Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <h3 className="text-[13px] font-semibold text-[#2B2523] mb-2">
            Price bands · published, not negotiated in the dark
          </h3>

          <div className="space-y-1.5 text-[12.5px] border-b border-[#EAE1D2] pb-2.5 mb-2">
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Standard sappadu</span>
              <span className="font-semibold text-[#2B2523]">₹950–1,150 <span className="text-[11px] font-normal text-[#786E65]">/plate</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Muhurtham full spread</span>
              <span className="font-semibold text-[#2B2523]">₹1,250–1,600</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Tiffin / evening</span>
              <span className="font-semibold text-[#2B2523]">₹420–600</span>
            </div>
          </div>

          <p className="text-[11px] text-[#786E65] leading-normal">
            Same price for you as for a family in Chennai. Rate is contracted with us, not quoted per customer.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div
            onClick={() => navigate('Reviews')}
            className="p-2.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-xl text-center cursor-pointer hover:border-[#7A2234] transition"
          >
            <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium">Rating</div>
            <div className="text-[15px] font-bold text-[#2B2523] mt-0.5">
              {currentVendor.rating || 4.8} <span className="text-[11px] font-normal text-[#786E65]">· {currentVendor.reviewsCount || 62}</span>
            </div>
          </div>

          <div className="p-2.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-xl text-center">
            <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium">Replies In</div>
            <div className="text-[15px] font-bold text-[#2B2523] mt-0.5">4 hrs</div>
          </div>

          <div
            onClick={() => navigate('Availability')}
            className="p-2.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-xl text-center cursor-pointer hover:border-[#7A2234] transition"
          >
            <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium">14 Feb</div>
            <div className="text-[15px] font-bold text-emerald-700 mt-0.5">Free</div>
          </div>
        </div>

        {/* Family Quote Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <h4 className="text-[13px] font-semibold text-[#2B2523] mb-1">
            A family like yours
          </h4>
          <p className="text-[12px] text-[#2B2523] leading-relaxed italic mb-2">
            "420 guests, Iyengar menu, our parents in Chennai and us in Boston. The tasting was over video call. Nothing went wrong."
          </p>
          <p className="text-[11px] text-[#786E65]">
            — Lakshmi & Shyam, Nov 2025 ·{' '}
            <button
              onClick={handleReferenceCall}
              className="text-[#7A2234] underline font-medium hover:text-[#621B29] cursor-pointer inline-flex items-center gap-0.5"
            >
              <PhoneCall className="w-3 h-3" /> Reference call available
            </button>
          </p>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="mt-2 pt-1 border-t border-[#E8DFC0]/50">
        <div className="flex gap-2 mb-1.5">
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
          className={`w-full text-center text-[11px] py-1 font-medium transition cursor-pointer flex items-center justify-center gap-1 ${
            requestedWalkthrough ? 'text-emerald-700' : 'text-[#7A2234] hover:underline'
          }`}
        >
          {requestedWalkthrough ? (
            <>
              <Check className="w-3 h-3" /> Kitchen walkthrough requested!
            </>
          ) : (
            <>
              <Video className="w-3 h-3" /> Request a video walkthrough of their kitchen
            </>
          )}
        </button>
      </div>
    </div>
  );
};
