import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';
import { colors } from '../theme';
import { Sparkles } from 'lucide-react';

interface PrioritiesScreenProps {
  selectedIds: string[];
  onToggle: (id: string) => void;
  onContinue: () => void;
  onSkip?: () => void;
}

const PRIORITY_OPTIONS = [
  {
    id: 'p_catering',
    name: 'Authentic South Indian Catering & Ela Sapad',
    details: 'Top priority for traditional hospitality & authentic tastes',
  },
  {
    id: 'p_decor',
    name: 'Grand Venue & Floral Stage Decor',
    details: 'Visual impact for grand reception photos & Mandapam ambiance',
  },
  {
    id: 'p_media',
    name: 'Cinematic Photography & Videography',
    details: 'High-end storytelling, drone coverage & heirloom albums',
  },
  {
    id: 'p_location',
    name: 'Prime Location Mandapam (Mylapore / T.Nagar)',
    details: 'Convenient central access for guests & family elders',
  },
  {
    id: 'p_music',
    name: 'Live Music & Cultural Entertainment',
    details: 'Nadaswaram, Carnatic fusion & memorable guest experience',
  },
];

export const PrioritiesScreen: React.FC<PrioritiesScreenProps> = ({
  selectedIds,
  onToggle,
  onContinue,
}) => {
  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.questionBackground, 
        paddingLeft: '18px', paddingRight: '18px',
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
          QUESTION 9 OF 10
        </Text>

        <RNProgressBar progress={90} />

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
          Pick three priorities for your wedding
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
          Select up to 3 key areas where you want us to allocate maximum budget & attention.
        </Text>

        {/* Checkbox Option Cards */}
        <View style={{ gap: '0px' }}>
          {PRIORITY_OPTIONS.map((item) => {
            const isSelected = selectedIds.includes(item.id);
            return (
              <OptionCard
                key={item.id}
                title={item.name}
                subtitle={item.details}
                selected={isSelected}
                showCheckbox={true}
                onPress={() => {
                  if (!isSelected && selectedIds.length >= 3) {
                    return; // Max 3 limit
                  }
                  onToggle(item.id);
                }}
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
            marginTop: '8px',
            marginBottom: '8px',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '6px',
            border: '1px solid #EBE2D5'
          }}
        >
          <Sparkles size={13} color={colors.burgundyPrimary} style={{ marginTop: '1px', flexShrink: 0 }} />
          <Text 
            style={{ 
              fontSize: '10px', 
              color: colors.textDarkBody, 
              lineHeight: '1.35' 
            }}
          >
            Focusing budget on your top 3 priorities saves 15-20% on overall wedding expenses.
          </Text>
        </View>
      </View>

      {/* Fixed Bottom Submit Button Container */}
      <View style={{ paddingTop: '6px', flexShrink: 0, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <RNButton 
          title="Continue" 
          onPress={onContinue}
        />
      </View>
    </View>
  );
};
