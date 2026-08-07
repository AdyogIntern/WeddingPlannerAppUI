import React, { useState } from 'react';
import { View, Text, RNButton } from '../components/RNPrimitives';
import { useWeddingStore } from '../store/useWeddingStore';

export const RegistrationFormScreen: React.FC = () => {
  const { goToVision } = useWeddingStore();

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
    <View style={{ flex: 1, padding: '20px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAF5EE' }}>
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
  );
};
