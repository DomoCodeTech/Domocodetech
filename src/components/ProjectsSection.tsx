/**
 * ProjectsSection.tsx
 * Componente que muestra los proyectos principales de la empresa:
 * - Proyectos destacados en diversas áreas
 * 
 * Cada proyecto incluye:
 * - Icono representativo
 * - Título
 * - Descripción corta
 * - Lista de características (tecnologías, funcionalidades, etc.)
 * - Botón para más información
 */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Container,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../constants/siteData';
import { useTheme } from '@mui/material/styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      key: 'web',
      image: SITE_DATA.projects.images.web,
      features: ['responsive', 'cross-browser', 'modern-ui']
    },
    {
      key: 'mobile',
      image: SITE_DATA.projects.images.mobile,
      features: ['user-friendly', 'performance', 'api-integration']
    },
    {
      key: 'software',
      image: SITE_DATA.projects.images.software,
      features: ['custom-design', 'architecture', 'cross-platform']
    },
    {
      key: 'iot',
      image: SITE_DATA.projects.images.software, // Usar una imagen apropiada
      features: ['smart-devices', 'real-time', 'cloud-integration']
    },
    {
      key: 'ecommerce',
      image: SITE_DATA.projects.images.web, // Usar una imagen apropiada
      features: ['payment-gateway', 'inventory', 'analytics']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const projectsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getVisibleProjects = () => {
    const start = currentPage * projectsPerPage;
    const end = start + projectsPerPage;
    
    // Crear un array circular para transición suave
    const wrappedProjects = [...projects];
    if (end > projects.length) {
      wrappedProjects.push(...projects.slice(0, end - projects.length));
    }
    
    return wrappedProjects.slice(start, end);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)'
          : 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
        overflow: 'hidden', // Prevenir scroll horizontal durante animaciones
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            mb: 2,
            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
          }}
        >
          {t('projects.title')}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          {t('projects.subtitle')}
        </Typography>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '450px', md: '400px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: -20, md: -40 },
              zIndex: 2,
              color: 'primary.main',
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
              },
            }}
          >
            <MdChevronLeft size={32} />
          </IconButton>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                style={{
                  position: 'absolute',
                  display: 'flex',
                  gap: '24px',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                {getVisibleProjects().map((project, index) => (
                  <Card
                    key={`${currentPage}-${index}`}
                    sx={{
                      width: isMobile ? '100%' : '350px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                        : '#FFFFFF',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(0, 0, 0, 0.5)'
                        : '0 8px 32px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 12px 40px rgba(0, 0, 0, 0.7)'
                          : '0 12px 40px rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={t(`projects.${project.key}.title`)}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {t(`projects.${project.key}.title`)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {t(`projects.${project.key}.description`)}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                            mb: 1,
                          }}
                        >
                          {t('projects.featuresTitle')}:
                        </Typography>
                        {project.features.map((feature, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              '&:before': {
                                content: '""',
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                                mr: 1,
                                display: 'inline-block',
                              },
                            }}
                          >
                            {t(`projects.${project.key}.features.${idx}`)}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        component={Link}
                        to={`/projects/${project.key}`}
                        variant="outlined"
                        color="primary"
                        fullWidth
                      >
                        {t('common.readMore')}
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: -20, md: -40 },
              zIndex: 2,
              color: 'primary.main',
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
              },
            }}
          >
            <MdChevronRight size={32} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 