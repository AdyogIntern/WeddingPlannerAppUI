import React from 'react';
import { useApp } from '../context/AppContext';
import { CalloutBox, PrimaryButton, RatingBar, SerifTitle, TextMuted } from '../components/SharedUI';

export const Reviews: React.FC = () => {
  const { navigate, showToast } = useApp();

  const handleRequestReference = (couple: string) => {
    showToast(`Reference call request sent for ${couple}!`);
  };

  return (
    <div className="flex flex-col w-full pb-6 font-sans">
      <div>
        {/* Title Block matching 7.png */}
        <div className="mb-3 pt-3">
          <SerifTitle>Sri Amirtham Catering</SerifTitle>
          <TextMuted>4.8 from 62 weddings · 31 with NRI families</TextMuted>
        </div>

        {/* Divider Line under Header */}
        <div className="border-b border-[#E0D7C6] mb-4"></div>

        {/* Rating Breakdown Card */}
        <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl mb-3 shadow-2xs">
          <div className="space-y-2">
            <RatingBar label="Food" score={4.9} />
            <RatingBar label="On time" score={4.7} />
            <RatingBar label="Handled changes" score={4.6} />
            <RatingBar label="Value" score={4.8} />
          </div>
          <div className="mt-3 pt-2 border-t border-[#EAE1D2] text-[11.5px] text-[#786E65]">
            Only families who booked here can review.
          </div>
        </div>

        {/* Review Cards List */}
        <div className="space-y-3 mb-3">
          {/* Review 1 */}
          <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl shadow-2xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-[#D5C7B3] shrink-0" />
              <div>
                <h4 className="text-[14px] font-bold text-[#2B2523]">
                  Lakshmi & Shyam · Boston
                </h4>
                <p className="text-[11.5px] text-[#786E65]">420 guests · November 2025</p>
              </div>
            </div>

            <p className="text-[12.5px] text-[#2B2523] leading-relaxed mb-2.5">
              "Our parents were in Chennai, we were in Boston. The tasting was over video call. Nothing went wrong on the day."
            </p>

            <button
              onClick={() => handleRequestReference('Lakshmi & Shyam')}
              className="text-[12px] text-[#7A2234] font-medium hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              Ask for a reference call →
            </button>
          </div>

          {/* Review 2 */}
          <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DCCE] rounded-2xl shadow-2xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-[#C2B29A] shrink-0" />
              <div>
                <h4 className="text-[14px] font-bold text-[#2B2523]">
                  Revathi & Sundar · Chennai
                </h4>
                <p className="text-[11.5px] text-[#786E65]">280 guests · June 2026</p>
              </div>
            </div>

            <p className="text-[12.5px] text-[#2B2523] leading-relaxed">
              "Excellent food. The second sitting ran twenty minutes late — worth planning for if your muhurtham is tight."
            </p>
          </div>
        </div>

        {/* Callout Box */}
        <CalloutBox className="my-4">
          Critical reviews stay up. A page of five-star reviews is the fastest way to lose a sceptical NRI family.
        </CalloutBox>
      </div>

      {/* Bottom Action */}
      <div className="mt-4">
        <PrimaryButton onClick={() => navigate('VendorSwap')}>
          Add to Muhurtham
        </PrimaryButton>
      </div>
    </div>
  );
};


