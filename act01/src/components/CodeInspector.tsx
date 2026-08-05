import React, { useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';

const CODE_SAMPLES: Record<string, { filename: string; code: string }> = {
  welcome: {
    filename: 'WelcomeScreen.tsx',
    code: `import React from 'react';
import { View, Text, RNButton } from '../components/RNPrimitives';
import { colors } from '../theme';

export const WelcomeScreen = ({ onStart }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.welcomeBackground, paddingHorizontal: 18 }}>
      <Text variant="serifTitle" style={{ color: colors.textWhite }}>
        Plan a Chennai wedding from 8,000 km away.
      </Text>
      <Text style={{ color: colors.textWhiteSecondary, fontSize: 11.5 }}>
        Answer ten questions and we'll build your whole wedding in about four minutes.
      </Text>
      <RNButton title="Start my Blueprint" variant="white" onPress={onStart} />
    </View>
  );
};`
  },
  location: {
    filename: 'LocationScreen.tsx',
    code: `import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';
import { colors } from '../theme';

export const LocationScreen = ({ selectedId, onSelect, onContinue }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.questionBackground, paddingHorizontal: 18 }}>
      <Text variant="caption">QUESTION 2 OF 10</Text>
      <RNProgressBar progress={20} />
      <Text variant="serifHeading">Where are you living now?</Text>
      <OptionCard title="Seattle, United States" subtitle="USD · PST · 12.5h behind" selected={selectedId === 'seattle'} onPress={() => onSelect('seattle')} />
      <RNButton title="Continue" onPress={onContinue} />
    </View>
  );
};`
  },
  deciders: {
    filename: 'DecidersScreen.tsx',
    code: `import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';

export const DecidersScreen = ({ selectedIds, onToggle, onSubmit }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 18 }}>
      <Text variant="caption">QUESTION 10 OF 10</Text>
      <RNProgressBar progress={100} />
      <Text variant="serifHeading">Who else will be deciding with you?</Text>
      <OptionCard title="My parents" selected={selectedIds.includes('parents')} showCheckbox onPress={() => onToggle('parents')} />
      <RNButton title="Build my Blueprint" onPress={onSubmit} />
    </View>
  );
};`
  },
  timeline: {
    filename: 'TimelineScreen.tsx',
    code: `import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';

export const TimelineScreen = ({ selectedId, onSelect, onContinue }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 18 }}>
      <Text variant="caption">QUESTION 1 OF 10</Text>
      <RNProgressBar progress={10} />
      <Text variant="serifHeading">When are you planning the wedding?</Text>
      <OptionCard title="Upcoming Muhurtham Season (Nov 2026 - Feb 2027)" subtitle="Peak season · High demand" selected={selectedId === 'season_nov_feb'} onPress={() => onSelect('season_nov_feb')} />
      <RNButton title="Continue" onPress={onContinue} />
    </View>
  );
};`
  },
  budget: {
    filename: 'BudgetScreen.tsx',
    code: `import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';

export const BudgetScreen = ({ selectedId, onSelect, onContinue }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 18 }}>
      <Text variant="caption">QUESTION 7 OF 10</Text>
      <RNProgressBar progress={70} />
      <Text variant="serifHeading">What is your target total budget?</Text>
      <OptionCard title="₹25 Lakhs - ₹40 Lakhs ($30k - $48k USD)" subtitle="Most popular · Premium AC halls" selected={selectedId === 'budget_25_40'} onPress={() => onSelect('budget_25_40')} />
      <RNButton title="Continue" onPress={onContinue} />
    </View>
  );
};`
  },
  priorities: {
    filename: 'PrioritiesScreen.tsx',
    code: `import React from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar } from '../components/RNPrimitives';

export const PrioritiesScreen = ({ selectedIds, onToggle, onContinue }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 18 }}>
      <Text variant="caption">QUESTION 9 OF 10</Text>
      <RNProgressBar progress={90} />
      <Text variant="serifHeading">Pick three priorities for your wedding</Text>
      <OptionCard title="Authentic South Indian Catering & Ela Sapad" showCheckbox selected={selectedIds.includes('p_catering')} onPress={() => onToggle('p_catering')} />
      <RNButton title="Continue" onPress={onContinue} />
    </View>
  );
};`
  },
  primitives: {
    filename: 'RNPrimitives.tsx',
    code: `// React Native Reusable Primitive System
import React from 'react';

export const View = ({ style, children, ...props }) => (
  <div className="flex flex-col box-border" style={style} {...props}>{children}</div>
);

export const Text = ({ style, variant, children }) => (
  <span style={{ fontFamily: variant === 'serifHeading' ? 'Newsreader, Georgia, serif' : 'Plus Jakarta Sans', ...style }}>
    {children}
  </span>
);`
  }
};

export const CodeInspector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('welcome');
  const [copied, setCopied] = useState(false);

  const current = CODE_SAMPLES[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1A1A1A] text-gray-200 rounded-xl overflow-hidden border border-gray-800 shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#242424] border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Code2 size={18} className="text-[#E5C07B]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            React Native Component Architecture
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-[#1A1A1A] p-1 rounded-lg border border-gray-800 flex-wrap">
          {Object.entries(CODE_SAMPLES).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors border-none cursor-pointer ${
                activeTab === key
                  ? 'bg-[#702334] text-white'
                  : 'text-gray-400 hover:text-gray-200 bg-transparent'
              }`}
            >
              {item.filename}
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-xs text-gray-200 border-none cursor-pointer transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          <span>{copied ? 'Copied' : 'Copy TSX'}</span>
        </button>
      </div>

      {/* Code Block */}
      <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed bg-[#111111] text-emerald-300 max-h-[380px]">
        <pre>{current.code}</pre>
      </div>
    </div>
  );
};
