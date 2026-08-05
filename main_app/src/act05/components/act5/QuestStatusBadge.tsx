import React from 'react';
import { QuestStatus } from '../../types/act5';
import { StatusBadge } from './StatusBadge';

interface QuestStatusBadgeProps {
  status: QuestStatus;
}

export const QuestStatusBadge: React.FC<QuestStatusBadgeProps> = ({ status }) => {
  return <StatusBadge status={status} />;
};
