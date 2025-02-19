import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  Chip,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ServiceIcon } from "../components/icons/ServiceIcons";
import { SITE_DATA } from "../constants/siteData";
import { MdCheck } from "react-icons/md";
import ServicesHero from "../components/ServicesHero";
import ProcessFlow from "../components/ProcessFlow";
import Partners from "../components/Partners";
import ServicePricing from "../components/ServicePricing";
import { useLocation } from "react-router-dom";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);

  // Read tab from URL parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    if (tabParam !== null) {
      const tabIndex = parseInt(tabParam);
      if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < services.length) {
        setSelectedTab(tabIndex);
        // Scroll to the tabs section
        const tabsElement = document.getElementById("services-tabs");
        if (tabsElement) {
          tabsElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location.search]);

  const services = [
    {
      key: "software",
      icon: "Code",
      image: SITE_DATA.images.services.software,
      features: t("services.software.features", {
        returnObjects: true,
      }) as string[],
      techStack: ["React", "Node.js", "Python", "MongoDB", "Firebase"],
    },
    {
      key: "microcontrollers",
      icon: "Chip",
      image: SITE_DATA.images.services.electronics,
      features: t("services.microcontrollers.features", {
        returnObjects: true,
      }) as string[],
      techStack: ["Arduino", "Raspberry Pi", "ESP32", "PIC", "STM32"],
    },
    {
      key: "domotics",
      icon: "Smart",
      image: SITE_DATA.images.services.domotics,
      features: t("services.domotics.features", {
        returnObjects: true,
      }) as string[],
      techStack: ["Home Assistant", "Zigbee", "Z-Wave", "MQTT", "KNX"],
    },
    {
      key: "electronics",
      icon: "Robot",
      image: SITE_DATA.images.services.robotics,
      features: t("services.electronics.features", {
        returnObjects: true,
      }) as string[],
      techStack: ["Altium", "KiCad", "Eagle", "Proteus", "Fusion 360"],
    },
    {
      key: "networks",
      icon: "Network",
      image: SITE_DATA.images.services.automation,
      features: t("services.networks.features", {
        returnObjects: true,
      }) as string[],
      techStack: ["Cisco", "Ubiquiti", "pfSense", "MikroTik", "OpenWrt"],
    },
    {
      key: "support",
      icon: "Support",
      image: SITE_DATA.images.services.support,
      features: t("services.support.features", {
        returnObjects: true,
      }) as string[],
      techStack: ["Windows", "Linux", "macOS", "Android", "iOS"],
    },
  ];

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)"
            : "linear-gradient(180deg, #F0F7FF 0%, #E6FFF6 100%)",
        pt: { xs: 2, md: 8 },
        pb: { xs: 2, md: 8 },
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 1, sm: 1, md: 1 },
        }}
      >
        <ServicesHero />
        <ProcessFlow />

        {/* Service Categories Tabs */}
        <Box sx={{ mb: { xs: 3, md: 6 } }} id="services-tabs">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: { xs: 2, md: 0 },
              "& .MuiTabs-indicator": {
                backgroundColor: "primary.main",
                height: 3,
                borderRadius: "3px",
              },
              "& .MuiTab-root": {
                color: "text.secondary",
                fontSize: { xs: "0.85rem", md: "1rem" },
                fontWeight: 500,
                textTransform: "none",
                minWidth: { xs: 120, md: 160 },
                px: { xs: 1.5, md: 3 },
                py: { xs: 1, md: 2 },
                "&.Mui-selected": {
                  color: "primary.main",
                },
              },
              "& .MuiSvgIcon-root": {
                fontSize: { xs: 20, md: 24 },
              },
            }}
          >
            {services.map((service) => (
              <Tab
                key={service.key}
                label={t(`services.${service.key}.title`)}
                icon={<ServiceIcon name={service.icon} />}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Box>

        {/* Services Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={{ xs: 2, md: 4 }}>
              {/* Service Description Card */}
              <Grid item xs={12} md={8}>
                <Card sx={{ mb: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 200, sm: 250, md: 300 },
                      mb: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={services[selectedTab].image}
                      alt={t(`services.${services[selectedTab].key}.title`)}
                      sx={{
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: { xs: 1, md: 2 },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        p: { xs: 2, md: 3 },
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                        }}
                      >
                        {t(`services.${services[selectedTab].key}.title`)}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    ¿Qué incluye este servicio?
                  </Typography>
                  <Grid container spacing={{ xs: 1, md: 2 }} sx={{ mb: 4 }}>
                    {services[selectedTab].features.map((feature, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 1, md: 2 },
                          }}
                        >
                          <Box
                            sx={{
                              width: { xs: 28, md: 32 },
                              height: { xs: 28, md: 32 },
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              bgcolor: "primary.main",
                              color: "white",
                            }}
                          >
                            <MdCheck size={18} />
                          </Box>
                          <Typography
                            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Grid>

              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Stack spacing={{ xs: 2, md: 4 }}>
                  {/* Features Card */}
                  <Card
                    sx={{
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                          : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: { xs: 2, md: 3 },
                          fontWeight: 600,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                          color:
                            theme.palette.mode === "dark"
                              ? "white"
                              : "text.primary",
                        }}
                      >
                        Features
                      </Typography>
                      <Stack spacing={{ xs: 1, md: 2 }}>
                        {services[selectedTab].features.map(
                          (feature, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: { xs: 1, md: 2 },
                              }}
                            >
                              <Box
                                sx={{
                                  width: { xs: 20, md: 24 },
                                  height: { xs: 20, md: 24 },
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  background:
                                    theme.palette.mode === "dark"
                                      ? "rgba(0, 255, 163, 0.1)"
                                      : "rgba(0, 128, 94, 0.1)",
                                  color: "primary.main",
                                }}
                              >
                                <MdCheck size={14} />
                              </Box>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: "text.secondary",
                                  fontSize: { xs: "0.9rem", md: "1rem" },
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          )
                        )}
                      </Stack>
                    </CardContent>
                  </Card>

                  {/* Tech Stack Card */}
                  <Card
                    sx={{
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                          : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: { xs: 2, md: 3 },
                          fontWeight: 600,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                          color:
                            theme.palette.mode === "dark"
                              ? "white"
                              : "text.primary",
                        }}
                      >
                        Tech Stack
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: { xs: 0.5, md: 1 },
                        }}
                      >
                        {services[selectedTab].techStack.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            sx={{
                              background:
                                theme.palette.mode === "dark"
                                  ? "rgba(0, 255, 163, 0.1)"
                                  : "rgba(0, 128, 94, 0.1)",
                              color:
                                theme.palette.mode === "dark"
                                  ? "white"
                                  : "text.primary",
                              borderRadius: "8px",
                              fontSize: { xs: "0.8rem", md: "0.9rem" },
                              height: { xs: 28, md: 32 },
                              "&:hover": {
                                background:
                                  theme.palette.mode === "dark"
                                    ? "rgba(0, 255, 163, 0.2)"
                                    : "rgba(0, 128, 94, 0.2)",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            {/* Service Pricing Section */}
            <ServicePricing serviceKey={services[selectedTab].key} />

            {/* Partners Section */}
            <Partners />
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Services;
