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
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import ServicesSection from '../components/ServicesSection';
import { Container, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        background: '#0A0A0A',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Hero />
        <Stats />
        <ServicesSection />
        <Projects />
        <Testimonials />
        <CTA />
        <Team />
      </Container>
    </Box>
  );
};

export default Home; 