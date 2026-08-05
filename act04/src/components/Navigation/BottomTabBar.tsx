import React from 'react';
import {
  PieChart,
  CalendarDays,
  ShieldCheck,
  Users,
  FileText,
  CheckCircle2
} from 'lucide-react';

export type ScreenId = 'screen25' | 'screen26' | 'screen27' | 'screen28' | 'screen29' | 'screen30';

interface BottomTabBarProps {
  activeScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeScreen,
  onSelectScreen
}) => {
  const tabs = [
    { id: 'screen25' as ScreenId, label: 'Budget', icon: PieChart },
    { id: 'screen26' as ScreenId, label: 'Schedule', icon: CalendarDays },
    { id: 'screen27' as ScreenId, label: 'Escrow', icon: ShieldCheck },
    { id: 'screen28' as ScreenId, label: 'Who Pays', icon: Users },
    { id: 'screen29' as ScreenId, label: 'Records', icon: FileText },
    { id: 'screen30' as ScreenId, label: 'Booking', icon: CheckCircle2 }
  ];

  return (
    <div className="bg-[#FAF7F2] border-t border-[#E8E2D9] py-2 px-2 sticky bottom-0 z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeScreen === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectScreen(tab.id)}
              className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-[#7A1C31] font-semibold scale-105'
                  : 'text-[#8C827A] hover:text-[#524B44]'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-colors ${
                  isActive ? 'bg-[#7A1C31]/10' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
