import { ThemeOptions } from '@mui/material';

// Paleta de colores base
const palette = {
  primary: {
    main: '#2D3250', // Azul oscuro elegante
    light: '#424769',
    dark: '#1E2132',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#F6B17A', // Naranja suave
    light: '#F7C59F',
    dark: '#E6955C',
    contrastText: '#2D3250'
  },
  accent: {
    blue: '#7C93C3',
    purple: '#9376E0',
    orange: '#F6B17A',
    green: '#6DA9A9'
  }
};

// Tipografía consistente
const typography = {
  fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '2.75rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  body1: {
    fontSize: '1.125rem',
    lineHeight: 1.7,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.7,
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
  },
};

// Componentes personalizados
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        padding: '8px 24px',
        transition: 'all 0.2s ease-in-out',
        fontWeight: 600,
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-2px)',
        },
      },
      outlined: {
        '&:hover': {
          transform: 'translateY(-2px)',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
        },
      },
    },
  },
};

// Configuración específica para modo oscuro
const darkModeOverrides = {
  palette: {
    mode: 'dark',
    primary: palette.primary,
    secondary: palette.secondary,
    background: {
      default: '#1A1B23',
      paper: '#2D3250',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B8D1',
    },
  },
  components: {
    ...components,
    MuiCard: {
      styleOverrides: {
        root: {
          ...components.MuiCard.styleOverrides.root,
          backgroundColor: '#2D3250',
          '&:hover': {
            ...components.MuiCard.styleOverrides.root['&:hover'],
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
  },
};

// Configuración específica para modo claro
const lightModeOverrides = {
  palette: {
    mode: 'light',
    primary: palette.primary,
    secondary: palette.secondary,
    background: {
      default: '#F8F9FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3250',
      secondary: '#6B7280',
    },
  },
  components: {
    ...components,
    MuiCard: {
      styleOverrides: {
        root: {
          ...components.MuiCard.styleOverrides.root,
          backgroundColor: '#FFFFFF',
          '&:hover': {
            ...components.MuiCard.styleOverrides.root['&:hover'],
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },
};

// Función para obtener el tema según el modo
export const getTheme = (isDarkMode: boolean): ThemeOptions => ({
  ...(isDarkMode ? darkModeOverrides : lightModeOverrides),
  typography,
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.05)',
    '0px 8px 16px rgba(0, 0, 0, 0.05)',
    '0px 12px 24px rgba(0, 0, 0, 0.05)',
    ...Array(20).fill('none'),
  ],
});

