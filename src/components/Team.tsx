import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface TeamProps {
  isEnglish: boolean;
}

const Team = ({ isEnglish }: TeamProps) => {
  const content = {
    title: isEnglish ? 'Meet Our Expert Team' : 'Conoce a Nuestro Equipo',
    subtitle: isEnglish 
      ? 'Technology experts ready to innovate' 
      : 'Expertos en tecnología listos para innovar',
    teamMembers: [
      {
        name: 'Carlos Rodríguez',
        position: isEnglish ? 'Software Architect' : 'Arquitecto de Software',
        image: '/images/team/tech-expert-1.jpg',
        description: isEnglish
          ? '15+ years of experience in software development and system architecture.'
          : '15+ años de experiencia en desarrollo de software y arquitectura de sistemas.',
        social: {
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        name: 'Ana Martínez',
        position: isEnglish ? 'Robotics Engineer' : 'Ingeniera en Robótica',
        image: '/images/team/tech-expert-2.jpg',
        description: isEnglish
          ? 'Specialized in AI and robotics automation systems.'
          : 'Especializada en IA y sistemas de automatización robótica.',
        social: {
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        name: 'David Kim',
        position: isEnglish ? 'IoT Specialist' : 'Especialista en IoT',
        image: '/images/team/tech-expert-3.jpg',
        description: isEnglish
          ? 'Expert in IoT solutions and smart home automation.'
          : 'Experto en soluciones IoT y automatización de hogares inteligentes.',
        social: {
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com'
        }
      }
    ]
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
        >
          {content.title}
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          {content.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {content.teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="hover-glow">
                  <CardMedia
                    component="img"
                    height="300"
                    image={member.image}
                    alt={member.name}
                    sx={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {member.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                    >
                      <IconButton
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        className="hover-glow"
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        className="hover-glow"
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        className="hover-glow"
                      >
                        <TwitterIcon />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team; 