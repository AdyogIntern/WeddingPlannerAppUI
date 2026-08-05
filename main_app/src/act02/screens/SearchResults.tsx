import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, ScreenHeader, SerifTitle } from '../components/SharedUI';

export const SearchResults: React.FC = () => {
  const {
    navigate,
    goBack,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    vendors,
    setSelectedVendorId,
    selectedForCompare,
    sortOption,
    setSortOption,
  } = useApp();

  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Filter vendors by search query and category
  const filteredVendors = vendors.filter((v) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      v.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (v.subcategory && v.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort vendors based on sortOption
  const sortedVendors = [...filteredVendors].sort((a, b) => {
    if (sortOption === 'Price: Low to High') {
      return (a.totalPrice || 0) - (b.totalPrice || 0);
    }
    if (sortOption === 'Price: High to Low') {
      return (b.totalPrice || 0) - (a.totalPrice || 0);
    }
    if (sortOption === 'Rating: High to Low') {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0; // Recommended default
  });

  const handleVendorClick = (vendorId: string, category: string) => {
    setSelectedVendorId(vendorId);
    if (category === 'Space') {
      navigate('VenueProfile');
    } else if (category === 'Ritual') {
      navigate('PurohitProfile');
    } else if (category === 'Attire') {
      navigate('Attire');
    } else {
      navigate('VendorProfile');
    }
  };

  const getSubDetail = (v: typeof vendors[0]) => {
    if (v.id === 'caterer-1') return 'Verified · 31 NRI weddings';
    if (v.id === 'caterer-2') return 'Under your band';
    if (v.id === 'caterer-3') return '3 family votes';
    if (v.id === 'caterer-4') return 'Live counters available';
    return `${v.subcategory || 'Verified'} · ${v.reviewsCount ? `${v.reviewsCount} reviews` : 'Verified team'}`;
  };

  const getStatusTag = (v: typeof vendors[0]) => {
    if (v.id === 'caterer-3') return { label: '1 held', color: 'text-[#A16207]' };
    return { label: 'Free', color: 'text-[#15803D]' };
  };

  return (
    <div className="flex flex-col w-full space-y-6 pb-6 font-sans">
      <div>
        {/* Header */}
        <ScreenHeader
          onBack={goBack}
          rightAction={
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="text-[13px] text-[#2B2523] font-medium hover:opacity-75 cursor-pointer flex items-center gap-1"
              >
                Sort
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 top-6 z-30 bg-[#FAF7F0] border border-[#D5CBB9] rounded-xl shadow-lg py-1 w-44 text-xs text-[#2B2523]">
                  {['Recommended', 'Price: Low to High', 'Price: High to Low', 'Rating: High to Low'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSortOption(opt);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 hover:bg-[#EAE1D2] transition ${
                        sortOption === opt ? 'font-bold text-[#7A2234]' : ''
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          }
        />

        {/* Title & Subtitle */}
        <div className="mb-4">
          <SerifTitle className="text-[26px] font-bold text-[#2B2523]">
            9 caterers
          </SerifTitle>
          <p className="text-[12.5px] text-[#786E65] mt-1">
            Muhurtham · 420 · Iyengar veg · 14 Feb
          </p>
        </div>

        {/* Search Query Pill if active */}
        {searchQuery && (
          <div className="mb-3 flex items-center justify-between bg-[#F2ECE1] px-3 py-1.5 rounded-xl border border-[#E8DFC0] text-xs">
            <span className="text-[#2B2523] truncate">Searching for "{searchQuery}"</span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#7A2234] font-medium hover:underline cursor-pointer ml-2"
            >
              Clear
            </button>
          </div>
        )}

        {/* Vendors List Cards - Exact Screenshot Layout */}
        <div className="space-y-3 mb-3">
          {sortedVendors.length === 0 ? (
            <div className="p-6 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl text-center text-[#786E65] text-xs">
              No vendors match your search. Try resetting filters or search query.
            </div>
          ) : (
            sortedVendors.map((vendor) => {
              const status = getStatusTag(vendor);
              const subDetail = getSubDetail(vendor);

              return (
                <div
                  key={vendor.id}
                  onClick={() => handleVendorClick(vendor.id, vendor.category)}
                  className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl hover:border-[#7A2234] transition-all shadow-2xs cursor-pointer"
                >
                  <div className="flex gap-3">
                    {/* Thumbnail Box */}
                    <div className="w-[72px] h-[72px] bg-[#EAE1D2] rounded-xl shrink-0 border border-[#DFD5C4] flex items-center justify-center font-bold text-[#91877E] text-xs">
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      {/* Name & Status Tag */}
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h3 className="text-[14px] font-bold text-[#2B2523] truncate leading-snug">
                            {vendor.name}
                          </h3>
                          <span className={`text-[12px] font-medium shrink-0 ${status.color}`}>
                            {status.label}
                          </span>
                        </div>
                        <p className="text-[12px] text-[#786E65] mt-0.5">
                          {subDetail}
                        </p>
                      </div>

                      {/* Price Row */}
                      <div className="flex items-baseline justify-between mt-2">
                        <span className="text-[13.5px] font-bold text-[#2B2523]">
                          {vendor.pricePerPlate ? (
                            <>
                              ₹{vendor.pricePerPlate.toLocaleString()}<span className="text-[12px] font-normal text-[#786E65]">/plate</span>
                            </>
                          ) : (
                            vendor.totalPriceFormatted
                          )}
                        </span>
                        <span className="text-[12px] text-[#786E65]">
                          {vendor.totalPriceFormatted}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* 5 more line */}
        <div className="text-center text-[12px] text-[#8C7A6B] font-medium mb-3">
          5 more · none over ₹1,600
        </div>

        {/* Callout Box */}
        <CalloutBox>
          Every card carries the total for <em className="italic">your</em> guest count, in your currency. Nobody has to do arithmetic to compare two caterers.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="flex gap-3 mt-4 pt-1">
        <button
          onClick={() => navigate('VendorFilters')}
          className="flex-1 py-3 bg-white border border-[#E0D7C6] text-[#2B2523] font-semibold text-[13.5px] rounded-2xl hover:bg-[#FAF7F0] transition cursor-pointer shadow-2xs text-center"
        >
          Filters
        </button>
        <button
          onClick={() => navigate('CompareVendors')}
          className="flex-1 py-3 bg-[#7A2234] text-white font-semibold text-[13.5px] rounded-2xl hover:bg-[#681C2B] transition cursor-pointer shadow-2xs text-center"
        >
          Compare {selectedForCompare.length > 0 ? selectedForCompare.length : 3}
        </button>
      </div>
    </div>
  );
};

