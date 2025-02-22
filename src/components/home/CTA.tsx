/**
 * CTA.tsx (Call to Action)
 * Componente que muestra una sección de llamada a la acción
 * para incentivar a los usuarios a contactar con la empresa
 *
 * Características:
 * - Diseño llamativo con fondo de gradiente
 * - Mensaje persuasivo
 * - Botón de acción destacado
 * - Animaciones en hover
 * - Totalmente responsive
 */
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const CTA = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 15 },
        overflow: "hidden",
        background: "transparent", // Cambiado a transparente
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              filter: "blur(30px)",
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
              filter: "blur(30px)",
            },
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "120%",
                background:
                  theme.palette.mode === "dark"
                    ? "radial-gradient(ellipse at center, rgba(0, 255, 163, 0.05) 0%, rgba(0, 255, 163, 0) 70%)"
                    : "radial-gradient(ellipse at center, rgba(0, 128, 94, 0.05) 0%, rgba(0, 128, 94, 0) 70%)",
                filter: "blur(40px)",
                zIndex: -1,
              },
            }}
          >
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: "center", position: "relative" }}>
                  <Typography
                    variant="h2"
                    sx={{
                      mb: { xs: 2, md: 3 },
                      fontSize: { xs: "2rem", md: "3.5rem" },
                      lineHeight: 1.2,
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)"
                          : "linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 700,
                      textAlign: "center",
                      textShadow:
                        theme.palette.mode === "dark"
                          ? "0 0 20px rgba(0, 255, 163, 0.1)"
                          : "0 0 20px rgba(0, 128, 94, 0.1)",
                    }}
                  >
                    {t("cta.title")}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: { xs: 4, md: 5 },
                      color:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.9)"
                          : "text.primary",
                      fontSize: { xs: "1.1rem", md: "1.5rem" },
                      lineHeight: 1.5,
                      maxWidth: "800px",
                      mx: "auto",
                      textAlign: "center",
                      fontWeight: 400,
                    }}
                  >
                    {t("cta.subtitle")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: 2, sm: 3 },
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      size="large"
                      sx={{
                        minWidth: { xs: "100%", sm: "200px" },
                        height: { xs: "48px", md: "56px" },
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        background:
                          theme.palette.mode === "dark"
                            ? "linear-gradient(135deg, #00FFA3 0%, #00805E 100%)"
                            : "linear-gradient(135deg, #00805E 0%, #00FFA3 100%)",
                        color:
                          theme.palette.mode === "dark" ? "#0A0A0A" : "#FFFFFF",
                        boxShadow:
                          theme.palette.mode === "dark"
                            ? "0 8px 24px rgba(0, 255, 163, 0.3)"
                            : "0 8px 24px rgba(0, 128, 94, 0.3)",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                          background:
                            theme.palette.mode === "dark"
                              ? "linear-gradient(135deg, #00E691 0%, #006C4F 100%)"
                              : "linear-gradient(135deg, #006C4F 0%, #00E691 100%)",
                          transform: "translateY(-2px)",
                          boxShadow:
                            theme.palette.mode === "dark"
                              ? "0 12px 30px rgba(0, 255, 163, 0.4)"
                              : "0 12px 30px rgba(0, 128, 94, 0.4)",
                        },
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {t("cta.button")}
                    </Button>
                    <Button
                      component={RouterLink}
                      to="/services"
                      variant="outlined"
                      size="large"
                      sx={{
                        minWidth: { xs: "100%", sm: "200px" },
                        height: { xs: "48px", md: "56px" },
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        borderWidth: 2,
                        borderColor:
                          theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
                        color:
                          theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                          borderWidth: 2,
                          borderColor:
                            theme.palette.mode === "dark"
                              ? "#00cc82"
                              : "#006C4F",
                          backgroundColor:
                            theme.palette.mode === "dark"
                              ? "rgba(0, 255, 163, 0.1)"
                              : "rgba(0, 128, 94, 0.1)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {t("services.viewMore")}
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
