import { Box, Typography, useTheme, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const Timeline = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  const milestones = t('timeline.milestones', { returnObjects: true }) as Milestone[];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: { xs: '20px', md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            width: '2px',
            height: '100%',
            background: theme.palette.mode === 'dark' 
              ? 'rgba(255,255,255,0.1)' 
              : 'rgba(0,0,0,0.1)',
            zIndex: 0
          }
        }}
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'row' },
                alignItems: 'center',
                justifyContent: { xs: 'flex-start', md: 'flex-start' },
                gap: { xs: 3, md: 6 },
                mb: 8, // Aumentado el margen entre items
                position: 'relative',
                pl: { xs: 0, md: index % 2 === 0 ? '50%' : '5%' }, // Ajuste de padding
                pr: { xs: 0, md: index % 2 === 0 ? '5%' : '50%' } // Ajuste de padding
              }}
            >
              {/* Dot in timeline */}
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: theme.palette.primary.main,
                  position: 'absolute',
                  left: { xs: '11px', md: '50%' },
                  transform: { xs: 'none', md: 'translateX(-50%)' },
                  zIndex: 1,
                  boxShadow: `0 0 0 4px ${theme.palette.background.default}, 0 0 0 6px ${theme.palette.primary.main}30`
                }}
              />

              {/* Content Card */}
              <Box
                sx={{
                  flex: 1,
                  maxWidth: '100%', // Cambiado para mejor control
                  width: { xs: 'calc(100% - 50px)', md: '90%' }, // Ajustado el ancho
                  ml: { xs: 5, md: 0 } // Eliminado el margen alternado
                }}
              >
                <Box
                  sx={{
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                      : 'white',
                    borderRadius: 2,
                    p: 3,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0, 0, 0, 0.5)'
                      : '0 8px 32px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      mb: 1,
                      color: theme.palette.primary.main
                    }}
                  >
                    {milestone.year}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 2
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <span>{milestone.icon}</span>
                      {milestone.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {milestone.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Timeline;
