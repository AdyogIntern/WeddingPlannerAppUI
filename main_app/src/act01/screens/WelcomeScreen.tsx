import React from 'react';
import { View, Text, RNButton } from '../components/RNPrimitives';
import { colors } from '../theme';
import { Check } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
  onOpenLink?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onOpenLink }) => {
  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.welcomeBackground, 
        paddingHorizontal: '20px',
        paddingTop: '16px',
        paddingBottom: '20px',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      <View style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {/* Top Image Slot: Traditional Muhurtham Mandapam Banner */}
        <View 
          style={{ 
            width: '100%', 
            height: '190px', 
            borderRadius: '20px', 
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0.18)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            shrink: 0,
            marginBottom: '4px'
          }}
        >
          {/* Aesthetic Background Graphic representing Muhurtham */}
          <div 
            className="absolute inset-0 opacity-25 mix-blend-overlay" 
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 40%, #E5C07B 0%, transparent 70%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
            }}
          />
          {/* Decorative Arch/Kolam motif overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 300 200" fill="none">
            <path d="M 40,200 C 40,90 260,90 260,200" stroke="#FFDF9E" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 70,200 C 70,110 230,110 230,200" stroke="#FFDF9E" strokeWidth="1.5" />
            <circle cx="150" cy="100" r="20" fill="none" stroke="#FFDF9E" strokeWidth="1.5" />
          </svg>

          <Text 
            style={{ 
              fontSize: '11px', 
              letterSpacing: '0.15em', 
              color: 'rgba(255, 255, 255, 0.45)',
              fontWeight: '600',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              zIndex: 2,
            }}
          >
            IMAGE SLOT · MUHURTHAM
          </Text>
        </View>

        {/* Title */}
        <Text 
          variant="serifTitle"
          style={{ 
            color: '#FFFFFF', 
            fontSize: '28px', 
            lineHeight: '1.2',
            fontWeight: '600',
            marginTop: '20px',
            marginBottom: '14px',
            letterSpacing: '-0.02em',
            fontFamily: '"Playfair Display", Georgia, serif'
          }}
        >
          Plan a Chennai wedding from 8,000 km away.
        </Text>

        {/* Subtitle / Paragraph */}
        <Text 
          style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '14px', 
            lineHeight: '1.48',
            marginBottom: '18px',
            fontWeight: '400',
          }}
        >
          Answer ten questions and we'll build your whole wedding — every function, every vendor, every rupee — in about four minutes. Free, no calls, no salesperson.
        </Text>

        {/* Feature Checkpoints */}
        <View style={{ gap: '12px', marginBottom: '16px' }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '10px' }}>
            <View style={{ marginTop: '2px' }}>
              <Check size={16} color="#D8B365" strokeWidth={2.5} />
            </View>
            <Text style={{ color: '#FFFFFF', fontSize: '13.5px', lineHeight: '1.38', flex: 1, fontWeight: '400' }}>
              Real prices, visible before you talk to anyone
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '10px' }}>
            <View style={{ marginTop: '2px' }}>
              <Check size={16} color="#D8B365" strokeWidth={2.5} />
            </View>
            <Text style={{ color: '#FFFFFF', fontSize: '13.5px', lineHeight: '1.38', flex: 1, fontWeight: '400' }}>
              30 years of vendors, verified in person
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '10px' }}>
            <View style={{ marginTop: '2px' }}>
              <Check size={16} color="#D8B365" strokeWidth={2.5} />
            </View>
            <Text style={{ color: '#FFFFFF', fontSize: '13.5px', lineHeight: '1.38', flex: 1, fontWeight: '400' }}>
              Your family plans with you, from anywhere
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom CTA Block */}
      <View style={{ paddingTop: '12px', shrink: 0, alignItems: 'center', width: '100%' }}>
        <RNButton 
          title="Start my Blueprint" 
          variant="white"
          onPress={onStart}
        />
        
        <button 
          onClick={onOpenLink}
          className="mt-3 text-[13px] text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none font-normal"
        >
          Already planning? Open with a link
        </button>
      </View>
    </View>
  );
};
