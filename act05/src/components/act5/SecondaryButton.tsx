import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  fullWidth = true,
  disabled = false,
  icon,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3.5 text-base'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${fullWidth ? 'w-full' : ''} ${sizeClasses[size]} bg-white border border-[#E6DFC8] text-[#231F20] font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#FAF6F0] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};
