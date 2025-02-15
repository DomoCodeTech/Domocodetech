/**
 * Testimonials.tsx
 * Componente que muestra los testimonios de clientes satisfechos
 * 
 * Características:
 * - Carrusel automático de testimonios
 * - Diseño de tarjetas con foto y cita
 * - Animaciones suaves de transición
 * - Controles de navegación manual
 * - Responsive para todos los dispositivos
 */
import { Box, Container, Grid, Typography, Avatar, Card } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    image: '/testimonials/avatar1.jpg',
    quote: 'The AI solutions provided have transformed our business operations. The results exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'CEO, DataFlow',
    image: '/testimonials/avatar2.jpg',
    quote: 'Incredible expertise in AI implementation. Their team delivered exactly what we needed and more.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Innovation, FutureTech',
    image: '/testimonials/avatar3.jpg',
    quote: 'Working with them was a game-changer for our company. Their AI solutions are cutting-edge and effective.',
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        background: '#0A0A0A',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Some of our clients
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: 'text.secondary',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Hear what our clients have to say about their experience working with us
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0, 255, 163, 0.1)',
                      border: '1px solid rgba(0, 255, 163, 0.2)',
                      '& .quote-icon': {
                        color: '#00FFA3',
                      },
                    },
                  }}
                >
                  <Box
                    className="quote-icon"
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: 20,
                      color: 'rgba(255, 255, 255, 0.1)',
                      transition: 'color 0.3s ease-in-out',
                    }}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 60 }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 56,
                        height: 56,
                        border: '2px solid #00FFA3',
                      }}
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#00FFA3',
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials; 