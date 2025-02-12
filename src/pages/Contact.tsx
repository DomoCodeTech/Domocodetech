import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Stack,
  Snackbar,
  Alert
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface ContactProps {
  isEnglish: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({ isEnglish }) => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const content = {
    title: isEnglish ? 'Contact Us' : 'Contáctanos',
    subtitle: isEnglish 
      ? 'Get in touch with our expert team' 
      : 'Ponte en contacto con nuestro equipo de expertos',
    description: isEnglish
      ? 'Have a question or need assistance? Fill out the form below and we will get back to you as soon as possible.'
      : '¿Tienes una pregunta o necesitas ayuda? Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.',
    form: {
      name: isEnglish ? 'Name' : 'Nombre',
      email: isEnglish ? 'Email' : 'Correo electrónico',
      phone: isEnglish ? 'Phone' : 'Teléfono',
      message: isEnglish ? 'Message' : 'Mensaje',
      submit: isEnglish ? 'Send Message' : 'Enviar Mensaje',
      success: isEnglish 
        ? 'Message sent successfully!' 
        : '¡Mensaje enviado exitosamente!'
    },
    info: [
      {
        icon: <EmailIcon />,
        title: isEnglish ? 'Email' : 'Correo',
        content: 'info@technocore.com'
      },
      {
        icon: <PhoneIcon />,
        title: isEnglish ? 'Phone' : 'Teléfono',
        content: '+1 (555) 123-4567'
      },
      {
        icon: <LocationOnIcon />,
        title: isEnglish ? 'Address' : 'Dirección',
        content: isEnglish 
          ? '123 Tech Street, Innovation City, TC 12345'
          : 'Calle Tecnología 123, Ciudad Innovación, TC 12345'
      },
      {
        icon: <AccessTimeIcon />,
        title: isEnglish ? 'Hours' : 'Horario',
        content: isEnglish
          ? 'Monday - Friday: 9:00 AM - 6:00 PM'
          : 'Lunes - Viernes: 9:00 AM - 6:00 PM'
      }
    ]
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', py: 8 }}>
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
            sx={{ mb: 2 }}
          >
            {content.subtitle}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 8 }}
          >
            {content.description}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card 
                component="form"
                onSubmit={handleSubmit}
                className="hover-glow"
                sx={{ 
                  height: '100%',
                  bgcolor: alpha(theme.palette.background.paper, 0.1)
                }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label={content.form.name}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label={content.form.email}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label={content.form.phone}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label={content.form.message}
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      className="hover-glow"
                    >
                      {content.form.submit}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card 
                className="hover-glow"
                sx={{ 
                  height: '100%',
                  bgcolor: alpha(theme.palette.background.paper, 0.1)
                }}
              >
                <CardContent>
                  <Stack spacing={4}>
                    {content.info.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                          }}
                        >
                          <Box
                            sx={{
                              color: 'primary.main',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              p: 1,
                              borderRadius: 1,
                              bgcolor: alpha(theme.palette.primary.main, 0.1)
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              gutterBottom
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text.secondary"
                            >
                              {item.content}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
        >
          {content.form.success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 