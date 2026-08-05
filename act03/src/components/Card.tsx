import React from 'react';

interface CardProps {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  selected = false,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-4 shadow-2xs transition-all duration-150 ${
        selected
          ? 'border-2 border-[#7B1D21]'
          : 'border border-[#E5E1D8]'
      } ${onClick ? 'cursor-pointer hover:border-[#7B1D21]/50' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
