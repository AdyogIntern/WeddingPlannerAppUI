import React, { useState } from 'react';
import { FileText, PhoneCall, CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import { AppHeader } from '../components/Header';
import { DocumentCard } from '../components/reusable/Cards';
import { DocumentItem } from '../types';

interface Screen29Props {
  documents: DocumentItem[];
  onPreviewDoc: (doc: DocumentItem) => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  onBack?: () => void;
}

export const Screen29_PaperworkRemittance: React.FC<Screen29Props> = ({
  documents,
  onPreviewDoc,
  currency,
  onToggleCurrency,
  onBack
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'nre' | 'card' | 'wire'>('nre');
  const [callBooked, setCallBooked] = useState(false);

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 animate-fade-in">
      <AppHeader
        title="Records"
        subtitle="Everything you'll want at tax time, in one place."
        showBack={true}
        onBack={onBack}
      />

      <div className="px-4 py-3 space-y-5">
        {/* Remittance Section: How to send money */}
        <div className="bg-white border border-[#EBE5DC] rounded-3xl p-5 shadow-2xs space-y-3">
          <h3 className="font-serif-title text-[20px] text-[#1A1613] font-normal">
            How to send money
          </h3>

          <div className="space-y-2.5">
            {/* NRE Account Transfer Option */}
            <div
              onClick={() => setSelectedMethod('nre')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                selectedMethod === 'nre'
                  ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                  : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[14px] font-semibold text-[#1A1613]">
                  NRE account transfer
                </span>
                <span className="text-[10px] font-bold text-[#2A7E3B] bg-[#F1F9F3] px-2.5 py-0.5 rounded-full border border-[#C8E6C9]">
                  Best
                </span>
              </div>
              <p className="text-[12px] text-[#7A716A]">
                No FX loss · 1 working day
              </p>
            </div>

            {/* International Card Option */}
            <div
              onClick={() => setSelectedMethod('card')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                selectedMethod === 'card'
                  ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                  : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[14px] font-semibold text-[#1A1613]">
                  International card
                </span>
              </div>
              <p className="text-[12px] text-[#7A716A]">
                Instant · 2.4% fee = $128
              </p>
            </div>

            {/* Wire Option */}
            <div
              onClick={() => setSelectedMethod('wire')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                selectedMethod === 'wire'
                  ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                  : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[14px] font-semibold text-[#1A1613]">
                  Wire from US bank
                </span>
              </div>
              <p className="text-[12px] text-[#7A716A]">
                3–4 days · $45 flat
              </p>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div>
          <h3 className="font-serif-title text-[20px] text-[#1A1613] font-normal mb-3">
            Documents
          </h3>

          <div className="space-y-2.5">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                details={doc.details}
                onPreview={() => onPreviewDoc(doc)}
                onDownload={() => onPreviewDoc(doc)}
              />
            ))}
          </div>
        </div>

        {/* TDS Accountant Call Box */}
        <div className="p-4 bg-[#F4EFEA] border border-[#E8E2D9] rounded-2xl text-[13px] text-[#625952] leading-relaxed space-y-2">
          <p>
            Not sure whether TDS applies to you? Anand can put you on a 15-minute call with our accountant — no charge.
          </p>

          {callBooked ? (
            <div className="p-2.5 bg-[#F1F9F3] border border-[#C8E6C9] rounded-xl text-[12px] text-[#2A7E3B] font-semibold flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Accountant Call Requested
            </div>
          ) : (
            <button
              onClick={() => setCallBooked(true)}
              className="mt-1 text-[12px] font-semibold text-[#7A1C31] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Book 15-min tax call with Anand
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
