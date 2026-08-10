import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#ECE5DB] text-[#1A1613] flex justify-center items-start sm:py-6 sm:px-4">
      <div className="w-full max-w-[420px] bg-[#FAF7F2] min-h-screen sm:min-h-[850px] sm:rounded-[36px] sm:border sm:border-[#DCD3C5] sm:shadow-2xl overflow-hidden flex flex-col justify-between relative">
        {children}
      </div>
    </div>
  );
};
