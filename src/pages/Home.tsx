/**
 * Home.tsx
 * Página principal que muestra:
 * - Hero section con mensaje principal
 * - Sección de servicios destacados
 * - Sección de estadísticas
 * - Testimonios de clientes
 * - Llamada a la acción (CTA)
 */
import PrismaticBackground from "../components/layout/PrismaticBackground";
import Testimonials from "../components/home/Testimonials";
import Team from "../components/home/Team";
import Hero from "../components/home/Hero";
import ProjectsSection from "../components/home/ProjectsSection";
import Stats from "../components/home/Stats";
import CTA from "../components/home/CTA";
import ServicesSection from "../components/home/ServicesSection";

const Home = () => {
  return (
    <PrismaticBackground>
      <Hero />
      <Stats />
      <ServicesSection />
      <ProjectsSection />
      <Testimonials />
      <CTA />
      <Team />
    </PrismaticBackground>
  );
};

export default Home;
