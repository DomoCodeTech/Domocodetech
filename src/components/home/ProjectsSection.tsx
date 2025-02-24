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
import { useState, useEffect, useMemo, useRef } from "react";
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
  useMediaQuery,
} from "@mui/material";
import { SITE_DATA } from "../../constants/siteData";
import { useTheme } from "@mui/material/styles";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Modificar el useEffect para que solo funcione en desktop
  useEffect(() => {
    if (isMobile) return; // No ejecutar en mobile

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const newPosition = (scrollPosition + 1) % maxScroll;

      scrollContainer.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, [scrollPosition, isMobile]);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: "transparent",
        position: "relative",
        overflow: "hidden", // Asegurar que los bordes no se desborden
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
            borderRadius: "16px", // Añadir bordes redondeados al contenedor
            overflow: "hidden", // Importante para los gradientes
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              width: { xs: "15%", md: "20%" },
              zIndex: 2,
              pointerEvents: "none",
              transition: "opacity 0.3s ease",
            },
            "&::before": {
              left: 0,
              background:
                theme.palette.mode === "dark"
                  ? `linear-gradient(90deg, 
                    ${theme.palette.background.default} 0%,
                    rgba(18, 18, 18, 0.9) 30%,
                    rgba(18, 18, 18, 0.3) 70%,
                    transparent 100%)`
                  : `linear-gradient(90deg, 
                    ${theme.palette.background.default} 0%,
                    rgba(255, 255, 255, 0.9) 30%,
                    rgba(255, 255, 255, 0.3) 70%,
                    transparent 100%)`,
            },
            "&::after": {
              right: 0,
              background:
                theme.palette.mode === "dark"
                  ? `linear-gradient(-90deg, 
                    ${theme.palette.background.default} 0%,
                    rgba(18, 18, 18, 0.9) 30%,
                    rgba(18, 18, 18, 0.3) 70%,
                    transparent 100%)`
                  : `linear-gradient(-90deg, 
                    ${theme.palette.background.default} 0%,
                    rgba(255, 255, 255, 0.9) 30%,
                    rgba(255, 255, 255, 0.3) 70%,
                    transparent 100%)`,
            },
          }}
        >
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              overflowY: "hidden",
              px: 4,
              py: 2,
              scrollBehavior: "smooth",
              borderRadius: "16px", // Coincide con el contenedor padre
              "&::-webkit-scrollbar": {
                display: "none",
              },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              // Ajustar scroll snap solo en mobile
              ...(isMobile && {
                scrollSnapType: "x mandatory",
                "& > *": {
                  scrollSnapAlign: "center",
                },
              }),
            }}
          >
            {projects.map((project) => (
              <Card
                key={project.key}
                sx={{
                  width: isMobile ? "280px" : "300px",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                  flexShrink: 0,
                  borderRadius: 2,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(145deg, rgba(31,31,31,0.6) 0%, rgba(21,21,21,0.8) 100%)"
                      : "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)",
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
                  height="160"
                  image={project.image}
                  alt={t(`projects.${project.key}.title`)}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color:
                        theme.palette.mode === "dark"
                          ? "white"
                          : "text.primary",
                      fontWeight: 600,
                      fontSize: "1.1rem",
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
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    component={Link}
                    to={`/projects/${project.key}`}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="small"
                  >
                    {t("common.readMore")}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
