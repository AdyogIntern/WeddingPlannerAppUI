import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { AppHeader } from '../components/Header';
import { BudgetItem } from '../types';

interface Screen25Props {
  budgetItems: BudgetItem[];
  onNavigateToSchedule: (category?: string) => void;
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
  const isINR = currency === 'INR';

  const formatVariance = (item: BudgetItem) => {
    if (!item.variance) return null;
    if (isINR) {
      return item.variance;
    }
    // USD conversion for variance
    if (item.variance === '+₹2.4L over') return '+$2.9K over';
    if (item.variance === '-₹40K under') return '-$480 under';
    if (item.variance === '-₹20K under') return '-$240 under';
    return item.variance;
  };

  const getVarianceBadge = (item: BudgetItem) => {
    const text = formatVariance(item);
    if (!text) return null;
    if (item.varianceType === 'over') {
      return <span className="text-[12px] font-medium text-[#C0392B]">{text}</span>;
    }
    if (item.varianceType === 'under' || item.varianceType === 'onband') {
      return <span className="text-[12px] font-medium text-[#2E7D32]">{text}</span>;
    }
    return <span className="text-[12px] font-medium text-[#8C827A]">{text}</span>;
  };

  const formatItemAmount = (amountINR: number) => {
    if (isINR) {
      return `₹${amountINR}L`;
    }
    const usd = Math.round((amountINR * 100000) / 83.2 / 100) / 10;
    return `$${usd.toFixed(1)}K`;
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

      <div className="px-4 py-2 space-y-5">
        {/* Large Budget Card */}
        <div className="bg-transparent">
          <div className="flex items-baseline gap-2.5 mb-1.5">
            <span className="font-serif-title text-[40px] font-bold text-[#1A1613] leading-none tracking-tight">
              {isINR ? '₹42.6L' : '$50,700'}
            </span>
            <span className="text-[15px] text-[#8C827A] font-normal">
              {isINR ? '≈ $50,700' : '≈ ₹42.6L'}
            </span>
          </div>

          <p className="text-[13px] text-[#7A716A] mb-3 font-normal">
            {isINR ? (
              <>Committed of a ₹50L band · <span className="text-[#1A1613]">₹7.4L left</span></>
            ) : (
              <>Committed of a $60.2K band · <span className="text-[#1A1613]">$8.9K left</span></>
            )}
          </p>

          {/* Segmented Progress Bar */}
          <div className="h-2.5 w-full bg-[#EAE2D5] rounded-full overflow-hidden flex gap-0.5 shadow-2xs">
            <div className="h-full bg-[#7A1C31] w-[44%]" title={isINR ? 'Paid ₹22.1L' : 'Paid $26.6K'} />
            <div className="h-full bg-[#C5A059] w-[41%]" title={isINR ? 'Committed ₹20.5L' : 'Committed $24.7K'} />
            <div className="h-full bg-[#EAE2D5] w-[15%]" title={isINR ? 'Remaining ₹7.4L' : 'Remaining $8.9K'} />
          </div>

          {/* Progress Legend */}
          <div className="flex items-center gap-4 mt-3 text-[12px] text-[#625952]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-xs bg-[#7A1C31]" />
              <span>Paid <strong className="font-normal text-[#1A1613]">{isINR ? '₹22.1L' : '$26.6K'}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-xs bg-[#C5A059]" />
              <span>Committed <strong className="font-normal text-[#1A1613]">{isINR ? '₹20.5L' : '$24.7K'}</strong></span>
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
                onClick={() => onNavigateToSchedule(item.category)}
                className="bg-white border border-[#EBE5DC] rounded-2xl p-4 flex items-center justify-between transition-all cursor-pointer hover:border-[#D5CBC0] active:scale-[0.99] shadow-2xs"
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
                    {formatItemAmount(item.amountINR)}
                  </div>
                  <div className="mt-1">{getVarianceBadge(item)}</div>
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
            <div className="bg-white border border-[#EBE5DC] rounded-2xl p-4 transition-all shadow-2xs">
              <span className="text-[12px] text-[#7A716A] block mb-1">Bride's side</span>
              <span className="font-serif-title text-[22px] font-bold text-[#1A1613]">
                {isINR ? '₹28.4L' : '$34,130'}
              </span>
            </div>

            <div className="bg-white border border-[#EBE5DC] rounded-2xl p-4 transition-all shadow-2xs">
              <span className="text-[12px] text-[#7A716A] block mb-1">Couple ({currency})</span>
              <span className="font-serif-title text-[22px] font-bold text-[#1A1613]">
                {isINR ? '₹14.0L' : '$16,900'}
              </span>
            </div>
          </div>
        </div>

        {/* Upcoming Payments Navigation Card */}
        <div
          onClick={onNavigateToSchedule}
          className="bg-white border border-[#EBE5DC] rounded-2xl p-3.5 flex items-center justify-between cursor-pointer hover:border-[#D5CBC0] active:scale-[0.99] transition-all shadow-2xs group"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#F6ECEC] text-[#7A1C31] flex items-center justify-center shrink-0">
              <Calendar className="w-5.5 h-5.5 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-[#1A1613] leading-snug">
                Upcoming Payments
              </h4>
              <p className="text-[13px] text-[#7A716A] mt-0.5 font-normal">
                Next due: <span className="font-medium text-[#4A423B]">{isINR ? '₹4.5L' : '$5,410'} on 22 Sep</span>
              </p>
            </div>
          </div>

          <ChevronRight className="w-5 h-5 text-[#7A716A] group-hover:text-[#1A1613] transition-colors" />
        </div>

        {/* Escrow Callout Banner below Upcoming Payments (Non-clickable) */}
        <div className="bg-[#F8EFEF] border border-[#ECD9D9] rounded-2xl p-4 text-[13px] text-[#4A1823] leading-relaxed shadow-2xs">
          <strong className="font-semibold">{isINR ? '₹4.5L' : '$5,410'} advance due 22 Sep</strong> — pay into escrow; released to the vendor only after you confirm delivery.
        </div>
      </div>
    </div>
  );
};


