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
        py: { xs: 8, md: 12 },
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
                    mb: 2,
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
                    mb: 4,
                    color: theme.palette.mode === 'dark' ? 'text.secondary' : '#2A4365',
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
                      minWidth: '200px',
                      height: '48px',
                      fontSize: '1.1rem',
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