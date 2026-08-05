// Design System Token definitions for Wedding Blueprint Platform

export const theme = {
  colors: {
    // Standard prompt tokens
    primary: '#8B1538', // Brand Deep Burgundy / Maroon
    primaryDark: '#671B2B',
    primaryLight: '#A32247',
    primarySoft: '#FAF0F2',
    gold: '#C9A227',
    goldLight: '#F5E9C8',
    background: '#FAF8F5',
    surface: '#FFFFFF',
    darkText: '#1D1D1F',
    secondaryText: '#666666',
    border: '#ECECEC',
    borderLight: '#F2EFEA',
    success: '#2E7D32',
    successBg: '#E8F5E9',
    warning: '#F5A623',
    warningBg: '#FFF8E1',
    error: '#C62828',
    errorBg: '#FFEBEE',
    
    // Status colors for vendor slots
    statusBooked: '#2E7D32',
    statusBookedBg: '#E8F5E9',
    statusHold: '#D97706',
    statusHoldBg: '#FEF3C7',
    statusVoting: '#2563EB',
    statusVotingBg: '#DBEAFE',
    statusOpen: '#666666',
    statusOpenBg: '#F3F4F6',

    // Legacy color aliases for existing screen primitives
    burgundyDark: '#671B2B',
    burgundyPrimary: '#8B1538',
    burgundyLight: '#A32247',
    burgundyButton: '#8B1538',
    burgundyText: '#8B1538',

    welcomeBackground: '#671B2B',
    questionBackground: '#FAF8F5',
    cardBackgroundLight: '#FFFFFF',
    cardBackgroundBorder: '#EFE7DC',
    cardSelectedBorder: '#8B1538',
    cardSelectedBg: '#FAF3EB',
    infoBoxBg: '#F3EDDF',
    
    textDarkHeading: '#1D1D1F',
    textDarkBody: '#4A4244',
    textMuted: '#666666',
    textWhite: '#FFFFFF',
    textWhiteSecondary: '#E8D2D8',
    textGold: '#C9A227',

    borderDark: 'rgba(255, 255, 255, 0.2)',
    accentCheck: '#8B1538',
    progressBar: '#1D1D1F',
    progressTrack: '#E0D8CC',

    // Specific PDF colors
    pdfHeaderDark: '#671B2B',
    pdfBannerBg: '#FAF7F2',
  },

  typography: {
    fontSerif: "'Newsreader', 'Playfair Display', Georgia, serif",
    fontSans: "'Plus Jakarta Sans', system-ui, sans-serif",
    
    display: {
      fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
      fontSize: '28px',
      lineHeight: '1.2',
      fontWeight: '700',
    },
    heading: {
      fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
      fontSize: '22px',
      lineHeight: '1.25',
      fontWeight: '600',
    },
    subheading: {
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      fontSize: '15px',
      lineHeight: '1.4',
      fontWeight: '600',
    },
    body: {
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      fontSize: '14px',
      lineHeight: '1.5',
      fontWeight: '400',
    },
    caption: {
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      fontSize: '12px',
      lineHeight: '1.4',
      fontWeight: '500',
    },

    sizes: {
      xs: 11,
      sm: 13,
      base: 15,
      lg: 17,
      xl: 20,
      '2xl': 26,
      '3xl': 32,
    },
    
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    }
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },

  radius: 16,

  shadows: {
    soft: '0 2px 8px rgba(0, 0, 0, 0.04)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.08)',
    elevated: '0 8px 24px rgba(139, 21, 56, 0.12)',
  }
};

export const colors = theme.colors;
export const typography = theme.typography;
export const spacing = theme.spacing;
export const borderRadius = {
  sm: 8,
  md: 12,
  lg: theme.radius,
  xl: 24,
  full: 9999,
};
