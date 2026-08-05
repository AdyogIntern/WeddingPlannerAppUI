import React from 'react';
import { AlertCircle, CheckCircle2, Clock, Calendar } from 'lucide-react';

export const TripPlannerScreen: React.FC = () => {
  return (
    <div className="min-h-full bg-[#FAF7F2] text-[#1F1A17] flex flex-col pb-8">
      {/* Dark Header Banner */}
      <div className="bg-[#1E1815] text-white p-5 pt-6">
        <h1 className="font-serif-title text-[28px] leading-tight font-medium text-white tracking-tight">
          You land 02 Feb.
          <br />
          Twelve days.
        </h1>
        <p className="text-[12.5px] leading-relaxed text-[#C2B8AA] mt-2 font-normal">
          Ten of them are working days. Here's the only version of this that works.
        </p>
      </div>

      <div className="p-5 space-y-4 flex-1">
        {/* Section: Must be locked before you board */}
        <div className="space-y-2">
          <h3 className="text-[15px] font-bold text-[#1F1A17]">
            Must be locked before you board
          </h3>

          <div className="space-y-2 text-[12.5px]">
            {/* Lock Item 1 */}
            <div className="bg-white rounded-xl p-3 border border-[#E8E0D5] flex items-center gap-2.5">
              <span className="text-[#2E7D32] font-bold text-[14px]">✓</span>
              <span className="text-[#3D352E] font-medium">
                Venue, catering, purohit, photography
              </span>
            </div>

            {/* Lock Item 2 */}
            <div className="bg-white rounded-xl p-3 border border-[#FAD4D4] bg-[#FFF8F8] flex items-center gap-2.5">
              <span className="text-[#C62828] font-bold text-[14px]">!</span>
              <span className="text-[#3D352E] font-medium">
                Bridal outfit ordered — 10-week lead time
              </span>
            </div>

            {/* Lock Item 3 */}
            <div className="bg-white rounded-xl p-3 border border-[#FAD4D4] bg-[#FFF8F8] flex items-center gap-2.5">
              <span className="text-[#C62828] font-bold text-[14px]">!</span>
              <span className="text-[#3D352E] font-medium">
                Print invites — needs 3 weeks
              </span>
            </div>
          </div>
        </div>

        {/* Section: On the ground */}
        <div className="space-y-2.5 pt-1">
          <h3 className="text-[15px] font-bold text-[#1F1A17]">
            On the ground
          </h3>

          <div className="space-y-2 text-[12.5px]">
            {/* Day 02-03 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <span className="font-mono-tag font-bold text-[#1F1A17] w-10 shrink-0 pt-0.5">
                02–03
              </span>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  Land, rest, jet lag. Nothing scheduled.
                </h4>
                <p className="text-[11.5px] text-[#756D65] mt-0.5">
                  We've deliberately left this empty.
                </p>
              </div>
            </div>

            {/* Day 04 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <span className="font-mono-tag font-bold text-[#1F1A17] w-10 shrink-0 pt-0.5">
                04
              </span>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  Venue walkthrough with Appa and decor team
                </h4>
              </div>
            </div>

            {/* Day 05 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <span className="font-mono-tag font-bold text-[#1F1A17] w-10 shrink-0 pt-0.5">
                05
              </span>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  Catering tasting · balance payment scheduled
                </h4>
              </div>
            </div>

            {/* Day 06-07 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <span className="font-mono-tag font-bold text-[#1F1A17] w-10 shrink-0 pt-0.5">
                06–07
              </span>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  Outfit fittings, jewellery collection
                </h4>
                <p className="text-[11.5px] text-[#756D65] mt-0.5">
                  Two slots — silk always needs altering
                </p>
              </div>
            </div>

            {/* Day 08 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <span className="font-mono-tag font-bold text-[#1F1A17] w-10 shrink-0 pt-0.5">
                08
              </span>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  Buffer day. Something will slip.
                </h4>
              </div>
            </div>

            {/* Day 09-10 */}
            <div className="bg-white rounded-xl p-3.5 border border-[#E8E0D5] flex items-start gap-3">
              <span className="font-mono-tag font-bold text-[#1F1A17] w-10 shrink-0 pt-0.5">
                09–10
              </span>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  Guests arrive · pickups · welcome kits out
                </h4>
              </div>
            </div>

            {/* Day 12-14 (The Wedding - Active Maroon) */}
            <div className="bg-white rounded-xl p-3.5 border-2 border-[#7A2232] flex items-start gap-3 shadow-xs">
              <span className="font-mono-tag font-bold text-[#7A2232] w-10 shrink-0 pt-0.5">
                12–14
              </span>
              <div>
                <h4 className="font-bold text-[#1F1A17]">
                  The wedding.
                </h4>
                <p className="text-[11.5px] text-[#756D65] mt-0.5">
                  Your coordinator takes over from here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
