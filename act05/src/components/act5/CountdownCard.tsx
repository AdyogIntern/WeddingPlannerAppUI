import React from 'react';
import { Calendar, CheckSquare, Square, ArrowRight, MapPin } from 'lucide-react';
import { WeddingCountdown } from '../../types/act5';
import { ProgressBar } from './ProgressBar';

interface CountdownCardProps {
  countdown: WeddingCountdown;
  onContinuePlanning?: () => void;
  onTogglePriority?: (priorityId: string) => void;
  onDateChange?: (newDate: string) => void;
}

export const CountdownCard: React.FC<CountdownCardProps> = ({
  countdown,
  onContinuePlanning,
  onTogglePriority,
  onDateChange
}) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-[#E6DFC8] shadow-2xs space-y-4">
      {/* Primary Countdown Header */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-[#681D2A] to-[#4A121D] text-white flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest font-medium text-[#F0D399]">
            Wedding Countdown
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-extrabold font-serif tracking-tight text-white">
              {countdown.daysRemaining}
            </span>
            <span className="text-sm font-semibold text-[#F0D399] uppercase tracking-wider">
              Days To Go
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2 text-xs text-white/80">
            <MapPin className="w-3.5 h-3.5 text-[#DFBA75]" />
            <span>{countdown.targetCity}</span>
            <span>•</span>
            <Calendar className="w-3.5 h-3.5 text-[#DFBA75]" />
            <span>{countdown.weddingDateISO}</span>
          </div>
        </div>

        {/* Date Selector Quick Input */}
        {onDateChange && (
          <div className="text-right">
            <label className="text-[10px] text-[#F0D399] block mb-1">Set Date</label>
            <input 
              type="date" 
              value={countdown.weddingDateISO}
              onChange={(e) => onDateChange(e.target.value)}
              className="bg-white/10 text-white text-xs px-2 py-1 rounded border border-white/20 focus:outline-hidden"
            />
          </div>
        )}
      </div>

      {/* Progress Sync Banner */}
      <div>
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-semibold text-[#231F20]">Planning Completeness</span>
          <span className="font-bold font-serif text-[#681D2A]">{countdown.overallProgressPercentage}%</span>
        </div>
        <ProgressBar percentage={countdown.overallProgressPercentage} height={8} />
      </div>

      {/* This Month's Priorities Checklist */}
      <div className="pt-2">
        <h4 className="text-xs font-bold text-[#68625D] uppercase tracking-wider mb-2">
          This Month's Priorities
        </h4>

        <div className="space-y-2">
          {countdown.monthlyPriorities.map((item) => (
            <div 
              key={item.id}
              onClick={() => onTogglePriority && onTogglePriority(item.id)}
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#FAF6F0] cursor-pointer transition-colors"
            >
              {item.completed ? (
                <CheckSquare className="w-4 h-4 text-[#2D6A4F]" />
              ) : (
                <Square className="w-4 h-4 text-[#98928B]" />
              )}
              <span className={`text-xs ${item.completed ? 'line-through text-[#68625D]' : 'text-[#231F20] font-medium'}`}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Important Decision Highlight */}
      <div className="p-3 bg-[#FFF9EB] border border-[#DFBA75]/40 rounded-lg flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#681D2A] tracking-wider">
            Next Important Decision
          </span>
          <p className="text-xs font-bold text-[#231F20] mt-0.5">
            "{countdown.nextImportantDecision}"
          </p>
        </div>

        {onContinuePlanning && (
          <button
            onClick={onContinuePlanning}
            className="px-3 py-1.5 bg-[#681D2A] hover:bg-[#4A121D] text-white text-xs font-bold rounded-lg flex items-center gap-1 transition-colors cursor-pointer shrink-0"
          >
            <span>Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
