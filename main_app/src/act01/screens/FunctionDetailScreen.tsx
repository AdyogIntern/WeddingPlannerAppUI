import React, { useState } from 'react';
import { View } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { 
  ChevronLeft, 
  Minus, 
  Plus, 
  Printer
} from 'lucide-react';

export const FunctionDetailScreen: React.FC = () => {
  const { 
    functions, 
    selectedFunctionId, 
    setScreen,
    removeFunction,
    updateFunction
  } = useWeddingStore();

  const selectedFn = functions.find(f => f.id === selectedFunctionId) || functions[2] || functions[3]; // Default to Mehendi & Sangeet

  // View Modes: 'edit' (Inline Edit as per image) | 'slots' (Screen 8) | 'board' (Screen 9)
  const [viewMode, setViewMode] = useState<'edit' | 'slots' | 'board'>(
    selectedFunctionId === 'f4' ? 'slots' : 'edit'
  );
  const [boardType, setBoardType] = useState<'board' | 'timeline'>('board');

  // Edit states
  const [fnName, setFnName] = useState(selectedFn.name);
  const [timeSlot, setTimeSlot] = useState<'Evening' | 'Afternoon' | 'Morning'>(
    selectedFn.timeSlot.includes('Morning') ? 'Morning' : selectedFn.timeSlot.includes('Afternoon') ? 'Afternoon' : 'Evening'
  );
  const [guestCount, setGuestCount] = useState<number>(selectedFn.guests || 180);
  const [newSlotName, setNewSlotName] = useState('');
  const [localSlots, setLocalSlots] = useState(selectedFn.slots.map(s => s.category));

  const handleSave = () => {
    const updatedSlots = localSlots.map((category, index) => {
      const existing = selectedFn.slots.find(s => s.category === category);
      if (existing) return existing;
      return {
        id: `s${Date.now()}-${index}`,
        category,
        vendorName: 'To be decided',
        status: 'open' as const,
        costINR: 0,
        costUSD: 0,
      };
    });

    updateFunction(selectedFn.id, {
      name: fnName,
      timeSlot: timeSlot === 'Evening' ? 'Evening (16:00 - 23:00)' : timeSlot === 'Afternoon' ? 'Afternoon (12:00 - 16:00)' : 'Morning (08:00 - 11:00)',
      guests: guestCount,
      slots: updatedSlots
    });
    setScreen('blueprint_home');
  };

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: '#FAF8F5', 
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* ================= TOP NAVIGATION BAR ================= */}
      <div className="bg-[#FAF8F5] px-4 pt-2.5 pb-2 border-b border-[#E5E0D8] shrink-0 flex items-center justify-between z-30">
        <button
          onClick={() => setScreen('blueprint_home')}
          className="flex items-center gap-1 text-xs font-semibold text-gray-700 bg-transparent border-none cursor-pointer hover:text-gray-900"
        >
          <ChevronLeft size={16} />
          <span>Blueprint</span>
        </button>

        {/* View Mode Switcher Pills */}
        <div className="flex bg-[#EFE7DC] p-0.5 rounded-xl text-[10.5px] font-semibold">
          <button
            onClick={() => setViewMode('edit')}
            className={`px-2.5 py-1 rounded-lg border-none cursor-pointer transition-all ${
              viewMode === 'edit' ? 'bg-[#671B2B] text-white font-bold shadow-2xs' : 'text-gray-700 bg-transparent'
            }`}
          >
            Inline Edit
          </button>
          <button
            onClick={() => setViewMode('slots')}
            className={`px-2.5 py-1 rounded-lg border-none cursor-pointer transition-all ${
              viewMode === 'slots' ? 'bg-[#671B2B] text-white font-bold shadow-2xs' : 'text-gray-700 bg-transparent'
            }`}
          >
            Slots
          </button>
          <button
            onClick={() => setViewMode('board')}
            className={`px-2.5 py-1 rounded-lg border-none cursor-pointer transition-all ${
              viewMode === 'board' ? 'bg-[#671B2B] text-white font-bold shadow-2xs' : 'text-gray-700 bg-transparent'
            }`}
          >
            3-Day Board
          </button>
        </div>

        <button
          onClick={() => setScreen('blueprint_home')}
          className="text-xs font-bold text-gray-800 bg-transparent border-none cursor-pointer hover:text-gray-900"
        >
          Done
        </button>
      </div>

      {/* ================= MAIN SCROLLABLE CONTENT ================= */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
        
        {/* MODE 1: INLINE FUNCTION EDIT (MATCHES EXACT SCREEN IMAGE) */}
        {viewMode === 'edit' && (
          <div className="space-y-3.5">
            {/* Header Title Section */}
            <div>
              <input
                type="text"
                value={fnName}
                onChange={e => setFnName(e.target.value)}
                className="text-xl font-serif font-bold text-gray-900 leading-tight bg-transparent border-b border-dashed border-gray-300 focus:outline-none focus:border-[#671B2B] w-full pb-1 mb-1"
              />
              <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
                {selectedFn.date || 'Sat 13 Feb'} · {selectedFn.owner || 'Meera'} owns this function
              </p>
            </div>

            {/* CARD 1: TIME */}
            <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] space-y-2.5 shadow-2xs">
              <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider font-mono">
                TIME
              </div>
              
              <div className="flex gap-2">
                {(['Evening', 'Afternoon', 'Morning'] as const).map(slot => (
                  <button
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      timeSlot === slot
                        ? 'border-2 border-[#671B2B] bg-[#FAF0F2] text-gray-900 shadow-2xs'
                        : 'border-[#E5E0D8] bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <p className="text-[10px] text-gray-500">
                {timeSlot === 'Evening' ? '6:00 pm to 11:00 pm' : timeSlot === 'Afternoon' ? '12:00 pm to 4:00 pm' : '6:30 am to 09:00 am'}
              </p>
            </div>

            {/* CARD 2: GUESTS */}
            <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] space-y-2.5 shadow-2xs">
              <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider font-mono">
                GUESTS
              </div>

              <div className="flex items-center justify-center gap-6 py-1">
                <button
                  onClick={() => setGuestCount(prev => Math.max(10, prev - 10))}
                  className="w-9 h-9 rounded-xl border border-[#E5E0D8] bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 border-none cursor-pointer font-bold text-base shadow-2xs"
                >
                  -
                </button>

                <span className="text-2xl font-bold font-sans text-gray-900 min-w-[60px] text-center">
                  {guestCount}
                </span>

                <button
                  onClick={() => setGuestCount(prev => prev + 10)}
                  className="w-9 h-9 rounded-xl border border-[#E5E0D8] bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 border-none cursor-pointer font-bold text-base shadow-2xs"
                >
                  +
                </button>
              </div>

              <p className="text-[10.5px] text-[#B45309] font-medium leading-snug">
                Adding 20 guests moves catering to ₹1.14L and needs a bigger hall. We'll re-check availability.
              </p>
            </div>

            {/* CARD 3: SLOTS IN THIS FUNCTION */}
            <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] space-y-2.5 shadow-2xs">
              <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider font-mono">
                SLOTS IN THIS FUNCTION
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {localSlots.map((slotName, i) => (
                  <span key={i} className="bg-[#FAF0F2] text-[#671B2B] px-3 py-1.5 rounded-xl border border-[#F2D6DC] text-xs font-semibold flex items-center gap-1.5">
                    {slotName}
                    <button 
                      onClick={() => setLocalSlots(prev => prev.filter((_, idx) => idx !== i))}
                      className="text-[#671B2B] hover:text-[#B91C1C] bg-transparent border-none p-0 cursor-pointer flex items-center"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={newSlotName}
                  onChange={e => setNewSlotName(e.target.value)}
                  placeholder="e.g. DJ, Anchor"
                  className="flex-1 bg-gray-50 border border-[#E5E0D8] rounded-xl px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:border-[#B49A6C]"
                />
                <button
                  onClick={() => {
                    if (newSlotName.trim()) {
                      setLocalSlots([...localSlots, newSlotName.trim()]);
                      setNewSlotName('');
                    }
                  }}
                  className="bg-white text-gray-600 border border-dashed border-[#B49A6C] px-4 py-1.5 rounded-xl text-xs font-semibold cursor-pointer hover:bg-gray-50"
                >
                  + Add
                </button>
              </div>
            </div>

            {/* CARD 4: REMOVE THIS FUNCTION */}
            <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] flex justify-between items-center shadow-2xs">
              <div>
                <h4 className="text-xs font-bold text-gray-900">Remove this function</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">Frees ₹4.1L</p>
              </div>
              <button
                onClick={() => {
                  removeFunction(selectedFn.id);
                  setScreen('blueprint_home');
                }}
                className="text-xs font-bold text-[#B91C1C] bg-transparent border-none cursor-pointer hover:underline"
              >
                Remove
              </button>
            </div>

            {/* CARD 5: VERSIONING EXPLAINER CALLOUT */}
            <div className="bg-[#F5EBEB] p-3.5 rounded-2xl border border-[#F2D6DC] text-[10.5px] text-[#671B2B] leading-relaxed">
              Every edit is versioned with who made it and when — useful six months later when nobody remembers who agreed to {guestCount} guests.
            </div>

            {/* CONFIRM CHANGES BUTTON */}
            <button
              onClick={handleSave}
              className="w-full py-3.5 mt-2 rounded-2xl bg-[#671B2B] text-white text-[13px] font-bold text-center cursor-pointer shadow-md hover:bg-[#8A253A] transition-colors"
            >
              Confirm changes
            </button>
          </div>
        )}

        {/* MODE 2: SCREEN 8 — MUHURTHAM ALL SLOTS VIEW */}
        {viewMode === 'slots' && (
          <div className="space-y-3">
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-900 leading-tight">
                {selectedFn.name || 'Muhurtham'}
              </h1>
              <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
                Sun 14 Feb · 06:30–09:00 · 420 guests · Chennai
              </p>

              <div className="flex gap-2 mt-2">
                <span className="bg-[#FAF0F2] text-[#671B2B] border border-[#F2D6DC] text-[10px] font-bold px-2.5 py-1 rounded-lg">
                  ₹18.9L of ₹22L
                </span>
                <span className="bg-[#FAF0F2] text-[#671B2B] border border-[#F2D6DC] text-[10px] font-bold px-2.5 py-1 rounded-lg">
                  6 of 10 slots filled
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EFE7DC] shrink-0 border border-[#E0D5C5]" />
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Venue · Leela Palace</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">₹8.4L · awaiting Appa's approval</p>
                  </div>
                </div>
                <span className="bg-[#FEF3C7] text-[#D97706] border border-[#FCD34D] text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider">
                  HOLD
                </span>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EFE7DC] shrink-0 border border-[#E0D5C5]" />
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Catering · Sri Amirtham</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">₹5.25L · ₹1,250/plate</p>
                  </div>
                </div>
                <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider">
                  BOOKED
                </span>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EFE7DC] shrink-0 border border-[#E0D5C5]" />
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Purohit · Sri Venkatesa Sastrigal</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">Vadakalai sampradaya · ₹42,000</p>
                  </div>
                </div>
                <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider">
                  BOOKED
                </span>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EFE7DC] shrink-0 border border-[#E0D5C5]" />
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Photography</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">3 shortlisted · family voting</p>
                  </div>
                </div>
                <span className="bg-[#FAF0F2] text-[#671B2B] border border-[#F2D6DC] text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider">
                  VOTE
                </span>
              </div>
            </div>
          </div>
        )}

        {/* MODE 3: SCREEN 9 — THE THREE DAYS BOARD VIEW */}
        {viewMode === 'board' && (
          <div className="space-y-3 pb-2">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-lg font-serif font-bold text-gray-900 leading-tight">
                  The three days
                </h1>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  Drag a function to move it. Costs and staffing recalculate.
                </p>
              </div>

              <div className="flex bg-white border border-[#E5E0D8] p-0.5 rounded-lg text-[10px] font-bold">
                <button
                  onClick={() => setBoardType('board')}
                  className={`px-2 py-0.5 rounded-md border-none cursor-pointer ${
                    boardType === 'board' ? 'bg-[#671B2B] text-white' : 'text-gray-600 bg-transparent'
                  }`}
                >
                  Board
                </button>
                <button
                  onClick={() => setBoardType('timeline')}
                  className={`px-2 py-0.5 rounded-md border-none cursor-pointer ${
                    boardType === 'timeline' ? 'bg-[#671B2B] text-white' : 'text-gray-600 bg-transparent'
                  }`}
                >
                  Timeline
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {/* Day 1: Fri 12 Feb */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase border-b border-[#E5E0D8] pb-1">
                  Fri 12 Feb · 2 functions
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2.5 rounded-xl border border-[#E5E0D8] space-y-1.5 shadow-2xs">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Nichayathartham</h4>
                      <p className="text-[9.5px] text-gray-500">9:00 am · 120 guests</p>
                    </div>
                    <div className="w-full h-7 bg-[#EFE7DC] rounded-md border border-[#E0D5C5]" />
                    <div className="flex flex-wrap gap-1 text-[9px] font-bold">
                      <span className="bg-[#FAF0F2] text-[#671B2B] px-1.5 py-0.5 rounded">Venue ✓</span>
                      <span className="bg-[#FAF0F2] text-[#671B2B] px-1.5 py-0.5 rounded">Food ✓</span>
                      <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Photo</span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 pt-0.5">₹3.2L</div>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-[#E5E0D8] space-y-1.5 shadow-2xs">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Panda Kaal Muhurtham</h4>
                      <p className="text-[9.5px] text-gray-500">4:00 pm · 60 guests</p>
                    </div>
                    <div className="flex flex-wrap gap-1 text-[9px] font-bold pt-1">
                      <span className="bg-[#FAF0F2] text-[#671B2B] px-1.5 py-0.5 rounded">Purohit ✓</span>
                      <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Samagri</span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 pt-1">₹48K</div>
                  </div>
                </div>
              </div>

              {/* Day 2: Sat 13 Feb */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase border-b border-[#E5E0D8] pb-1">
                  Sat 13 Feb · 2 functions
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2.5 rounded-xl border border-[#E5E0D8] space-y-1.5 shadow-2xs">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Sumangali Prarthanai</h4>
                      <p className="text-[9.5px] text-gray-500">8:00 am · 80 guests</p>
                    </div>
                    <div className="flex flex-wrap gap-1 text-[9px] font-bold">
                      <span className="bg-[#FAF0F2] text-[#671B2B] px-1.5 py-0.5 rounded">Cook ✓</span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 pt-0.5">₹72K</div>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border-2 border-[#B49A6C] space-y-1.5 shadow-2xs">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Mehendi & Sangeet</h4>
                      <p className="text-[9.5px] text-gray-500">6:00 pm · 180 guests · Meera</p>
                    </div>
                    <div className="w-full h-7 bg-[#EFE7DC] rounded-md border border-[#E0D5C5]" />
                    <div className="flex flex-wrap gap-1 text-[9px] font-bold">
                      <span className="bg-gray-100 text-gray-600 px-1 py-0.5 rounded">Mehendi</span>
                      <span className="bg-gray-100 text-gray-600 px-1 py-0.5 rounded">DJ</span>
                      <span className="bg-gray-100 text-gray-600 px-1 py-0.5 rounded">Choreo</span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 pt-0.5">₹4.1L est.</div>
                  </div>
                </div>
              </div>

              {/* Day 3: Sun 14 Feb */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase border-b border-[#E5E0D8] pb-1">
                  Sun 14 Feb · 2 functions
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2.5 rounded-xl border-2 border-[#671B2B] space-y-1.5 shadow-2xs">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Muhurtham</h4>
                      <p className="text-[9.5px] text-gray-500">6:30 am · 420 guests</p>
                    </div>
                    <div className="w-full h-7 bg-[#EFE7DC] rounded-md border border-[#E0D5C5]" />
                    <div className="flex flex-wrap gap-1 text-[9px] font-bold">
                      <span className="bg-[#FEF3C7] text-[#D97706] px-1 py-0.5 rounded">Venue hold</span>
                      <span className="bg-[#FAF0F2] text-[#671B2B] px-1 py-0.5 rounded">Food ✓</span>
                      <span className="bg-gray-100 text-gray-600 px-1 py-0.5 rounded">+4 open</span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 pt-0.5">₹18.9L</div>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-[#E5E0D8] space-y-1.5 shadow-2xs">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Reception</h4>
                      <p className="text-[9.5px] text-gray-500">7:00 pm · 500 guests</p>
                    </div>
                    <div className="flex flex-wrap gap-1 text-[9px] font-bold pt-1">
                      <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">6 slots open</span>
                    </div>
                    <div className="text-xs font-bold text-gray-900 pt-1">₹12.1L est.</div>
                  </div>
                </div>

                {/* + Add function dashed card */}
                <div className="border border-dashed border-[#B49A6C] bg-[#FAF8F5] p-2.5 rounded-xl text-center text-xs font-bold text-gray-600 cursor-pointer hover:bg-white transition-colors mt-2">
                  + Add function
                </div>
              </div>
            </div>
          </div>
        )}

      </View>

      {/* ================= FIXED BOTTOM ACTION BAR ================= */}
      <View style={{ padding: '8px 14px 12px', shrink: 0, backgroundColor: '#FAF8F5', borderTop: '1px solid #E5E0D8' }}>
        {viewMode === 'board' ? (
          <div className="flex items-center justify-between gap-2">
            <div className="text-[10px] text-gray-700 font-medium leading-tight">
              Total <span className="font-bold text-gray-900">₹42.6L</span> · ≈ $50,700 · <span className="text-[#B91C1C] font-bold">₹2.4L over venue cap</span>
            </div>
            <button
              onClick={() => setScreen('compare_plans')}
              className="py-2.5 px-3 bg-[#671B2B] text-white rounded-md text-[11px] font-bold border-none cursor-pointer shadow-2xs hover:bg-[#521422] transition-colors text-center whitespace-nowrap shrink-0"
            >
              Request quotes for 6 open slots
            </button>
          </div>
        ) : (
          <button
            onClick={() => setScreen('blueprint_home')}
            className="w-[72%] max-w-[220px] mx-auto py-2.5 bg-[#671B2B] text-white rounded-md text-xs font-bold border-none cursor-pointer shadow-2xs hover:bg-[#521422] transition-colors text-center block"
          >
            Save · budget updates
          </button>
        )}
      </View>

    </View>
  );
};
