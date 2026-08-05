import React from 'react';
import { useApp } from '../context/AppContext';
import { AvatarGroup, CalloutBox, PrimaryButton, ScreenHeader, SerifTitle, TextMuted } from '../components/SharedUI';

export const SwapImpact: React.FC = () => {
  const { navigate, goBack, showToast, activeBlueprintVendor } = useApp();

  const handleUndo = () => {
    showToast('Swap undone. Returned to previous vendor.');
    navigate('VendorSwap');
  };

  const handleBackToBlueprint = () => {
    showToast('Updated Blueprint saved!');
    navigate('EverythingYouNeed');
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <ScreenHeader
          onBack={goBack}
          rightAction={
            <button
              onClick={handleUndo}
              className="text-[12.5px] text-[#7A2234] font-medium hover:opacity-75 cursor-pointer underline"
            >
              Undo
            </button>
          }
        />

        {/* Title */}
        <div className="mb-3">
          <SerifTitle>Swap made</SerifTitle>
          <TextMuted>Muhurtham · {activeBlueprintVendor.category.toLowerCase()}</TextMuted>
        </div>

        {/* WAS vs NOW Comparison Card */}
        <div className="grid grid-cols-11 gap-1.5 items-center mb-3">
          {/* WAS Card */}
          <div className="col-span-5 p-2.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl">
            <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium mb-1">
              Was
            </div>
            <div className="text-[13px] font-semibold text-[#2B2523] truncate">
              Kalyana Ruchi
            </div>
            <div className="text-[11px] text-[#786E65]">₹1,480 / plate</div>
            <div className="text-[13px] font-bold text-[#2B2523] mt-1">₹6.22L</div>
          </div>

          {/* Arrow */}
          <div className="col-span-1 text-center text-[#786E65] font-bold text-sm">
            →
          </div>

          {/* NOW Card */}
          <div className="col-span-5 p-2.5 bg-[#FAF7F0] border-2 border-[#7A2234] rounded-2xl shadow-2xs">
            <div className="text-[10px] uppercase tracking-wider text-[#7A2234] font-semibold mb-1">
              Now
            </div>
            <div className="text-[13px] font-bold text-[#2B2523] truncate">
              {activeBlueprintVendor.name}
            </div>
            <div className="text-[11px] text-[#786E65]">
              {activeBlueprintVendor.pricePerPlate ? `₹${activeBlueprintVendor.pricePerPlate} / plate` : activeBlueprintVendor.subcategory || 'Selected'}
            </div>
            <div className="text-[13px] font-bold text-[#7A2234] mt-1">
              {activeBlueprintVendor.totalPriceFormatted}
            </div>
          </div>
        </div>

        {/* What Changed Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium mb-2">
            What changed
          </div>
          <div className="space-y-2 text-[12.5px]">
            <div className="flex justify-between items-center">
              <span className="text-[#2B2523]">Total plan</span>
              <div className="text-right">
                <span className="font-bold text-[#2B2523]">₹42.6L </span>
                <span className="text-emerald-700 font-medium">-₹97,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-[#EAE1D2] pt-1.5">
              <span className="text-[#2B2523]">Category status</span>
              <span className="text-emerald-700 font-medium">Now on band</span>
            </div>

            <div className="flex justify-between items-center border-t border-[#EAE1D2] pt-1.5">
              <span className="text-[#2B2523]">Progress</span>
              <div className="text-right">
                <span className="font-semibold text-[#2B2523]">38% </span>
                <span className="text-emerald-700 font-medium">+3%</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-[#EAE1D2] pt-1.5">
              <span className="text-[#2B2523]">Payment schedule</span>
              <span className="text-[#2B2523] font-medium">Advance moves to 14 Oct</span>
            </div>
          </div>
        </div>

        {/* Who Needs To Know Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium mb-2">
            Who needs to know
          </div>
          <div className="flex items-start gap-2.5 mb-1.5">
            <AvatarGroup count={2} />
            <div className="text-[12.5px] font-semibold text-[#2B2523]">
              Appa owns catering — he'll be notified
            </div>
          </div>
          <p className="text-[11.5px] text-[#786E65] leading-relaxed">
            Under his ₹2L approval threshold and cheaper than before, so no approval is needed.
          </p>
        </div>

        {/* Callout Box */}
        <CalloutBox className="mt-2">
          Every swap is reversible for 24 hours, and versioned forever.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4 pt-1">
        <PrimaryButton onClick={handleBackToBlueprint}>
          Back to the Blueprint
        </PrimaryButton>
      </div>
    </div>
  );
};
