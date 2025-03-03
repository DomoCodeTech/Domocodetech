import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BlogPostCard from './BlogPostCard';

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

interface BlogPostGridProps {
  posts: BlogPost[];
}

const BlogPostGrid: React.FC<BlogPostGridProps> = ({ posts }) => {
  const { t } = useTranslation();

  if (posts.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          {t('blog.noResults')}
        </Typography>
      </Box>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <BlogPostCard post={post} index={index} />
          </Grid>
        ))}
      </Grid>
    </AnimatePresence>
  );
};

export default BlogPostGrid;
