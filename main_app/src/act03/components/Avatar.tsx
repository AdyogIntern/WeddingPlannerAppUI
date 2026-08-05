import React from 'react';

interface AvatarProps {
  initials: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({ initials, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7 text-[10px]',
    md: 'w-9 h-9 text-xs',
    lg: 'w-11 h-11 text-sm',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-[#C8B99C] text-white font-bold flex items-center justify-center flex-shrink-0 shadow-2xs ${className}`}
    >
      {initials}
    </div>
  );
};
