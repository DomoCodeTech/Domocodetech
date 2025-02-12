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
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Carlos Rodríguez',
      position: 'team.member1.position',
      image: '/images/team/tech-expert-1.jpg',
      description: 'team.member1.description',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Ana Martínez',
      position: 'team.member2.position',
      image: '/images/team/tech-expert-2.jpg',
      description: 'team.member2.description',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'David Kim',
      position: 'team.member3.position',
      image: '/images/team/tech-expert-3.jpg',
      description: 'team.member3.description',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
        >
          {t('team.title')}
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          {t('team.subtitle')}
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
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
                      {t(member.position)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {t(member.description)}
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