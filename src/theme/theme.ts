import { createTheme, responsiveFontSizes } from '@mui/material';

// ============= CUSTOMIZE YOUR COLOR PALETTE HERE =============
const colorPalette = {
  // Primary color and its variations
  primary: {
    main: 'rgb(33, 150, 243)',      // #2196f3 - Main brand color
    light: 'rgb(100, 181, 246)',    // #64b5f6 - Lighter version
    dark: 'rgb(25, 118, 210)',      // #1976d2 - Darker version
  },
  // Secondary/Accent color
  secondary: {
    main: 'rgb(245, 0, 87)',        // #f50057 - Secondary brand color
    light: 'rgb(255, 64, 129)',     // #ff4081 - Lighter version
    dark: 'rgb(197, 17, 98)',       // #c51162 - Darker version
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
        default: isDarkMode ? 'rgb(10, 25, 47)' : 'rgb(248, 250, 255)',
        paper: isDarkMode ? 'rgb(17, 34, 64)' : 'rgb(255, 255, 255)',
      },
      text: {
        primary: isDarkMode ? 'rgb(230, 241, 255)' : 'rgb(45, 55, 72)',
        secondary: isDarkMode ? 'rgb(136, 146, 176)' : 'rgb(74, 85, 104)',
      },
      error: { main: colorPalette.status.error },
      warning: { main: colorPalette.status.warning },
      info: { main: colorPalette.status.info },
      success: { main: colorPalette.status.success },
      divider: isDarkMode ? 'rgba(230, 241, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      // Responsive typography base settings
      h1: {
        fontWeight: 700,
        background: isDarkMode 
          ? 'linear-gradient(45deg, rgb(230, 241, 255) 30%, rgb(136, 146, 176) 90%)'
          : `linear-gradient(45deg, ${colorPalette.primary.main} 30%, ${colorPalette.secondary.main} 90%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 500 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 500 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '8px',
            padding: '8px 24px',
            transition: 'all 0.3s ease-in-out',
            '@media (max-width: 600px)': {
              padding: '6px 16px',
              fontSize: '0.875rem',
            },
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 4px 20px ${colorPalette.primary.main}40`,
            },
          },
          contained: {
            background: isDarkMode
              ? 'linear-gradient(45deg, rgb(230, 241, 255) 30%, rgb(136, 146, 176) 90%)'
              : `linear-gradient(45deg, ${colorPalette.primary.main} 30%, ${colorPalette.secondary.main} 90%)`,
            color: isDarkMode ? 'rgb(10, 25, 47)' : 'rgb(255, 255, 255)',
            '&:hover': {
              background: isDarkMode
                ? 'linear-gradient(45deg, rgb(136, 146, 176) 30%, rgb(230, 241, 255) 90%)'
                : `linear-gradient(45deg, ${colorPalette.primary.dark} 30%, ${colorPalette.secondary.dark} 90%)`,
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

