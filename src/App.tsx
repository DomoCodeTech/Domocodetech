/**
 * App.tsx
 * Componente principal de la aplicación que maneja el enrutamiento y el tema global
 */
import { useState, useMemo } from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { createAppTheme } from "./theme/theme";
import "./i18n/i18n";
import Projects from "./pages/Projects";
import FuturoIANegocios from "./pages/blog/FuturoIANegocios";
import TendenciasCloudComputing from "./pages/blog/TendenciasCloudComputing";
import MejoresPracticasCiberseguridad from "./pages/blog/MejoresPracticasCiberseguridad";
import WebApplication from "./pages/projects/WebApplication";
import MobileApplication from "./pages/projects/MobileApplication";
import IoTSolutions from "./pages/projects/IoTSolutions";
import Electronics from "./pages/projects/Electronics";
import Networking from "./pages/projects/Networking";
import RevolucionIoTIndustria from "./pages/blog/RevolucionIoTIndustria";
import AutomatizacionRoboticaProcesos from "./pages/blog/AutomatizacionRoboticaProcesos";
import InnovacionesDesarrolloWeb from "./pages/blog/InnovacionesDesarrolloWeb";
import HomeAutomation from "./pages/projects/HomeAutomation";

function App() {
  // Estado para controlar el modo oscuro/claro
  // Inicializa el tema basado en la preferencia guardada o la preferencia del sistema
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode
      ? JSON.parse(savedMode)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Crea el tema de Material-UI basado en el modo actual
  // useMemo evita recálculos innecesarios del tema
  const theme = useMemo(() => createAppTheme(isDarkMode), [isDarkMode]);

  // Función para alternar entre modo oscuro y claro
  // Guarda la preferencia en localStorage para persistencia
  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const Router =
    process.env.NODE_ENV === "production" ? HashRouter : BrowserRouter;

  return (
    // ThemeProvider proporciona el tema a todos los componentes hijos
    <ThemeProvider theme={theme}>
      {/* CssBaseline normaliza los estilos base entre navegadores */}
      <CssBaseline />
      {/* Router maneja la navegación de la aplicación */}
      <Router basename="/">
        {/* Navbar es persistente en todas las rutas */}
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        {/* Contenedor principal con margen superior para el navbar fijo */}
        <main>
          {/* Definición de rutas de la aplicación */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/web" element={<WebApplication />} />
            <Route path="/projects/mobile" element={<MobileApplication />} />
            <Route path="/projects/iot" element={<IoTSolutions />} />
            <Route path="/projects/electronics" element={<Electronics />} />
            <Route path="/projects/networking" element={<Networking />} />
            <Route
              path="/projects/homeAutomation"
              element={<HomeAutomation />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blog/futuro-ia-negocios"
              element={<FuturoIANegocios />}
            />
            <Route
              path="/blog/tendencias-cloud-computing-2024"
              element={<TendenciasCloudComputing />}
            />
            <Route
              path="/blog/mejores-practicas-ciberseguridad"
              element={<MejoresPracticasCiberseguridad />}
            />
            <Route
              path="/blog/revolucion-iot-industria"
              element={<RevolucionIoTIndustria />}
            />
            <Route
              path="/blog/automatizacion-robotica-procesos"
              element={<AutomatizacionRoboticaProcesos />}
            />
            <Route
              path="/blog/innovaciones-desarrollo-web"
              element={<InnovacionesDesarrolloWeb />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* Footer es persistente en todas las rutas */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
