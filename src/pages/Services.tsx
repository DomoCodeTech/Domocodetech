import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  alpha,
  Chip,
  Stack,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ServiceIcon } from '../components/icons/ServiceIcons';
import { SITE_DATA } from '../constants/siteData';
import { Link as RouterLink } from 'react-router-dom';
import { MdArrowForward, MdCheck } from 'react-icons/md';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedTab, setSelectedTab] = useState(0);

  const services = [
    {
      key: 'software',
      icon: 'Code',
      image: SITE_DATA.images.services.software,
      features: t('services.software.features', { returnObjects: true }) as string[],
      techStack: ['React', 'Node.js', 'Python', 'MongoDB', 'Firebase']
    },
    {
      key: 'microcontrollers',
      icon: 'Chip',
      image: SITE_DATA.images.services.electronics,
      features: t('services.microcontrollers.features', { returnObjects: true }) as string[],
      techStack: ['Arduino', 'Raspberry Pi', 'ESP32', 'PIC', 'STM32']
    },
    {
      key: 'domotics',
      icon: 'Smart',
      image: SITE_DATA.images.services.domotics,
      features: t('services.domotics.features', { returnObjects: true }) as string[],
      techStack: ['Home Assistant', 'Zigbee', 'Z-Wave', 'MQTT', 'KNX']
    },
    {
      key: 'electronics',
      icon: 'Robot',
      image: SITE_DATA.images.services.robotics,
      features: t('services.electronics.features', { returnObjects: true }) as string[],
      techStack: ['Altium', 'KiCad', 'Eagle', 'Proteus', 'Fusion 360']
    },
    {
      key: 'networks',
      icon: 'Network',
      image: SITE_DATA.images.services.automation,
      features: t('services.networks.features', { returnObjects: true }) as string[],
      techStack: ['Cisco', 'Ubiquiti', 'pfSense', 'MikroTik', 'OpenWrt']
    },
    {
      key: 'support',
      icon: 'Support',
      image: SITE_DATA.images.services.support,
      features: t('services.support.features', { returnObjects: true }) as string[],
      techStack: ['Windows', 'Linux', 'macOS', 'Android', 'iOS']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)'
          : 'linear-gradient(180deg, #F0F7FF 0%, #E6FFF6 100%)',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              position: 'relative',
              textAlign: 'center',
              mb: { xs: 6, md: 12 },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: '100%', md: '600px' },
                height: { xs: '100%', md: '600px' },
                background: theme.palette.mode === 'dark'
                  ? 'radial-gradient(circle, rgba(0, 255, 163, 0.15) 0%, rgba(0, 255, 163, 0) 70%)'
                  : 'radial-gradient(circle, rgba(0, 128, 94, 0.15) 0%, rgba(0, 128, 94, 0) 70%)',
                filter: 'blur(60px)',
                zIndex: 0,
              }
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)'
                  : 'linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {t('services.title')}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: { xs: 4, md: 8 },
                px: { xs: 2, sm: 0 },
                fontSize: { xs: '1rem', sm: '1.25rem' },
                position: 'relative',
                zIndex: 1,
              }}
            >
              {t('services.subtitle')}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                px: { xs: 2, sm: 0 },
                color: 'text.secondary',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                lineHeight: 1.8,
              }}
            >
              {t('services.introduction')}
            </Typography>

            <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
              {[1, 2, 3].map((num) => (
                <Grid item xs={12} sm={4} key={num}>
                  <Box
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {t(`services.highlight${num}.title`)}
                    </Typography>
                    <Typography variant="body2">
                      {t(`services.highlight${num}.description`)}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Service Categories Tabs */}
        <Box sx={{ mb: 6 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3,
                borderRadius: '3px',
              },
              '& .MuiTab-root': {
                color: 'text.secondary',
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 500,
                textTransform: 'none',
                minWidth: { xs: 'auto', md: 160 },
                px: { xs: 2, md: 3 },
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {services.map((service, index) => (
              <Tab
                key={service.key}
                label={t(`services.${service.key}.title`)}
                icon={<ServiceIcon name={service.icon} sx={{ fontSize: 24 }} />}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Box>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: '100%',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                      : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ position: 'relative', height: 300 }}>
                    <CardMedia
                      component="img"
                      image={services[selectedTab].image}
                      alt={t(`services.${services[selectedTab].key}.title`)}
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        p: 3,
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'white',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          fontWeight: 700,
                        }}
                      >
                        {t(`services.${services[selectedTab].key}.title`)}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 4,
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                      }}
                    >
                      {t(`services.${services[selectedTab].key}.description`)}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      size="large"
                      endIcon={<MdArrowForward />}
                      sx={{
                        width: '100%',
                        py: 1.5,
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
                      {t('common.contactUs')}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={4}>
                  {/* Features */}
                  <Card
                    sx={{
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 3,
                          fontWeight: 600,
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                        }}
                      >
                        Features
                      </Typography>
                      <Stack spacing={2}>
                        {services[selectedTab].features.map((feature, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: theme.palette.mode === 'dark'
                                  ? 'rgba(0, 255, 163, 0.1)'
                                  : 'rgba(0, 128, 94, 0.1)',
                                color: 'primary.main',
                              }}
                            >
                              <MdCheck size={16} />
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: 'text.secondary',
                                fontSize: '1rem',
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>

                  {/* Tech Stack */}
                  <Card
                    sx={{
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 3,
                          fontWeight: 600,
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                        }}
                      >
                        Tech Stack
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                        }}
                      >
                        {services[selectedTab].techStack.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            sx={{
                              background: theme.palette.mode === 'dark'
                                ? 'rgba(0, 255, 163, 0.1)'
                                : 'rgba(0, 128, 94, 0.1)',
                              color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                              borderRadius: '8px',
                              '&:hover': {
                                background: theme.palette.mode === 'dark'
                                  ? 'rgba(0, 255, 163, 0.2)'
                                  : 'rgba(0, 128, 94, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Services;