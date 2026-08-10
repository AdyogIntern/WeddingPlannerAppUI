import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Send, ChevronLeft } from 'lucide-react';
import { Contributor } from '../types';
import { useWeddingStore } from '../store/useWeddingStore';
import { SendToFamilyModal } from '../components/SendToFamilyModal';

const MOCK_CONTRIBUTORS: Contributor[] = [
  {
    id: 'c1',
    name: "Bride's family",
    amountINR: '₹22.1L',
    percentage: 52,
    categories: 'Venue, catering, purohit, decor',
    color: '#7A1C31',
    avatar: 'A'
  },
  {
    id: 'c2',
    name: 'Priya & Arjun',
    amountINR: '₹11.9L',
    amountUSD: '$14,170',
    percentage: 28,
    categories: 'Photography, outfits, sangeet · paid in USD',
    color: '#B38600',
    avatar: 'P',
    isUser: true
  },
  {
    id: 'c3',
    name: "Groom's family",
    amountINR: '₹6.0L',
    percentage: 14,
    categories: "Reception, groom's side travel",
    color: '#7D766F',
    avatar: 'G'
  },
  {
    id: 'c4',
    name: 'Chithappa · Boston',
    amountINR: '₹2.6L',
    percentage: 6,
    categories: 'Nadaswaram, thamboolam — his gift',
    color: '#B2A99E',
    avatar: 'C'
  }
];

export const WhoPaysWhatScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const isINR = currency === 'INR';
  const [isPrivate, setIsPrivate] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getContributorAmount = (item: Contributor) => {
    if (isINR) {
      return item.amountINR;
    }
    if (item.amountUSD) return item.amountUSD;
    if (item.id === 'c1') return '$26.6K';
    if (item.id === 'c3') return '$7.2K';
    if (item.id === 'c4') return '$3.1K';
    return item.amountINR;
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 animate-fade-in flex flex-col">
      {/* Inline Header */}
      <div className="bg-[#FAF7F2] pt-12 pb-4 px-4 sticky top-0 z-20 shadow-sm flex items-center justify-between border-b border-[#EBE5DC]">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setScreen('blueprint_home')}
            className="p-1.5 rounded-full hover:bg-black/5 transition-colors border-none bg-transparent cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-[#1A1613]" />
          </button>
          <div>
            <h1 className="text-xl font-serif font-bold text-[#1A1613]">Contributions</h1>
            <p className="text-[11px] text-[#625952] mt-0.5">Private. Only you and Appa can see this page.</p>
          </div>
        </div>
        <button
          onClick={() => setScreen('records')}
          className="bg-transparent border-none text-[#7A1C31] text-[13px] font-semibold cursor-pointer hover:underline"
        >
          Records
        </button>
      </div>

      <div className="px-4 py-3 space-y-5 overflow-y-auto flex-1">
        {/* Segmented Distribution Bar */}
        <div className="bg-white border border-[#EBE5DC] rounded-3xl p-4 shadow-2xs">
          <div className="h-3 w-full bg-[#EBE5DC] rounded-full overflow-hidden flex gap-0.5 mb-2">
            <div className="h-full bg-[#7A1C31] w-[52%]" title="Bride's family 52%" />
            <div className="h-full bg-[#B38600] w-[28%]" title="Priya & Arjun 28%" />
            <div className="h-full bg-[#7D766F] w-[14%]" title="Groom's family 14%" />
            <div className="h-full bg-[#B2A99E] w-[6%]" title="Chithappa 6%" />
          </div>

          <div className="flex justify-between items-center text-[11px] text-[#7A716A]">
            <span>Total Logged: <strong className="text-[#1A1613]">{isINR ? '₹42.6L ($50,700)' : '$50,700 (₹42.6L)'}</strong></span>
            <button
              onClick={() => setIsPrivate(!isPrivate)}
              className="flex items-center gap-1 text-[#7A1C31] hover:underline cursor-pointer border-none bg-transparent"
            >
              {isPrivate ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{isPrivate ? 'Private Mode' : 'Shared View'}</span>
            </button>
          </div>
        </div>

        {/* Contributor Cards List */}
        <div className="space-y-2.5">
          {MOCK_CONTRIBUTORS.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className="bg-white border border-[#EBE5DC] hover:border-[#D5CBC0] rounded-2xl p-4 transition-all cursor-pointer shadow-2xs group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {/* Color Marker */}
                    <div
                      className="w-3.5 h-3.5 rounded-sm mt-1 shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <h4 className="text-[15px] font-semibold text-[#1A1613] group-hover:text-[#7A1C31] transition-colors leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[12px] text-[#7A716A] mt-0.5">
                        {item.categories}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0 ml-2">
                    <div className="font-serif-title text-[18px] font-semibold text-[#1A1613] leading-none">
                      {getContributorAmount(item)}
                    </div>
                    <div className="text-[11px] text-[#8C827A] mt-0.5 font-medium">
                      {item.percentage}% {isINR && item.amountUSD ? `· ${item.amountUSD}` : !isINR ? `· ${item.amountINR}` : ''}
                    </div>
                  </div>
                </div>

                {/* Expanded breakdown detail */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-[#F4EFEA] text-[12px] text-[#625952] space-y-1 animate-fade-in">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="font-semibold text-[#2A7E3B]">Verified & Logged</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Method:</span>
                      <span>{item.isUser ? 'USD Direct Remittance' : 'INR Bank Transfer'}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Settling up Card */}
        <div className="bg-white border border-[#EBE5DC] rounded-3xl p-5 shadow-2xs space-y-3">
          <h3 className="font-serif-title text-[20px] text-[#1A1613] font-normal">
            Settling up
          </h3>

          <p className="text-[13px] text-[#625952] leading-relaxed">
            Appa has paid <strong className="font-semibold text-[#1A1613]">{isINR ? '₹3.2L ($3,810)' : '$3,810 (₹3.2L)'}</strong> that belongs to your share. We've noted it — no one has to remember.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#7A1C31] hover:bg-[#6A172A] text-white py-3.5 px-4 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 transition-colors cursor-pointer border-none"
          >
            <Send className="w-4 h-4" />
            {isINR ? 'Send $3,810 (₹3.2L) to Appa' : 'Send $3,810 to Appa'}
          </button>
        </div>

        {/* Privacy Callout Note */}
        <div className="p-4 bg-[#F4EFEA] border border-[#E8E2D9] rounded-2xl text-[12px] text-[#625952] leading-relaxed flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-[#7A1C31] shrink-0 mt-0.5" />
          <span>
            Nobody sees another person's contribution unless you switch this on. Money is the fastest way to make a wedding tense.
          </span>
        </div>
      </div>

      <SendToFamilyModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Send details to Family"
        defaultRecipient="Appa"
      />
    </div>
  );
};
