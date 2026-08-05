import React from 'react';
import { Wedding, ProgressCategory, Act5ScreenId } from '../../types/act5';

interface ProgressHomeScreenProps {
  wedding: Wedding;
  categories: ProgressCategory[];
  quests: any[];
  milestones: any[];
  onNavigate: (screen: Act5ScreenId) => void;
  onCompleteQuest: (questId: string) => void;
}

export const ProgressHomeScreen: React.FC<ProgressHomeScreenProps> = ({
  wedding,
  categories,
  onNavigate,
}) => {
  // Helpers for text matching the design
  const getCardStatus = (cat: ProgressCategory) => {
    if (cat.percentage === 0) return 'not started';
    if (cat.percentage === 100) return '100%';
    if (cat.name === 'Photography & Video') return 'voting · 30%';
    return `${cat.completedDecisions} of ${cat.totalDecisions} · ${cat.percentage}%`;
  };

  const getCardProgressColor = (cat: ProgressCategory) => {
    if (cat.percentage === 100) return 'bg-[#3E6548]'; // Green
    if (cat.name === 'Decor & Theme' || cat.name === 'Photography & Video') return 'bg-[#B08933]'; // Gold/Brown
    if (cat.percentage > 0) return 'bg-[#7A2232]'; // Maroon
    return 'bg-transparent';
  };
  
  // Format names to match image exactly
  const formatName = (name: string) => {
    if (name === 'Food & Catering') return 'Food';
    if (name === 'Rituals & Purohit') return 'Rituals & purohit';
    if (name === 'Photography & Video') return 'Photography & video';
    if (name === 'Decor & Theme') return 'Decor';
    if (name === 'Guests & Travel') return 'Guests & travel';
    if (name === 'Outfits & Jewellery') return 'Outfits & jewellery';
    return name;
  };

  return (
    <div className="w-full flex flex-col bg-[#F8F5EE] min-h-full pb-20 -mx-4 -mt-4" style={{ width: 'calc(100% + 2rem)' }}>
      {/* Top Header Section */}
      <div className="bg-[#7A2232] text-white pt-12 pb-6 px-5 flex flex-col rounded-b-2xl">
        {/* Status bar mock */}
        <div className="absolute top-3 left-5 text-[12px] font-medium opacity-90">
          9:41
        </div>
        
        <div className="flex items-center gap-3 mt-4">
          <span className="text-[64px] font-serif leading-none tracking-tight -mb-2">
            {wedding.overallCompleteness}%
          </span>
          <div className="flex flex-col pt-1 leading-tight">
            <span className="text-sm font-medium">planned</span>
            <span className="text-sm opacity-90">198 days to go</span>
          </div>
        </div>

        {/* Progress Bar Timeline */}
        <div className="mt-8 relative">
          {/* Track */}
          <div className="w-full h-1.5 bg-white/20 rounded-full flex relative overflow-hidden">
             {/* Fill */}
             <div 
               className="h-full bg-[#E8CD8A] rounded-full" 
               style={{ width: `${wedding.overallCompleteness}%` }}
             />
          </div>
          {/* Markers */}
          <div className="absolute top-[-4px] left-[38%] w-[1px] h-3.5 bg-white/40" />
          <div className="absolute top-[-4px] left-[70%] w-[1px] h-3.5 bg-white/40" />

          {/* Labels */}
          <div className="flex justify-between items-center mt-2 text-[10px] text-white/90 font-medium">
            <span>25% <span className="opacity-80 mx-0.5">✓</span> claimed</span>
            <span className="ml-12">50% · 12 points away</span>
            <span>75%</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5 pt-6 flex-1">
        <h2 className="text-[17px] font-medium text-[#231F20] mb-4">By area</h2>
        
        <div className="space-y-3">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onNavigate('progress_details')}
              className="bg-white rounded-xl py-3 px-4 border border-[#E6DFC8] flex flex-col cursor-pointer"
            >
              <div className="flex justify-between items-center text-[13px] font-medium text-[#231F20] mb-2">
                <span>{formatName(cat.name)}</span>
                <span className="text-[#68625D]">{getCardStatus(cat)}</span>
              </div>
              
              <div className="w-full h-1.5 bg-[#F2EDE1] rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${getCardProgressColor(cat)}`}
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Callout Box */}
        <div className="mt-6 p-4 bg-[#F2EDE1] rounded-xl text-[12px] text-[#4A443E] leading-relaxed mb-6">
          Progress counts <span className="font-bold text-[#352D26]">decisions locked</span>, not money spent. A ₹3L mandapam moves the meter exactly as much as an ₹8L one.
        </div>
      </div>
    </div>
  );
};

