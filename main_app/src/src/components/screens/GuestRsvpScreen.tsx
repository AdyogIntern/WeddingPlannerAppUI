import React, { useState } from 'react';
import { Check, Send, Utensils, HeartHandshake, CheckSquare, Plus } from 'lucide-react';

interface Props {
  onNavigateNext?: () => void;
}

export const GuestRsvpScreen: React.FC<Props> = ({ onNavigateNext }) => {
  const [attending, setAttending] = useState<'Yes' | 'No' | 'Maybe'>('Yes');
  const [functions, setFunctions] = useState({
    sangeet: true,
    muhurtham: true,
    reception: false,
  });

  // Interactive Dietary Care Selection
  const [dietaryCare, setDietaryCare] = useState<string[]>(['No onion garlic']);
  const [customDietary, setCustomDietary] = useState('');

  // Interactive Special Ops & Accessibility Selection
  const [opsCare, setOpsCare] = useState<string[]>([
    'Need a visa invitation letter',
    'Room in hotel block (2 nights)'
  ]);

  const [submitted, setSubmitted] = useState(false);

  const availableDietaryOptions = [
    { id: 'No onion garlic', label: 'No Onion / No Garlic (Pure Sattvic)', icon: '🥗' },
    { id: 'Jain', label: 'Strict Jain Food', icon: '🍃' },
    { id: 'Diabetic', label: 'Diabetic / Low-Sugar Meal', icon: '🩺' },
    { id: 'Nut allergy', label: 'Severe Nut Allergy', icon: '🥜' },
    { id: 'Infant / Kids', label: 'Infant / Kids Meal', icon: '🍼' },
    { id: 'Gluten free', label: 'Gluten-Free / Celiac', icon: '🌾' },
  ];

  const availableOpsOptions = [
    { id: 'Need a visa invitation letter', label: 'Need Visa Invitation Letter (UK/US/UAE)', icon: '📜' },
    { id: 'Room in hotel block (2 nights)', label: 'Hotel Room Block (2 Nights)', icon: '🏨' },
    { id: 'Wheelchair assistance', label: 'Wheelchair / Elder Mobility Care', icon: '♿' },
    { id: 'Airport pickup coach', label: 'Airport / Station Pickup Coach', icon: '🚌' },
  ];

  const toggleDietary = (id: string) => {
    if (dietaryCare.includes(id)) {
      setDietaryCare(dietaryCare.filter((item) => item !== id));
    } else {
      setDietaryCare([...dietaryCare, id]);
    }
  };

  const toggleOps = (id: string) => {
    if (opsCare.includes(id)) {
      setOpsCare(opsCare.filter((item) => item !== id));
    } else {
      setOpsCare([...opsCare, id]);
    }
  };

  const handleAddCustomDietary = (e: React.FormEvent) => {
    e.preventDefault();
    if (customDietary.trim() && !dietaryCare.includes(customDietary.trim())) {
      setDietaryCare([...dietaryCare, customDietary.trim()]);
      setCustomDietary('');
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      <div className="p-5 space-y-3.5 flex-1 pt-4">
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-2">
          <span className="text-[10px] font-mono-tag uppercase tracking-wider text-[#7A2232] font-bold">
            GUEST RSVP & DIETARY CARE SELECTION
          </span>
          <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded">
            Live Collection Mode
          </span>
        </div>

        {/* Couple Image Slot */}
        <div className="bg-[#ECE4D9] h-28 rounded-2xl flex items-center justify-center border border-[#E0D6C8]">
          <span className="font-mono-tag text-[10.5px] text-[#857B70] uppercase font-medium">
            IMAGE SLOT · PRIYA & ARJUN
          </span>
        </div>

        {/* Header Text */}
        <div className="text-center py-0.5">
          <h1 className="font-serif-title text-[26px] font-bold text-[#1F1A17]">
            Wedding RSVP & Preferences
          </h1>
          <p className="text-[12px] text-[#756D65] mt-0.5">
            12 – 14 February 2027 · Mayor Ramanathan Hall, Chennai
          </p>
        </div>

        {/* Card 1: WILL YOU JOIN US? */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-3">
          <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#8A8075] font-semibold">
            1. WILL YOU JOIN US?
          </p>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setAttending('Yes')}
              className={`py-2.5 px-2 text-[13px] font-semibold rounded-xl border transition-all ${
                attending === 'Yes'
                  ? 'bg-[#7A2232] text-white border-[#7A2232] shadow-xs'
                  : 'bg-white text-[#4A423A] border-[#E8E0D5]'
              }`}
            >
              Yes
            </button>

            <button
              onClick={() => setAttending('No')}
              className={`py-2.5 px-2 text-[13px] font-semibold rounded-xl border transition-all ${
                attending === 'No'
                  ? 'bg-[#7A2232] text-white border-[#7A2232] shadow-xs'
                  : 'bg-white text-[#4A423A] border-[#E8E0D5]'
              }`}
            >
              No
            </button>

            <button
              onClick={() => setAttending('Maybe')}
              className={`py-2.5 px-2 text-[13px] font-semibold rounded-xl border transition-all ${
                attending === 'Maybe'
                  ? 'bg-[#7A2232] text-white border-[#7A2232] shadow-xs'
                  : 'bg-white text-[#4A423A] border-[#E8E0D5]'
              }`}
            >
              Maybe
            </button>
          </div>
        </div>

        {/* Card 2: WHICH FUNCTIONS */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-3">
          <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#8A8075] font-semibold">
            2. SELECT FUNCTIONS ATTENDING
          </p>

          <div className="space-y-2.5 text-[13px] text-[#3D352E]">
            <div 
              onClick={() => setFunctions({ ...functions, sangeet: !functions.sangeet })}
              className="flex items-center justify-between cursor-pointer py-1"
            >
              <span>Mehendi & Sangeet · Sat 6 pm</span>
              <span className={`text-[14px] font-bold ${functions.sangeet ? 'text-[#7A2232]' : 'text-[#A89F91]'}`}>
                {functions.sangeet ? '✓' : '—'}
              </span>
            </div>

            <div 
              onClick={() => setFunctions({ ...functions, muhurtham: !functions.muhurtham })}
              className="flex items-center justify-between cursor-pointer py-1 border-t border-[#F0EAE1] pt-2"
            >
              <span>Muhurtham · Sun 6:34 am</span>
              <span className={`text-[14px] font-bold ${functions.muhurtham ? 'text-[#7A2232]' : 'text-[#A89F91]'}`}>
                {functions.muhurtham ? '✓' : '—'}
              </span>
            </div>

            <div 
              onClick={() => setFunctions({ ...functions, reception: !functions.reception })}
              className="flex items-center justify-between cursor-pointer py-1 border-t border-[#F0EAE1] pt-2"
            >
              <span>Reception · Sun 7 pm</span>
              <span className={`text-[14px] font-bold ${functions.reception ? 'text-[#7A2232]' : 'text-[#A89F91]'}`}>
                {functions.reception ? '✓' : '—'}
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: DIETARY CARE SELECTION (INTERACTIVE USER CHOICE) */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-[#7A2232]" />
              <p className="font-mono-tag text-[10px] uppercase tracking-wider text-[#7A2232] font-bold">
                3. SELECT DIETARY CARE & RESTRICTIONS
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#7A2232] bg-[#FAF0EC] px-2 py-0.5 rounded">
              {dietaryCare.length} Selected
            </span>
          </div>

          <p className="text-[11.5px] text-[#756D65]">
            Select all dietary requirements for your party. These choices feed directly into the catering kitchen headcount.
          </p>

          <div className="grid grid-cols-1 gap-2">
            {availableDietaryOptions.map((opt) => {
              const isSelected = dietaryCare.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleDietary(opt.id)}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all text-[12.5px] ${
                    isSelected
                      ? 'bg-[#FAF0EC] border-[#7A2232] text-[#7A2232] font-bold shadow-2xs'
                      : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#4A423A] hover:border-[#C2B7A8]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{opt.icon}</span>
                    <span>{opt.label}</span>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                    isSelected ? 'bg-[#7A2232] text-white' : 'border border-[#C2B7A8] bg-white'
                  }`}>
                    {isSelected && '✓'}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Custom Dietary Note */}
          <form onSubmit={handleAddCustomDietary} className="flex gap-2 pt-1">
            <input
              type="text"
              placeholder="Other dietary requirement (e.g. Low sodium)"
              value={customDietary}
              onChange={(e) => setCustomDietary(e.target.value)}
              className="flex-1 p-2 bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl text-[12px] focus:outline-none focus:border-[#7A2232]"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-[#ECE4D9] text-[#7A2232] font-bold rounded-xl text-[12px] hover:bg-[#7A2232] hover:text-white transition-all flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              Add
            </button>
          </form>
        </div>

        {/* Card 4: SPECIAL OPS & ACCESSIBILITY SELECTION */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E0D5] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-[#7A2232]" />
              <p className="font-mono-tag text-[10px] uppercase tracking-wider text-[#7A2232] font-bold">
                4. SPECIAL OPS & CARE ASSISTANCE
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#7A2232] bg-[#FAF0EC] px-2 py-0.5 rounded">
              {opsCare.length} Selected
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {availableOpsOptions.map((opt) => {
              const isSelected = opsCare.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOps(opt.id)}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all text-[12.5px] ${
                    isSelected
                      ? 'bg-[#FAF0EC] border-[#7A2232] text-[#7A2232] font-bold shadow-2xs'
                      : 'bg-[#FAF7F2] border-[#E8E0D5] text-[#4A423A] hover:border-[#C2B7A8]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{opt.icon}</span>
                    <span>{opt.label}</span>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                    isSelected ? 'bg-[#7A2232] text-white' : 'border border-[#C2B7A8] bg-white'
                  }`}>
                    {isSelected && '✓'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Collection Preview Box */}
        <div className="p-3.5 bg-[#FAF0EC] rounded-2xl text-[12px] text-[#3D352E] border border-[#7A2232]/20 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono-tag font-bold text-[#7A2232] uppercase text-[10px]">
              COLLECTED PREFERENCES SUMMARY
            </span>
            <span className="text-[10px] font-bold text-[#2E7D32]">Synced to Kitchen & Logistics</span>
          </div>
          <p className="text-[#5C5248]">
            <strong className="text-[#1F1A17]">Dietary Care:</strong> {dietaryCare.length > 0 ? dietaryCare.join(', ') : 'None selected'}
          </p>
          <p className="text-[#5C5248]">
            <strong className="text-[#1F1A17]">Special Ops Care:</strong> {opsCare.length > 0 ? opsCare.join(', ') : 'None selected'}
          </p>
        </div>
      </div>

      {submitted && (
        <div className="mx-5 mb-3 p-3 bg-[#E2F0D9] text-[#2E7D32] border border-[#A5D6A7] rounded-xl text-[12px] font-medium flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>Reply & Selected Dietary Care collected! Updated Catering Kitchen & Ops Desk.</span>
        </div>
      )}

      {/* Fixed Bottom Action */}
      <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2 space-y-2">
        <button 
          onClick={handleSubmit}
          className="w-full py-3 px-4 bg-[#7A2232] text-white font-medium text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm"
        >
          Submit RSVP & Dietary Care Selections
        </button>

        {onNavigateNext && (
          <button 
            onClick={onNavigateNext}
            className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[13.5px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Step 8: Visa & Invitation Letter</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};

