import React from 'react';
import { Users, Clock, CheckCircle2, UserCheck, ArrowLeft } from 'lucide-react';
import { Quest } from '../../types/act5';
import { QuestStatusBadge } from '../../components/act5/QuestStatusBadge';
import { ContributionAvatar } from '../../components/act5/ContributionAvatar';
import { PrimaryButton } from '../../components/act5/PrimaryButton';

interface QuestDetailsScreenProps {
  quest: Quest;
  onBack: () => void;
  onComplete: () => void;
}

export const QuestDetailsScreen: React.FC<QuestDetailsScreenProps> = ({
  quest,
  onBack,
  onComplete
}) => {
  const isCompleted = quest.status === 'completed';

  return (
    <div className="space-y-4">
      {/* Top Back Navigation Bar */}
      <button 
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs font-semibold text-[#681D2A] hover:underline cursor-pointer mb-1"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Quests</span>
      </button>

      {/* Main Details Card */}
      <div className="bg-white rounded-xl p-5 border border-[#E6DFC8] shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <QuestStatusBadge status={quest.status} />
          <span className="text-xs text-[#98928B] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {quest.periodInfo}
          </span>
        </div>

        <div>
          <h2 className="text-xl font-bold font-serif text-[#231F20]">{quest.title}</h2>
          <p className="text-sm text-[#68625D] mt-2 leading-relaxed">{quest.description}</p>
        </div>

        {/* Assignee Information */}
        <div className="p-3 bg-[#FAF6F0] border border-[#E6DFC8] rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ContributionAvatar member={quest.assignedMember} size="lg" />
            <div>
              <span className="text-[10px] text-[#98928B] uppercase tracking-wider block">Assigned Member</span>
              <h4 className="text-sm font-bold text-[#231F20]">{quest.assignedMember.name}</h4>
              <p className="text-xs text-[#681D2A]">{quest.assignedMember.role} • {quest.assignedMember.location}</p>
            </div>
          </div>
        </div>

        {/* Task Progress Counter */}
        <div className="p-3 bg-[#FFF9EB] border border-[#DFBA75]/40 rounded-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-[#681D2A]">Task Progress</span>
            <p className="text-xs text-[#68625D] mt-0.5">Completed steps toward planning decision</p>
          </div>
          <span className="text-xl font-bold font-serif text-[#681D2A]">
            {quest.progress} / {quest.maxProgress}
          </span>
        </div>

        {/* Collaboration Note */}
        <div className="p-3 bg-[#E8F3ED] text-[#2D6A4F] rounded-lg text-xs leading-relaxed">
          <strong>Family Collaboration:</strong> Completing this quest logs an entry on the Family Contribution Wall and advances overall wedding planning percentage.
        </div>

        {/* Actions */}
        {!isCompleted ? (
          <PrimaryButton
            onClick={() => {
              onComplete();
              onBack();
            }}
            variant="green"
            icon={<CheckCircle2 className="w-4 h-4" />}
          >
            Mark Quest Completed
          </PrimaryButton>
        ) : (
          <div className="p-3 bg-[#E8F3ED] text-[#2D6A4F] font-bold text-center text-xs rounded-xl flex items-center justify-center gap-2">
            <UserCheck className="w-4 h-4" />
            <span>This Quest Has Been Completed</span>
          </div>
        )}
      </div>
    </div>
  );
};
