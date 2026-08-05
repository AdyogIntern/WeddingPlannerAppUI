import React from 'react';
import { colors, typography, borderRadius } from '../theme';
import { Check } from 'lucide-react';

// React Native View Primitive
export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const View: React.FC<ViewProps> = ({ style, children, className = '', ...props }) => {
  return (
    <div 
      className={`flex flex-col box-border ${className}`} 
      style={style} 
      {...props}
    >
      {children}
    </div>
  );
};

// React Native Text Primitive
export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  style?: React.CSSProperties;
  variant?: 'serifTitle' | 'serifHeading' | 'body' | 'caption' | 'label' | 'bullet';
  color?: string;
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ 
  style, 
  variant = 'body', 
  color, 
  children, 
  className = '',
  ...props 
}) => {
  let defaultStyle: React.CSSProperties = {
    fontFamily: typography.fontSans,
  };

  if (variant === 'serifTitle') {
    defaultStyle = {
      fontFamily: typography.fontSerif,
      fontSize: '28px',
      lineHeight: '1.15',
      fontWeight: '500',
      letterSpacing: '-0.02em',
    };
  } else if (variant === 'serifHeading') {
    defaultStyle = {
      fontFamily: typography.fontSerif,
      fontSize: '22px',
      lineHeight: '1.2',
      fontWeight: '500',
    };
  } else if (variant === 'caption') {
    defaultStyle = {
      fontFamily: typography.fontSans,
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontWeight: '600',
    };
  } else if (variant === 'label') {
    defaultStyle = {
      fontFamily: typography.fontSans,
      fontSize: '14px',
      fontWeight: '500',
    };
  }

  return (
    <span 
      className={className} 
      style={{ ...defaultStyle, color, ...style }} 
      {...props}
    >
      {children}
    </span>
  );
};

// React Native TouchableOpacity Primitive
export interface TouchableOpacityProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activeOpacity?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onPress?: () => void;
}

export const TouchableOpacity: React.FC<TouchableOpacityProps> = ({ 
  style, 
  children, 
  onPress, 
  onClick,
  className = '',
  ...props 
}) => {
  return (
    <button 
      onClick={onPress || onClick}
      className={`cursor-pointer transition-all active:scale-[0.98] outline-none border-none text-left ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

// React Native Reusable Card Button / Option Card Component
export interface OptionCardProps {
  title: string;
  subtitle?: string;
  selected?: boolean;
  onPress: () => void;
  showCheckbox?: boolean;
  style?: React.CSSProperties;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  title,
  subtitle,
  selected = false,
  onPress,
  showCheckbox = false,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: selected ? '#FAF3E8' : colors.cardBackgroundLight,
        borderRadius: '12px',
        padding: subtitle ? '10px 14px' : '11px 14px',
        marginBottom: '8px',
        border: selected 
          ? `1.5px solid ${colors.cardSelectedBorder}` 
          : `1px solid ${colors.cardBackgroundBorder}`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '88%',
        maxWidth: '340px',
        margin: '0 auto 8px auto',
        boxSizing: 'border-box',
        boxShadow: selected ? '0 2px 6px rgba(112, 35, 52, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)',
        transition: 'all 0.15s ease',
        ...style,
      }}
    >
      <View style={{ flex: 1, paddingRight: '10px' }}>
        <Text 
          style={{ 
            fontSize: '12.5px', 
            fontWeight: selected ? '600' : '500',
            color: selected ? '#671B2B' : colors.textDarkHeading,
            lineHeight: '1.3'
          }}
        >
          {title}
        </Text>
        {subtitle && (
          <Text 
            style={{ 
              fontSize: '10px', 
              color: selected ? '#702334' : colors.textMuted,
              marginTop: '2px',
              fontWeight: '400',
              lineHeight: '1.25'
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>

      {/* Checkbox or Radio Indicator */}
      {showCheckbox ? (
        <View 
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '5px',
            border: selected ? `1px solid ${colors.burgundyPrimary}` : `1px solid #D0C5B8`,
            backgroundColor: selected ? colors.burgundyPrimary : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            shrink: 0,
          }}
        >
          {selected && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
        </View>
      ) : selected ? (
        <View 
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            backgroundColor: colors.burgundyPrimary,
            alignItems: 'center',
            justifyContent: 'center',
            shrink: 0,
          }}
        >
          <Check size={12} color="#FFFFFF" strokeWidth={3} />
        </View>
      ) : (
        <View 
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            border: '1.5px solid #D0C5B8',
            backgroundColor: 'transparent',
            shrink: 0,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

// React Native Reusable Primary Button
export interface RNButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'white';
  style?: React.CSSProperties;
}

export const RNButton: React.FC<RNButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  style,
}) => {
  const isWhite = variant === 'white';
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: isWhite ? '#FAF5EE' : colors.burgundyButton,
        borderRadius: '16px',
        paddingVertical: '13.5px',
        paddingHorizontal: '18px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '82%',
        maxWidth: '260px',
        margin: '0 auto',
        display: 'flex',
        boxSizing: 'border-box',
        boxShadow: isWhite ? '0 2px 10px rgba(0,0,0,0.12)' : '0 2px 8px rgba(110, 31, 48, 0.22)',
        ...style,
      }}
    >
      <Text
        style={{
          color: isWhite ? '#671B2B' : colors.textWhite,
          fontSize: '15px',
          fontWeight: '600',
          letterSpacing: '-0.01em',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// React Native Progress Bar Primitive
export const RNProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <View 
      style={{ 
        height: '2px', 
        width: '100%', 
        backgroundColor: colors.progressTrack, 
        borderRadius: '1px',
        marginVertical: '12px',
        overflow: 'hidden' 
      }}
    >
      <View 
        style={{ 
          height: '100%', 
          width: `${Math.min(100, Math.max(0, progress))}%`, 
          backgroundColor: colors.progressBar,
          transition: 'width 0.3s ease' 
        }} 
      />
    </View>
  );
};
