import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
  Button,
  Tooltip,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  slug: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: (theme) =>
              theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(0, 255, 163, 0.1)'
                : '0 8px 32px rgba(0, 128, 94, 0.1)',
          },
        }}
      >
        <Box sx={{ position: 'relative', pt: '56.25%' }}>
          <CardMedia
            component="img"
            image={post.image}
            alt={post.title}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Chip
              label={t(`blog.categories.${post.category}`)}
              size="small"
              color="primary"
              sx={{ mb: 2 }}
            />
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                height: '3.6em',
                mb: 1,
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                height: '4.5em',
                mb: 2,
              }}
            >
              {post.excerpt}
            </Typography>
          </Box>

          <Box>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Tooltip title={post.author}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="caption" noWrap>
                    {post.author}
                  </Typography>
                </Box>
              </Tooltip>
              <Tooltip title={new Date(post.date).toLocaleDateString()}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DateRangeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="caption" noWrap>
                    {new Date(post.date).toLocaleDateString()}
                  </Typography>
                </Box>
              </Tooltip>
              <Tooltip title={post.readTime}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="caption" noWrap>
                    {post.readTime}
                  </Typography>
                </Box>
              </Tooltip>
            </Stack>
            <Button
              component={RouterLink}
              to={`/blog/${post.slug}`}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('blog.readMore')}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogPostCard;
