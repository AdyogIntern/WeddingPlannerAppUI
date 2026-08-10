import React from 'react';
import { X, Download, FileText, Share2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../reusable/Buttons';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload?: () => void;
  title: string;
  details: string;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  isOpen,
  onClose,
  onDownload,
  title,
  details
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-0 sm:p-4 animate-fade-in">
      <div className="bg-[#FAF7F2] w-full max-w-md rounded-t-3xl sm:rounded-3xl border border-[#E8E2D9] p-5 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EBE5DC]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#7A1C31]/10 text-[#7A1C31] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-title text-[18px] text-[#1A1613]">
                {title}
              </h3>
              <p className="text-[11px] text-[#7A716A]">{details}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8C827A] hover:text-[#1A1613] hover:bg-[#EBE5DC]/50 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mock Document Preview Content */}
        <div className="py-4">
          <div className="bg-white border border-[#EBE5DC] rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#F4EFEA] pb-3">
              <div>
                <span className="font-serif-title text-[16px] font-bold text-[#7A1C31]">VIVAHA NRI SUITE</span>
                <p className="text-[10px] text-[#8C827A]">Verified Digital Record · FEMA Compliant</p>
              </div>
              <ShieldCheck className="w-5 h-5 text-[#2A7E3B]" />
            </div>

            <div className="space-y-2 text-[12px]">
              <div className="flex justify-between">
                <span className="text-[#7A716A]">Document Ref:</span>
                <span className="font-medium text-[#1A1613]">VIV-2027-8841</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A716A]">Issue Date:</span>
                <span className="font-medium text-[#1A1613]">14 Sep 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A716A]">Party:</span>
                <span className="font-medium text-[#1A1613]">Sri Amirtham / Leela Palace</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A716A]">Status:</span>
                <span className="text-[#2A7E3B] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified & Countersigned
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-xl text-[11px] text-[#625952] leading-relaxed">
              This document is digitally signed and countersigned by Vivaha Escrow Services. It serves as tax-ready proof for NRI foreign remittances and GST compliance.
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <SecondaryButton onClick={onClose} icon={<Share2 className="w-4 h-4" />}>
            Share Link
          </SecondaryButton>
          <PrimaryButton onClick={onDownload ?? onClose} icon={<Download className="w-4 h-4" />}>
            Download PDF
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
