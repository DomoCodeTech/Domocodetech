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
import { useTheme } from '@mui/material/styles';

const CTA = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 6, md: 12 }, // Reducido el padding vertical en móvil
        px: { xs: 2, md: 0 }, // Añadido padding horizontal en móvil
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)'
            : 'linear-gradient(135deg, #F0F7FF 0%, #E6FFF6 100%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
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
                    top: { xs: '-50%', md: '-100%' }, // Ajustado para móvil
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: '300px', md: '600px' }, // Reducido para móvil
                    height: { xs: '300px', md: '600px' }, // Reducido para móvil
                    background: theme.palette.mode === 'dark'
                      ? 'radial-gradient(circle, rgba(0, 255, 163, 0.15) 0%, rgba(0, 255, 163, 0) 70%)'
                      : 'radial-gradient(circle, rgba(0, 128, 94, 0.15) 0%, rgba(0, 128, 94, 0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1,
                  }}
                />
                
                <Typography
                  variant="h2"
                  sx={{
                    mb: { xs: 1.5, md: 2 },
                    fontSize: { xs: '1.75rem', md: '2.75rem' },
                    lineHeight: { xs: 1.2, md: 1.3 },
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)'
                      : 'linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)',
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
                    mb: { xs: 3, md: 4 },
                    px: { xs: 2, md: 0 },
                    color: theme.palette.mode === 'dark' ? 'text.secondary' : '#2A4365',
                    fontSize: { xs: '0.875rem', md: '1.25rem' },
                    lineHeight: { xs: 1.5, md: 1.6 },
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
                    flexDirection: { xs: 'column', md: 'row' }, // Apilado en móvil
                    gap: { xs: 1.5, md: 2 }, // Reducido el espacio en móvil
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    size="large"
                    sx={{
                      width: { xs: '100%', md: '200px' }, // Full width en móvil
                      height: { xs: '44px', md: '48px' }, // Altura reducida en móvil
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      background: theme.palette.mode === 'dark'
                        ? '#00FFA3'
                        : 'linear-gradient(135deg, #00805E 0%, #00FFA3 100%)',
                      color: theme.palette.mode === 'dark' ? '#0A0A0A' : '#FFFFFF',
                      '&:hover': {
                        background: theme.palette.mode === 'dark'
                          ? '#00cc82'
                          : 'linear-gradient(135deg, #006C4F 0%, #00E691 100%)',
                      },
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
                      width: { xs: '100%', md: '200px' }, // Full width en móvil
                      height: { xs: '44px', md: '48px' }, // Altura reducida en móvil
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      borderColor: theme.palette.mode === 'dark' ? '#00FFA3' : '#00805E',
                      color: theme.palette.mode === 'dark' ? '#00FFA3' : '#00805E',
                      '&:hover': {
                        borderColor: theme.palette.mode === 'dark' ? '#00cc82' : '#006C4F',
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(0, 255, 163, 0.1)'
                          : 'rgba(0, 128, 94, 0.1)',
                      },
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