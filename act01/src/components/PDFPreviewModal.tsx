import React, { useState } from 'react';
import { theme } from '../theme';
import { useWeddingStore } from '../store/useWeddingStore';
import { 
  X, 
  Printer, 
  Share2, 
  Download, 
  Copy, 
  Globe, 
  Check, 
  QrCode, 
  FileText,
  Sparkles
} from 'lucide-react';

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PDFPreviewModal: React.FC<PDFPreviewModalProps> = ({ isOpen, onClose }) => {
  const { onboarding, functions, getTotalCostINR, getTotalCostInCurrency, currency } = useWeddingStore();
  const [isTamil, setIsTamil] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'whatsapp' | 'tamil' | 'qr'>('preview');

  if (!isOpen) return null;

  const totalINR = getTotalCostINR();
  const totalCurr = getTotalCostInCurrency();

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF8F5] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#ECECEC] flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="bg-[#8B1538] text-white px-6 py-4 flex items-center justify-between border-b border-[#671B2B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
              <FileText size={18} className="text-[#C9A227]" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold">
                {isTamil ? 'திருமண திட்டம் · blueprint.pdf' : 'Priya & Arjun Wedding Blueprint — 14 Page Plan'}
              </h3>
              <p className="text-xs text-white/70">
                A4 PDF · Day-by-day costs, vendors & ritual notes for family & elders
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsTamil(!isTamil)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 transition-all text-white border-none cursor-pointer flex items-center gap-1.5"
            >
              <Globe size={13} />
              <span>{isTamil ? 'English' : 'தமிழ் (Tamil)'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white border-none cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white px-6 py-2.5 border-b border-[#ECECEC] flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border-none cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-[#8B1538] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Document Preview (A4)
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border-none cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'bg-[#2E7D32] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              WhatsApp Link
            </button>
            <button
              onClick={() => setActiveTab('tamil')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border-none cursor-pointer ${
                activeTab === 'tamil'
                  ? 'bg-[#8B1538] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tamil Print Edition
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border-none cursor-pointer ${
                activeTab === 'qr'
                  ? 'bg-[#8B1538] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              QR Code for Elders
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 border-none cursor-pointer flex items-center gap-1.5"
            >
              <Printer size={13} />
              <span>Print (14 pages)</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#8B1538] text-white hover:bg-[#671B2B] border-none cursor-pointer flex items-center gap-1.5"
            >
              {copiedLink ? <Check size={13} /> : <Download size={13} />}
              <span>{copiedLink ? 'PDF Downloaded!' : 'Download PDF'}</span>
            </button>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#F4F0EA]">
          <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl border border-[#E5DEC9] p-8 space-y-6 text-[#1D1D1F]">
            
            {/* Page 1 Header */}
            <div className="border-b border-[#8B1538]/20 pb-5 text-center space-y-2">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9A227]">
                {isTamil ? 'உங்களுக்கான பிரத்யேக திருமண திட்டம்' : 'CONFIDENTIAL FAMILY WEDDING PLAN'}
              </span>
              <h1 className="text-3xl font-serif font-bold text-[#8B1538]">
                {isTamil ? 'பிரியா & அர்ஜுன்' : 'Priya & Arjun'}
              </h1>
              <p className="text-sm font-medium text-gray-600">
                {isTamil ? '12 – 14 பிப்ரவரி 2027 · சென்னை' : '12 – 14 FEBRUARY 2027 · CHENNAI'}
              </p>
              <div className="inline-flex items-center gap-3 bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#E5DEC9] text-xs font-semibold text-[#8B1538] mt-2">
                <span>{onboarding.guestCount} Guests</span>
                <span>•</span>
                <span>5 Functions</span>
                <span>•</span>
                <span>Total Budget: ₹{(totalINR / 100000).toFixed(1)}L ≈ {currency} ${totalCurr.toLocaleString()}</span>
              </div>
            </div>

            {/* Day One Breakdown */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-wider uppercase text-[#8B1538] bg-[#FAF8F5] px-3 py-1 rounded-md border-l-4 border-[#8B1538]">
                DAY ONE · FRIDAY 12 FEB 2027
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900">09:00 am · Nichayathartham</span>
                    <p className="text-gray-500 text-[11px]">Raintree Hall, Anna Nagar · Sri Amirtham Catering</p>
                  </div>
                  <span className="font-semibold text-gray-800">120 guests</span>
                </div>
                <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900">04:00 pm · Panda Kaal Muhurtham</span>
                    <p className="text-gray-500 text-[11px]">Sri Venkatesa Sastrigal · Samagri arranged</p>
                  </div>
                  <span className="font-semibold text-gray-800">80 guests</span>
                </div>
              </div>
            </div>

            {/* Day Two Breakdown */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-wider uppercase text-[#8B1538] bg-[#FAF8F5] px-3 py-1 rounded-md border-l-4 border-[#8B1538]">
                DAY TWO · SATURDAY 13 FEB 2027
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900">08:00 am · Sumangali Prarthanai</span>
                    <p className="text-gray-500 text-[11px]">Home / Hall · Traditional leaf Sappadu</p>
                  </div>
                  <span className="font-semibold text-gray-800">80 guests</span>
                </div>
                <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900">06:00 pm · Mehendi & Sangeet</span>
                    <p className="text-gray-500 text-[11px]">Shalini Mehendi · DJ Beats & Live Counters</p>
                  </div>
                  <span className="font-semibold text-gray-800">180 guests</span>
                </div>
              </div>
            </div>

            {/* Day Three Breakdown */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-wider uppercase text-[#8B1538] bg-[#FAF8F5] px-3 py-1 rounded-md border-l-4 border-[#8B1538]">
                DAY THREE · SUNDAY 14 FEB 2027 (MUHURTHAM DAY)
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900">06:34 am · Auspicious Muhurtham</span>
                    <p className="text-gray-500 text-[11px]">Leela Palace Kalyana Mandapam · Vadakalai Iyengar ritual</p>
                  </div>
                  <span className="font-semibold text-gray-800">420 guests</span>
                </div>
                <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900">07:00 pm · Grand Reception</span>
                    <p className="text-gray-500 text-[11px]">Grand Ballroom · Fusion Buffet & Live Strings Ensemble</p>
                  </div>
                  <span className="font-semibold text-gray-800">500 guests</span>
                </div>
              </div>
            </div>

            {/* Budget Cost Summary Table */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E5DEC9] space-y-2 text-xs">
              <div className="font-serif font-bold text-sm text-[#8B1538] border-b border-[#E5DEC9] pb-2 flex justify-between">
                <span>ESTIMATED FUNCTION COST BREAKDOWN</span>
                <span>IN RUPEES & DOLLARS</span>
              </div>
              <div className="flex justify-between pt-1 text-gray-700">
                <span>Nichayathartham & Panda Kaal</span>
                <span className="font-semibold">₹4,52,000</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Mehendi & Sangeet</span>
                <span className="font-semibold">₹4,10,000</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Muhurtham Mandapam & Sappadu</span>
                <span className="font-semibold">₹18,90,000</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Grand Reception & Entertainment</span>
                <span className="font-semibold">₹13,90,000</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#E5DEC9] font-bold text-[#8B1538] text-sm">
                <span>Total Estimated Plan Cost</span>
                <span>₹41,42,000 ≈ {currency} ${totalCurr.toLocaleString()}</span>
              </div>
            </div>

            {/* Footer Trust Note */}
            <div className="text-[11px] text-gray-500 text-center leading-relaxed pt-2 border-t border-gray-100">
              <p>Printed in English or Tamil. Two elders in every wedding will want this on paper — and it puts your vendor names in front of them.</p>
              <p className="font-medium text-[#8B1538] mt-1">Generated by Chennai Wedding Blueprint Engine v0.1</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
