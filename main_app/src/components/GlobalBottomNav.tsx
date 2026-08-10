import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Heart, Search, Users, CreditCard, Calendar, Star, Video } from 'lucide-react';
import { useWeddingStore } from '../act01/store/useWeddingStore';

export const GlobalBottomNav = () => {
  const location = useLocation();
  const currentScreen = useWeddingStore((state) => state.currentScreen);

  // Hide the bottom navigation bar during Act 1 onboarding screens (landing, questions, generating, blueprint_generated, registration)
  if (
    location.pathname.startsWith('/act1') &&
    currentScreen !== 'blueprint_home' &&
    currentScreen !== 'function_details' &&
    currentScreen !== 'compare_plans' &&
    currentScreen !== 'share_plan'
  ) {
    return null;
  }

  const navItems = [
    { id: 'act1', path: '/act1', icon: Heart, label: 'Blueprint' },
    { id: 'act2', path: '/act2', icon: Search, label: 'Vendors' },
    { id: 'act3', path: '/act3', icon: Users, label: 'Guests' },
    { id: 'act4', path: '/act4', icon: CreditCard, label: 'Budget' },
    { id: 'act5', path: '/act5', icon: Calendar, label: 'Day Of' },
    { id: 'act6', path: '/act6', icon: Star, label: 'Moat' },
    { id: 'act7', path: '/act7', icon: Video, label: 'Live' },
  ];

  return (
    <div className="w-full bg-white border-t border-gray-200 py-2 px-4 pb-6 z-[9999] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex-shrink-0">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path) || (item.path === '/act1' && location.pathname === '/');
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
                isActive ? 'text-[#8B1538]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
