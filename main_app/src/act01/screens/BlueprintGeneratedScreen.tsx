import React, { useEffect, useState } from 'react';
import { View, Text, RNButton, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const BlueprintGeneratedScreen: React.FC = () => {
  const { setScreen, weddingScore, getTotalCostINR, getTotalCostInCurrency, getFilledSlotsCount } = useWeddingStore();
  const { filled, total } = getFilledSlotsCount();
  const totalINR = getTotalCostINR();
  const totalCurr = getTotalCostInCurrency();
  const [showNav, setShowNav] = useState(false);

  // Show navigation after the component has mounted (blueprint ready)
  useEffect(() => {
    setShowNav(true);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FAF8F5',
        height: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Main Scrollable Body */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', gap: '14px' }}>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Estimated Cost */}
          <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs text-left">
            <span className="text-[9px] font-bold uppercase text-gray-400 tracking-wider block">ESTIMATED</span>
            <div className="text-lg font-bold text-gray-900 mt-0.5">₹{(totalINR / 100000).toFixed(1)}L</div>
            <div className="text-[11px] text-gray-500 font-medium">= ${totalCurr.toLocaleString()}</div>
          </div>
          {/* Vendor Slots */}
          <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs text-left">
            <span className="text-[9px] font-bold uppercase text-gray-400 tracking-wider block">VENDOR SLOTS</span>
            <div className="text-lg font-bold text-gray-900 mt-0.5">{total}</div>
            <div className="text-[11px] text-gray-500 font-medium">{filled} pre-filled</div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs text-xs text-gray-900">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-bold text-gray-900">Your wedding is {weddingScore}% planned</span>
            <span className="text-[11px] text-gray-500 font-medium">198 days to go</span>
          </div>
          <div className="w-full bg-[#EFE7DC] h-2 rounded-full overflow-hidden my-1">
            <div className="bg-[#B49A6C] h-full rounded-full transition-all duration-300" style={{ width: `${weddingScore}%` }} />
          </div>
          <p className="text-[10.5px] text-gray-500 mt-1.5 leading-snug">Get to 25% to unlock your first reward.</p>
        </div>

        {/* Action Cards */}
        <div className="bg-white rounded-2xl p-4 border border-[#E5E0D8] shadow-2xs space-y-3 text-[#1D1D1F]">
          <h4 className="text-sm font-serif font-bold text-gray-900 pb-0.5">Three things to do first</h4>
          <div className="flex items-start gap-2.5">
            <div className="w-4 h-4 rounded border-2 border-[#671B2B] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-semibold text-gray-900 leading-tight block">Lock the Muhurtham venue — availability moves fastest</span>
              <span className="text-[10px] text-gray-500 font-medium mt-0.5 block">+12% progress</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="w-4 h-4 rounded border-2 border-gray-300 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-semibold text-gray-900 leading-tight block">Invite Appa and Amma</span>
              <span className="text-[10px] text-gray-500 font-medium mt-0.5 block">+8% · unlocks approvals</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="w-4 h-4 rounded border-2 border-gray-300 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-semibold text-gray-900 leading-tight block">Confirm your guest count per function</span>
              <span className="text-[10px] text-gray-500 font-medium mt-0.5 block">+5%</span>
            </div>
          </div>
        </div>
      </View>


    </View>
  );
};
