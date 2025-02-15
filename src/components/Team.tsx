import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';
import { SITE_DATA } from '../constants/siteData';

const Team = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const teamMembers = [
    {
      name: t('team.member1.name'),
      position: t('team.member1.position'),
      image: SITE_DATA.images.team.member1,
      description: t('team.member1.description'),
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: t('team.member2.name'),
      position: t('team.member2.position'),
      image: SITE_DATA.images.team.member2,
      description: t('team.member2.description'),
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: t('team.member3.name'),
      position: t('team.member3.position'),
      image: SITE_DATA.images.team.member3,
      description: t('team.member3.description'),
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)'
          : 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
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
              color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
            }}
          >
            {t('team.title')}
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
            {t('team.subtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)'
                      : '#FFFFFF',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0, 0, 0, 0.5)'
                      : '0 8px 32px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 40px rgba(0, 0, 0, 0.7)'
                        : '0 12px 40px rgba(0, 0, 0, 0.12)',
                      '& .member-image': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '75%', // 4:3 aspect ratio
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={member.name}
                      className="member-image"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                      }}
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                      }}
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
                        sx={{
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
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