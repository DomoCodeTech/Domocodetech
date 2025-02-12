import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Chip,
  Stack,
  Pagination,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useTranslation } from 'react-i18next';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const posts = t('blog.featuredPosts', { returnObjects: true }) as BlogPost[];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            className="gradient-text"
          >
            {t('blog.title')}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            {t('blog.subtitle')}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={t('blog.searchPlaceholder')}
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                sx: {
                  bgcolor: alpha(theme.palette.background.paper, 0.1),
                  '&:hover': {
                    bgcolor: alpha(theme.palette.background.paper, 0.2)
                  }
                }
              }}
            />
          </Box>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mb: 6 }}
          >
            {Object.entries(t('blog.categories', { returnObjects: true })).map(([key, value]) => (
              <Chip
                key={key}
                label={value}
                color="primary"
                sx={{ m: 0.5 }}
                className="hover-glow"
              />
            ))}
          </Stack>

          <Grid container spacing={4}>
            {filteredPosts.map((post, index) => (
              <Grid item xs={12} md={4} key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="hover-glow">
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: 2 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <PersonIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          <Typography variant="caption">
                            {post.author}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <DateRangeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          <Typography variant="caption">
                            {new Date(post.date).toLocaleDateString()}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          <Typography variant="caption">
                            {post.readTime}
                          </Typography>
                        </Box>
                      </Stack>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="hover-glow"
                      >
                        {t('blog.readMore')}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {filteredPosts.length > 6 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={Math.ceil(filteredPosts.length / 6)}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Blog; 