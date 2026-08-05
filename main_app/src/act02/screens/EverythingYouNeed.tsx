import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, SerifTitle } from '../components/SharedUI';
import { Search } from 'lucide-react';

export const EverythingYouNeed: React.FC = () => {
  const { navigate, searchQuery, setSearchQuery, setSelectedCategory } = useApp();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    navigate('SearchResults');
  };

  const handleCategoryClick = (categoryName: string, defaultScreen: any = 'SearchResults') => {
    setSelectedCategory(categoryName);
    navigate(defaultScreen);
  };

  return (
    <div className="flex flex-col w-full space-y-6 pb-6">
      <div>
        {/* Title */}
        <div className="mb-4">
          <SerifTitle>Everything you'll need</SerifTitle>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="mb-5">
          <div className="w-full bg-white border border-[#E2D8C8] rounded-xl px-3.5 py-2 flex items-center gap-2 shadow-2xs focus-within:border-[#7A2234] transition-colors">
            <Search className="w-4 h-4 text-[#91877E] shrink-0" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search 412 vendors in Chennai"
              className="w-full text-[13px] text-[#2B2523] placeholder-[#786E65] outline-none bg-transparent"
            />
            <button
              type="submit"
              className="text-[12px] text-[#7A2234] font-medium px-2 py-0.5 rounded-md hover:bg-[#F8EDE9] cursor-pointer shrink-0"
            >
              Go
            </button>
          </div>
        </form>

        {/* Categories Stack */}
        <div className="space-y-4">
          {/* Space Section */}
          <div>
            <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#2B2523] mb-2">
              <span className="font-sans">Space</span>
              <span className="text-[#91877E] font-normal">· 62</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCategoryClick('Space', 'VenueProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] hover:border-[#7A2234] transition cursor-pointer"
              >
                Kalyana mandapam
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Space', 'VenueProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] hover:border-[#7A2234] transition cursor-pointer"
              >
                Hotel banquet
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Space', 'VenueProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] hover:border-[#7A2234] transition cursor-pointer"
              >
                Resort
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Space', 'VenueProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] hover:border-[#7A2234] transition cursor-pointer"
              >
                Beach
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Space', 'VenueProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] hover:border-[#7A2234] transition cursor-pointer"
              >
                Temple
              </button>
            </div>
          </div>

          {/* Food Section */}
          <div>
            <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#2B2523] mb-2">
              <span className="font-sans">Food</span>
              <span className="text-[#91877E] font-normal">· 74</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCategoryClick('Food', 'SearchResults')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#F8EDE9] hover:border-[#7A2234] hover:text-[#7A2234] active:bg-[#7A2234] active:text-white transition cursor-pointer"
              >
                Iyengar
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Food', 'SearchResults')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Chettinad
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Food', 'SearchResults')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Kerala sadya
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Food', 'SearchResults')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Jain
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Food', 'SearchResults')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Live counters
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Food', 'SearchResults')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Tiffin
              </button>
            </div>
          </div>

          {/* Ritual Section */}
          <div>
            <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#2B2523] mb-2">
              <span className="font-sans">Ritual</span>
              <span className="text-[#91877E] font-normal">· 48</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCategoryClick('Ritual', 'PurohitProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] hover:border-[#7A2234] transition cursor-pointer"
              >
                Purohit by sampradaya
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Ritual', 'PurohitProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Samagri kits
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Ritual', 'PurohitProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Nadaswaram–thavil
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Ritual', 'PurohitProfile')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Homam setup
              </button>
            </div>
          </div>

          {/* Visual Section */}
          <div>
            <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#2B2523] mb-2">
              <span className="font-sans">Visual</span>
              <span className="text-[#91877E] font-normal">· 55</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCategoryClick('Visual', 'CompareVendors')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] hover:border-[#7A2234] transition cursor-pointer"
              >
                Candid
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Visual', 'CompareVendors')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Traditional
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Visual', 'CompareVendors')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Drone
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Visual', 'CompareVendors')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Same-day edit
              </button>
              <button
                type="button"
                onClick={() => handleCategoryClick('Visual', 'CompareVendors')}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC0] rounded-xl text-[12.5px] text-[#2B2523] hover:bg-[#EAE1D2] transition cursor-pointer"
              >
                Live stream
              </button>
            </div>
          </div>

          {/* Category Counts Summary Grid */}
          <div className="grid grid-cols-2 gap-y-2.5 pt-2 text-[14px] text-[#2B2523] border-t border-[#E8DFC0]/70">
            <button
              type="button"
              onClick={() => handleCategoryClick('Decor', 'SavedVendors')}
              className="text-left cursor-pointer hover:text-[#7A2234] transition"
            >
              Decor <span className="text-[#91877E]">· 41</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('People', 'SavedVendors')}
              className="text-left cursor-pointer hover:text-[#7A2234] transition"
            >
              People <span className="text-[#91877E]">· 39</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('Attire', 'Attire')}
              className="text-left cursor-pointer hover:text-[#7A2234] transition"
            >
              Attire <span className="text-[#91877E]">· 33</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('Jewellery', 'Attire')}
              className="text-left cursor-pointer hover:text-[#7A2234] transition"
            >
              Jewellery <span className="text-[#91877E]">· 18</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('Guests', 'SearchResults')}
              className="text-left cursor-pointer hover:text-[#7A2234] transition"
            >
              Guests <span className="text-[#91877E]">· 22</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('Paper', 'SavedVendors')}
              className="text-left cursor-pointer hover:text-[#7A2234] transition"
            >
              Paper & gifts <span className="text-[#91877E]">· 26</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('Ops', 'SearchResults')}
              className="text-left cursor-pointer hover:text-[#7A2234] transition"
            >
              Ops <span className="text-[#91877E]">· 31</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('After', 'SearchResults')}
              className="text-left cursor-pointer hover:text-[#7A2234] transition"
            >
              After <span className="text-[#91877E]">· 9</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Explanatory Box */}
      <div className="mt-6">
        <CalloutBox>
          Browsing is optional. Everything here is already matched to your Blueprint — open a slot instead and we'll pre-filter it.
        </CalloutBox>
      </div>
    </div>
  );
};
