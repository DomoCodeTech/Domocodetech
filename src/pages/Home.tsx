/**
 * Home.tsx
 * Página principal que muestra:
 * - Hero section con mensaje principal
 * - Sección de servicios destacados
 * - Sección de estadísticas
 * - Testimonios de clientes
 * - Llamada a la acción (CTA)
 */
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import ServicesSection from "../components/ServicesSection";
import { Container, Box, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)"
            : "linear-gradient(180deg, #F0F7FF 0%, #E6FFF6 100%)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Hero />
        <Stats />
        <ServicesSection />
        <ProjectsSection />
        <Testimonials />
        <CTA />
        <Team />
      </Container>
    </Box>
  );
};

export default Home;
