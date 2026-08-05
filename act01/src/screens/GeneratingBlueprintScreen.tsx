import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from '../components/RNPrimitives';
import { colors } from '../theme';
import { useWeddingStore } from '../store/useWeddingStore';
import { Check, Sparkles, FastForward, ChevronLeft } from 'lucide-react';

export const GeneratingBlueprintScreen: React.FC = () => {
  const { setScreen, setGeneratingProgress } = useWeddingStore();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    { text: 'Laid out five functions across three days', progress: 25 },
    { text: 'Added Panda Kaal and Sumangali Prarthanai', progress: 50 },
    { text: 'Matched 9 Iyengar caterers in your band', progress: 75 },
    { text: 'Costing every slot in ₹ and $', progress: 90 },
    { text: 'Drafting your family’s task list', progress: 100 },
  ];

  useEffect(() => {
    // 15-20 second total loading timer split across steps
    const stepDuration = 3000; // 3 seconds per step * 5 steps = 15 seconds
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const step = steps[currentStepIndex];
    if (step) {
      setGeneratingProgress(step.progress, step.text);
    }
    if (currentStepIndex === steps.length - 1) {
      const timeout = setTimeout(() => {
        setScreen('blueprint_generated');
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentStepIndex]);

  const handleFastForward = () => {
    setGeneratingProgress(100, steps[steps.length - 1].text);
    setScreen('blueprint_generated');
  };

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.welcomeBackground, 
        paddingHorizontal: '20px',
        paddingVertical: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Header */}
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => setScreen('questions')}
          className="flex items-center gap-1 text-[11px] font-semibold text-white/80 hover:text-white bg-white/10 px-2.5 py-1 rounded-lg border-none cursor-pointer transition-colors"
        >
          <ChevronLeft size={14} />
          <span>Questions</span>
        </button>

        <Text style={{ color: colors.textGold, fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          ACT 1 · THE FIRST FOUR MINUTES
        </Text>

        <div className="w-16" /> {/* Spacer for symmetry */}
      </View>

      {/* Center Animated Rings & Wedding Illustration */}
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div className="relative flex items-center justify-center w-36 h-36 mb-6">
          {/* Outer Pulsing Aura */}
          <div className="absolute inset-0 rounded-full bg-[#C9A227]/10 animate-ping" />
          
          {/* Animated Gold Concentric Rings */}
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" stroke="#C9A227" strokeWidth="1" fill="none" strokeDasharray="6 4" opacity="0.6" />
            <circle cx="50" cy="50" r="38" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeDasharray="30 10" opacity="0.8" />
            <circle cx="50" cy="50" r="30" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>

          {/* Center Wedding Icon / Motif */}
          <div className="absolute w-16 h-16 bg-[#5A1525] rounded-full border border-[#C9A227]/40 flex items-center justify-center shadow-lg">
            <Sparkles size={26} className="text-[#C9A227] animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <Text variant="serifTitle" style={{ color: colors.textWhite, fontSize: '22px', textAlign: 'center', marginBottom: '4px' }}>
          Building your wedding.
        </Text>
        <Text style={{ color: colors.textWhiteSecondary, fontSize: '11px', textAlign: 'center', marginBottom: '20px' }}>
          About twenty seconds.
        </Text>

        {/* Animated Progress Steps List */}
        <View style={{ width: '100%', gap: '10px', maxWidth: '240px' }}>
          {steps.map((step, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <View 
                key={idx}
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  gap: '10px',
                  opacity: isDone ? 1 : isCurrent ? 1 : 0.35,
                  transition: 'opacity 0.4s ease'
                }}
              >
                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                  isDone 
                    ? 'bg-[#C9A227] text-[#671B2B]' 
                    : isCurrent 
                    ? 'border-2 border-[#C9A227] bg-transparent animate-pulse' 
                    : 'border border-white/20 bg-transparent'
                }`}>
                  {isDone && <Check size={10} strokeWidth={3} />}
                </div>

                <Text style={{ 
                  color: isCurrent ? colors.textGold : colors.textWhite, 
                  fontSize: '10.5px', 
                  fontWeight: isCurrent ? '600' : '400',
                  lineHeight: '1.25' 
                }}>
                  {step.text}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Bottom Footer & Fast Forward Toggle */}
      <View style={{ width: '100%', alignItems: 'center', gap: '8px' }}>
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-[#C9A227] h-full transition-all duration-700 ease-out rounded-full"
            style={{ width: `${steps[currentStepIndex].progress}%` }}
          />
        </div>

        <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: '9.5px', textAlign: 'center' }}>
          Nothing here is locked. Everything we choose, you can swap.
        </Text>

        {/* Fast-Forward Button for Evaluators */}
        <button
          onClick={handleFastForward}
          className="mt-1 flex items-center gap-1.5 text-[10px] text-[#C9A227] hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border-none cursor-pointer transition-colors"
        >
          <FastForward size={11} />
          <span>Skip Wait (Generate Instantly)</span>
        </button>
      </View>
    </View>
  );
};
