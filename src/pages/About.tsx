import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
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
                <Card
                  className="hover-glow"
                  sx={{ bgcolor: alpha(theme.palette.background.paper, 0.1) }}
                >
                  <CardContent>
                    <Typography variant="h3" textAlign="center" className="gradient-text">
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Mission & Vision */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Card className="hover-glow">
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {t('about.mission.title')}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {t('about.mission.description')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="hover-glow">
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {t('about.vision.title')}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {t('about.vision.description')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Values */}
          <Typography variant="h3" textAlign="center" gutterBottom>
            {t('about.values.title')}
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="hover-glow">
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 