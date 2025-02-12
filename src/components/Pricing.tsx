import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface PricingProps {
  isEnglish: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isEnglish }) => {
  const theme = useTheme();

  const plans = [
    {
      id: 'starter',
      title: 'Starter',
      price: 1500,
      period: isEnglish ? 'basic project' : 'proyecto básico',
      description: isEnglish ? 'For small projects' : 'Para proyectos pequeños',
      features: isEnglish ? [
        'Initial consultation',
        'Basic design',
        'Implementation',
        '3 months support',
        'Documentation'
      ] : [
        'Consultoría inicial',
        'Diseño básico',
        'Implementación',
        'Soporte por 3 meses',
        'Documentación'
      ]
    },
    {
      id: 'professional',
      title: 'Professional',
      price: 3500,
      period: isEnglish ? 'complete project' : 'proyecto completo',
      description: isEnglish ? 'For medium projects' : 'Para proyectos medianos',
      features: isEnglish ? [
        'Advanced consulting',
        'Custom design',
        'Complete implementation',
        '6 months support',
        'Training included'
      ] : [
        'Consultoría avanzada',
        'Diseño personalizado',
        'Implementación completa',
        'Soporte por 6 meses',
        'Capacitación incluida'
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: isEnglish ? 'Custom' : 'Personalizado',
      period: isEnglish ? 'project' : 'proyecto',
      description: isEnglish ? 'For large projects' : 'Para grandes proyectos',
      features: isEnglish ? [
        'Complete solution',
        'Custom design',
        'Full implementation',
        '24/7 support',
        'Continuous maintenance'
      ] : [
        'Solución completa',
        'Diseño a medida',
        'Implementación integral',
        'Soporte 24/7',
        'Mantenimiento continuo'
      ]
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          className="gradient-text"
        >
          {isEnglish ? 'Our Pricing' : 'Nuestros Precios'}
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          {isEnglish 
            ? 'Choose the perfect plan for your needs' 
            : 'Elige el plan perfecto para tus necesidades'}
        </Typography>

        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={plan.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card 
                  className="hover-glow"
                  sx={{ 
                    height: '100%',
                    bgcolor: alpha(theme.palette.background.paper, 0.1)
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" component="h3" textAlign="center" gutterBottom>
                      {plan.title}
                    </Typography>
                    <Typography 
                      variant="h3" 
                      component="div" 
                      textAlign="center" 
                      className="gradient-text"
                      gutterBottom
                    >
                      {typeof plan.price === 'number' ? `€${plan.price}` : plan.price}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      textAlign="center" 
                      color="text.secondary"
                      gutterBottom
                    >
                      {plan.period}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      textAlign="center" 
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {plan.description}
                    </Typography>
                    <List>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      className="hover-glow"
                      sx={{ mt: 2 }}
                    >
                      {isEnglish ? 'Get Started' : 'Comenzar'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing; 