import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import { SITE_DATA } from '../../constants/siteData';

const SoftwareConsulting = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const features = [
    {
      icon: <TrendingUpIcon />,
      title: t('projects.features.optimization'),
      description: 'Strategic planning and optimization of technology infrastructure'
    },
    {
      icon: <LightbulbIcon />,
      title: t('projects.features.innovation'),
      description: 'Innovative solutions for complex business challenges'
    },
    {
      icon: <BarChartIcon />,
      title: t('projects.features.analytics'),
      description: 'Data-driven insights and performance analysis'
    },
    {
      icon: <GroupsIcon />,
      title: t('projects.features.scalability'),
      description: 'Scalable solutions for growing businesses'
    },
    {
      icon: <SecurityIcon />,
      title: t('projects.features.security'),
      description: 'Comprehensive security and risk assessment'
    }
  ];

  const expertise = [
    'Digital Transformation', 'Cloud Strategy', 'IT Infrastructure',
    'Cybersecurity', 'Data Analytics', 'Agile Methodologies',
    'DevOps', 'Enterprise Architecture', 'Project Management',
    'Technology Assessment'
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)'
          : 'linear-gradient(180deg, #F0F7FF 0%, #E6FFF6 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <Box
            sx={{
              position: 'relative',
              height: { xs: '200px', md: '400px' },
              mb: 6,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={SITE_DATA.projects.images.consulting}
              alt={t('projects.consulting.title')}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                p: 4,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 2,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {t('projects.consulting.title')}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  textAlign: 'center',
                  maxWidth: '800px',
                }}
              >
                {t('projects.consulting.description')}
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  mb: 4,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFF 100%)',
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {t('projects.projectOverview')}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {t('projects.consulting.overview')}
                  </Typography>
                </CardContent>
              </Card>

              <Typography variant="h6" gutterBottom>
                {t('projects.keyFeatures')}
              </Typography>
              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card
                      sx={{
                        height: '100%',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                          : 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFF 100%)',
                      }}
                    >
                      <CardContent>
                        <Box sx={{ color: 'primary.main', mb: 2 }}>
                          {feature.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  mb: 4,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFF 100%)',
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {t('projects.consulting.techStack')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {expertise.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(0, 255, 163, 0.1)'
                            : 'rgba(0, 128, 94, 0.1)',
                          color: theme.palette.mode === 'dark'
                            ? '#00FFA3'
                            : '#00805E',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFF 100%)',
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {t('projects.developmentProcess')}
                  </Typography>
                  <List>
                    {[
                      'Initial Assessment',
                      'Strategy Development',
                      'Solution Design',
                      'Implementation Support',
                      'Performance Monitoring',
                      'Continuous Improvement'
                    ].map((step, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={step} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                minWidth: 200,
                background: theme.palette.mode === 'dark'
                  ? '#00FFA3'
                  : 'linear-gradient(135deg, #00805E 0%, #00FFA3 100%)',
                color: theme.palette.mode === 'dark' ? '#0A0A0A' : '#FFFFFF',
                '&:hover': {
                  background: theme.palette.mode === 'dark'
                    ? '#00cc82'
                    : 'linear-gradient(135deg, #006C4F 0%, #00E691 100%)',
                },
              }}
            >
              {t('projects.scheduleConsultation')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SoftwareConsulting; 