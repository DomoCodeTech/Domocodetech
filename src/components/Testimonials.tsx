import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Rating,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.client1.name'),
      position: t('testimonials.client1.position'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      quote: t('testimonials.client1.quote'),
      rating: 5
    },
    {
      id: 2,
      name: t('testimonials.client2.name'),
      position: t('testimonials.client2.position'),
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
      quote: t('testimonials.client2.quote'),
      rating: 5
    },
    {
      id: 3,
      name: t('testimonials.client3.name'),
      position: t('testimonials.client3.position'),
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      quote: t('testimonials.client3.quote'),
      rating: 5
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          {t('testimonials.title')}
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  maxWidth: 800,
                  margin: '0 auto',
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: 20,
                      color: 'primary.main',
                      transform: 'scale(2)',
                      opacity: 0.1
                    }}
                  >
                    <FormatQuoteIcon fontSize="large" />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.1rem',
                      fontStyle: 'italic',
                      mb: 4,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      sx={{ width: 64, height: 64 }}
                    />
                    <Box>
                      <Typography variant="h6">
                        {testimonials[currentIndex].name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonials[currentIndex].position}
                      </Typography>
                      <Rating
                        value={testimonials[currentIndex].rating}
                        readOnly
                        size="small"
                        sx={{ mt: 0.5 }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {!isMobile && (
            <>
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: -20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'background.paper',
                  boxShadow: theme.shadows[2],
                  '&:hover': { bgcolor: 'background.paper' }
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: -20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'background.paper',
                  boxShadow: theme.shadows[2],
                  '&:hover': { bgcolor: 'background.paper' }
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
        </Box>

        {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
            <IconButton onClick={handlePrevious} color="primary">
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton onClick={handleNext} color="primary">
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Testimonials; 