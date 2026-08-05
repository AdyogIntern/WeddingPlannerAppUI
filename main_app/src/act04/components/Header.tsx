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
    <div className="pt-3 pb-3 px-5 bg-[#FAF7F2] sticky top-0 z-30">
      {/* Top Bar row: Back link on left, status/meta/currency on right */}
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
          ) : onToggleCurrency ? (
            <button
              onClick={onToggleCurrency}
              className="text-[#8C827A] font-normal text-[12px] hover:text-[#1A1613] transition-colors cursor-pointer tracking-tight"
            >
              INR ⇄ USD
            </button>
          ) : (
            <span className="text-[#8C827A] font-semibold text-[11px]">9:41</span>
          )}
        </div>
      </div>

      {/* Main Title Row */}
      {(title || subtitle) && (
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
      )}
    </div>
  );
};
