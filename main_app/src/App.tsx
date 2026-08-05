import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalBottomNav } from './components/GlobalBottomNav';

import Act01App from './act01/Act01App';
import Act02App from './act02/Act02App';
import Act03App from './act03/Act03App';
import Act04App from './act04/Act04App';
import Act05App from './act05/Act05App';
import Act06App from './act06/Act06App';
import Act07App from './act07/Act07App';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#121212] sm:bg-[#2A2526] flex items-center justify-center font-sans text-[#1D1D1F] p-0 sm:p-4 overflow-hidden">
        {/* Native Mobile Viewport Container */}
        <div className="w-full max-w-[430px] h-[100dvh] sm:h-[850px] sm:max-h-[96vh] sm:rounded-[36px] overflow-hidden flex flex-col relative sm:shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-0 sm:border sm:border-gray-800/60 transition-colors duration-300 bg-white">
          
          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col w-full h-full pb-[72px]">
            <Routes>
              <Route path="/" element={<Navigate to="/act1" replace />} />
              <Route path="/act1/*" element={<Act01App />} />
              <Route path="/act2/*" element={<Act02App />} />
              <Route path="/act3/*" element={<Act03App />} />
              <Route path="/act4/*" element={<Act04App />} />
              <Route path="/act5/*" element={<Act05App />} />
              <Route path="/act6/*" element={<Act06App />} />
              <Route path="/act7/*" element={<Act07App />} />
              <Route path="*" element={<Navigate to="/act1" replace />} />
            </Routes>
          </div>

          <GlobalBottomNav />

          {/* Home Indicator Bar (for realism on desktop, normally hidden on mobile if full screen) */}
          <div className="absolute bottom-0 w-full py-1.5 flex justify-center items-center pointer-events-none z-[10000]">
            <div className="w-[110px] h-[4px] rounded-full bg-black/25" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
