import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  isEnglish: boolean;
}

interface StatItem {
  number: string;
  label: string;
}

interface ValueItem {
  title: string;
  description: string;
}

const About: React.FC<AboutProps> = ({ isEnglish }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const stats = t('about.stats', { returnObjects: true }) as StatItem[];
  const values = t('about.values.items', { returnObjects: true }) as ValueItem[];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
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
            {t('about.title')}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            {t('about.subtitle')}
          </Typography>

          {/* Stats Section */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="hover-glow"
                    sx={{
                      bgcolor: alpha(theme.palette.background.paper, 0.1),
                      border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        border: `2px solid ${theme.palette.primary.main}`,
                      }
                    }}
                  >
                    <CardContent>
                      <Typography 
                        variant="h3" 
                        textAlign="center" 
                        className="gradient-text"
                        sx={{ fontWeight: 'bold' }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        textAlign="center" 
                        color="text.secondary"
                        sx={{ mt: 1, fontWeight: 500 }}
                      >
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Mission & Vision */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card 
                  className="hover-glow"
                  sx={{
                    height: '100%',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={t('about.mission.image')}
                    alt={t('about.mission.title')}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography 
                      variant="h4" 
                      gutterBottom
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      {t('about.mission.title')}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {t('about.mission.description')}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card 
                  className="hover-glow"
                  sx={{
                    height: '100%',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.1)} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={t('about.vision.image')}
                    alt={t('about.vision.title')}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography 
                      variant="h4" 
                      gutterBottom
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      {t('about.vision.title')}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {t('about.vision.description')}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Values */}
          <Typography 
            variant="h3" 
            textAlign="center" 
            gutterBottom
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              mb: 4
            }}
          >
            {t('about.values.title')}
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card 
                    className="hover-glow"
                    sx={{
                      height: '100%',
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        border: `1px solid ${theme.palette.primary.main}`,
                      }
                    }}
                  >
                    <CardContent>
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{ 
                          color: 'primary.main',
                          fontWeight: 'bold'
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {value.description}
                      </Typography>
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

export default About; 