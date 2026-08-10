import React from 'react';
import { View, Text, RNButton } from '../components/RNPrimitives';
import { colors } from '../theme';
import muhurthamCeremonyImg from '../../assets/muhurtham_ceremony.jpg';
import { useWeddingStore } from '../store/useWeddingStore';

interface WelcomeScreenProps {
  onStart: () => void;
  onOpenLink?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onOpenLink }) => {
  const { language, setLanguage } = useWeddingStore();

  const t = {
    en: {
      title: "Plan a Chennai\nwedding from 8,000\nkm away.",
      subtitle: "Answer ten questions and we'll build your whole wedding — every function, every vendor, every rupee — in about four minutes. Free, no calls, no salesperson.",
      check1: "Real prices, visible before you talk to anyone",
      check2: "30 years of vendors, verified in person",
      check3: "Your family plans with you, from anywhere",
      btn: "Start my Blueprint",
      link: "Already planning? Open with a link"
    },
    ta: {
      title: "8,000 கி.மீ தூரத்திலிருந்து\nஒரு சென்னை திருமணத்தை\nதிட்டமிடுங்கள்.",
      subtitle: "பத்து கேள்விகளுக்கு பதிலளிக்கவும், உங்கள் முழு திருமணத்தையும் நாங்கள் உருவாக்குவோம் — ஒவ்வொரு நிகழ்வும், ஒவ்வொரு விற்பனையாளரும், ஒவ்வொரு ரூபாயும் — சுமார் நான்கு நிமிடங்களில். இலவசம், அழைப்புகள் இல்லை, விற்பனையாளர் இல்லை.",
      check1: "யாரிடமும் பேசுவதற்கு முன் உண்மையான விலைகளை பார்க்கலாம்",
      check2: "30 வருட விற்பனையாளர்கள், நேரில் சரிபார்க்கப்பட்டவர்கள்",
      check3: "உங்கள் குடும்பம் உங்களுடன் எங்கிருந்தும் திட்டமிடலாம்",
      btn: "எனது திட்டத்தை தொடங்கு",
      link: "ஏற்கனவே திட்டமிடுகிறீர்களா? ஒரு இணைப்புடன் திறக்கவும்"
    }
  };

  const content = t[language];

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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text 
            onPress={() => setLanguage('en')}
            style={{ 
              color: language === 'en' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)', 
              fontSize: '12.5px', 
              fontWeight: language === 'en' ? '700' : '600', 
              fontFamily: 'system-ui, sans-serif',
              cursor: 'pointer'
            }}
          >
            EN
          </Text>
          <Text style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '12.5px', marginHorizontal: '4px', fontWeight: '600', fontFamily: 'system-ui, sans-serif' }}>
            ·
          </Text>
          <Text 
            onPress={() => setLanguage('ta')}
            style={{ 
              color: language === 'ta' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)', 
              fontSize: '12.5px', 
              fontWeight: language === 'ta' ? '700' : '600', 
              fontFamily: 'system-ui, sans-serif',
              cursor: 'pointer'
            }}
          >
            தமிழ்
          </Text>
        </View>
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
          <img 
            src={muhurthamCeremonyImg} 
            alt="Traditional Muhurtham Ceremony" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
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
            {content.title}
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
            {content.subtitle}
          </Text>

          {/* Feature Checkpoints */}
          <View style={{ gap: '12px', marginBottom: '8px' }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={{ color: '#D8B365', fontSize: '15px', fontWeight: 'bold', marginRight: '10px', marginTop: '-1px' }}>✓</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '14px', lineHeight: '1.4', flex: 1, fontWeight: '400', fontFamily: 'system-ui, sans-serif' }}>
                {content.check1}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={{ color: '#D8B365', fontSize: '15px', fontWeight: 'bold', marginRight: '10px', marginTop: '-1px' }}>✓</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '14px', lineHeight: '1.4', flex: 1, fontWeight: '400', fontFamily: 'system-ui, sans-serif' }}>
                {content.check2}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={{ color: '#D8B365', fontSize: '15px', fontWeight: 'bold', marginRight: '10px', marginTop: '-1px' }}>✓</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '14px', lineHeight: '1.4', flex: 1, fontWeight: '400', fontFamily: 'system-ui, sans-serif' }}>
                {content.check3}
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
          title={content.btn} 
          variant="white"
          onPress={onStart}
          style={{ height: '48px', borderRadius: '16px' }}
        />
        
        <button 
          onClick={onOpenLink}
          className="mt-3.5 text-[13px] text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none font-normal"
        >
          {content.link}
        </button>
      </View>
    </View>
  );
};
