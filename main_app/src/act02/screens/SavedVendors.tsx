import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, ScreenHeader, SerifTitle, TextMuted } from '../components/SharedUI';
import { ChevronRight, Heart, Trash2 } from 'lucide-react';

export const SavedVendors: React.FC = () => {
  const { navigate, goBack, vendors, toggleSaveVendor, showToast } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const savedVendorsList = vendors.filter((v) => v.isSaved);

  const handleTurnIntoVotes = () => {
    showToast('Voting link generated and shared with family!');
    navigate('CompareVendors');
  };

  return (
    <div className="flex flex-col w-full space-y-6 pb-6">
      <div>
        {/* Header */}
        <ScreenHeader
          onBack={goBack}
          rightAction={
            <button
              onClick={() => navigate('VendorFilters')}
              className="text-[13px] text-[#2B2523] font-medium hover:opacity-75 cursor-pointer"
            >
              Filter
            </button>
          }
        />

        {/* Title */}
        <div className="mb-3">
          <SerifTitle>Saved</SerifTitle>
          <TextMuted>{savedVendorsList.length} vendors saved across categories</TextMuted>
        </div>

        {/* Family Member Filter Pills */}
        <div className="flex gap-2 my-3 overflow-x-auto pb-1 no-scrollbar">
          {['All', 'Priya', 'Appa', 'Meera'].map((person) => (
            <button
              key={person}
              onClick={() => setActiveFilter(person)}
              className={`px-3.5 py-1.5 rounded-xl text-[12.5px] transition cursor-pointer ${
                activeFilter === person
                  ? 'bg-[#7A2234] text-white font-medium shadow-2xs'
                  : 'bg-[#F2ECE1] border border-[#E8DFC0] text-[#2B2523] hover:bg-[#EAE1D2]'
              }`}
            >
              {person}
            </button>
          ))}
        </div>

        {/* Shortlist Category Cards */}
        <div className="space-y-2.5 my-3">
          {/* Card 1: Photography */}
          <div
            onClick={() => navigate('CompareVendors')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition shadow-2xs group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 bg-[#EAE1D2] rounded-lg border border-[#DFD5C4] flex items-center justify-center font-bold text-[#786E65] text-xs">P1</div>
                <div className="w-9 h-9 bg-[#E2D8C8] rounded-lg border border-[#DFD5C4] flex items-center justify-center font-bold text-[#786E65] text-xs">P2</div>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#7A2234] group-hover:underline">Photography</h3>
                <p className="text-[11.5px] text-[#786E65]">3 saved · voting closes Friday</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E] group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Card 2: Mandap Decor */}
          <div
            onClick={() => navigate('VenueProfile')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition shadow-2xs group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 bg-[#EAE1D2] rounded-lg border border-[#DFD5C4] flex items-center justify-center font-bold text-[#786E65] text-xs">M1</div>
                <div className="w-9 h-9 bg-[#E2D8C8] rounded-lg border border-[#DFD5C4] flex items-center justify-center font-bold text-[#786E65] text-xs">M2</div>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#7A2234] group-hover:underline">Mandap decor</h3>
                <p className="text-[11.5px] text-[#786E65]">3 saved · Appa commented</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E] group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Dynamic list of individually saved vendors */}
          {savedVendorsList.map((vendor) => (
            <div
              key={vendor.id}
              onClick={() => {
                if (vendor.category === 'Space') navigate('VenueProfile');
                else if (vendor.category === 'Ritual') navigate('PurohitProfile');
                else if (vendor.category === 'Attire') navigate('Attire');
                else navigate('VendorProfile');
              }}
              className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition shadow-2xs group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#EAE1D2] rounded-lg border border-[#DFD5C4] flex items-center justify-center font-bold text-[#2B2523] text-xs">
                  {vendor.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#2B2523] group-hover:text-[#7A2234] transition">
                    {vendor.name}
                  </h3>
                  <p className="text-[11.5px] text-[#786E65]">
                    {vendor.subcategory || vendor.category} · {vendor.totalPriceFormatted}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveVendor(vendor.id);
                  }}
                  className="p-1 text-[#91877E] hover:text-[#7A2234] transition"
                  title="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <ChevronRight className="w-4 h-4 text-[#91877E] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}

          {/* Card 6: Bridal Silk */}
          <div
            onClick={() => navigate('Attire')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition shadow-2xs group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 bg-[#EAE1D2] rounded-lg border border-[#DFD5C4] flex items-center justify-center font-bold text-[#786E65] text-xs">S1</div>
                <div className="w-9 h-9 bg-[#E2D8C8] rounded-lg border border-[#DFD5C4] flex items-center justify-center font-bold text-[#786E65] text-xs">S2</div>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#2B2523] group-hover:text-[#7A2234]">Bridal silk</h3>
                <p className="text-[11.5px] text-[#786E65]">4 saved by Priya</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E] group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Callout */}
        <CalloutBox className="mt-3">
          Shortlists are shared, not private. Meera saving four mehendi artists is visible to everyone — which is how the family stops duplicating work.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-5 pt-1">
        <PrimaryButton onClick={handleTurnIntoVotes}>
          Turn shortlists into votes
        </PrimaryButton>
      </div>
    </div>
  );
};
