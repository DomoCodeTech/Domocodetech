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

const teamMembers = [
  {
    name: 'John Doe',
    position: 'Master Electrician',
    image: '/images/team/member1.jpg',
    description: '15+ years of experience in residential and commercial electrical services.',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Jane Smith',
    position: 'Electrical Engineer',
    image: '/images/team/member2.jpg',
    description: 'Specialized in smart home automation and energy efficiency solutions.',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Mike Johnson',
    position: 'Service Manager',
    image: '/images/team/member3.jpg',
    description: 'Ensuring top-quality service delivery and customer satisfaction.',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
];

const Team = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
        >
          Meet Our Expert Team
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Professional electricians ready to serve you
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
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
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <FacebookIcon />
                      </IconButton>
                      <IconButton
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <TwitterIcon />
                      </IconButton>
                      <IconButton
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <LinkedInIcon />
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