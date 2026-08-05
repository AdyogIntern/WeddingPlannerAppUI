import React from 'react';
import { useApp } from '../context/AppContext';
import { AvatarGroup, PrimaryButton, ScreenHeader, SerifTitle } from '../components/SharedUI';
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
    <div className="flex flex-col w-full space-y-6 pb-6">
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
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          {/* Portfolio Image Box */}
          <div
            onClick={() => navigate('Portfolio')}
            className="w-full h-32 bg-[#EAE1D2] rounded-xl border border-[#DFD5C4] mb-3 flex items-start justify-end p-2 cursor-pointer hover:opacity-90 transition group relative"
          >
            <span className="text-[9.5px] uppercase tracking-wider font-semibold text-[#786E65] bg-[#FAF7F0]/90 px-2 py-0.5 rounded shadow-2xs group-hover:bg-[#7A2234] group-hover:text-white transition">
              PORTFOLIO · 24 IMAGES
            </span>
          </div>

          <div className="flex items-start justify-between mb-0.5">
            <h3 className="font-serif text-[17px] font-semibold text-[#2B2523]">
              {currentVendor.name}
            </h3>
            <span className="text-[12px] text-[#059669] font-medium">
              ✓ Verified
            </span>
          </div>

          <p className="text-[11.5px] text-[#786E65] mb-2">
            Iyengar & Iyer · 38 yrs · up to 1,500 plates
          </p>

          <div className="mb-2">
            <div className="text-[16px] font-bold text-[#2B2523]">
              ₹{currentVendor.pricePerPlate || 1250}<span className="text-[12px] font-normal text-[#786E65]">/plate ≈ $14.90</span>
            </div>
            <div className="text-[11.5px] text-[#786E65]">
              Est. ₹5.25L for 420 · within your band
            </div>
          </div>

          <div className="flex gap-1.5 mb-3 flex-wrap">
            <span className="px-2.5 py-1 bg-[#F2ECE1] text-[11px] text-[#2B2523] rounded-lg">
              Works with NRI clients
            </span>
            <span className="px-2.5 py-1 bg-[#F2ECE1] text-[11px] text-[#2B2523] rounded-lg">
              Tasting on video call
            </span>
          </div>

          {/* Action Row */}
          <div className="flex gap-2">
            <div className="flex-1">
              <PrimaryButton onClick={() => handleSelectVendorAndSwap(currentVendor)}>
                Put in Blueprint
              </PrimaryButton>
            </div>
            <button
              onClick={() => toggleSaveVendor(currentVendor.id)}
              className="w-11 h-11 bg-white border border-[#D5CBB9] rounded-xl flex items-center justify-center text-[#7A2234] hover:bg-[#F5ECE2] transition cursor-pointer shrink-0"
            >
              <Heart className={`w-5 h-5 ${currentVendor.isSaved ? 'fill-[#7A2234] text-[#7A2234]' : 'text-[#7A2234]'}`} />
            </button>
          </div>
        </div>

        {/* Other Options List */}
        <div className="space-y-2 mb-3">
          {/* Option 1 */}
          <div
            onClick={() => handleSelectVendorAndSwap(vendors.find((v) => v.id === 'caterer-3') || vendors[2])}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl cursor-pointer hover:border-[#7A2234] transition shadow-2xs group"
          >
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="font-serif text-[15px] font-semibold text-[#2B2523] group-hover:text-[#7A2234]">
                Kalyana Ruchi
              </h4>
              <span className="text-[11.5px] text-[#786E65]">
                3 votes
              </span>
            </div>
            <p className="text-[12px] text-[#786E65] mb-2">
              ₹1,480/plate · ≈$17.60 · Chennai + Coimbatore
            </p>
            <div className="flex items-center gap-2 pt-2 border-t border-[#EAE1D2]">
              <AvatarGroup count={3} />
              <span className="text-[11.5px] text-[#786E65]">
                Amma, Appa and Meera like this
              </span>
            </div>
          </div>

          {/* Option 2 */}
          <div
            onClick={() => handleSelectVendorAndSwap(vendors.find((v) => v.id === 'caterer-2') || vendors[1])}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl cursor-pointer hover:border-[#7A2234] transition shadow-2xs group"
          >
            <h4 className="font-serif text-[15px] font-semibold text-[#2B2523] group-hover:text-[#7A2234]">
              Thanjavur Samayal
            </h4>
            <p className="text-[12px] text-[#786E65]">
              ₹980/plate · ≈$11.70 · under budget
            </p>
          </div>
        </div>

        <div className="text-center text-[12px] text-[#786E65] my-2">
          17 more caterers match this slot
        </div>
      </div>
    </div>
  );
};

