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
  Container,
  useMediaQuery,
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={3}>
          {/* Hero Section */}
          <Grid item xs={12}>
            <Card
              elevation={2}
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                overflow: "hidden",
                borderRadius: { xs: 2, md: 3 },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={selectedService.image}
                  alt={t(`services.${selectedService.key}.title`)}
                  sx={{
                    height: { xs: 250, sm: 350, md: 400 },
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
                      "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
                    pt: { xs: 8, md: 12 },
                    pb: { xs: 3, md: 4 },
                    px: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
                      mb: 2,
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    {t(`services.${selectedService.key}.title`)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "rgba(255,255,255,0.95)",
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      maxWidth: "800px",
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                      lineHeight: 1.6,
                    }}
                  >
                    {t(`services.${selectedService.key}.description`)}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Main Content Section */}
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              {/* Tech Stack Section - Mobile Only */}
              {isMobile && (
                <TechStackCard
                  selectedService={selectedService}
                  theme={theme}
                  t={t}
                />
              )}

              {/* Features Section - Mobile Only */}
              {isMobile && (
                <FeaturesCard features={features} theme={theme} t={t} />
              )}

              {/* Services List */}
              <Paper
                elevation={2}
                sx={{
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)"
                      : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                  borderRadius: { xs: 2, md: 3 },
                }}
              >
                <Box sx={{ p: { xs: 2, md: 3 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      color:
                        theme.palette.mode === "dark"
                          ? "primary.light"
                          : "primary.main",
                    }}
                  >
                    {t("services.servicesList")}
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(serviceList).map(([key, value], index) => (
                      <Grid item xs={12} key={key}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Paper
                            elevation={1}
                            sx={{
                              p: 3,
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
                                    ? "0 8px 24px rgba(0,0,0,0.4)"
                                    : "0 8px 24px rgba(0,0,0,0.1)",
                              },
                            }}
                          >
                            <Stack spacing={2}>
                              <Box sx={{ display: "flex", gap: 2 }}>
                                <Box
                                  sx={{
                                    minWidth: 40,
                                    height: 40,
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                    color: "white",
                                    boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                                  }}
                                >
                                  <Typography variant="h6">
                                    {index + 1}
                                  </Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                                      fontWeight: 600,
                                      mb: 1,
                                      color:
                                        theme.palette.mode === "dark"
                                          ? "white"
                                          : "text.primary",
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
                                      fontSize: { xs: "0.9rem", md: "1rem" },
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {t(
                                      `services.${selectedService.key}.serviceDescriptions.${key}`
                                    )}
                                  </Typography>
                                </Box>
                              </Box>
                            </Stack>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </Stack>
          </Grid>

          {/* Sidebar - Desktop Only */}
          {!isMobile && (
            <Grid item md={4}>
              <Stack spacing={3} sx={{ position: "sticky", top: 24 }}>
                <TechStackCard
                  selectedService={selectedService}
                  theme={theme}
                  t={t}
                />
                <FeaturesCard features={features} theme={theme} t={t} />
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </motion.div>
  );
};

// Tech Stack Card Component
const TechStackCard = ({
  selectedService,
  theme,
  t,
}: {
  selectedService: Service;
  theme: any;
  t: any;
}) => (
  <Card
    elevation={2}
    sx={{
      background:
        theme.palette.mode === "dark"
          ? "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)"
          : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
      borderRadius: { xs: 2, md: 3 },
    }}
  >
    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 600,
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          color:
            theme.palette.mode === "dark" ? "primary.light" : "primary.main",
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
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <Chip
              label={tech}
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(0, 255, 163, 0.1)"
                    : "rgba(0, 128, 94, 0.1)",
                color: theme.palette.mode === "dark" ? "white" : "text.primary",
                borderRadius: "8px",
                fontSize: { xs: "0.85rem", md: "0.9rem" },
                height: { xs: 30, md: 32 },
                fontWeight: 500,
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
          </motion.div>
        ))}
      </Box>
    </CardContent>
  </Card>
);

// Features Card Component
const FeaturesCard = ({
  features,
  theme,
  t,
}: {
  features: string[];
  theme: any;
  t: any;
}) => (
  <Card
    elevation={2}
    sx={{
      background:
        theme.palette.mode === "dark"
          ? "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)"
          : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
      borderRadius: { xs: 2, md: 3 },
    }}
  >
    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 600,
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          color:
            theme.palette.mode === "dark" ? "primary.light" : "primary.main",
        }}
      >
        {t("projects.keyFeatures")}
      </Typography>
      <List>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ListItem
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
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    color: "white",
                    boxShadow: `0 2px 8px ${theme.palette.primary.main}40`,
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
                    color:
                      theme.palette.mode === "dark" ? "white" : "text.primary",
                  },
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default ServiceContent;
