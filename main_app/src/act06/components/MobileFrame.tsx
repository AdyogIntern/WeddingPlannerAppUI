import React from 'react';
import { colors } from '../theme';

interface MobileFrameProps {
  children: React.ReactNode;
  label: string;
  sublabel?: string;
  isDarkTheme?: boolean;
  rightHeaderText?: string;
  onRightHeaderPress?: () => void;
  scale?: number;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  children,
  label,
  sublabel,
  isDarkTheme = false,
  scale = 1,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Clean Mobile Screen Container without 3D outer phone shell */}
      <div 
        className="relative w-full max-w-[430px] rounded-2xl shadow-md border border-[#E0D6C5] overflow-hidden flex flex-col transition-all"
        style={{
          height: '680px',
          maxHeight: '82vh',
          backgroundColor: isDarkTheme ? colors.welcomeBackground : colors.questionBackground,
          transform: scale !== 1 ? `scale(${scale})` : undefined,
          transformOrigin: 'top center',
        }}
      >
        {/* Screen Content Viewport */}
        <div className="flex-1 overflow-hidden relative flex flex-col w-full h-full">
          {children}
        </div>
      </div>

      {/* Screen Label (matching PDF Screen captions) */}
      <div className="mt-3 text-center max-w-[320px]">
        <h4 className="text-xs font-semibold text-gray-800 tracking-tight">
          {label}
        </h4>
        {sublabel && (
          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
};

