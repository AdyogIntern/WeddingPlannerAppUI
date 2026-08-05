import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Color Palette Constants matching PDF
export const COLORS = {
  bgCanvas: '#FBF9F5',
  bgCard: '#F2ECE1',
  bgCardLight: '#FAF7F0',
  bgCallout: '#F8EDE9',
  borderCallout: '#F0E2DE',
  borderSubtle: '#E2D8C8',
  borderActive: '#7A2234',
  primaryMaroon: '#7A2234',
  primaryMaroonHover: '#621B29',
  textDark: '#2B2523',
  textMuted: '#786E65',
  textLight: '#91877E',
  greenBadge: '#15803D',
  greenBadgeBg: '#DCFCE7',
  yellowBadge: '#D97706',
  yellowBadgeBg: '#FEF3C7',
};

// 1. Explanatory Callout Box at bottom of screens
export const CalloutBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-[#F8EDE9] border border-[#F2E3DF] rounded-2xl p-3.5 text-[12.5px] leading-relaxed text-[#5C4D48] ${className}`}>
    {children}
  </div>
);

// 2. Main Title (Serif)
export const SerifTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h1 className={`font-serif-title text-[28px] leading-tight font-normal text-[#2B2523] tracking-tight ${className}`}>
    {children}
  </h1>
);

// 3. Subtitle / Label
export const TextMuted: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-[12.5px] text-[#786E65] ${className}`}>
    {children}
  </p>
);

// 4. Primary Maroon CTA Button
export const PrimaryButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}> = ({ children, onClick, className = '', disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3.5 px-4 bg-[#7A2234] hover:bg-[#621B29] active:bg-[#521622] text-white font-medium text-[14.5px] rounded-2xl shadow-xs transition-colors duration-150 flex items-center justify-center text-center cursor-pointer ${className}`}
  >
    {children}
  </button>
);

// 5. Outline / Secondary Button
export const OutlineButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`w-full py-3 px-4 bg-[#FBF9F5] border border-[#DCD3C5] hover:bg-[#F2ECE1] text-[#2B2523] font-medium text-[13.5px] rounded-2xl transition-colors duration-150 flex items-center justify-center text-center cursor-pointer ${className}`}
  >
    {children}
  </button>
);

// 6. Pill Tag
export const TagPill: React.FC<{
  label: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'green' | 'yellow' | 'active';
}> = ({ label, active = false, onClick, className = '', variant = 'default' }) => {
  let styleClasses = 'bg-[#F2ECE1] text-[#2B2523] border border-transparent';
  
  if (active || variant === 'active') {
    styleClasses = 'bg-[#7A2234] text-white border border-[#7A2234]';
  } else if (variant === 'green') {
    styleClasses = 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-medium';
  } else if (variant === 'yellow') {
    styleClasses = 'bg-amber-50 text-amber-800 border border-amber-200/60 font-medium';
  }

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-3 py-1.5 rounded-xl text-[12px] font-normal transition-all cursor-pointer whitespace-nowrap ${styleClasses} ${className}`}
    >
      {label}
    </button>
  );
};

// 7. Standard Screen Header Bar
export const ScreenHeader: React.FC<{
  backText?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  className?: string;
}> = ({ backText, onBack, rightAction, className = '' }) => (
  <div className={`flex items-center justify-between pt-1 pb-1 text-[13px] font-medium text-[#2B2523] ${className}`}>
    <div className="flex items-center gap-1.5 min-w-[70px]">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-[#2B2523] hover:opacity-70 transition-opacity cursor-pointer text-[13px]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {backText && <span>{backText}</span>}
        </button>
      )}
    </div>

    <div className="text-right min-w-[70px] flex justify-end">
      {rightAction}
    </div>
  </div>
);

// 8. Custom Toggle Switch
export const ToggleSwitch: React.FC<{
  checked: boolean;
  onChange?: (checked: boolean) => void;
}> = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={() => onChange && onChange(!checked)}
    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
      checked ? 'bg-[#7A2234]' : 'bg-[#E5DEC3]'
    }`}
  >
    <span
      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
        checked ? 'translate-x-5' : 'translate-x-0'
      }`}
    />
  </button>
);

// 9. Rating Bar Component
export const RatingBar: React.FC<{ label: string; score: number; max?: number }> = ({ label, score, max = 5 }) => {
  const percentage = Math.min(100, Math.max(0, (score / max) * 100));
  return (
    <div className="flex items-center justify-between text-[13px] py-1">
      <span className="text-[#2B2523] w-32 font-normal">{label}</span>
      <div className="flex-1 mx-3 h-2 bg-[#EADECB] rounded-full overflow-hidden">
        <div className="h-full bg-[#7A2234] rounded-full" style={{ width: `${percentage}%` }} />
      </div>
      <span className="text-[#2B2523] font-medium text-right w-6">{score.toFixed(1)}</span>
    </div>
  );
};

// 10. Avatar Group
export const AvatarGroup: React.FC<{ count?: number; names?: string[] }> = () => (
  <div className="flex -space-x-1.5 overflow-hidden">
    <div className="inline-block h-5 w-5 rounded-full ring-1 ring-white bg-[#D5C7B3] text-[9px] flex items-center justify-center font-medium text-[#524639]">A</div>
    <div className="inline-block h-5 w-5 rounded-full ring-1 ring-white bg-[#C2B29A] text-[9px] flex items-center justify-center font-medium text-[#524639]">A</div>
    <div className="inline-block h-5 w-5 rounded-full ring-1 ring-white bg-[#AF9E85] text-[9px] flex items-center justify-center font-medium text-[#524639]">M</div>
  </div>
);
