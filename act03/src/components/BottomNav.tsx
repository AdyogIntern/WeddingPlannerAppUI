import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserPlus, Users, Vote, CheckSquare } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/invite', label: 'Invite', icon: UserPlus },
    { path: '/family', label: 'Family', icon: Users },
    { path: '/voting', label: 'Voting', icon: Vote },
    { path: '/tasks', label: 'Tasks', icon: CheckSquare },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[380px] bg-white/95 backdrop-blur-md border-t border-[#E5E1D8] py-2 px-3 flex justify-around items-center z-50 shadow-xs">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/invite');

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${
              isActive
                ? 'text-[#7B1D21] font-semibold'
                : 'text-[#867A6E] hover:text-[#2C2420]'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            <span className="text-[11px] tracking-tight">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
