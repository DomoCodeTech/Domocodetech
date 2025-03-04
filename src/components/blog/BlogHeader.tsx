import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const BlogHeader: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
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
        sx={{
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)'
            : 'linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2,
        }}
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
    </motion.div>
  );
};

export default BlogHeader;
