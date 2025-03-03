import React, { useState, useMemo } from 'react';
import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PrismaticBackground from '../components/layout/PrismaticBackground';
import BlogHeader from '../components/blog/BlogHeader';
import BlogFilters from '../components/blog/BlogFilters';
import BlogPostGrid from '../components/blog/BlogPostGrid';
import BlogPagination from '../components/blog/BlogPagination';

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const { t } = useTranslation();

  const posts = t('blog.featuredPosts', { returnObjects: true }) as any[];

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? 'all' : category);
    setPage(1);
  };

  const handleSortChange = (event: any) => {
    setSortOrder(event.target.value);
    setPage(1);
  };

  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts];

    if (selectedCategory !== 'all') {
      result = result.filter(
        (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [posts, selectedCategory, sortOrder]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    return filteredAndSortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredAndSortedPosts, page]);

  const pageCount = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE);

  return (
    <PrismaticBackground>
      <Box sx={{ py: 16, minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <BlogHeader />
          <BlogFilters
            selectedCategory={selectedCategory}
            sortOrder={sortOrder}
            onCategoryChange={handleCategoryClick}
            onSortChange={handleSortChange}
          />
          <BlogPostGrid posts={paginatedPosts} />
          <BlogPagination
            page={page}
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />
        </Container>
      </Box>
    </PrismaticBackground>
  );
};

export default Blog;
