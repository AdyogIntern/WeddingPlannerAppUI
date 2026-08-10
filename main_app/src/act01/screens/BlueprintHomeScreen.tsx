import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { colors } from '../theme';
import { useWeddingStore } from '../store/useWeddingStore';
import { 
  Search, 
  Check, 
  Plus, 
  Calendar, 
  LayoutGrid, 
  ShoppingBag, 
  Users, 
  Sparkles, 
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  Clock,
  ArrowRight,
  MessageSquare,
  FileText,
  Copy,
  Mail,
  Lock
} from 'lucide-react';

import { GuestsDashboardScreen } from './GuestsDashboardScreen';

type TabType = 'timeline' | 'budget' | 'family' | 'guests';

export const BlueprintHomeScreen: React.FC = () => {
  const { 
    functions, 
    weddingScore, 
    setScreen, 
    setSelectedFunctionId, 
    getTotalCostINR, 
    getTotalCostInCurrency, 
    currency,
    addFunction
  } = useWeddingStore();

  // Active Bottom Tab: 'today' | 'blueprint' | 'vendors' | 'family' | 'rituals'
  const [activeBottomTab, setActiveBottomTab] = useState<'today' | 'blueprint' | 'vendors' | 'family' | 'rituals'>('blueprint');

  const searchParams = new URLSearchParams(window.location.search);
  const initialTab = searchParams.get('tab') as TabType || 'timeline';
  const [activeSubTab, setActiveSubTab] = useState<TabType>(initialTab);

  const [copiedLink, setCopiedLink] = useState(false);
  const [sentWhatsApp, setSentWhatsApp] = useState(false);

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSendWhatsApp = () => {
    setSentWhatsApp(true);
    setTimeout(() => setSentWhatsApp(false), 2000);
  };

  const totalINR = getTotalCostINR();
  const totalCurr = getTotalCostInCurrency();

  const handleOpenFunction = (fnId: string) => {
    setSelectedFunctionId(fnId);
    setScreen('function_details');
  };

  const handleBottomTabChange = (tab: 'today' | 'blueprint' | 'vendors' | 'family' | 'rituals') => {
    setActiveBottomTab(tab);
    if (tab === 'vendors') {
      setScreen('compare_plans');
    } else if (tab === 'family') {
      setScreen('share_plan');
    }
  };

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: '#FAF8F5', 
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* ================= HEADER SECTION ================= */}
      {activeBottomTab === 'today' ? (
        /* TODAY HEADER */
        <div className="bg-[#671B2B] text-white px-5 pt-3 pb-4 rounded-b-2xl shrink-0 shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setScreen('questions')}
                title="Back to Questions"
                className="bg-white/10 hover:bg-white/20 p-1.5 rounded-lg text-white border-none cursor-pointer flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <div>
                <h1 className="text-xl font-serif font-bold tracking-tight">Good morning, Priya</h1>
                <p className="text-[11px] text-white/80 mt-0.5">198 days to the muhurtham · {weddingScore}% planned</p>
              </div>
            </div>
            <button className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full text-white border-none cursor-pointer">
              <Search size={16} />
            </button>
          </div>
          {/* Progress bar line */}
          <div className="w-full bg-black/20 h-1 rounded-full mt-3 overflow-hidden">
            <div className="bg-[#D4AF37] h-full rounded-full" style={{ width: `${weddingScore}%` }} />
          </div>
        </div>
      ) : (
        /* BLUEPRINT HEADER */
        <div className="bg-[#671B2B] text-white px-5 pt-3 pb-3 rounded-b-2xl shrink-0 shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setScreen('questions')}
                title="Back to Questions"
                className="bg-white/10 hover:bg-white/20 p-1.5 rounded-lg text-white border-none cursor-pointer flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <div>
                <h1 className="text-xl font-serif font-bold tracking-tight">Priya & Arjun</h1>
                <p className="text-[11px] text-white/80 mt-0.5">14 Feb 2027 · Chennai · 5 functions · 420 guests</p>
              </div>
            </div>
            <span className="text-[9px] font-semibold text-[#F5E9C8] bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
              Priya's version
            </span>
          </div>

          {/* Progress Banner */}
          <div className="flex justify-between items-center text-[10.5px] mt-2.5 pt-2 border-t border-white/15">
            <span>Your wedding is <strong className="text-[#D4AF37]">{weddingScore}% planned</strong></span>
            <span className="text-white/80">198 days to go</span>
          </div>

          <div className="w-full bg-black/20 h-1 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-[#D4AF37] h-full rounded-full" style={{ width: `${weddingScore}%` }} />
          </div>
        </div>
      )}

      {/* ================= SUB TABS FOR BLUEPRINT ================= */}
      {activeBottomTab === 'blueprint' && (
        <div className="flex items-center justify-around border-b border-[#E5E0D8] bg-[#FAF8F5] shrink-0 text-xs font-semibold px-2 pt-1">
          {(['timeline', 'budget', 'family', 'guests'] as const).map(tab => {
            const isActive = activeSubTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`py-2 px-3 capitalize border-none bg-transparent cursor-pointer relative transition-colors ${
                  isActive ? 'text-[#671B2B] font-bold' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#671B2B] rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* ================= MAIN SCROLLABLE CONTENT ================= */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', gap: '14px' }}>
        
        {/* VIEW 1: TODAY FEED */}
        {activeBottomTab === 'today' && (
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
              NEEDS YOU TODAY
            </div>

            {/* Action Card 1: Appa approved venue */}
            <div className="bg-white p-3.5 rounded-2xl border-2 border-[#671B2B] shadow-2xs space-y-2">
              <div>
                <h3 className="text-xs font-bold text-gray-900">Appa approved the venue at 6:40 am</h3>
                <p className="text-[10.5px] text-gray-600 mt-0.5">
                  You can confirm the booking and place the advance in escrow.
                </p>
              </div>
              <button 
                onClick={() => handleOpenFunction('f4')}
                className="w-[72%] max-w-[220px] mx-auto py-2.5 bg-[#671B2B] text-white rounded-md text-xs font-bold border-none cursor-pointer hover:bg-[#521422] transition-colors text-center block"
              >
                Confirm booking
              </button>
            </div>

            {/* Action Card 2: Photo vote */}
            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center text-xs font-bold text-[#671B2B]">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Photography vote closes Friday</h4>
                  <p className="text-[10px] text-gray-500">2 people still to vote</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </div>

            {/* Action Card 3: Passport copies */}
            <div className="bg-[#FFF5F5] p-3 rounded-2xl border border-[#FEB2B2] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center text-xs font-bold text-red-600">
                  !
                </div>
                <div>
                  <h4 className="text-xs font-bold text-red-900">Passport copies for visa letters</h4>
                  <p className="text-[10px] text-red-600 font-semibold">2 days late</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-red-400" />
            </div>

            {/* WHILE YOU SLEPT SECTION */}
            <div className="pt-2">
              <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-2">
                WHILE YOU SLEPT
              </div>

              <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] space-y-2.5 text-xs text-gray-800">
                <div className="flex items-start gap-2">
                  <span className="text-[#671B2B] font-bold mt-0.5">•</span>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900">
                      Bloom & Thread replied with a ₹1.85L mandap option
                    </p>
                    <span className="text-[9.5px] text-gray-400">2:14 am PST · 2:44 pm IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 border-t border-gray-100 pt-2">
                  <span className="text-[#671B2B] font-bold mt-0.5">•</span>
                  <p className="text-[11px] text-gray-800">
                    Meera added 4 mehendi artists to the shortlist
                  </p>
                </div>

                <div className="flex items-start gap-2 border-t border-gray-100 pt-2">
                  <span className="text-[#671B2B] font-bold mt-0.5">•</span>
                  <p className="text-[11px] text-gray-800">
                    Patti reacted to the Sumangali Prarthanai menu
                  </p>
                </div>
              </div>

              {/* Explainer Box */}
              <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#E0D6C5] text-[10.5px] text-[#5C5245] mt-2.5 leading-snug">
                Nothing here needs a phone call. That is the whole point of the app for a family in three timezones.
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: BLUEPRINT TIMELINE */}
        {activeBottomTab === 'blueprint' && activeSubTab === 'timeline' && (
          <div className="space-y-3">
            {functions.map(fn => (
              <div 
                key={fn.id}
                onClick={() => handleOpenFunction(fn.id)}
                className={`bg-white p-3.5 rounded-2xl shadow-2xs cursor-pointer transition-all ${
                  fn.name === 'Muhurtham' ? 'border-2 border-[#671B2B] space-y-2.5' : 'border border-[#E5E0D8] hover:border-[#671B2B]'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-gray-900">{fn.name}</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      {fn.date} · {fn.timeSlot} · {fn.guests} guests
                    </p>
                  </div>
                  {fn.name === 'Nichayathartham' && (
                    <span className="bg-[#E8F5E9] text-[#2E7D32] text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider">
                      BOOKED
                    </span>
                  )}
                  {fn.name === 'Muhurtham' && (
                    <span className="bg-[#FFF8E1] text-[#B78103] border border-[#FFE082] text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider">
                      4 SLOTS OPEN
                    </span>
                  )}
                  {fn.name !== 'Nichayathartham' && fn.name !== 'Muhurtham' && fn.owner && (
                    <span className="text-[10px] font-semibold text-gray-500">
                      {fn.owner}
                    </span>
                  )}
                </div>

                {fn.name === 'Muhurtham' && (
                  <>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      <span className="bg-[#FFF0F3] text-[#671B2B] border border-[#F8C8D4] text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                        Venue <Check size={10} />
                      </span>
                      <span className="bg-[#FAF8F5] text-gray-700 border border-[#E5E0D8] text-[10px] font-medium px-2 py-0.5 rounded-md">
                        + Catering
                      </span>
                      <span className="bg-[#FAF8F5] text-gray-700 border border-[#E5E0D8] text-[10px] font-medium px-2 py-0.5 rounded-md">
                        + Purohit
                      </span>
                      <span className="bg-[#FAF8F5] text-gray-700 border border-[#E5E0D8] text-[10px] font-medium px-2 py-0.5 rounded-md">
                        + Nadaswaram
                      </span>
                      <span className="bg-[#FAF8F5] text-gray-700 border border-[#E5E0D8] text-[10px] font-medium px-2 py-0.5 rounded-md">
                        + Decor
                      </span>
                    </div>
                    <div className="border-t border-dashed border-gray-200 pt-2 flex items-center gap-2 mt-2">
                      <div className="w-5 h-5 rounded-full bg-[#E5E0D8] text-[9px] font-bold text-gray-700 flex items-center justify-center shrink-0">
                        RG
                      </div>
                      <p className="text-[10px] text-gray-500 font-medium">
                        Appa owns this function's venue & catering
                      </p>
                    </div>
                  </>
                )}
                
                {fn.name === 'Nichayathartham' && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <span className="bg-[#FAF8F5] text-gray-700 border border-[#E5E0D8] text-[10px] font-medium px-2 py-0.5 rounded-md">
                      Venue · Raintree Hall
                    </span>
                    <span className="bg-[#FAF8F5] text-gray-700 border border-[#E5E0D8] text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
                      Catering <Check size={10} className="text-green-600" />
                    </span>
                    <span className="bg-[#FAF8F5] text-gray-700 border border-[#E5E0D8] text-[10px] font-medium px-2 py-0.5 rounded-md">
                      Photo — 3 shortlisted
                    </span>
                  </div>
                )}
              </div>
            ))}

            {/* Add a Function Dashed Button */}
            <button
              onClick={() => addFunction()}
              className="w-full py-3 rounded-2xl border-2 border-dashed border-[#C9A227]/70 text-center bg-white/40 text-xs font-bold text-[#671B2B] flex items-center justify-center gap-1.5 cursor-pointer hover:bg-white transition-all"
            >
              <Plus size={14} />
              <span>+ Add a function</span>
            </button>
          </div>
        )}

        {/* VIEW 3: BUDGET BREAKDOWN SUBTAB */}
        {activeBottomTab === 'blueprint' && activeSubTab === 'budget' && (
          <div className="space-y-2.5">
            <div className="bg-white p-4 rounded-2xl border border-[#E5E0D8] text-center space-y-1">
              <div className="text-2xl font-serif font-bold text-[#671B2B]">
                ₹{(totalINR / 100000).toFixed(1)} Lakhs
              </div>
              <p className="text-[11px] text-gray-500">
                ≈ {currency} ${totalCurr.toLocaleString()} Total Estimated Budget
              </p>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] space-y-2">
              <div className="text-xs font-bold text-gray-900">Category Breakdown</div>
              {[
                { name: 'Venues & Halls', inr: '₹18.5L', pct: '42%' },
                { name: 'Traditional Catering', inr: '₹11.2L', pct: '26%' },
                { name: 'Decor & Mandap', inr: '₹6.8L', pct: '15%' },
                { name: 'Photo & Video', inr: '₹4.2L', pct: '10%' },
                { name: 'Purohit & Rituals', inr: '₹2.1L', pct: '5%' },
              ].map(item => (
                <div key={item.name} className="flex justify-between items-center text-xs py-1 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 block">{item.inr}</span>
                    <span className="text-[9.5px] text-gray-400">{item.pct}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: FAMILY PERMISSIONS SUBTAB */}
        {activeBottomTab === 'blueprint' && activeSubTab === 'family' && (
          <div className="space-y-4">
            <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] space-y-2">
              <div className="text-xs font-bold text-gray-900">Family Co-Planners</div>
              {[
                { name: 'Appa (R. Gopal)', role: 'Owner: Venue & Catering', status: 'Active' },
                { name: 'Meera (Sister)', role: 'Owner: Mehendi & Sangeet', status: 'Active' },
                { name: 'Patti (Grandmother)', role: 'Owner: Sumangali Prarthanai', status: 'Active' },
                { name: 'Arjun (Groom)', role: 'Co-owner: Photography', status: 'Active' },
              ].map(person => (
                <div key={person.name} className="flex justify-between items-center text-xs py-1.5 border-b border-gray-100 last:border-0">
                  <div>
                    <span className="font-bold text-gray-900 block">{person.name}</span>
                    <span className="text-[10px] text-gray-500">{person.role}</span>
                  </div>
                  <span className="text-[10px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded-full border border-green-200">
                    {person.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Share Invitation Section */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-900">Share Invitation</h3>
              <div 
                onClick={() => setScreen('invitation')}
                className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs flex items-center gap-3 cursor-pointer hover:border-[#671B2B] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FFF0F3] text-[#671B2B] flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Digital Invitation</h3>
                  <p className="text-[10px] text-gray-500 mt-0.5">WhatsApp card, email, or print-ready</p>
                </div>
              </div>
            </div>

            {/* Who Pays What Section */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-900">Financials</h3>
              <div 
                onClick={() => setScreen('who_pays')}
                className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs flex items-center gap-3 cursor-pointer hover:border-[#671B2B] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F4EFEA] text-[#7A1C31] flex items-center justify-center shrink-0">
                  <Lock size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Who pays what</h3>
                  <p className="text-[10px] text-gray-500 mt-0.5">4 people paying across INR and USD. Only Appa and you can see this.</p>
                </div>
              </div>
            </div>

            {/* 3 Main Action Cards */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-900">Share the Blueprint</h3>
              {/* Card 1: Send on WhatsApp */}
              <div 
                onClick={handleSendWhatsApp}
                className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs flex items-center gap-3 cursor-pointer hover:border-[#2E7D32] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Send on WhatsApp</h3>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {sentWhatsApp ? 'Link copied to share!' : 'Opens in the browser — no app to install'}
                  </p>
                </div>
              </div>

              {/* Card 2: Download as PDF */}
              <div 
                onClick={() => setScreen('share_plan')}
                className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs flex items-center gap-3 cursor-pointer hover:border-[#671B2B] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FFF0F3] text-[#671B2B] flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Download as PDF</h3>
                  <p className="text-[10px] text-gray-500 mt-0.5">14 pages · day-by-day, with costs</p>
                </div>
              </div>

              {/* Card 3: Copy view-only link */}
              <div 
                onClick={handleCopyLink}
                className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs flex items-center gap-3 cursor-pointer hover:border-[#D97706] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <Copy size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Copy view-only link</h3>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {copiedLink ? 'Link copied!' : 'Expires in 30 days'}
                  </p>
                </div>
              </div>
            </div>

            {/* What they'll see Section */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xs font-bold text-gray-900">What they'll see</h3>

              <div className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shadow-2xs space-y-2.5">
                <div className="text-xs font-serif font-bold text-gray-900 border-b border-gray-100 pb-2">
                  Priya & Arjun · 12–14 Feb 2027
                </div>

                <div className="space-y-2 text-[11px] text-gray-800">
                  <div className="flex justify-between items-center">
                    <span>Nichayathartham · Fri 9 am</span>
                    <span className="font-bold font-sans">120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Panda Kaal Muhurtham · Fri 4 pm</span>
                    <span className="font-bold font-sans">60</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sumangali Prarthanai · Sat 8 am</span>
                    <span className="font-bold font-sans">80</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mehendi & Sangeet · Sat 6 pm</span>
                    <span className="font-bold font-sans">180</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Muhurtham · Sun 6:30 am</span>
                    <span className="font-bold font-sans">420</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Reception · Sun 7 pm</span>
                    <span className="font-bold font-sans">500</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-2 text-[9.5px] text-gray-400 leading-snug">
                  Viewers can read and comment. They cannot change anything or see payment details.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: GUESTS SUBTAB */}
        {activeBottomTab === 'blueprint' && activeSubTab === 'guests' && (
          <div className="flex-1 mt-4">
            <GuestsDashboardScreen 
              onGenerateVisaLetters={() => setScreen('visa_letter')}
            />
          </div>
        )}

        {/* RITUALS / VENDORS fallback view */}
        {(activeBottomTab === 'rituals' || activeBottomTab === 'vendors') && (
          <div className="p-4 bg-white rounded-2xl border border-[#E5E0D8] text-center space-y-2">
            <h3 className="text-sm font-bold text-gray-900">Redirecting to Vendors & Rituals...</h3>
            <button 
              onClick={() => setScreen('compare_plans')}
              className="w-[72%] max-w-[220px] py-2.5 bg-[#671B2B] text-white rounded-md text-xs font-bold border-none cursor-pointer text-center mx-auto block"
            >
              Open Vendor Comparison Engine
            </button>
          </div>
        )}

      </View>

    </View>
  );
};
