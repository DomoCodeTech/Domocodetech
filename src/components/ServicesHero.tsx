import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SITE_DATA } from '../constants/siteData';
import { useRef } from 'react';

const ServicesHero = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Box 
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '90vh',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))'
          : 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${SITE_DATA.images.services.showcase[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'blur(8px)',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Columna de texto */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: 'block'
                }}
              >
                {t('services.subtitle')}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  mb: 3,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)'
                    : 'linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2,
                }}
              >
                {t('services.title')}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '500px',
                  lineHeight: 1.6,
                }}
              >
                {t('services.introduction')}
              </Typography>
            </motion.div>
          </Grid>

          {/* Columna de imágenes */}
          <Grid item xs={12} md={6}>
            <motion.div style={{ y, opacity }}>
              <Box sx={{ position: 'relative', height: { xs: '400px', md: '600px' } }}>
                {SITE_DATA.images.services.showcase.slice(0, 4).map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Service ${index + 1}`}
                      sx={{
                        position: 'absolute',
                        width: '250px',
                        height: '350px',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                        border: '4px solid',
                        borderColor: theme.palette.background.paper,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          zIndex: 2,
                        },
                        ...getImagePosition(index),
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0,255,163,0.1) 0%, rgba(0,255,163,0) 70%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </Container>
    </Box>
  );
};

// Helper function para posicionar las imágenes
const getImagePosition = (index: number) => {
  const positions = [
    { top: '0%', left: '10%', transform: 'rotate(-8deg)' },
    { top: '15%', right: '5%', transform: 'rotate(8deg)' },
    { bottom: '10%', left: '15%', transform: 'rotate(5deg)' },
    { bottom: '5%', right: '15%', transform: 'rotate(-5deg)' },
  ];
  return positions[index];
};

export default ServicesHero;
