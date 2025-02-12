/**
 * Home.tsx
 * Página principal que muestra:
 * - Hero section con mensaje principal
 * - Sección de servicios destacados
 * - Sección de estadísticas
 * - Testimonios de clientes
 * - Llamada a la acción (CTA)
 */
import React from 'react';
import { Container,  Box } from '@mui/material';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Hero from '../components/Hero';
import Projects from '../components/ProjectsSection';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import ServicesSection from '../components/ServicesSection';

const Home: React.FC = () => {

  // Configuración de animaciones para elementos
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Box component="div">
      {/* Hero Section - Banner principal */}
      <Hero />

      {/* Sección de Projects */}
      <Box component="section" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Projects />
          </motion.div>
        </Container>
      </Box>

      {/* Sección de Estadísticas */}
      <Box 
        component="section" 
        sx={{ 
          py: 8, 
          backgroundColor: 'background.paper' 
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Stats />
          </motion.div>
        </Container>
      </Box>

      {/* Sección de Testimonios */}
      <Box component="section" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <Testimonials />
          </motion.div>
        </Container>
      </Box>

      {/* Sección de Llamada a la Acción (CTA) */}
      <Box 
        component="section" 
        sx={{ 
          py: 8, 
          backgroundColor: 'primary.main',
          color: 'primary.contrastText'
        }}
      >
        <Container maxWidth="lg">
          <motion.div {...fadeInUp}>
            <CTA />
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <ServicesSection />

      {/* Team Section */}
      <Team />
    </Box>
  );
};

export default Home; 