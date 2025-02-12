import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  alpha,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Team from '../components/Team';

interface AboutProps {
  isEnglish: boolean;
}

const About = ({ isEnglish }: AboutProps) => {
  const theme = useTheme();

  const content = {
    title: isEnglish ? 'About Us' : 'Sobre Nosotros',
    subtitle: isEnglish 
      ? 'Innovating for a smarter future' 
      : 'Innovando para un futuro más inteligente',
    description: isEnglish
      ? 'We are a team of passionate technology experts dedicated to transforming ideas into reality through innovative solutions in home automation, electronics, robotics, and software development.'
      : 'Somos un equipo de expertos apasionados por la tecnología, dedicados a transformar ideas en realidad a través de soluciones innovadoras en domótica, electrónica, robótica y desarrollo de software.',
    values: [
      {
        icon: <HomeWorkIcon sx={{ fontSize: 40 }} />,
        title: isEnglish ? 'Innovation' : 'Innovación',
        description: isEnglish
          ? 'We constantly push the boundaries of technology to create innovative solutions.'
          : 'Constantemente expandimos los límites de la tecnología para crear soluciones innovadoras.'
      },
      {
        icon: <BuildIcon sx={{ fontSize: 40 }} />,
        title: isEnglish ? 'Quality' : 'Calidad',
        description: isEnglish
          ? 'We maintain the highest standards in every project we undertake.'
          : 'Mantenemos los más altos estándares en cada proyecto que emprendemos.'
      },
      {
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
        title: isEnglish ? 'Expertise' : 'Experiencia',
        description: isEnglish
          ? 'Our team brings years of experience across multiple technologies.'
          : 'Nuestro equipo aporta años de experiencia en múltiples tecnologías.'
      },
      {
        icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
        title: isEnglish ? 'Innovation' : 'Innovación',
        description: isEnglish
          ? 'We embrace cutting-edge technologies to deliver the best solutions.'
          : 'Adoptamos tecnologías de vanguardia para ofrecer las mejores soluciones.'
      }
    ],
    stats: [
      {
        number: '100+',
        label: isEnglish ? 'Projects Completed' : 'Proyectos Completados'
      },
      {
        number: '50+',
        label: isEnglish ? 'Happy Clients' : 'Clientes Satisfechos'
      },
      {
        number: '10+',
        label: isEnglish ? 'Years Experience' : 'Años de Experiencia'
      },
      {
        number: '24/7',
        label: isEnglish ? 'Technical Support' : 'Soporte Técnico'
      }
    ]
  };

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
            zIndex: 1
          }
        }}
      >
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
              sx={{ position: 'relative', zIndex: 2 }}
            >
              {content.title}
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 6, position: 'relative', zIndex: 2 }}
            >
              {content.subtitle}
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{ 
                maxWidth: 800, 
                mx: 'auto', 
                mb: 8,
                position: 'relative',
                zIndex: 2
              }}
            >
              {content.description}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {content.values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={value.title}>
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
                  <CardContent>
                    <Stack
                      spacing={2}
                      alignItems="center"
                      sx={{ height: '100%' }}
                    >
                      <Box
                        sx={{
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        textAlign="center"
                        gutterBottom
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign="center"
                      >
                        {value.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box
        sx={{
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {content.stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 2
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="div"
                      className="gradient-text"
                      gutterBottom
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Team isEnglish={isEnglish} />
    </Box>
  );
};

export default About; 