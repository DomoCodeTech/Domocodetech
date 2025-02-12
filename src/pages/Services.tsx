import React from 'react';
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
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { useTranslation } from 'react-i18next';
import { SITE_DATA } from '../constants/siteData';

interface ServicesProps {
  isEnglish: boolean;
}

const Services: React.FC<ServicesProps> = ({ isEnglish }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const serviceIcons = {
    domotics: <HomeWorkIcon sx={{ fontSize: 40 }} />,
    electronics: <BuildIcon sx={{ fontSize: 40 }} />,
    robotics: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
    software: <CodeIcon sx={{ fontSize: 40 }} />
  };

  const serviceIds = ['domotics', 'electronics', 'robotics', 'software'];

  return (
    <Box sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            className="gradient-text"
          >
            {t('services.title')}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 2 }}
          >
            {t('services.subtitle')}
          </Typography>

          <Grid container spacing={4}>
            {serviceIds.map((serviceId, index) => (
              <Grid item xs={12} md={6} key={serviceId}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="hover-glow"
                    sx={{ 
                      height: '100%',
                      bgcolor: alpha(theme.palette.background.paper, 0.1),
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        border: `1px solid ${theme.palette.primary.main}`,
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={SITE_DATA.images.services[serviceId as keyof typeof SITE_DATA.images.services]}
                      alt={t(`services.${serviceId}.title`)}
                      sx={{ 
                        objectFit: 'cover',
                        borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                      }}
                    />
                    <CardContent>
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 2
                          }}
                        >
                          {serviceIcons[serviceId as keyof typeof serviceIcons]}
                          <Typography 
                            variant="h5" 
                            component="h2"
                            sx={{
                              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              fontWeight: 'bold'
                            }}
                          >
                            {t(`services.${serviceId}.title`)}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          paragraph
                          sx={{ lineHeight: 1.7 }}
                        >
                          {t(`services.${serviceId}.fullDescription`)}
                        </Typography>
                        <Box 
                          component="ul" 
                          sx={{ 
                            pl: 2,
                            listStyleType: 'none',
                            '& li': {
                              position: 'relative',
                              '&::before': {
                                content: '"•"',
                                color: theme.palette.primary.main,
                                fontWeight: 'bold',
                                position: 'absolute',
                                left: '-1em'
                              }
                            }
                          }}
                        >
                          {t(`services.${serviceId}.features`, { returnObjects: true }).map((feature: string, idx: number) => (
                            <Typography
                              key={idx}
                              component="li"
                              variant="body2"
                              color="text.secondary"
                              sx={{ 
                                mb: 1,
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                  color: 'primary.main',
                                  transform: 'translateX(10px)'
                                }
                              }}
                            >
                              {feature}
                            </Typography>
                          ))}
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          className="hover-glow"
                          sx={{
                            mt: 2,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          }}
                        >
                          {t('common.readMore')}
                        </Button>
                      </Stack>
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

export default Services;