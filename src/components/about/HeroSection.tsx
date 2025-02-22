import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdTrendingUp, MdStars, MdPublic } from "react-icons/md";
import { HighlightItem } from "./types";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const highlights: HighlightItem[] = [
    {
      icon: <MdTrendingUp size={40} />,
      title: t("about.highlight1.title"),
      description: t("about.highlight1.description"),
    },
    {
      icon: <MdStars size={40} />,
      title: t("about.highlight2.title"),
      description: t("about.highlight2.description"),
    },
    {
      icon: <MdPublic size={40} />,
      title: t("about.highlight3.title"),
      description: t("about.highlight3.description"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          mb: { xs: 6, md: 12 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "100%", md: "600px" },
            height: { xs: "100%", md: "600px" },
            background:
              theme.palette.mode === "dark"
                ? "radial-gradient(circle, rgba(0, 255, 163, 0.15) 0%, rgba(0, 255, 163, 0) 70%)"
                : "radial-gradient(circle, rgba(0, 128, 94, 0.15) 0%, rgba(0, 128, 94, 0) 70%)",
            filter: "blur(60px)",
            zIndex: 0,
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)"
                : "linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            position: "relative",
            zIndex: 1,
          }}
        >
          {t("about.title")}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: { xs: 4, md: 8 },
            px: { xs: 2, sm: 0 },
            fontSize: { xs: "1rem", sm: "1.25rem" },
            position: "relative",
            zIndex: 1,
          }}
        >
          {t("about.subtitle")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: 4,
            px: { xs: 2, sm: 0 },
            color: "text.secondary",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            lineHeight: 1.8,
          }}
        >
          {t("about.introduction")}
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          {highlights.map((highlight, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: "primary.main",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {highlight.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.main",
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  {highlight.title}
                </Typography>
                <Typography variant="body2">{highlight.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default HeroSection;
