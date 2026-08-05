import React from 'react';

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  color?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  percentage,
  size = 140,
  strokeWidth = 12,
  label,
  sublabel,
  color = '#800020'
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E8E2D9"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Arc */}
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
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {/* Inner Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
        <span className="text-3xl font-bold font-serif text-[#1E1B18] tracking-tight">
          {percentage}%
        </span>
        {label && <span className="text-xs font-medium text-[#625D58] mt-0.5">{label}</span>}
        {sublabel && <span className="text-[10px] text-[#969089] uppercase tracking-wider">{sublabel}</span>}
      </div>
    </div>
  );
};
