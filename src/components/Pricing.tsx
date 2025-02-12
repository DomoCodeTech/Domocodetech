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
import { useTranslation } from 'react-i18next';

const Pricing: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const plans = [
    {
      id: 'starter',
      title: t('pricing.plans.starter.title'),
      price: 1500,
      period: t('pricing.plans.starter.period'),
      description: t('pricing.plans.starter.description'),
      features: t('pricing.plans.starter.features', { returnObjects: true }) as string[]
    },
    {
      id: 'professional',
      title: t('pricing.plans.professional.title'),
      price: 3500,
      period: t('pricing.plans.professional.period'),
      description: t('pricing.plans.professional.description'),
      features: t('pricing.plans.professional.features', { returnObjects: true }) as string[]
    },
    {
      id: 'enterprise',
      title: t('pricing.plans.enterprise.title'),
      price: t('pricing.plans.enterprise.price'),
      period: t('pricing.plans.enterprise.period'),
      description: t('pricing.plans.enterprise.description'),
      features: t('pricing.plans.enterprise.features', { returnObjects: true }) as string[]
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
          {t('pricing.title')}
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          {t('pricing.subtitle')}
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
                      {t('pricing.getStarted')}
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