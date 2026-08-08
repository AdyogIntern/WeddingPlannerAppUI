import React from 'react';
import { useApp } from '../context/AppContext';
import { PrimaryButton, ScreenHeader, SerifTitle } from '../components/SharedUI';
import { Heart } from 'lucide-react';

export const VendorSwap: React.FC = () => {
  const { navigate, goBack, vendors, toggleSaveVendor, selectedVendorId, setActiveBlueprintVendor, showToast } = useApp();
  const currentVendor = vendors.find((v) => v.id === selectedVendorId) || vendors[0];

  const handleSelectVendorAndSwap = (vendorObj: any) => {
    setActiveBlueprintVendor(vendorObj);
    showToast(`Selected ${vendorObj.name} for Blueprint!`);
    navigate('SwapImpact');
  };

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Top Header */}
        <ScreenHeader
          backText="Muhurtham"
          onBack={goBack}
        />

        {/* Title */}
        <div className="mb-2">
          <SerifTitle>Catering</SerifTitle>
        </div>

        {/* Top Status Pills Row - Exact screenshot layout */}
        <div className="flex flex-wrap gap-2 text-[12px] mb-3 mt-1">
          <span className="px-3 py-1 bg-[#7A2234] text-white font-medium rounded-full">
            420 guests
          </span>
          <span className="px-3 py-1 bg-[#F5EBEB] text-[#7A2234] font-medium rounded-full">
            Iyengar vegetarian
          </span>
          <span className="px-3 py-1 bg-[#F5EBEB] text-[#7A2234] font-medium rounded-full">
            ₹1,100–1,600 / plate
          </span>
          <span className="px-3 py-1 bg-[#F5EBEB] text-[#7A2234] font-medium rounded-full">
            14 Feb available
          </span>
        </div>

        {/* Divider Line under pills */}
        <div className="border-b border-[#E0D7C6] my-3"></div>

        {/* Main Selected Vendor Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-4 shadow-2xs">
          {/* Portfolio Image Box matching 13.png with centered text */}
          <div
            onClick={() => navigate('Portfolio')}
            className="w-full h-36 rounded-xl border border-[#DFD5C4] mb-3.5 flex items-center justify-center cursor-pointer hover:opacity-90 transition group relative overflow-hidden"
            style={{
              backgroundImage: currentVendor.image ? `url(${currentVendor.image})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Soft overlay to ensure readability */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition"></div>
            <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold text-[#786E65] bg-[#FAF7F0] px-3 py-1 rounded shadow-2xs group-hover:bg-[#7A2234] group-hover:text-white transition">
              PORTFOLIO · 24 IMAGES
            </span>
          </div>

          <div className="flex items-start justify-between mb-0.5">
            <h3 className="font-serif text-[17px] font-bold text-[#2B2523]">
              {currentVendor.name}
            </h3>
            <span className="text-[12.5px] text-[#15803D] font-bold">
              ✓ Verified
            </span>
          </div>

          <p className="text-[12px] text-[#786E65] mb-2">
            Iyengar & Iyer · 38 yrs · up to 1,500 plates
          </p>

          <div className="mb-3">
            <div className="text-[16px] font-bold text-[#2B2523]">
              ₹{currentVendor.pricePerPlate || 1250}<span className="text-[12px] font-normal text-[#786E65]">/plate ≈ $14.90</span>
            </div>
            <div className="text-[11.5px] text-[#786E65]">
              Est. ₹5.25L for 420 · within your band
            </div>
          </div>

          <div className="flex gap-1.5 mb-3.5 flex-wrap">
            <span className="px-2.5 py-1 bg-[#F2ECE1] border border-[#E8DFC0]/60 text-[11px] text-[#2B2523] rounded-lg">
              Works with NRI clients
            </span>
            <span className="px-2.5 py-1 bg-[#F2ECE1] border border-[#E8DFC0]/60 text-[11px] text-[#2B2523] rounded-lg">
              Tasting on video call
            </span>
          </div>

          {/* Action Row */}
          <div className="flex gap-2.5">
            <div className="flex-1">
              <PrimaryButton onClick={() => handleSelectVendorAndSwap(currentVendor)}>
                Put in Blueprint
              </PrimaryButton>
            </div>
            <button
              onClick={() => {
                toggleSaveVendor(currentVendor.id);
              }}
              className="w-12 h-12 bg-white border border-[#D5CBB9] rounded-2xl flex items-center justify-center text-[#786E65] hover:bg-[#F5ECE2] transition cursor-pointer shrink-0"
            >
              <Heart className={`w-5.5 h-5.5 ${currentVendor.isSaved ? 'fill-[#7A2234] text-[#7A2234]' : 'text-[#786E65]'}`} />
            </button>
          </div>
        </div>

        {/* Other Options List */}
        <div className="space-y-2.5 mb-3">
          {/* Option 1 */}
          <div
            onClick={() => handleSelectVendorAndSwap(vendors.find((v) => v.id === 'caterer-3') || vendors[2])}
            className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl cursor-pointer hover:border-[#7A2234] transition group"
          >
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-serif text-[15px] font-bold text-[#2B2523] group-hover:text-[#7A2234]">
                Kalyana Ruchi
              </h4>
              <span className="text-[12px] text-[#786E65]">
                3 votes
              </span>
            </div>
            <p className="text-[12px] text-[#786E65] mb-2.5">
              ₹1,480/plate · ≈$17.60 · Chennai + Coimbatore
            </p>
            <div className="flex items-center gap-2 pt-2.5 border-t border-[#EAE1D2]">
              {/* Overlapping family avatars */}
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full bg-[#7A2234] ring-1 ring-white flex items-center justify-center text-[9px] font-bold text-white select-none">A</div>
                <div className="w-5 h-5 rounded-full bg-[#8C7A6B] ring-1 ring-white flex items-center justify-center text-[9px] font-bold text-white select-none">P</div>
                <div className="w-5 h-5 rounded-full bg-[#D5CBB9] ring-1 ring-white flex items-center justify-center text-[9px] font-bold text-white select-none">M</div>
              </div>
              <span className="text-[11.5px] text-[#786E65]">
                Amma, Appa and Meera like this
              </span>
            </div>
          </div>

          {/* Option 2 */}
          <div
            onClick={() => handleSelectVendorAndSwap(vendors.find((v) => v.id === 'caterer-2') || vendors[1])}
            className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl cursor-pointer hover:border-[#7A2234] transition group"
          >
            <h4 className="font-serif text-[15px] font-bold text-[#2B2523] group-hover:text-[#7A2234]">
              Thanjavur Samayal
            </h4>
            <p className="text-[12px] text-[#786E65]">
              ₹980/plate · ≈$11.70 · under budget
            </p>
          </div>
        </div>

        <div className="text-center text-[12px] text-[#786E65] my-3">
          17 more caterers match this slot
        </div>
      </div>
    </div>
  );
};


