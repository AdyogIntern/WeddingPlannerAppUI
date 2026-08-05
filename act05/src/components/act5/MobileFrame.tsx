import React, { useState } from 'react';
import { Wifi, Battery, ChevronLeft, Smartphone, Monitor } from 'lucide-react';
import { Act5ScreenId } from '../../types/act5';
import { BottomNavigation } from './BottomNavigation';

interface MobileFrameProps {
  children: React.ReactNode;
  currentScreen: Act5ScreenId;
  screenTitle: string;
  onBackPress?: () => void;
  onSelectTab: (tab: 'home' | 'quests' | 'rewards' | 'more') => void;
  toastMessage?: string | null;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  children,
  currentScreen,
  screenTitle,
  onBackPress,
  onSelectTab,
  toastMessage
}) => {
  const [isDeviceFrame, setIsDeviceFrame] = useState<boolean>(true);

  const showBackButton = currentScreen !== 'home';

  return (
    <div className="min-h-screen bg-[#121110] text-[#231F20] flex flex-col items-center justify-start p-2 sm:p-6 font-sans">
      {/* Top Controls Bar for Preview Comfort */}
      <div className="w-full max-w-md mb-3 flex items-center justify-between px-2 text-white/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DFBA75] animate-pulse" />
          <span className="font-semibold text-white tracking-wide">Act 5 — Progress, Not Points</span>
        </div>

        <button
          onClick={() => setIsDeviceFrame(!isDeviceFrame)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-[11px] transition-colors cursor-pointer"
        >
          {isDeviceFrame ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
          <span>{isDeviceFrame ? 'Fluid Mode' : 'Device Frame'}</span>
        </button>
      </div>

      {/* Main Mobile Frame Container */}
      <div 
        className={`w-full bg-[#FAF6F0] flex flex-col transition-all duration-300 overflow-hidden relative ${
          isDeviceFrame 
            ? 'max-w-[412px] h-[850px] rounded-[44px] shadow-2xl border-[10px] border-[#2A2725] ring-1 ring-white/10' 
            : 'max-w-md min-h-[780px] rounded-2xl shadow-xl border border-[#E6DFC8]'
        }`}
      >
        {/* Device Status Bar (Mock Native iOS/Android Header) */}
        {isDeviceFrame && (
          <div className="bg-[#681D2A] text-white px-6 pt-3 pb-1 flex items-center justify-between text-xs shrink-0 select-none">
            <span className="font-semibold font-mono tracking-tight">9:41</span>
            {/* Notch indicator */}
            <div className="w-20 h-4 bg-black/40 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black/80" />
            </div>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4" />
            </div>
          </div>
        )}

        {/* Mobile App Navigation Header */}
        <div className="bg-[#681D2A] text-white px-4 py-3 flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-2">
            {showBackButton ? (
              <button
                onClick={onBackPress}
                className="p-1 -ml-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Go Back"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            ) : (
              <div className="w-2 h-2 rounded-full bg-[#DFBA75]" />
            )}
            <div>
              <h1 className="text-base font-bold font-serif leading-tight">{screenTitle}</h1>
              <p className="text-[10px] text-[#F0D399]">Priya & Arjun • NRI Wedding</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[11px] font-semibold bg-[#4A121D] text-[#F0D399] px-2 py-0.5 rounded-full border border-[#DFBA75]/30">
              Act 5
            </span>
          </div>
        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="absolute top-16 left-4 right-4 z-50 bg-[#231F20] text-white text-xs px-4 py-2.5 rounded-xl shadow-xl border border-[#DFBA75] flex items-center justify-between animate-fade-in">
            <span className="font-medium">{toastMessage}</span>
            <span className="text-[#DFBA75] font-bold">✓</span>
          </div>
        )}

        {/* Screen Content Scrollable Viewport */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {children}
        </div>

        {/* Bottom Mobile Tab Bar */}
        <BottomNavigation 
          currentScreen={currentScreen} 
          onSelectTab={onSelectTab} 
        />
      </div>
    </div>
  );
};
