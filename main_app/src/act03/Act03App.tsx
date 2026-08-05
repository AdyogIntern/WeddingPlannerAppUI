import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { InvitePage } from './pages/InvitePage';
import { FamilyPage } from './pages/FamilyPage';
import { VotingPage } from './pages/VotingPage';
import { TasksPage } from './pages/TasksPage';
import { BottomNav } from './components/BottomNav';

export default function App() {
  return (
    <div className="w-full h-full bg-[#FDFCF0] relative flex flex-col font-sans antialiased text-[#2C2420]">
      <Routes>
        <Route path="/invite" element={<InvitePage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/voting" element={<VotingPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="*" element={<Navigate to="invite" replace />} />
      </Routes>
      <BottomNav />
    </div>
  );
}
