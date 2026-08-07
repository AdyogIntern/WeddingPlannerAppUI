import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, SerifTitle, TextMuted } from '../components/SharedUI';

export const Attire: React.FC = () => {
  const { navigate, showToast } = useApp();
  const [activeMode, setActiveMode] = useState<'Buy' | 'Rent'>('Buy');

  const products = {
    Buy: [
      { id: '1', title: 'Korvai, arakku red', price: '₹1.42L · 9 yd', subtitle: 'Handwoven in Kanchipuram' },
      { id: '2', title: 'Traditional gold zari', price: '₹2.10L · 9 yd', subtitle: 'Pure zari certified' },
      { id: '3', title: "Groom's veshti set", price: '₹38,000', subtitle: 'Pure silk with angavastram' },
      { id: '4', title: 'Temple jewellery, rented', price: '₹22,000 / 3 days', subtitle: '22k gold plated silver' },
    ],
    Rent: [
      { id: '1', title: 'Temple jewellery set', price: '₹22,000 / 3 days', subtitle: '22k gold plated silver' },
      { id: '2', title: 'Groom sherwani & dhoti', price: '₹18,000 / 3 days', subtitle: 'Custom size altered' },
      { id: '3', title: 'Bridal diamond vaddanam', price: '₹35,000 / 3 days', subtitle: 'Insured transit delivery' },
      { id: '4', title: 'Reception lehenga', price: '₹28,000 / 3 days', subtitle: 'Includes dry clean & drop' },
    ],
  };

  const handleAddToBlueprint = () => {
    showToast(`Added to your Blueprint!`);
    navigate('VendorSwap');
  };

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Top Header matching 12.png */}
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
          <SerifTitle>Kanchipuram silk</SerifTitle>
          <TextMuted>Bridal · muhurtham · 14 Feb</TextMuted>
        </div>

        {/* Divider Line under Header */}
        <div className="border-b border-[#E0D7C6] mb-4"></div>

        {/* Buy / Rent Switcher Bar */}
        <div className="flex bg-[#F2ECE1] p-1 rounded-xl mb-4 border border-[#E8DFC0]">
          <button
            onClick={() => setActiveMode('Buy')}
            className={`flex-1 py-1.5 text-[12.5px] font-semibold rounded-lg transition cursor-pointer ${
              activeMode === 'Buy'
                ? 'bg-[#7A2234] text-white shadow-xs'
                : 'text-[#2B2523] hover:opacity-75'
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveMode('Rent')}
            className={`flex-1 py-1.5 text-[12.5px] font-semibold rounded-lg transition cursor-pointer ${
              activeMode === 'Rent'
                ? 'bg-[#7A2234] text-white shadow-xs'
                : 'text-[#2B2523] hover:opacity-75'
            }`}
          >
            Rent
          </button>
        </div>

        {/* 2x2 Product Grid with blank image thumbnails matching 12.png */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {products[activeMode].map((item) => {
            return (
              <div
                key={item.id}
                onClick={handleAddToBlueprint}
                className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl cursor-pointer hover:border-[#7A2234] transition relative"
              >
                {/* Blank light cream/beige image box */}
                <div className="w-full aspect-square bg-[#EAE1D2] rounded-xl border border-[#DFD5C4] mb-2.5"></div>
                <h4 className="text-[13px] font-bold text-[#2B2523] leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11.5px] text-[#7A2234] font-semibold mt-0.5">{item.price}</p>
                <p className="text-[10px] text-[#786E65]">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Flying In Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-4 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-semibold mb-1.5">
            BECAUSE YOU ARE FLYING IN
          </div>
          <p className="text-[12.5px] text-[#2B2523] leading-relaxed">
            Silk takes <strong className="font-bold">10 weeks</strong> to weave and one fitting on the ground. Order by 05 December and the fitting sits on day six of your trip — already in your plan.
          </p>
        </div>

        {/* Callout Box */}
        <CalloutBox className="my-4">
          Attire and jewellery are 12% of a typical wedding and almost never in a planning app. It is also a category your vendors already cover.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4">
        <PrimaryButton onClick={handleAddToBlueprint}>
          Add to the Blueprint
        </PrimaryButton>
      </div>
    </div>
  );
};

