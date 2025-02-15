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
import { Box, Container, Grid, Typography, Card, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { SITE_DATA } from '../constants/siteData';

const Testimonials = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.position'),
      quote: t('testimonials.client1.quote'),
      avatar: SITE_DATA.images.testimonials.client1
    },
    {
      name: t('testimonials.client2.name'),
      role: t('testimonials.client2.position'),
      quote: t('testimonials.client2.quote'),
      avatar: SITE_DATA.images.testimonials.client2
    },
    {
      name: t('testimonials.client3.name'),
      role: t('testimonials.client3.position'),
      quote: t('testimonials.client3.quote'),
      avatar: SITE_DATA.images.testimonials.client3
    },
  ];

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)'
          : 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
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
              color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
            }}
          >
            {t('testimonials.title')}
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
            {t('testimonials.subtitle')}
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
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                      : '#FFFFFF',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0, 0, 0, 0.5)'
                      : '0 8px 32px rgba(0, 0, 0, 0.08)',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 40px rgba(0, 0, 0, 0.7)'
                        : '0 12px 40px rgba(0, 0, 0, 0.12)',
                      '& .quote-icon': {
                        color: 'primary.main',
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
                      color: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)',
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
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{
                        width: 48,
                        height: 48,
                        border: `2px solid ${theme.palette.primary.main}`,
                      }}
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'primary.main',
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