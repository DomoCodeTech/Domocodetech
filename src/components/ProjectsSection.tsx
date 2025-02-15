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
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../constants/siteData';
import { useTheme } from '@mui/material/styles';

const Projects = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Lista de proyectos (las claves usadas en las traducciones y en SITE_DATA)
  const projects = ['web', 'mobile', 'software'];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)'
          : 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          gutterBottom 
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

        <motion.div {...fadeInUp}>
          <Grid container spacing={4}>
            {projects.map((project) => {
              const projectImage = SITE_DATA.projects.images[project as keyof typeof SITE_DATA.projects.images];

              return (
                <Grid item xs={12} md={4} key={project}>
                  <motion.div {...fadeInUp}>
                    <Card
                      sx={{
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
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': { 
                          transform: 'translateY(-6px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 12px 40px rgba(0, 0, 0, 0.7)'
                            : '0 12px 40px rgba(0, 0, 0, 0.12)',
                        },
                      }}
                    >
                      {projectImage && (
                        <CardMedia
                          component="img"
                          height="200"
                          image={projectImage}
                          alt={t(`projects.${project}.title`)}
                          sx={{
                            objectFit: 'cover',
                          }}
                        />
                      )}
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Typography 
                          variant="h5" 
                          gutterBottom
                          sx={{
                            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                            fontWeight: 600,
                          }}
                        >
                          {t(`projects.${project}.title`)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t(`projects.${project}.description`)}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 3, pt: 0 }}>
                        <Button 
                          component={Link} 
                          to={`/projects/${project}`}
                          variant="outlined" 
                          color="primary"
                          fullWidth
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
      </Container>
    </Box>
  );
};

export default Projects; 