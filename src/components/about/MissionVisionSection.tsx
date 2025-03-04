import React from "react";
import {
  Grid,
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SITE_DATA } from "../../constants/siteData";
const MissionVisionSection: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.1 },
    },
  };

  const cardStyles = {
    height: "100%",
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(145deg, rgba(31,31,31,0.6) 0%, rgba(21,21,21,0.8) 100%)"
        : "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)",
    backdropFilter: "blur(10px)",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-8px)",
      "& .card-image": {
        transform: "scale(1.1)",
      },
    },
  };

  const imageBoxStyles = {
    position: "relative",
    height: "250px",
    overflow: "hidden",
  };

  const imageOverlayStyles = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
    p: 3,
  };

  const imageStyles = {
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Grid container spacing={4} sx={{ mb: 12 }}>
        {/* Mission Card */}
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants}>
            <Card sx={cardStyles}>
              <Box sx={imageBoxStyles}>
                <CardMedia
                  component="img"
                  image={SITE_DATA.about.images.mission}
                  alt={t("about.mission.title")}
                  className="card-image"
                  sx={imageStyles}
                />
                <Box sx={imageOverlayStyles}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    {t("about.mission.title")}
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  {t("about.mission.description")}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Vision Card */}
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants}>
            <Card sx={cardStyles}>
              <Box sx={imageBoxStyles}>
                <CardMedia
                  component="img"
                  image={SITE_DATA.about.images.vision}
                  alt={t("about.vision.title")}
                  className="card-image"
                  sx={imageStyles}
                />
                <Box sx={imageOverlayStyles}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    {t("about.vision.title")}
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  {t("about.vision.description")}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default MissionVisionSection;
