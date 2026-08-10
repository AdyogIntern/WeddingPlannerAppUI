import React, { useState } from 'react';
import { 
  FileCheck, 
  Globe, 
  Building2, 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface Props {
  onNavigateNext?: () => void;
}

export const LegalDocsScreen: React.FC<Props> = ({ onNavigateNext }) => {
  const [actType, setActType] = useState<'hindu' | 'special'>('hindu');
  const [district, setDistrict] = useState('Chennai South (Raja Annamalaipuram)');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [checkList, setCheckList] = useState([
    { id: '1', title: '6x Passport Photos (Groom & Bride with garland/tilak)', completed: true },
    { id: '2', title: ' Kalyana Mandapam Receipt & Wedding Invitation Card', completed: true },
    { id: '3', title: '3 Witnesses with Aadhaar & Address Proof', completed: true },
    { id: '4', title: 'Apostille & MEA Attestation (for US/UK/EU Visa)', completed: false },
    { id: '5', title: 'Spouse Visa Bundle (Photos + Hall Booking + Video URL)', completed: false },
  ]);

  const toggleCheck = (id: string) => {
    setCheckList(checkList.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const handleDownloadBundle = () => {
    setToastMsg('Downloading Official Spouse Visa Evidence Bundle (PDF + Video Proof URL)...');
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-[#E8E0D5]">
        <span className="font-mono-tag text-[10px] text-[#7A2232] uppercase font-bold tracking-wider">
          PART B · MODULE 3 (SERVICE CATALOGUE)
        </span>
        <h1 className="font-serif-title text-[24px] font-bold text-[#1F1A17] leading-tight mt-0.5">
          Legal, Registration & Apostille
        </h1>
        <p className="text-[12px] text-[#756D65] mt-1">
          Marriage registration under HMA/SMA, district registrar checklists, apostille & spouse visa packs for NRIs.
        </p>
      </div>

      <div className="px-5 space-y-4 flex-1 mt-3">
        {/* Act Switcher */}
        <div className="grid grid-cols-2 gap-2 bg-[#ECE4D9] p-1 rounded-xl text-[12px] font-bold">
          <button
            onClick={() => setActType('hindu')}
            className={`py-2 rounded-lg transition-all ${actType === 'hindu' ? 'bg-[#7A2232] text-white shadow-xs' : 'text-[#5C5248]'}`}
          >
            Hindu Marriage Act (HMA)
          </button>
          <button
            onClick={() => setActType('special')}
            className={`py-2 rounded-lg transition-all ${actType === 'special' ? 'bg-[#7A2232] text-white shadow-xs' : 'text-[#5C5248]'}`}
          >
            Special Marriage Act (SMA)
          </button>
        </div>

        {/* District Selector Box */}
        <div className="bg-white p-3.5 rounded-2xl border border-[#E8E0D5] space-y-2">
          <label className="text-[11px] font-mono-tag uppercase text-[#7A2232] font-bold block">
            SELECT REGISTRAR OFFICE (DISTRICT)
          </label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full p-2.5 bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl text-[12.5px] font-semibold text-[#1F1A17] focus:outline-none focus:border-[#7A2232]"
          >
            <option>Chennai South (Raja Annamalaipuram)</option>
            <option>Chennai Central (Royapettah)</option>
            <option>Tambaram (Kanchipuram District)</option>
            <option>Coimbatore Central</option>
            <option>Madurai South</option>
          </select>
        </div>

        {/* Document Checklist Card */}
        <div className="bg-white p-4 rounded-2xl border border-[#E8E0D5] space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title text-[16px] font-bold text-[#1F1A17]">
              District Document Checklist
            </h3>
            <span className="text-[10px] font-mono-tag text-[#2E7D32] bg-[#E2F0D9] px-2 py-0.5 rounded uppercase font-bold">
              3 of 5 Done
            </span>
          </div>

          <div className="space-y-2">
            {checkList.map((item) => (
              <div 
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E8E0D5] flex items-center gap-3 cursor-pointer hover:border-[#7A2232] transition-all"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 ${item.completed ? 'bg-[#2E7D32] text-white' : 'border-2 border-[#C2B7A8]'}`}>
                  {item.completed && '✓'}
                </div>
                <span className={`text-[12px] font-medium ${item.completed ? 'line-through text-[#857B70]' : 'text-[#1F1A17]'}`}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* NRI Apostille & Visa Evidence Pack */}
        <div className="p-4 bg-[#7A2232] text-white rounded-2xl space-y-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#F3E2E5]" />
            <h3 className="font-serif-title text-[18px] font-normal">
              Spouse Visa Evidence Pack
            </h3>
          </div>
          <p className="text-[12px] text-[#F3E2E5] leading-relaxed">
            Assembles invitation cards, mandap booking receipts, priest certificates & 4K live stream recording into a notarized PDF bundle for US H-4 / UK Spouse / EU visas.
          </p>
          <button
            onClick={handleDownloadBundle}
            className="w-full py-2.5 bg-white text-[#7A2232] font-bold text-[12.5px] rounded-xl hover:bg-[#FAF7F2] transition-all flex items-center justify-center gap-1.5 shadow-xs"
          >
            <Download className="w-4 h-4" />
            Download Complete Spouse Visa Evidence Pack (PDF) →
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <div className="mx-5 mb-2 p-3 bg-[#1F1A17] text-white rounded-xl text-[12px] font-medium flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

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
    </div>
  );
};
