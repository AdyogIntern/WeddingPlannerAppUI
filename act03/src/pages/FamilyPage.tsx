import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Avatar } from '../components/Avatar';
import { ApprovalCard } from '../components/ApprovalCard';

export const FamilyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToVoting = () => {
    navigate('/voting');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        title="Family"
        subtitle="6 people · 4 active this week"
      />

      <main className="p-5 flex-1 space-y-5 pb-24">
        {/* Section 1: Who owns what */}
        <div>
          <h2 className="text-[17px] font-medium text-[#2C2420] mb-3">
            Who owns what
          </h2>

          <div className="space-y-2.5">
            {/* Appa Card */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#E5E1D8] shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar initials="RG" />
                <div>
                  <h3 className="font-semibold text-[15px] text-[#2C2420] leading-snug">
                    Appa
                  </h3>
                  <p className="text-[12px] text-[#867A6E]">
                    Venue · Catering · Purohit
                  </p>
                </div>
              </div>
              <span className="bg-[#FDF1F1] text-[#7B1D21] px-2.5 py-0.5 text-[10px] font-bold tracking-wider rounded-md">
                APPROVES
              </span>
            </div>

            {/* Meera Card */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#E5E1D8] shadow-2xs flex items-center gap-3">
              <Avatar initials="M" />
              <div>
                <h3 className="font-semibold text-[15px] text-[#2C2420] leading-snug">
                  Meera
                </h3>
                <p className="text-[12px] text-[#867A6E]">
                  Mehendi · Sangeet · Return gifts
                </p>
              </div>
            </div>

            {/* Patti Card */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#E5E1D8] shadow-2xs flex items-center gap-3">
              <Avatar initials="P" />
              <div>
                <h3 className="font-semibold text-[15px] text-[#2C2420] leading-snug">
                  Patti
                </h3>
                <p className="text-[12px] text-[#867A6E]">
                  Viewing by WhatsApp link — no app
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Approval Needed Card */}
        <div>
          <ApprovalCard
            onClick={handleNavigateToVoting}
            onApprove={handleNavigateToVoting}
            onDiscuss={handleNavigateToVoting}
          />
        </div>

        {/* Section 3: This week activity log */}
        <div>
          <h2 className="text-[17px] font-medium text-[#2C2420] mt-6 mb-3">
            This week
          </h2>

          <div className="space-y-3.5 pl-1">
            {/* Activity 1 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[#7B1D21] mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] text-[#2C2420]">
                  Meera shortlisted <strong className="font-semibold">4 photographers</strong>
                </p>
                <p className="text-[11px] text-[#867A6E] mt-0.5">
                  Tue · 8:40 pm IST
                </p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4C8B5] mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] text-[#2C2420]">
                  Appa approved <strong className="font-semibold">Sri Amirtham Catering</strong>
                </p>
                <p className="text-[11px] text-[#867A6E] mt-0.5">
                  Mon · 11:02 am IST
                </p>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-[#D4C8B5] mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] text-[#2C2420]">
                  Patti reacted to the mandap decor
                </p>
                <p className="text-[11px] text-[#867A6E] mt-0.5">
                  Sun · 6:15 pm IST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Digest Info Banner */}
        <div className="bg-[#FDF1F1] p-4 rounded-xl text-[#7C6E63] text-[12px] leading-relaxed mt-6">
          Weekly digest goes out on WhatsApp every Sunday, 7 pm IST — so nobody has to open the app to stay in the loop.
        </div>
      </main>
    </div>
  );
};
