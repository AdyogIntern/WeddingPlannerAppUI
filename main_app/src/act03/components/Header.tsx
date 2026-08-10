import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, actions, showBackButton = true }) => {
  const navigate = useNavigate();

  return (
    <header className="pt-5 px-5 pb-4 bg-[#FDFCF0] border-b border-[#E5E1D8]">
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E5E1D8] bg-white text-[#867A6E] hover:text-[#2C2420] hover:border-[#7B1D21] transition-all mb-3.5 cursor-pointer shadow-3xs"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      <div className="flex items-end justify-between gap-2">
        <div>
          <h1 className="font-serif text-[30px] sm:text-[32px] font-normal text-[#2C2420] tracking-tight leading-none">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[13px] text-[#867A6E] mt-1.5 font-normal">
              {subtitle}
            </p>
          )}
        </div>
        {actions && <div className="flex gap-1.5 pb-0.5">{actions}</div>}
      </div>
    </header>
  );
};
