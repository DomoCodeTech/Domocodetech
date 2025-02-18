import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Partners = () => {
  const theme = useTheme();
  
  const partners = [
    { name: 'Google', logo: '/images/logos/google.svg' },
    { name: 'Amazon', logo: '/images/logos/amazon.svg' },
    { name: 'Home Assistant', logo: '/images/logos/home-assistant.svg' },
    { name: 'Arduino', logo: '/images/logos/arduino.svg' },
    { name: 'Raspberry Pi', logo: '/images/logos/raspberry-pi.svg' },
    { name: 'Microsoft', logo: '/images/logos/microsoft.svg' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" sx={{ mb: 6 }}>
        Nuestros Aliados Tecnológicos
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(6, 1fr)',
          },
          gap: 4,
          alignItems: 'center',
        }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Box
              component="img"
              src={partner.logo}
              alt={partner.name}
              sx={{
                width: '100%',
                maxWidth: 120,
                height: 'auto',
                filter: theme.palette.mode === 'dark' 
                  ? 'brightness(0) invert(1) opacity(0.7)'
                  : 'opacity(0.7)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(1) opacity(1)'
                    : 'opacity(1)',
                  transform: 'scale(1.05)',
                },
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Partners;
