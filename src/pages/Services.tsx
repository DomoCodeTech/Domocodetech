import { Container, Typography, Grid, Box, Card, CardContent, CardActions, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BuildIcon from '@mui/icons-material/Build';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Residential Services',
      icon: <HomeRepairServiceIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: 'Complete electrical solutions for your home',
      features: [
        'Electrical repairs and maintenance',
        'Lighting installation and upgrades',
        'Circuit breaker installation',
        'Home safety inspections',
        'Outlet installation and repair'
      ]
    },
    {
      title: 'Commercial Services',
      icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: 'Professional solutions for businesses',
      features: [
        'Commercial electrical installations',
        'Energy efficiency solutions',
        'Emergency lighting systems',
        'Data and network cabling',
        'Regular maintenance contracts'
      ]
    },
    {
      title: 'Emergency Services',
      icon: <ElectricBoltIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      description: '24/7 emergency electrical support',
      features: [
        'Available 24/7',
        'Rapid response time',
        'Emergency repairs',
        'Power outage solutions',
        'Safety inspections'
      ]
    }
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: '$150',
      description: 'For small electrical tasks',
      features: [
        'Basic electrical repairs',
        'Single room installation',
        'Safety inspection',
        'Phone support',
        '30-day warranty'
      ]
    },
    {
      title: 'Premium',
      price: '$300',
      description: 'For comprehensive electrical work',
      features: [
        'Full house electrical service',
        'Multiple room installations',
        'Circuit upgrades',
        'Priority support',
        '90-day warranty'
      ]
    },
    {
      title: 'Standard',
      price: '$500',
      description: 'For commercial properties',
      features: [
        'Commercial installations',
        'Regular maintenance',
        'Emergency support',
        '24/7 support',
        '1-year warranty'
      ]
    }
  ];

  return (
    <Box>
      {/* Services Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom textAlign="center">
            Our Services
          </Typography>
          <Typography variant="h5" textAlign="center" paragraph>
            Professional electrical services for residential and commercial needs
          </Typography>
        </Container>
      </Box>

      {/* Main Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {service.icon}
                      <Typography variant="h5" sx={{ ml: 2 }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography color="text.secondary" paragraph>
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature) => (
                        <ListItem key={feature}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Pricing Plans */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Pricing Plans
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" paragraph>
            Choose the plan that best fits your needs
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={plan.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h4" component="h3" gutterBottom textAlign="center">
                        {plan.title}
                      </Typography>
                      <Typography variant="h3" component="p" textAlign="center" color="primary.main">
                        {plan.price}
                      </Typography>
                      <Typography textAlign="center" color="text.secondary" paragraph>
                        {plan.description}
                      </Typography>
                      <List>
                        {plan.features.map((feature) => (
                          <ListItem key={feature}>
                            <ListItemIcon>
                              <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Get Started
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Services; 