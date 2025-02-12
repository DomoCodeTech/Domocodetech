/**
 * Hero.tsx
 * Componente de banner principal que muestra:
 * - Mensaje principal de la empresa
 * - Subtítulo descriptivo
 * - Botón de llamada a la acción
 * - Imagen ilustrativa
 * 
 * Este componente utiliza:
 * - Material-UI para el diseño y componentes base
 * - Framer Motion para animaciones
 * - react-i18next para internacionalización
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

// Datos estáticos del componente
const HERO_DATA = {
  images: {
    main: '/images/hero-bg.jpg',
    secondary: '/images/hero-illustration.png'
  }
};

const Hero = () => {
  // Hooks necesarios
  const { t } = useTranslation();
  const theme = useTheme();

  // Configuración de animaciones
  const textAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        color: 'white',
        overflow: 'hidden',
        // Gradiente de fondo con los colores del tema
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          opacity: 0.9,
          zIndex: 1
        }
      }}
    >
      {/* Imagen de fondo con efecto blur */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${HERO_DATA.images.main})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          transform: 'scale(1.1)'
        }}
      />

      {/* Contenido principal */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          py: { xs: 12, md: 20 } // Padding responsive
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Columna de texto */}
          <Grid item xs={12} md={6}>
            <motion.div {...textAnimation}>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                {t('hero.slogan')}
              </Typography>
              <Typography 
                variant="h4" 
                paragraph
                sx={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                {t('hero.subtitle')}
              </Typography>

              {/* Botón de llamada a la acción */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    borderRadius: '30px',
                    boxShadow: '0 4px 14px 0 rgba(0,0,0,0.25)',
                  }}
                >
                  {t('hero.getQuote')}
                </Button>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Columna de imagen */}
          <Grid item xs={12} md={6}>
            <motion.div {...imageAnimation}>
              <Box
                component="img"
                src={HERO_DATA.images.secondary}
                alt={t('hero.imageAlt')}
                sx={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  // Efecto 3D en hover
                  transform: 'perspective(1000px) rotateY(-15deg)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)'
                  }
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 