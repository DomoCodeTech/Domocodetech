/**
 * Testimonials.tsx
 * Componente que muestra los testimonios de clientes satisfechos
 * 
 * Características:
 * - Carrusel automático de testimonios con efecto fade
 * - Diseño de tarjetas con foto y cita
 * - Animaciones suaves de transición
 * - Controles de navegación manual
 * - Responsive para todos los dispositivos
 */
import { Box, Container, Grid, Typography, Card, Avatar, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { SITE_DATA } from '../constants/siteData';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

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
    {
      name: t('testimonials.client4.name'),
      role: t('testimonials.client4.position'),
      quote: t('testimonials.client4.quote'),
      avatar: SITE_DATA.images.testimonials.client4
    },
    {
      name: t('testimonials.client5.name'),
      role: t('testimonials.client5.position'),
      quote: t('testimonials.client5.quote'),
      avatar: SITE_DATA.images.testimonials.client5
    },
    {
      name: t('testimonials.client6.name'),
      role: t('testimonials.client6.position'),
      quote: t('testimonials.client6.quote'),
      avatar: SITE_DATA.images.testimonials.client6
    },
  ];

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000); // Change testimonials every 5 seconds

    return () => clearInterval(timer);
  }, [totalPages]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)'
          : 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
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
              fontFamily: "'Playfair Display', serif",
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
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            {t('testimonials.subtitle')}
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <Grid container spacing={{ xs: 1.5, md: 4 }} key={currentPage}>
              {currentTestimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        p: { xs: 2, md: 4 },
                        height: '100%',
                        minHeight: { xs: '180px', md: '380px' },
                        display: 'flex',
                        flexDirection: { xs: 'row', md: 'column' },
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                          : '#FFFFFF',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 16px rgba(0, 0, 0, 0.4)'
                          : '0 4px 16px rgba(0, 0, 0, 0.06)',
                        borderRadius: 2,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      {/* Cliente info - Izquierda en móvil */}
                      <Box 
                        sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: { xs: 'center', md: 'flex-start' },
                          borderRight: { xs: '1px solid', md: 'none' },
                          borderBottom: { xs: 'none', md: '1px solid' },
                          borderColor: 'divider',
                          pr: { xs: 2, md: 0 },
                          pb: { xs: 0, md: 2 },
                          minWidth: { xs: '100px', md: 'auto' },
                        }}
                      >
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          sx={{
                            width: { xs: 56, md: 48 },
                            height: { xs: 56, md: 48 },
                            border: `2px solid ${theme.palette.primary.main}`,
                            mb: 1
                          }}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: '0.75rem', md: '1rem' },
                            textAlign: { xs: 'center', md: 'left' },
                            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'primary.main',
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            textAlign: { xs: 'center', md: 'left' },
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>

                      {/* Contenido del testimonio - Derecha en móvil */}
                      <Box 
                        sx={{ 
                          flex: 1,
                          pl: { xs: 2, md: 0 },
                          pt: { xs: 0, md: 2 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: { xs: '0.813rem', md: '1rem' },
                            lineHeight: { xs: 1.4, md: 1.6 },
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: { xs: 4, md: 6 },
                            WebkitBoxOrient: 'vertical',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          "{testimonial.quote}"
                        </Typography>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </AnimatePresence>

          {/* Navigation Controls */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              gap: 2,
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: currentPage === index ? 'primary.main' : 'grey.400',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrentPage(index)}
              />
            ))}
            <IconButton
              onClick={handleNext}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;