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
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdCheck } from "react-icons/md";
import { Service } from "../../constants/siteData";

interface ServiceContentProps {
  selectedService: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ selectedService }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const features = t(`services.${selectedService.key}.features`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  console.log("Service key:", selectedService.key);
  console.log("Features:", features);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {/* Service Description Card */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 200, sm: 250, md: 300 },
                mb: 3,
              }}
            >
              <CardMedia
                component="img"
                image={selectedService.image}
                alt={t(`services.${selectedService.key}.title`)}
                sx={{
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: { xs: 1, md: 2 },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  p: { xs: 2, md: 3 },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  }}
                >
                  {t(`services.${selectedService.key}.title`)}
                </Typography>
              </Box>
            </Box>

            {/* Solo mostrar la sección de features si hay features disponibles */}
            {Array.isArray(features) && features.length > 0 && (
              <>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                >
                  {t("services.featuresTitle")}
                </Typography>
                <Grid container spacing={{ xs: 1, md: 2 }} sx={{ mb: 4 }}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: { xs: 1, md: 2 },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 28, md: 32 },
                            height: { xs: 28, md: 32 },
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "primary.main",
                            color: "white",
                          }}
                        >
                          <MdCheck size={18} />
                        </Box>
                        <Typography
                          sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}

            {/* Mostrar descripción del servicio si no hay features */}
            {(!Array.isArray(features) || features.length === 0) && (
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "text.secondary",
                  mb: 4,
                }}
              >
                {t(`services.${selectedService.key}.description`)}
              </Typography>
            )}
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Stack spacing={{ xs: 2, md: 4 }}>
            {/* Tech Stack Card */}
            <Card
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
                    : "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 247, 255, 0.9) 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 2, md: 3 },
                    fontWeight: 600,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    color:
                      theme.palette.mode === "dark" ? "white" : "text.primary",
                  }}
                >
                  Tech Stack
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 0.5, md: 1 },
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
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ServiceContent;
