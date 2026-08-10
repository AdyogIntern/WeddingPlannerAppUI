import React from 'react';
import { ArrowLeft, ArrowLeftRight } from 'lucide-react';

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  backLabel?: string;
  currency?: 'INR' | 'USD';
  onToggleCurrency?: () => void;
  rightAction?: React.ReactNode;
  headerMeta?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBack,
  backLabel,
  currency = 'INR',
  onToggleCurrency,
  rightAction,
  headerMeta
}) => {
  return (
    <div className="pt-3 pb-3 px-4 bg-[#FAF7F2] sticky top-0 z-30 border-b border-transparent">
      {/* Top Bar row: Back link or meta status */}
      {(showBack || rightAction || headerMeta) && (
        <div className="flex items-center justify-between text-[13px] text-[#7A716A] mb-2 leading-none">
          {showBack && onBack ? (
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-[#7A716A] hover:text-[#1A1613] transition-colors cursor-pointer -ml-1 py-0.5 px-1 rounded-md active:scale-95"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2]" />
              {backLabel ? (
                <span className="font-medium text-[13px] text-[#7A716A]">{backLabel}</span>
              ) : null}
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            {rightAction ? (
              rightAction
            ) : headerMeta ? (
              <span className="text-[#8C827A] font-medium text-[12px] tracking-wide">{headerMeta}</span>
            ) : null}
          </div>
        </div>
      )}

      {/* Main Title Row - align currency toggle straight with title */}
      {(title || subtitle || onToggleCurrency) && (
        <div className="flex items-center justify-between gap-3">
          <div>
            {title && (
              <h1 className="font-serif-title text-[32px] leading-none text-[#1A1613] font-normal tracking-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-[13px] text-[#7A716A] mt-1.5 font-normal leading-snug">
                {subtitle}
              </p>
            )}
          </div>

          {onToggleCurrency && (
            <button
              onClick={onToggleCurrency}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4EFEA] hover:bg-[#EAE2D5] border border-[#E0D7CC] text-[13px] font-medium transition-all cursor-pointer shadow-2xs active:scale-95 shrink-0"
              title="Toggle currency"
            >
              <span className={currency === 'INR' ? 'font-bold text-[#7A1C31]' : 'text-[#8C827A]'}>
                INR
              </span>
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#8C827A]" />
              <span className={currency === 'USD' ? 'font-bold text-[#7A1C31]' : 'text-[#8C827A]'}>
                USD
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
