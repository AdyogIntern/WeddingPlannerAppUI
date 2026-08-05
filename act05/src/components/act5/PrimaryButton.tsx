import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'maroon' | 'green' | 'gold';
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  fullWidth = true,
  disabled = false,
  icon,
  size = 'md',
  variant = 'maroon'
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3.5 text-base'
  };

  const variantClasses = {
    maroon: 'bg-[#681D2A] hover:bg-[#4A121D] text-white',
    green: 'bg-[#2D6A4F] hover:bg-[#1E513B] text-white',
    gold: 'bg-[#DFBA75] hover:bg-[#B89243] text-[#231F20]'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${fullWidth ? 'w-full' : ''} ${sizeClasses[size]} ${variantClasses[variant]} font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};
