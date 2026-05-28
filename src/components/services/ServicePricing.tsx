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
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  MdApi,
  MdBackup,
  MdBuild,
  MdCloud,
  MdCode,
  MdDataObject,
  MdDesignServices,
  MdDevices,
  MdHub,
  MdMonitor,
  MdOutlineSupportAgent,
  MdPhoneAndroid,
  MdSecurity,
  MdSpeed,
  MdStar,
  MdStorage,
  MdTune,
  MdWifi,
} from "react-icons/md";
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
  const featureAccentColors = [
    "#00A3FF",
    "#00C389",
    "#7C4DFF",
    "#FF9800",
    "#FF5C8A",
  ];

  const getPricingTiers = (): PricingTier[] => {
    return (
      (t(`services.pricingPlans.${serviceKey}`, {
        returnObjects: true,
      }) as PricingTier[]) || []
    );
  };

  const getFeatureIcon = (feature: string) => {
    const text = feature.toLowerCase();

    if (text.includes("api")) return MdApi;
    if (text.includes("seo")) return MdSpeed;
    if (text.includes("database") || text.includes("base de datos"))
      return MdStorage;
    if (text.includes("admin")) return MdDataObject;
    if (
      text.includes("android") ||
      text.includes("ios") ||
      text.includes("móvil") ||
      text.includes("mobile")
    )
      return MdPhoneAndroid;
    if (
      text.includes("design") ||
      text.includes("diseño") ||
      text.includes("layout")
    )
      return MdDesignServices;
    if (text.includes("hosting") || text.includes("cloud")) return MdCloud;
    if (text.includes("wifi") || text.includes("vpn")) return MdWifi;
    if (
      text.includes("security") ||
      text.includes("seguridad") ||
      text.includes("firewall")
    )
      return MdSecurity;
    if (text.includes("monitor")) return MdMonitor;
    if (
      text.includes("support") ||
      text.includes("soporte") ||
      text.includes("response")
    )
      return MdOutlineSupportAgent;
    if (
      text.includes("maintenance") ||
      text.includes("mantenimiento") ||
      text.includes("diagn")
    )
      return MdBuild;
    if (text.includes("backup") || text.includes("respaldo")) return MdBackup;
    if (
      text.includes("automation") ||
      text.includes("automatización") ||
      text.includes("control")
    )
      return MdTune;
    if (text.includes("iot") || text.includes("protocol")) return MdHub;
    if (text.includes("development") || text.includes("desarrollo"))
      return MdCode;
    if (text.includes("device") || text.includes("dispositivo")) return MdDevices;

    return MdStar;
  };

  return (
    <Box
      sx={{
        mt: { xs: 4, md: 8 },
        mb: { xs: 4, md: 8 },
      }}
    >
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

      <Box
        sx={{
          overflowX: { xs: "auto", md: "visible" },
          px: { xs: 2, md: 32 },
          // Hide scrollbar for Chrome, Safari and Opera
          "&::-webkit-scrollbar": {
            display: "none",
          },
          // Hide scrollbar for IE, Edge and Firefox
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          alignItems="center"
          sx={{
            flexWrap: { xs: "nowrap", md: "wrap" },
            width: { xs: "max-content", md: "100%" },
            pb: { xs: 2, md: 0 }, // Add padding bottom for mobile scroll
          }}
        >
          {getPricingTiers().map((tier, index) => (
            <Grid
              item
              xs="auto"
              sm={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: "300px", md: "auto" }, // Fixed width for mobile
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
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(145deg, rgba(31,31,31,0.6) 0%, rgba(21,21,21,0.8) 100%)"
                        : "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)",
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
                      {tier.features.map((feature, idx) => {
                        const FeatureIcon = getFeatureIcon(feature);
                        const accent = featureAccentColors[idx % featureAccentColors.length];
                        return (
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
                                  ? alpha(accent, 0.18)
                                  : alpha(accent, 0.12),
                                color: tier.recommended
                                  ? alpha(accent, 0.98)
                                  : alpha(accent, 0.9),
                                border: `1px solid ${
                                  tier.recommended
                                    ? alpha(accent, 0.34)
                                    : alpha(accent, 0.24)
                                }`,
                              }}
                            >
                              <FeatureIcon size={14} />
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              fontSize: { xs: "0.8rem", md: "0.9rem" },
                            }}
                          />
                        </ListItem>
                        );
                      })}
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
    </Box>
  );
};

export default ServicePricing;
