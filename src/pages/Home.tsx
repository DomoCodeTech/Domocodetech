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

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <ProjectsSection />
      <Testimonials />
      <CTA />
      <Team />
    </>
  );
};

export default Home;
