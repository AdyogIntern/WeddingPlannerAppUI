import React, { useState } from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar, TouchableOpacity } from '../components/RNPrimitives';
import { colors } from '../theme';
import { useWeddingStore, currencyRates } from '../store/useWeddingStore';
import { onboardingQuestionsList, priorityOptions, countryOptions } from '../constants/onboardingQuestions';
import { PriorityId, Currency, DeciderId } from '../types';
import { ChevronLeft, Search, CheckCircle2 } from 'lucide-react';

export const OnboardingQuestionsScreen: React.FC = () => {
  const { 
    questionIndex, 
    nextQuestion, 
    prevQuestion, 
    onboarding, 
    updateOnboarding, 
    currency, 
    setCurrency 
  } = useWeddingStore();

  const TOTAL_QUESTIONS = onboardingQuestionsList.length; // 7
  const currentQ = onboardingQuestionsList[questionIndex] || onboardingQuestionsList[0];
  const progressPercent = ((questionIndex + 1) / TOTAL_QUESTIONS) * 100;

  // Search filter for Question 3 (Wedding City)
  const [citySearch, setCitySearch] = useState('');
  const popularCities = ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Bangalore', 'Kumbakonam', 'Tirunelveli'];
  const filteredCities = popularCities.filter(c => c.toLowerCase().includes(citySearch.toLowerCase()));

  // Handlers
  const handleTogglePriority = (pId: PriorityId) => {
    const current = onboarding.topPriorities || [];
    if (current.includes(pId)) {
      updateOnboarding({ topPriorities: current.filter(id => id !== pId) });
    } else {
      if (current.length < 3) {
        updateOnboarding({ topPriorities: [...current, pId] });
      }
    }
  };

  const handleToggleDecider = (dId: DeciderId) => {
    const current = onboarding.deciders || [];
    if (current.includes(dId)) {
      updateOnboarding({ deciders: current.filter(d => d !== dId) });
    } else {
      updateOnboarding({ deciders: [...current, dId] });
    }
  };

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.questionBackground, 
        paddingHorizontal: '22px',
        paddingTop: '12px',
        paddingBottom: '16px',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Bar Navigation & Progress Indicator */}
      <View style={{ shrink: 0 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity 
            onPress={prevQuestion}
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: '4px',
              padding: '4px 8px',
              borderRadius: '8px',
              backgroundColor: '#EFE7DC',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={14} color={colors.textDarkHeading} />
            <Text style={{ fontSize: '11px', fontWeight: '600', color: colors.textDarkHeading }}>
              {questionIndex === 0 ? 'Start Page' : 'Back'}
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', color: colors.burgundyPrimary, textTransform: 'uppercase' }}>
            QUESTION {questionIndex + 1} OF {TOTAL_QUESTIONS}
          </Text>

          <TouchableOpacity 
            onPress={nextQuestion}
            style={{ 
              padding: '4px 8px',
              borderRadius: '8px',
              backgroundColor: '#EFE7DC',
            }}
          >
            <Text style={{ fontSize: '11px', fontWeight: '600', color: colors.burgundyPrimary }}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Bar */}
        <RNProgressBar progress={progressPercent} />
      </View>

      {/* Main Question Content Viewport */}
      <View style={{ flex: 1, overflowY: 'auto', paddingRight: '2px', paddingBottom: '8px' }}>
        
        {/* Question Title & Subtitle */}
        <Text variant="serifTitle" style={{ fontSize: '19px', color: colors.textDarkHeading, marginBottom: '4px' }}>
          {currentQ.title}
        </Text>
        <Text style={{ fontSize: '11px', color: colors.textDarkBody, marginBottom: '12px', lineHeight: '1.35' }}>
          {currentQ.subtitle}
        </Text>

        {/* ================= QUESTION 1: Wedding Date ================= */}
        {questionIndex === 0 && (
          <View style={{ gap: '8px' }}>
            <View 
              style={{
                backgroundColor: colors.infoBoxBg,
                padding: '10px 12px',
                borderRadius: '12px',
                border: '1px solid #E6D8C4',
                marginBottom: '8px',
                width: '88%',
                maxWidth: '340px',
                margin: '0 auto 8px auto',
                boxSizing: 'border-box'
              }}
            >
              <Text style={{ fontSize: '10.5px', fontWeight: '700', color: colors.burgundyPrimary, marginBottom: '4px' }}>
                We have a date
              </Text>
              <View style={{ flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
                <div className="flex-1 bg-white p-2 rounded-lg border border-[#E0D5C5] text-center">
                  <div className="text-[9px] text-gray-500 font-semibold uppercase">DAY</div>
                  <div className="text-base font-bold text-gray-900">14</div>
                </div>
                <div className="flex-1 bg-white p-2 rounded-lg border border-[#E0D5C5] text-center">
                  <div className="text-[9px] text-gray-500 font-semibold uppercase">MONTH</div>
                  <div className="text-base font-bold text-gray-900">Feb</div>
                </div>
                <div className="flex-1 bg-white p-2 rounded-lg border border-[#E0D5C5] text-center">
                  <div className="text-[9px] text-gray-500 font-semibold uppercase">YEAR</div>
                  <div className="text-base font-bold text-gray-900">2027</div>
                </div>
              </View>
              <Text style={{ fontSize: '9.5px', color: '#5C1A29', marginTop: '6px', fontWeight: '500' }}>
                Sunday · Uthiram nakshatram · Strong auspicious muhurtham day
              </Text>
            </View>

            <OptionCard 
              title="Only the month is fixed (Nov 2026 - Feb 2027)" 
              selected={onboarding.dateOptionType === 'exploring'} 
              onPress={() => updateOnboarding({ dateOptionType: 'exploring', weddingDate: 'Feb 2027' })} 
            />
            <OptionCard 
              title="Help me find a muhurtham date (Panchangam recommended)" 
              selected={onboarding.dateOptionType === 'muhurtham_help'} 
              onPress={() => updateOnboarding({ dateOptionType: 'muhurtham_help', weddingDate: 'Auspicious Muhurtham' })} 
            />
          </View>
        )}

        {/* ================= QUESTION 2: Current Country ================= */}
        {questionIndex === 1 && (
          <View style={{ gap: '6px' }}>
            {countryOptions.map((c) => (
              <OptionCard
                key={c.id}
                title={c.name}
                subtitle={c.details}
                selected={onboarding.country === c.id}
                onPress={() => updateOnboarding({ country: c.id })}
              />
            ))}
          </View>
        )}

        {/* ================= QUESTION 3: Wedding City ================= */}
        {questionIndex === 2 && (
          <View style={{ gap: '8px' }}>
            <View 
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: '#FFFFFF', 
                borderRadius: '12px', 
                paddingHorizontal: '12px',
                paddingVertical: '9px',
                border: `1px solid ${colors.cardBackgroundBorder}`,
                width: '88%',
                maxWidth: '340px',
                margin: '0 auto 6px auto',
                boxSizing: 'border-box'
              }}
            >
              <Search size={14} color={colors.textMuted} />
              <input
                type="text"
                placeholder="Search wedding destination city..."
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
                className="bg-transparent border-none outline-none text-xs ml-2 text-gray-800 w-full"
              />
            </View>

            <View style={{ gap: '6px' }}>
              {filteredCities.map((city) => (
                <OptionCard
                  key={city}
                  title={city}
                  subtitle={city === 'Chennai' ? 'Primary hub · 120 verified mandapams & caterers' : 'Verified vendors available'}
                  selected={onboarding.city === city}
                  onPress={() => updateOnboarding({ city })}
                />
              ))}
            </View>
          </View>
        )}

        {/* ================= QUESTION 4: Guest Count ================= */}
        {questionIndex === 3 && (
          <View style={{ gap: '12px', alignItems: 'center' }}>
            <div className="w-[88%] max-w-[340px] mx-auto bg-white p-4 rounded-2xl border border-[#EFE7DC] text-center shadow-xs">
              <span className="text-3xl font-serif font-bold text-[#702334]">
                {onboarding.guestCount}
              </span>
              <span className="text-xs text-gray-500 font-semibold block mt-1">
                EXPECTED WEDDING GUESTS
              </span>
              <p className="text-[10px] text-gray-500 mt-2">
                Typical Iyengar wedding: 400–600 guests for Muhurtham, 120 for Nichayathartham
              </p>
            </div>

            <div className="w-[88%] max-w-[340px] mx-auto px-1">
              <input
                type="range"
                min={50}
                max={1200}
                step={25}
                value={onboarding.guestCount}
                onChange={(e) => updateOnboarding({ guestCount: parseInt(e.target.value) })}
                className="w-full accent-[#702334] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-semibold">
                <span>50 Intimate</span>
                <span>420 Standard</span>
                <span>1,200 Grand</span>
              </div>
            </div>
          </View>
        )}

        {/* ================= QUESTION 5: Budget ================= */}
        {questionIndex === 4 && (
          <View style={{ gap: '10px' }}>
            {/* Currency Selector Pills */}
            <View style={{ flexDirection: 'row', gap: '4px', justifyContent: 'center', flexWrap: 'wrap', width: '88%', maxWidth: '340px', margin: '0 auto' }}>
              {(['USD', 'GBP', 'EUR', 'AED', 'AUD', 'CAD'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-3 py-1 rounded-full text-[10.5px] font-bold border-none cursor-pointer transition-all ${
                    currency === curr
                      ? 'bg-[#702334] text-white shadow-xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-[#E0D5C5]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </View>

            {/* Budget Amount Banner */}
            <div className="w-[88%] max-w-[340px] mx-auto bg-white p-4 rounded-2xl border border-[#EFE7DC] text-center shadow-xs">
              <div className="text-2xl font-serif font-bold text-[#702334]">
                {currency} ${onboarding.rawBudgetAmount.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-gray-600 mt-1">
                ≈ ₹{(onboarding.budgetINR / 100000).toFixed(1)} Lakhs INR
              </div>
              <p className="text-[10px] text-gray-500 mt-1.5 leading-snug">
                Rate calculated at ₹{currencyRates[currency]} / {currency} · Stored & costed in INR
              </p>
            </div>

            {/* Comparison Hint */}
            <div className="w-[88%] max-w-[340px] mx-auto bg-[#F3EDDF] p-3 rounded-xl border border-[#E6D8C4] text-[10.5px] text-[#4A4244] leading-relaxed">
              <strong className="text-[#702334]">For comparison:</strong> A 420-guest, five-function Iyengar wedding in Chennai typically lands between <strong>₹34L and ₹52L</strong>. You’re comfortably inside that.
            </div>
          </View>
        )}

        {/* ================= QUESTION 6: Top Priorities ================= */}
        {questionIndex === 5 && (
          <View style={{ gap: '8px' }}>
            <div className="text-[10.5px] font-bold text-[#702334] tracking-wider uppercase text-center">
              {onboarding.topPriorities.length} OF 3 PICKED
            </div>
            
            <div className="w-[88%] max-w-[340px] mx-auto flex flex-wrap gap-2 justify-between">
              {priorityOptions.map((opt) => {
                const isSelected = onboarding.topPriorities.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleTogglePriority(opt.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between cursor-pointer w-[48%] ${
                      isSelected
                        ? 'bg-[#702334] text-white border-[#702334] shadow-xs'
                        : 'bg-white text-gray-800 border-[#E5DEC9] hover:bg-gray-50'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <CheckCircle2 size={13} className="text-white ml-1 shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="w-[88%] max-w-[340px] mx-auto bg-[#F3EDDF] p-3 rounded-xl border border-[#E6D8C4] text-[10px] text-gray-700 leading-relaxed mt-1">
              Because you chose <strong>rituals done right</strong>, your Blueprint will include Panda Kaal Muhurtham and Sumangali Prarthanai with an explainer for each.
            </div>
          </View>
        )}

        {/* ================= QUESTION 7: Decision Makers ================= */}
        {questionIndex === 6 && (
          <View style={{ gap: '8px' }}>
            {[
              { id: 'Parents', label: 'My parents', desc: 'Primary category owners & approval' },
              { id: 'Bride', label: 'My partner / Bride', desc: 'Co-owner of decor & photography' },
              { id: 'Groom', label: 'Groom / Brother', desc: 'Budget & logistics owner' },
              { id: 'Grandparents', label: 'Grandparents', desc: 'Viewing via WhatsApp link — no app needed' },
              { id: 'Planner', label: 'Dedicated Planner / RM', desc: 'On-ground execution' },
            ].map((d) => {
              const isSelected = onboarding.deciders.includes(d.id as DeciderId);
              return (
                <OptionCard
                  key={d.id}
                  title={d.label}
                  subtitle={d.desc}
                  showCheckbox={true}
                  selected={isSelected}
                  onPress={() => handleToggleDecider(d.id as DeciderId)}
                />
              );
            })}

            {/* Summary Box Before Continuation */}
            <div className="w-[88%] max-w-[340px] mx-auto bg-[#FAF7F2] p-3 rounded-xl border border-[#702334]/20 text-[10.5px] text-gray-800 space-y-1.5 shadow-xs mt-1">
              <div className="font-bold text-[#702334]">Weddings planned by three or more people finish twice as fast.</div>
              <p className="text-gray-600 text-[10px]">
                We’ll generate your magic-link invites automatically so nobody has to relay decisions over the phone.
              </p>
            </div>
          </View>
        )}

      </View>

      {/* Bottom CTA Action Button */}
      <View style={{ paddingTop: '6px', shrink: 0 }}>
        <RNButton 
          title={questionIndex === TOTAL_QUESTIONS - 1 ? 'Build my Blueprint' : 'Continue'} 
          onPress={nextQuestion}
        />
      </View>
    </View>
  );
};
