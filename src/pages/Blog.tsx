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

interface BlogProps {
  isEnglish: boolean;
}

const Blog = ({ isEnglish }: BlogProps) => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const content = {
    title: isEnglish ? 'Tech Blog' : 'Blog Tecnológico',
    subtitle: isEnglish 
      ? 'Latest insights in technology and innovation' 
      : 'Últimas novedades en tecnología e innovación',
    searchPlaceholder: isEnglish ? 'Search articles...' : 'Buscar artículos...',
    categories: [
      { label: isEnglish ? 'Home Automation' : 'Domótica', color: 'primary' },
      { label: isEnglish ? 'Electronics' : 'Electrónica', color: 'secondary' },
      { label: isEnglish ? 'Robotics' : 'Robótica', color: 'info' },
      { label: isEnglish ? 'Software' : 'Software', color: 'success' },
      { label: isEnglish ? 'AI' : 'IA', color: 'warning' }
    ],
    readMore: isEnglish ? 'Read More' : 'Leer Más',
    posts: [
      {
        title: isEnglish 
          ? 'The Future of Smart Homes' 
          : 'El Futuro de los Hogares Inteligentes',
        excerpt: isEnglish
          ? 'Discover how AI and IoT are transforming our homes into intelligent living spaces.'
          : 'Descubre cómo la IA y el IoT están transformando nuestros hogares en espacios inteligentes.',
        image: '/images/blog/smart-home.jpg',
        author: 'Carlos Rodríguez',
        date: '2024-03-15',
        readTime: '5 min',
        category: isEnglish ? 'Home Automation' : 'Domótica'
      },
      {
        title: isEnglish 
          ? 'Robotics in Modern Industry' 
          : 'La Robótica en la Industria Moderna',
        excerpt: isEnglish
          ? 'How industrial robots are revolutionizing manufacturing processes.'
          : 'Cómo los robots industriales están revolucionando los procesos de fabricación.',
        image: '/images/blog/robotics.jpg',
        author: 'Ana Martínez',
        date: '2024-03-10',
        readTime: '7 min',
        category: isEnglish ? 'Robotics' : 'Robótica'
      },
      {
        title: isEnglish 
          ? 'AI in Daily Life' 
          : 'La IA en la Vida Diaria',
        excerpt: isEnglish
          ? 'Exploring the impact of artificial intelligence in our everyday activities.'
          : 'Explorando el impacto de la inteligencia artificial en nuestras actividades diarias.',
        image: '/images/blog/ai.jpg',
        author: 'David Kim',
        date: '2024-03-05',
        readTime: '6 min',
        category: isEnglish ? 'AI' : 'IA'
      }
    ]
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const filteredPosts = content.posts.filter(post =>
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
            {content.title}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            {content.subtitle}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={content.searchPlaceholder}
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
            {content.categories.map((category) => (
              <Chip
                key={category.label}
                label={category.label}
                color={category.color as any}
                sx={{ m: 0.5 }}
                className="hover-glow"
              />
            ))}
          </Stack>

          <Grid container spacing={4}>
            {filteredPosts.map((post, index) => (
              <Grid item xs={12} md={4} key={post.title}>
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
                        {content.readMore}
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