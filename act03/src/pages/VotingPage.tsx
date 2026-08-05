import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Header } from '../components/Header';
import { VotingCard, VotingOption } from '../components/VotingCard';
import { DiscussionCard, CommentMessage } from '../components/DiscussionCard';

const INITIAL_OPTIONS: VotingOption[] = [
  {
    id: 'opt_1',
    title: 'Kanakambaram & banana stems',
    priceStudio: '₹1.6L · Bloom & Thread',
    votesCount: 3,
    selected: true,
  },
  {
    id: 'opt_2',
    title: 'White jasmine, minimal',
    priceStudio: '₹2.4L · Studio Verdant',
    votesCount: 1,
    selected: false,
  },
  {
    id: 'opt_3',
    title: 'Temple-style with kolam floor',
    priceStudio: '₹2.0L · Sri Decorators',
    votesCount: 0,
    selected: false,
  },
];

const COMMENTS: CommentMessage[] = [
  {
    id: 'c1',
    author: 'Appa',
    initials: 'RG',
    timestamp: '11:04 am IST',
    text: "Kanakambaram is what your grandmother had. And it's ₹80,000 less.",
    isVendor: false,
    isTinted: false,
  },
  {
    id: 'c2',
    author: 'Priya',
    initials: 'P',
    timestamp: '9:41 pm PST',
    text: 'Can we do kanakambaram with white jasmine on the pillars only? Asked Bloom & Thread for a price.',
    isVendor: false,
    isTinted: true,
  },
  {
    id: 'c3',
    author: 'Bloom & Thread',
    initials: 'B',
    timestamp: '',
    text: 'Possible. ₹1.85L for the mix. Sending two reference photos.',
    isVendor: true,
    isTinted: false,
  },
];

export const VotingPage: React.FC = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState<VotingOption[]>(INITIAL_OPTIONS);
  const [inputVal, setInputVal] = useState('');

  const handleSelectOption = (id: string) => {
    setOptions(
      options.map((opt) => ({
        ...opt,
        selected: opt.id === id,
      }))
    );
  };

  const handleSendComment = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    navigate('/tasks');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        title="Which mandap?"
        subtitle="Voting closes Friday · 4 of 6 voted"
      />

      <main className="p-5 flex-1 space-y-5 pb-28">
        {/* Voting Options */}
        <div className="space-y-3">
          {options.map((opt) => (
            <VotingCard
              key={opt.id}
              option={opt}
              onSelect={() => handleSelectOption(opt.id)}
            />
          ))}
        </div>

        {/* Discussion Section */}
        <div>
          <h2 className="text-[17px] font-medium text-[#2C2420] mt-6 mb-3">
            Discussion · 5
          </h2>

          <div className="space-y-3">
            {COMMENTS.map((c) => (
              <DiscussionCard key={c.id} comment={c} />
            ))}
          </div>
        </div>

        {/* Bottom Discussion Input */}
        <form onSubmit={handleSendComment} className="flex gap-2.5 items-center pt-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Add to the discussion..."
            className="bg-white border border-[#E5E1D8] rounded-xl px-4 py-3 text-[13px] text-[#2C2420] placeholder:text-[#A09588] focus:outline-none focus:border-[#7B1D21] flex-1 shadow-2xs"
          />
          <button
            type="submit"
            className="w-11 h-11 bg-[#7B1D21] hover:bg-[#65171a] text-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors shadow-2xs cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        </form>
      </main>
    </div>
  );
};
