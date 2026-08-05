import React, { useState } from 'react';
import { Users, Plus, CheckCircle2 } from 'lucide-react';
import { Quest, QuestStatus } from '../../types/act5';
import { QuestCard } from '../../components/act5/QuestCard';

interface QuestsScreenProps {
  quests: Quest[];
  onSelectQuest: (questId: string) => void;
  onCompleteQuest: (questId: string) => void;
}

export const QuestsScreen: React.FC<QuestsScreenProps> = ({
  quests,
  onSelectQuest,
  onCompleteQuest
}) => {
  const [filter, setFilter] = useState<'all' | QuestStatus>('all');

  const filteredQuests = quests.filter((q) => {
    if (filter === 'all') return true;
    return q.status === filter;
  });

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#F8ECEE] flex items-center justify-center text-[#681D2A]">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold font-serif text-[#231F20]">This Month's Family Quests</h2>
            <p className="text-xs text-[#68625D]">Collaborative milestones assigned to family members</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {[
          { id: 'all', label: 'All Quests' },
          { id: 'in_progress', label: 'In Progress' },
          { id: 'waiting', label: 'Waiting Approval' },
          { id: 'completed', label: 'Completed' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              filter === tab.id 
                ? 'bg-[#681D2A] text-white shadow-xs' 
                : 'bg-white text-[#68625D] border border-[#E6DFC8] hover:bg-[#FAF6F0]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Quests List */}
      {filteredQuests.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-xl border border-[#E6DFC8]">
          <CheckCircle2 className="w-8 h-8 text-[#98928B] mx-auto mb-2" />
          <p className="text-sm font-semibold text-[#231F20]">No family quests in this view</p>
          <p className="text-xs text-[#68625D] mt-1">Switch filters or create a new planning milestone.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredQuests.map((quest) => (
            <QuestCard 
              key={quest.id} 
              quest={quest} 
              onPress={() => onSelectQuest(quest.id)}
              onComplete={() => onCompleteQuest(quest.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
