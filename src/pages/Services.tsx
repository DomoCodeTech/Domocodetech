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

interface ServicesProps {
  isEnglish: boolean;
}

const Services: React.FC<ServicesProps> = ({ isEnglish }) => {
  const theme = useTheme();

  const content = {
    title: isEnglish ? 'Our Services' : 'Nuestros Servicios',
    subtitle: isEnglish 
      ? 'Innovative solutions for your technological needs' 
      : 'Soluciones innovadoras para tus necesidades tecnológicas',
    description: isEnglish
      ? 'We offer a comprehensive range of technological services to help you stay ahead in the digital era.'
      : 'Ofrecemos una gama completa de servicios tecnológicos para ayudarte a mantenerte adelante en la era digital.',
    services: [
      {
        icon: <HomeWorkIcon sx={{ fontSize: 40 }} />,
        title: isEnglish ? 'Home Automation' : 'Domótica',
        description: isEnglish
          ? 'Transform your home into a smart living space with our cutting-edge automation solutions.'
          : 'Transforma tu hogar en un espacio inteligente con nuestras soluciones de automatización de vanguardia.',
        image: '/images/services/home-automation.jpg',
        features: isEnglish 
          ? [
              'Smart lighting control',
              'Climate automation',
              'Security systems',
              'Voice control integration'
            ]
          : [
              'Control inteligente de iluminación',
              'Automatización de clima',
              'Sistemas de seguridad',
              'Integración de control por voz'
            ]
      },
      {
        icon: <BuildIcon sx={{ fontSize: 40 }} />,
        title: isEnglish ? 'Electronics' : 'Electrónica',
        description: isEnglish
          ? 'Custom electronic solutions for your specific needs and requirements.'
          : 'Soluciones electrónicas personalizadas para tus necesidades y requerimientos específicos.',
        image: '/images/services/electronics.jpg',
        features: isEnglish
          ? [
              'Circuit design',
              'PCB prototyping',
              'Component repair',
              'System optimization'
            ]
          : [
              'Diseño de circuitos',
              'Prototipado de PCB',
              'Reparación de componentes',
              'Optimización de sistemas'
            ]
      },
      {
        icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
        title: isEnglish ? 'Robotics' : 'Robótica',
        description: isEnglish
          ? 'Advanced robotics solutions for automation and process optimization.'
          : 'Soluciones robóticas avanzadas para automatización y optimización de procesos.',
        image: '/images/services/robotics.jpg',
        features: isEnglish
          ? [
              'Industrial automation',
              'Robot programming',
              'Process optimization',
              'Maintenance services'
            ]
          : [
              'Automatización industrial',
              'Programación de robots',
              'Optimización de procesos',
              'Servicios de mantenimiento'
            ]
      },
      {
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
        title: isEnglish ? 'Software Development' : 'Desarrollo de Software',
        description: isEnglish
          ? 'Custom software solutions to streamline your business processes.'
          : 'Soluciones de software personalizadas para optimizar tus procesos empresariales.',
        image: '/images/services/software.jpg',
        features: isEnglish
          ? [
              'Web applications',
              'Mobile apps',
              'Desktop software',
              'API integration'
            ]
          : [
              'Aplicaciones web',
              'Apps móviles',
              'Software de escritorio',
              'Integración de APIs'
            ]
      }
    ]
  };

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
            {content.title}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 2 }}
          >
            {content.subtitle}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 8 }}
          >
            {content.description}
          </Typography>

          <Grid container spacing={4}>
            {content.services.map((service, index) => (
              <Grid item xs={12} md={6} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="hover-glow"
                    sx={{ 
                      height: '100%',
                      bgcolor: alpha(theme.palette.background.paper, 0.1)
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={service.image}
                      alt={service.title}
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
                          {service.icon}
                          <Typography variant="h5" component="h2">
                            {service.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          paragraph
                        >
                          {service.description}
                        </Typography>
                        <Box component="ul" sx={{ pl: 2 }}>
                          {service.features.map((feature, idx) => (
                            <Typography
                              key={idx}
                              component="li"
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 1 }}
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
                        >
                          {isEnglish ? 'Learn More' : 'Saber Más'}
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