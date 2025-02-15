import { createTheme, responsiveFontSizes } from '@mui/material';

// ============= CUSTOMIZE YOUR COLOR PALETTE HERE =============
const colorPalette = {
  // Primary color and its variations
  primary: {
    main: '#00FFA3',      // Teal accent color
    light: '#33ffb5',    // Lighter version
    dark: '#00cc82',      // Darker version
  },
  // Secondary/Accent color
  secondary: {
    main: '#1A1A1A',      // Dark background
    light: '#2A2A2A',     // Lighter version
    dark: '#0A0A0A',      // Darker version
  },
  // Status colors
  status: {
    error: 'rgb(244, 67, 54)',      // #f44336
    warning: 'rgb(255, 152, 0)',    // #ff9800
    info: 'rgb(3, 169, 244)',       // #03a9f4
    success: 'rgb(76, 175, 80)',    // #4caf50
  }
};

// Theme configuration
export const createAppTheme = (isDarkMode: boolean) => {
  // Create base theme
  let theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: colorPalette.primary,
      secondary: colorPalette.secondary,
      background: {
        default: isDarkMode ? '#0A0A0A' : '#F0F7FF',
        paper: isDarkMode ? '#1A1A1A' : '#FFFFFF',
      },
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#1A1A1A',
        secondary: isDarkMode ? '#AAAAAA' : '#2A4365',
      },
      error: { main: colorPalette.status.error },
      warning: { main: colorPalette.status.warning },
      info: { main: colorPalette.status.info },
      success: { main: colorPalette.status.success },
      divider: isDarkMode ? 'rgba(230, 241, 255, 0.12)' : 'rgba(42, 67, 101, 0.08)'
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        color: isDarkMode ? '#FFFFFF' : '#1A1A1A',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.3,
        color: isDarkMode ? '#FFFFFF' : '#1A1A1A',
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: isDarkMode ? '#FFFFFF' : '#1A1A1A',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        color: isDarkMode ? '#AAAAAA' : '#2A4365',
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '10px 24px',
          },
          contained: {
            background: isDarkMode 
              ? '#00FFA3'
              : 'linear-gradient(135deg, #00805E 0%, #00FFA3 100%)',
            color: isDarkMode ? '#0A0A0A' : '#FFFFFF',
            '&:hover': {
              background: isDarkMode 
                ? '#00cc82'
                : 'linear-gradient(135deg, #006C4F 0%, #00E691 100%)',
            },
          },
          outlined: {
            borderColor: isDarkMode ? '#00FFA3' : '#00805E',
            color: isDarkMode ? '#00FFA3' : '#00805E',
            '&:hover': {
              borderColor: isDarkMode ? '#00cc82' : '#006C4F',
              backgroundColor: isDarkMode ? 'rgba(0, 255, 163, 0.1)' : 'rgba(0, 128, 94, 0.1)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            transition: 'all 0.3s ease-in-out',
            background: isDarkMode 
              ? 'linear-gradient(135deg, rgb(17, 34, 64) 0%, rgb(10, 25, 47) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)',
            backdropFilter: 'blur(10px)',
            boxShadow: isDarkMode 
              ? '0 8px 32px rgba(0, 0, 0, 0.5)'
              : '0 8px 32px rgba(42, 67, 101, 0.15)',
            '@media (max-width: 600px)': {
              borderRadius: '12px',
            },
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: isDarkMode
                ? '0 12px 40px rgba(0, 0, 0, 0.7)'
                : '0 12px 40px rgba(42, 67, 101, 0.25)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isDarkMode
              ? 'rgba(10, 10, 10, 0.8)'
              : 'rgba(240, 247, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            boxShadow: isDarkMode 
              ? '0 4px 30px rgba(0, 0, 0, 0.5)'
              : '0 4px 30px rgba(42, 67, 101, 0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            background: isDarkMode 
              ? 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)'
              : 'linear-gradient(135deg, #F0F7FF 0%, #E6FFF6 100%)',
          },
        },
      },
    },
  });

  // Apply responsive typography
  theme = responsiveFontSizes(theme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
    factor: 2,
  });

  return theme;
};

