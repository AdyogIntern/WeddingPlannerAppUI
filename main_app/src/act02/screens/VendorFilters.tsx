import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PrimaryButton, ScreenHeader, SerifTitle, ToggleSwitch } from '../components/SharedUI';

export const VendorFilters: React.FC = () => {
  const { navigate, goBack, showToast } = useApp();

  const [dateRange, setDateRange] = useState('14 Feb 2027');
  const [flexDays, setFlexDays] = useState(false);
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
    <div className="flex flex-col w-full space-y-6 pb-6">
      <div>
        {/* Top Header */}
        <ScreenHeader
          backText="Reset"
          onBack={handleReset}
          rightAction={
            <button
              type="button"
              onClick={handleApply}
              className="text-[13px] text-[#7A2234] font-semibold hover:opacity-75 cursor-pointer"
            >
              Apply
            </button>
          }
        />

        {/* Title */}
        <div className="mb-3">
          <SerifTitle>Filters</SerifTitle>
        </div>

        {/* Filter Sections */}
        <div className="space-y-4 text-[12.5px]">
          {/* Section 1: Available on */}
          <div className="border-b border-[#EAE1D2] pb-3">
            <h4 className="text-[11px] uppercase tracking-wider text-[#91877E] font-medium mb-2">
              Available on
            </h4>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDateRange('14 Feb 2027')}
                className="px-3 py-1.5 bg-[#7A2234] text-white font-medium rounded-xl text-[12px] shadow-2xs cursor-pointer"
              >
                14 Feb 2027
              </button>
              <button
                type="button"
                onClick={() => setFlexDays(!flexDays)}
                className={`px-3 py-1.5 rounded-xl text-[12px] font-medium transition cursor-pointer ${
                  flexDays
                    ? 'bg-[#7A2234] text-white shadow-2xs'
                    : 'bg-[#F2ECE1] border border-[#E8DFC0] text-[#2B2523] hover:bg-[#EAE1D2]'
                }`}
              >
                ± 3 days
              </button>
            </div>
          </div>

          {/* Section 2: Price per plate */}
          <div className="border-b border-[#EAE1D2] pb-3">
            <div className="flex justify-between items-center mb-1.5">
              <h4 className="text-[11px] uppercase tracking-wider text-[#91877E] font-medium">
                Price per plate
              </h4>
              <span className="text-[12.5px] font-bold text-[#2B2523]">
                ₹{priceMax.toLocaleString()} · ${Math.round(priceMax / 84)}
              </span>
            </div>
            <input
              type="range"
              min="1100"
              max="2500"
              step="50"
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="w-full accent-[#7A2234] cursor-pointer"
            />
            <div className="flex justify-between text-[10.5px] text-[#786E65] mt-1">
              <span>₹1,100 · $13</span>
              <span>₹2,500 · $30</span>
            </div>
          </div>

          {/* Section 3: Cuisine & community */}
          <div className="border-b border-[#EAE1D2] pb-3">
            <h4 className="text-[11px] uppercase tracking-wider text-[#91877E] font-medium mb-2">
              Cuisine & community
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Iyengar veg', 'Iyer veg', 'No onion garlic', 'Jain'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedCuisine(item)}
                  className={`px-3 py-1.5 rounded-xl text-[12px] font-medium transition cursor-pointer ${
                    selectedCuisine === item
                      ? 'bg-[#7A2234] text-white shadow-2xs'
                      : 'bg-[#F2ECE1] border border-[#E8DFC0] text-[#2B2523] hover:bg-[#EAE1D2]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Capacity */}
          <div className="border-b border-[#EAE1D2] pb-3">
            <h4 className="text-[11px] uppercase tracking-wider text-[#91877E] font-medium mb-2">
              Capacity
            </h4>
            <div className="flex gap-2">
              {['200+', '400+', '800+'].map((cap) => (
                <button
                  key={cap}
                  type="button"
                  onClick={() => setCapacity(cap)}
                  className={`px-3.5 py-1.5 rounded-xl text-[12px] font-medium transition cursor-pointer ${
                    capacity === cap
                      ? 'bg-[#7A2234] text-white shadow-2xs'
                      : 'bg-[#F2ECE1] border border-[#E8DFC0] text-[#2B2523] hover:bg-[#EAE1D2]'
                  }`}
                >
                  {cap}
                </button>
              ))}
            </div>
          </div>

          {/* Section 5: Trust Toggles */}
          <div className="border-b border-[#EAE1D2] pb-3 space-y-2.5">
            <h4 className="text-[11px] uppercase tracking-wider text-[#91877E] font-medium">
              Trust
            </h4>

            <div className="flex items-center justify-between">
              <span className="text-[12.5px] text-[#2B2523]">Works with NRI clients</span>
              <ToggleSwitch checked={worksWithNri} onChange={setWorksWithNri} />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[12.5px] text-[#2B2523]">Verified in person by us</span>
              <ToggleSwitch checked={verifiedInPerson} onChange={setVerifiedInPerson} />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[12.5px] text-[#2B2523]">Accepts escrow payments</span>
              <ToggleSwitch checked={acceptsEscrow} onChange={setAcceptsEscrow} />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[12.5px] text-[#2B2523]">Has done 5+ NRI weddings</span>
              <ToggleSwitch checked={fivePlusNri} onChange={setFivePlusNri} />
            </div>
          </div>

          {/* Section 6: Speaks */}
          <div className="pb-2">
            <h4 className="text-[11px] uppercase tracking-wider text-[#91877E] font-medium mb-2">
              Speaks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Tamil', 'English', 'Telugu', 'Hindi'].map((lang) => {
                const isSel = languages.includes(lang);
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => toggleLanguage(lang)}
                    className={`px-3 py-1.5 rounded-xl text-[12px] font-medium transition cursor-pointer ${
                      isSel
                        ? 'bg-[#7A2234] text-white shadow-2xs'
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

      {/* Sticky Bottom Action */}
      <div className="mt-4 pt-2 border-t border-[#E8DFC0]/50">
        <PrimaryButton onClick={handleApply}>
          Show 9 caterers
        </PrimaryButton>
      </div>
    </div>
  );
};

