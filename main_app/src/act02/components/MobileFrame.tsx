import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
  scale?: number;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  return (
    <div className="w-full flex-1 flex flex-col bg-[#FBF9F5] min-h-screen">
      <div className="flex-1 px-4 pt-4 pb-6 flex flex-col relative bg-[#FBF9F5]">
        {children}
      </div>
    </div>
  );
};
