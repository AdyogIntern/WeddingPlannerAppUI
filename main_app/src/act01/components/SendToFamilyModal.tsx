import React, { useState } from 'react';
import { X, Send, CheckCircle2, UserCheck, Share2 } from 'lucide-react';

interface SendToFamilyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultRecipient?: string;
}

export const SendToFamilyModal: React.FC<SendToFamilyModalProps> = ({
  isOpen,
  onClose,
  title = 'Send Pack to Family',
  defaultRecipient = 'Appa'
}) => {
  const [recipient, setRecipient] = useState(defaultRecipient);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = () => {
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-0 sm:p-4 animate-fade-in">
      <div className="bg-[#FAF7F2] w-full max-w-md rounded-t-3xl sm:rounded-3xl border border-[#E8E2D9] p-5 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-[#EBE5DC]">
          <h3 className="font-serif-title text-[20px] text-[#1A1613]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8C827A] hover:text-[#1A1613] hover:bg-[#EBE5DC]/50 rounded-full cursor-pointer bg-transparent border-none transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {sent ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-[#F1F9F3] text-[#2A7E3B] rounded-full flex items-center justify-center mx-auto border border-[#C8E6C9]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-serif-title text-[22px] text-[#1A1613]">
              Sent to {recipient}!
            </h4>
            <p className="text-[12px] text-[#625952]">
              Shared via WhatsApp & In-App Notification. Appa can review contract, escrow receipt, and GST breakdown.
            </p>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            <p className="text-[12px] text-[#625952]">
              Select family member to send full contract & booking pack:
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {['Appa', 'Amma', 'Priya & Arjun', 'Family Group'].map((person) => (
                <button
                  key={person}
                  onClick={() => setRecipient(person)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    recipient === person
                      ? 'border-[#7A1C31] bg-[#7A1C31]/10 text-[#7A1C31] font-semibold'
                      : 'border-[#EBE5DC] bg-white text-[#1A1613] hover:border-[#D5CBC0]'
                  }`}
                >
                  <span className="text-[13px]">{person}</span>
                  {recipient === person && <UserCheck className="w-4 h-4 text-[#7A1C31]" />}
                </button>
              ))}
            </div>

            <div className="p-3 bg-white border border-[#EBE5DC] rounded-xl text-[11px] text-[#625952] space-y-1">
              <div className="font-semibold text-[#1A1613]">Pack Includes:</div>
              <div>• Signed Leela Palace Contract (6 pages)</div>
              <div>• Escrow Receipt (₹4.5L held)</div>
              <div>• GST Invoice & Tax Breakdown</div>
            </div>

            <div className="flex gap-2 pt-2">
              <button 
                onClick={onClose}
                className="w-full bg-white hover:bg-[#FAF7F2] border border-[#E5DFD5] text-[#1A1613] py-3.5 px-6 rounded-xl font-medium text-[15px] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleSend} 
                className="w-full bg-[#7A1C31] hover:bg-[#631426] text-white py-3.5 px-6 rounded-xl font-medium text-[15px] transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                <Send className="w-4 h-4" />
                <span>Send to {recipient}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
