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
} from '@mui/material';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../constants/siteData';

const Projects = () => {
  const { t } = useTranslation();

  // Definición de animaciones para los contenedores
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 },
  };

  const itemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  // Lista de proyectos (las claves usadas en las traducciones y en SITE_DATA)
  const projects = ['web', 'mobile', 'software'];

  return (
    <Box component="section" sx={{ padding: '2rem 0' }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
        {t('projects.title')}
      </Typography>
      <Typography variant="h5" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
        {t('projects.subtitle')}
      </Typography>

      <motion.div {...containerAnimation}>
        <Grid container spacing={4}>
          {projects.map((project) => {
            // Se obtiene la imagen correspondiente desde SITE_DATA
            const projectImage = SITE_DATA.projects.images[project as keyof typeof SITE_DATA.projects.images];

            return (
              <Grid item xs={12} md={4} key={project}>
                <motion.div {...itemAnimation}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'translateY(-6px)' },
                    }}
                  >
                    {projectImage && (
                      <CardMedia
                        component="img"
                        height="140" // Altura reducida para que la imagen no se vea muy grande
                        image={projectImage}
                        alt={t(`projects.${project}.title`)}
                        sx={{
                          objectFit: 'cover',
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <Typography variant="h5" gutterBottom>
                        {t(`projects.${project}.title`)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t(`projects.${project}.description`)}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                      <Button component={Link} to="/projects" variant="outlined" color="primary">
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