import React from 'react';
import { AppHeader } from '../components/Header';
import { BudgetItem } from '../types';

interface Screen25Props {
  budgetItems: BudgetItem[];
  onNavigateToSchedule: () => void;
  onNavigateToWhoPays: () => void;
  onPayEscrow: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  onBack?: () => void;
}

export const Screen25_BudgetDashboard: React.FC<Screen25Props> = ({
  budgetItems,
  onNavigateToSchedule,
  onNavigateToWhoPays,
  currency,
  onToggleCurrency,
  onBack
}) => {
  const getVarianceBadge = (variance?: string, type?: string) => {
    if (!variance) return null;
    if (type === 'over') {
      return <span className="text-[12px] font-medium text-[#C0392B]">{variance}</span>;
    }
    if (type === 'under' || type === 'onband') {
      return <span className="text-[12px] font-medium text-[#2E7D32]">{variance}</span>;
    }
    return <span className="text-[12px] font-medium text-[#8C827A]">{variance}</span>;
  };

  const displayedItems = budgetItems.slice(0, 4);

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 animate-fade-in">
      <AppHeader
        title="Budget"
        showBack={false}
        onToggleCurrency={onToggleCurrency}
        currency={currency}
      />

      <div className="px-5 py-2 space-y-5">
        {/* Large Budget Card */}
        <div className="bg-transparent">
          <div className="flex items-baseline gap-2.5 mb-1.5">
            <span className="font-serif-title text-[40px] font-bold text-[#1A1613] leading-none tracking-tight">
              ₹42.6L
            </span>
            <span className="text-[15px] text-[#8C827A] font-normal">
              ≈ $50,700
            </span>
          </div>

          <p className="text-[13px] text-[#7A716A] mb-3 font-normal">
            Committed of a ₹50L band · <span className="text-[#1A1613]">₹7.4L left</span>
          </p>

          {/* Segmented Progress Bar */}
          <div className="h-2.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden flex gap-0.5 shadow-2xs">
            <div className="h-full bg-[#7A1C31] w-[44%]" title="Paid ₹22.1L" />
            <div className="h-full bg-[#C5A059] w-[41%]" title="Committed ₹20.5L" />
            <div className="h-full bg-[#EAE2D5] w-[15%]" title="Remaining ₹7.4L" />
          </div>

          {/* Progress Legend */}
          <div className="flex items-center gap-4 mt-3 text-[12px] text-[#625952]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-xs bg-[#7A1C31]" />
              <span>Paid <strong className="font-normal text-[#1A1613]">₹22.1L</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-xs bg-[#C5A059]" />
              <span>Committed <strong className="font-normal text-[#1A1613]">₹20.5L</strong></span>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-b border-[#EBE5DC] pt-1" />

        {/* Category Expense Section */}
        <div>
          <div className="flex items-center justify-between px-1 mb-2.5">
            <span className="text-[11px] font-semibold text-[#8C827A] uppercase tracking-wider">
              CATEGORY
            </span>
            <span className="text-[11px] font-semibold text-[#8C827A] uppercase tracking-wider">
              SPEND · VARIANCE
            </span>
          </div>

          <div className="space-y-2.5">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#EBE5DC] rounded-2xl p-4 flex items-center justify-between transition-all shadow-2xs"
              >
                <div>
                  <h4 className="text-[15px] font-semibold text-[#1A1613] leading-tight">
                    {item.category}
                  </h4>
                  <p className="text-[12px] text-[#7A716A] mt-0.5">
                    {item.owner}{item.details ? ` · ${item.details}` : ''}
                  </p>
                </div>

                <div className="text-right">
                  <div className="font-serif-title text-[17px] font-semibold text-[#1A1613] leading-none">
                    ₹{item.amountINR}L
                  </div>
                  <div className="mt-1">{getVarianceBadge(item.variance, item.varianceType)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who is paying Section */}
        <div>
          <h3 className="font-serif-title text-[20px] text-[#1A1613] font-normal mb-2.5">
            Who is paying
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div
              onClick={onNavigateToWhoPays}
              className="bg-white border border-[#EBE5DC] rounded-2xl p-4 cursor-pointer hover:border-[#D5CBC0] transition-all"
            >
              <span className="text-[12px] text-[#7A716A] block mb-1">Bride's side</span>
              <span className="font-serif-title text-[22px] font-bold text-[#1A1613]">
                ₹28.4L
              </span>
            </div>

            <div
              onClick={onNavigateToWhoPays}
              className="bg-white border border-[#EBE5DC] rounded-2xl p-4 cursor-pointer hover:border-[#D5CBC0] transition-all"
            >
              <span className="text-[12px] text-[#7A716A] block mb-1">Couple (USD)</span>
              <span className="font-serif-title text-[22px] font-bold text-[#1A1613]">
                $16,900
              </span>
            </div>
          </div>
        </div>

        {/* Escrow Callout Banner */}
        <div 
          onClick={onNavigateToSchedule}
          className="bg-[#F8EFEF] border border-[#ECD9D9] rounded-2xl p-4 text-[13px] text-[#4A1823] leading-relaxed cursor-pointer hover:bg-[#F2E5E5] active:scale-[0.99] transition-all"
        >
          <strong className="font-semibold">₹4.5L advance due 22 Sep</strong> — pay into escrow; released to the vendor only after you confirm delivery.
        </div>
      </div>
    </div>
  );
};


