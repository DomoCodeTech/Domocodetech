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
        minHeight: { xs: "80vh", md: "90vh" },
        overflow: "hidden",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)"
            : "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
        display: "flex",
        alignItems: "center",
        borderRadius: { xs: "24px", md: "32px" },
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
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
          filter: "blur(8px)",
          borderRadius: "inherit",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 8, md: 8 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Text Column */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: "block",
                }}
              >
                {t("services.subtitle")}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
                  fontWeight: 800,
                  mb: 3,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)"
                      : "linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.2,
                }}
              >
                {t("services.title")}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  mb: { xs: 3, md: 4 },
                  maxWidth: "500px",
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", md: "1.25rem" },
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
                height: { xs: "300px", md: "500px" },
                width: "100%",
              }}
            >
              {SITE_DATA.images.services.showcase
                .slice(0, 4)
                .map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Service ${index + 1}`}
                      sx={{
                        position: "absolute",
                        width: { xs: "180px", sm: "200px", md: "250px" },
                        height: { xs: "240px", sm: "280px", md: "350px" },
                        objectFit: "cover",
                        borderRadius: { xs: "16px", md: "20px" },
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                        border: { xs: "2px solid", md: "4px solid" },
                        borderColor: theme.palette.background.paper,
                        ...getImagePosition(index),
                      }}
                    />
                  </motion.div>
                ))}
            </Box>
          </Grid>
        </Grid>

        {/* Decorative Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: { xs: "100%", md: "600px" },
            height: { xs: "100%", md: "600px" },
            background:
              "radial-gradient(circle, rgba(0,255,163,0.15) 0%, rgba(0,255,163,0) 70%)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 1,
            borderRadius: "inherit",
          }}
        />
      </Container>
    </Box>
  );
};

// Helper function for image positioning
const getImagePosition = (index: number) => {
  const positions = [
    {
      xs: { top: "0%", left: "5%", transform: "rotate(-8deg)" },
      md: { top: "0%", left: "10%", transform: "rotate(-8deg)" },
    },
    {
      xs: { top: "10%", right: "5%", transform: "rotate(8deg)" },
      md: { top: "15%", right: "5%", transform: "rotate(8deg)" },
    },
    {
      xs: { bottom: "15%", left: "8%", transform: "rotate(5deg)" },
      md: { bottom: "10%", left: "15%", transform: "rotate(5deg)" },
    },
    {
      xs: { bottom: "5%", right: "8%", transform: "rotate(-5deg)" },
      md: { bottom: "5%", right: "15%", transform: "rotate(-5deg)" },
    },
  ];

  return {
    ...positions[index].xs,
    "@media (min-width: 900px)": positions[index].md,
  };
};

export default ServicesHero;
