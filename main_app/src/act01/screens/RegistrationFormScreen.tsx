import React, { useState } from 'react';
import { View, Text, RNButton, TouchableOpacity } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';
import { ChevronLeft } from 'lucide-react';

export const RegistrationFormScreen: React.FC = () => {
  const { goToVision, setScreen } = useWeddingStore();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const generateOtp = () => {
    const random = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(random);
  };

  const onRegister = () => {
    console.log('Registration data:', { fullName, email, phone, otp });
    goToVision();
  };

  return (
    <View style={{ flex: 1, padding: '20px', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FAF5EE' }}>
      
      {/* Top Bar with Back Button */}
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '16px' }}>
        <TouchableOpacity 
          onPress={() => setScreen('questions')}
          style={{ 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            backgroundColor: '#EBE2D4',
            cursor: 'pointer',
            border: '1px solid #D9CDB8'
          }}
        >
          <ChevronLeft size={16} color="#1D1D1F" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, width: '100%', maxWidth: '400px', justifyContent: 'center', alignItems: 'center', paddingBottom: '60px' }}>
        <Text variant="serifTitle" style={{ marginBottom: '24px' }}>Create Your Account</Text>

      <View style={{ width: '100%', marginBottom: '12px' }}>
        <Text style={{ marginBottom: '4px' }}>Full Name</Text>
        <input
          type="text"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          placeholder="Enter your full name"
          style={{ height: '40px', border: '1px solid #ccc', borderRadius: '8px', width: '100%', padding: '0 8px' }}
        />
      </View>

      <View style={{ width: '100%', marginBottom: '12px' }}>
        <Text style={{ marginBottom: '4px' }}>Email Address</Text>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ height: '40px', border: '1px solid #ccc', borderRadius: '8px', width: '100%', padding: '0 8px' }}
        />
      </View>

      <View style={{ width: '100%', marginBottom: '12px' }}>
        <Text style={{ marginBottom: '4px' }}>Phone Number</Text>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          style={{ height: '40px', border: '1px solid #ccc', borderRadius: '8px', width: '100%', padding: '0 8px' }}
        />
      </View>

      <View style={{ width: '100%', marginBottom: '24px' }}>
        <Text style={{ marginBottom: '4px' }}>OTP</Text>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            placeholder="Enter OTP"
            style={{ flex: 1, height: '40px', border: '1px solid #ccc', borderRadius: '8px', padding: '0 8px' }}
          />
          <button onClick={generateOtp} style={{ marginLeft: '8px', height: '40px', padding: '0 12px' }}>Generate</button>
        </div>
      </View>

      <RNButton title="Register" onPress={onRegister} />
      <Text style={{ marginTop: '16px', color: '#666' }}>Already have an account? Login</Text>
      </View>
    </View>
  );
};
