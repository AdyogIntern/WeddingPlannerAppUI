import React, { useState } from 'react';
import { Header } from '../components/Header';
import { TaskCard } from '../components/TaskCard';

export const TasksPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mine' | 'overdue'>('all');

  const filterActions = (
    <div className="flex gap-1.5">
      <button
        type="button"
        onClick={() => setActiveFilter('all')}
        className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-colors ${
          activeFilter === 'all'
            ? 'bg-[#7B1D21] text-white'
            : 'bg-white border border-[#E5E1D8] text-[#2C2420] hover:bg-[#FDFCF0]'
        }`}
      >
        All 24
      </button>
      <button
        type="button"
        onClick={() => setActiveFilter('mine')}
        className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-colors ${
          activeFilter === 'mine'
            ? 'bg-[#7B1D21] text-white'
            : 'bg-white border border-[#E5E1D8] text-[#2C2420] hover:bg-[#FDFCF0]'
        }`}
      >
        Mine 7
      </button>
      <button
        type="button"
        onClick={() => setActiveFilter('overdue')}
        className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-colors ${
          activeFilter === 'overdue'
            ? 'bg-[#7B1D21] text-white'
            : 'bg-white border border-[#E5E1D8] text-[#2C2420] hover:bg-[#FDFCF0]'
        }`}
      >
        Overdue 2
      </button>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        title="Tasks"
        actions={filterActions}
      />

      <main className="p-5 flex-1 space-y-5 pb-24">
        {/* Section 1: Overdue */}
        {(activeFilter === 'all' || activeFilter === 'overdue') && (
          <div>
            <h2 className="text-[16px] font-semibold text-[#C02626] mb-2.5">
              Overdue
            </h2>
            <div className="space-y-2.5">
              <TaskCard
                title="Confirm guest count for Reception"
                assigneeDate="Appa · 4 days late"
                status="overdue"
              />
              <TaskCard
                title="Send passport copies for visa letters"
                assigneeDate="Priya · 2 days late"
                status="overdue"
              />
            </div>
          </div>
        )}

        {/* Section 2: This week */}
        {(activeFilter === 'all' || activeFilter === 'mine') && (
          <div>
            <h2 className="text-[16px] font-semibold text-[#2C2420] mt-6 mb-2.5">
              This week
            </h2>
            <div className="space-y-2.5">
              <TaskCard
                title="Book mehendi artist"
                assigneeDate="Meera · Fri"
                status="this_week"
                percentageBadge="+3%"
              />
              <TaskCard
                title="Approve Muhurtham venue"
                assigneeDate="Appa · Fri"
                status="this_week"
                percentageBadge="+12%"
              />
              <TaskCard
                title="Pick the wedding hashtag"
                assigneeDate="Meera · Sun"
                status="this_week"
              />
            </div>
          </div>
        )}

        {/* Section 3: Done this month */}
        {activeFilter === 'all' && (
          <div>
            <h2 className="text-[16px] font-semibold text-[#2C2420] mt-6 mb-2.5">
              Done this month · 11
            </h2>
            <div className="space-y-2.5">
              <TaskCard
                title="Lock the catering menu"
                assigneeDate=""
                status="completed"
                defaultChecked={true}
              />
              <TaskCard
                title="Book the purohit"
                assigneeDate=""
                status="completed"
                defaultChecked={true}
              />
            </div>
          </div>
        )}

        {/* Footer Info Box */}
        <div className="bg-[#FDF1F1] p-4 rounded-xl text-[#7C6E63] text-[12px] leading-relaxed mt-6">
          Tasks are generated from your Blueprint and the countdown — you don't have to invent the list.
        </div>
      </main>
    </div>
  );
};
