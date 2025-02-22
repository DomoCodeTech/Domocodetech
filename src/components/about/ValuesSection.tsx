import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  useTheme,
  alpha,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MdLightbulb,
  MdRocketLaunch,
  MdSecurity,
  MdStars,
} from "react-icons/md";
import { ValueItem } from "./types";

const ValuesSection: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const values = t("about.values.items", {
    returnObjects: true,
  }) as ValueItem[];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      innovation: <MdLightbulb size={40} />,
      quality: <MdRocketLaunch size={40} />,
      integrity: <MdSecurity size={40} />,
      excellence: <MdStars size={40} />,
    };
    return icons[iconName] || null;
  };

  return (
    <Container maxWidth="lg">
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
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)"
                : "linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          {t("about.values.title")}
        </Typography>
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          sx={{ minHeight: "100%" }}
        >
          {values.map((value, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ display: "flex" }}
            >
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.1 },
                  },
                }}
                style={{ display: "flex", width: "100%" }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                        : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease-in-out",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      "& .value-icon": {
                        transform: "scale(1.1) rotate(10deg)",
                        color: theme.palette.primary.main,
                      },
                      "&::before": {
                        transform: "scale(1.2)",
                      },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        theme.palette.mode === "dark"
                          ? "radial-gradient(circle at top right, rgba(0, 255, 163, 0.1), transparent 70%)"
                          : "radial-gradient(circle at top right, rgba(0, 128, 94, 0.1), transparent 70%)",
                      transition: "transform 0.3s ease-in-out",
                      zIndex: 0,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      position: "relative",
                      zIndex: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      className="value-icon"
                      sx={{
                        mb: 3,
                        transition: "all 0.3s ease-in-out",
                        color:
                          theme.palette.mode === "dark"
                            ? alpha(theme.palette.primary.main, 0.7)
                            : alpha(theme.palette.primary.main, 0.8),
                      }}
                    >
                      {getIcon(value.icon)}
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color:
                          theme.palette.mode === "dark"
                            ? "white"
                            : "text.primary",
                        mb: 2,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.8,
                        flexGrow: 1,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ValuesSection;
