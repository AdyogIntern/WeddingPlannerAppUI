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
import { InvitationScreen } from './screens/InvitationScreen';
import { VisaLetterScreen } from './screens/VisaLetterScreen';
import { Wifi, Battery } from 'lucide-react';
import { RegistrationFormScreen } from './screens/RegistrationFormScreen';
import { WhoPaysWhatScreen } from './screens/WhoPaysWhatScreen';
import { RecordsScreen } from './screens/RecordsScreen';

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
      case 'invitation':
        return <InvitationScreen />;
      case 'visa_letter':
        return <VisaLetterScreen />;
      case 'who_pays':
        return <WhoPaysWhatScreen />;
      case 'records':
        return <RecordsScreen />;
      case 'registration':
        return <RegistrationFormScreen />;
    }
  };

  return (
    <div className={`flex-1 overflow-hidden relative flex flex-col w-full h-full ${isDarkScreen ? 'bg-[#861F35]' : 'bg-[#FAF8F5]'}`}>
      {renderCurrentAppScreen()}
    </div>
  );
}
