/**
 * App.tsx
 * Componente principal de la aplicación que maneja el enrutamiento y el tema global
 */
import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { createAppTheme } from './theme/theme';
import './App.css';
import './i18n/i18n';

function App() {
  // Estado para controlar el modo oscuro/claro
  // Inicializa el tema basado en la preferencia guardada o la preferencia del sistema
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Crea el tema de Material-UI basado en el modo actual
  // useMemo evita recálculos innecesarios del tema
  const theme = useMemo(() => createAppTheme(isDarkMode), [isDarkMode]);

  // Función para alternar entre modo oscuro y claro
  // Guarda la preferencia en localStorage para persistencia
  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    // ThemeProvider proporciona el tema a todos los componentes hijos
    <ThemeProvider theme={theme}>
      {/* CssBaseline normaliza los estilos base entre navegadores */}
      <CssBaseline />
      {/* Router maneja la navegación de la aplicación */}
      <Router>
        <div className="app">
          {/* Navbar es persistente en todas las rutas */}
          <Navbar 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
          />
          {/* Contenedor principal con margen superior para el navbar fijo */}
          <main style={{ marginTop: '100px' }}>
            {/* Definición de rutas de la aplicación */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          {/* Footer es persistente en todas las rutas */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
