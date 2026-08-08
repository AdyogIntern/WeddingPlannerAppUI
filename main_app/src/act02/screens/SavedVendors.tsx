import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, SerifTitle, TextMuted } from '../components/SharedUI';
import { ChevronRight } from 'lucide-react';

import mandapamImg from '../../assets/mandapam.jpg';
import priestImg from '../../assets/priest.jpg';
import sareeImg from '../../assets/saree.jpg';
import jewelleryImg from '../../assets/jewellery.jpg';
import photoCandidImg from '../../assets/photo_candid.jpg';
import photoRomanticImg from '../../assets/photo_romantic.jpg';
import photoDroneImg from '../../assets/photo_drone.jpg';

export const SavedVendors: React.FC = () => {
  const { navigate, showToast } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const handleTurnIntoVotes = () => {
    showToast('Voting link generated and shared with family!');
    navigate('CompareVendors');
  };

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Top Header matching 4.png */}
        <div className="flex items-center justify-end py-1 text-[13.5px] font-medium text-[#2B2523]">
          <button
            onClick={() => navigate('VendorFilters')}
            className="text-[13.5px] text-[#786E65] font-normal hover:opacity-75 cursor-pointer"
          >
            Filter
          </button>
        </div>

        {/* Title */}
        <div className="mb-3">
          <SerifTitle>Saved</SerifTitle>
          <TextMuted>21 vendors across 8 categories</TextMuted>
        </div>

        {/* Divider Line under Header */}
        <div className="border-b border-[#E0D7C6] mb-4"></div>

        {/* Family Member Filter Pills */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1 no-scrollbar">
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

        {/* Shortlist Category Cards Stack */}
        <div className="space-y-2.5 mb-4">
          {/* Card 1: Photography */}
          <div
            onClick={() => navigate('CompareVendors')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img src={photoCandidImg} alt="Candid photo" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
                <img src={photoRomanticImg} alt="Romantic photo" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#7A2234]">Photography</h3>
                <p className="text-[11.5px] text-[#786E65]">3 saved · voting closes Friday</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E]" />
          </div>

          {/* Card 2: Mandap decor */}
          <div
            onClick={() => navigate('VenueProfile')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img src={mandapamImg} alt="Mandapam decor" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
                <img src={photoDroneImg} alt="Aerial Mandapam" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#7A2234]">Mandap decor</h3>
                <p className="text-[11.5px] text-[#786E65]">3 saved · Appa commented</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E]" />
          </div>

          {/* Card 3: Mehendi artists */}
          <div
            onClick={() => navigate('SearchResults')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img src={sareeImg} alt="Saree design" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
                <img src={photoCandidImg} alt="Mehendi photoshoot" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#2B2523]">Mehendi artists</h3>
                <p className="text-[11.5px] text-[#786E65]">4 saved by Meera</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E]" />
          </div>

          {/* Card 4: Return gifts */}
          <div
            onClick={() => navigate('SearchResults')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img src={jewelleryImg} alt="Gifts jewellery" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
                <img src={sareeImg} alt="Gifts fabrics" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#2B2523]">Return gifts</h3>
                <p className="text-[11.5px] text-[#786E65]">5 saved by Meera</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E]" />
          </div>

          {/* Card 5: Nadaswaram */}
          <div
            onClick={() => navigate('PurohitProfile')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img src={priestImg} alt="Rituals priest" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
                <img src={mandapamImg} alt="Rituals hall" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#2B2523]">Nadaswaram</h3>
                <p className="text-[11.5px] text-[#786E65]">2 saved · Chithappa is paying</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E]" />
          </div>

          {/* Card 6: Bridal silk */}
          <div
            onClick={() => navigate('Attire')}
            className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#7A2234] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img src={sareeImg} alt="Silk saree" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
                <img src={jewelleryImg} alt="Gold jewellery" className="w-9 h-9 object-cover rounded-lg border border-[#DFD5C4]" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#2B2523]">Bridal silk</h3>
                <p className="text-[11.5px] text-[#786E65]">4 saved by Priya</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#91877E]" />
          </div>
        </div>

        {/* Callout */}
        <CalloutBox className="my-4">
          Shortlists are shared, not private. Meera saving four mehendi artists is visible to everyone — which is how the family stops duplicating work.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4">
        <PrimaryButton onClick={handleTurnIntoVotes}>
          Turn 2 shortlists into votes
        </PrimaryButton>
      </div>
    </div>
  );
};

