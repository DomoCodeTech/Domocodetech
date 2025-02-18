import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';
import { MdCheck, MdStar } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  description?: string;
}

interface ServicePricingProps {
  serviceKey: string;
}

const ServicePricing: React.FC<ServicePricingProps> = ({ serviceKey }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const getPricingTiers = (): PricingTier[] => {
    return (t(`services.pricingPlans.${serviceKey}`, { returnObjects: true }) as PricingTier[]) || [];
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 800,
          mb: 6,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)'
            : 'linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('pricing.title')}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {getPricingTiers().map((tier, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                elevation={tier.recommended ? 8 : 1}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.3s ease-in-out',
                  minHeight: '600px', // Añadir altura mínima fija
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  ...(tier.recommended && {
                    border: '2px solid',
                    borderColor: 'primary.main',
                  }),
                }}
              >
                {tier.recommended && (
                  <Chip
                    icon={<MdStar />}
                    label="Recomendado"
                    color="primary"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 20,
                      fontWeight: 'bold',
                    }}
                  />
                )}

                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    {tier.name}
                  </Typography>
                  
                  <Typography 
                    variant="h4" 
                    color="primary.main"
                    sx={{ mb: 2, fontWeight: 'bold' }}
                  >
                    {tier.price}
                  </Typography>

                  {tier.description && (
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {tier.description}
                    </Typography>
                  )}

                  <List sx={{ mb: 2 }}>
                    {tier.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ py: 1 }}>
                        <ListItemIcon>
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: tier.recommended ? 'primary.main' : 'primary.light',
                              color: 'white',
                            }}
                          >
                            <MdCheck size={16} />
                          </Box>
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{
                            fontSize: '0.9rem',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant={tier.recommended ? "contained" : "outlined"}
                    fullWidth
                    size="large"
                    sx={{
                      py: 1.5,
                      fontWeight: 'bold',
                      ...(tier.recommended && {
                        background: 'linear-gradient(45deg, #00FFA3 30%, #00805E 90%)',
                      }),
                    }}
                  >
                    {t('common.contactUs')}
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicePricing;
