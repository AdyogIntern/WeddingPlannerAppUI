import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';



import { RitualLibraryScreen } from './screens/RitualLibraryScreen';
import { RitualDetailScreen } from './screens/RitualDetailScreen';
import { ItIsDoneScreen } from './screens/ItIsDoneScreen';
import { MuhurthamDayScreen } from './screens/MuhurthamDayScreen';
import { LiveStreamScreen } from './screens/LiveStreamScreen';
import { GuestRsvpScreen } from './screens/GuestRsvpScreen';
import { TripPlannerScreen } from './screens/TripPlannerScreen';
import { ProxyInspectionScreen } from './screens/ProxyInspectionScreen';
import { MoiLedgerScreen } from './screens/MoiLedgerScreen';
import { LegalDocsScreen } from './screens/LegalDocsScreen';

export type ScreenId = 
  | 'ritual_library'
  | 'ritual_detail'
  | 'it_is_done'
  | 'muhurtham_day'


  | 'live_stream'

  | 'guest_rsvp'
  | 'trip_planner'

  | 'proxy_inspection'
  | 'moi_ledger'
  | 'legal_docs';

interface ScreenOption {
  id: ScreenId;
  label: string;
  category: 'ACT 6 Moat' | 'Live & Guest' | 'Planning';
  act?: string;
}

const SCREENS: ScreenOption[] = [
  { id: 'ritual_library', label: '1. Every Rituals Explained', category: 'ACT 6 Moat', act: 'ACT 6' },
  { id: 'ritual_detail', label: '2. Ritual Explanation Detail', category: 'ACT 6 Moat', act: 'ACT 6' },
  { id: 'proxy_inspection', label: '4. See It For Yourself (Proxy)', category: 'Planning' },

  { id: 'trip_planner', label: '6. Land on 20 Feb (Trip Planner)', category: 'Planning' },
  { id: 'guest_rsvp', label: '7. Will You Join Us? (RSVP)', category: 'Live & Guest' },
  { id: 'legal_docs', label: '8. Invitation Letter & Visa', category: 'Planning' },

  { id: 'live_stream', label: '9. Muhurtham Live Telecast', category: 'Live & Guest' },


  { id: 'moi_ledger', label: '11. Moi & Gift Ledger', category: 'Planning' },
  { id: 'muhurtham_day', label: '12. Muhurtham Day Timeline', category: 'Live & Guest' },
  { id: 'it_is_done', label: '13. It Is Done (Keepsake)', category: 'Planning' },
];

const STEP_ITEMS: { stepNum: number; label: string; screenId: ScreenId; screens: ScreenId[] }[] = [
  { stepNum: 1, label: 'Rituals Overview', screenId: 'ritual_library', screens: ['ritual_library'] },
  { stepNum: 2, label: 'Ritual Detail', screenId: 'ritual_detail', screens: ['ritual_detail'] },
  { stepNum: 4, label: 'See It For Yourself', screenId: 'proxy_inspection', screens: ['proxy_inspection'] },

  { stepNum: 6, label: 'Land on 20 Feb', screenId: 'trip_planner', screens: ['trip_planner'] },
  { stepNum: 7, label: 'Will You Join Us', screenId: 'guest_rsvp', screens: ['guest_rsvp'] },
  { stepNum: 8, label: 'Invitation Letter', screenId: 'legal_docs', screens: ['legal_docs'] },
  { stepNum: 9, label: 'Live Telecast', screenId: 'live_stream', screens: ['live_stream'] },

  { stepNum: 11, label: 'Return Gifts', screenId: 'moi_ledger', screens: ['moi_ledger'] },
  { stepNum: 12, label: 'Muhurtham Day', screenId: 'muhurtham_day', screens: ['muhurtham_day'] },
  { stepNum: 13, label: 'It Is Done', screenId: 'it_is_done', screens: ['it_is_done'] },
];

export const MobileContainer: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('ritual_library');
  const [history, setHistory] = useState<ScreenId[]>([]);
  const [maxStepReached, setMaxStepReached] = useState<number>(1);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const currentScreenOption = SCREENS.find((s) => s.id === activeScreen) || SCREENS[0];

  const navigateTo = (screen: ScreenId) => {
    if (screen !== activeScreen) {
      setHistory((prev) => [...prev, activeScreen]);
      setActiveScreen(screen);
    }
  };

  const getPreviousLogicalScreen = (current: ScreenId): ScreenId => {
    switch (current) {
      case 'ritual_detail':
        return 'ritual_library';
      case 'proxy_inspection':
        return 'ritual_detail';
      case 'trip_planner':
        return 'proxy_inspection';
      case 'guest_rsvp':
        return 'trip_planner';
      case 'legal_docs':
        return 'guest_rsvp';
      case 'live_stream':
        return 'legal_docs';
      case 'moi_ledger':
        return 'live_stream';
      case 'muhurtham_day':
        return 'moi_ledger';
      case 'it_is_done':
        return 'muhurtham_day';
      default:
        return 'ritual_library';
    }
  };

  const goBack = () => {
    if (history.length > 0) {
      const lastScreen = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setActiveScreen(lastScreen);
    } else {
      setActiveScreen(getPreviousLogicalScreen(activeScreen));
    }
  };

  const getStepNumber = (screen: ScreenId): number => {
    switch (screen) {
      case 'ritual_library':
        return 1;
      case 'ritual_detail':
        return 2;
      case 'proxy_inspection':
        return 4;
      case 'trip_planner':
        return 6;
      case 'guest_rsvp':
        return 7;
      case 'legal_docs':

      case 'live_stream':
        return 9;
      case 'moi_ledger':
        return 11;
      case 'muhurtham_day':
        return 12;
      case 'it_is_done':
        return 13;
      default:
        return 1;
    }
  };

  const currentStep = getStepNumber(activeScreen);
  const currentStepItem = STEP_ITEMS.find((s) => s.screens.includes(activeScreen)) || STEP_ITEMS[0];

  useEffect(() => {
    if (currentStep > maxStepReached) {
      setMaxStepReached(currentStep);
    }
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [activeScreen, currentStep, maxStepReached]);

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'ritual_library':
        return (
          <RitualLibraryScreen
            onSelectRitual={(r) => {
              navigateTo('ritual_detail');
            }}
            onWatchVideo={() => navigateTo('live_stream')}
            onViewRunsheet={() => navigateTo('ritual_detail')}
          />
        );
      case 'ritual_detail':
        return (
          <RitualDetailScreen
            onBack={goBack}
            onSendToPatti={() => {}}
            onViewRunsheet={() => navigateTo('proxy_inspection')}
            onNavigateNext={() => navigateTo('proxy_inspection')}
          />
        );
      case 'proxy_inspection':
        return <ProxyInspectionScreen onNavigateNext={() => navigateTo('trip_planner')} />;
      case 'trip_planner':
        return <TripPlannerScreen onNavigateNext={() => navigateTo('guest_rsvp')} />;
      case 'guest_rsvp':
        return <GuestRsvpScreen onNavigateNext={() => navigateTo('legal_docs')} />;
      case 'legal_docs':
        return <LegalDocsScreen onNavigateNext={() => navigateTo('live_stream')} />;

      case 'live_stream':
        return <LiveStreamScreen onBack={goBack} onNavigateNext={() => navigateTo('moi_ledger')} />;
      case 'moi_ledger':
        return <MoiLedgerScreen onNavigateNext={() => navigateTo('muhurtham_day')} />;
      case 'muhurtham_day':
        return (
          <MuhurthamDayScreen
            onOpenLiveStream={() => navigateTo('live_stream')}
            onOpenGuests={() => { window.location.href = '/act1?tab=guests'; }}
            onOpenKeepsake={() => navigateTo('it_is_done')}
          />
        );
      case 'it_is_done':
        return <ItIsDoneScreen />;
      default:
        return <RitualLibraryScreen 
            onSelectRitual={(r) => navigateTo('ritual_detail')}
            onWatchVideo={() => navigateTo('live_stream')}
            onViewRunsheet={() => navigateTo('ritual_detail')}
        />;
    }
  };

  return (
    <div className="w-full max-w-md bg-[#FAF7F2] min-h-screen sm:min-h-[810px] sm:rounded-2xl shadow-xl border border-[#E0D8CC] flex flex-col overflow-hidden relative">
      {/* Step Progress Indicator Bar */}
      <div className="bg-[#E8E0D5] h-1 w-full shrink-0 relative overflow-hidden">
        <div 
          className="bg-[#7A2232] h-full transition-all duration-500 ease-out" 
          style={{ width: `${(currentStep / 13) * 100}%` }}
        />
      </div>

      {/* Global Navigation Header */}
      {activeScreen !== 'ritual_library' && (
        <div className="w-full px-5 pt-4 pb-0 bg-[#FAF7F2] flex items-center shrink-0">
          <button
            onClick={goBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#4A423A] hover:text-[#7A2232] text-[12px] font-bold border border-[#E8E0D5] shadow-sm hover:border-[#7A2232] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
        </div>
      )}

      {/* Main Content Layer */}
      <div ref={mainContentRef} className="flex-1 overflow-y-auto custom-scrollbar relative bg-[#FAF7F2]">
        {renderActiveScreen()}
      </div>
    </div>
  );
};
