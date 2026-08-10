import React, { useState } from 'react';
import { X, AlertTriangle, Camera, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../reusable/Buttons';

interface RaiseDisputeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitDispute: (reason: string, photoCount: number) => void;
  vendorName: string;
  amountINR: string;
}

export const RaiseDisputeModal: React.FC<RaiseDisputeModalProps> = ({
  isOpen,
  onClose,
  onSubmitDispute,
  vendorName,
  amountINR
}) => {
  const [reason, setReason] = useState('Mandap flowers did not match approved reference photos');
  const [photoCount, setPhotoCount] = useState(3);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitDispute(reason, photoCount);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-0 sm:p-4 animate-fade-in">
      <div className="bg-[#FAF7F2] w-full max-w-md rounded-t-3xl sm:rounded-3xl border border-[#E8E2D9] p-5 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-[#EBE5DC]">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#B38600]">
              <ShieldAlert className="w-3.5 h-3.5" /> Escrow Dispute Protection
            </div>
            <h3 className="font-serif-title text-[22px] text-[#1A1613] mt-0.5">
              Raise an Issue
            </h3>
            <p className="text-[12px] text-[#7A716A]">
              {vendorName} · {amountINR}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8C827A] hover:text-[#1A1613] hover:bg-[#EBE5DC]/50 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4">
          <div className="p-3.5 bg-[#FFFDF7] border border-[#E3D1A6] rounded-2xl text-[12px] text-[#7A5B00] leading-relaxed">
            <span className="font-semibold block mb-0.5">Money stays locked in Escrow</span>
            When you raise an issue, funds are automatically frozen. Our dedicated NRI relationship manager will step in within 24 hours.
          </div>

          <div>
            <label className="text-[12px] font-semibold text-[#4A423B] block mb-1.5">
              Describe what did not match contract
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              className="w-full bg-white border border-[#EBE5DC] rounded-xl p-3 text-[13px] text-[#1A1613] focus:outline-none focus:border-[#7A1C31]"
            />
          </div>

          <div>
            <label className="text-[12px] font-semibold text-[#4A423B] block mb-1.5">
              Upload Photos / Evidence
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPhotoCount((c) => c + 1)}
                className="px-4 py-3 bg-white border border-dashed border-[#D5CBC0] rounded-xl text-[12px] text-[#625952] hover:bg-[#FAF7F2] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Camera className="w-4 h-4 text-[#7A1C31]" /> Add photo
              </button>
              <span className="text-[12px] font-medium text-[#2A7E3B] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> {photoCount} photos attached
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Freezing Funds...' : 'Freeze Funds & Submit'}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
