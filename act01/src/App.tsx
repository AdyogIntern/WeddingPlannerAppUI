import React from 'react';
import { useWeddingStore } from './store/useWeddingStore';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { OnboardingQuestionsScreen } from './screens/OnboardingQuestionsScreen';
import { GeneratingBlueprintScreen } from './screens/GeneratingBlueprintScreen';
import { BlueprintGeneratedScreen } from './screens/BlueprintGeneratedScreen';
import { BlueprintHomeScreen } from './screens/BlueprintHomeScreen';
import { FunctionDetailScreen } from './screens/FunctionDetailScreen';
import { ComparePlansScreen } from './screens/ComparePlansScreen';
import { SharePlanScreen } from './screens/SharePlanScreen';
import { Wifi, Battery } from 'lucide-react';

export default function App() {
  const { 
    currentScreen, 
    setScreen, 
    setQuestionIndex 
  } = useWeddingStore();

  const isDarkScreen = currentScreen === 'landing' || currentScreen === 'generating' || currentScreen === 'blueprint_generated';

  // Active Screen renderer inside production mobile viewport
  const renderCurrentAppScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <WelcomeScreen 
            onStart={() => {
              setQuestionIndex(0);
              setScreen('questions');
            }} 
            onOpenLink={() => setScreen('blueprint_home')}
          />
        );
      case 'questions':
        return <OnboardingQuestionsScreen />;
      case 'generating':
        return <GeneratingBlueprintScreen />;
      case 'blueprint_generated':
        return <BlueprintGeneratedScreen />;
      case 'blueprint_home':
        return <BlueprintHomeScreen />;
      case 'function_details':
        return <FunctionDetailScreen />;
      case 'compare_plans':
        return <ComparePlansScreen />;
      case 'share_plan':
        return <SharePlanScreen />;
      default:
        return <OnboardingQuestionsScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] sm:bg-[#2A2526] flex items-center justify-center font-sans text-[#1D1D1F] p-0 sm:p-4 selection:bg-[#8B1538] selection:text-white overflow-x-hidden">
      {/* Native Mobile Viewport Container */}
      <div 
        className={`w-full max-w-[430px] h-screen sm:h-[850px] sm:max-h-[96vh] sm:rounded-[36px] overflow-hidden flex flex-col relative sm:shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-0 sm:border sm:border-gray-800/60 transition-colors duration-300 ${
          isDarkScreen ? 'bg-[#671B2B]' : 'bg-[#FAF8F5]'
        }`}
      >
        {/* Full Mobile Screen Content */}
        <div className="flex-1 overflow-hidden relative flex flex-col w-full h-full">
          {renderCurrentAppScreen()}
        </div>

        {/* Home Indicator Bar */}
        <div 
          className={`py-1.5 flex justify-center items-center shrink-0 z-50 ${
            isDarkScreen ? 'bg-[#671B2B]' : 'bg-[#FAF8F5]'
          }`}
        >
          <div 
            className={`w-[110px] h-[4px] rounded-full ${
              isDarkScreen ? 'bg-white/40' : 'bg-black/25'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
