import React from 'react';

interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  active = true,
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
        active
          ? 'bg-[#7B1D21] text-white'
          : 'bg-white border border-[#E5E1D8] text-[#2C2420] hover:bg-[#FDFCF0]'
      } ${className}`}
    >
      {label}
    </button>
  );
};
