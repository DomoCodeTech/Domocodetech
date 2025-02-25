import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  Card,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { ServiceIcon } from "../icons/ServiceIcons";
import { SERVICES_DATA } from "../../constants/siteData";

const ServicesSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeService, setActiveService] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderServicePreview = () => {
    const currentService = SERVICES_DATA[activeService];

    return (
      <Box
        sx={{
          position: "relative",
          height: { xs: "350px", md: "500px" },
          width: "100%",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={currentService.image}
          alt={t(`services.${currentService.key}.title`)}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)",
            p: 3,
            color: "white",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
            {t(`services.${currentService.key}.title`)}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
            {t(`services.${currentService.key}.description`)}
          </Typography>
          <Button
            component={RouterLink}
            to={`/services?tab=${activeService}`}
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #00FFA3, #00805E)",
              color: "black",
              fontWeight: 600,
              "&:hover": {
                background: "linear-gradient(90deg, #00E693, #00734E)",
              },
            }}
          >
            {t("services.viewMore")}
          </Button>
        </Box>
      </Box>
    );
  };

  const renderServiceCards = () => (
    <Grid container spacing={2}>
      {SERVICES_DATA.map((service, index) => (
        <Grid item xs={6} md={12} key={service.key}>
          <Card
            onClick={() => setActiveService(index)}
            sx={{
              p: 2,
              cursor: "pointer",
              background:
                activeService === index
                  ? theme.palette.mode === "dark"
                    ? "rgba(0, 255, 163, 0.1)"
                    : "rgba(0, 128, 94, 0.1)"
                  : theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.03)"
                  : "rgba(0, 0, 0, 0.02)",
              border: `1px solid ${
                activeService === index
                  ? theme.palette.mode === "dark"
                    ? "rgba(0, 255, 163, 0.2)"
                    : "rgba(0, 128, 94, 0.2)"
                  : "transparent"
              }`,
              transition: "all 0.2s ease",
              "&:hover": {
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(0, 255, 163, 0.15)"
                    : "rgba(0, 128, 94, 0.15)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 40,
                  height: 36,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, rgba(0, 255, 163, 0.15), rgba(0, 128, 94, 0.25))"
                      : "linear-gradient(135deg, rgba(0, 128, 94, 0.15), rgba(0, 80, 59, 0.25))",
                }}
              >
                <ServiceIcon
                  name={service.icon}
                  sx={{
                    fontSize: 20,
                    color:
                      theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
                  }}
                />
              </Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  color:
                    activeService === index
                      ? theme.palette.mode === "dark"
                        ? "#00FFA3"
                        : "#00805E"
                      : "text.primary",
                }}
              >
                {t(`services.${service.key}.title`)}
              </Typography>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderMobileContent = () => (
    <Box>
      <Box sx={{ mb: 4 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {renderServicePreview()}
          </motion.div>
        </AnimatePresence>
      </Box>

      {renderServiceCards()}
    </Box>
  );

  const renderDesktopContent = () => (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        {renderServiceCards()}
      </Grid>
      <Grid item xs={12} md={8}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {renderServicePreview()}
          </motion.div>
        </AnimatePresence>
      </Grid>
    </Grid>
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 2 },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Título y descripción centrados fuera del contenedor */}
      <Box sx={{ textAlign: "center", mb: 6, px: 2, maxWidth: "800px" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            WebkitBackgroundClip: "text",
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            lineHeight: 1.2,
          }}
        >
          {t("services.title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1rem" },
            lineHeight: 1.6,
          }}
        >
          {t("services.mainDescription")}
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {isMobile ? renderMobileContent() : renderDesktopContent()}
      </Container>
    </Box>
  );
};

export default ServicesSection;
