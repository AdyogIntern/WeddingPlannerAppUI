import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

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
  { id: 'auspicious_dates', label: 'Auspicious Dates (Panchangam)', category: 'ACT 6 Moat', act: 'ACT 6' },
  { id: 'ritual_library', label: 'Ritual Library (5 Functions)', category: 'ACT 6 Moat', act: 'ACT 6' },
  { id: 'ritual_detail', label: 'Panda Kaal Muhurtham Detail', category: 'ACT 6 Moat', act: 'ACT 6' },
  { id: 'muhurtham_day', label: 'Muhurtham Day Runsheet (Live)', category: 'Live & Guest' },
  { id: 'live_stream', label: 'Live Stream (Mandap Cam)', category: 'Live & Guest' },
  { id: 'guest_rsvp', label: 'Guest RSVP & Functions Form', category: 'Live & Guest' },
  { id: 'guests_dashboard', label: '620 Guests & Pickups', category: 'Live & Guest' },
  { id: 'visa_letter', label: 'Visa Invitation Letter', category: 'Live & Guest' },
  { id: 'moi_ledger', label: 'Moi & Gift Ledger (Cash/UPI)', category: 'Planning' },
  { id: 'legal_docs', label: 'Legal & Apostille Vault', category: 'Planning' },
  { id: 'return_gifts', label: 'Return Gifts & Thamboolam', category: 'Planning' },
  { id: 'invitation', label: 'Digital Invitation', category: 'Planning' },
  { id: 'trip_planner', label: '12 Days Trip Planner', category: 'Planning' },
  { id: 'proxy_inspection', label: 'See It For Yourself (Proxy)', category: 'Planning' },
  { id: 'it_is_done', label: 'Keepsake (It Is Done)', category: 'Planning' },
];

export const MobileContainer: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('auspicious_dates');
  const [history, setHistory] = useState<ScreenId[]>([]);

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
      case 'ritual_library':
        return 'auspicious_dates';
      case 'muhurtham_day':
      case 'live_stream':
        return 'ritual_library';
      case 'guests_dashboard':
      case 'visa_letter':
      case 'guest_rsvp':
      case 'return_gifts':
      case 'invitation':
      case 'trip_planner':
      case 'proxy_inspection':
      case 'moi_ledger':
      case 'legal_docs':
        return 'muhurtham_day';
      case 'it_is_done':
        return 'guests_dashboard';
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
      case 'ritual_detail':
        return 2;
      case 'muhurtham_day':
      case 'live_stream':
        return 3;
      case 'guests_dashboard':
      case 'visa_letter':
      case 'guest_rsvp':
      case 'return_gifts':
      case 'invitation':
      case 'trip_planner':
      case 'proxy_inspection':
      case 'moi_ledger':
      case 'legal_docs':
        return 4;
      case 'it_is_done':
        return 5;
      default:
        return 1;
    }
  };

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
              if (r === 'Panda Kaal Muhurtham') navigateTo('ritual_detail');
              else navigateTo('ritual_detail');
            }}
            onWatchVideo={() => navigateTo('live_stream')}
            onViewRunsheet={() => navigateTo('muhurtham_day')}
          />
        );
      case 'ritual_detail':
        return (
          <RitualDetailScreen
            onBack={goBack}
            onSendToPatti={() => {}}
            onViewRunsheet={() => navigateTo('muhurtham_day')}
          />
        );
      case 'it_is_done':
        return (
          <ItIsDoneScreen />
        );
      case 'muhurtham_day':
        return (
          <MuhurthamDayScreen
            onOpenLiveStream={() => navigateTo('live_stream')}
            onOpenGuests={() => navigateTo('guests_dashboard')}
            onOpenKeepsake={() => navigateTo('it_is_done')}
          />
        );
      case 'moi_ledger':
        return <MoiLedgerScreen />;
      case 'legal_docs':
        return <LegalDocsScreen />;
      case 'return_gifts':
        return (
          <ReturnGiftsScreen
            onSendToAmma={() => navigateTo('invitation')}
          />
        );
      case 'invitation':
        return (
          <InvitationScreen
            onSendToGuests={() => navigateTo('guests_dashboard')}
          />
        );
      case 'live_stream':
        return <LiveStreamScreen />;
      case 'visa_letter':
        return <VisaLetterScreen />;
      case 'guest_rsvp':
        return <GuestRsvpScreen />;
      case 'trip_planner':
        return <TripPlannerScreen />;
      case 'guests_dashboard':
        return (
          <GuestsDashboardScreen
            onGenerateVisaLetters={() => navigateTo('visa_letter')}
            onAddLiveStreaming={() => navigateTo('live_stream')}
            onOpenRsvp={() => navigateTo('guest_rsvp')}
            onNavigateNext={() => navigateTo('it_is_done')}
          />
        );
      case 'proxy_inspection':
        return <ProxyInspectionScreen />;
      default:
        return <AuspiciousDatesScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F0ECE1] text-[#1F1A17] flex flex-col items-center justify-start py-0 sm:py-4 px-0 sm:px-4">
      {/* Container Card */}
      <div className="w-full max-w-md bg-[#FAF7F2] min-h-screen sm:min-h-[810px] sm:rounded-2xl shadow-xl border border-[#E0D8CC] flex flex-col overflow-hidden relative">
        
        {/* Review Sheet Sticky Top Header */}
        <div className="bg-[#FAF7F2] border-b border-[#E8E0D5] px-4 py-2.5 flex items-center justify-center sticky top-0 z-50 min-h-[45px]">
          {activeScreen !== 'auspicious_dates' && (
            <button 
              onClick={goBack}
              className="absolute left-3 p-1.5 rounded-full text-[#7A2232] hover:bg-[#F0ECE1] transition-colors focus:outline-none cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="text-center truncate px-10">
            <h2 className="text-[14px] font-bold text-[#1F1A17] truncate">
              {currentScreenOption.label}
            </h2>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#ECE4D9] h-1.5 w-full shrink-0 relative overflow-hidden">
          <div 
            className="bg-[#7A2232] h-full transition-all duration-300" 
            style={{ width: `${(getStepNumber(activeScreen) / 5) * 100}%` }}
          />
        </div>



        {/* Main Content Layer */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative bg-[#FAF7F2]">
          {renderActiveScreen()}
        </div>
      </div>
    </div>
  );
};
