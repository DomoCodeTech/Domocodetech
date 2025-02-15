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
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudIcon from '@mui/icons-material/Cloud';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SecurityIcon from '@mui/icons-material/Security';
import { Link as RouterLink } from 'react-router-dom';

const MobileApplication = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <PhoneAndroidIcon />,
      title: 'Native Performance',
      description: 'High-performance native applications for iOS and Android platforms'
    },
    {
      icon: <SpeedIcon />,
      title: 'Smooth UX',
      description: 'Fluid animations and responsive interactions for the best user experience'
    },
    {
      icon: <CloudIcon />,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services and backend systems'
    },
    {
      icon: <NotificationsActiveIcon />,
      title: 'Push Notifications',
      description: 'Real-time updates and engagement through push notifications'
    },
    {
      icon: <SecurityIcon />,
      title: 'Secure Data',
      description: 'Advanced security measures to protect user data and privacy'
    }
  ];

  const techStack = [
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase',
    'AWS Amplify', 'GraphQL', 'Redux', 'SQLite', 'Jest'
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
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)'
                : 'linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Mobile Application Development
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Building innovative mobile experiences for iOS and Android
          </Typography>

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
                    Our mobile application development service delivers high-quality, native mobile applications for both iOS and Android platforms. We focus on creating engaging user experiences while ensuring optimal performance and reliability.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    From concept to deployment, we handle every aspect of mobile app development, including UI/UX design, development, testing, and ongoing maintenance.
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
                      'Market Research',
                      'UI/UX Design',
                      'Native Development',
                      'Testing & QA',
                      'App Store Submission',
                      'Maintenance & Updates'
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

export default MobileApplication; 