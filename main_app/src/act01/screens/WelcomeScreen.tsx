import React from 'react';
import { View, Text, RNButton } from '../components/RNPrimitives';
import { colors } from '../theme';

interface WelcomeScreenProps {
  onStart: () => void;
  onOpenLink?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onOpenLink }) => {
  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: '#861F35', 
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Header Status Bar */}
      <View 
        style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingHorizontal: '24px',
          height: '24px',
          shrink: 0,
          marginTop: '12px'
        }}
      >
        <Text 
          style={{ 
            color: 'rgba(255, 255, 255, 0.65)', 
            fontSize: '13px', 
            fontWeight: '600', 
            fontFamily: 'system-ui, sans-serif'
          }}
        />
        <Text 
          style={{ 
            color: 'rgba(255, 255, 255, 0.65)', 
            fontSize: '12.5px', 
            fontWeight: '600', 
            fontFamily: 'system-ui, sans-serif' 
          }}
        >
          EN · தமிழ்
        </Text>
      </View>

      {/* Main Content Area */}
      <View style={{ flex: 1, overflowY: 'auto', marginTop: '14px', shrink: 1, width: '100%' }}>
        {/* Top Image Slot: Traditional Muhurtham Mandapam Banner */}
        <View 
          style={{ 
            width: '84%', 
            height: '180px', 
            borderRadius: '20px', 
            overflow: 'hidden',
            border: '1.5px solid rgba(255, 255, 255, 0.16)',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shrink: 0,
            marginBottom: '20px'
          }}
        >
          <Text 
            style={{ 
              fontSize: '10.5px', 
              letterSpacing: '0.22em', 
              color: 'rgba(255, 255, 255, 0.35)',
              fontWeight: '500',
              textTransform: 'uppercase',
              fontFamily: 'system-ui, sans-serif',
              zIndex: 2,
            }}
          >
            IMAGE SLOT · MUHURTHAM
          </Text>
        </View>

        {/* Text Content Container (Maintains matching width and horizontal centering) */}
        <View style={{ width: '84%', alignSelf: 'center' }}>
          {/* Title */}
          <Text 
            style={{ 
              color: '#FFFFFF', 
              fontSize: '34px', 
              lineHeight: '1.16',
              fontWeight: '600',
              marginBottom: '14px',
              letterSpacing: '-0.02em',
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              whiteSpace: 'pre-line'
            }}
          >
            {"Plan a Chennai\nwedding from 8,000\nkm away."}
          </Text>

          {/* Subtitle / Paragraph */}
          <Text 
            style={{ 
              color: 'rgba(255, 255, 255, 0.82)', 
              fontSize: '14px', 
              lineHeight: '1.48',
              marginBottom: '20px',
              fontWeight: '400',
              fontFamily: 'system-ui, sans-serif'
            }}
          >
            Answer ten questions and we'll build your whole wedding — every function, every vendor, every rupee — in about four minutes. Free, no calls, no salesperson.
          </Text>

          {/* Feature Checkpoints */}
          <View style={{ gap: '12px', marginBottom: '8px' }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={{ color: '#D8B365', fontSize: '15px', fontWeight: 'bold', marginRight: '10px', marginTop: '-1px' }}>✓</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '14px', lineHeight: '1.4', flex: 1, fontWeight: '400', fontFamily: 'system-ui, sans-serif' }}>
                Real prices, visible before you talk to anyone
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={{ color: '#D8B365', fontSize: '15px', fontWeight: 'bold', marginRight: '10px', marginTop: '-1px' }}>✓</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '14px', lineHeight: '1.4', flex: 1, fontWeight: '400', fontFamily: 'system-ui, sans-serif' }}>
                30 years of vendors, verified in person
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={{ color: '#D8B365', fontSize: '15px', fontWeight: 'bold', marginRight: '10px', marginTop: '-1px' }}>✓</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '14px', lineHeight: '1.4', flex: 1, fontWeight: '400', fontFamily: 'system-ui, sans-serif' }}>
                Your family plans with you, from anywhere
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom CTA Block */}
      <View 
        style={{ 
          paddingTop: '8px', 
          paddingBottom: '16px', 
          paddingHorizontal: '18px', 
          shrink: 0, 
          alignItems: 'center', 
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <RNButton 
          title="Start my Blueprint" 
          variant="white"
          onPress={onStart}
          style={{ height: '48px', borderRadius: '16px' }}
        />
        
        <button 
          onClick={onOpenLink}
          className="mt-3.5 text-[13px] text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none font-normal"
        >
          Already planning? Open with a link
        </button>
      </View>
    </View>
  );
};
