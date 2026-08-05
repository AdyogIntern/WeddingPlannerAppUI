import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, actions }) => {
  return (
    <header className="pt-6 px-5 pb-4 bg-[#FDFCF0] border-b border-[#E5E1D8]">
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
