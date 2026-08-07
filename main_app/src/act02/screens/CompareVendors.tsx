import React from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, ScreenHeader, SerifTitle } from '../components/SharedUI';

export const CompareVendors: React.FC = () => {
  const { navigate, goBack, showToast, setActiveBlueprintVendor, vendors } = useApp();

  const handlePickVendor = (vendorName: string) => {
    const found = vendors.find((v) => v.name.includes(vendorName)) || {
      id: 'photo-1',
      name: vendorName,
      category: 'Visual',
      totalPrice: 340000,
      totalPriceFormatted: '₹3.4L total',
      rating: 4.9,
      isSaved: true,
    };
    setActiveBlueprintVendor(found);
    showToast(`Picked ${vendorName} for your Blueprint!`);
    navigate('SwapImpact');
  };

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Header */}
        <ScreenHeader
          backText="Photography"
          onBack={goBack}
          rightAction={
            <button
              onClick={() => showToast('Shared shortlist with family!')}
              className="text-[13px] text-[#786E65] font-normal hover:opacity-75 cursor-pointer"
            >
              Send to family
            </button>
          }
        />

        {/* Title */}
        <div className="mb-3">
          < SerifTitle>Your shortlist</ SerifTitle>
        </div>

        {/* Divider Line under Header */}
        <div className="border-b border-[#E0D7C6] mb-4"></div>

        {/* 3 Columns Vendor Headers */}
        <div className="grid grid-cols-3 gap-2.5 mb-4 text-center">
          <div
            onClick={() => handlePickVendor('Studio Anantham')}
            className="p-1 rounded-xl cursor-pointer hover:bg-[#FAF7F0] transition group border border-transparent"
          >
            {/* Blank Thumbnail Box */}
            <div className="w-full h-16 bg-[#EAE1D2] rounded-xl border border-[#DFD5C4] mb-2"></div>
            <h4 className="text-[12.5px] font-bold text-[#2B2523] leading-tight">
              Studio Anantham
            </h4>
          </div>

          <div
            onClick={() => handlePickVendor('Kadhal Frames')}
            className="p-1 rounded-xl cursor-pointer hover:bg-[#FAF7F0] transition group border border-transparent"
          >
            {/* Blank Thumbnail Box */}
            <div className="w-full h-16 bg-[#EAE1D2] rounded-xl border border-[#DFD5C4] mb-2"></div>
            <h4 className="text-[12.5px] font-bold text-[#2B2523] leading-tight">
              Kadhal Frames
            </h4>
          </div>

          <div
            onClick={() => handlePickVendor('Weddings by Mano')}
            className="p-1 rounded-xl cursor-pointer hover:bg-[#FAF7F0] transition group border border-transparent"
          >
            {/* Blank Thumbnail Box */}
            <div className="w-full h-16 bg-[#EAE1D2] rounded-xl border border-[#DFD5C4] mb-2"></div>
            <h4 className="text-[12.5px] font-bold text-[#2B2523] leading-tight">
              Weddings by Mano
            </h4>
          </div>
        </div>

        {/* Criteria Table */}
        <div className="space-y-4 text.5-[12.5px] border-t border-[#E8DFC0] pt-3.5">
          {/* Row 1: 3-day package */}
          <div>
            <div className="text-[12px] font-semibold text-[#786E65] mb-1.5">
              3-day package
            </div>
            <div className="grid grid-cols-3 gap-2 text-[#2B2523]">
              <button onClick={() => handlePickVendor('Studio Anantham')} className="text-left cursor-pointer hover:opacity-80">
                <span className="font-bold text-[13.5px] block">₹3.4L</span>
                <span className="text-[11px] text-[#786E65] font-normal">$4,050</span>
              </button>
              <button onClick={() => handlePickVendor('Kadhal Frames')} className="text-left cursor-pointer hover:opacity-80">
                <span className="font-bold text-[13.5px] block">₹2.2L</span>
                <span className="text-[11px] text-[#786E65] font-normal">$2,620</span>
              </button>
              <button onClick={() => handlePickVendor('Weddings by Mano')} className="text-left cursor-pointer hover:opacity-80">
                <span className="font-bold text-[13.5px] block">₹4.8L</span>
                <span className="text-[11px] text-[#786E65] font-normal font-sans">$5,710</span>
              </button>
            </div>
          </div>

          {/* Row 2: Crew size */}
          <div className="border-t border-[#EAE1D2] pt-3">
            <div className="text-[12px] font-semibold text-[#786E65] mb-1.5">
              Crew size
            </div>
            <div className="grid grid-cols-3 gap-2 text-[#2B2523] font-medium text-[13px]">
              <div>6</div>
              <div>3</div>
              <div>9 + drone</div>
            </div>
          </div>

          {/* Row 3: Delivery */}
          <div className="border-t border-[#EAE1D2] pt-3">
            <div className="text-[12px] font-semibold text-[#786E65] mb-1.5">
              Delivery
            </div>
            <div className="grid grid-cols-3 gap-2 text-[#2B2523] text-[12.5px] font-medium">
              <div>8 weeks</div>
              <div>12 weeks</div>
              <div>4 weeks + SDE</div>
            </div>
          </div>

          {/* Row 4: 14 Feb Availability */}
          <div className="border-t border-[#EAE1D2] pt-3">
            <div className="text-[12px] font-semibold text-[#786E65] mb-1.5">
              14 Feb
            </div>
            <div className="grid grid-cols-3 gap-2 text-[13px]">
              <div className="text-[#15803D] font-bold">Free</div>
              <div className="text-[#15803D] font-bold">Free</div>
              <div className="text-amber-800 font-bold">On hold</div>
            </div>
          </div>

          {/* Row 5: Family Vote */}
          <div className="border-t border-[#EAE1D2] pt-3">
            <div className="text-[12px] font-semibold text-[#786E65] mb-2">
              Family vote · 4 of 6 in
            </div>
            <div className="grid grid-cols-3 gap-2">
              {/* Vendor 1 votes */}
              <div>
                <div className="h-1.5 bg-[#7A2234] rounded-full mb-2 w-full" />
                <div className="flex -space-x-1.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#D5C7B3] ring-1 ring-white"></div>
                  <div className="w-4.5 h-4.5 rounded-full bg-[#C2B29A] ring-1 ring-white"></div>
                  <div className="w-4.5 h-4.5 rounded-full bg-[#AF9E85] ring-1 ring-white"></div>
                </div>
              </div>

              {/* Vendor 2 votes */}
              <div>
                <div className="h-1.5 bg-[#D5C7B3] rounded-full mb-2 w-1/3" />
                <div className="w-4.5 h-4.5 rounded-full bg-[#D5C7B3] ring-1 ring-white"></div>
              </div>

              {/* Vendor 3 votes */}
              <div>
                <div className="h-1.5 bg-[#EAE1D2] rounded-full mb-1.5 w-full" />
                <span className="text-[11px] text-[#786E65]">Too much</span>
              </div>
            </div>
          </div>
        </div>

        {/* Callout Box */}
        <CalloutBox className="my-4">
          Appa hasn't voted. We'll remind him on WhatsApp tomorrow morning IST.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4">
        <PrimaryButton onClick={() => handlePickVendor('Studio Anantham')}>
          Pick Studio Anantham
        </PrimaryButton>
      </div>
    </div>
  );
};

