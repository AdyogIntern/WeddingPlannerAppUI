import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  onPress: () => void;
  badgeText?: string;
  badgeColor?: string;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  onPress,
  badgeText,
  badgeColor = 'bg-[#681D2A]'
}) => {
  return (
    <button
      onClick={onPress}
      className="w-full bg-white p-3.5 rounded-xl border border-[#E6DFC8] shadow-2xs hover:border-[#681D2A]/40 transition-all flex items-center justify-between text-left cursor-pointer group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#F8ECEE] group-hover:bg-[#681D2A] transition-colors flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-[#681D2A] group-hover:text-white transition-colors" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#231F20]">{title}</h4>
          {subtitle && <p className="text-[11px] text-[#68625D] mt-0.5">{subtitle}</p>}
        </div>
      </div>

      {badgeText && (
        <span className={`text-[10px] text-white font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
          {badgeText}
        </span>
      )}
    </button>
  );
};
