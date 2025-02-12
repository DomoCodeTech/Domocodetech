import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BuildIcon from '@mui/icons-material/Build';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { alpha, useTheme } from '@mui/material/styles';
import { SITE_DATA } from '../constants/siteData';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const serviceIds = ['domotics', 'electronics', 'robotics', 'software'];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4
            }}
          >
            {t('services.title')}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            {t('services.subtitle')}
          </Typography>

          <Grid container spacing={4}>
            {serviceIds.map((serviceId, index) => (
              <Grid item xs={12} md={6} lg={3} key={serviceId}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    className="hover-glow"
                    sx={{
                      height: '100%',
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        border: `1px solid ${theme.palette.primary.main}`
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={SITE_DATA.images.services[serviceId as keyof typeof SITE_DATA.images.services]}
                      alt={t(`services.${serviceId}.title`)}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {SITE_DATA.icons[serviceId as keyof typeof SITE_DATA.icons] === 'Smart' && (
                          <HomeRepairServiceIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                        )}
                        {SITE_DATA.icons[serviceId as keyof typeof SITE_DATA.icons] === 'Circuit' && (
                          <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                        )}
                        {SITE_DATA.icons[serviceId as keyof typeof SITE_DATA.icons] === 'Robot' && (
                          <ElectricBoltIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                        )}
                        {SITE_DATA.icons[serviceId as keyof typeof SITE_DATA.icons] === 'Code' && (
                          <ElectricBoltIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                        )}
                        <Typography
                          variant="h6"
                          sx={{
                            ml: 1,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold'
                          }}
                        >
                          {t(`services.${serviceId}.title`)}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        {t(`services.${serviceId}.shortDescription`)}
                      </Typography>
                      <Button
                        component={Link}
                        to="/services"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        sx={{
                          mt: 'auto',
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            color: 'white'
                          }
                        }}
                      >
                        {t('common.readMore')}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection; 