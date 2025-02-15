import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Advanced analytics platform using machine learning to provide predictive insights.',
    image: '/projects/analytics.jpg',
    category: 'Machine Learning',
  },
  {
    title: 'Computer Vision System',
    description: 'Real-time object detection and recognition system for manufacturing.',
    image: '/projects/vision.jpg',
    category: 'Computer Vision',
  },
  {
    title: 'NLP Chatbot Solution',
    description: 'Intelligent customer service automation using natural language processing.',
    image: '/projects/chatbot.jpg',
    category: 'Natural Language Processing',
  },
  {
    title: 'Predictive Maintenance AI',
    description: 'AI system for predicting equipment maintenance needs in industrial settings.',
    image: '/projects/maintenance.jpg',
    category: 'AI Development',
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        background: '#1A1A1A',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Some of our work
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: 'text.secondary',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Explore our latest projects and see how we've helped businesses transform with AI
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      '& .project-overlay': {
                        opacity: 1,
                      },
                      '& .project-image': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box
                    className="project-image"
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 400,
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.8)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 4,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: '#00FFA3',
                        mb: 1,
                      }}
                    >
                      {project.category}
                    </Typography>
                    <Typography
                      variant="h4"
                      align="center"
                      sx={{
                        color: 'white',
                        mb: 2,
                        fontWeight: 600,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 