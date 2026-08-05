import React from 'react';
import { 
  Building2, 
  Utensils, 
  Camera, 
  Sparkles, 
  Flame, 
  Users, 
  Mail, 
  Music,
  CheckCircle2,
  ChevronRight,
  Circle
} from 'lucide-react';
import { ProgressCategory } from '../../types/act5';
import { ProgressBar } from './ProgressBar';

interface ProgressCategoryCardProps {
  category: ProgressCategory;
  onPress?: () => void;
  onToggleDecision?: (decisionId: string) => void;
  isExpanded?: boolean;
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Building2': return <Building2 className="w-5 h-5 text-[#681D2A]" />;
    case 'Utensils': return <Utensils className="w-5 h-5 text-[#681D2A]" />;
    case 'Camera': return <Camera className="w-5 h-5 text-[#681D2A]" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#681D2A]" />;
    case 'Flame': return <Flame className="w-5 h-5 text-[#681D2A]" />;
    case 'Users': return <Users className="w-5 h-5 text-[#681D2A]" />;
    case 'Mail': return <Mail className="w-5 h-5 text-[#681D2A]" />;
    case 'Music': return <Music className="w-5 h-5 text-[#681D2A]" />;
    default: return <Building2 className="w-5 h-5 text-[#681D2A]" />;
  }
};

export const ProgressCategoryCard: React.FC<ProgressCategoryCardProps> = ({
  category,
  onPress,
  onToggleDecision,
  isExpanded = false
}) => {
  return (
    <div className="bg-white rounded-xl border border-[#E6DFC8] p-4 shadow-2xs transition-all hover:border-[#681D2A]/30">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={onPress}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#F8ECEE] flex items-center justify-center shrink-0">
            {getCategoryIcon(category.iconName)}
          </div>
          <div>
            <h4 className="text-base font-semibold text-[#231F20]">{category.name}</h4>
            <p className="text-xs text-[#68625D]">
              {category.completedDecisions} of {category.totalDecisions} decisions completed
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold font-serif text-[#681D2A]">
            {category.percentage}%
          </span>
          {onPress && (
            <ChevronRight className={`w-4 h-4 text-[#98928B] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          )}
        </div>
      </div>

      <div className="mt-3">
        <ProgressBar 
          percentage={category.percentage} 
          height={6} 
          color={category.percentage === 100 ? '#2D6A4F' : '#681D2A'} 
        />
      </div>

      {/* Expanded view for checking decisions inside category */}
      {isExpanded && category.decisions && (
        <div className="mt-4 pt-3 border-t border-[#EFE8D8] space-y-2">
          <p className="text-xs font-semibold text-[#68625D] uppercase tracking-wider mb-2">
            Decision Checklist
          </p>
          {category.decisions.map((dec) => (
            <div 
              key={dec.id}
              onClick={(e) => {
                e.stopPropagation();
                if (onToggleDecision) onToggleDecision(dec.id);
              }}
              className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#FAF6F0] cursor-pointer transition-colors"
            >
              <button className="mt-0.5 text-left shrink-0">
                {dec.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] fill-[#E8F3ED]" />
                ) : (
                  <Circle className="w-5 h-5 text-[#98928B]" />
                )}
              </button>
              <div className="flex-1">
                <p className={`text-sm ${dec.completed ? 'line-through text-[#68625D]' : 'text-[#231F20] font-medium'}`}>
                  {dec.title}
                </p>
                {dec.completed && dec.completedBy && (
                  <span className="text-[11px] text-[#2D6A4F] font-medium">
                    Completed by {dec.completedBy}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
