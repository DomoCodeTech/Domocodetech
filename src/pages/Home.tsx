import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BuildIcon from '@mui/icons-material/Build';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import { SITE_DATA } from '../constants/siteData';

interface HomeProps {
  isEnglish: boolean;
}

const Home: React.FC<HomeProps> = ({ isEnglish }) => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" component="h1" gutterBottom>
                  {SITE_DATA.company.slogan}
                </Typography>
                <Typography variant="h5" paragraph>
                  Your trusted partner for all electrical needs. Available 24/7.
                </Typography>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Get Free Quote
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={SITE_DATA.images.hero.main}
                  alt="Electrician at work"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" paragraph>
          Professional solutions for all your electrical needs
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {SITE_DATA.services.map((service, index) => (
            <Grid item xs={12} md={4} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={SITE_DATA.images.services[service.id as keyof typeof SITE_DATA.images.services]}
                    alt={service.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {service.icon === 'HomeRepairService' && <HomeRepairServiceIcon sx={{ fontSize: 40 }} />}
                      {service.icon === 'Business' && <BuildIcon sx={{ fontSize: 40 }} />}
                      {service.icon === 'ElectricBolt' && <ElectricBoltIcon sx={{ fontSize: 40 }} />}
                      <Typography variant="h6" sx={{ ml: 1 }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {service.shortDescription}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Team />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                Ready to Get Started?
              </Typography>
              <Typography variant="h6">
                Contact us today for a free consultation and quote.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="primary"
                size="large"
                sx={{ bgcolor: 'white', color: 'secondary.main', '&:hover': { bgcolor: 'grey.100' } }}
              >
                Contact Us Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 