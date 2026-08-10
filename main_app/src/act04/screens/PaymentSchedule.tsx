import React from 'react';
import { AppHeader } from '../components/Header';
import { PaymentScheduleItem } from '../types';

interface Screen26Props {
  scheduleItems: PaymentScheduleItem[];
  selectedItemId?: string;
  onSelectItemId?: (id: string) => void;
  onOpenPaymentModal: (item: PaymentScheduleItem) => void;
  onNavigateToEscrow: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  onBack?: () => void;
  onNavigateToRecords?: () => void;
}

export const Screen26_PaymentSchedule: React.FC<Screen26Props> = ({
  scheduleItems,
  selectedItemId,
  onSelectItemId,
  onOpenPaymentModal,
  currency,
  onToggleCurrency,
  onBack,
  onNavigateToRecords
}) => {
  const isINR = currency === 'INR';
  const [activeId, setActiveId] = React.useState<string>(selectedItemId || scheduleItems[0]?.id || 'p1');

  React.useEffect(() => {
    if (selectedItemId) {
      setActiveId(selectedItemId);
    }
  }, [selectedItemId]);

  const activeHeroItem = scheduleItems.find((i) => i.id === activeId) || scheduleItems[0];
  const listItems = scheduleItems.filter((i) => i.id !== activeHeroItem.id);

  const handleSelectItem = (id: string) => {
    setActiveId(id);
    if (onSelectItemId) {
      onSelectItemId(id);
    }
  };

  const formatItemPrimary = (item: PaymentScheduleItem) => {
    if (isINR) {
      if (item.amountINR >= 100000) {
        const lakhs = item.amountINR / 100000;
        return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)}L`;
      }
      return `₹${item.amountINR.toLocaleString('en-IN')}`;
    }
    return `$${item.amountUSD.toLocaleString()}`;
  };

  const formatItemSecondary = (item: PaymentScheduleItem) => {
    if (isINR) {
      return item.amountUSD > 0 ? `$${item.amountUSD.toLocaleString()}` : null;
    }
    if (item.amountINR >= 100000) {
      const lakhs = item.amountINR / 100000;
      return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)}L`;
    }
    return `₹${item.amountINR.toLocaleString('en-IN')}`;
  };

  const formatHeroPrimary = (item: PaymentScheduleItem) => {
    if (isINR) {
      return `₹${item.amountINR.toLocaleString('en-IN')}`;
    }
    return `$${item.amountUSD.toLocaleString()}`;
  };

  const formatHeroSecondary = (item: PaymentScheduleItem) => {
    if (isINR) {
      return `≈ $${item.amountUSD.toLocaleString()} · ${item.title}, ${item.vendor}`;
    }
    return `≈ ₹${item.amountINR.toLocaleString('en-IN')} · ${item.title}, ${item.vendor}`;
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 animate-fade-in">
      <AppHeader
        title="What's due, when"
        subtitle={isINR ? "₹11.2L across the next four months" : "$13.5K across the next four months"}
        showBack={true}
        onBack={onBack}
        backLabel="Budget"
        rightAction={
          onNavigateToRecords ? (
            <button
              onClick={onNavigateToRecords}
              className="flex items-center gap-1.5 text-[#7A1C31] hover:text-[#5B1525] bg-[#F4EFEA] hover:bg-[#EAE2D5] px-2.5 py-1.5 rounded-full font-medium text-[12px] transition-colors cursor-pointer border-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
              Records
            </button>
          ) : undefined
        }
      />

      <div className="px-4 py-2 space-y-4">
        {/* Maroon Hero Due Card for Selected Category */}
        {activeHeroItem && (
          <div className="bg-[#7A1C31] text-white rounded-2xl p-4 shadow-sm relative overflow-hidden transition-all duration-300">
            {/* Top row */}
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#F5D5DC] uppercase mb-2">
              <span className="bg-[#611425] px-2 py-0.5 rounded-sm tracking-widest text-[10px]">
                {activeHeroItem.daysLeft ? `DUE IN ${activeHeroItem.daysLeft} DAYS` : activeHeroItem.dueDate.toUpperCase()}
              </span>
              <span className="text-[#F5D5DC] font-medium text-[12px]">{activeHeroItem.dueDate}</span>
            </div>

            {/* Amount */}
            <div className="mt-1 mb-1">
              <span className="font-serif-title text-[36px] font-normal leading-tight tracking-tight">
                {formatHeroPrimary(activeHeroItem)}
              </span>
            </div>

            {/* Subtext */}
            <p className="text-[12px] text-[#E8C2CA] mb-4 font-normal">
              {formatHeroSecondary(activeHeroItem)}
            </p>

            {/* CTA Button inside Hero Card */}
            <button
              onClick={() => onOpenPaymentModal(activeHeroItem)}
              className="w-full bg-[#FAF7F2] hover:bg-white active:bg-[#F2ECE4] text-[#7A1C31] font-medium py-3 px-4 rounded-xl text-[14px] transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-[0.99]"
            >
              Pay into escrow
            </button>
          </div>
        )}

        {/* Timeline Cards */}
        <div className="space-y-2.5">
          {listItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectItem(item.id)}
              className="bg-white border border-[#EBE5DC] rounded-2xl p-4 flex items-center justify-between transition-all cursor-pointer hover:border-[#7A1C31] active:scale-[0.99] shadow-2xs group"
            >
              <div>
                <h4 className="text-[14px] font-semibold text-[#1A1613] group-hover:text-[#7A1C31] transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="text-[12px] text-[#7A716A] mt-0.5">
                  {item.dueDate} · {item.note || item.vendor}
                </p>
              </div>

              <div className="text-right">
                <div className="font-serif-title text-[16px] font-semibold text-[#1A1613] leading-none">
                  {formatItemPrimary(item)}
                  {item.id === 'sched-4' && ' est.'}
                </div>
                {formatItemSecondary(item) && (
                  <div className="text-[11px] text-[#8C827A] mt-0.5">
                    {formatItemSecondary(item)}
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
              Up ₹0.61 this month. Sending the {isINR ? '₹4.5L' : '$5,360'} advance today saves you about $39 versus last week's rate.
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
