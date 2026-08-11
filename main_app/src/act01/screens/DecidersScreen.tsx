import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';
import { colors } from '../theme';
import { DeciderOption } from '../types';

interface DecidersScreenProps {
  selectedIds: string[];
  onToggle: (id: string) => void;
  onSubmit: () => void;
  onSkip?: () => void;
}

const DECIDERS: Omit<DeciderOption, 'selected'>[] = [
  { id: 'parents', name: 'My parents' },
  { id: 'partner', name: 'My partner' },
  { id: 'cousin_sibling', name: 'A cousin or sibling helping out' },
  { id: 'partner_parents', name: "Partner's parents" },
  { id: 'grandparents', name: "Grandparents — they'll want to see it" },
  { id: 'just_me', name: 'Just me for now' },
];

export const DecidersScreen: React.FC<DecidersScreenProps> = ({
  selectedIds,
  onToggle,
  onSubmit,
}) => {
  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.questionBackground, 
        paddingLeft: '32px', paddingRight: '32px',
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
          QUESTION 10 OF 10
        </Text>

        <RNProgressBar progress={100} />

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
          Who else will be deciding with you?
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
          We'll set up their access. You can change all of this later.
        </Text>

        {/* Checkbox Options List */}
        <View style={{ gap: '0px' }}>
          {DECIDERS.map((item) => {
            const isSelected = selectedIds.includes(item.id);
            return (
              <OptionCard
                key={item.id}
                title={item.name}
                selected={isSelected}
                showCheckbox={true}
                onPress={() => onToggle(item.id)}
              />
            );
          })}
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
            Weddings planned by three or more people finish <strong className="font-semibold text-gray-900">twice as fast</strong> — and nobody has to relay decisions over the phone.
          </Text>
        </View>
      </View>

      {/* Fixed Bottom Submit Button Container */}
      <View style={{ paddingTop: '6px', flexShrink: 0, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <RNButton 
          title="Build my Blueprint" 
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

