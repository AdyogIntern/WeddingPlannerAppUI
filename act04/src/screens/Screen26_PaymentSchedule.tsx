import React from 'react';
import { AppHeader } from '../components/Header';
import { PaymentScheduleItem } from '../types';

interface Screen26Props {
  scheduleItems: PaymentScheduleItem[];
  onOpenPaymentModal: (item: PaymentScheduleItem) => void;
  onNavigateToEscrow: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  onBack?: () => void;
}

export const Screen26_PaymentSchedule: React.FC<Screen26Props> = ({
  scheduleItems,
  onOpenPaymentModal,
  currency,
  onToggleCurrency,
  onBack
}) => {
  const heroItem = scheduleItems.find((i) => i.isHero) || scheduleItems[0];
  const otherItems = scheduleItems.filter((i) => !i.isHero);

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 animate-fade-in">
      <AppHeader
        title="What's due, when"
        subtitle="₹11.2L across the next four months"
        showBack={true}
        onBack={onBack}
        backLabel="Budget"
      />

      <div className="px-5 py-2 space-y-4">
        {/* Maroon Hero Due Card */}
        {heroItem && (
          <div className="bg-[#7A1C31] text-white rounded-2xl p-4 shadow-sm relative overflow-hidden">
            {/* Top row */}
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#F5D5DC] uppercase mb-2">
              <span className="bg-[#611425] px-2 py-0.5 rounded-sm tracking-widest text-[10px]">
                DUE IN 6 DAYS
              </span>
              <span className="text-[#F5D5DC] font-medium text-[12px]">{heroItem.dueDate}</span>
            </div>

            {/* Amount */}
            <div className="mt-1 mb-1">
              <span className="font-serif-title text-[36px] font-normal leading-tight tracking-tight">
                ₹4,50,000
              </span>
            </div>

            {/* Subtext */}
            <p className="text-[12px] text-[#E8C2CA] mb-4 font-normal">
              ≈ $5,360 · Venue advance, Leela Palace
            </p>

            {/* CTA Button inside Hero Card */}
            <button
              onClick={() => onOpenPaymentModal(heroItem)}
              className="w-full bg-[#FAF7F2] hover:bg-white active:bg-[#F2ECE4] text-[#7A1C31] font-medium py-3 px-4 rounded-xl text-[14px] transition-all flex items-center justify-center cursor-pointer shadow-xs"
            >
              Pay into escrow
            </button>
          </div>
        )}

        {/* Timeline Cards */}
        <div className="space-y-2.5">
          {otherItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenPaymentModal(item)}
              className="bg-white border border-[#EBE5DC] rounded-2xl p-4 flex items-center justify-between transition-all cursor-pointer shadow-2xs"
            >
              <div>
                <h4 className="text-[14px] font-semibold text-[#1A1613] leading-tight">
                  {item.title}
                </h4>
                <p className="text-[12px] text-[#7A716A] mt-0.5">
                  {item.dueDate} · {item.note || item.vendor}
                </p>
              </div>

              <div className="text-right">
                <div className="font-serif-title text-[16px] font-semibold text-[#1A1613] leading-none">
                  {item.amountINR === 85000 ? '₹85,000' : `₹${(item.amountINR / 100000).toFixed(item.amountINR >= 100000 ? (item.amountINR % 100000 === 0 ? 1 : 2) : 0)}L`}
                  {item.id === 'sched-4' && ' est.'}
                </div>
                {item.amountUSD > 0 && (
                  <div className="text-[11px] text-[#8C827A] mt-0.5">
                    ${item.amountUSD.toLocaleString()}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Rate watch Section */}
        <div className="pt-1">
          <h3 className="font-serif-title text-[20px] text-[#1A1613] font-normal mb-2.5">
            Rate watch
          </h3>
          
          <div className="bg-white border border-[#EBE5DC] rounded-2xl p-4 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-[#1A1613]">
                USD ➔ INR today
              </span>
              <span className="font-serif-title text-[16px] font-semibold text-[#1A1613]">
                ₹84.02
              </span>
            </div>
            <p className="text-[12px] text-[#2E7D32] leading-relaxed">
              Up ₹0.61 this month. Sending the ₹4.5L advance today saves you about $39 versus last week's rate.
            </p>
          </div>
        </div>

        {/* Info Box at Bottom */}
        <div className="bg-[#F6ECEC] border border-[#ECD9D9] rounded-2xl p-4 text-[12px] text-[#625952] leading-relaxed">
          All dates are pulled from your vendor contracts. We remind you and Appa five days before each one.
        </div>
      </div>
    </div>
  );
};
