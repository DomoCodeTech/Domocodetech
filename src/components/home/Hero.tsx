/**
 * Hero.tsx
 * Componente de banner principal que muestra:
 * - Mensaje principal de la empresa
 * - Subtítulo descriptivo
 * - Botón de llamada a la acción
 * - Imagen ilustrativa
 *
 * Este componente utiliza:
 * - Material-UI para el diseño y componentes base
 * - Framer Motion para animaciones
 * - react-i18next para internacionalización
 */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Box, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import TechIcons from "../icons/TechIcons";

const Hero = () => {
  // Hooks necesarios
  const { t } = useTranslation();
  const theme = useTheme();

  // Configuración de animaciones
  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        background: "transparent", // Cambiado a transparente
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div {...textAnimation}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 3,
                  color:
                    theme.palette.mode === "dark" ? "white" : "text.primary",
                }}
              >
                {t("hero.slogan")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  mb: 4,
                  maxWidth: "600px",
                }}
              >
                {t("hero.subtitle")}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    minWidth: "160px",
                    fontSize: "1.1rem",
                  }}
                >
                  {t("hero.getQuote")}
                </Button>
                <Button
                  component={Link}
                  to="/services"
                  variant="outlined"
                  size="large"
                  sx={{
                    minWidth: "160px",
                    fontSize: "1.1rem",
                  }}
                >
                  {t("nav.services")}
                </Button>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div {...imageAnimation}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: "100px", md: "350px" },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-10%",
                    right: "-10%",
                    width: "120%",
                    height: "120%",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(145deg, rgba(31,31,31,0.6) 0%, rgba(21,21,21,0.8) 100%)"
                        : "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)",
                    filter: "blur(60px)",
                    zIndex: 0,
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "visible",
                  mx: { xs: -2, md: 0 },
                }}
              >
                <TechIcons />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
