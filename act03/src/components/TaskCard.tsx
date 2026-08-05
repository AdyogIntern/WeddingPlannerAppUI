import React, { useState } from 'react';
import { Check } from 'lucide-react';

export interface TaskCardProps {
  id?: string;
  title: string;
  assigneeDate: string;
  status: 'overdue' | 'this_week' | 'completed';
  percentageBadge?: string;
  defaultChecked?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  assigneeDate,
  status,
  percentageBadge,
  defaultChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || status === 'completed');

  const isOverdue = status === 'overdue';
  const isDone = isChecked || status === 'completed';

  return (
    <div
      onClick={() => setIsChecked(!isChecked)}
      className={`rounded-2xl p-3.5 flex items-center gap-3 transition-colors cursor-pointer ${
        isOverdue
          ? 'bg-white border border-[#FAD2D2] shadow-2xs'
          : 'bg-white border border-[#E5E1D8] shadow-2xs'
      } ${isDone ? 'opacity-90' : ''}`}
    >
      {/* Custom Checkbox */}
      <div
        className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
          isDone
            ? 'bg-[#A85B6C] text-white border-none'
            : isOverdue
            ? 'border-2 border-[#C02626] bg-transparent'
            : 'border-2 border-[#C8BEB0] bg-transparent'
        }`}
      >
        {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4
          className={`text-[14px] font-semibold leading-snug ${
            isDone
              ? 'line-through text-[#867A6E]'
              : 'text-[#2C2420]'
          }`}
        >
          {title}
        </h4>
        <p
          className={`text-[12px] mt-0.5 ${
            isOverdue && !isDone
              ? 'text-[#C02626] font-medium'
              : 'text-[#867A6E]'
          }`}
        >
          {assigneeDate}
        </p>
      </div>

      {/* Percentage Badge */}
      {percentageBadge && !isDone && (
        <span className="bg-[#FDF1F1] text-[#7B1D21] text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0">
          {percentageBadge}
        </span>
      )}
    </div>
  );
};
