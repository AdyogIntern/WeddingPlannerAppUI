import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = true,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'py-3.5 px-5 rounded-2xl text-[15px] font-semibold text-center transition-colors duration-150 flex items-center justify-center gap-2 active:scale-[0.99]';
  
  const variantStyles = {
    primary: 'bg-[#7B1D21] hover:bg-[#65171a] text-white shadow-2xs',
    secondary: 'bg-[#FDF1F1] hover:bg-[#f8e2e2] text-[#7B1D21] font-medium',
    outline: 'border border-[#E5E1D8] bg-white hover:bg-[#FDFCF0] text-[#2C2420] font-medium',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
