import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  onActionPress?: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  actionText,
  onActionPress
}) => {
  return (
    <div className="flex items-end justify-between mb-3">
      <div>
        <h3 className="text-base font-bold font-serif text-[#231F20] tracking-tight">{title}</h3>
        {subtitle && <p className="text-xs text-[#68625D] mt-0.5">{subtitle}</p>}
      </div>

      {actionText && onActionPress && (
        <button
          onClick={onActionPress}
          className="text-xs font-semibold text-[#681D2A] hover:underline cursor-pointer"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
