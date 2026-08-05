import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, ScreenHeader, SerifTitle, TextMuted } from '../components/SharedUI';
import { Check } from 'lucide-react';

export const Attire: React.FC = () => {
  const { navigate, goBack, showToast } = useApp();
  const [activeMode, setActiveMode] = useState<'Buy' | 'Rent'>('Buy');
  const [selectedProduct, setSelectedProduct] = useState<string>('Korvai, arakku red');

  const products = {
    Buy: [
      { id: '1', title: 'Korvai, arakku red', price: '₹1.42L · 9 yd', subtitle: 'Handwoven in Kanchipuram' },
      { id: '2', title: 'Traditional gold zari', price: '₹2.10L · 9 yd', subtitle: 'Pure zari certified' },
      { id: '3', title: "Groom's veshti set", price: '₹38,000', subtitle: 'Pure silk with angavastram' },
      { id: '4', title: 'Kalyana pattu saree', price: '₹95,000 · 9 yd', subtitle: 'Classic maroon border' },
    ],
    Rent: [
      { id: '1', title: 'Temple jewellery set', price: '₹22,000 / 3 days', subtitle: '22k gold plated silver' },
      { id: '2', title: 'Groom sherwani & dhoti', price: '₹18,000 / 3 days', subtitle: 'Custom size altered' },
      { id: '3', title: 'Bridal diamond vaddanam', price: '₹35,000 / 3 days', subtitle: 'Insured transit delivery' },
      { id: '4', title: 'Reception lehenga', price: '₹28,000 / 3 days', subtitle: 'Includes dry clean & drop' },
    ],
  };

  const handleSelectProduct = (title: string) => {
    setSelectedProduct(title);
    showToast(`Selected ${title}`);
  };

  const handleAddToBlueprint = () => {
    showToast(`Added ${selectedProduct} to your Blueprint!`);
    navigate('VendorSwap');
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <ScreenHeader
          onBack={goBack}
          rightAction={
            <button
              onClick={() => navigate('VendorFilters')}
              className="text-[12.5px] text-[#2B2523] font-medium hover:opacity-75 cursor-pointer"
            >
              Filter
            </button>
          }
        />

        {/* Title */}
        <div className="mb-3">
          <SerifTitle>Kanchipuram silk</SerifTitle>
          <TextMuted>Bridal · muhurtham · 14 Feb</TextMuted>
        </div>

        {/* Buy / Rent Switcher Bar */}
        <div className="flex bg-[#F2ECE1] p-1 rounded-xl mb-3 border border-[#E8DFC0]">
          <button
            onClick={() => setActiveMode('Buy')}
            className={`flex-1 py-1.5 text-[12.5px] font-medium rounded-lg transition cursor-pointer ${
              activeMode === 'Buy'
                ? 'bg-[#7A2234] text-white shadow-xs'
                : 'text-[#2B2523] hover:opacity-75'
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveMode('Rent')}
            className={`flex-1 py-1.5 text-[12.5px] font-medium rounded-lg transition cursor-pointer ${
              activeMode === 'Rent'
                ? 'bg-[#7A2234] text-white shadow-xs'
                : 'text-[#2B2523] hover:opacity-75'
            }`}
          >
            Rent
          </button>
        </div>

        {/* 2x2 Product Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          {products[activeMode].map((item) => {
            const isSelected = selectedProduct === item.title;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectProduct(item.title)}
                className={`p-2 bg-[#FAF7F0] border rounded-2xl shadow-2xs cursor-pointer transition relative ${
                  isSelected ? 'border-2 border-[#7A2234] bg-[#F8EDE9]/30' : 'border-[#E5DCCE] hover:border-[#7A2234]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-[#7A2234] rounded-full flex items-center justify-center text-white">
                    <Check className="w-3 h-3" />
                  </div>
                )}
                <div className="w-full aspect-4/3 bg-[#EAE1D2] rounded-xl border border-[#DFD5C4] mb-2 flex items-center justify-center font-bold text-[#786E65] text-xs">
                  {item.title.charAt(0)}
                </div>
                <h4 className="text-[12.5px] font-semibold text-[#2B2523] leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#7A2234] font-medium mt-0.5">{item.price}</p>
                <p className="text-[10px] text-[#786E65]">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Flying In Card */}
        <div className="p-3 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="text-[10px] uppercase tracking-wider text-[#91877E] font-medium mb-1">
            Because you are flying in
          </div>
          <p className="text-[12px] text-[#2B2523] leading-relaxed">
            Silk takes <strong className="font-bold">10 weeks</strong> to weave and one fitting on the ground. Order by 05 December and the fitting sits on day six of your trip — already in your plan.
          </p>
        </div>

        {/* Callout Box */}
        <CalloutBox className="mt-2">
          Attire and jewellery are 12% of a typical wedding and almost never in a planning app. It is also a category your vendors already cover.
        </CalloutBox>
      </div>

      {/* Sticky Bottom Action */}
      <div className="mt-4 pt-1">
        <PrimaryButton onClick={handleAddToBlueprint}>
          Add to the Blueprint
        </PrimaryButton>
      </div>
    </div>
  );
};
