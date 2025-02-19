import React from "react";
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
  useTheme,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { MdCheck } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

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
    return (
      (t(`services.pricingPlans.${serviceKey}`, {
        returnObjects: true,
      }) as PricingTier[]) || []
    );
  };

  return (
    <Box sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 4, md: 8 } }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1.75rem", md: "2.5rem" },
          mb: { xs: 2, md: 4 },
        }}
      >
        {t("pricing.title")}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "1rem", md: "1.25rem" },
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        {t("pricing.subtitle")}
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
        {getPricingTiers().map((tier, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              style={{ width: "100%", maxWidth: 400 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                  ...(tier.recommended && {
                    borderColor: "primary.main",
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: `0 8px 40px ${theme.palette.primary.main}33`,
                  }),
                }}
              >
                {tier.recommended && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      backgroundColor: "primary.main",
                      color: "white",
                      px: 2,
                      py: 0.5,
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    Recomendado
                  </Box>
                )}

                <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                  <Box sx={{ mb: { xs: 2, md: 3 } }}>
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      {tier.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, fontSize: { xs: "0.85rem", md: "1rem" } }}
                    >
                      {tier.description}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: tier.recommended
                          ? "primary.main"
                          : "text.primary",
                        fontSize: { xs: "1.5rem", md: "2rem" },
                      }}
                    >
                      {tier.price}
                    </Typography>
                  </Box>

                  <List sx={{ mb: { xs: 1, md: 2 } }}>
                    {tier.features.map((feature, idx) => (
                      <ListItem
                        key={idx}
                        sx={{
                          py: { xs: 0.5, md: 1 },
                          px: { xs: 0, md: 2 },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: { xs: 36, md: 40 } }}>
                          <Box
                            sx={{
                              width: { xs: 20, md: 24 },
                              height: { xs: 20, md: 24 },
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              bgcolor: tier.recommended
                                ? "primary.main"
                                : "primary.light",
                              color: "white",
                            }}
                          >
                            <MdCheck size={14} />
                          </Box>
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <Box sx={{ p: { xs: 2, md: 3 }, pt: 0 }}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant={tier.recommended ? "contained" : "outlined"}
                    fullWidth
                    size="large"
                    sx={{
                      py: { xs: 1, md: 1.5 },
                      fontSize: { xs: "0.85rem", md: "1rem" },
                      fontWeight: "bold",
                      ...(tier.recommended && {
                        background:
                          "linear-gradient(45deg, #00FFA3 30%, #00805E 90%)",
                      }),
                    }}
                  >
                    {t("common.contactUs")}
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
