import React from 'react';
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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import { Link as RouterLink } from 'react-router-dom';

const TechnologyConsulting = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <TrendingUpIcon />,
      title: 'Strategic Planning',
      description: 'Develop comprehensive technology strategies aligned with business goals'
    },
    {
      icon: <LightbulbIcon />,
      title: 'Innovation Solutions',
      description: 'Identify and implement innovative technologies to drive business growth'
    },
    {
      icon: <BarChartIcon />,
      title: 'Performance Optimization',
      description: 'Analyze and optimize technology infrastructure for maximum efficiency'
    },
    {
      icon: <GroupsIcon />,
      title: 'Team Development',
      description: 'Build and train high-performing technology teams'
    },
    {
      icon: <SecurityIcon />,
      title: 'Risk Management',
      description: 'Identify and mitigate technology risks and security threats'
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
            Technology Consulting
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Empowering businesses through strategic technology solutions
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
                    Service Overview
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Our technology consulting services help businesses navigate the complex digital landscape and make informed decisions about their technology investments. We provide strategic guidance and practical solutions to drive digital transformation and business growth.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    With deep expertise in various technology domains, we help organizations optimize their technology infrastructure, improve operational efficiency, and achieve their business objectives.
                  </Typography>
                </CardContent>
              </Card>

              <Typography variant="h6" gutterBottom>
                Key Services
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
                    Areas of Expertise
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {expertise.map((area, index) => (
                      <Chip
                        key={index}
                        label={area}
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
                    Consulting Process
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
              Schedule a Consultation
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TechnologyConsulting; 