import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';
import { colors } from '../theme';
import { Calendar } from 'lucide-react';

interface TimelineScreenProps {
  selectedId: string;
  onSelect: (id: string) => void;
  onContinue: () => void;
  onSkip?: () => void;
}

const TIMELINE_OPTIONS = [
  {
    id: 'season_nov_feb',
    name: 'Upcoming Muhurtham Season (Nov 2026 - Feb 2027)',
    details: 'Peak season · High venue demand',
  },
  {
    id: 'season_apr_jun',
    name: 'Summer / Chithirai (Apr 2027 - Jun 2027)',
    details: 'Good availability · Moderate pricing',
  },
  {
    id: 'season_jul_dec',
    name: 'Late 2027 / Next Year (Jul 2027 - Dec 2027)',
    details: 'Early booking discount options',
  },
  {
    id: 'exact_dates',
    name: 'Exact Muhurtham dates decided already',
    details: 'Lock vendor availability for your specific dates',
  },
];

export const TimelineScreen: React.FC<TimelineScreenProps> = ({
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
          QUESTION 1 OF 10
        </Text>

        <RNProgressBar progress={10} />

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
          When are you planning the wedding?
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
          Choose a target season or exact Muhurtham months. We will cross-check venue calendars.
        </Text>

        {/* Option Cards */}
        <View style={{ gap: '0px' }}>
          {TIMELINE_OPTIONS.map((item) => (
            <OptionCard
              key={item.id}
              title={item.name}
              subtitle={item.details}
              selected={selectedId === item.id}
              onPress={() => onSelect(item.id)}
            />
          ))}
        </View>

        {/* Info Callout Box */}
        <View 
          style={{
            backgroundColor: colors.infoBoxBg,
            borderRadius: '8px',
            padding: '7px 9px',
            marginTop: '8px',
            marginBottom: '8px',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '6px',
            border: '1px solid #EBE2D5'
          }}
        >
          <Calendar size={13} color={colors.burgundyPrimary} style={{ marginTop: '1px', shrink: 0 }} />
          <Text 
            style={{ 
              fontSize: '10px', 
              color: colors.textDarkBody, 
              lineHeight: '1.35' 
            }}
          >
            Tamil calendar Muhurtham dates for 2026-2027 are pre-loaded with auspicious timings.
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
