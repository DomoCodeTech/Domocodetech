import { createTheme } from '@mui/material/styles';

// Paleta de colores futurista
const colors = {
  // Color principal - Azul profundo
  navy: {
    dark: '#0a192f',    // Fondo principal
    main: '#112240',    // Elementos secundarios
    light: '#233554',   // Elementos de acento
  },
  // Color de acento - Turquesa tecnológico
  cyan: {
    dark: '#00bcd4',    // Botones y elementos interactivos
    main: '#64ffda',    // Acentos y highlights
    light: '#a8fff7',   // Efectos hover
  },
  // Grises futuristas
  slate: {
    dark: '#495670',    // Texto secundario
    main: '#8892b0',    // Texto de párrafos
    light: '#a8b2d1',   // Texto claro
    lightest: '#ccd6f6', // Títulos
  }
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.cyan.main,
      light: colors.cyan.light,
      dark: colors.cyan.dark,
      contrastText: colors.navy.dark,
    },
    secondary: {
      main: colors.slate.lightest,
      light: colors.slate.light,
      dark: colors.slate.dark,
      contrastText: colors.cyan.main,
    },
    background: {
      default: colors.navy.dark,
      paper: colors.navy.main,
    },
    text: {
      primary: colors.slate.lightest,
      secondary: colors.slate.main,
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '2rem',
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 25px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent 0%, rgba(100, 255, 218, 0.1) 100%)',
            transition: 'all 0.3s ease-in-out',
          },
          '&:hover::before': {
            transform: 'translateX(100%)',
          },
        },
        contained: {
          background: `linear-gradient(45deg, ${colors.cyan.dark} 0%, ${colors.cyan.main} 100%)`,
          boxShadow: '0 4px 15px rgba(100, 255, 218, 0.2)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(100, 255, 218, 0.3)',
          },
        },
        outlined: {
          borderColor: colors.cyan.main,
          '&:hover': {
            borderColor: colors.cyan.light,
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.navy.main,
          borderRadius: '12px',
          border: `1px solid ${colors.navy.light}`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: `0 10px 20px rgba(100, 255, 218, 0.2)`,
            borderColor: colors.cyan.main,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
              borderColor: colors.slate.dark,
            },
            '&:hover fieldset': {
              borderColor: colors.cyan.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.cyan.main,
            },
          },
        },
      },
    },
  },
});

export default theme; 