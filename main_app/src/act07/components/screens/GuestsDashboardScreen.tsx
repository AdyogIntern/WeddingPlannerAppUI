import React, { useState } from 'react';
import { Users, Plane, Hotel, AlertCircle, Video, FileText, Check, Utensils, Plus, Filter, Download } from 'lucide-react';

interface Props {
  onGenerateVisaLetters?: () => void;
  onAddLiveStreaming?: () => void;
  onOpenRsvp?: () => void;
  onNavigateNext?: () => void;
}

interface DietaryCategory {
  id: string;
  name: string;
  count: number;
  details: string;
  selected?: boolean;
}

export const GuestsDashboardScreen: React.FC<Props> = ({
  onGenerateVisaLetters,
  onAddLiveStreaming,
  onOpenRsvp,
  onNavigateNext,
}) => {
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [selectedDietaryCategory, setSelectedDietaryCategory] = useState<string | null>(null);

  const [dietaryCategories, setDietaryCategories] = useState<DietaryCategory[]>([
    { id: 'jain', name: 'Jain (Strict No Root Veg)', count: 8, details: '8 Guests · Special Kitchen Section (Hall A)' },
    { id: 'sattvic', name: 'No Onion / No Garlic', count: 46, details: '46 Guests · Pure Sattvic Cooking Required' },
    { id: 'diabetic', name: 'Diabetic / Low Glycemic', count: 22, details: '22 Guests · Unpolished Rice & Low-Sugar Sweets' },
    { id: 'nut', name: 'Nut Allergy (Severe)', count: 3, details: '3 Guests · Zero Cashew / Peanut cross-contamination' },
    { id: 'infant', name: 'Infants & Toddlers', count: 11, details: '11 Guests · Soft Kichadi & Warm Milk Station' },
    { id: 'gluten', name: 'Gluten-Free / Celiac', count: 5, details: '5 Guests · Ragi / Millet based Tiffin' },
  ]);

  const [newDietaryName, setNewDietaryName] = useState('');
  const [newDietaryCount, setNewDietaryCount] = useState('');
  const [showAddDietaryModal, setShowAddDietaryModal] = useState(false);

  const handleVisaClick = () => {
    setToastMsg("Generating 6 pending visa letters for London & Dubai guests...");
    setTimeout(() => setToastMsg(null), 3000);
    if (onGenerateVisaLetters) onGenerateVisaLetters();
  };

  const handleLiveStreamClick = () => {
    setToastMsg("Live stream link generated & sent to 42 non-travelling guests!");
    setTimeout(() => setToastMsg(null), 3000);
    if (onAddLiveStreaming) onAddLiveStreaming();
  };

  const handleAddDietaryCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDietaryName || !newDietaryCount) return;
    const newCat: DietaryCategory = {
      id: Date.now().toString(),
      name: newDietaryName,
      count: parseInt(newDietaryCount, 10),
      details: `${newDietaryCount} Guests · Custom User Preference Collected`
    };
    setDietaryCategories([...dietaryCategories, newCat]);
    setNewDietaryName('');
    setNewDietaryCount('');
    setShowAddDietaryModal(false);
    setToastMsg(`Added ${newCat.name} (${newCat.count} guests) to Catering Headcount!`);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleExportCateringSheet = () => {
    setToastMsg("Exported Dietary Care & Catering Headcount Matrix (PDF for Kitchen Lead)");
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Header */}
      <div className="px-5 pt-6 pb-3">
        <h1 className="font-serif-title text-[32px] leading-tight font-medium text-[#1F1A17] tracking-tight">
          620 guests
        </h1>
        <div className="flex items-center gap-3 text-[12.5px] font-medium text-[#5C5248] mt-1">
          <span><strong className="font-bold text-[#1F1A17]">418</strong> RSVP'd</span>
          <span>·</span>
          <span><strong className="font-bold text-[#1F1A17]">62</strong> flying in</span>
          <span>·</span>
          <span><strong className="font-bold text-[#1F1A17]">42</strong> can't travel</span>
        </div>
      </div>

      <div className="px-5 space-y-4 flex-1">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5]">
            <p className="font-mono-tag text-[9px] uppercase tracking-wider text-[#8A8075] font-semibold">
              VISA LETTERS
            </p>
            <p className="text-[22px] font-bold text-[#1F1A17] mt-0.5">
              18
            </p>
            <p className="text-[11px] font-medium text-[#B86E00] mt-0.5">
              6 not sent
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E0D5]">
            <p className="font-mono-tag text-[9px] uppercase tracking-wider text-[#8A8075] font-semibold">
              HOTEL BLOCK
            </p>
            <p className="text-[22px] font-bold text-[#1F1A17] mt-0.5">
              34/50
            </p>
            <p className="text-[11px] text-[#756D65] mt-0.5">
              rooms taken
            </p>
          </div>
        </div>

        {/* Section: Arrivals · next window */}
        <div className="space-y-2">
          <h3 className="text-[15px] font-bold text-[#1F1A17]">
            Arrivals · next window
          </h3>

          <div className="space-y-2 text-[12.5px]">
            {/* Arrival 1 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <div className="text-center font-mono-tag w-12 shrink-0">
                <p className="font-bold text-[#1F1A17]">11 Feb</p>
                <p className="text-[10px] text-[#756D65]">02:40</p>
              </div>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  EK 544 from Dubai · 6 guests
                </h4>
                <p className="text-[11.5px] text-[#756D65] mt-0.5">
                  Coach booked · Sundar driving
                </p>
              </div>
            </div>

            {/* Arrival 2 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <div className="text-center font-mono-tag w-12 shrink-0">
                <p className="font-bold text-[#1F1A17]">11 Feb</p>
                <p className="text-[10px] text-[#756D65]">05:15</p>
              </div>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  SQ 528 from Singapore · 4 guests
                </h4>
                <p className="text-[11.5px] text-[#B86E00] font-medium mt-0.5">
                  No pickup assigned
                </p>
              </div>
            </div>

            {/* Arrival 3 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <div className="text-center font-mono-tag w-12 shrink-0">
                <p className="font-bold text-[#1F1A17]">12 Feb</p>
                <p className="text-[10px] text-[#756D65]">23:55</p>
              </div>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  BA 035 from London · 9 guests
                </h4>
                <p className="text-[11.5px] text-[#756D65] mt-0.5">
                  Two need wheelchair assistance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Interactive Dietary & Care Collection */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-[#7A2232]" />
              <h3 className="text-[15px] font-bold text-[#1F1A17]">
                Dietary & Care Collection
              </h3>
            </div>
            <button
              onClick={() => setShowAddDietaryModal(true)}
              className="text-[11px] font-bold text-[#7A2232] bg-[#FAF0EC] px-2.5 py-1 rounded-lg hover:bg-[#7A2232] hover:text-white transition-all flex items-center gap-1"
            >
              <Plus className="w-3 h-3" />
              Add Preference
            </button>
          </div>

          {/* Interactive Tag Pills */}
          <div className="flex flex-wrap gap-2">
            {dietaryCategories.map((cat) => {
              const isSelected = selectedDietaryCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedDietaryCategory(isSelected ? null : cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-[12px] font-medium transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#7A2232] text-white font-bold shadow-xs'
                      : 'bg-white border border-[#E8E0D5] text-[#3D352E] hover:border-[#7A2232]'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#FAF0EC] text-[#7A2232]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Category Detail Card */}
          {selectedDietaryCategory && (
            <div className="p-3.5 bg-white border border-[#7A2232]/30 rounded-2xl space-y-2 animate-in fade-in duration-200">
              {(() => {
                const cat = dietaryCategories.find(c => c.id === selectedDietaryCategory);
                if (!cat) return null;
                return (
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-2">
                      <span className="font-bold text-[13px] text-[#7A2232]">{cat.name}</span>
                      <span className="text-[11px] font-bold text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded">
                        {cat.count} Guests
                      </span>
                    </div>
                    <p className="text-[12px] text-[#5C5248] mt-2">
                      {cat.details}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-[11px]">
                      <span className="text-[#857B70]">Directly linked to Iyer Catering Kitchen</span>
                      <button
                        onClick={handleExportCateringSheet}
                        className="font-bold text-[#7A2232] hover:underline flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        Kitchen Order Sheet
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Maroon Callout Card: 42 guests can't make the journey */}
        <div className="bg-[#7A2232] text-white rounded-2xl p-4.5 space-y-3">
          <h4 className="font-bold text-[15px] leading-snug">
            42 guests can't make the journey
          </h4>
          <p className="text-[12px] leading-relaxed text-[#F3E2E5]">
            Set up the live stream and send them a private link with the muhurtham timings in their timezone.
          </p>
          <button 
            onClick={handleLiveStreamClick}
            className="w-full py-2.5 px-3 bg-[#FAF7F2] text-[#7A2232] text-[13px] font-bold rounded-xl hover:bg-white transition-all shadow-xs"
          >
            Add live streaming
          </button>
        </div>

        {toastMsg && (
          <div className="p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Footer Links & Auto Flow Action */}
        <div className="flex flex-col items-center gap-3 pt-2 pb-4">
          {onNavigateNext && (
            <button
              onClick={onNavigateNext}
              className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[14px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Proceed to Step 5: Final Keepsake & Result</span>
              <span>→</span>
            </button>
          )}

          <button 
            onClick={handleVisaClick}
            className="text-[12.5px] font-bold text-[#7A2232] underline hover:text-[#5A1924]"
          >
            Generate 6 pending visa invitation letters →
          </button>

          {onOpenRsvp && (
            <button 
              onClick={onOpenRsvp}
              className="text-[12px] font-medium text-[#5C5248] underline hover:text-[#1F1A17]"
            >
              Preview Guest RSVP Form & Function Checkboxes →
            </button>
          )}
        </div>
      </div>

      {/* Add Dietary Preference Modal */}
      {showAddDietaryModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] w-full max-w-sm rounded-2xl p-5 border border-[#E8E0D5] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-2">
              <h3 className="font-serif-title text-[18px] font-bold text-[#1F1A17]">
                Add Dietary Requirement
              </h3>
              <button 
                onClick={() => setShowAddDietaryModal(false)}
                className="text-xs font-bold text-[#7A2232]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddDietaryCategory} className="space-y-3 text-[12.5px]">
              <div>
                <label className="text-[11px] font-mono-tag uppercase text-[#7A2232] font-bold block mb-1">
                  DIETARY NAME / RESTRICTION
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pure Vegan / Lactose Intolerant"
                  value={newDietaryName}
                  onChange={(e) => setNewDietaryName(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#E8E0D5] rounded-xl focus:outline-none focus:border-[#7A2232]"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-mono-tag uppercase text-[#7A2232] font-bold block mb-1">
                  ESTIMATED GUEST COUNT
                </label>
                <input
                  type="number"
                  placeholder="e.g. 15"
                  value={newDietaryCount}
                  onChange={(e) => setNewDietaryCount(e.target.value)}
                  className="w-full p-2.5 bg-white border border-[#E8E0D5] rounded-xl focus:outline-none focus:border-[#7A2232]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#7A2232] text-white font-bold rounded-xl hover:bg-[#5A1924] transition-all"
              >
                Save & Collect in Kitchen Headcount →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

