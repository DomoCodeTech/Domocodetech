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
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import {
  MdWorkHistory,
  MdDoneAll,
  MdPeople,
  MdGroups,
} from 'react-icons/md';

const Stats = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Extraer el número y el sufijo del string (ejemplo: "10+" -> { value: 10, suffix: "+" })
  const parseNumberString = (str: string) => {
    const value = parseInt(str);
    const suffix = str.replace(/[0-9]/g, '');
    return { value, suffix };
  };

  const stats = t('about.stats', { returnObjects: true }) as Array<{
    number: string;
    label: string;
  }>;

  // Iconos para cada estadística
  const statIcons = [
    { Icon: MdWorkHistory, color: '#00FFA3' },  // Años de experiencia
    { Icon: MdDoneAll, color: '#FF6B6B' },      // Proyectos completados
    { Icon: MdPeople, color: '#4DABF7' },       // Clientes satisfechos
    { Icon: MdGroups, color: '#FFD93D' },       // Miembros del equipo
  ];

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? '#1A1A1A'
          : '#F8FAFF',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => {
            const { value, suffix } = parseNumberString(stat.number);
            const { Icon, color } = statIcons[index];

            return (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 2,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                        : 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFF 100%)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 4px 30px rgba(0, 255, 163, 0.1)'
                        : '0 4px 30px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease-in-out',
                        '& .stat-icon': {
                          transform: 'scale(1.1)',
                          color: color,
                        }
                      },
                    }}
                  >
                    <Box
                      className="stat-icon"
                      sx={{
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        '& > svg': {
                          fontSize: '2.5rem',
                          color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                          transition: 'all 0.3s ease-in-out',
                        },
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.mode === 'dark'
                          ? 'white'
                          : 'text.primary',
                      }}
                    >
                      <CountUp end={value} duration={2.5} />
                      {suffix}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats; 