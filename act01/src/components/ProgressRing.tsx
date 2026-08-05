import React from 'react';
import { theme } from '../theme';

interface ProgressRingProps {
  progress: number; // 0..100
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  label?: string;
  sublabel?: string;
  color?: string;
  trackColor?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 72,
  strokeWidth = 6,
  showLabel = true,
  label = `${progress}%`,
  sublabel = 'planned',
  color = theme.colors.primary,
  trackColor = '#EFE7DC',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          style={{ transition: 'stroke-dashoffset 0.8s ease' }}
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-xs font-bold leading-none text-[#1D1D1F]">
            {label}
          </span>
          {sublabel && (
            <span className="text-[9px] text-[#666666] font-medium leading-none mt-0.5">
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
