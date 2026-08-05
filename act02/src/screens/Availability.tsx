import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, ScreenHeader, SerifTitle } from '../components/SharedUI';

export const Availability: React.FC = () => {
  const { navigate, goBack, showToast } = useApp();
  const [selectedDay, setSelectedDay] = useState<number>(14);

  // Days of February 2027
  const calendarDays = [
    { day: 31, status: 'prev' },
    { day: 1, status: 'booked' },
    { day: 2, status: 'normal' },
    { day: 3, status: 'normal' },
    { day: 4, status: 'normal' },
    { day: 5, status: 'normal' },
    { day: 6, status: 'normal' },
    { day: 7, status: 'normal' },
    { day: 8, status: 'normal' },
    { day: 9, status: 'booked' },
    { day: 10, status: 'normal' },
    { day: 11, status: 'normal' },
    { day: 12, status: 'held' },
    { day: 13, status: 'held' },
    { day: 14, status: 'normal' },
    { day: 15, status: 'normal' },
    { day: 16, status: 'booked' },
    { day: 17, status: 'booked' },
    { day: 18, status: 'normal' },
    { day: 19, status: 'normal' },
    { day: 20, status: 'normal' },
    { day: 21, status: 'normal' },
    { day: 22, status: 'normal' },
    { day: 23, status: 'normal' },
    { day: 24, status: 'normal' },
    { day: 25, status: 'booked' },
    { day: 26, status: 'normal' },
    { day: 27, status: 'normal' },
    { day: 28, status: 'normal' },
    { day: 1, status: 'next' },
    { day: 2, status: 'next' },
    { day: 3, status: 'next' },
    { day: 4, status: 'next' },
    { day: 5, status: 'next' },
    { day: 6, status: 'next' },
  ];

  const handleHoldDate = () => {
    showToast(`Free hold requested for ${selectedDay} Feb! Appa will receive a WhatsApp message.`);
    navigate('VendorSwap');
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <ScreenHeader
          backText="Venue"
          onBack={goBack}
        />

        {/* Title */}
        <div className="mb-3">
          <SerifTitle>February 2027</SerifTitle>
        </div>

        {/* Calendar Grid */}
        <div className="bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl p-3 mb-3 shadow-2xs">
          <div className="grid grid-cols-7 text-center text-[11px] font-medium text-[#786E65] mb-2">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[12.5px]">
            {calendarDays.map((item, idx) => {
              const isSelected = item.status !== 'prev' && item.status !== 'next' && item.day === selectedDay;

              let cellStyle = 'h-8 flex items-center justify-center rounded-lg text-[#2B2523] cursor-pointer hover:bg-[#EAE1D2]';
              if (isSelected) {
                cellStyle = 'h-8 flex items-center justify-center rounded-xl bg-[#7A2234] text-white font-bold shadow-xs cursor-pointer';
              } else if (item.status === 'held') {
                cellStyle = 'h-8 flex items-center justify-center rounded-lg bg-[#FEF3C7] text-amber-900 font-medium cursor-pointer';
              } else if (item.status === 'booked') {
                cellStyle = 'h-8 flex items-center justify-center rounded-lg bg-[#EAE1D2] text-[#91877E] font-normal cursor-not-allowed';
              } else if (item.status === 'prev' || item.status === 'next') {
                cellStyle = 'h-8 flex items-center justify-center text-[#B8AFA2] font-normal cursor-default';
              }

              return (
                <div
                  key={idx}
                  className={cellStyle}
                  onClick={() => {
                    if (item.status !== 'booked' && item.status !== 'prev' && item.status !== 'next') {
                      setSelectedDay(item.day);
                    }
                  }}
                >
                  {item.day}
                </div>
              );
            })}
          </div>

          {/* Calendar Legend */}
          <div className="flex items-center justify-between text-[11px] text-[#786E65] pt-3 mt-2 border-t border-[#EAE1D2]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-[#7A2234]" />
              <span>Your date</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-[#FEF3C7] border border-amber-300" />
              <span>Held by others</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-[#EAE1D2]" />
              <span>Booked</span>
            </div>
          </div>
        </div>

        {/* Selected Slot Detail Card */}
        <div className="p-3.5 bg-[#FAF7F0] border-2 border-[#7A2234] rounded-2xl mb-3 shadow-2xs">
          <h3 className="text-[14px] font-semibold text-[#2B2523] mb-1">
            Sun {selectedDay} Feb · morning muhurtham
          </h3>
          <p className="text-[12px] text-[#2B2523] leading-relaxed mb-3">
            Available. Hall + adjoining dining, 6 am to 1 pm. ₹8.4L including power backup and 200 parking slots.
          </p>

          <PrimaryButton onClick={handleHoldDate}>
            Hold free for 7 days
          </PrimaryButton>
        </div>

        {/* Callout */}
        <CalloutBox className="mb-4">
          A hold costs nothing and needs no payment. Appa will get a WhatsApp asking him to approve before it converts to a booking.
        </CalloutBox>

        {/* Fallback Alternative Dates */}
        <div>
          <h4 className="text-[13px] font-semibold text-[#2B2523] mb-2">
            If {selectedDay} Feb falls through
          </h4>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedDay(21)}
              className="w-full p-2.5 bg-[#FAF7F0] border border-[#E5DCCE] hover:border-[#7A2234] transition cursor-pointer rounded-xl flex justify-between items-center text-[12.5px]"
            >
              <span className="text-[#2B2523]">Sun 21 Feb · also a muhurtham day</span>
              <span className="text-emerald-700 font-medium">Free</span>
            </button>
            <button
              onClick={() => setSelectedDay(27)}
              className="w-full p-2.5 bg-[#FAF7F0] border border-[#E5DCCE] hover:border-[#7A2234] transition cursor-pointer rounded-xl flex justify-between items-center text-[12.5px]"
            >
              <span className="text-[#2B2523]">Sat 27 Feb</span>
              <span className="text-emerald-700 font-medium">Free</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
