import React, { useState } from 'react';
import { FileText, PhoneCall, CheckCircle2, Download, ChevronLeft } from 'lucide-react';
import { useWeddingStore } from '../store/useWeddingStore';
import { DocumentViewerModal } from '../components/DocumentViewerModal';

export interface DocumentItem {
  id: string;
  title: string;
  details: string;
  amount?: string;
  date?: string;
  type: 'invoice' | 'statement' | 'tax' | 'contract' | 'receipt';
}

const INITIAL_DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc1',
    title: 'GST invoice · Sri Amirtham',
    details: '₹1.58L · 5% GST · 14 Sep',
    amount: '₹1.58L',
    date: '14 Sep',
    type: 'invoice'
  },
  {
    id: 'doc2',
    title: 'Escrow statement',
    details: 'All movements to date',
    type: 'statement'
  },
  {
    id: 'doc3',
    title: 'TDS note · venue payment',
    details: 'Applies above ₹5L to one vendor',
    type: 'tax'
  },
  {
    id: 'doc4',
    title: 'Signed vendor contracts · 4',
    details: 'Countersigned by us',
    type: 'contract'
  }
];

interface DocumentCardProps {
  title: string;
  details: string;
  onDownload?: () => void;
  onPreview?: () => void;
  badgeText?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  details,
  onDownload,
  onPreview,
  badgeText
}) => {
  return (
    <div
      onClick={onPreview}
      className="p-3.5 bg-white border border-[#EBE5DC] rounded-2xl flex items-center justify-between hover:border-[#D5CBC0] transition-all cursor-pointer shadow-2xs group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#F4EFEA] flex items-center justify-center text-[#7A1C31] shrink-0">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-[14px] font-semibold text-[#1A1613] group-hover:text-[#7A1C31] transition-colors leading-tight">
            {title}
          </h4>
          <p className="text-[12px] text-[#7A716A] mt-0.5">{details}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {badgeText && (
          <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#F4EFEA] text-[#7A1C31] rounded-full">
            {badgeText}
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDownload?.();
          }}
          className="p-1.5 text-[#8C827A] hover:text-[#7A1C31] hover:bg-[#F4EFEA] rounded-lg transition-colors cursor-pointer border-none bg-transparent"
          aria-label="Download document"
        >
          <Download className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export const RecordsScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedMethod, setSelectedMethod] = useState<'nre' | 'card' | 'wire'>('nre');
  const [callBooked, setCallBooked] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  const handleDownloadDoc = (doc: DocumentItem) => {
    alert(`Downloading ${doc.title}...`);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 animate-fade-in flex flex-col">
      {/* Inline Header */}
      <div className="bg-[#FAF7F2] pt-12 pb-4 px-4 sticky top-0 z-20 shadow-sm flex items-center justify-between border-b border-[#EBE5DC]">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setScreen('who_pays')}
            className="p-1.5 rounded-full hover:bg-black/5 transition-colors border-none bg-transparent cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-[#1A1613]" />
          </button>
          <div>
            <h1 className="text-xl font-serif font-bold text-[#1A1613]">Records</h1>
            <p className="text-[11px] text-[#625952] mt-0.5">Everything you'll want at tax time, in one place.</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 space-y-5 overflow-y-auto flex-1">
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
            {INITIAL_DOCUMENTS.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                details={doc.details}
                onPreview={() => setSelectedDoc(doc)}
                onDownload={() => handleDownloadDoc(doc)}
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
              className="mt-1 text-[12px] font-semibold text-[#7A1C31] hover:underline cursor-pointer flex items-center gap-1.5 bg-transparent border-none p-0"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Book 15-min tax call with Anand
            </button>
          )}
        </div>
      </div>

      <DocumentViewerModal
        isOpen={selectedDoc !== null}
        onClose={() => setSelectedDoc(null)}
        title={selectedDoc?.title || ''}
        details={selectedDoc?.details || ''}
        onDownload={() => {
          if (selectedDoc) handleDownloadDoc(selectedDoc);
          setSelectedDoc(null);
        }}
      />
    </div>
  );
};
