import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';
import './i18n/i18n';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isEnglish: boolean;
  toggleLanguage: () => void;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isEnglish, setIsEnglish] = useState<boolean>(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang ? JSON.parse(savedLang) : true;
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2'
          },
          secondary: {
            main: '#f50057',
            light: '#ff4081',
            dark: '#c51162'
          },
          background: {
            default: isDarkMode ? '#0a192f' : '#f8faff',
            paper: isDarkMode ? '#112240' : '#ffffff',
          },
          text: {
            primary: isDarkMode ? '#e6f1ff' : '#2d3748',
            secondary: isDarkMode ? '#8892b0' : '#4a5568',
          },
          error: {
            main: '#f44336'
          },
          warning: {
            main: '#ff9800'
          },
          info: {
            main: '#03a9f4'
          },
          success: {
            main: '#4caf50'
          },
          divider: isDarkMode ? 'rgba(230, 241, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            background: isDarkMode 
              ? 'linear-gradient(45deg, #e6f1ff 30%, #8892b0 90%)'
              : 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
          h2: {
            fontSize: '2.75rem',
            fontWeight: 600,
            lineHeight: 1.3,
          },
          h3: {
            fontSize: '2.25rem',
            fontWeight: 600,
            lineHeight: 1.3,
          },
          h4: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.4,
          },
          h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.4,
          },
          h6: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.4,
          },
          body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
          },
          body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: '8px',
                padding: '8px 24px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 20px rgba(33, 150, 243, 0.25)',
                },
              },
              contained: {
                background: isDarkMode
                  ? 'linear-gradient(45deg, #e6f1ff 30%, #8892b0 90%)'
                  : 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)',
                color: isDarkMode ? '#0a192f' : '#ffffff',
                '&:hover': {
                  background: isDarkMode
                    ? 'linear-gradient(45deg, #8892b0 30%, #e6f1ff 90%)'
                    : 'linear-gradient(45deg, #1976d2 30%, #c51162 90%)',
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
                  ? 'linear-gradient(135deg, #112240 0%, #0a192f 100%)'
                  : 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
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
      }),
    [isDarkMode]
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const toggleLanguage = () => {
    setIsEnglish((prev: boolean) => {
      const newLang = !prev;
      localStorage.setItem('language', JSON.stringify(newLang));
      return newLang;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Navbar 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
            isEnglish={isEnglish}
            toggleLanguage={toggleLanguage}
          />
          <main>
            <Routes>
              <Route path="/" element={<Home isEnglish={isEnglish} />} />
              <Route path="/about" element={<About isEnglish={isEnglish} />} />
              <Route path="/blog" element={<Blog isEnglish={isEnglish} />} />
              <Route path="/services" element={<Services isEnglish={isEnglish} />} />
              <Route path="/contact" element={<Contact isEnglish={isEnglish} />} />
            </Routes>
          </main>
          <Footer isEnglish={isEnglish} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
