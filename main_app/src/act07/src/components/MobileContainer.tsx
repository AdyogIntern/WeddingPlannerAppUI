import React, { useState, useRef, useEffect } from 'react';


import { AuspiciousDatesScreen } from './screens/AuspiciousDatesScreen';
import { RitualLibraryScreen } from './screens/RitualLibraryScreen';
import { RitualDetailScreen } from './screens/RitualDetailScreen';
import { ItIsDoneScreen } from './screens/ItIsDoneScreen';
import { MuhurthamDayScreen } from './screens/MuhurthamDayScreen';
import { ReturnGiftsScreen } from './screens/ReturnGiftsScreen';
import { InvitationScreen } from './screens/InvitationScreen';
import { LiveStreamScreen } from './screens/LiveStreamScreen';
import { VisaLetterScreen } from './screens/VisaLetterScreen';
import { GuestRsvpScreen } from './screens/GuestRsvpScreen';
import { TripPlannerScreen } from './screens/TripPlannerScreen';
import { GuestsDashboardScreen } from './screens/GuestsDashboardScreen';
import { ProxyInspectionScreen } from './screens/ProxyInspectionScreen';
import { MoiLedgerScreen } from './screens/MoiLedgerScreen';
import { LegalDocsScreen } from './screens/LegalDocsScreen';

export type ScreenId = 
  | 'auspicious_dates'
  | 'ritual_library'
  | 'ritual_detail'
  | 'it_is_done'
  | 'muhurtham_day'
  | 'return_gifts'
  | 'invitation'
  | 'live_stream'
  | 'visa_letter'
  | 'guest_rsvp'
  | 'trip_planner'
  | 'guests_dashboard'
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
  { id: 'auspicious_dates', label: '1. Auspicious Date (Panchangam)', category: 'ACT 6 Moat', act: 'ACT 6' },
  { id: 'ritual_library', label: '2. Every Rituals Explained', category: 'ACT 6 Moat', act: 'ACT 6' },
  { id: 'ritual_detail', label: '3. Ritual Explanation Detail', category: 'ACT 6 Moat', act: 'ACT 6' },
  { id: 'proxy_inspection', label: '4. See It For Yourself (Proxy)', category: 'Planning' },
  { id: 'guests_dashboard', label: '5. 620 Guests Page', category: 'Live & Guest' },
  { id: 'trip_planner', label: '6. Land on 20 Feb (Trip Planner)', category: 'Planning' },
  { id: 'guest_rsvp', label: '7. Will You Join Us? (RSVP)', category: 'Live & Guest' },
  { id: 'legal_docs', label: '8. Invitation Letter & Visa', category: 'Planning' },
  { id: 'visa_letter', label: '8. Visa Invitation Letter', category: 'Live & Guest' },
  { id: 'live_stream', label: '9. Muhurtham Live Telecast', category: 'Live & Guest' },
  { id: 'invitation', label: '10. Digital Invitation', category: 'Planning' },
  { id: 'return_gifts', label: '11. Return Gifts & Thamboolam', category: 'Planning' },
  { id: 'moi_ledger', label: '11. Moi & Gift Ledger', category: 'Planning' },
  { id: 'muhurtham_day', label: '12. Muhurtham Day Timeline', category: 'Live & Guest' },
  { id: 'it_is_done', label: '13. It Is Done (Keepsake)', category: 'Planning' },
];

const STEP_ITEMS: { stepNum: number; label: string; screenId: ScreenId; screens: ScreenId[] }[] = [
  { stepNum: 1, label: 'Auspicious Date', screenId: 'auspicious_dates', screens: ['auspicious_dates'] },
  { stepNum: 2, label: 'Rituals Overview', screenId: 'ritual_library', screens: ['ritual_library'] },
  { stepNum: 3, label: 'Ritual Detail', screenId: 'ritual_detail', screens: ['ritual_detail'] },
  { stepNum: 4, label: 'See It For Yourself', screenId: 'proxy_inspection', screens: ['proxy_inspection'] },
  { stepNum: 5, label: '620 Guests', screenId: 'guests_dashboard', screens: ['guests_dashboard'] },
  { stepNum: 6, label: 'Land on 20 Feb', screenId: 'trip_planner', screens: ['trip_planner'] },
  { stepNum: 7, label: 'Will You Join Us', screenId: 'guest_rsvp', screens: ['guest_rsvp'] },
  { stepNum: 8, label: 'Invitation Letter', screenId: 'legal_docs', screens: ['legal_docs', 'visa_letter'] },
  { stepNum: 9, label: 'Live Telecast', screenId: 'live_stream', screens: ['live_stream'] },
  { stepNum: 10, label: 'Invitation', screenId: 'invitation', screens: ['invitation'] },
  { stepNum: 11, label: 'Return Gifts', screenId: 'return_gifts', screens: ['return_gifts', 'moi_ledger'] },
  { stepNum: 12, label: 'Muhurtham Day', screenId: 'muhurtham_day', screens: ['muhurtham_day'] },
  { stepNum: 13, label: 'It Is Done', screenId: 'it_is_done', screens: ['it_is_done'] },
];

export const MobileContainer: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('auspicious_dates');
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
      case 'ritual_library':
        return 'auspicious_dates';
      case 'ritual_detail':
        return 'ritual_library';
      case 'proxy_inspection':
        return 'ritual_detail';
      case 'guests_dashboard':
        return 'proxy_inspection';
      case 'trip_planner':
        return 'guests_dashboard';
      case 'guest_rsvp':
        return 'trip_planner';
      case 'legal_docs':
      case 'visa_letter':
        return 'guest_rsvp';
      case 'live_stream':
        return 'legal_docs';
      case 'invitation':
        return 'live_stream';
      case 'return_gifts':
      case 'moi_ledger':
        return 'invitation';
      case 'muhurtham_day':
        return 'return_gifts';
      case 'it_is_done':
        return 'muhurtham_day';
      default:
        return 'auspicious_dates';
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
      case 'auspicious_dates':
        return 1;
      case 'ritual_library':
        return 2;
      case 'ritual_detail':
        return 3;
      case 'proxy_inspection':
        return 4;
      case 'guests_dashboard':
        return 5;
      case 'trip_planner':
        return 6;
      case 'guest_rsvp':
        return 7;
      case 'legal_docs':
      case 'visa_letter':
        return 8;
      case 'live_stream':
        return 9;
      case 'invitation':
        return 10;
      case 'return_gifts':
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
      case 'auspicious_dates':
        return (
          <AuspiciousDatesScreen
            onAskPurohit={() => navigateTo('ritual_library')}
            onSelectDate={() => navigateTo('ritual_library')}
            onNavigateToRituals={() => navigateTo('ritual_library')}
            onNavigateToRunsheet={() => navigateTo('muhurtham_day')}
          />
        );
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
        return <ProxyInspectionScreen onNavigateNext={() => navigateTo('guests_dashboard')} />;
      case 'guests_dashboard':
        return (
          <GuestsDashboardScreen
            onGenerateVisaLetters={() => navigateTo('legal_docs')}
            onAddLiveStreaming={() => navigateTo('live_stream')}
            onOpenRsvp={() => navigateTo('guest_rsvp')}
            onNavigateNext={() => navigateTo('trip_planner')}
          />
        );
      case 'trip_planner':
        return <TripPlannerScreen onNavigateNext={() => navigateTo('guest_rsvp')} />;
      case 'guest_rsvp':
        return <GuestRsvpScreen onNavigateNext={() => navigateTo('legal_docs')} />;
      case 'legal_docs':
        return <LegalDocsScreen onNavigateNext={() => navigateTo('live_stream')} />;
      case 'visa_letter':
        return <VisaLetterScreen onBack={goBack} />;
      case 'live_stream':
        return <LiveStreamScreen onBack={goBack} onNavigateNext={() => navigateTo('invitation')} />;
      case 'invitation':
        return (
          <InvitationScreen
            onNavigateNext={() => navigateTo('return_gifts')}
          />
        );
      case 'return_gifts':
        return (
          <ReturnGiftsScreen
            onNavigateNext={() => navigateTo('muhurtham_day')}
          />
        );
      case 'moi_ledger':
        return <MoiLedgerScreen onNavigateNext={() => navigateTo('muhurtham_day')} />;
      case 'muhurtham_day':
        return (
          <MuhurthamDayScreen
            onOpenLiveStream={() => navigateTo('live_stream')}
            onOpenGuests={() => navigateTo('guests_dashboard')}
            onOpenKeepsake={() => navigateTo('it_is_done')}
          />
        );
      case 'it_is_done':
        return <ItIsDoneScreen />;
      default:
        return <AuspiciousDatesScreen />;
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

      {/* Main Content Layer */}
      <div ref={mainContentRef} className="flex-1 overflow-y-auto custom-scrollbar relative bg-[#FAF7F2]">
        {renderActiveScreen()}
      </div>
    </div>
  );
};
