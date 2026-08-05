import React from 'react';

interface ProgressBarProps {
  percentage: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  showMilestoneTicks?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  height = 10,
  color = '#681D2A',
  backgroundColor = '#E6DFC8',
  showMilestoneTicks = false
}) => {
  const clamped = Math.min(100, Math.max(0, percentage));

  return (
    <div className="relative w-full">
      <div 
        className="w-full rounded-full overflow-hidden relative"
        style={{ height, backgroundColor }}
      >
        <div 
          className="h-full transition-all duration-500 ease-out rounded-full"
          style={{ width: `${clamped}%`, backgroundColor: color }}
        />
      </div>

      {showMilestoneTicks && (
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none flex justify-between px-1">
          {[25, 50, 75].map((tick) => (
            <div 
              key={tick} 
              className="absolute top-0 bottom-0 w-0.5 bg-white/70 shadow-xs" 
              style={{ left: `${tick}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
