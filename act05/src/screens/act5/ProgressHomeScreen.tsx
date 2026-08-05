import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Gift, 
  ChevronRight,
  Info,
  Clock,
  Layers,
  Heart,
  Share2
} from 'lucide-react';
import { Wedding, ProgressCategory, Quest, Milestone, Act5ScreenId } from '../../types/act5';
import { assignedToOthersQuests } from '../../data/act5MockData';

interface ProgressHomeScreenProps {
  wedding: Wedding;
  categories: ProgressCategory[];
  quests: Quest[];
  milestones: Milestone[];
  onNavigate: (screen: Act5ScreenId) => void;
  onCompleteQuest: (questId: string) => void;
}

export const ProgressHomeScreen: React.FC<ProgressHomeScreenProps> = ({
  wedding,
  categories,
  quests,
  milestones,
  onNavigate,
  onCompleteQuest
}) => {
  const [activeTab, setActiveTab] = useState<'by_area' | 'quests'>('by_area');

  return (
    <div className="space-y-4">
      {/* PDF Header Pill - Progress & Days */}
      <div className="bg-[#681D2A] text-white p-4 rounded-2xl shadow-sm text-center relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
        
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#F0D399] bg-white/10 px-3 py-0.5 rounded-full border border-white/20">
          NRI WEDDING PROGRESS
        </span>
        
        <h2 className="text-xl font-bold font-serif mt-2 tracking-tight">
          Your Wedding Planning
        </h2>
        <p className="text-xs text-white/80 mt-0.5">
          {wedding.coupleTitle} • Destination: {wedding.destinationCity}
        </p>

        {/* Milestone Indicator Bar */}
        <div className="mt-3.5 bg-black/20 p-2 rounded-xl flex items-center justify-between text-[11px] font-medium border border-white/10">
          <span className="text-[#A2E3C4] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A2E3C4]" />
            25% Claimed
          </span>
          <span className="text-[#F0D399]">50% (12 pts away)</span>
          <span className="text-white/60">75%</span>
        </div>

        {/* Large Percentage Donut Display */}
        <div className="my-4 flex flex-col items-center justify-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/15"
                strokeWidth="3.8"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#DFBA75]"
                strokeDasharray={`${wedding.overallCompleteness}, 100`}
                strokeWidth="3.8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute text-center flex flex-col items-center">
              <span className="text-3xl font-bold font-serif text-white tracking-tight leading-none">
                {wedding.overallCompleteness}%
              </span>
              <span className="text-[10px] text-[#F0D399] font-semibold mt-1">
                {wedding.completedDecisionsCount} of {wedding.totalDecisionsCount}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-white/70">
                DECISIONS DONE
              </span>
            </div>
          </div>
        </div>

        {/* PDF Philosophy Note */}
        <p className="text-[11px] text-white/90 leading-relaxed max-w-xs mx-auto">
          Progress represents <strong className="text-[#F0D399]">completed planning decisions</strong>, not money spent.
        </p>

        <button
          onClick={() => onNavigate('progress_details')}
          className="mt-3.5 w-full py-2.5 bg-white hover:bg-[#FAF6F0] text-[#681D2A] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
        >
          <span>Continue Planning</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mode Switcher: By Area vs Quests */}
      <div className="flex bg-[#E6DFC8]/60 p-1 rounded-xl gap-1 text-xs font-bold text-[#68625D]">
        <button
          onClick={() => setActiveTab('by_area')}
          className={`flex-1 py-2 rounded-lg transition-all cursor-pointer text-center ${
            activeTab === 'by_area' 
              ? 'bg-white text-[#681D2A] shadow-xs' 
              : 'hover:text-[#231F20]'
          }`}
        >
          By Area (Progress Hub)
        </button>
        <button
          onClick={() => setActiveTab('quests')}
          className={`flex-1 py-2 rounded-lg transition-all cursor-pointer text-center ${
            activeTab === 'quests' 
              ? 'bg-white text-[#681D2A] shadow-xs' 
              : 'hover:text-[#231F20]'
          }`}
        >
          This Month's Quests
        </button>
      </div>

      {/* TAB 1: BY AREA (PDF Screen 31) */}
      {activeTab === 'by_area' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#681D2A] uppercase tracking-wider">
              By Area ({categories.length})
            </h3>
            <button 
              onClick={() => onNavigate('progress_details')}
              className="text-xs text-[#681D2A] font-bold hover:underline flex items-center gap-0.5"
            >
              <span>Full Breakdown</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-2">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                onClick={() => onNavigate('progress_details')}
                className="bg-white p-3 rounded-xl border border-[#E6DFC8] shadow-2xs hover:border-[#DFBA75]/60 transition-all cursor-pointer space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#231F20]">{cat.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#68625D]">
                      {cat.completedDecisions} of {cat.totalDecisions}
                    </span>
                    <span className={`font-bold text-xs ${
                      cat.percentage === 100 ? 'text-[#2D6A4F]' : 'text-[#681D2A]'
                    }`}>
                      {cat.percentage === 100 ? '100%' : `${cat.percentage}%`}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-[#FAF6F0] rounded-full overflow-hidden border border-[#E6DFC8]/50">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      cat.percentage === 100 
                        ? 'bg-[#2D6A4F]' 
                        : cat.percentage > 0 
                          ? 'bg-[#681D2A]' 
                          : 'bg-transparent'
                    }`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* PDF Philosophy Callout Box */}
          <div className="p-3 bg-[#FFF9EB] border border-[#DFBA75]/50 rounded-xl text-xs text-[#68625D] flex items-start gap-2 leading-relaxed">
            <Info className="w-4 h-4 text-[#681D2A] shrink-0 mt-0.5" />
            <p>
              <strong>A ₹3L mandapam moves the meter exactly as much as an ₹8L one.</strong> Progress counts decisions locked, not rupees spent.
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: THIS MONTH'S QUESTS (PDF Screen 32) */}
      {activeTab === 'quests' && (
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-[#E6DFC8] space-y-1">
            <h3 className="text-sm font-bold font-serif text-[#231F20]">This month's quests</h3>
            <p className="text-xs text-[#68625D]">Four short ones. They refresh on the 1st.</p>
          </div>

          <div className="space-y-2">
            {quests.map((quest) => (
              <div 
                key={quest.id}
                className="bg-white p-3 rounded-xl border border-[#E6DFC8] shadow-2xs space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#231F20]">{quest.title}</h4>
                    <p className="text-[11px] text-[#68625D] mt-0.5">{quest.description}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    quest.status === 'completed' 
                      ? 'bg-[#E8F3ED] text-[#2D6A4F]' 
                      : 'bg-[#FFF9EB] text-[#681D2A] border border-[#DFBA75]/40'
                  }`}>
                    {quest.periodInfo}
                  </span>
                </div>

                {quest.rewardIncentive && (
                  <div className="text-[10px] text-[#681D2A] bg-[#F8ECEE] px-2 py-1 rounded-md font-semibold">
                    🎁 {quest.rewardIncentive}
                  </div>
                )}

                {quest.status !== 'completed' && (
                  <button
                    onClick={() => onCompleteQuest(quest.id)}
                    className="w-full py-1.5 bg-[#FAF6F0] hover:bg-[#681D2A] hover:text-white text-[#681D2A] text-xs font-bold rounded-lg border border-[#E6DFC8] transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Complete Quest</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Assigned to others section */}
          <div className="pt-2 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#68625D]">
              Assigned to others
            </h4>

            {assignedToOthersQuests.map((item) => (
              <div key={item.id} className="bg-white p-2.5 rounded-xl border border-[#E6DFC8] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#681D2A] text-white font-bold flex items-center justify-center text-xs font-serif">
                    {item.member.initials}
                  </span>
                  <div>
                    <p className="font-bold text-[#231F20]">{item.member.name} • <span className="font-normal text-[#68625D]">{item.action}</span></p>
                    <p className="text-[10px] text-[#98928B]">{item.progressText}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#681D2A] bg-[#FFF9EB] px-2 py-0.5 rounded-full">
                  {item.status === 'waiting' ? 'Waiting' : 'In Progress'}
                </span>
              </div>
            ))}
          </div>

          {/* PDF Philosophy Callout Box */}
          <div className="p-3 bg-[#FAF6F0] border border-[#E6DFC8] rounded-xl text-xs text-[#68625D] space-y-1">
            <p className="font-bold text-[#231F20]">Quests — collaboration, not competition</p>
            <p className="leading-relaxed">
              No daily check-ins, no streaks to break. Planning a wedding is a weekly rhythm.
            </p>
          </div>
        </div>
      )}

      {/* Quick Access Tiles to PDF Acts */}
      <div className="grid grid-cols-2 gap-2 pt-2">
        <button
          onClick={() => onNavigate('rewards')}
          className="bg-white p-2.5 rounded-xl border border-[#E6DFC8] text-left hover:border-[#681D2A] transition-all cursor-pointer"
        >
          <Gift className="w-4 h-4 text-[#681D2A] mb-1" />
          <p className="text-xs font-bold text-[#231F20]">Reward Ladder</p>
          <p className="text-[10px] text-[#68625D]">Unlock real services</p>
        </button>

        <button
          onClick={() => onNavigate('contributions')}
          className="bg-white p-2.5 rounded-xl border border-[#E6DFC8] text-left hover:border-[#681D2A] transition-all cursor-pointer"
        >
          <Heart className="w-4 h-4 text-[#681D2A] mb-1" />
          <p className="text-xs font-bold text-[#231F20]">Contribution Wall</p>
          <p className="text-[10px] text-[#68625D]">Family recognition</p>
        </button>

        <button
          onClick={() => onNavigate('referrals')}
          className="bg-white p-2.5 rounded-xl border border-[#E6DFC8] text-left hover:border-[#681D2A] transition-all cursor-pointer"
        >
          <Share2 className="w-4 h-4 text-[#681D2A] mb-1" />
          <p className="text-xs font-bold text-[#231F20]">Refer a Family</p>
          <p className="text-[10px] text-[#68625D]">Earn ₹25,000 back</p>
        </button>

        <button
          onClick={() => onNavigate('countdown')}
          className="bg-white p-2.5 rounded-xl border border-[#E6DFC8] text-left hover:border-[#681D2A] transition-all cursor-pointer"
        >
          <Clock className="w-4 h-4 text-[#681D2A] mb-1" />
          <p className="text-xs font-bold text-[#231F20]">Countdown Road</p>
          <p className="text-[10px] text-[#68625D]">198 days to go</p>
        </button>
      </div>
    </div>
  );
};
