import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';
import { colors } from '../theme';
import { LocationOption } from '../types';

interface LocationScreenProps {
  selectedId: string;
  onSelect: (id: string) => void;
  onContinue: () => void;
  onSkip?: () => void;
}

const LOCATIONS: LocationOption[] = [
  { 
    id: 'seattle', 
    name: 'Seattle, United States', 
    details: 'USD · PST · 12.5 hours behind Chennai' 
  },
  { id: 'uk', name: 'United Kingdom' },
  { id: 'sg_my', name: 'Singapore / Malaysia' },
  { id: 'uae_gulf', name: 'UAE / Gulf' },
  { id: 'au_nz', name: 'Australia / New Zealand' },
  { id: 'india', name: "I'm in India" },
];

export const LocationScreen: React.FC<LocationScreenProps> = ({
  selectedId,
  onSelect,
  onContinue,
}) => {
  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.questionBackground, 
        paddingHorizontal: '32px',
        paddingTop: '60px',
        paddingBottom: '12px',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Scrollable Content View */}
      <View style={{ flex: 1, overflowY: 'auto', paddingRight: '1px', maxWidth: '420px', width: '100%', margin: '0 auto' }}>
        {/* Progress Header */}
        <Text 
          variant="caption" 
          style={{ color: colors.textMuted, fontSize: '9.5px', letterSpacing: '0.08em' }}
        >
          QUESTION 2 OF 10
        </Text>

        <RNProgressBar progress={20} />

        {/* Heading */}
        <Text 
          variant="serifHeading"
          style={{ 
            color: colors.textDarkHeading, 
            fontSize: '18px', 
            fontWeight: '500',
            marginTop: '0px',
            marginBottom: '4px',
            lineHeight: '1.2'
          }}
        >
          Where are you living now?
        </Text>

        {/* Subtitle */}
        <Text 
          style={{ 
            color: colors.textDarkBody, 
            fontSize: '10.5px', 
            lineHeight: '1.35',
            marginBottom: '10px' 
          }}
        >
          This sets your currency, your timezone for calls, and whether we show you the NRI toolkit.
        </Text>

        {/* Location Option Cards */}
        <View style={{ gap: '0px' }}>
          {LOCATIONS.map((loc) => (
            <OptionCard
              key={loc.id}
              title={loc.name}
              subtitle={loc.details}
              selected={selectedId === loc.id}
              onPress={() => onSelect(loc.id)}
            />
          ))}
        </View>

        {/* Info Callout Box */}
        <View 
          style={{
            backgroundColor: colors.infoBoxBg,
            borderRadius: '8px',
            padding: '7px 9px',
            marginTop: '6px',
            marginBottom: '8px',
            border: '1px solid #E6DFC8',
          }}
        >
          <Text 
            style={{ 
              fontSize: '9.5px', 
              color: colors.textDarkBody, 
              lineHeight: '1.32',
              fontWeight: '400' 
            }}
          >
            We will never schedule a vendor call at 2 am your time. Every appointment in this app is shown in both timezones.
          </Text>
        </View>
      </View>

      {/* Fixed Bottom Submit Button Container */}
      <View style={{ paddingTop: '6px', shrink: 0, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <RNButton 
          title="Continue" 
          onPress={onContinue}
        />
      </View>
    </View>
  );
};

