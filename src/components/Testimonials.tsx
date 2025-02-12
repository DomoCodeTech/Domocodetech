/**
 * Testimonials.tsx
 * Componente que muestra los testimonios de clientes satisfechos
 * 
 * Características:
 * - Carrusel automático de testimonios
 * - Diseño de tarjetas con foto y cita
 * - Animaciones suaves de transición
 * - Controles de navegación manual
 * - Responsive para todos los dispositivos
 */
import { useTranslation } from 'react-i18next';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Avatar,
  IconButton
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  // Hook de traducción
  const { t } = useTranslation();

  // Estado para el índice del testimonio actual
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Lista de testimonios desde las traducciones
  const testimonials = [
    { key: 'client1', image: '/images/testimonials/client1.jpg' },
    { key: 'client2', image: '/images/testimonials/client2.jpg' },
    { key: 'client3', image: '/images/testimonials/client3.jpg' }
  ];

  // Efecto para el carrusel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Manejadores de navegación
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Variantes de animación para las tarjetas
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        {/* Encabezado de la sección */}
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          {t('testimonials.title')}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          {t('testimonials.subtitle')}
        </Typography>

        {/* Contenedor del carrusel */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: 400, md: 300 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Botones de navegación */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: { xs: 0, md: -20 },
              zIndex: 2
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Carrusel de testimonios */}
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              style={{
                position: 'absolute',
                width: '100%'
              }}
            >
              <Card
                sx={{
                  maxWidth: 800,
                  mx: 'auto',
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                {/* Icono de comillas */}
                <FormatQuoteIcon
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: 40,
                    fontSize: 40,
                    color: 'primary.main',
                    transform: 'rotate(180deg)'
                  }}
                />

                <CardContent sx={{ p: 4 }}>
                  {/* Contenido del testimonio */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    {/* Avatar del cliente */}
                    <Avatar
                      src={testimonials[currentIndex].image}
                      alt={t(`testimonials.${testimonials[currentIndex].key}.name`)}
                      sx={{
                        width: 100,
                        height: 100,
                        border: 3,
                        borderColor: 'primary.main'
                      }}
                    />

                    {/* Texto del testimonio */}
                    <Box>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          fontStyle: 'italic',
                          mb: 2
                        }}
                      >
                        {t(`testimonials.${testimonials[currentIndex].key}.quote`)}
                      </Typography>
                      
                      {/* Información del cliente */}
                      <Typography variant="h6" component="p">
                        {t(`testimonials.${testimonials[currentIndex].key}.name`)}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {t(`testimonials.${testimonials[currentIndex].key}.position`)}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Botón siguiente */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: 0, md: -20 },
              zIndex: 2
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 