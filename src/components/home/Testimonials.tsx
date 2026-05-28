/**
 * Testimonials.tsx
 * Componente que muestra los testimonios de clientes satisfechos
 *
 * Características:
 * - Carrusel automático de testimonios con efecto fade
 * - Diseño de tarjetas con foto y cita
 * - Animaciones suaves de transición
 * - Controles de navegación manual
 * - Responsive para todos los dispositivos
 */
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { SITE_DATA } from "../../constants/siteData";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = isDesktop ? 3 : 1;

  const testimonials = [
    {
      name: t("testimonials.client1.name"),
      role: t("testimonials.client1.position"),
      quote: t("testimonials.client1.quote"),
      avatar: SITE_DATA.images.testimonials.client1,
    },
    {
      name: t("testimonials.client2.name"),
      role: t("testimonials.client2.position"),
      quote: t("testimonials.client2.quote"),
      avatar: SITE_DATA.images.testimonials.client2,
    },
    {
      name: t("testimonials.client3.name"),
      role: t("testimonials.client3.position"),
      quote: t("testimonials.client3.quote"),
      avatar: SITE_DATA.images.testimonials.client3,
    },
    {
      name: t("testimonials.client4.name"),
      role: t("testimonials.client4.position"),
      quote: t("testimonials.client4.quote"),
      avatar: SITE_DATA.images.testimonials.client4,
    },
    {
      name: t("testimonials.client5.name"),
      role: t("testimonials.client5.position"),
      quote: t("testimonials.client5.quote"),
      avatar: SITE_DATA.images.testimonials.client5,
    },
    {
      name: t("testimonials.client6.name"),
      role: t("testimonials.client6.position"),
      quote: t("testimonials.client6.quote"),
      avatar: SITE_DATA.images.testimonials.client6,
    },
  ];

  const totalPages = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(timer);
  }, [totalPages]);

  useEffect(() => {
    setCurrentPage(0);
  }, [perPage]);

  const getCurrentTestimonials = () =>
    testimonials.slice(currentPage * perPage, (currentPage + 1) * perPage);

  const currentTestimonials = getCurrentTestimonials();

  return (
    <Box
      sx={{
        background: "transparent", // Cambiado a transparente
        py: { xs: 7, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: { xs: -40, md: -60 },
              left: { xs: 20, md: 40 },
              width: { xs: 80, md: 120 },
              height: { xs: 80, md: 120 },
              background: theme.palette.primary.main,
              opacity: 0.1,
              borderRadius: "50%",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: { xs: -40, md: -60 },
              right: { xs: 20, md: 40 },
              width: { xs: 80, md: 120 },
              height: { xs: 80, md: 120 },
              background: theme.palette.secondary.main,
              opacity: 0.1,
              borderRadius: "50%",
            },
          }}
        >
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
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              {t("testimonials.title")}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: "text.secondary",
                mb: { xs: 6, md: 8 },
                maxWidth: "600px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              {t("testimonials.subtitle")}
            </Typography>
          </motion.div>

          <Box sx={{ position: "relative", maxWidth: "1200px", mx: "auto" }}>
            <AnimatePresence mode="wait">
              <Grid container spacing={3} key={currentPage}>
                {currentTestimonials.map((testimonial, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          background:
                            theme.palette.mode === "dark"
                              ? "linear-gradient(145deg, rgba(31,31,31,0.6) 0%, rgba(21,21,21,0.8) 100%)"
                              : "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)",
                          backdropFilter: "blur(10px)",
                          boxShadow:
                            theme.palette.mode === "dark"
                              ? "0 4px 24px rgba(0, 255, 163, 0.08)"
                              : "0 4px 24px rgba(0, 0, 0, 0.08)",
                          borderRadius: 4,
                          p: { xs: 4, md: 4 },
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          position: "relative",
                          minHeight: "400px",
                          maxHeight: "400px",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            flex: 1,
                          }}
                        >
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            sx={{
                              width: { xs: 80, md: 80 },
                              height: { xs: 80, md: 80 },
                              mb: 3,
                              border: `3px solid ${theme.palette.primary.main}`,
                              boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
                            }}
                          />
                          <Box
                            sx={{
                              position: "relative",
                              width: "100%",
                              mb: 3,
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              "&::before": {
                                content: '"\\201C"',
                                position: "absolute",
                                top: -30,
                                left: 0,
                                fontSize: "3rem",
                                color: theme.palette.primary.main,
                                opacity: 0.3,
                                lineHeight: 1,
                              },
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: { xs: "0.95rem", md: "1rem" },
                                lineHeight: 1.5,
                                color:
                                  theme.palette.mode === "dark"
                                    ? "white"
                                    : "text.primary",
                                fontStyle: "italic",
                                textAlign: "center",
                                px: 2,
                                maxHeight: "150px",
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              "{testimonial.quote}"
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            width: "100%",
                            textAlign: "center",
                            mt: "auto",
                            pt: 2,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              mb: 0.5,
                              color:
                                theme.palette.mode === "dark"
                                  ? "white"
                                  : "text.primary",
                              fontSize: { xs: "1rem", md: "1.1rem" },
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: theme.palette.primary.main,
                              fontWeight: 500,
                              fontSize: { xs: "0.875rem", md: "0.9rem" },
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </AnimatePresence>

            {/* Indicadores de página */}
            <Box
              sx={{
                display: "flex",
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
                    width: { xs: 12, md: 10 },
                    height: { xs: 12, md: 10 },
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
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
