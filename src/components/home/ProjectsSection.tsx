/**
 * ProjectsSection.tsx
 * Componente que muestra los proyectos principales de la empresa:
 * - Proyectos destacados en diversas áreas
 *
 * Cada proyecto incluye:
 * - Icono representativo
 * - Título
 * - Descripción corta
 * - Lista de características (tecnologías, funcionalidades, etc.)
 * - Botón para más información
 */
import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Container,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from "../../constants/siteData";
import { useTheme } from "@mui/material/styles";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Definir los proyectos usando los datos de las traducciones
  const projectKeys = [
    "web",
    "mobile",
    "homeAutomation",
    "iot",
    "networking",
    "electronics",
  ];

  const projects = useMemo(
    () =>
      projectKeys.map((key) => ({
        key,
        image:
          SITE_DATA.projects.images[
            key as keyof typeof SITE_DATA.projects.images
          ],
        features: t(`projects.${key}.features`, {
          returnObjects: true,
        }) as string[],
      })),
    [t]
  );

  const projectsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Precarga de imágenes
  useEffect(() => {
    const preloadImages = () => {
      const nextPage = (currentPage + 1) % totalPages;
      const start = nextPage * projectsPerPage;
      const end = Math.min(start + projectsPerPage, projects.length);

      projects.slice(start, end).forEach((project) => {
        if (!loadedImages.has(project.image)) {
          const img = new Image();
          img.src = project.image;
          img.onload = () => {
            setLoadedImages((prev) => new Set([...prev, project.image]));
          };
        }
      });
    };

    preloadImages();
  }, [currentPage, projects, projectsPerPage, totalPages, loadedImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 60000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getVisibleProjects = () => {
    const start = currentPage * projectsPerPage;
    const end = start + projectsPerPage;

    // Crear un array circular para transición suave
    const wrappedProjects = [...projects];
    if (end > projects.length) {
      wrappedProjects.push(...projects.slice(0, end - projects.length));
    }

    return wrappedProjects.slice(start, end);
  };

  // Mejorado el sistema de animación
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: "transparent", // Cambiado a transparente
        overflow: "hidden", // Prevenir scroll horizontal durante animaciones
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 12 } }}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              color: theme.palette.mode === "dark" ? "white" : "text.primary",
            }}
          >
            {t("projects.title")}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ mb: { xs: 8, md: 6 }, pb: { xs: 2, md: 2 } }}
          >
            {t("projects.subtitle")}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "450px", md: "400px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: { xs: 2, md: 4 },
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: -20, md: -40 },
              zIndex: 2,
              color: "primary.main",
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(0,0,0,0.3)"
                  : "rgba(255,255,255,0.3)",
              backdropFilter: "blur(4px)",
              "&:hover": {
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(0,0,0,0.5)"
                    : "rgba(255,255,255,0.5)",
              },
            }}
          >
            <MdChevronLeft size={32} />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 2, md: 0 },
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                }}
                style={{
                  position: "absolute",
                  display: "flex",
                  gap: "24px",
                  width: "100%",
                  justifyContent: "center",
                  willChange: "transform",
                }}
              >
                {getVisibleProjects().map((project, index) => (
                  <Card
                    key={`${currentPage}-${index}`}
                    sx={{
                      width: isMobile ? "85%" : "350px",
                      height: "550px",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 2,
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                          : "#FFFFFF",
                      boxShadow:
                        theme.palette.mode === "dark"
                          ? "0 4px 30px rgba(0, 255, 163, 0.1)"
                          : "0 4px 30px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow:
                          theme.palette.mode === "dark"
                            ? "0 12px 40px rgba(0, 0, 0, 0.7)"
                            : "0 12px 40px rgba(0, 0, 0, 0.12)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={t(`projects.${project.key}.title`)}
                      sx={{
                        objectFit: "cover",
                        height: "200px",
                      }}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        height: "300px",
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          color:
                            theme.palette.mode === "dark"
                              ? "white"
                              : "text.primary",
                          fontWeight: 600,
                          fontSize: "1.25rem",
                          height: "40px",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {t(`projects.${project.key}.title`)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          height: "60px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {t(`projects.${project.key}.description`)}
                      </Typography>
                      <Box
                        sx={{
                          mt: "auto",
                          height: "130px",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "white"
                                : "text.primary",
                            mb: 1,
                          }}
                        >
                          {t("projects.featuresTitle")}:
                        </Typography>
                        {project.features.map((feature, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              "&:before": {
                                content: '""',
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: "primary.main",
                                mr: 1,
                                display: "inline-block",
                              },
                            }}
                          >
                            {t(`projects.features.${feature}`)}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0, height: "50px" }}>
                      <Button
                        component={Link}
                        to={`/projects/${project.key}`}
                        variant="outlined"
                        color="primary"
                        fullWidth
                      >
                        {t("common.readMore")}
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: -20, md: -40 },
              zIndex: 2,
              color: "primary.main",
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(0,0,0,0.3)"
                  : "rgba(255,255,255,0.3)",
              backdropFilter: "blur(4px)",
              "&:hover": {
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(0,0,0,0.5)"
                    : "rgba(255,255,255,0.5)",
              },
            }}
          >
            <MdChevronRight size={32} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
