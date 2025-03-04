import React from 'react';
import {
  Box,
  Stack,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  alpha,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface BlogFiltersProps {
  selectedCategory: string;
  sortOrder: 'newest' | 'oldest';
  onCategoryChange: (category: string) => void;
  onSortChange: (event: any) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  selectedCategory,
  sortOrder,
  onCategoryChange,
  onSortChange
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const categories = t('blog.categories', { returnObjects: true }) as { [key: string]: string };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 3, md: 2 },
        mb: 4,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        sx={{
          flex: 1,
          gap: 1,
          mb: { xs: 2, md: 0 },
        }}
      >
        {Object.entries(categories).map(([key, value]) => (
          <Chip
            key={key}
            label={value}
            color={selectedCategory === key ? 'primary' : 'default'}
            onClick={() => onCategoryChange(key)}
            sx={{
              m: 0.5,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              },
            }}
          />
        ))}
      </Stack>

      <FormControl
        sx={{
          minWidth: { xs: '100%', md: 200 },
          bgcolor: alpha(theme.palette.background.paper, 0.1),
          borderRadius: 1,
        }}
      >
        <InputLabel>{t('blog.sortBy')}</InputLabel>
        <Select
          value={sortOrder}
          onChange={onSortChange}
          label={t('blog.sortBy')}
        >
          <MenuItem value="newest">{t('blog.newest')}</MenuItem>
          <MenuItem value="oldest">{t('blog.oldest')}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BlogFilters;
