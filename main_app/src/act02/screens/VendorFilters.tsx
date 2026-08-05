import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PrimaryButton, ToggleSwitch } from '../components/SharedUI';

export const VendorFilters: React.FC = () => {
  const { navigate, showToast } = useApp();

  const [dateRange, setDateRange] = useState('14 Feb 2027');
  const [flexDays, setFlexDays] = useState(false);
  const [priceMin, setPriceMin] = useState(1100);
  const [priceMax, setPriceMax] = useState(1600);
  const [selectedCuisine, setSelectedCuisine] = useState('Iyengar veg');
  const [capacity, setCapacity] = useState('400+');

  // Trust Toggles
  const [worksWithNri, setWorksWithNri] = useState(true);
  const [verifiedInPerson, setVerifiedInPerson] = useState(true);
  const [acceptsEscrow, setAcceptsEscrow] = useState(false);
  const [fivePlusNri, setFivePlusNri] = useState(false);

  // Languages
  const [languages, setLanguages] = useState<string[]>(['Tamil', 'English']);

  const toggleLanguage = (lang: string) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter((l) => l !== lang));
    } else {
      setLanguages([...languages, lang]);
    }
  };

  const handleReset = () => {
    setDateRange('14 Feb 2027');
    setFlexDays(false);
    setPriceMin(1100);
    setPriceMax(1600);
    setSelectedCuisine('Iyengar veg');
    setCapacity('400+');
    setWorksWithNri(true);
    setVerifiedInPerson(true);
    setAcceptsEscrow(false);
    setFivePlusNri(false);
    setLanguages(['Tamil', 'English']);
    showToast('Filters reset to default');
  };

  const handleApply = () => {
    showToast('Applied filters!');
    navigate('SearchResults');
  };

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Top Header Row matching 2.png EXACTLY */}
        <div className="flex items-center justify-between py-2 text-[14px]">
          <button
            type="button"
            onClick={handleReset}
            className="text-[#786E65] hover:opacity-80 font-medium cursor-pointer"
          >
            Reset
          </button>
          <span className="font-semibold text-[#2B2523]">Filters</span>
          <button
            type="button"
            onClick={handleApply}
            className="text-[#7A2234] font-bold hover:opacity-80 cursor-pointer"
          >
            Apply
          </button>
        </div>

        {/* Divider line under header */}
        <div className="border-b border-[#E0D7C6] mb-5"></div>

        {/* Filter Sections Stack */}
        <div className="space-y-5 text-[13px]">
          {/* Section 1: Available on */}
          <div>
            <h4 className="text-[13px] text-[#2B2523] font-semibold mb-2.5">
              Available on
            </h4>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDateRange('14 Feb 2027')}
                className="px-3.5 py-1.5 bg-[#7A2234] text-white font-medium rounded-xl text-[12.5px] cursor-pointer"
              >
                14 Feb 2027
              </button>
              <button
                type="button"
                onClick={() => setFlexDays(!flexDays)}
                className={`px-3.5 py-1.5 rounded-xl text-[12.5px] font-medium transition cursor-pointer ${
                  flexDays
                    ? 'bg-[#7A2234] text-white'
                    : 'bg-[#F2ECE1] border border-[#E8DFC0] text-[#2B2523] hover:bg-[#EAE1D2]'
                }`}
              >
                ± 3 days
              </button>
            </div>
          </div>

          {/* Section 2: Price per plate */}
          <div>
            <h4 className="text-[13px] text-[#2B2523] font-semibold mb-3">
              Price per plate
            </h4>
            {/* Dual Thumb Range Slider visual */}
            <div className="relative w-full py-2">
              <div className="h-1 bg-[#E8DFC0] rounded-full w-full relative">
                <div className="absolute left-[10%] right-[20%] h-full bg-[#7A2234] rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-[10%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#7A2234] rounded-full cursor-pointer shadow-xs"></div>
              <div className="absolute top-1/2 left-[80%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#7A2234] rounded-full cursor-pointer shadow-xs"></div>
            </div>
            <div className="flex justify-between text-[11.5px] text-[#786E65] mt-1.5">
              <span>₹1,100 · $13</span>
              <span>₹1,600 · $19</span>
            </div>
          </div>

          {/* Section 3: Cuisine & community */}
          <div>
            <h4 className="text-[13px] text-[#2B2523] font-semibold mb-2.5">
              Cuisine & community
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Iyengar veg', 'Iyer veg', 'No onion garlic', 'Jain'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedCuisine(item)}
                  className={`px-3.5 py-1.5 rounded-xl text-[12.5px] font-medium transition cursor-pointer ${
                    selectedCuisine === item
                      ? 'bg-[#7A2234] text-white'
                      : 'bg-[#F2ECE1] border border-[#E8DFC0] text-[#2B2523] hover:bg-[#EAE1D2]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Capacity */}
          <div>
            <h4 className="text-[13px] text-[#2B2523] font-semibold mb-2.5">
              Capacity
            </h4>
            <div className="flex gap-2">
              {['200+', '400+', '800+'].map((cap) => (
                <button
                  key={cap}
                  type="button"
                  onClick={() => setCapacity(cap)}
                  className={`px-4 py-1.5 rounded-xl text-[12.5px] font-medium transition cursor-pointer ${
                    capacity === cap
                      ? 'bg-[#7A2234] text-white'
                      : 'bg-[#F2ECE1] border border-[#E8DFC0] text-[#2B2523] hover:bg-[#EAE1D2]'
                  }`}
                >
                  {cap}
                </button>
              ))}
            </div>
          </div>

          {/* Section 5: Trust Toggles */}
          <div className="space-y-3.5 pt-1">
            <h4 className="text-[13px] text-[#2B2523] font-semibold mb-1">
              Trust
            </h4>

            <div className="flex items-center justify-between">
              <span className="text-[13px] text-[#2B2523]">Works with NRI clients</span>
              <ToggleSwitch checked={worksWithNri} onChange={setWorksWithNri} />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[13px] text-[#2B2523]">Verified in person by us</span>
              <ToggleSwitch checked={verifiedInPerson} onChange={setVerifiedInPerson} />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[13px] text-[#2B2523] opacity-60">Accepts escrow payments</span>
              <ToggleSwitch checked={acceptsEscrow} onChange={setAcceptsEscrow} />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[13px] text-[#2B2523] opacity-60">Has done 5+ NRI weddings</span>
              <ToggleSwitch checked={fivePlusNri} onChange={setFivePlusNri} />
            </div>
          </div>

          {/* Section 6: Speaks */}
          <div className="pt-1">
            <h4 className="text-[13px] text-[#2B2523] font-semibold mb-2.5">
              Speaks
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Tamil', 'English', 'Telugu', 'Hindi'].map((lang) => {
                const isSel = languages.includes(lang);
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => toggleLanguage(lang)}
                    className={`px-3.5 py-1.5 rounded-xl text-[12.5px] font-medium transition cursor-pointer ${
                      isSel
                        ? 'bg-[#7A2234] text-white'
                        : 'bg-[#F2ECE1] border border-[#E8DFC0] text-[#2B2523] hover:bg-[#EAE1D2]'
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="mt-8">
        <PrimaryButton onClick={handleApply}>
          Show 9 caterers
        </PrimaryButton>
      </div>
    </div>
  );
};
