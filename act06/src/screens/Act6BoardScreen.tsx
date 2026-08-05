import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { colors } from '../theme';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft, Plus, Sparkles, Link2, Heart, ExternalLink, ArrowRight, Image as ImageIcon } from 'lucide-react';

export const Act6BoardScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();
  const [linkInput, setLinkInput] = useState('');
  const [linksAdded, setLinksAdded] = useState<string[]>([
    'https://instagram.com/p/C9x81a_M1',
    'https://pinterest.com/pin/821033',
  ]);

  const handleAddLink = () => {
    if (linkInput.trim()) {
      setLinksAdded([linkInput.trim(), ...linksAdded]);
      setLinkInput('');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF8F5', height: '100%', boxSizing: 'border-box' }}>
      {/* Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#ECECEC] px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScreen('act6_gift_registry')}
            className="p-1.5 rounded-lg bg-white border border-[#ECECEC] text-gray-700 cursor-pointer hover:bg-gray-50 flex items-center gap-1 text-xs font-semibold"
          >
            <ChevronLeft size={16} />
            <span>Registry</span>
          </button>
          <div>
            <h1 className="text-lg font-serif font-bold text-[#1D1D1F]">Your board</h1>
            <p className="text-[10.5px] text-[#666666]">47 saved · Priya, Meera and Amma</p>
          </div>
        </div>
        <button className="flex items-center gap-1 bg-[#8B1538] text-white px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer border-none shadow-xs hover:bg-[#72102D]">
          <Plus size={14} />
          <span>Add</span>
        </button>
      </div>

      {/* Main Content Scrollable Area */}
      <View style={{ flex: 1, overflowY: 'auto', padding: '16px', gap: '14px' }}>
        
        {/* Moodboard Image Tiles Grid (Photo Pins) */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="space-y-2.5">
            <div className="h-40 rounded-2xl bg-[#EBE4D8] relative overflow-hidden group shadow-2xs border border-[#E5DEC9]">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80" 
                alt="Mandap decor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full text-white">
                <Heart size={12} className="fill-white text-white" />
              </div>
              <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md p-2 rounded-xl text-[10px] font-semibold text-[#1D1D1F]">
                Jasmine Canopy Mandap
              </div>
            </div>

            <div className="h-28 rounded-2xl bg-[#EBE4D8] relative overflow-hidden group shadow-2xs border border-[#E5DEC9]">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80" 
                alt="Marigold & Lotus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md p-1.5 rounded-lg text-[9.5px] font-semibold text-[#1D1D1F]">
                Kanakambaram Floral Detail
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="h-28 rounded-2xl bg-[#EBE4D8] relative overflow-hidden group shadow-2xs border border-[#E5DEC9]">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80" 
                alt="Temple Lamps" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md p-1.5 rounded-lg text-[9.5px] font-semibold text-[#1D1D1F]">
                Brass Kuthuvilakku Lights
              </div>
            </div>

            <div className="h-40 rounded-2xl bg-[#EBE4D8] relative overflow-hidden group shadow-2xs border border-[#E5DEC9]">
              <img 
                src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=400&q=80" 
                alt="Traditional Saree Korvai" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md p-2 rounded-xl text-[10px] font-semibold text-[#1D1D1F]">
                Arakku Red Korvai Silk
              </div>
            </div>
          </div>
        </div>

        {/* Card: WHAT YOUR BOARD IS TELLING US */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase flex items-center gap-1.5">
            <Sparkles size={12} className="text-[#8B1538]" />
            <span>WHAT YOUR BOARD IS TELLING US</span>
          </div>

          {/* Color Palette Chips */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#8B1538] border border-black/10 shadow-2xs" title="Arakku Red" />
            <div className="w-6 h-6 rounded-full bg-[#C9A227] border border-black/10 shadow-2xs" title="Gold" />
            <div className="w-6 h-6 rounded-full bg-[#F5E9C8] border border-black/10 shadow-2xs" title="Cream" />
            <div className="w-6 h-6 rounded-full bg-[#2E7D32] border border-black/10 shadow-2xs" title="Forest Green" />
          </div>

          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            <strong className="text-[#8B1538]">Temple-traditional, with a modern hand.</strong> Heavy on jasmine and kanakambaram, low on drapes, warm lighting.
          </p>
        </div>

        {/* Card: MATCHED TO YOUR BOARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#ECECEC] shadow-2xs space-y-3">
          <div className="text-[10px] font-bold text-[#666666] tracking-wider uppercase">
            MATCHED TO YOUR BOARD
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { name: 'Bloom & Thread', tag: 'Top Match', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=150&q=80' },
              { name: 'Studio Verdant', tag: 'Eco Floral', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=150&q=80' },
              { name: 'Sri Decorators', tag: 'Traditional', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=150&q=80' },
            ].map((v) => (
              <div key={v.name} className="bg-[#FAF8F5] p-2 rounded-xl border border-[#ECECEC] text-center space-y-1">
                <img src={v.img} alt={v.name} className="w-full h-12 object-cover rounded-lg" />
                <span className="text-[10.5px] font-bold text-[#1D1D1F] block truncate">{v.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Link Box */}
        <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#8B1538]/20 space-y-2">
          <div className="flex items-center gap-2">
            <Link2 size={14} className="text-[#8B1538]" />
            <input 
              type="text" 
              placeholder="Paste an Instagram or Pinterest link..."
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              className="bg-white px-3 py-1.5 text-xs rounded-xl border border-[#ECECEC] outline-none flex-1 text-[#1D1D1F]"
            />
            <button 
              onClick={handleAddLink}
              className="px-3 py-1.5 bg-[#8B1538] text-white rounded-xl text-xs font-bold border-none cursor-pointer"
            >
              Paste
            </button>
          </div>
          <p className="text-[10.5px] text-[#666666] leading-relaxed">
            Paste an Instagram link and it lands here. The board is how a 29-year-old starts planning — not with a budget field.
          </p>
        </div>

      </View>

      {/* Sticky Bottom Action Button */}
      <div className="p-4 bg-white border-t border-[#ECECEC] shrink-0">
        <button
          onClick={() => setScreen('act6_swipe')}
          className="w-full py-3 bg-[#8B1538] text-white rounded-2xl text-xs font-bold border-none cursor-pointer hover:bg-[#72102D] transition-colors flex items-center justify-center gap-2 shadow-xs"
        >
          <span>Turn the board into a decor brief</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </View>
  );
};
