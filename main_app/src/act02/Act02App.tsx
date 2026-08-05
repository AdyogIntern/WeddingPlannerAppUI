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
    <div className="flex-1 flex flex-col bg-[#FBF9F5] w-full min-h-full p-4 sm:p-6 pb-20">
      {renderScreen()}
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
