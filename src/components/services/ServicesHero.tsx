import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SITE_DATA } from "../../constants/siteData";

const ServicesHero = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "85vh", md: "90vh" },
        overflow: "hidden",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)"
            : "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
        display: "flex",
        alignItems: "center",
        borderRadius: { xs: "24px", md: "32px" },
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 8px 32px rgba(0,0,0,0.3)"
            : "0 8px 32px rgba(0,0,0,0.1)",
        my: { xs: 6, md: 6 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${SITE_DATA.images.services.showcase[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          filter: "blur(12px)",
          opacity: 0.4,
          transform: "scale(1.1)",
          borderRadius: "inherit",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text Column */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 3,
                  mb: 2,
                  display: "block",
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                {t("services.subtitle")}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                  fontWeight: 800,
                  mb: 3,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #FFFFFF 30%, #00FFA3 100%)"
                      : "linear-gradient(135deg, #1A1A1A 30%, #00805E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {t("services.title")}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.9)"
                      : "text.secondary",
                  mb: { xs: 4, md: 5 },
                  maxWidth: "500px",
                  lineHeight: 1.6,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                {t("services.introduction")}
              </Typography>
            </motion.div>
          </Grid>

          {/* Images Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "340px", sm: "400px", md: "500px" },
                width: "100%",
              }}
            >
              {SITE_DATA.images.services.showcase
                .slice(0, 4)
                .map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={img}
                    alt={`Service ${index + 1}`}
                    sx={{
                      position: "absolute",
                      width: { xs: "200px", sm: "220px", md: "260px" },
                      height: { xs: "260px", sm: "280px", md: "340px" },
                      objectFit: "cover",
                      borderRadius: "20px",
                      boxShadow:
                        theme.palette.mode === "dark"
                          ? "0 20px 40px rgba(0,0,0,0.4)"
                          : "0 20px 40px rgba(0,0,0,0.15)",
                      border: "3px solid",
                      borderColor: theme.palette.background.paper,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                      ...getImagePosition(index),
                    }}
                  />
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at center, rgba(0,255,163,0.08) 0%, rgba(0,255,163,0) 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

// Helper function for image positioning
const getImagePosition = (index: number) => {
  const positions = [
    {
      xs: { top: "5%", left: "10%", transform: "rotate(-5deg)" },
      md: { top: "10%", left: "15%", transform: "rotate(-5deg)" },
    },
    {
      xs: { top: "15%", right: "10%", transform: "rotate(5deg)" },
      md: { top: "20%", right: "5%", transform: "rotate(5deg)" },
    },
    {
      xs: { bottom: "25%", left: "15%", transform: "rotate(3deg)" },
      md: { bottom: "20%", left: "20%", transform: "rotate(3deg)" },
    },
    {
      xs: { bottom: "10%", right: "15%", transform: "rotate(-3deg)" },
      md: { bottom: "15%", right: "10%", transform: "rotate(-3deg)" },
    },
  ];

  return {
    ...positions[index].xs,
    "@media (min-width: 900px)": positions[index].md,
  };
};

export default ServicesHero;
