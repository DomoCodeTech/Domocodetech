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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import { Link as RouterLink } from 'react-router-dom';
import { SITE_DATA } from '../../constants/siteData';
import { useTranslation } from 'react-i18next';

const WebApplication = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const features = [
    {
      icon: <DevicesIcon />,
      title: 'Responsive Design',
      description: 'Fully responsive layout that adapts to any screen size and device'
    },
    {
      icon: <SpeedIcon />,
      title: 'High Performance',
      description: 'Optimized for speed with fast loading times and smooth interactions'
    },
    {
      icon: <CodeIcon />,
      title: 'Modern Technologies',
      description: 'Built with the latest web technologies and best practices'
    },
    {
      icon: <StorageIcon />,
      title: 'Scalable Architecture',
      description: 'Designed to grow with your business needs'
    },
    {
      icon: <SecurityIcon />,
      title: 'Security First',
      description: 'Implemented with robust security measures and data protection'
    }
  ];

  const techStack = [
    'React', 'TypeScript', 'Material-UI', 'Node.js', 'Express',
    'MongoDB', 'Redis', 'Docker', 'AWS', 'CI/CD'
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
              src={SITE_DATA.projects.images.web}
              alt={t('projects.web.title')}
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
                {t('projects.web.title')}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  textAlign: 'center',
                  maxWidth: '800px',
                }}
              >
                {t('projects.web.description')}
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
                    Project Overview
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Our web application development service focuses on creating modern, scalable, and efficient solutions that help businesses thrive in the digital age. We combine cutting-edge technologies with user-centered design principles to deliver exceptional web applications.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Whether you need a customer portal, an e-commerce platform, or a complex enterprise application, our team has the expertise to bring your vision to life.
                  </Typography>
                </CardContent>
              </Card>

              <Typography variant="h6" gutterBottom>
                Key Features
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
                    Technology Stack
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {techStack.map((tech, index) => (
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
                    Development Process
                  </Typography>
                  <List>
                    {[
                      'Requirements Analysis',
                      'UI/UX Design',
                      'Development',
                      'Testing & QA',
                      'Deployment',
                      'Maintenance'
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
              Start Your Project
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WebApplication; 