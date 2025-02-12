/**
 * Projects.tsx
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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { SITE_DATA } from '../constants/siteData';

// Mapeo de los iconos para cada tipo de proyecto
const projectIcons: Record<string, React.ElementType> = {
  web: ComputerIcon,
  mobile: PhoneIphoneIcon,
  software: CodeIcon
};

const Projects = () => {
  const { t } = useTranslation();

  // Animaciones para contenedor e ítems
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 }
  };

  const itemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  // Lista de proyectos (corresponde con las claves en tus traducciones)
  const projects = ['web', 'mobile', 'software'];

  return (
    <Box component="section" sx={{ padding: '2rem 0' }}>
      {/* Título y subtítulo de la sección */}
      <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
        {t('projects.title')}
      </Typography>
      <Typography variant="h5" component="p" align="center" color="text.secondary" sx={{ mb: 8 }}>
        {t('projects.subtitle')}
      </Typography>

      {/* Grid de tarjetas de proyectos */}
      <motion.div {...containerAnimation}>
        <Grid container spacing={4}>
          {projects.map((project) => {
            // Se obtiene la lista de características del proyecto, casteándola a string[]
            const features = (t(`projects.${project}.features`, { returnObjects: true }) as string[]) || [];
            // Se obtiene el icono correspondiente al proyecto
            const Icon = projectIcons[project as keyof typeof projectIcons] as React.ElementType | undefined;
            // Se obtiene la imagen del proyecto desde SITE_DATA
            const projectImage = SITE_DATA.projects.images[project as keyof typeof SITE_DATA.projects.images];

            return (
              <Grid item xs={12} md={6} key={project}>
                <motion.div {...itemAnimation}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: 3,
                      borderRadius: 2,
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    {projectImage && (
                      <CardMedia
                        component="img"
                        height="160"
                        image={projectImage}
                        alt={t(`projects.${project}.title`)}
                        sx={{
                          objectFit: 'cover',
                          borderTopLeftRadius: (theme) => theme.spacing(0.5),
                          borderTopRightRadius: (theme) => theme.spacing(0.5),
                        }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1 }}>
                      {/* Icono del proyecto */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 3
                        }}
                      >
                        {Icon && <Icon sx={{ fontSize: 60, color: 'primary.main' }} />}
                      </Box>

                      {/* Título y descripción */}
                      <Typography variant="h5" component="h3" align="center" gutterBottom>
                        {t(`projects.${project}.title`)}
                      </Typography>
                      <Typography color="text.secondary" align="center" paragraph>
                        {t(`projects.${project}.shortDescription`)}
                      </Typography>

                      {/* Lista de características */}
                      <List>
                        {features.map((feature: string, index: number) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>

                    {/* Botón de acción */}
                    <CardActions sx={{ mt: 'auto', justifyContent: 'center', p: 2 }}>
                      <Button
                        component={Link}
                        to={`/projects#${project}`}
                        variant="outlined"
                        color="primary"
                      >
                        {t('common.readMore')}
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects; 