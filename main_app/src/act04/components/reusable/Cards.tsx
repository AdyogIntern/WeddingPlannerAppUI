import React from 'react';
import { Download, FileText, CheckCircle2, ChevronRight, AlertCircle, Info, ShieldCheck } from 'lucide-react';

interface InfoCardProps {
  children: React.ReactNode;
  variant?: 'cream' | 'gold' | 'maroon' | 'green';
  className?: string;
  icon?: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  children,
  variant = 'cream',
  className = '',
  icon
}) => {
  const bgStyles = {
    cream: 'bg-[#F4EFEA] border-[#E8E2D9] text-[#4A423B]',
    gold: 'bg-[#FFFDF7] border-[#E3D1A6] text-[#7A5B00]',
    maroon: 'bg-[#7A1C31] border-[#631426] text-white',
    green: 'bg-[#F2F9F4] border-[#C8E6C9] text-[#2E7D32]'
  }[variant];

  return (
    <div
      className={`p-4 rounded-2xl border ${bgStyles} text-[13px] leading-relaxed transition-all ${className}`}
    >
      <div className="flex items-start gap-2.5">
        {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

interface DocumentCardProps {
  title: string;
  details: string;
  amount?: string;
  onDownload?: () => void;
  onPreview?: () => void;
  badgeText?: string;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  details,
  onDownload,
  onPreview,
  badgeText
}) => {
  return (
    <div
      onClick={onPreview}
      className="p-3.5 bg-white border border-[#EBE5DC] rounded-2xl flex items-center justify-between hover:border-[#D5CBC0] transition-all cursor-pointer shadow-2xs group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#F4EFEA] flex items-center justify-center text-[#7A1C31] shrink-0">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-[14px] font-semibold text-[#1A1613] group-hover:text-[#7A1C31] transition-colors leading-tight">
            {title}
          </h4>
          <p className="text-[12px] text-[#7A716A] mt-0.5">{details}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {badgeText && (
          <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#F4EFEA] text-[#7A1C31] rounded-full">
            {badgeText}
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDownload?.();
          }}
          className="p-1.5 text-[#8C827A] hover:text-[#7A1C31] hover:bg-[#F4EFEA] rounded-lg transition-colors cursor-pointer"
          aria-label="Download document"
        >
          <Download className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

interface CurrencyCardProps {
  rateText: string;
  savingsText: string;
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  rateText,
  savingsText
}) => {
  return (
    <div className="p-4 bg-white border border-[#E3D1A6] rounded-2xl shadow-2xs">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[13px] font-medium text-[#625952]">
          USD → INR today
        </span>
        <span className="font-serif-title text-[20px] font-semibold text-[#1A1613]">
          {rateText}
        </span>
      </div>
      <p className="text-[12px] text-[#2E7D32] leading-snug font-medium">
        {savingsText}
      </p>
    </div>
  );
};
