import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Stack,
  useTheme,
  Avatar,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";
import { SITE_DATA } from "../constants/siteData";
import { useState, useEffect } from "react";

const Team = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = { xs: 1, md: 4 }; // 1 en móvil, 4 en desktop

  const teamMembers = [
    {
      name: SITE_DATA.images.team.names[0],
      position: t("team.member1.position"),
      image: SITE_DATA.images.team.member1,
      description: t("team.member1.description"),
      social: {
        github: "https://github.com/juancamilo96code",
        linkedin:
          "https://www.linkedin.com/in/juan-camilo-collantes-tovar-461797216/",
        facebook: "https://www.facebook.com/juancamilo.collantestovar",
      },
    },
    {
      name: SITE_DATA.images.team.names[1],
      position: t("team.member2.position"),
      image: SITE_DATA.images.team.member2,
      description: t("team.member2.description"),
      social: {
        github: "https://github.com/Alejandr0Aceved0",
        linkedin: "https://www.linkedin.com/in/alejandro-acevedo-904518184/",
        facebook: "https://www.facebook.com/alejo.acevedo.5811",
      },
    },
    {
      name: SITE_DATA.images.team.names[2],
      position: t("team.member3.position"),
      image: SITE_DATA.images.team.member3,
      description: t("team.member3.description"),
      social: {
        github: "https://github.com/Deco2449584",
        linkedin: "https://www.linkedin.com/in/danielcaro2449584/",
        facebook: "https://www.facebook.com/DECOCARO/",
      },
    },
    {
      name: SITE_DATA.images.team.names[3],
      position: t("team.member4.position"),
      image: SITE_DATA.images.team.member4,
      description: t("team.member4.description"),
      social: {
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/in//",
        facebook: "https://www.facebook.com//",
      },
    },
  ];

  const totalPages = Math.ceil(
    teamMembers.length /
      (window.innerWidth > 900 ? itemsPerPage.md : itemsPerPage.xs)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentMembers = () => {
    const perPage = window.innerWidth > 900 ? itemsPerPage.md : itemsPerPage.xs;
    return teamMembers.slice(
      currentPage * perPage,
      (currentPage + 1) * perPage
    );
  };

  const currentMembers = getCurrentMembers();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #1A1A1A 0%,rgba(46, 47, 46, 0.64) 100%)"
            : "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              color: theme.palette.mode === "dark" ? "white" : "text.primary",
            }}
          >
            {t("team.title")}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "text.secondary",
              mb: 8,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            {t("team.subtitle")}
          </Typography>
        </motion.div>

        <Box sx={{ position: "relative", maxWidth: "1200px", mx: "auto" }}>
          <AnimatePresence mode="wait">
            <Grid container spacing={4} alignItems="stretch" key={currentPage}>
              {currentMembers.map((member, index) => (
                <Grid
                  item
                  xs={12}
                  md={3}
                  key={member.name}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "350px", md: "100%" },
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{
                        width: "100%",
                      }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          background:
                            theme.palette.mode === "dark"
                              ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                              : "#FFFFFF",
                          boxShadow:
                            theme.palette.mode === "dark"
                              ? "0 4px 30px rgba(0, 255, 163, 0.1)"
                              : "0 4px 30px rgba(0, 0, 0, 0.1)",
                          transition: "all 0.3s ease-in-out",
                          borderRadius: "16px",
                          position: "relative",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow:
                              theme.palette.mode === "dark"
                                ? "0 12px 40px rgba(0, 0, 0, 0.7)"
                                : "0 12px 40px rgba(0, 0, 0, 0.12)",
                            "& .member-image": {
                              transform: "scale(1.05)",
                              borderColor: "primary.main",
                            },
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 3,
                            mb: 2,
                          }}
                        >
                          <Avatar
                            src={member.image}
                            alt={member.name}
                            className="member-image"
                            sx={{
                              width: 180,
                              height: 180,
                              border: "4px solid",
                              borderColor: "background.paper",
                              boxShadow: `0 8px 24px ${
                                theme.palette.mode === "dark"
                                  ? "rgba(0,0,0,0.5)"
                                  : "rgba(0,0,0,0.15)"
                              }`,
                              transition: "all 0.3s ease-in-out",
                              background: theme.palette.background.paper,
                            }}
                          />
                        </Box>
                        <CardContent
                          sx={{
                            flexGrow: 1,
                            p: 3,
                            textAlign: "center",
                            "&:last-child": {
                              pb: 3,
                            },
                          }}
                        >
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                              fontWeight: 600,
                              color:
                                theme.palette.mode === "dark"
                                  ? "white"
                                  : "text.primary",
                              mb: 0.5,
                            }}
                          >
                            {member.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "primary.main",
                              mb: 2,
                              fontWeight: 500,
                            }}
                          >
                            {member.position}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              mb: 3,
                              px: 2,
                            }}
                          >
                            {member.description}
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={1.5}
                            justifyContent="center"
                          >
                            <IconButton
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              sx={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "white"
                                    : "text.primary",
                                "&:hover": {
                                  color: "primary.main",
                                  transform: "translateY(-3px)",
                                },
                                transition: "all 0.2s ease-in-out",
                              }}
                            >
                              <GitHubIcon />
                            </IconButton>
                            <IconButton
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              sx={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "white"
                                    : "text.primary",
                                "&:hover": {
                                  color: "primary.main",
                                  transform: "translateY(-3px)",
                                },
                                transition: "all 0.2s ease-in-out",
                              }}
                            >
                              <LinkedInIcon />
                            </IconButton>
                            <IconButton
                              href={member.social.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              sx={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "white"
                                    : "text.primary",
                                "&:hover": {
                                  color: "primary.main",
                                  transform: "translateY(-3px)",
                                },
                                transition: "all 0.2s ease-in-out",
                              }}
                            >
                              <FacebookIcon />
                            </IconButton>
                          </Stack>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AnimatePresence>

          {/* Indicadores de página solo visibles en móvil */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              gap: 1.5,
              mt: 4,
            }}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentPage(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor:
                    currentPage === index
                      ? theme.palette.primary.main
                      : theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    backgroundColor:
                      currentPage === index
                        ? theme.palette.primary.main
                        : theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(0,0,0,0.2)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
