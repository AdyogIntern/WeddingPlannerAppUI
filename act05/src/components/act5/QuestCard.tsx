import React from 'react';
import { CheckCircle2, Clock, Users, ChevronRight } from 'lucide-react';
import { Quest } from '../../types/act5';
import { QuestStatusBadge } from './QuestStatusBadge';
import { ContributionAvatar } from './ContributionAvatar';

interface QuestCardProps {
  quest: Quest;
  onPress?: () => void;
  onComplete?: () => void;
}

export const QuestCard: React.FC<QuestCardProps> = ({
  quest,
  onPress,
  onComplete
}) => {
  const isCompleted = quest.status === 'completed';

  return (
    <div 
      className={`bg-white rounded-xl p-4 border transition-all ${
        isCompleted ? 'border-[#2D6A4F]/30 bg-[#FBFDFB]' : 'border-[#E6DFC8] shadow-2xs hover:border-[#681D2A]/30'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <QuestStatusBadge status={quest.status} />
            <span className="text-xs text-[#98928B] font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {quest.periodInfo}
            </span>
          </div>

          <h4 className="text-base font-bold text-[#231F20] mt-1">{quest.title}</h4>
          <p className="text-xs text-[#68625D] mt-1 leading-relaxed">{quest.description}</p>
        </div>

        {onPress && (
          <button 
            onClick={onPress}
            className="p-1 text-[#98928B] hover:text-[#681D2A] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Assignee & Progress bar */}
      <div className="mt-4 pt-3 border-t border-[#EFE8D8] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ContributionAvatar member={quest.assignedMember} size="sm" />
          <div>
            <p className="text-xs font-semibold text-[#231F20]">{quest.assignedMember.name}</p>
            <p className="text-[10px] text-[#68625D]">{quest.assignedMember.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs font-bold font-serif text-[#681D2A]">
              {quest.progress} / {quest.maxProgress}
            </span>
            <p className="text-[10px] text-[#98928B]">Task Progress</p>
          </div>

          {!isCompleted && onComplete && (
            <button
              onClick={onComplete}
              className="px-3 py-1.5 bg-[#2D6A4F] hover:bg-[#1E513B] text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mark Done</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
