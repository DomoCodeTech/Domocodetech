/**
 * Home.tsx
 * Página principal que muestra:
 * - Hero section con mensaje principal
 * - Sección de servicios destacados
 * - Sección de estadísticas
 * - Testimonios de clientes
 * - Llamada a la acción (CTA)
 */
import Testimonials from "../components/home/Testimonials";
import Team from "../components/home/Team";
import Hero from "../components/home/Hero";
import ProjectsSection from "../components/home/ProjectsSection";
import Stats from "../components/home/Stats";
import CTA from "../components/home/CTA";
import ServicesSection from "../components/home/ServicesSection";

const Home = () => {
  return (
    //<Container maxWidth="lg" sx={{ px: { xs: 1, sm: 1, md: 1 } }}>
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <ProjectsSection />
      <Testimonials />
      <CTA />
      <Team />
      </>
   // </Container>
  );
};

export default Home;
