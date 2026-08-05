import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { MobileFrame } from './components/MobileFrame';

// Import all 14 screens
import { EverythingYouNeed } from './screens/EverythingYouNeed';
import { VendorFilters } from './screens/VendorFilters';
import { SearchResults } from './screens/SearchResults';
import { SavedVendors } from './screens/SavedVendors';
import { VendorProfile } from './screens/VendorProfile';
import { Portfolio } from './screens/Portfolio';
import { Reviews } from './screens/Reviews';
import { Availability } from './screens/Availability';
import { CompareVendors } from './screens/CompareVendors';
import { VenueProfile } from './screens/VenueProfile';
import { PurohitProfile } from './screens/PurohitProfile';
import { Attire } from './screens/Attire';
import { VendorSwap } from './screens/VendorSwap';
import { SwapImpact } from './screens/SwapImpact';

const MainContent: React.FC = () => {
  const { activeScreen } = useApp();

  const renderScreen = () => {
    switch (activeScreen) {
      case 'EverythingYouNeed':
        return <EverythingYouNeed />;
      case 'VendorFilters':
        return <VendorFilters />;
      case 'SearchResults':
        return <SearchResults />;
      case 'SavedVendors':
        return <SavedVendors />;
      case 'VendorProfile':
        return <VendorProfile />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Reviews':
        return <Reviews />;
      case 'Availability':
        return <Availability />;
      case 'CompareVendors':
        return <CompareVendors />;
      case 'VenueProfile':
        return <VenueProfile />;
      case 'PurohitProfile':
        return <PurohitProfile />;
      case 'Attire':
        return <Attire />;
      case 'VendorSwap':
        return <VendorSwap />;
      case 'SwapImpact':
        return <SwapImpact />;
      default:
        return <EverythingYouNeed />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F5ECE2] flex flex-col items-center font-sans relative py-0 sm:py-6">
      <main className="w-full max-w-md min-h-screen sm:min-h-0 flex flex-col bg-[#FBF9F5] shadow-xl my-0 sm:rounded-2xl overflow-hidden border border-[#E5DCCE]">
        <MobileFrame>
          {renderScreen()}
        </MobileFrame>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
