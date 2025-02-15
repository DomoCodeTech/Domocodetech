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
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Gradient Orb */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(0, 255, 163, 0.15) 0%, rgba(0, 255, 163, 0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1,
                  }}
                />
                
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                    minHeight: '3.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {t('cta.title')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    maxWidth: '600px',
                    mx: 'auto',
                    minHeight: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {t('cta.subtitle')}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    size="large"
                    sx={{
                      minWidth: '200px',
                      height: '48px',
                      fontSize: '1.1rem',
                    }}
                  >
                    {t('cta.button')}
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/services"
                    variant="outlined"
                    size="large"
                    sx={{
                      minWidth: '200px',
                      height: '48px',
                      fontSize: '1.1rem',
                    }}
                  >
                    {t('services.viewMore')}
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CTA; 