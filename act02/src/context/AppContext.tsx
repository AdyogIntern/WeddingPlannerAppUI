import React, { createContext, useContext, useState } from 'react';
import { ScreenId } from '../types';

export interface VendorItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  pricePerPlate?: number;
  totalPrice: number;
  totalPriceFormatted: string;
  priceUnit?: string;
  rating?: number;
  reviewsCount?: number;
  nriCount?: number;
  statusTag?: string; // 'Free' | '1 held' | 'Booked' | 'Under band'
  tagColor?: string;
  votesCount?: number;
  likedBy?: string;
  image?: string;
  isSaved: boolean;
  nriWeddings?: number;
}

const INITIAL_VENDORS: VendorItem[] = [
  {
    id: 'caterer-1',
    name: 'Sri Amirtham Catering',
    category: 'Food',
    subcategory: 'Iyengar veg',
    pricePerPlate: 1250,
    totalPrice: 525000,
    totalPriceFormatted: '₹5.25L total',
    rating: 4.8,
    reviewsCount: 62,
    nriCount: 31,
    statusTag: 'Free',
    tagColor: 'text-emerald-700',
    likedBy: 'Amma, Appa and Meera like this',
    isSaved: true,
  },
  {
    id: 'caterer-2',
    name: 'Thanjavur Samayal',
    category: 'Food',
    subcategory: 'Iyer veg',
    pricePerPlate: 980,
    totalPrice: 412000,
    totalPriceFormatted: '₹4.12L total',
    rating: 4.6,
    reviewsCount: 45,
    statusTag: 'Free',
    tagColor: 'text-emerald-700',
    isSaved: false,
  },
  {
    id: 'caterer-3',
    name: 'Kalyana Ruchi',
    category: 'Food',
    subcategory: 'Iyengar veg',
    pricePerPlate: 1480,
    totalPrice: 622000,
    totalPriceFormatted: '₹6.22L total',
    rating: 4.7,
    reviewsCount: 51,
    statusTag: '1 held',
    tagColor: 'text-amber-800 bg-amber-100/80',
    votesCount: 3,
    likedBy: 'Amma, Appa and Meera like this',
    isSaved: true,
  },
  {
    id: 'caterer-4',
    name: 'Ananda Bhavan Caterers',
    category: 'Food',
    subcategory: 'Live counters',
    pricePerPlate: 1320,
    totalPrice: 554000,
    totalPriceFormatted: '₹5.54L total',
    rating: 4.5,
    reviewsCount: 38,
    statusTag: 'Free',
    tagColor: 'text-emerald-700',
    isSaved: false,
  },
  {
    id: 'photo-1',
    name: 'Studio Anantham',
    category: 'Visual',
    subcategory: 'Candid',
    totalPrice: 340000,
    totalPriceFormatted: '₹3.4L total',
    rating: 4.9,
    statusTag: 'Free',
    votesCount: 3,
    isSaved: true,
  },
  {
    id: 'photo-2',
    name: 'Kadhal Frames',
    category: 'Visual',
    subcategory: 'Traditional',
    totalPrice: 220000,
    totalPriceFormatted: '₹2.2L total',
    rating: 4.7,
    statusTag: 'Free',
    votesCount: 1,
    isSaved: true,
  },
  {
    id: 'photo-3',
    name: 'Weddings by Mano',
    category: 'Visual',
    subcategory: 'Drone',
    totalPrice: 480000,
    totalPriceFormatted: '₹4.8L total',
    rating: 4.8,
    statusTag: 'On hold',
    isSaved: true,
  },
  {
    id: 'venue-1',
    name: 'Sri Sathyanarayana Mandapam',
    category: 'Space',
    subcategory: 'Kalyana mandapam',
    totalPrice: 310000,
    totalPriceFormatted: '₹3.1L day rate',
    rating: 4.8,
    statusTag: 'Free',
    isSaved: true,
  },
  {
    id: 'purohit-1',
    name: 'Sri Venkatesa Sastrigal',
    category: 'Ritual',
    subcategory: 'Vadakalai Iyengar',
    totalPrice: 42000,
    totalPriceFormatted: '₹42,000 fee',
    rating: 4.9,
    statusTag: 'Free',
    isSaved: true,
  },
  {
    id: 'attire-1',
    name: 'Kanchipuram Silk Saree',
    category: 'Attire',
    subcategory: 'Bridal',
    totalPrice: 142000,
    totalPriceFormatted: '₹1.42L',
    rating: 4.9,
    isSaved: true,
  },
];

interface AppContextType {
  activeScreen: ScreenId;
  history: ScreenId[];
  navigate: (id: ScreenId) => void;
  goBack: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  vendors: VendorItem[];
  toggleSaveVendor: (id: string) => void;
  selectedVendorId: string;
  setSelectedVendorId: (id: string) => void;
  selectedForCompare: string[];
  toggleCompareVendor: (id: string) => void;
  activeBlueprintVendor: VendorItem;
  setActiveBlueprintVendor: (v: VendorItem) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  sortOption: string;
  setSortOption: (sort: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('EverythingYouNeed');
  const [history, setHistory] = useState<ScreenId[]>(['EverythingYouNeed']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [vendors, setVendors] = useState<VendorItem[]>(INITIAL_VENDORS);
  const [selectedVendorId, setSelectedVendorId] = useState<string>('caterer-1');
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>(['photo-1', 'photo-2', 'photo-3']);
  const [activeBlueprintVendor, setActiveBlueprintVendor] = useState<VendorItem>(INITIAL_VENDORS[0]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>('Recommended');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const navigate = (id: ScreenId) => {
    if (id !== activeScreen) {
      setHistory((prev) => [...prev, id]);
      setActiveScreen(id);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevScreen = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setActiveScreen(prevScreen);
    } else {
      setActiveScreen('EverythingYouNeed');
    }
  };

  const toggleSaveVendor = (id: string) => {
    setVendors((prev) =>
      prev.map((v) => {
        if (v.id === id) {
          const nextState = !v.isSaved;
          showToast(nextState ? `Saved ${v.name} to shortlist` : `Removed ${v.name} from shortlist`);
          return { ...v, isSaved: nextState };
        }
        return v;
      })
    );
  };

  const toggleCompareVendor = (id: string) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 3) {
          showToast('You can compare up to 3 vendors');
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        activeScreen,
        history,
        navigate,
        goBack,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        vendors,
        toggleSaveVendor,
        selectedVendorId,
        setSelectedVendorId,
        selectedForCompare,
        toggleCompareVendor,
        activeBlueprintVendor,
        setActiveBlueprintVendor,
        toastMessage,
        showToast,
        sortOption,
        setSortOption,
      }}
    >
      {children}
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#2B2523] text-white text-xs px-4 py-2 rounded-full shadow-lg transition-all animate-bounce">
          {toastMessage}
        </div>
      )}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
