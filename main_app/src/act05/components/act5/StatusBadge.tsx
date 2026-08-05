import React from 'react';

export type StatusVariant = 'completed' | 'in_progress' | 'waiting' | 'not_started' | 'locked' | 'available' | 'redeemed';

interface StatusBadgeProps {
  status: StatusVariant;
  customText?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, customText }) => {
  const getStyles = (): { bg: string; text: string; label: string; dot?: string } => {
    switch (status) {
      case 'completed':
        return { bg: 'bg-[#E8F3ED]', text: 'text-[#2D6A4F]', label: 'Completed', dot: 'bg-[#2D6A4F]' };
      case 'in_progress':
        return { bg: 'bg-[#FFF9EB]', text: 'text-[#681D2A]', label: 'In Progress', dot: 'bg-[#DFBA75]' };
      case 'waiting':
        return { bg: 'bg-[#EFF6FF]', text: 'text-[#1E40AF]', label: 'Waiting', dot: 'bg-[#3B82F6]' };
      case 'not_started':
        return { bg: 'bg-[#F3F4F6]', text: 'text-[#4B5563]', label: 'Not Started', dot: 'bg-[#9CA3AF]' };
      case 'available':
        return { bg: 'bg-[#E8F3ED]', text: 'text-[#2D6A4F]', label: 'AVAILABLE', dot: 'bg-[#2D6A4F]' };
      case 'redeemed':
        return { bg: 'bg-[#F0D399]', text: 'text-[#681D2A]', label: 'REDEEMED' };
      case 'locked':
      default:
        return { bg: 'bg-[#F3F4F6]', text: 'text-[#6B7280]', label: 'LOCKED' };
    }
  };

  const { bg, text, label, dot } = getStyles();

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${bg} ${text} tracking-tight`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />}
      {customText || label}
    </span>
  );
};
