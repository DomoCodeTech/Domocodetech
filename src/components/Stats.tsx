/**
 * Stats.tsx
 * Componente que muestra las estadísticas clave de la empresa:
 * - Años de experiencia
 * - Proyectos completados
 * - Clientes satisfechos
 * - Miembros del equipo
 * 
 * Características:
 * - Animación de contador al hacer scroll
 * - Diseño responsive
 * - Iconos ilustrativos
 * - Traducciones en múltiples idiomas
 */
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Configuración de los iconos para cada estadística
const statIcons = {
  experience: WorkHistoryIcon,
  projects: TaskAltIcon,
  clients: EmojiEventsIcon,
  team: PeopleAltIcon
};

const Stats = () => {
  // Hook de traducción
  const { t } = useTranslation();
  
  // Hook para detectar cuando el componente es visible
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Controlador de animaciones
  const controls = useAnimation();

  // Efecto para iniciar la animación cuando el componente es visible
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Configuración de animaciones
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Datos de las estadísticas
  const stats = t('about.stats', { returnObjects: true }) as { number: string; label: string }[];

  return (
    <Box 
      component="section" 
      ref={ref}
      sx={{ 
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.paper' 
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ px: { xs: 2, md: 4 } }}
        >
          {/* Mapeo de las estadísticas */}
          {stats.map((stat: { number: string; label: string }, index: number) => {
            // Obtiene el icono correspondiente a la estadística
            const Icon = Object.values(statIcons)[index];

            return (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    {/* Icono de la estadística */}
                    <Icon
                      sx={{
                        fontSize: 48,
                        color: 'primary.main',
                        mb: 2
                      }}
                    />
                    
                    {/* Número de la estadística */}
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{
                        fontWeight: 'bold',
                        mb: 1
                      }}
                    >
                      {stat.number}
                    </Typography>
                    
                    {/* Etiqueta de la estadística */}
                    <Typography
                      variant="h6"
                      component="p"
                      color="text.secondary"
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Stats; 