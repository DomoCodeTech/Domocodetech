import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
  Chip,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdCheck, MdChevronRight } from "react-icons/md";
import { Service } from "../../constants/siteData";

interface ServiceContentProps {
  selectedService: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ selectedService }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Obtener la lista de servicios específicos
  const serviceList = t(`services.${selectedService.key}.serviceList`, {
    returnObjects: true,
    defaultValue: {},
  }) as Record<string, string>;

  // Obtener las características como array
  const features = (t(`services.${selectedService.key}.features`, {
    returnObjects: true,
    defaultValue: [],
  }) || []) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Grid container spacing={4}>
        {/* Sección Principal */}
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            {/* Hero del Servicio */}
            <Card
              elevation={2}
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                overflow: "hidden",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={selectedService.image}
                  alt={t(`services.${selectedService.key}.title`)}
                  sx={{
                    height: { xs: 200, sm: 300 },
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                    p: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                      mb: 1,
                    }}
                  >
                    {t(`services.${selectedService.key}.title`)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    }}
                  >
                    {t(`services.${selectedService.key}.description`)}
                  </Typography>
                </Box>
              </Box>
            </Card>

            {/* Categorías de Servicios */}
            <Paper
              elevation={2}
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                p: { xs: 2, md: 3 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                {t("services.servicesList")}
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(serviceList).map(([key, value], index) => (
                  <Grid item xs={12} key={key}>
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: 2,
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.02)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(0,0,0,0.04)",
                          transform: "translateY(-2px)",
                          boxShadow:
                            theme.palette.mode === "dark"
                              ? "0 4px 20px rgba(0,0,0,0.4)"
                              : "0 4px 20px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: 40,
                              height: 40,
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              bgcolor: "primary.main",
                              color: "white",
                              mt: 0.5,
                            }}
                          >
                            <Typography variant="h6">{index + 1}</Typography>
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontSize: { xs: "1rem", md: "1.1rem" },
                                fontWeight: 600,
                                mb: 1,
                              }}
                            >
                              {value}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "rgba(255,255,255,0.7)"
                                    : "text.secondary",
                                fontSize: { xs: "0.875rem", md: "0.95rem" },
                                lineHeight: 1.6,
                              }}
                            >
                              {t(
                                `services.${selectedService.key}.serviceDescriptions.${key}`,
                                {
                                  defaultValue: "Descripción no disponible",
                                }
                              )}
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Stack>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            {/* Tech Stack Card */}
            <Card
              elevation={2}
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  Tech Stack
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {selectedService.techStack.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        background:
                          theme.palette.mode === "dark"
                            ? "rgba(0, 255, 163, 0.1)"
                            : "rgba(0, 128, 94, 0.1)",
                        color:
                          theme.palette.mode === "dark"
                            ? "white"
                            : "text.primary",
                        borderRadius: "8px",
                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                        height: { xs: 28, md: 32 },
                        "&:hover": {
                          background:
                            theme.palette.mode === "dark"
                              ? "rgba(0, 255, 163, 0.2)"
                              : "rgba(0, 128, 94, 0.2)",
                          transform: "translateY(-2px)",
                          transition: "all 0.3s ease",
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Features Card */}
            <Card
              elevation={2}
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  {t("projects.keyFeatures")}
                </Typography>
                <List>
                  {features.map((feature, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        px: 0,
                        py: 1,
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "primary.main",
                            color: "white",
                          }}
                        >
                          <MdCheck size={16} />
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: { xs: "0.9rem", md: "1rem" },
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ServiceContent;
