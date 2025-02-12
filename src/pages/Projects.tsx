import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../constants/siteData';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';

const projectIcons: Record<string, React.ElementType> = {
  web: ComputerIcon,
  mobile: PhoneIphoneIcon,
  software: CodeIcon,
};

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  // Lista de proyectos (las claves usadas en las traducciones y SITE_DATA)
  const projects = ['web', 'mobile', 'software'];

  // Animación para contenedor
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
  };

  // Animación para cada ítem
  const itemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <Container sx={{ py: 4 }}>
      <motion.div {...containerAnimation}>
        <Typography variant="h3" align="center" gutterBottom>
          {t('projects.title')}
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
          {t('projects.subtitle')}
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => {
            const projectImage = SITE_DATA.projects.images[
              project as keyof typeof SITE_DATA.projects.images
            ];
            // Se intenta leer la lista de características (si la llave existe en las traducciones)
            const features =
              ((t(`projects.${project}.features`, { returnObjects: true }) as string[]) || []);
            const Icon = projectIcons[project as keyof typeof projectIcons];

            return (
              <Grid item xs={12} key={project}>
                <motion.div {...itemAnimation}>
                  <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                    {projectImage && (
                      <CardMedia
                        component="img"
                        height="250"
                        image={projectImage}
                        alt={t(`projects.${project}.title`)}
                        sx={{ objectFit: 'cover' }}
                      />
                    )}
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {Icon && <Icon sx={{ fontSize: 40, mr: 1, color: 'primary.main' }} />}
                        <Typography variant="h4">
                          {t(`projects.${project}.title`)}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {t(`projects.${project}.description`)}
                      </Typography>
                      {features.length > 0 && (
                        <>
                          <Divider sx={{ my: 2 }} />
                          <Typography variant="subtitle1" gutterBottom>
                            {t('projects.featuresTitle', 'Características')}
                          </Typography>
                          <List>
                            {features.map((feature, index) => (
                              <ListItem key={index} sx={{ py: 0 }}>
                                <ListItemText primary={feature} />
                              </ListItem>
                            ))}
                          </List>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ProjectsPage; 