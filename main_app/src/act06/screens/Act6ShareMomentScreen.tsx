import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Share2, Check, Download, Copy, ArrowRight } from 'lucide-react';

export const Act6ShareMomentScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [selectedFormat, setSelectedFormat] = useState<'story' | 'post' | 'whatsapp' | 'save'>('story');
  const [selectedBgColor, setSelectedBgColor] = useState('#1D1D1F');
  const [copied, setCopied] = useState(false);

  const colorsList = [
    { name: 'Dark Charcoal', hex: '#1D1D1F', text: '#FFFFFF' },
    { name: 'Maroon', hex: '#8B1538', text: '#FFFFFF' },
    { name: 'Cream', hex: '#FAF7F2', text: '#1D1D1F' },
    { name: 'Forest Green', hex: '#2E7D32', text: '#FFFFFF' },
  ];

  const handleExport = async () => {
    try {
      const textToCopy = `We found the hall. 183 days to go! #PriyaFoundHerArjun`;
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
      }
      
      // Generate a downloadable image using Canvas
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1440;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = selectedBgColor;
        ctx.fillRect(0, 0, 1080, 1440);

        const textColor = selectedBgColor === '#FAF7F2' ? '#1D1D1F' : '#FFFFFF';
        
        // Header Hashtag
        ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.7;
        ctx.font = 'bold 28px monospace';
        ctx.textAlign = 'right';
        ctx.fillText('#PriyaFoundHerArjun', 1000, 80);
        ctx.globalAlpha = 1.0;

        // Card Main Content
        ctx.textAlign = 'left';
        ctx.font = 'bold 32px monospace';
        ctx.fillText('14 · 02 · 2027', 80, 1150);

        ctx.font = 'bold 64px serif';
        ctx.fillText('We found the hall.', 80, 1240);

        ctx.font = '500 36px sans-serif';
        ctx.fillText('183 days to go', 80, 1310);

        const link = document.createElement('a');
        link.download = `wedding-card-${selectedFormat}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error(err);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#ECECEC] px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_wrapped')}
            className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-gray-700 cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Wrapped</span>
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-[#1D1D1F]">Share this moment</h1>
            <p className="text-[10.5px] text-[#666666]">Auto-designed · your board's colours</p>
          </div>
        </div>
        <button 
          onClick={() => setScreen('act6_guestbook')}
          className="text-xs font-semibold text-[#8B1538] border-none bg-transparent cursor-pointer"
        >
          Skip
        </button>
      </div>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Main Auto-Designed Story Card Preview */}
        <div 
          className="w-full h-80 rounded-3xl p-6 flex flex-col justify-end relative shadow-lg transition-colors duration-300 border border-white/20"
          style={{ backgroundColor: selectedBgColor }}
        >
          <div className="space-y-2 z-10 text-white">
            <div className="text-xs font-mono font-bold tracking-widest opacity-80">
              14 · 02 · 2027
            </div>
            <h2 className="text-2xl font-serif font-bold tracking-tight">
              We found the hall.
            </h2>
            <p className="text-xs opacity-90 font-medium">183 days to go</p>
          </div>

          <div className="absolute top-4 right-4 text-[9px] font-mono font-bold opacity-60 uppercase tracking-widest">
            #PriyaFoundHerArjun
          </div>
        </div>

        {/* Format Selector Pills */}
        <div className="flex items-center justify-center gap-2">
          {(['story', 'post', 'whatsapp', 'save'] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border-none cursor-pointer capitalize transition-all ${
                selectedFormat === fmt
                  ? 'bg-[#8B1538] text-white shadow-xs'
                  : 'bg-white text-[#1D1D1F] border border-[#ECECEC] hover:bg-gray-50'
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>

        {/* Card: FOUR TEMPLATES, YOUR PALETTE */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            FOUR TEMPLATES, YOUR PALETTE
          </div>

          <div className="flex items-center gap-3">
            {colorsList.map((c) => (
              <button
                key={c.hex}
                onClick={() => setSelectedBgColor(c.hex)}
                className={`w-10 h-10 rounded-xl border-2 transition-transform cursor-pointer ${
                  selectedBgColor === c.hex ? 'border-[#8B1538] scale-110 shadow-xs' : 'border-transparent'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        {/* Explainer Box */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
          Every milestone is a shareable card, tagged with your wedding hashtag and — quietly — a referral link. This is how one wedding becomes three.
        </div>
      </View>

      {/* Sticky Bottom Action */}
      <div className="p-3.5 bg-white border-t border-[#ECECEC] shrink-0 flex gap-2">
        <button
          onClick={handleExport}
          className="flex-1 py-3 bg-[#8B1538] text-white rounded-2xl text-xs font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
        >
          {copied ? <Check size={16} /> : <Download size={16} />}
          <span>{copied ? 'Downloaded & Copied!' : 'Export Card PNG'}</span>
        </button>

        <button
          onClick={() => setScreen('act6_guestbook')}
          className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#C9A227] text-[#1D1D1F] border-none cursor-pointer hover:bg-[#b59120] flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
        >
          <span>10. Guestbook</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </View>
  );
};
