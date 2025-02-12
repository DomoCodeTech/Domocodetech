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
import { useTranslation } from 'react-i18next';
import { SITE_DATA } from '../constants/siteData';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: t('contact.info.email'),
      content: SITE_DATA.company.email
    },
    {
      icon: <PhoneIcon />,
      title: t('contact.info.phone'),
      content: SITE_DATA.company.phone
    },
    {
      icon: <LocationOnIcon />,
      title: t('contact.info.address'),
      content: t('contact.info.location')
    },
    {
      icon: <AccessTimeIcon />,
      title: t('contact.info.hours'),
      content: t('contact.info.businessHours')
    }
  ];

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
            {t('contact.title')}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 2 }}
          >
            {t('contact.subtitle')}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card 
                component="form"
                onSubmit={handleSubmit}
                className="hover-glow"
                sx={{ 
                  height: '100%',
                  bgcolor: alpha(theme.palette.background.paper, 0.1),
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    border: `1px solid ${theme.palette.primary.main}`,
                  }
                }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label={t('contact.form.name')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t('contact.form.email')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t('contact.form.phone')}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t('contact.form.message')}
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      className="hover-glow"
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      }}
                    >
                      {t('contact.form.submit')}
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
                  bgcolor: alpha(theme.palette.background.paper, 0.1),
                  background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    border: `1px solid ${theme.palette.secondary.main}`,
                  }
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      mb: 4,
                      background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 'bold'
                    }}
                  >
                    {t('contact.info.title')}
                  </Typography>
                  <Stack spacing={4}>
                    {contactInfo.map((item, index) => (
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
                            gap: 2,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateX(10px)',
                            }
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
                              variant="subtitle1"
                              color="primary"
                              gutterBottom
                              sx={{ fontWeight: 'bold' }}
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
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
          sx={{ width: '100%' }}
        >
          {t('common.success')}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 