import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';
import { colors } from '../theme';
import { IndianRupee } from 'lucide-react';

interface BudgetScreenProps {
  selectedId: string;
  onSelect: (id: string) => void;
  onContinue: () => void;
  onSkip?: () => void;
}

const BUDGET_OPTIONS = [
  {
    id: 'budget_15_25',
    name: '₹15 Lakhs - ₹25 Lakhs ($18k - $30k USD)',
    details: 'Quality essential vendors & elegant decor',
  },
  {
    id: 'budget_25_40',
    name: '₹25 Lakhs - ₹40 Lakhs ($30k - $48k USD)',
    details: 'Most popular · Premium AC halls & top caterers',
  },
  {
    id: 'budget_40_75',
    name: '₹40 Lakhs - ₹75 Lakhs ($48k - $90k USD)',
    details: 'Luxury convention centers & cinematic media',
  },
  {
    id: 'budget_75_plus',
    name: '₹75 Lakhs+ ($90k+ USD)',
    details: 'Bespoke ultra-luxury wedding experience',
  },
];

export const BudgetScreen: React.FC<BudgetScreenProps> = ({
  selectedId,
  onSelect,
  onContinue,
}) => {
  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.questionBackground, 
        paddingHorizontal: '18px',
        paddingTop: '6px',
        paddingBottom: '12px',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Scrollable Content View */}
      <View style={{ flex: 1, overflowY: 'auto', paddingRight: '1px' }}>
        {/* Progress Header */}
        <Text 
          variant="caption" 
          style={{ color: colors.textMuted, fontSize: '9.5px', letterSpacing: '0.08em' }}
        >
          QUESTION 7 OF 10
        </Text>

        <RNProgressBar progress={70} />

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
          What is your target total budget?
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
          We will distribute funds optimally across catering, hall, decor, and media.
        </Text>

        {/* Option Cards */}
        <View style={{ gap: '0px' }}>
          {BUDGET_OPTIONS.map((item) => (
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
          <IndianRupee size={13} color={colors.burgundyPrimary} style={{ marginTop: '1px', shrink: 0 }} />
          <Text 
            style={{ 
              fontSize: '10px', 
              color: colors.textDarkBody, 
              lineHeight: '1.35' 
            }}
          >
            Catering & Venue usually account for 55% of total wedding outlay in Chennai.
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
