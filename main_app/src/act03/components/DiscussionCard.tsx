import React from 'react';
import { Trash2 } from 'lucide-react';
import { Avatar } from './Avatar';

export interface CommentMessage {
  id: string;
  author: string;
  initials: string;
  timestamp: string;
  text: string;
  isVendor?: boolean;
  isTinted?: boolean;
}

interface DiscussionCardProps {
  comment: CommentMessage;
  onDelete?: () => void;
}

export const DiscussionCard: React.FC<DiscussionCardProps> = ({ comment, onDelete }) => {
  return (
    <div className="flex gap-2.5 items-start">
      <Avatar initials={comment.initials} size="sm" className="mt-1" />

      <div
        className={`rounded-2xl p-3 flex-1 shadow-2xs ${
          comment.isVendor
            ? 'bg-[#FFFDF7] border-2 border-dashed border-[#C68A27]'
            : comment.isTinted
            ? 'bg-[#FDF1F1] border border-[#F2D6D6]'
            : 'bg-white border border-[#E5E1D8]'
        }`}
      >
        <div className="flex items-center justify-between text-[12px]">
          <div>
            <span className="font-bold text-[#2C2420]">{comment.author}</span>
            <span className="text-[11px] text-[#867A6E] ml-1.5 font-normal">
              {comment.isVendor ? '· vendor' : `· ${comment.timestamp}`}
            </span>
          </div>
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-[#867A6E] hover:text-[#C02626] transition-colors p-0.5 rounded-md hover:bg-black/5 cursor-pointer"
              aria-label="Delete comment"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <p className="text-[13px] text-[#2C2420] mt-1 leading-snug">
          {comment.text}
        </p>
      </div>
    </div>
  );
};
