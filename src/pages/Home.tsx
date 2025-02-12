import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BuildIcon from '@mui/icons-material/Build';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import { SITE_DATA } from '../constants/siteData';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

interface HomeProps {
  isEnglish: boolean;
}

const Home: React.FC<HomeProps> = ({ isEnglish }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          overflow: 'hidden',
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
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${SITE_DATA.images.hero.main})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px)',
            transform: 'scale(1.1)'
          }}
        />
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            py: { xs: 12, md: 20 }
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
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
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src={SITE_DATA.images.hero.secondary}
                  alt={t('hero.imageAlt')}
                  sx={{
                    width: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
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

      {/* Services Section */}
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
              {['domotics', 'electronics', 'robotics', 'software'].map((serviceId, index) => (
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
                          border: `1px solid ${theme.palette.primary.main}`,
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
                          {SITE_DATA.icons[serviceId as keyof typeof SITE_DATA.icons] === 'Smart' && <HomeRepairServiceIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
                          {SITE_DATA.icons[serviceId as keyof typeof SITE_DATA.icons] === 'Circuit' && <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
                          {SITE_DATA.icons[serviceId as keyof typeof SITE_DATA.icons] === 'Robot' && <ElectricBoltIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
                          {SITE_DATA.icons[serviceId as keyof typeof SITE_DATA.icons] === 'Code' && <ElectricBoltIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
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
                        <Typography 
                          variant="body1" 
                          color="text.secondary"
                          sx={{ mb: 2, lineHeight: 1.7 }}
                        >
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

      {/* Team Section */}
      <Team isEnglish={isEnglish} />

      {/* Testimonials Section */}
      <Testimonials isEnglish={isEnglish} />

      {/* Call to Action Section */}
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
            opacity: 0.9,
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h3" 
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {t('cta.title')}
                </Typography>
                <Typography 
                  variant="h5"
                  sx={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    mb: { xs: 4, md: 0 }
                  }}
                >
                  {t('cta.subtitle')}
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'secondary.main',
                    py: 2,
                    px: 4,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    borderRadius: '30px',
                    boxShadow: '0 4px 14px 0 rgba(0,0,0,0.25)',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.common.white, 0.9)
                    }
                  }}
                >
                  {t('cta.button')}
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 