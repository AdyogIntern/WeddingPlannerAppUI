import React from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight, Plane } from 'lucide-react';
import { WeddingCountdown } from '../../types/act5';
import { PrimaryButton } from '../../components/act5/PrimaryButton';

interface CountdownScreenProps {
  countdown: WeddingCountdown;
  onContinuePlanning: () => void;
  onTogglePriority: (priorityId: string) => void;
  onDateChange: (newDate: string) => void;
}

export const CountdownScreen: React.FC<CountdownScreenProps> = ({
  countdown,
  onContinuePlanning,
  onTogglePriority
}) => {
  const timelineItems = [
    { period: '6 mo', label: 'Venue, catering, purohit locked', subtext: '2 of 3 done', status: 'done' },
    { period: '5 mo', label: 'Save-the-dates and RSVP letters out', subtext: 'Sent to 120 guests', status: 'done' },
    { period: '4 mo', label: 'Photography, decor, music confirmed', subtext: 'Shortlist active', status: 'active' },
    { period: '3 mo', label: 'Outfits ordered, hotel block reserved', subtext: 'Pending fittings', status: 'pending' },
    { period: '1 mo', label: 'Final headcount balances scheduled', subtext: '30 days prior', status: 'pending' },
    { period: '12 d', label: 'You land. Fittings, tasting, rehearsal.', subtext: 'Ground schedule', status: 'pending' },
  ];

  return (
    <div className="space-y-4">
      {/* Header - PDF Screen 38 */}
      <div className="bg-[#681D2A] text-white rounded-2xl p-5 shadow-sm space-y-2 relative overflow-hidden text-center">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />

        <span className="text-[10px] uppercase font-bold tracking-widest text-[#F0D399]">
          COUNTDOWN MOMENTS
        </span>
        
        <h2 className="text-xl font-bold font-serif">The road there</h2>

        {/* Big Metric Display */}
        <div className="py-2">
          <span className="text-5xl font-bold font-serif text-[#F0D399]">198</span>
          <p className="text-sm font-bold text-white mt-1">
            days to the muhurtham
          </p>
          <p className="text-xs text-white/80 mt-0.5 flex items-center justify-center gap-1">
            <Plane className="w-3.5 h-3.5 text-[#F0D399]" />
            <span>You land in Chennai in 188 days</span>
          </p>
        </div>
      </div>

      {/* Timeline List (PDF Screen 38) */}
      <div className="bg-white rounded-xl p-4 border border-[#E6DFC8] shadow-2xs space-y-3">
        <h3 className="text-xs font-bold text-[#681D2A] uppercase tracking-wider">
          Roadmap Timeline
        </h3>

        <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E6DFC8]">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex items-start justify-between text-xs">
              <span className={`absolute -left-[22px] top-1 w-3 h-3 rounded-full ring-4 ring-white ${
                item.status === 'done' 
                  ? 'bg-[#2D6A4F]' 
                  : item.status === 'active' 
                    ? 'bg-[#681D2A]' 
                    : 'bg-[#E6DFC8]'
              }`} />

              <div className="pr-2 space-y-0.5">
                <p className={`font-bold ${item.status === 'done' ? 'text-[#231F20]' : 'text-[#68625D]'}`}>
                  {item.label}
                </p>
                <p className="text-[10px] text-[#98928B]">{item.subtext}</p>
              </div>

              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                item.status === 'done' 
                  ? 'bg-[#E8F3ED] text-[#2D6A4F]' 
                  : item.status === 'active'
                    ? 'bg-[#FFF9EB] text-[#681D2A] border border-[#DFBA75]/40'
                    : 'bg-[#FAF6F0] text-[#98928B]'
              }`}>
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ground Time Callout Box (PDF Screen 38) */}
      <div className="p-4 bg-[#FFF9EB] border border-[#DFBA75]/50 rounded-xl text-xs text-[#68625D] space-y-1">
        <div className="flex items-center gap-1.5 font-bold text-[#681D2A]">
          <AlertCircle className="w-4 h-4 text-[#681D2A]" />
          <span>Ground Time Reality</span>
        </div>
        <p className="leading-relaxed">
          You have ten working days on the ground. The heavy lifting online has to be done before you board.
        </p>
      </div>

      <PrimaryButton
        onClick={() => alert('Calendar synced to Google Calendar / Outlook!')}
        icon={<Calendar className="w-4 h-4" />}
      >
        Add these to your calendar
      </PrimaryButton>
    </div>
  );
};
