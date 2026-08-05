import React from 'react';
import { useWeddingStore } from './store/useWeddingStore';

// Act 6 Screens Exclusively
import { Act6BoardScreen } from './screens/Act6BoardScreen';
import { Act6SwipeScreen } from './screens/Act6SwipeScreen';
import { Act6ReelsScreen } from './screens/Act6ReelsScreen';
import { Act6ArPreviewScreen } from './screens/Act6ArPreviewScreen';
import { Act6LookbookScreen } from './screens/Act6LookbookScreen';
import { Act6SangeetStudioScreen } from './screens/Act6SangeetStudioScreen';
import { Act6CrewScreen } from './screens/Act6CrewScreen';
import { Act6WrappedScreen } from './screens/Act6WrappedScreen';
import { Act6ShareMomentScreen } from './screens/Act6ShareMomentScreen';
import { Act6GuestbookScreen } from './screens/Act6GuestbookScreen';
import { Act6PhotoWallScreen } from './screens/Act6PhotoWallScreen';
import { Act6HappeningNowScreen } from './screens/Act6HappeningNowScreen';
import { Act6VoiceDiscussionScreen } from './screens/Act6VoiceDiscussionScreen';
import { Act6SangeetKittyScreen } from './screens/Act6SangeetKittyScreen';
import { Act6GiftRegistryScreen } from './screens/Act6GiftRegistryScreen';
import { Act6WidgetScreen } from './screens/Act6WidgetScreen';

export default function App() {
  const { currentScreen } = useWeddingStore();

  const isDarkScreen = 
    currentScreen === 'act6_reels' ||
    currentScreen === 'act6_ar_preview' ||
    currentScreen === 'act6_wrapped' ||
    currentScreen === 'act6_photo_wall' ||
    currentScreen === 'act6_widget';

  // Active Screen renderer inside production mobile viewport (Act 6 Only)
  const renderCurrentAppScreen = () => {
    switch (currentScreen) {
      case 'act6_board':
        return <Act6BoardScreen />;
      case 'act6_swipe':
        return <Act6SwipeScreen />;
      case 'act6_reels':
        return <Act6ReelsScreen />;
      case 'act6_ar_preview':
        return <Act6ArPreviewScreen />;
      case 'act6_lookbook':
        return <Act6LookbookScreen />;
      case 'act6_sangeet_studio':
        return <Act6SangeetStudioScreen />;
      case 'act6_crew':
        return <Act6CrewScreen />;
      case 'act6_wrapped':
        return <Act6WrappedScreen />;
      case 'act6_share_moment':
        return <Act6ShareMomentScreen />;
      case 'act6_guestbook':
        return <Act6GuestbookScreen />;
      case 'act6_photo_wall':
        return <Act6PhotoWallScreen />;
      case 'act6_happening_now':
        return <Act6HappeningNowScreen />;
      case 'act6_widget':
        return <Act6WidgetScreen />;
      case 'act6_voice_discussion':
        return <Act6VoiceDiscussionScreen />;
      case 'act6_sangeet_kitty':
        return <Act6SangeetKittyScreen />;
      case 'act6_gift_registry':
        return <Act6GiftRegistryScreen />;

      default:
        return <Act6BoardScreen />;
    }
  };

  return (
    <div className={`flex-1 overflow-hidden relative flex flex-col w-full h-full ${
      isDarkScreen ? 'bg-[#671B2B]' : 'bg-[#FAF8F5]'
    }`}>
      {renderCurrentAppScreen()}
    </div>
  );
}
