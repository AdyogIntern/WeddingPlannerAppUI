import React from 'react';
import { FamilyMember } from '../../types/act5';

interface ContributionAvatarProps {
  member: FamilyMember;
  size?: 'sm' | 'md' | 'lg';
}

export const ContributionAvatar: React.FC<ContributionAvatarProps> = ({
  member,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const roleColors: Record<string, string> = {
    'Bride': 'bg-[#F8ECEE] text-[#681D2A] border-[#7A2232]',
    'Groom': 'bg-[#EFF6FF] text-[#1E40AF] border-[#3B82F6]',
    'Parent (Appa)': 'bg-[#E8F3ED] text-[#2D6A4F] border-[#3A8563]',
    'Parent (Amma)': 'bg-[#FFF9EB] text-[#B89243] border-[#DFBA75]',
    'Sibling': 'bg-[#F3E8FF] text-[#6B21A8] border-[#A855F7]',
    'Grandparent': 'bg-[#FFF9EB] text-[#681D2A] border-[#DFBA75]',
  };

  const colorClass = roleColors[member.role] || 'bg-[#F3F4F6] text-[#374151] border-[#9CA3AF]';

  return (
    <div 
      className={`rounded-full border-2 flex items-center justify-center font-bold font-serif shrink-0 ${sizeClasses[size]} ${colorClass}`}
      title={`${member.name} (${member.role})`}
    >
      {member.initials}
    </div>
  );
};
