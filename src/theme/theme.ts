import { createTheme } from '@mui/material/styles';

// Nueva paleta de colores moderna
const colors = {
  // Color principal - Azul vibrante con un toque de neón
  primary: {
    dark: '#091F2C',    // Fondo principal más elegante
    main: '#0D3B66',    // Elementos destacados
    light: '#247BA0',   // Hover y acentos
  },
  // Color de acento - Degradado de cian y violeta tecnológico
  accent: {
    dark: '#6A0572',    // Elementos interactivos oscuros
    main: '#9D00FF',    // Efecto hover con neón
    light: '#64E9EE',   // Resaltados y botones activos
  },
  // Grises equilibrados para mejor contraste
  neutral: {
    darkest: '#1A1A2E', // Fondo sutil para tarjetas
    dark: '#3A3A55',    // Texto secundario
    main: '#737B9A',    // Texto estándar
    light: '#B0B8D1',   // Texto claro
    lightest: '#E3E8F1', // Títulos y elementos destacados
  }
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.neutral.lightest,
    },
    secondary: {
      main: colors.accent.main,
      light: colors.accent.light,
      dark: colors.accent.dark,
      contrastText: colors.primary.dark,
    },
    background: {
      default: colors.primary.dark,
      paper: colors.neutral.darkest,
    },
    text: {
      primary: colors.neutral.lightest,
      secondary: colors.neutral.main,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      color: colors.neutral.lightest,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      color: colors.neutral.lightest,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      color: colors.neutral.main,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 30px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: `linear-gradient(45deg, ${colors.accent.main} 0%, ${colors.accent.light} 100%)`,
            boxShadow: '0 4px 20px rgba(157, 0, 255, 0.4)',
          },
        },
        contained: {
          background: `linear-gradient(45deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.neutral.darkest,
          borderRadius: '12px',
          border: `1px solid ${colors.primary.light}`,
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0 10px 30px rgba(100, 233, 238, 0.3)`,
          },
        },
      },
    },
  },
});

export default theme;
