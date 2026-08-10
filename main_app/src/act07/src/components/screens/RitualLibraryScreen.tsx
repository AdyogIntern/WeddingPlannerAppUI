import React, { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';
import { RITUAL_DOCUMENTS, RitualDocument } from '../../data/rituals';

interface Props {
  onSelectRitual?: (ritualName: string) => void;
  onWatchVideo?: () => void;
  onViewRunsheet?: () => void;
}

export const RitualLibraryScreen: React.FC<Props> = ({ 
  onSelectRitual,
  onWatchVideo,
  onViewRunsheet
}) => {
  const [rituals] = useState<RitualDocument[]>(RITUAL_DOCUMENTS);

  const getIconEmoji = (icon: RitualDocument['icon']) => {
    switch (icon) {
      case 'ring': return '💍';
      case 'leaf': return '🌿';
      case 'lamp': return '🪔';
      case 'flower': return '🌺';
      case 'sparkles': return '✨';
      default: return '📜';
    }
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 bg-[#FAF7F2]">
        <h1 className="font-serif-title text-[28px] leading-tight font-medium text-[#1F1A17] tracking-tight">
          Every ritual, explained
        </h1>
        <p className="text-[13px] leading-relaxed text-[#756D65] mt-1.5 font-normal">
          Told by Mr. Sundaram, who has run 2,000 weddings.
        </p>
      </div>

      <div className="px-5 space-y-5 flex-1">
        {/* Featured Video Card */}
        <div 
          onClick={onWatchVideo || (() => onSelectRitual && onSelectRitual('Panda Kaal Muhurtham'))}
          className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D5] shadow-xs cursor-pointer hover:border-[#7A2232] transition-all group relative"
        >
          {/* Top Video Slot */}
          <div className="bg-[#ECE4D9] h-32 flex items-center justify-center relative">
            <span className="font-mono-tag text-[12px] text-[#857B70] uppercase font-medium flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-[#D8CEBF]">
              <Play className="w-3.5 h-3.5 fill-[#7A2232] text-[#7A2232]" /> WATCH VIDEO · 4:12
            </span>
          </div>
          {/* Card Body */}
          <div className="p-4 flex items-center justify-between">
            <div>
              <h3 className="text-[15px] font-bold text-[#1F1A17] group-hover:text-[#7A2232] transition-colors">
                "What actually happens at a muhurtham"
              </h3>
              <p className="text-[12px] text-[#756D65] mt-0.5">
                Start here if this is your first Tamil wedding
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#857B70] shrink-0" />
          </div>
        </div>

        {/* Section: Your five functions */}
        <div>
          <h2 className="text-[16px] font-bold text-[#1F1A17] mb-3">
            Your five functions
          </h2>

          <div className="space-y-3">
            {rituals
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((ritual) => {
                const isHighlight = ritual.id === 'panda-kaal-muhurtham';
                return (
                  <div
                    key={ritual.id || ritual.title}
                    onClick={() => onSelectRitual && onSelectRitual(ritual.title)}
                    className={`rounded-[20px] p-3.5 border flex items-center justify-between cursor-pointer transition-all shadow-2xs hover:border-[#7A2232] ${
                      isHighlight
                        ? 'bg-[#FAF3F4]/60 border-[#DDA3A8]'
                        : 'bg-white border-[#E8E0D5]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 flex-1 min-w-0 mr-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#EFE8DC] shrink-0 flex items-center justify-center text-lg">
                        {getIconEmoji(ritual.icon)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[15px] font-bold text-[#1F1A17] tracking-tight truncate">
                          {ritual.title}
                        </h4>
                        <p className="text-[12px] text-[#756D65] mt-0.5 line-clamp-1">
                          {ritual.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-[#918579] mt-0.5">
                          <span>{ritual.duration}</span>
                          <span>·</span>
                          <span>read {ritual.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {ritual.status === 'Read' ? (
                      <span className="text-[12.5px] font-semibold text-[#227A38] px-2 py-1 shrink-0">
                        Read
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#A89F91] shrink-0" />
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Section: Also asked */}
        <div>
          <h3 className="text-[15px] font-bold text-[#1F1A17] mb-2.5">
            Also asked
          </h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3.5 py-2 bg-white border border-[#E8E0D5] rounded-xl text-[12.5px] text-[#3D352E] font-medium hover:border-[#7A2232]">
              Do we need a Panda Kaal?
            </button>
            <button className="px-3.5 py-2 bg-white border border-[#E8E0D5] rounded-xl text-[12.5px] text-[#3D352E] font-medium hover:border-[#7A2232]">
              Who ties the koorai?
            </button>
            <button className="px-3.5 py-2 bg-white border border-[#E8E0D5] rounded-xl text-[12.5px] text-[#3D352E] font-medium hover:border-[#7A2232]">
              Interfaith — what changes?
            </button>
          </div>
        </div>

        {/* Soft Banner Box with Auto-Flow Action */}
        <div className="p-4 bg-[#F5ECE5] rounded-2xl text-[12.5px] leading-relaxed text-[#5A5046] flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="font-mono-tag text-[10px] uppercase font-bold text-[#7A2232]">
              RITUALS REVIEWED
            </span>
            <span className="text-[10px] font-bold text-[#2E7D32]">5 / 5 Functions Stored</span>
          </div>
          <p>All rituals mapped for Iyer Purohit sampradaya and samagri kit assembly.</p>
          {onViewRunsheet && (
            <button
              onClick={onViewRunsheet}
              className="mt-1 py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[13px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all text-center shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Continue</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

