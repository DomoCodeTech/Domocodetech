/**
 * Home.tsx
 * Página principal que muestra:
 * - Hero section con mensaje principal
 * - Sección de servicios destacados
 * - Sección de estadísticas
 * - Testimonios de clientes
 * - Llamada a la acción (CTA)
 */
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Testimonials from "../components/home/Testimonials";
import Team from "../components/home/Team";
import Hero from "../components/home/Hero";
import ProjectsSection from "../components/home/ProjectsSection";
import Stats from "../components/home/Stats";
import CTA from "../components/home/CTA";
import ServicesSection from "../components/home/ServicesSection";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background:
          theme.palette.mode === "dark"
            ? // Modo oscuro - capas de degradado más oscuras
              `linear-gradient(180deg, 
              rgba(5, 5, 5, 1) 0%, 
              rgba(0, 20, 19, 0.98) 20%,
              rgba(0, 25, 23, 0.95) 40%,
              rgba(0, 30, 28, 0.98) 60%,
              rgba(0, 35, 32, 0.95) 80%,
              rgba(5, 5, 5, 1) 100%),
            linear-gradient(135deg,
              rgba(0, 255, 163, 0.05) 0%,
              rgba(0, 198, 255, 0.05) 50%,
              rgba(0, 149, 255, 0.05) 100%),
            linear-gradient(45deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 20, 19, 0.9) 100%)`
            : // Modo claro - capas de degradado
              `linear-gradient(180deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(230, 255, 249, 0.95) 20%,
              rgba(208, 255, 245, 0.9) 40%,
              rgba(184, 255, 225, 0.95) 60%,
              rgba(160, 255, 233, 0.9) 80%,
              rgba(255, 255, 255, 1) 100%),
            linear-gradient(135deg,
              rgba(0, 128, 94, 0.05) 0%,
              rgba(0, 149, 255, 0.05) 50%,
              rgba(0, 198, 255, 0.05) 100%),
            linear-gradient(45deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(230, 255, 249, 0.8) 100%)`,
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            theme.palette.mode === "dark"
              ? `radial-gradient(circle at 20% 20%, rgba(0, 255, 163, 0.08) 0%, transparent 40%),
               radial-gradient(circle at 80% 80%, rgba(0, 198, 255, 0.05) 0%, transparent 40%),
               radial-gradient(circle at 50% 50%, rgba(0, 149, 255, 0.03) 0%, transparent 100%),
               radial-gradient(circle at 30% 70%, rgba(0, 255, 200, 0.05) 0%, transparent 50%)`
              : `radial-gradient(circle at 20% 20%, rgba(0, 128, 94, 0.1) 0%, transparent 40%),
               radial-gradient(circle at 80% 80%, rgba(0, 149, 255, 0.05) 0%, transparent 40%),
               radial-gradient(circle at 50% 50%, rgba(0, 198, 255, 0.05) 0%, transparent 100%),
               radial-gradient(circle at 30% 70%, rgba(0, 255, 200, 0.05) 0%, transparent 50%)`,
          zIndex: 0,
          pointerEvents: "none",
          mixBlendMode: theme.palette.mode === "dark" ? "screen" : "multiply",
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${
            theme.palette.mode === "dark" ? "%23ffffff" : "%23000000"
          }' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Stats />
        <ServicesSection />
        <ProjectsSection />
        <Testimonials />
        <CTA />
        <Team />
      </Box>
    </Box>
  );
};

export default Home;
