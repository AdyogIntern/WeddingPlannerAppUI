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
    <div className="w-full h-full bg-[#FAF6F0] flex flex-col relative overflow-hidden">
        {/* Mobile App Navigation Header */}
        {currentScreen !== 'home' && (
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
        )}

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="absolute top-16 left-4 right-4 z-50 bg-[#231F20] text-white text-xs px-4 py-2.5 rounded-xl shadow-xl border border-[#DFBA75] flex items-center justify-between animate-fade-in">
            <span className="font-medium">{toastMessage}</span>
            <span className="text-[#DFBA75] font-bold">✓</span>
          </div>
        )}

        {/* Screen Content Scrollable Viewport */}
        <div className={`flex-1 overflow-y-auto ${currentScreen === 'home' ? '' : 'p-4 space-y-4'}`}>
          {children}
        </div>

        {/* Bottom Mobile Tab Bar */}
        <BottomNavigation 
          currentScreen={currentScreen} 
          onSelectTab={onSelectTab} 
        />
    </div>
  );
};
