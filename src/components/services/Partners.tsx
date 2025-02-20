import { Box, Container, Typography, useTheme } from "@mui/material";
import { SITE_DATA } from "../../constants/siteData";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 800,
          mb: 3,
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)"
              : "linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {t("partners.title")}
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          mb: 2,
          color: "text.secondary",
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        {t("partners.subtitle")}
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 6,
          color: "text.secondary",
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        {t("partners.description")}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, 1fr)", // Cambiado de 2 a 3 columnas
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(6, 1fr)",
          },
          gap: { xs: 2, sm: 4 }, // Ajustado el gap para mobile
          alignItems: "center",
          justifyItems: "center",
          py: 8,
        }}
      >
        {Object.values(SITE_DATA.images.services.partners).map(
          (logo, index) => (
            <Box
            key={index}
            component="img"
            src={logo}
            alt={`Partner ${index + 1}`}
            sx={{
              height: { xs: "30px", sm: "40px" }, // Más pequeño en mobile
              maxWidth: { xs: "80px", sm: "120px" }, // Más pequeño en mobile
              objectFit: "contain",
              filter:
                theme.palette.mode === "dark"
                  ? "brightness(0) invert(1) opacity(0.8)"
                  : "none",
              transition: "all 0.3s ease",
              opacity: 0.7,
              "&:hover": {
                opacity: 1,
                transform: "scale(1.1)",
              },
            }}
          />
          )
        )}
      </Box>
    </Container>
  );
};

export default Partners;
