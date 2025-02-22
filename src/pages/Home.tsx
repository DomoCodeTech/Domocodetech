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
            ? "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)"
            : "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            theme.palette.mode === "dark"
              ? `radial-gradient(circle at 20% 20%, rgba(0, 255, 163, 0.15) 0%, transparent 40%),
               radial-gradient(circle at 80% 80%, rgba(0, 255, 163, 0.1) 0%, transparent 40%),
               radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.5) 0%, transparent 100%)`
              : `radial-gradient(circle at 20% 20%, rgba(0, 128, 94, 0.1) 0%, transparent 40%),
               radial-gradient(circle at 80% 80%, rgba(0, 128, 94, 0.05) 0%, transparent 40%),
               radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.9) 0%, transparent 100%)`,
          zIndex: 0,
          pointerEvents: "none",
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
