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
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
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
            <Grid container spacing={4} key={currentPage}>
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
                        p: 4,
                        height: '100%',
                        minHeight: '380px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
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
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.05)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 12px 40px rgba(0, 0, 0, 0.7)'
                            : '0 12px 40px rgba(0, 0, 0, 0.12)',
                          '& .quote-icon': {
                            color: 'primary.main',
                            transform: 'rotate(10deg)',
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
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        <FormatQuoteIcon sx={{ fontSize: 60 }} />
                      </Box>
                      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="body1"
                          sx={{
                            mb: 4,
                            color: 'text.secondary',
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            fontFamily: "'Roboto', sans-serif",
                            minHeight: '160px',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: 'vertical',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          "{testimonial.quote}"
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        mt: 'auto',
                        pt: 2,
                        borderTop: '1px solid',
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.05)',
                      }}>
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
                              fontFamily: "'Playfair Display', serif",
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'primary.main',
                              fontFamily: "'Roboto', sans-serif",
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