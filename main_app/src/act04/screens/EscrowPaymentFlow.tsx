import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PaymentScheduleItem } from '../types';

interface Screen31Props {
  paymentItem: PaymentScheduleItem;
  currency: 'INR' | 'USD';
  onPaymentSuccess: () => void;
  onBack: () => void;
}

export const Screen31_EscrowPaymentFlow: React.FC<Screen31Props> = ({
  paymentItem,
  currency,
  onPaymentSuccess,
  onBack
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'nre' | 'card' | 'wire'>('nre');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const rate = 84.02;

  // Calculate amounts dynamically
  const amountINR = paymentItem.amountINR;
  const amountUSD = Math.round(amountINR / rate);

  const nreUSD = amountUSD;
  const cardUSD = Math.round(nreUSD * 1.024);
  const wireUSD = nreUSD + 45;

  const getActiveSendAmount = () => {
    if (selectedMethod === 'nre') return nreUSD;
    if (selectedMethod === 'card') return cardUSD;
    return wireUSD;
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);
    }, 1200);
  };

  const handleFinish = () => {
    setIsDone(false);
    onPaymentSuccess();
  };

  const formatCurrencyINR = (val: number) => {
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-12 flex flex-col justify-between animate-fade-in px-4">
      {isDone ? (
        <div className="flex-1 flex flex-col items-center justify-center py-8 text-center space-y-6">
          <div className="w-20 h-20 bg-[#F1F9F3] text-[#2A7E3B] rounded-full flex items-center justify-center mx-auto border border-[#C8E6C9] shadow-sm animate-scale-in">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif-title text-[26px] text-[#1A1613] font-bold">
              Payment Held Safely
            </h4>
            <p className="text-[14px] text-[#625952] max-w-xs mx-auto leading-relaxed">
              {formatCurrencyINR(amountINR)} (${getActiveSendAmount().toLocaleString()}) is now in escrow. It will only be released to {paymentItem.vendor} 48 hours after your function, upon your approval.
            </p>
          </div>
          <button
            onClick={handleFinish}
            className="w-full max-w-xs bg-[#7A1C31] text-white font-medium py-3.5 px-6 rounded-xl text-[14px] hover:bg-[#621627] active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            View Escrow Dashboard
          </button>
        </div>
      ) : (
        <>
          <div>
            {/* Header Row */}
            <div className="flex items-center justify-between pt-3 pb-3 text-[13px] text-[#7A716A] leading-none">
              <span className="text-[#8C827A] font-semibold text-[13px]">9:41</span>
              <button
                onClick={onBack}
                className="flex items-center gap-1 text-[#7A716A] hover:text-[#1A1613] transition-colors cursor-pointer -mr-1 py-0.5 px-2 rounded-md active:scale-95 text-[14px] font-medium"
              >
                ← Back
              </button>
            </div>

            {/* Title / Meta */}
            <div className="mt-2 mb-5">
              <h1 className="font-serif-title text-[32px] leading-none text-[#1A1613] font-normal tracking-tight">
                Pay {formatCurrencyINR(amountINR)}
              </h1>
              <p className="text-[13px] text-[#7A716A] mt-1.5 font-normal">
                {paymentItem.title} · due {paymentItem.dueDate}
              </p>
            </div>

            {/* Remittance options */}
            <div className="space-y-3">
              {/* Option 1: NRE Account Transfer */}
              <div
                onClick={() => setSelectedMethod('nre')}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  selectedMethod === 'nre'
                    ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                    : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[14px] font-semibold text-[#1A1613]">NRE account transfer</span>
                  <span className="text-[10px] font-bold text-[#2E7D32] bg-[#F1F9F3] px-2 py-0.5 rounded-full border border-[#C8E6C9]">
                    Cheapest
                  </span>
                </div>
                <div className="space-y-1 text-[12px] text-[#625952]">
                  <div className="flex justify-between">
                    <span className="text-[#7A716A]">You send</span>
                    <span className="font-semibold text-[#1A1613]">${nreUSD.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A716A]">Fee</span>
                    <span className="font-semibold text-[#1A1613]">₹0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A716A]">Arrives</span>
                    <span className="font-semibold text-[#1A1613]">1 working day</span>
                  </div>
                </div>
              </div>

              {/* Option 2: International Card */}
              <div
                onClick={() => setSelectedMethod('card')}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  selectedMethod === 'card'
                    ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                    : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-semibold text-[#1A1613]">International card</span>
                  <span className="font-semibold text-[14px] text-[#1A1613]">${cardUSD.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#7A716A]">
                  <span>You send</span>
                  <span>2.4% fee · instant</span>
                </div>
              </div>

              {/* Option 3: US Bank Wire */}
              <div
                onClick={() => setSelectedMethod('wire')}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  selectedMethod === 'wire'
                    ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                    : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-semibold text-[#1A1613]">Wire from a US bank</span>
                  <span className="font-semibold text-[14px] text-[#1A1613]">${wireUSD.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#7A716A]">
                  <span>You send</span>
                  <span>$45 flat · 3–4 days</span>
                </div>
              </div>

              {/* Rate locked box */}
              <div className="p-4 bg-white border border-[#EBE5DC] rounded-2xl text-[12px] space-y-1">
                <div className="text-[10px] font-bold text-[#8C827A] tracking-wider uppercase">
                  RATE
                </div>
                <div className="flex items-center justify-between font-medium text-[#4A423B]">
                  <span>USD → INR, locked for 30 min</span>
                  <span className="font-bold text-[#1A1613]">₹84.02</span>
                </div>
                <p className="text-[11px] text-[#2E7D32] mt-0.5">
                  We show the mid-market rate and what we add. Today we add nothing on NRE transfers.
                </p>
              </div>

              {/* Escrow trust box */}
              <div className="p-4 bg-[#F8EFF1] rounded-2xl text-[12px] text-[#625952] leading-relaxed">
                The money goes into escrow, not to the venue. It is released 48 hours after the muhurtham, once you or Appa confirm.
              </div>
            </div>
          </div>

          {/* Sticky Bottom CTA Button */}
          <div className="mt-6">
            <button
              onClick={handlePay}
              disabled={isProcessing}
              className="w-full bg-[#7A1C31] text-white font-medium py-3.5 rounded-xl text-[14px] hover:bg-[#621627] active:scale-[0.99] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              {isProcessing ? 'Securing Escrow Deposit...' : `Send $${getActiveSendAmount().toLocaleString()}`}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
