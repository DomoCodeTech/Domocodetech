import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloudIcon from '@mui/icons-material/Cloud';

const services = [
  {
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    title: 'AI Development',
    description: 'Custom AI solutions tailored to your specific business needs and objectives.',
  },
  {
    icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
    title: 'Machine Learning',
    description: 'Advanced ML models that learn and adapt to your data patterns.',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    title: 'Natural Language Processing',
    description: 'Transform how you process and understand text with our NLP solutions.',
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    title: 'Computer Vision',
    description: 'Implement cutting-edge visual recognition and processing systems.',
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 40 }} />,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with advanced analytics.',
  },
  {
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    title: 'Cloud AI Solutions',
    description: 'Scalable AI services deployed on leading cloud platforms.',
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        background: '#0A0A0A',
        py: { xs: 8, md: 12 },
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
              background: 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            What we offer
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
            Discover our comprehensive range of AI services designed to transform your business
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0, 255, 163, 0.1)',
                      border: '1px solid rgba(0, 255, 163, 0.2)',
                      '& .service-icon': {
                        color: '#00FFA3',
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      color: 'white',
                      mb: 2,
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    {service.description}
                  </Typography>
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