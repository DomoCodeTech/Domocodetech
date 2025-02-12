/**
 * CTA.tsx (Call to Action)
 * Componente que muestra una sección de llamada a la acción
 * para incentivar a los usuarios a contactar con la empresa
 * 
 * Características:
 * - Diseño llamativo con fondo de gradiente
 * - Mensaje persuasivo
 * - Botón de acción destacado
 * - Animaciones en hover
 * - Totalmente responsive
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const CTA = () => {
  // Hooks necesarios
  const { t } = useTranslation();
  const theme = useTheme();

  // Configuración de animaciones
  const containerAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const buttonAnimation = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        // Gradiente de fondo con los colores del tema
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
      }}
    >
      {/* Patrón de fondo decorativo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'url("/images/pattern.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Contenido principal */}
      <Container maxWidth="md">
        <motion.div {...containerAnimation}>
          <Box
            sx={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
              color: 'white'
            }}
          >
            {/* Título principal */}
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {t('cta.title')}
            </Typography>

            {/* Subtítulo descriptivo */}
            <Typography
              variant="h5"
              paragraph
              sx={{
                mb: 6,
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              {t('cta.subtitle')}
            </Typography>

            {/* Botón de acción */}
            <motion.div {...buttonAnimation}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  py: 2,
                  px: 6,
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  borderRadius: '30px',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px 0 rgba(0,0,0,0.25)',
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'grey.100'
                  }
                }}
              >
                {t('cta.button')}
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTA; 