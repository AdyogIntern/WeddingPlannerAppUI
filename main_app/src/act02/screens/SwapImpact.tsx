import React from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, SerifTitle, TextMuted } from '../components/SharedUI';

export const SwapImpact: React.FC = () => {
  const { navigate, showToast } = useApp();

  const handleUndo = () => {
    showToast('Swap undone. Returned to previous vendor.');
    navigate('VendorSwap');
  };

  const handleBackToBlueprint = () => {
    showToast('Updated Blueprint saved!');
    navigate('EverythingYouNeed');
  };

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Top Header matching 14.png */}
        <div className="flex items-center justify-end py-1 text-[13.5px] font-medium text-[#2B2523]">
          <button
            onClick={handleUndo}
            className="text-[13.5px] text-[#7A2234] font-semibold hover:opacity-75 cursor-pointer"
          >
            Undo
          </button>
        </div>

        {/* Title */}
        <div className="mb-3">
          <SerifTitle>Swap made</SerifTitle>
          <TextMuted>Muhurtham · catering</TextMuted>
        </div>

        {/* Divider Line under Header */}
        <div className="border-b border-[#E0D7C6] mb-4"></div>

        {/* WAS vs NOW Comparison Card */}
        <div className="grid grid-cols-11 gap-1.5 items-center mb-3.5">
          {/* WAS Card */}
          <div className="col-span-5 p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl">
            <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-semibold mb-1">
              WAS
            </div>
            <div className="text-[13px] font-bold text-[#2B2523] truncate font-serif">
              Kalyana Ruchi
            </div>
            <div className="text-[11px] text-[#786E65]">₹1,480 / plate</div>
            <div className="text-[13.5px] font-bold text-[#2B2523] mt-1.5">₹6.22L</div>
          </div>

          {/* Arrow */}
          <div className="col-span-1 text-center text-[#8C7A6B] font-bold text-sm">
            →
          </div>

          {/* NOW Card */}
          <div className="col-span-5 p-3 bg-[#FAF7F0] border-2 border-[#7A2234] rounded-2xl shadow-2xs">
            <div className="text-[10px] uppercase tracking-wider text-[#7A2234] font-bold mb-1">
              NOW
            </div>
            <div className="text-[13px] font-bold text-[#2B2523] truncate">
              Sri Amirtham
            </div>
            <div className="text-[11px] text-[#786E65]">
              ₹1,250 / plate
            </div>
            <div className="text-[13.5px] font-bold text-[#7A2234] mt-1.5">
              ₹5.25L
            </div>
          </div>
        </div>

        {/* What Changed Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3.5 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-semibold mb-2.5">
            WHAT CHANGED
          </div>
          <div className="space-y-2.5 text-[13px]">
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Total plan</span>
              <div className="text-right">
                <span className="font-bold text-[#2B2523]">₹42.6L </span>
                <span className="text-[#15803D] font-bold">-₹97,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-[#EAE1D2] pt-2">
              <span className="text-[#2B2523]">Food category</span>
              <span className="text-[#15803D] font-bold">Now on band</span>
            </div>

            <div className="flex justify-between items-center border-t border-[#EAE1D2] pt-2">
              <span className="text-[#2B2523]">Progress</span>
              <div className="text-right">
                <span className="font-bold text-[#2B2523]">38% </span>
                <span className="text-[#15803D] font-bold">+3%</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-[#EAE1D2] pt-2">
              <span className="text-[#2B2523]">Payment schedule</span>
              <span className="text-[#2B2523] font-medium">Advance moves to 14 Oct</span>
            </div>
          </div>
        </div>

        {/* Who Needs To Know Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3.5 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-semibold mb-2.5">
            WHO NEEDS TO KNOW
          </div>
          <div className="flex items-start gap-2.5 mb-2">
            {/* Styled overlapping avatars */}
            <div className="flex -space-x-1.5 shrink-0 pt-0.5">
              <div className="w-5 h-5 rounded-full bg-[#7A2234] ring-1 ring-white flex items-center justify-center text-[9px] font-bold text-white select-none">A</div>
              <div className="w-5 h-5 rounded-full bg-[#8C7A6B] ring-1 ring-white flex items-center justify-center text-[9px] font-bold text-white select-none">P</div>
            </div>
            <div className="text-[13px] font-bold text-[#2B2523] leading-tight">
              Appa owns catering — he'll be notified
            </div>
          </div>
          <p className="text-[12px] text-[#786E65] leading-relaxed">
            Under his ₹2L approval threshold and cheaper than before, so no approval is needed.
          </p>
        </div>

        {/* Callout Box */}
        <CalloutBox className="my-4">
          Every swap is reversible for 24 hours, and versioned forever.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4">
        <PrimaryButton onClick={handleBackToBlueprint}>
          Back to the Blueprint
        </PrimaryButton>
      </div>
    </div>
  );
};

