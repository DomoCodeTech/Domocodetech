import { Box, Container, Grid, Typography, Card, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { ServiceIcon } from './icons/ServiceIcons';

const ServicesSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const services = [
    {
      key: 'software',
      icon: 'Code',
      features: ['web', 'mobile', 'business', 'apis', 'databases'],
      techStack: ['React', 'Node.js', 'Python', 'MongoDB', 'Firebase']
    },
    {
      key: 'microcontrollers',
      icon: 'Chip',
      features: ['iot', 'automation', 'control', 'firmware', 'embedded'],
      techStack: ['Arduino', 'Raspberry Pi', 'ESP32', 'PIC', 'STM32']
    },
    {
      key: 'domotics',
      icon: 'Smart',
      features: ['voice', 'lighting', 'climate', 'security', 'energy'],
      techStack: ['Home Assistant', 'Zigbee', 'Z-Wave', 'MQTT', 'KNX']
    },
    {
      key: 'electronics',
      icon: 'Robot',
      features: ['pcb', 'prototyping', 'embedded', 'iot', 'sensors'],
      techStack: ['Altium', 'KiCad', 'Eagle', 'Proteus', 'Fusion 360']
    },
    {
      key: 'networks',
      icon: 'Network',
      features: ['setup', 'config', 'security', 'performance', 'maintenance'],
      techStack: ['Cisco', 'Ubiquiti', 'pfSense', 'MikroTik', 'OpenWrt']
    },
    {
      key: 'support',
      icon: 'Support',
      features: ['hardware', 'software', 'optimization', 'recovery', 'maintenance'],
      techStack: ['Windows', 'Linux', 'macOS', 'Android', 'iOS']
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)'
          : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
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
            {t('services.title')}
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
            {t('services.subtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={3} alignItems="stretch">
          {services.map(({ key, icon, features, techStack }, index) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: { xs: 2, sm: 3 },
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                      : '#FFFFFF',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0, 0, 0, 0.5)'
                      : '0 8px 32px rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 40px rgba(0, 0, 0, 0.7)'
                        : '0 12px 40px rgba(0, 0, 0, 0.12)',
                      '& .service-icon': {
                        transform: 'scale(1.1) rotateY(180deg)',
                        color: 'primary.main',
                      },
                      '& .tech-chip': {
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      }
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      color: 'text.primary',
                      mb: 2,
                      transition: 'all 0.5s ease-in-out',
                      textAlign: 'center',
                    }}
                  >
                    <ServiceIcon name={icon} sx={{ fontSize: { xs: 32, sm: 40 } }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      textAlign: 'center',
                    }}
                  >
                    {t(`services.${key}.title`)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    }}
                  >
                    {t(`services.${key}.description`)}
                  </Typography>

                  <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      {features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          size="small"
                          sx={{
                            m: 0.5,
                            background: theme.palette.mode === 'dark'
                              ? 'rgba(0, 255, 163, 0.1)'
                              : 'rgba(0, 0, 0, 0.05)',
                            color: theme.palette.mode === 'dark'
                              ? 'white'
                              : 'text.primary',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            height: { xs: 24, sm: 32 },
                            '&:hover': {
                              background: theme.palette.mode === 'dark'
                                ? 'rgba(0, 255, 163, 0.2)'
                                : 'rgba(0, 0, 0, 0.1)',
                            },
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      {techStack.map((tech, idx) => (
                        <Chip
                          className="tech-chip"
                          key={idx}
                          label={tech}
                          variant="outlined"
                          size="small"
                          sx={{
                            m: 0.5,
                            borderColor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.2)'
                              : 'rgba(0, 0, 0, 0.2)',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            height: { xs: 24, sm: 32 },
                            transition: 'all 0.3s ease-in-out',
                          }}
                        />
                      ))}
                    </Box>

                    <Button
                      component={RouterLink}
                      to={`/services?tab=${index}`}
                      variant="outlined"
                      color="primary"
                      sx={{
                        alignSelf: 'center',
                        mt: 'auto',
                        width: 'fit-content',
                      }}
                    >
                      {t('services.viewMore')}
                    </Button>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection; 