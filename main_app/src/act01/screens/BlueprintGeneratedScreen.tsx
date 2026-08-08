import React, { useState } from 'react';
import { View, Text, RNButton, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { Check } from 'lucide-react';

export const BlueprintGeneratedScreen: React.FC = () => {
  const { setScreen } = useWeddingStore();

  // Tasks state for the interactive checklist
  const [tasks, setTasks] = useState({
    venue: false,
    parents: false,
    guests: false,
  });

  // Calculate dynamic progress based on selected tasks
  const baseProgress = 18;
  const progressBoost = 
    (tasks.venue ? 12 : 0) + 
    (tasks.parents ? 8 : 0) + 
    (tasks.guests ? 5 : 0);
  
  const currentProgress = baseProgress + progressBoost;

  const renderCheckbox = (checked: boolean, onPress: () => void) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '18px',
        height: '18px',
        borderRadius: '5px',
        border: checked ? '1.5px solid #861F35' : '1.5px solid #D0C5B8',
        backgroundColor: checked ? '#861F35' : 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        shrink: 0,
        marginTop: '2px',
        cursor: 'pointer',
      }}
    >
      {checked && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FAF8F5', // WARM CREAM page background throughout
        height: '100%',
        boxSizing: 'border-box',
        justifyContent: 'space-between'
      }}
    >
      {/* Top Header Block (Burgundy/Maroon) */}
      <View 
        style={{ 
          backgroundColor: '#861F35', 
          width: '100%', 
          paddingBottom: '24px', 
          shrink: 0,
          boxSizing: 'border-box'
        }}
      >
        {/* Top Header Status Bar */}
        <View 
          style={{ 
            flexDirection: 'row', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            paddingHorizontal: '24px',
            height: '24px',
            shrink: 0,
            marginTop: '12px',
            marginBottom: '12px'
          }}
        >
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

        {/* Header Text */}
        <View style={{ width: '84%', alignSelf: 'center' }}>
          <Text 
            style={{ 
              color: 'rgba(255, 255, 255, 0.65)', 
              fontSize: '10px', 
              fontWeight: '700', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
              fontFamily: 'system-ui, sans-serif'
            }}
          >
            YOUR BLUEPRINT IS READY
          </Text>
          <Text 
            style={{ 
              color: '#FFFFFF', 
              fontSize: '34px', 
              lineHeight: '1.16',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              whiteSpace: 'pre-line'
            }}
          >
            {"Three days, five\nfunctions, 420 guests."}
          </Text>
        </View>
      </View>

      {/* Scrollable Content Area (Warm Cream Background) */}
      <View style={{ flex: 1, overflowY: 'auto', width: '100%', shrink: 1, paddingTop: '16px', paddingBottom: '8px' }}>
        
        {/* Stats Grid */}
        <View style={{ flexDirection: 'row', gap: '12px', width: '84%', alignSelf: 'center', marginBottom: '14px' }}>
          {/* Estimated Card */}
          <View 
            style={{ 
              flex: 1, 
              backgroundColor: '#FFFFFF', 
              borderRadius: '20px', 
              padding: '14px 16px',
              border: '1px solid #E5E0D8',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              boxSizing: 'border-box'
            }}
          >
            <Text style={{ fontSize: '9px', fontWeight: '700', color: '#8E8E93', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              ESTIMATED
            </Text>
            <Text style={{ fontSize: '20px', fontWeight: '700', color: '#1D1D1F', display: 'block', lineHeight: '1.2' }}>
              ₹41.8L
            </Text>
            <Text style={{ fontSize: '11px', fontWeight: '500', color: '#8E8E93', display: 'block', marginTop: '2px' }}>
              ≈ $49,750
            </Text>
          </View>

          {/* Vendor Slots Card */}
          <View 
            style={{ 
              flex: 1, 
              backgroundColor: '#FFFFFF', 
              borderRadius: '20px', 
              padding: '14px 16px',
              border: '1px solid #E5E0D8',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              boxSizing: 'border-box'
            }}
          >
            <Text style={{ fontSize: '9px', fontWeight: '700', color: '#8E8E93', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              VENDOR SLOTS
            </Text>
            <Text style={{ fontSize: '20px', fontWeight: '700', color: '#1D1D1F', display: 'block', lineHeight: '1.2' }}>
              31
            </Text>
            <Text style={{ fontSize: '11px', fontWeight: '500', color: '#8E8E93', display: 'block', marginTop: '2px' }}>
              11 pre-filled
            </Text>
          </View>
        </View>

        {/* Progress Card */}
        <View 
          style={{ 
            width: '84%', 
            alignSelf: 'center', 
            backgroundColor: '#FFFFFF', 
            borderRadius: '20px', 
            padding: '16px 18px',
            border: '1px solid #E5E0D8',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            marginBottom: '14px',
            boxSizing: 'border-box'
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <Text style={{ fontSize: '12.5px', fontWeight: '700', color: '#1D1D1F' }}>
              Your wedding is {currentProgress}% planned
            </Text>
            <Text style={{ fontSize: '11.5px', fontWeight: '500', color: '#8E8E93' }}>
              198 days
            </Text>
          </View>
          
          <View style={{ width: '100%', backgroundColor: '#FAF5EE', height: '8px', borderRadius: '4px', overflow: 'hidden', marginVertical: '4px' }}>
            <View style={{ backgroundColor: '#B49A6C', height: '100%', width: `${currentProgress}%`, borderRadius: '4px', transition: 'width 0.4s ease' }} />
          </View>

          <Text style={{ fontSize: '11px', fontWeight: '500', color: '#8E8E93', display: 'block', marginTop: '6px' }}>
            Get to 25% to unlock your first reward.
          </Text>
        </View>

        {/* Three Things to Do First Card */}
        <View 
          style={{ 
            width: '84%', 
            alignSelf: 'center', 
            backgroundColor: '#FFFFFF', 
            borderRadius: '20px', 
            padding: '18px 20px',
            border: '1px solid #E5E0D8',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            marginBottom: '20px',
            boxSizing: 'border-box'
          }}
        >
          <Text 
            style={{ 
              fontSize: '16px', 
              fontWeight: '700', 
              color: '#1D1D1F', 
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              display: 'block',
              marginBottom: '14px' 
            }}
          >
            Three things to do first
          </Text>

          <View style={{ gap: '14px' }}>
            {/* Task 1 */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '12px' }}>
              {renderCheckbox(tasks.venue, () => setTasks(prev => ({ ...prev, venue: !prev.venue })))}
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: '12.5px', fontWeight: '600', color: '#1D1D1F', display: 'block', lineHeight: '1.3', whiteSpace: 'pre-line' }}>
                  {"Lock the Muhurtham venue —\navailability moves fastest"}
                </Text>
                <Text style={{ fontSize: '10.5px', fontWeight: '500', color: '#B49A6C', display: 'block', marginTop: '2px' }}>
                  +12% progress
                </Text>
              </View>
            </View>

            {/* Task 2 */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '12px' }}>
              {renderCheckbox(tasks.parents, () => setTasks(prev => ({ ...prev, parents: !prev.parents })))}
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: '12.5px', fontWeight: '600', color: '#1D1D1F', display: 'block', lineHeight: '1.3' }}>
                  Invite Appa and Amma
                </Text>
                <Text style={{ fontSize: '10.5px', fontWeight: '500', color: '#B49A6C', display: 'block', marginTop: '2px' }}>
                  +8% · unlocks approvals
                </Text>
              </View>
            </View>

            {/* Task 3 */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '12px' }}>
              {renderCheckbox(tasks.guests, () => setTasks(prev => ({ ...prev, guests: !prev.guests })))}
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: '12.5px', fontWeight: '600', color: '#1D1D1F', display: 'block', lineHeight: '1.3', whiteSpace: 'pre-line' }}>
                  {"Confirm your guest count per\nfunction"}
                </Text>
                <Text style={{ fontSize: '10.5px', fontWeight: '500', color: '#B49A6C', display: 'block', marginTop: '2px' }}>
                  +5%
                </Text>
              </View>
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
          boxSizing: 'border-box',
          backgroundColor: '#FAF8F5'
        }}
      >
        <RNButton 
          title="Open my Blueprint" 
          onPress={() => setScreen('blueprint_home')}
          style={{ height: '48px', borderRadius: '16px' }}
        />
        
        <button 
          onClick={() => alert('Sending blueprint link via WhatsApp...')}
          className="mt-3.5 text-[13px] text-gray-500 hover:text-gray-800 transition-colors cursor-pointer bg-transparent border-none outline-none font-semibold"
        >
          Send it to my family on WhatsApp
        </button>
      </View>
    </View>
  );
};
