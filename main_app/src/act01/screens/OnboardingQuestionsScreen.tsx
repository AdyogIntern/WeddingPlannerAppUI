import React, { useState } from 'react';
import { View, Text, OptionCard, RNButton, RNProgressBar, TouchableOpacity } from '../components/RNPrimitives';
import { colors } from '../theme';
import { useWeddingStore, currencyRates } from '../store/useWeddingStore';
import { onboardingQuestionsList, priorityOptions, countryOptions } from '../constants/onboardingQuestions';
import { PriorityId, Currency, DeciderId } from '../types';
import { ChevronLeft, Search, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

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

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = ['2026', '2027', '2028', '2029', '2030'];

  const getParsedDate = () => {
    const dateStr = onboarding.weddingDate || '';
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      return {
        day: parts[0],
        month: parts[1],
        year: parts[2]
      };
    }
    return { day: '14', month: 'Feb', year: '2027' };
  };

  const getDayOfWeek = (d: string, m: string, y: string) => {
    const monthIndex = months.indexOf(m);
    if (monthIndex === -1) return '';
    const dateObj = new Date(parseInt(y), monthIndex, parseInt(d));
    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysArr[dateObj.getDay()];
  };

  const getAuspiciousNote = (d: string, m: string, y: string) => {
    const dayOfWeek = getDayOfWeek(d, m, y);
    if (d === '14' && m === 'Feb' && y === '2027') {
      return `${dayOfWeek} · Uthiram nakshatram · Strong auspicious muhurtham day`;
    }
    const dayOfWeekStr = dayOfWeek ? `${dayOfWeek} · ` : '';
    const isWeekend = dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
    if (isWeekend) {
      return `${dayOfWeekStr}Good weekend alignment · Check auspiciousness in details`;
    }
    return `${dayOfWeekStr}Weekday wedding · Check auspiciousness in details`;
  };

  const { day: currentDay, month: currentMonth, year: currentYear } = getParsedDate();

  const handleDateChange = (newDay: string, newMonth: string, newYear: string) => {
    updateOnboarding({
      dateOptionType: 'fixed',
      weddingDate: `${newDay} ${newMonth} ${newYear}`
    });
  };

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

  const isQuestionAnswered = () => {
    switch (questionIndex) {
      case 0:
        return !!onboarding.dateOptionType;
      case 1:
        return !!onboarding.country;
      case 2:
        return !!onboarding.city;
      case 3:
        return onboarding.guestCount !== undefined && onboarding.guestCount !== null;
      case 4:
        return !!currency;
      case 5:
        return onboarding.topPriorities && onboarding.topPriorities.length > 0;
      case 6:
        return onboarding.deciders && onboarding.deciders.length > 0;
      case 7:
        return true; // Optional date suggestion step
      default:
        return false;
    }
  };

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: colors.questionBackground, 
        paddingHorizontal: '22px',
        paddingTop: '20px',
        paddingBottom: '16px',
        justifyContent: 'flex-start',
        height: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
        overflowY: 'auto'
      }}
    >
      {/* Top Bar Navigation & Progress Indicator */}
      <View style={{ width: '100%', marginBottom: '24px', paddingHorizontal: '22px' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <TouchableOpacity 
            onPress={prevQuestion}
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: '4px',
              padding: '6px 12px',
              borderRadius: '20px',
              backgroundColor: '#F5EEE5',
              cursor: 'pointer',
              border: '1px solid #E6D8C4'
            }}
          >
            <ChevronLeft size={14} color={colors.textDarkHeading} />
            <Text style={{ fontSize: '11px', fontWeight: '600', color: colors.textDarkHeading }}>
              {questionIndex === 0 ? 'Start' : 'Back'}
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', color: colors.burgundyPrimary, textTransform: 'uppercase' }}>
            {questionIndex === 7 ? 'SUGGESTION' : `${questionIndex + 1} / ${TOTAL_QUESTIONS - 1}`}
          </Text>

          <TouchableOpacity 
            onPress={nextQuestion}
            style={{ 
              padding: '6px 12px',
              borderRadius: '20px',
              backgroundColor: '#F5EEE5',
              border: '1px solid #E6D8C4',
              opacity: questionIndex === 7 ? 0 : 1,
              pointerEvents: questionIndex === 7 ? 'none' : 'auto'
            }}
          >
            <Text style={{ fontSize: '11px', fontWeight: '600', color: colors.burgundyPrimary }}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Bar */}
        <RNProgressBar progress={questionIndex === 7 ? 100 : progressPercent} />
      </View>

      {/* Main Question Content Viewport */}
      <View style={{ flex: 1, overflowY: 'auto', paddingRight: '2px', paddingBottom: '8px', maxWidth: '420px', width: '100%', margin: '0 auto' }}>
        {/* Question Title & Subtitle */}
        <Text 
          variant="serifTitle" 
          style={{ 
            fontSize: '19px', 
            color: colors.textDarkHeading, 
            marginBottom: '4px',
            textAlign: 'center',
            display: 'block',
            width: '100%'
          }}
        >
          {currentQ.title}
        </Text>
        <Text 
          style={{ 
            fontSize: '11px', 
            color: colors.textDarkBody, 
            marginBottom: '16px', 
            lineHeight: '1.35',
            textAlign: 'center',
            display: 'block',
            width: '100%'
          }}
        >
          {currentQ.subtitle}
        </Text>

        {/* ================= QUESTION 1: Wedding Date ================= */}
        {questionIndex === 0 && (
          <View style={{ gap: '8px' }}>
            <TouchableOpacity 
              onPress={() => {
                if (onboarding.dateOptionType !== 'fixed') {
                  updateOnboarding({ dateOptionType: 'fixed', weddingDate: `${currentDay} ${currentMonth} ${currentYear}` });
                }
              }}
              style={{
                backgroundColor: onboarding.dateOptionType === 'fixed' ? '#FAF3E8' : colors.cardBackgroundLight,
                padding: '10px 12px',
                borderRadius: '12px',
                border: onboarding.dateOptionType === 'fixed' 
                  ? `1.5px solid ${colors.cardSelectedBorder}` 
                  : `1px solid ${colors.cardBackgroundBorder}`,
                marginBottom: '8px',
                width: '88%',
                maxWidth: '340px',
                margin: '0 auto 8px auto',
                boxSizing: 'border-box',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Text style={{ fontSize: '10.5px', fontWeight: '700', color: colors.burgundyPrimary, marginBottom: '4px' }}>
                We have a date
              </Text>
              <View style={{ flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
                <div className="flex-1 bg-white p-2 rounded-lg border border-[#E0D5C5] text-center relative">
                  <div className="text-[9px] text-gray-500 font-semibold uppercase mb-0.5">DAY</div>
                  <select 
                    value={currentDay}
                    onChange={(e) => handleDateChange(e.target.value, currentMonth, currentYear)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-transparent border-0 text-center font-bold text-gray-900 text-base focus:ring-0 focus:outline-none cursor-pointer p-0"
                    style={{
                      border: 'none',
                      textAlign: 'center',
                      textAlignLast: 'center',
                      width: '100%',
                      padding: 0,
                    }}
                  >
                    {days.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 bg-white p-2 rounded-lg border border-[#E0D5C5] text-center relative">
                  <div className="text-[9px] text-gray-500 font-semibold uppercase mb-0.5">MONTH</div>
                  <select 
                    value={currentMonth}
                    onChange={(e) => handleDateChange(currentDay, e.target.value, currentYear)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-transparent border-0 text-center font-bold text-gray-900 text-base focus:ring-0 focus:outline-none cursor-pointer p-0"
                    style={{
                      border: 'none',
                      textAlign: 'center',
                      textAlignLast: 'center',
                      width: '100%',
                      padding: 0,
                    }}
                  >
                    {months.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 bg-white p-2 rounded-lg border border-[#E0D5C5] text-center relative">
                  <div className="text-[9px] text-gray-500 font-semibold uppercase mb-0.5">YEAR</div>
                  <select 
                    value={currentYear}
                    onChange={(e) => handleDateChange(currentDay, currentMonth, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-transparent border-0 text-center font-bold text-gray-900 text-base focus:ring-0 focus:outline-none cursor-pointer p-0"
                    style={{
                      border: 'none',
                      textAlign: 'center',
                      textAlignLast: 'center',
                      width: '100%',
                      padding: 0,
                    }}
                  >
                    {years.map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </View>
              <Text style={{ fontSize: '9.5px', color: '#5C1A29', marginTop: '6px', fontWeight: '500' }}>
                {getAuspiciousNote(currentDay, currentMonth, currentYear)}
              </Text>
            </TouchableOpacity>

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
                {onboarding.guestCount !== null && onboarding.guestCount !== undefined ? onboarding.guestCount : '—'}
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
                value={onboarding.guestCount !== null && onboarding.guestCount !== undefined ? onboarding.guestCount : 420}
                onChange={(e) => updateOnboarding({ guestCount: parseInt(e.target.value) })}
                className="w-full accent-[#702334] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-semibold">
                <span>50 Intimate</span>
                <span>{onboarding.guestCount !== null && onboarding.guestCount !== undefined ? 'Drag to adjust' : 'Tap slider to select'}</span>
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
              {currency ? (
                <>
                  <div className="text-2xl font-serif font-bold text-[#702334]">
                    {currency} ${onboarding.rawBudgetAmount.toLocaleString()}
                  </div>
                  <div className="text-xs font-semibold text-gray-600 mt-1">
                    ≈ ₹{(onboarding.budgetINR / 100000).toFixed(1)} Lakhs INR
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1.5 leading-snug">
                    Rate calculated at ₹{currencyRates[currency as Currency]} / {currency} · Stored & costed in INR
                  </p>
                </>
              ) : (
                <div className="py-1">
                  <div className="text-base font-serif font-semibold text-gray-400">
                    No currency selected
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">
                    Select a currency to calculate your budget
                  </div>
                </div>
              )}
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

        {/* ================= QUESTION 8: Auspicious Dates ================= */}
        {questionIndex === 7 && (
          <View style={{ gap: '0px' }}>
            {/* Filter Pills */}
            <div className="flex flex-row gap-2 mb-6 justify-center">
              <div className="px-3 py-1.5 bg-[#7A1C31] text-white text-[12px] font-semibold rounded-lg border border-[#7A1C31]">Nov 26 – Jun 27</div>
              <div className="px-3 py-1.5 bg-transparent text-[#7A1C31] text-[12px] font-medium rounded-lg border border-[#7A1C31]">Iyengar</div>
              <div className="px-3 py-1.5 bg-transparent text-[#7A1C31] text-[12px] font-medium rounded-lg border border-[#7A1C31]">Morning</div>
            </div>

            {/* Horoscope Box */}
            <div className="bg-white border border-[#EBE5DC] rounded-2xl p-4 mb-4 shadow-sm w-full max-w-[340px] mx-auto box-border">
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2">
                  <Sparkles className="w-[18px] h-[18px] text-[#7A1C31] mt-0.5 shrink-0" />
                  <h3 className="font-bold text-[#1A1613] text-[15px] leading-snug">Jathagam Porutham &<br/>Horoscope Match</h3>
                </div>
                <div className="bg-[#E6F3E6] px-2 py-1 rounded-md text-right shrink-0 ml-2">
                  <div className="text-[10px] font-bold text-[#2A7E3B]">10 / 10</div>
                  <div className="text-[9px] font-bold text-[#2A7E3B] tracking-wide">MATCHED</div>
                </div>
              </div>
              <p className="text-[#625952] text-[13px] leading-relaxed mb-4 mt-1">
                Patti & Purohit verified: Dina, Gana, Yoni, Rasi, Rajju & Vedha poruthams checked. Sevvai dosham nivarana pooja completed at Thirunageswaram.
              </p>
              <div className="h-[1px] bg-[#EBE5DC] my-3 w-full" />
              <div className="flex justify-between items-center cursor-pointer group mt-1">
                <span className="text-[12px] text-[#8C827A]">Astrologer Video Call for NRIs</span>
                <span className="text-[12px] font-bold text-[#7A1C31] flex items-center gap-1 group-hover:underline">
                  Book Call with Sastrigal <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Date Option 1 */}
            <TouchableOpacity
              onPress={() => updateOnboarding({ weddingDate: '14 Feb 2027', dateOptionType: 'fixed' })}
              style={{
                backgroundColor: 'white',
                border: onboarding.weddingDate === '14 Feb 2027' ? `2px solid #7A1C31` : `1px solid ${colors.cardBackgroundBorder}`,
                borderRadius: '16px',
                padding: '16px',
                marginBottom: '12px',
                width: '100%',
                maxWidth: '340px',
                margin: '0 auto 12px auto',
                boxSizing: 'border-box'
              }}
            >
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-[18px] font-bold text-[#1A1613]">Sun 14 Feb 2027</h4>
                <div className="bg-[#E6F3E6] px-2 py-1 rounded text-[10px] font-bold text-[#2A7E3B] tracking-wider mt-0.5">STRONG</div>
              </div>
              <p className="text-[#625952] text-[13px] mb-4">Uthiram nakshatram · Shukla paksha · lagnam 6:34–8:12 am</p>
              <div className="flex gap-2">
                <div className="bg-[#FAF3E8] px-2.5 py-1.5 rounded-lg text-[12px] text-[#625952] font-medium">9 venues free</div>
                <div className="bg-[#FAF3E8] px-2.5 py-1.5 rounded-lg text-[12px] text-[#625952] font-medium">Long weekend in the US</div>
              </div>
            </TouchableOpacity>

            {/* Date Option 2 */}
            <TouchableOpacity
              onPress={() => updateOnboarding({ weddingDate: '21 Feb 2027', dateOptionType: 'fixed' })}
              style={{
                backgroundColor: 'white',
                border: onboarding.weddingDate === '21 Feb 2027' ? `2px solid #7A1C31` : `1px solid ${colors.cardBackgroundBorder}`,
                borderRadius: '16px',
                padding: '16px',
                marginBottom: '12px',
                width: '100%',
                maxWidth: '340px',
                margin: '0 auto 12px auto',
                boxSizing: 'border-box'
              }}
            >
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-[18px] font-bold text-[#1A1613]">Sun 21 Feb 2027</h4>
                <div className="text-[13px] font-bold text-[#2A7E3B] mt-0.5">Strong</div>
              </div>
              <p className="text-[#625952] text-[13px] mb-4">Rohini nakshatram · lagnam 7:02–9:40 am</p>
              <div className="flex gap-2">
                <div className="bg-[#FAF3E8] px-2.5 py-1.5 rounded-lg text-[12px] text-[#625952] font-medium">14 venues free</div>
                <div className="bg-[#FAF3E8] px-2.5 py-1.5 rounded-lg text-[12px] text-[#625952] font-medium">Cheaper — off-peak</div>
              </div>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={{ marginTop: 'auto', paddingTop: '12px', width: '100%', paddingBottom: '8px', alignSelf: 'center', display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={() => {
            if (isQuestionAnswered()) {
              nextQuestion();
            }
          }}
          disabled={!isQuestionAnswered()}
          style={{
            opacity: isQuestionAnswered() ? 1 : 0.5,
            cursor: isQuestionAnswered() ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease'
          }}
          className="w-[72%] max-w-[220px] mx-auto py-2.5 bg-[#671B2B] text-white rounded-md text-xs font-bold border-none shadow-2xs hover:bg-[#521422] transition-colors text-center block"
        >
          {questionIndex === TOTAL_QUESTIONS - 1 ? 'Build my Blueprint' : 'Continue'}
        </button>
      </View>
    </View>
  );
};
