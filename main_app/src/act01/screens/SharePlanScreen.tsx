import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { colors } from '../theme';
import { useWeddingStore } from '../store/useWeddingStore';
import { PDFPreviewModal } from '../components/PDFPreviewModal';
import { 
  ChevronLeft, 
  FileText, 
  Share2, 
  MessageSquare, 
  Check, 
  Sparkles,
  ArrowRight,
  Printer,
  Copy,
  Languages
} from 'lucide-react';

export const SharePlanScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  
  // Screen 12 Modes: 'share' (Sub 1) | 'preview' (Sub 2) | 'tamil' (Sub 3) | 'nudges' (Screen 11)
  const [screenMode, setScreenMode] = useState<'share' | 'preview' | 'tamil' | 'nudges'>('nudges');
  
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

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: screenMode === 'tamil' ? '#671B2B' : '#FAF8F5', 
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box',
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* ================= TOP NAVIGATION BAR ================= */}
      <div className={`px-4 pt-2 pb-2 shrink-0 flex items-center justify-between border-b z-30 ${
        screenMode === 'tamil' 
          ? 'bg-[#671B2B] border-white/10 text-white' 
          : 'bg-[#FAF8F5] border-[#E5E0D8] text-gray-900'
      }`}>
        <button
          onClick={() => setScreen('blueprint_home')}
          className={`flex items-center gap-1 text-xs font-semibold bg-transparent border-none cursor-pointer ${
            screenMode === 'tamil' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          <ChevronLeft size={16} />
          <span>Blueprint</span>
        </button>

        {/* View Switcher Pills */}
        <div className="flex bg-[#EFE7DC]/80 p-0.5 rounded-xl text-[10px] font-bold text-gray-800">
          <button
            onClick={() => setScreenMode('share')}
            className={`px-2 py-0.5 rounded-lg border-none cursor-pointer transition-all ${
              screenMode === 'share' ? 'bg-[#671B2B] text-white' : 'text-gray-700 bg-transparent'
            }`}
          >
            Share
          </button>
          <button
            onClick={() => setScreenMode('preview')}
            className={`px-2 py-0.5 rounded-lg border-none cursor-pointer transition-all ${
              screenMode === 'preview' ? 'bg-[#671B2B] text-white' : 'text-gray-700 bg-transparent'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setScreenMode('tamil')}
            className={`px-2 py-0.5 rounded-lg border-none cursor-pointer transition-all ${
              screenMode === 'tamil' ? 'bg-[#671B2B] text-white' : 'text-gray-700 bg-transparent'
            }`}
          >
            தமிழ்
          </button>
          <button
            onClick={() => setScreenMode('nudges')}
            className={`px-2 py-0.5 rounded-lg border-none cursor-pointer transition-all ${
              screenMode === 'nudges' ? 'bg-[#671B2B] text-white' : 'text-gray-700 bg-transparent'
            }`}
          >
            Nudges
          </button>
        </div>

        {/* Top Right Action Button */}
        {screenMode === 'share' && (
          <button
            onClick={() => setScreen('blueprint_home')}
            className="text-xs font-bold text-gray-800 bg-transparent border-none cursor-pointer hover:text-gray-900"
          >
            Done
          </button>
        )}
        {screenMode === 'preview' && (
          <button
            onClick={() => window.print()}
            className="text-xs font-bold text-gray-800 bg-transparent border-none cursor-pointer hover:text-gray-900 flex items-center gap-1"
          >
            <Printer size={13} />
            <span>Print</span>
          </button>
        )}
        {screenMode === 'tamil' && (
          <button
            onClick={() => setScreenMode('share')}
            className="text-[10px] font-bold text-white bg-white/15 px-2 py-0.5 rounded-full border border-white/20 cursor-pointer"
          >
            தமிழ் · EN
          </button>
        )}
        {screenMode === 'nudges' && (
          <button
            onClick={() => setScreen('blueprint_home')}
            className="text-xs font-bold text-gray-800 bg-transparent border-none cursor-pointer"
          >
            Done
          </button>
        )}
      </div>

      {/* ================= MAIN SCROLLABLE CONTENT ================= */}
      <View style={{ flex: 1, overflowY: 'auto', padding: screenMode === 'tamil' ? '0' : '16px 20px' }}>
        
        {/* SUB-SCREEN 12.1: SHARE THE BLUEPRINT */}
        {screenMode === 'share' && (
          <div className="space-y-3.5">
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-900 leading-tight">
                Share the Blueprint
              </h1>
            </div>

            {/* 3 Main Action Cards */}
            <div className="space-y-2">
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
                onClick={() => setScreenMode('preview')}
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

        {/* SUB-SCREEN 12.2: PDF PRINT PREVIEW MODE */}
        {screenMode === 'preview' && (
          <div className="space-y-3.5">
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-900 leading-tight">
                Preview
              </h1>
              <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
                14 pages · A4 · ready to print
              </p>
            </div>

            {/* A4 Document Sheet 1 */}
            <div className="bg-white p-4 rounded-xl border border-[#E5E0D8] shadow-sm space-y-3 font-serif">
              <div className="text-center space-y-0.5 border-b border-gray-200 pb-2.5">
                <h2 className="text-base font-bold text-gray-900">Priya & Arjun</h2>
                <p className="text-[9px] font-sans font-bold tracking-widest text-gray-500 uppercase">
                  12 – 14 FEBRUARY 2027 · CHENNAI
                </p>
              </div>

              {/* Day One */}
              <div className="space-y-1.5 text-xs font-sans">
                <div className="text-[9.5px] font-bold text-gray-400 tracking-wider uppercase">
                  DAY ONE · FRIDAY
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-[11px]">
                  <span>9:00 am · Nichayathartham</span>
                  <span>120</span>
                </div>
                <p className="text-[9.5px] text-gray-500">
                  Raintree Hall, Anna Nagar · Sri Amirtham catering
                </p>

                <div className="flex justify-between font-bold text-gray-900 text-[11px] pt-1">
                  <span>4:00 pm · Panda Kaal Muhurtham</span>
                  <span>60</span>
                </div>
                <p className="text-[9.5px] text-gray-500">
                  Sri Venkatesa Sastrigal · samagri arranged
                </p>
              </div>

              {/* Day Three */}
              <div className="space-y-1.5 text-xs font-sans pt-1">
                <div className="text-[9.5px] font-bold text-gray-400 tracking-wider uppercase">
                  DAY THREE · SUNDAY
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-[11px]">
                  <span>6:34 am · Muhurtham</span>
                  <span>420</span>
                </div>
                <p className="text-[9.5px] text-gray-500">
                  Leela Palace · lagnam 6:34 – 8:12 am
                </p>

                <div className="flex justify-between font-bold text-gray-900 text-[11px] pt-1">
                  <span>7:00 pm · Reception</span>
                  <span>500</span>
                </div>
              </div>

              <div className="text-[9px] font-sans text-gray-400 border-t border-gray-100 pt-2">
                Page 2 of 14 · costs, vendor contacts and the ritual notes follow.
              </div>
            </div>

            {/* A4 Document Sheet 2: PAGE 3 */}
            <div className="bg-white p-3.5 rounded-xl border border-[#E5E0D8] shadow-sm space-y-2 font-sans">
              <div className="text-[9.5px] font-bold text-gray-400 tracking-wider uppercase">
                PAGE 3 · WHAT EACH FUNCTION COSTS
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-800">Muhurtham</span>
                  <span className="font-bold text-gray-900">₹18,90,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">Reception</span>
                  <span className="font-bold text-gray-900">₹12,10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">Mehendi & Sangeet</span>
                  <span className="font-bold text-gray-900">₹4,10,000</span>
                </div>
              </div>
            </div>

            {/* Soft Beige Explainer Card */}
            <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E0D6C5] text-[10.5px] text-[#5C5245] leading-relaxed">
              Printed in Tamil or English. Two elders in every wedding will want this on paper — and it puts your vendor names in front of them.
            </div>
          </div>
        )}

        {/* SUB-SCREEN 12.3: TAMIL LANGUAGE VERSION */}
        {screenMode === 'tamil' && (
          <div className="bg-[#671B2B] text-white min-h-full flex flex-col justify-between p-3.5 space-y-3">
            {/* Header Title */}
            <div className="space-y-1">
              <h1 className="text-2xl font-serif font-bold tracking-wide">
                திருமண திட்டம்
              </h1>
              <p className="text-xs text-white/80">
                பிரியா & அர்ஜுன் · 14 பிப்ரவரி 2027
              </p>
              <div className="flex justify-between text-[11px] pt-2 text-white/90">
                <span><strong>38%</strong> திட்டமிடப்பட்டது</span>
                <span>198 நாட்கள்</span>
              </div>
              <div className="w-full bg-black/30 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#D4AF37] h-full w-[38%]" />
              </div>
            </div>

            {/* Tamil Function Cards Container */}
            <div className="bg-[#FAF8F5] text-gray-900 rounded-2xl p-3 space-y-2.5">
              {/* Nichayathartham */}
              <div className="bg-white p-3 rounded-xl border border-[#E5E0D8] space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-gray-900">நிச்சயதார்த்தம்</h3>
                  <span className="bg-[#E8F5E9] text-[#2E7D32] text-[9px] font-bold px-2 py-0.5 rounded">
                    முடிந்தது
                  </span>
                </div>
                <p className="text-[10px] text-gray-500">வெள்ளி 12 பிப் · காலை · 120 பேர்</p>
              </div>

              {/* Muhurtham */}
              <div className="bg-white p-3 rounded-xl border-2 border-[#671B2B] space-y-1.5">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-gray-900">முகூர்த்தம்</h3>
                  <span className="bg-[#FFF8E1] text-[#B78103] text-[9px] font-bold px-2 py-0.5 rounded">
                    4 மீதம்
                  </span>
                </div>
                <p className="text-[10px] text-gray-500">ஞாயிறு 14 பிப் · 6:34 காலை · 420 பேர்</p>
                <div className="flex gap-1 text-[9.5px]">
                  <span className="bg-[#FFF0F3] text-[#671B2B] px-2 py-0.5 rounded font-bold">மண்டபம் ✓</span>
                  <span className="bg-[#FAF8F5] text-gray-700 px-2 py-0.5 rounded border border-gray-200">சாப்பாடு ✓</span>
                  <span className="bg-[#FAF8F5] text-gray-700 px-2 py-0.5 rounded border border-gray-200">+ புரோகிதர்</span>
                </div>
              </div>

              {/* Reception */}
              <div className="bg-white p-3 rounded-xl border border-[#E5E0D8]">
                <h3 className="text-xs font-bold text-gray-900">வரவேற்பு</h3>
                <p className="text-[10px] text-gray-500 mt-0.5">ஞாயிறு 14 பிப் · மாலை 7 · 500 பேர்</p>
              </div>

              {/* Tamil Total Cost Banner */}
              <div className="bg-white p-3 rounded-xl border border-[#E5E0D8] flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-600">மொத்தச் செலவு</span>
                <div className="text-right">
                  <span className="text-sm font-bold text-gray-900">₹42.6L</span>
                  <span className="text-[10px] text-gray-400 block font-normal">≈ $50,700</span>
                </div>
              </div>
            </div>

            {/* Soft Beige Explainer Card */}
            <div className="bg-[#F4EFE6] p-3.5 rounded-2xl border border-[#E0D6C5] text-[10.5px] text-[#5C5245] leading-relaxed">
              Tamil across the whole app, the WhatsApp messages and the printed plan — so the parents and the vendors are reading the same document as the couple.
            </div>
          </div>
        )}

        {/* SCREEN 11: NUDGES VIEW */}
        {screenMode === 'nudges' && (
          <div className="space-y-3">
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-900 leading-tight">
                198 days to go
              </h1>
              <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
                Six months out. Here's what should be locked now.
              </p>
            </div>

            {/* CARD 1: URGENT AVAILABILITY RISK (Burgundy Card) */}
            <div className="bg-[#671B2B] text-white p-3.5 rounded-2xl shadow-2xs space-y-2 border border-[#521422]">
              <div className="text-[9px] font-bold text-[#F5E9C8] uppercase tracking-wider">
                URGENT · AVAILABILITY RISK
              </div>

              <h3 className="text-xs font-serif font-bold leading-snug text-white">
                Two of your three shortlisted venues are being held by other families for 14 Feb.
              </h3>

              <p className="text-[10px] text-white/80 leading-normal">
                Muhurtham season. Request a quote to place a 7-day hold at no cost.
              </p>

              <button
                onClick={() => setScreen('function_details')}
                className="w-[72%] max-w-[220px] mx-auto py-2.5 bg-white text-[#671B2B] rounded-md text-xs font-bold border-none cursor-pointer hover:bg-gray-100 transition-colors shadow-2xs text-center block"
              >
                Hold Leela Palace
              </button>
            </div>

            {/* CARD 2: Nudge +8% */}
            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs flex items-center gap-3">
              <div className="bg-[#FFF0F3] text-[#671B2B] border border-[#F8C8D4] text-xs font-extrabold px-2 py-1 rounded-xl shrink-0">
                +8%
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 leading-tight">
                  Invite Amma to the Blueprint
                </h4>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  She's the only decision-maker not in yet
                </p>
              </div>
            </div>

            {/* CARD 3: Nudge +6% */}
            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs flex items-center gap-3">
              <div className="bg-[#FFF0F3] text-[#671B2B] border border-[#F8C8D4] text-xs font-extrabold px-2 py-1 rounded-xl shrink-0">
                +6%
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 leading-tight">
                  Close the photography vote
                </h4>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  4 of 6 have voted · ends Friday
                </p>
              </div>
            </div>

            {/* CARD 4: Nudge +4% */}
            <div className="bg-white p-3 rounded-2xl border border-[#E5E0D8] shadow-2xs flex items-center gap-3">
              <div className="bg-[#FFF0F3] text-[#671B2B] border border-[#F8C8D4] text-xs font-extrabold px-2 py-1 rounded-xl shrink-0">
                +4%
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 leading-tight">
                  Send save-the-dates to 40 overseas guests
                </h4>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  Visa letters take 3 weeks
                </p>
              </div>
            </div>

            {/* LATER, NOT NOW SECTION */}
            <div className="pt-1 space-y-1.5">
              <h3 className="text-xs font-bold text-gray-900">
                Later, not now
              </h3>

              <div className="space-y-1 text-[10.5px] text-gray-500 font-medium">
                <p>• Return gifts — lock by December</p>
                <p>• Bridal outfit fittings — you land 12 days before</p>
                <p>• Mehendi artist — Meera owns this, due October</p>
              </div>
            </div>

            {/* SOFT BEIGE RHYTHM CARD */}
            <div className="bg-[#F4EFE6] p-3 rounded-2xl border border-[#E0D6C5] text-[10.5px] text-[#5C5245] leading-relaxed">
              We won't nudge more than twice a week. Planning is a weekly rhythm, not a daily one.
            </div>
          </div>
        )}

      </View>

      {/* ================= FIXED BOTTOM ACTION BAR ================= */}
      {screenMode === 'share' && (
        <View style={{ padding: '8px 14px 12px', flexShrink: 0 }}>
          <button
            onClick={handleSendWhatsApp}
            className="w-[72%] max-w-[220px] mx-auto py-2.5 bg-[#671B2B] text-white rounded-md text-xs font-bold border-none cursor-pointer shadow-2xs hover:bg-[#521422] transition-colors text-center block"
          >
            {sentWhatsApp ? 'Sent on WhatsApp!' : 'Send to 4 people'}
          </button>
        </View>
      )}

      {screenMode === 'preview' && (
        <View style={{ padding: '8px 14px 12px', flexShrink: 0 }}>
          <button
            onClick={() => window.print()}
            className="w-[72%] max-w-[220px] mx-auto py-2.5 bg-[#671B2B] text-white rounded-md text-xs font-bold border-none cursor-pointer shadow-2xs hover:bg-[#521422] transition-colors flex items-center justify-center gap-1.5 text-center block"
          >
            <Printer size={14} />
            <span>Print or Save PDF</span>
          </button>
        </View>
      )}

      {screenMode === 'nudges' && (
        <View style={{ padding: '8px 14px 12px', flexShrink: 0 }}>
          <button
            onClick={() => setScreenMode('share')}
            className="w-[72%] max-w-[220px] mx-auto py-2.5 bg-[#671B2B] text-white rounded-md text-xs font-bold border-none cursor-pointer shadow-2xs hover:bg-[#521422] transition-colors text-center block"
          >
            Share the Blueprint →
          </button>
        </View>
      )}
    </View>
  );
};
