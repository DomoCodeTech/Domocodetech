import React from 'react';
import { Box, Pagination, useTheme } from '@mui/material';

interface BlogPaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({
  page,
  pageCount,
  onPageChange,
}) => {
  const theme = useTheme();

  if (pageCount <= 1) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
      <Pagination
        count={pageCount}
        page={page}
        onChange={onPageChange}
        color="primary"
        size="large"
        sx={{
          '& .MuiPaginationItem-root': {
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
            '&.Mui-selected': {
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #00805E 0%, #00FFA3 100%)'
                : 'linear-gradient(135deg, #006C4F 0%, #00E691 100%)',
            },
          },
        }}
      />
    </Box>
  );
};

export default BlogPagination;
