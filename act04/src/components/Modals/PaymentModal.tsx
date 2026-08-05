import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock } from 'lucide-react';
import { PrimaryButton } from '../reusable/Buttons';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  vendorName: string;
  amountINR: string;
  amountUSD: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  vendorName,
  amountINR,
  amountUSD
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'nre' | 'card' | 'wire'>('nre');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);
    }, 1200);
  };

  const handleFinish = () => {
    setIsDone(false);
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-0 sm:p-4 animate-fade-in">
      <div className="bg-[#FAF7F2] w-full max-w-md rounded-t-3xl sm:rounded-3xl border border-[#E8E2D9] p-5 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EBE5DC]">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#7A1C31] tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5" /> Escrow Protected Payment
            </div>
            <h3 className="font-serif-title text-[22px] text-[#1A1613] mt-0.5">
              Pay {amountINR}
            </h3>
            <p className="text-[12px] text-[#7A716A]">
              {vendorName} advance · Held safely in escrow
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8C827A] hover:text-[#1A1613] hover:bg-[#EBE5DC]/50 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isDone ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-[#F1F9F3] text-[#2A7E3B] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#C8E6C9]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif-title text-[24px] text-[#1A1613] mb-1">
              Payment Held Safely
            </h4>
            <p className="text-[13px] text-[#625952] max-w-xs mx-auto mb-6 leading-relaxed">
              {amountINR} ({amountUSD}) is now in escrow. It will only be released to {vendorName} 48 hours after your function, upon your approval.
            </p>
            <PrimaryButton onClick={handleFinish}>View Escrow Dashboard</PrimaryButton>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            {/* Payment options */}
            <div className="space-y-2.5">
              <p className="text-[12px] font-medium text-[#625952]">Select Remittance Method</p>

              {/* Option 1: NRE Account Transfer */}
              <div
                onClick={() => setSelectedMethod('nre')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedMethod === 'nre'
                    ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                    : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-semibold text-[#1A1613]">NRE account transfer</span>
                    <span className="text-[10px] font-bold text-[#2A7E3B] bg-[#F1F9F3] px-2 py-0.5 rounded-full border border-[#C8E6C9]">
                      Cheapest
                    </span>
                  </div>
                  <span className="font-serif-title text-[15px] font-semibold text-[#1A1613]">
                    {amountUSD}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-[#7A716A]">
                  <span>Fee: ₹0</span>
                  <span>Arrives: 1 working day</span>
                </div>
              </div>

              {/* Option 2: International Card */}
              <div
                onClick={() => setSelectedMethod('card')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedMethod === 'card'
                    ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                    : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-semibold text-[#1A1613]">International card</span>
                  <span className="font-serif-title text-[15px] font-semibold text-[#1A1613]">
                    ${(parseFloat(amountUSD.replace(/[^0-9.]/g, '')) * 1.024).toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-[#7A716A]">
                  <span>2.4% fee · Instant</span>
                  <span>Visa / Mastercard / Amex</span>
                </div>
              </div>

              {/* Option 3: US Bank Wire */}
              <div
                onClick={() => setSelectedMethod('wire')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedMethod === 'wire'
                    ? 'border-[#7A1C31] bg-[#7A1C31]/5 shadow-2xs'
                    : 'border-[#EBE5DC] bg-white hover:border-[#D5CBC0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-semibold text-[#1A1613]">Wire from US bank</span>
                  <span className="font-serif-title text-[15px] font-semibold text-[#1A1613]">
                    ${(parseFloat(amountUSD.replace(/[^0-9.]/g, '')) + 45).toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-[#7A716A]">
                  <span>$45 flat fee</span>
                  <span>Arrives: 3–4 days</span>
                </div>
              </div>
            </div>

            {/* Exchange rate note */}
            <div className="p-3 bg-white border border-[#EBE5DC] rounded-xl text-[12px]">
              <div className="flex items-center justify-between font-medium text-[#4A423B]">
                <span>USD → INR rate locked:</span>
                <span className="font-bold text-[#1A1613]">₹84.02</span>
              </div>
              <p className="text-[11px] text-[#2A7E3B] mt-0.5">
                Zero FX margin added on NRE transfers today.
              </p>
            </div>

            {/* Trust note */}
            <div className="p-3 bg-[#F4EFEA] rounded-xl text-[11px] text-[#625952] flex items-start gap-2">
              <Lock className="w-4 h-4 text-[#7A1C31] shrink-0 mt-0.5" />
              <span>
                The money goes into escrow, not directly to the vendor. Released 48 hours after the event upon family approval.
              </span>
            </div>

            {/* CTA */}
            <PrimaryButton onClick={handlePay} disabled={isProcessing}>
              {isProcessing ? 'Securing Escrow Deposit...' : `Send ${amountUSD} into Escrow`}
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};
