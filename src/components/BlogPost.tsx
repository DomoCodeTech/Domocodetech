import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  useTheme,
  Divider,
  Avatar,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    image: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    authorImage?: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: 8,
        minHeight: '100vh',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)'
          : 'linear-gradient(180deg, #F0F7FF 0%, #E6FFF6 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            component="img"
            src={post.image}
            alt={post.title}
            sx={{
              width: '100%',
              height: { xs: 200, md: 400 },
              objectFit: 'cover',
              borderRadius: 2,
              mb: 4,
            }}
          />

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)'
                    : 'linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                {post.title}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}>
                <Chip
                  label={t(`blog.categories.${post.category}`)}
                  color="primary"
                  size="small"
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <DateRangeIcon sx={{ fontSize: 16 }} />
                  <Typography variant="body2">
                    {new Date(post.date).toLocaleDateString()}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <AccessTimeIcon sx={{ fontSize: 16 }} />
                  <Typography variant="body2">{post.readTime}</Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  lineHeight: 1.8,
                  mb: 4,
                  '& p': { mb: 2 },
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: alpha(theme.palette.background.paper, 0.1),
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {t('blog.aboutAuthor')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={post.authorImage}
                    alt={post.author}
                    sx={{ width: 64, height: 64, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {post.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t('blog.authorRole')}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {t('blog.authorBio')}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogPost; 