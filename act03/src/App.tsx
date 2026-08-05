import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { InvitePage } from './pages/InvitePage';
import { FamilyPage } from './pages/FamilyPage';
import { VotingPage } from './pages/VotingPage';
import { TasksPage } from './pages/TasksPage';
import { BottomNav } from './components/BottomNav';

export default function App() {
  return (
    <BrowserRouter>
      {/* Centered Desktop Layout Wrapper */}
      <div className="min-h-screen bg-[#F3F0EA] w-full flex justify-center items-start font-sans antialiased text-[#2C2420]">
        <div className="w-full sm:w-[380px] max-w-[380px] min-h-screen bg-[#FDFCF0] border-x border-[#E5E1D8] relative flex flex-col shadow-2xl">
          <Routes>
            <Route path="/invite" element={<InvitePage />} />
            <Route path="/family" element={<FamilyPage />} />
            <Route path="/voting" element={<VotingPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="*" element={<Navigate to="/invite" replace />} />
          </Routes>
          <BottomNav />
        </div>
      </div>
    </BrowserRouter>
  );
}
