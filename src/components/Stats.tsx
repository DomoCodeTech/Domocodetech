/**
 * Stats.tsx
 * Componente que muestra las estadísticas clave de la empresa:
 * - Años de experiencia
 * - Proyectos completados
 * - Clientes satisfechos
 * - Miembros del equipo
 * 
 * Características:
 * - Animación de contador al hacer scroll
 * - Diseño responsive
 * - Iconos ilustrativos
 * - Traducciones en múltiples idiomas
 */
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    value: 95,
    suffix: '%',
    label: 'Client satisfaction rate',
  },
  {
    value: 150,
    suffix: '+',
    label: 'Projects completed',
  },
  {
    value: 10,
    suffix: 'x',
    label: 'ROI for clients',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Support available',
  },
];

const Stats = () => {
  return (
    <Box
      sx={{
        background: '#1A1A1A',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)',
                    boxShadow: '0 4px 30px rgba(0, 255, 163, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 700,
                      mb: 1,
                      background: 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.suffix}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '0.875rem', md: '1rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats; 