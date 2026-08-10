import React, { useState } from 'react';
import { 
  CreditCard, 
  Mic, 
  CheckCircle2, 
  Gift, 
  QrCode, 
  FileText, 
  AlertTriangle, 
  Search,
  Plus
} from 'lucide-react';

interface MoiEntry {
  id: string;
  name: string;
  relationship: string;
  amount: number;
  functionName: string;
  verifiedBy: string;
  timestamp: string;
}

interface GiftEntry {
  id: string;
  giver: string;
  item: string;
  duplicateFlag?: boolean;
  thankYouSent: boolean;
}

interface Props {
  onNavigateNext?: () => void;
}

export const MoiLedgerScreen: React.FC<Props> = ({ onNavigateNext }) => {
  const [activeTab, setActiveTab] = useState<'moi' | 'digital' | 'gifts' | 'announcer'>('moi');
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [announcerActive, setAnnouncerActive] = useState(false);

  const [moiEntries, setMoiEntries] = useState<MoiEntry[]>([
    { id: '1', name: 'S. Ramanathan (Athimber)', relationship: 'Paternal Uncle', amount: 10001, functionName: 'Muhurtham', verifiedBy: 'M. Sundaram', timestamp: '08:15 AM' },
    { id: '2', name: 'Dr. K. Swaminathan & Family', relationship: 'Family Friend (US)', amount: 25000, functionName: 'Muhurtham', verifiedBy: 'M. Sundaram', timestamp: '08:22 AM' },
    { id: '3', name: 'R. Meenakshi & S. Sivaraman', relationship: 'Maternal Aunt', amount: 5001, functionName: 'Reception', verifiedBy: 'V. Natarajan', timestamp: '08:35 AM' },
  ]);

  const [giftEntries, setGiftEntries] = useState<GiftEntry[]>([
    { id: 'g1', giver: 'V. Parthasarathy', item: 'Prestige 5L Pressure Cooker', duplicateFlag: true, thankYouSent: false },
    { id: 'g2', giver: 'K. Rukmini Ammal', item: 'Silver Lamp (Kuthuvilakku - 2.5kg)', duplicateFlag: false, thankYouSent: true },
    { id: 'g3', giver: 'S. Ananth & Chitra', item: 'Prestige 5L Pressure Cooker', duplicateFlag: true, thankYouSent: false },
  ]);

  const [newName, setNewName] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newRelation, setNewRelation] = useState('');

  const totalMoiCash = moiEntries.reduce((sum, e) => sum + e.amount, 0);

  const handleAddMoi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newAmount) return;
    const entry: MoiEntry = {
      id: Date.now().toString(),
      name: newName,
      relationship: newRelation || 'Relative',
      amount: parseFloat(newAmount),
      functionName: 'Muhurtham',
      verifiedBy: 'Counter 1 (Signed)',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMoiEntries([entry, ...moiEntries]);
    setNewName('');
    setNewAmount('');
    setNewRelation('');
    setToastMsg(`Logged ₹${entry.amount.toLocaleString('en-IN')} from ${entry.name}. Printed receipt #MR-${Math.floor(Math.random() * 899 + 100)}.`);
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-[#E8E0D5]">
        <span className="font-mono-tag text-[10px] text-[#7A2232] uppercase font-bold tracking-wider">
          PART B · MODULE 1 (SERVICE CATALOGUE)
        </span>
        <h1 className="font-serif-title text-[24px] font-bold text-[#1F1A17] leading-tight mt-0.5">
          Moi & Gift Ledger
        </h1>
        <p className="text-[12px] text-[#756D65] mt-1">
          Two-person entry verification, traditional mic announcer mode & duplicate gift detection.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="px-5 pt-3 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11.5px] font-semibold">
        <button
          onClick={() => setActiveTab('moi')}
          className={`py-1.5 px-3 rounded-xl transition-all whitespace-nowrap ${activeTab === 'moi' ? 'bg-[#7A2232] text-white shadow-xs' : 'bg-[#ECE4D9] text-[#5C5248]'}`}
        >
          📖 Cash Ledger (₹{totalMoiCash.toLocaleString('en-IN')})
        </button>
        <button
          onClick={() => setActiveTab('digital')}
          className={`py-1.5 px-3 rounded-xl transition-all whitespace-nowrap ${activeTab === 'digital' ? 'bg-[#7A2232] text-white shadow-xs' : 'bg-[#ECE4D9] text-[#5C5248]'}`}
        >
          💳 Digital Moi (UPI)
        </button>
        <button
          onClick={() => setActiveTab('announcer')}
          className={`py-1.5 px-3 rounded-xl transition-all whitespace-nowrap ${activeTab === 'announcer' ? 'bg-[#7A2232] text-white shadow-xs' : 'bg-[#ECE4D9] text-[#5C5248]'}`}
        >
          🎙️ Mic Announcer Mode
        </button>
        <button
          onClick={() => setActiveTab('gifts')}
          className={`py-1.5 px-3 rounded-xl transition-all whitespace-nowrap ${activeTab === 'gifts' ? 'bg-[#7A2232] text-white shadow-xs' : 'bg-[#ECE4D9] text-[#5C5248]'}`}
        >
          🎁 Gift Register & Flags
        </button>
      </div>

      <div className="px-5 space-y-4 flex-1 mt-2">
        {/* TAB 1: CASH LEDGER */}
        {activeTab === 'moi' && (
          <>
            {/* Real-time Summary Bar */}
            <div className="p-3.5 bg-[#FAF0EC] border border-[#7A2232]/20 rounded-2xl flex items-center justify-between text-[12.5px]">
              <div>
                <span className="text-[11px] text-[#7A2232] font-mono-tag font-bold uppercase">TOTAL MOI COLLECTED</span>
                <p className="font-bold text-[20px] text-[#7A2232]">₹{totalMoiCash.toLocaleString('en-IN')}</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-[#756D65] block">Two Counter Signatures</span>
                <span className="text-[11px] font-bold text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded">Verified & Banked</span>
              </div>
            </div>

            {/* Quick Add Form */}
            <form onSubmit={handleAddMoi} className="bg-white p-3.5 rounded-2xl border border-[#E8E0D5] space-y-2.5">
              <span className="text-[11px] font-bold text-[#7A2232] font-mono-tag uppercase">QUICK ENTRY (DESK CLERK)</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Giver Name (e.g. S. Ramanathan)"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="p-2 border border-[#E8E0D5] rounded-xl text-[12px] bg-[#FAF7F2] focus:outline-none focus:border-[#7A2232]"
                  required
                />
                <input
                  type="number"
                  placeholder="Amount (₹ e.g. 10001)"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="p-2 border border-[#E8E0D5] rounded-xl text-[12px] bg-[#FAF7F2] focus:outline-none focus:border-[#7A2232]"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Relationship / City (e.g. Paternal Uncle, Madurai)"
                value={newRelation}
                onChange={(e) => setNewRelation(e.target.value)}
                className="w-full p-2 border border-[#E8E0D5] rounded-xl text-[12px] bg-[#FAF7F2] focus:outline-none focus:border-[#7A2232]"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#7A2232] text-white font-bold rounded-xl text-[12px] hover:bg-[#5A1924] transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Entry & Print Thermal Slip
              </button>
            </form>

            {/* Recent Ledger Entries */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono-tag uppercase text-[#857B70] font-bold">RECONCILED ENTRIES</span>
              {moiEntries.map((e) => (
                <div key={e.id} className="bg-white p-3 rounded-xl border border-[#E8E0D5] flex items-center justify-between text-[12.5px]">
                  <div>
                    <h4 className="font-bold text-[#1F1A17]">{e.name}</h4>
                    <p className="text-[11px] text-[#756D65]">{e.relationship} · Verified by {e.verifiedBy}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#7A2232] text-[14px]">₹{e.amount.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-[#857B70] block">{e.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* TAB 2: DIGITAL MOI */}
        {activeTab === 'digital' && (
          <div className="bg-white p-4 rounded-2xl border border-[#E8E0D5] space-y-4 text-center">
            <QrCode className="w-16 h-16 text-[#7A2232] mx-auto" />
            <div>
              <h3 className="font-serif-title text-[18px] font-bold text-[#1F1A17]">Digital Moi for Overseas & Remote Guests</h3>
              <p className="text-[12px] text-[#756D65] mt-1">
                Direct UPI / International Card payment portal attached to digital invitation card.
              </p>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-xl text-left text-[12px] space-y-1.5 border border-[#E8E0D5]">
              <div className="flex justify-between">
                <span className="text-[#756D65]">UPI ID:</span>
                <span className="font-mono font-bold text-[#1F1A17]">priyaarjun.moi@icici</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#756D65]">Auto-Receipts Sent:</span>
                <span className="font-bold text-[#2E7D32]">18 Guests (₹1,45,000)</span>
              </div>
            </div>

            <button
              onClick={() => {
                setToastMsg('Digital Moi UPI Link copied to share on WhatsApp!');
                setTimeout(() => setToastMsg(null), 3000);
              }}
              className="w-full py-2.5 bg-[#7A2232] text-white font-bold rounded-xl text-[12.5px] hover:bg-[#5A1924] transition-all"
            >
              Copy Invitation Digital Moi Link →
            </button>
          </div>
        )}

        {/* TAB 3: MIC ANNOUNCER MODE */}
        {activeTab === 'announcer' && (
          <div className="bg-white p-4 rounded-2xl border border-[#E8E0D5] space-y-3">
            <div className="flex items-center gap-2">
              <Mic className={`w-5 h-5 ${announcerActive ? 'text-[#2E7D32] animate-pulse' : 'text-[#7A2232]'}`} />
              <h3 className="font-serif-title text-[17px] font-bold text-[#1F1A17]">Mic Announcer Teleprompter</h3>
            </div>
            <p className="text-[12px] text-[#756D65]">
              Designed for the stage mic announcer with exact Tamil/English pronunciation notes and relationship context.
            </p>

            <div className="p-3 bg-[#FAF0EC] rounded-xl border border-[#7A2232]/30 space-y-2 text-[13px]">
              <p className="font-bold text-[#7A2232]">NEXT TO ANNOUNCE:</p>
              <p className="text-[15px] font-bold text-[#1F1A17]">"Dr. K. Swaminathan and Family from Houston, Texas — Paternal Uncle side — ₹25,000"</p>
              <p className="text-[11px] text-[#756D65] italic">Phonetic hint: "Dr. K. Swa-mi-na-than"</p>
            </div>

            <button
              onClick={() => {
                setAnnouncerActive(!announcerActive);
                setToastMsg(announcerActive ? 'Mic Announcer Mode Paused.' : 'Mic Announcer Mode Active on Stage Monitor!');
                setTimeout(() => setToastMsg(null), 3000);
              }}
              className={`w-full py-2.5 font-bold rounded-xl text-[12.5px] transition-all ${
                announcerActive ? 'bg-[#2E7D32] text-white' : 'bg-[#7A2232] text-white hover:bg-[#5A1924]'
              }`}
            >
              {announcerActive ? '✓ Announcer Teleprompter Active' : 'Start Mic Announcer Mode →'}
            </button>
          </div>
        )}

        {/* TAB 4: GIFTS & DUPLICATES */}
        {activeTab === 'gifts' && (
          <div className="space-y-3">
            <div className="p-3 bg-[#FFF8E1] border border-[#FFE082] rounded-xl flex items-center gap-2 text-[12px] text-[#8D6E63]">
              <AlertTriangle className="w-4 h-4 text-[#F57F17] shrink-0" />
              <span>Duplicate Gift Alert: 2 identical Prestige 5L Pressure Cookers logged! Flagged before sending thank-you cards.</span>
            </div>

            <div className="space-y-2">
              {giftEntries.map((g) => (
                <div key={g.id} className="bg-white p-3 rounded-xl border border-[#E8E0D5] flex items-center justify-between text-[12.5px]">
                  <div>
                    <h4 className="font-bold text-[#1F1A17]">{g.item}</h4>
                    <p className="text-[11px] text-[#756D65]">From: {g.giver}</p>
                  </div>
                  <div className="text-right">
                    {g.duplicateFlag ? (
                      <span className="text-[10px] font-bold text-[#D32F2F] bg-[#FFEBEE] px-2 py-0.5 rounded">Duplicate Flagged</span>
                    ) : (
                      <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded">Unique Item</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed Footer Action */}
      {onNavigateNext && (
        <div className="px-5 pt-3 sticky bottom-0 bg-[#FAF7F2] border-t border-[#E8E0D5]/50 pb-2">
          <button 
            onClick={onNavigateNext}
            className="w-full py-3.5 px-4 bg-[#7A2232] text-white font-bold text-[14px] rounded-xl hover:bg-[#5A1924] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Continue</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Toast Notification */}
      {toastMsg && (
        <div className="mx-5 mb-2 p-3 bg-[#1F1A17] text-white rounded-xl text-[12px] font-medium flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
};
