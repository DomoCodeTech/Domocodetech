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
    dark: '#0A0A0A',       // Darker version
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
        default: isDarkMode ? '#0A0A0A' : 'rgb(248, 250, 255)',
        paper: isDarkMode ? '#1A1A1A' : 'rgb(255, 255, 255)',
      },
      text: {
        primary: isDarkMode ? '#FFFFFF' : 'rgb(45, 55, 72)',
        secondary: isDarkMode ? '#AAAAAA' : 'rgb(74, 85, 104)',
      },
      error: { main: colorPalette.status.error },
      warning: { main: colorPalette.status.warning },
      info: { main: colorPalette.status.info },
      success: { main: colorPalette.status.success },
      divider: isDarkMode ? 'rgba(230, 241, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      // Responsive typography base settings
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
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
            backgroundColor: '#00FFA3',
            color: '#0A0A0A',
            '&:hover': {
              backgroundColor: '#00cc82',
            },
          },
          outlined: {
            borderColor: '#00FFA3',
            color: '#00FFA3',
            '&:hover': {
              borderColor: '#00cc82',
              backgroundColor: 'rgba(0, 255, 163, 0.1)',
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
              : 'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(248, 250, 255) 100%)',
            '@media (max-width: 600px)': {
              borderRadius: '12px',
            },
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: isDarkMode
                ? '0 8px 30px rgba(230, 241, 255, 0.1)'
                : '0 8px 30px rgba(33, 150, 243, 0.15)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isDarkMode
              ? 'rgba(17, 34, 64, 0.8)'
              : 'rgba(248, 250, 255, 0.8)',
            backdropFilter: 'blur(12px)',
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

