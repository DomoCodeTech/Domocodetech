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
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: {
            main: '#00bcd4',
          },
          secondary: {
            main: '#7c4dff',
          },
          background: {
            default: isDarkMode ? '#0a192f' : '#f5f5f5',
            paper: isDarkMode ? '#112240' : '#ffffff',
          },
          text: {
            primary: isDarkMode ? '#e6f1ff' : '#2d3748',
            secondary: isDarkMode ? '#8892b0' : '#4a5568',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
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
                  boxShadow: '0 4px 20px rgba(0, 188, 212, 0.25)',
                },
              },
              contained: {
                background: 'linear-gradient(45deg, #00bcd4 30%, #7c4dff 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00acc1 30%, #6c3fff 90%)',
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '16px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Navbar 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
          />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
