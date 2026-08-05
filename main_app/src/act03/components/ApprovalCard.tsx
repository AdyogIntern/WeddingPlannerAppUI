import React from 'react';

interface ApprovalCardProps {
  onApprove?: () => void;
  onDiscuss?: () => void;
  onClick?: () => void;
}

export const ApprovalCard: React.FC<ApprovalCardProps> = ({
  onApprove,
  onDiscuss,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-4 border-2 border-[#7B1D21] shadow-2xs cursor-pointer hover:shadow-xs transition-shadow"
    >
      <div className="text-[10px] font-bold tracking-widest text-[#7B1D21] uppercase mb-1">
        NEEDS APPA'S APPROVAL
      </div>
      <h3 className="font-serif text-[19px] text-[#2C2420] font-normal leading-snug">
        Muhurtham venue — ₹8.4L
      </h3>
      <p className="text-[12px] text-[#867A6E] leading-relaxed mt-1.5 mb-3.5">
        Over the ₹6L category cap you set. Priya requested a quote hold until Friday.
      </p>
      <div className="flex gap-2.5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onApprove) onApprove();
            else if (onClick) onClick();
          }}
          className="flex-1 bg-[#7B1D21] hover:bg-[#65171a] text-white py-2 px-4 rounded-xl text-[13px] font-semibold transition-colors"
        >
          Approve
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onDiscuss) onDiscuss();
            else if (onClick) onClick();
          }}
          className="flex-1 border border-[#E5E1D8] bg-white hover:bg-[#FDFCF0] text-[#2C2420] py-2 px-4 rounded-xl text-[13px] font-semibold transition-colors"
        >
          Discuss
        </button>
      </div>
    </div>
  );
};
