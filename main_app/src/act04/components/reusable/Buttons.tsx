import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  icon,
  fullWidth = true,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${
        fullWidth ? 'w-full' : ''
      } bg-[#7A1C31] hover:bg-[#631426] active:bg-[#520F1F] text-white py-3.5 px-6 rounded-xl font-medium text-[15px] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] cursor-pointer disabled:opacity-50 ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export const SecondaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  icon,
  fullWidth = true,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${
        fullWidth ? 'w-full' : ''
      } bg-white hover:bg-[#FAF7F2] active:bg-[#F2ECE4] border border-[#E5DFD5] text-[#1A1613] py-3.5 px-6 rounded-xl font-medium text-[15px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
