import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MdRocketLaunch,
  MdLightbulb,
  MdSecurity,
  MdWorkHistory,
  MdDoneAll,
  MdPeople,
  MdGroups,
  MdTrendingUp,
  MdStars,
  MdPublic
} from "react-icons/md";
import Timeline from '../components/about/Timeline';

interface StatItem {
  number: string;
  label: string;
}

const About: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const stats = t("about.stats", { returnObjects: true }) as StatItem[];
  const values = t("about.values.items", { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      innovation: <MdLightbulb size={40} />,
      quality: <MdRocketLaunch size={40} />,
      integrity: <MdSecurity size={40} />,
    };
    return icons[iconName] || null;
  };

  const highlights = [
    {
      icon: <MdTrendingUp size={40} />,
      title: t('about.highlight1.title'),
      description: t('about.highlight1.description')
    },
    {
      icon: <MdStars size={40} />,
      title: t('about.highlight2.title'),
      description: t('about.highlight2.description')
    },
    {
      icon: <MdPublic size={40} />,
      title: t('about.highlight3.title'),
      description: t('about.highlight3.description')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)"
            : "linear-gradient(180deg, #F0F7FF 0%, #E6FFF6 100%)",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 16 },
        overflowX: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Hero Section */}
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
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      {highlight.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2">
                      {highlight.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
        
        {/* Add Timeline after hero section */}
        <Timeline />

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} sx={{ mb: 12 }}>
            {stats.map((stat, index) => {
              const icons = [MdWorkHistory, MdDoneAll, MdPeople, MdGroups];
              const Icon = icons[index];
              return (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          theme.palette.mode === "dark"
                            ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                            : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)",
                        backdropFilter: "blur(10px)",
                        boxShadow:
                          theme.palette.mode === "dark"
                            ? "0 8px 32px rgba(0, 0, 0, 0.5)"
                            : "0 8px 32px rgba(42, 67, 101, 0.15)",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow:
                            theme.palette.mode === "dark"
                              ? "0 12px 40px rgba(0, 0, 0, 0.7)"
                              : "0 12px 40px rgba(42, 67, 101, 0.25)",
                          "& .stat-icon": {
                            transform: "scale(1.1) rotate(10deg)",
                            color: theme.palette.primary.main,
                          },
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: "center", p: 4 }}>
                        <Box
                          className="stat-icon"
                          sx={{
                            mb: 2,
                            transition: "all 0.3s ease-in-out",
                            color:
                              theme.palette.mode === "dark"
                                ? alpha(theme.palette.primary.main, 0.7)
                                : alpha(theme.palette.primary.main, 0.8),
                          }}
                        >
                          <Icon size={40} />
                        </Box>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            background:
                              theme.palette.mode === "dark"
                                ? "linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)"
                                : "linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? alpha(theme.palette.common.white, 0.7)
                                : alpha(theme.palette.common.black, 0.7),
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} sx={{ mb: 12 }}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: "100%",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                        : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)",
                    backdropFilter: "blur(10px)",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      "& .card-image": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "250px",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={t("about.mission.image")}
                      alt={t("about.mission.title")}
                      className="card-image"
                      sx={{
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        p: 3,
                      }}
                    >
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
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: "100%",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                        : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)",
                    backdropFilter: "blur(10px)",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      "& .card-image": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "250px",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={t("about.vision.image")}
                      alt={t("about.vision.title")}
                      className="card-image"
                      sx={{
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        p: 3,
                      }}
                    >
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

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
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
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
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
                    <CardContent sx={{ p: 4, position: "relative", zIndex: 1 }}>
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
    </Box>
  );
};

export default About;
