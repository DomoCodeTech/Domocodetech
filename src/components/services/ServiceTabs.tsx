import React from "react";
import { Box, Tabs, Tab, Container, useScrollTrigger } from "@mui/material";
import { ServiceIcon } from "../icons/ServiceIcons";
import { useTranslation } from "react-i18next";
import { SERVICES_DATA } from "../../constants/siteData";

interface ServiceTabsProps {
  selectedTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const { t } = useTranslation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80, // Reducido para que aparezca antes la sombra
  });

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 110000,
        transition: "all 0.3s ease",
        boxShadow: trigger
          ? (theme) =>
              theme.palette.mode === "dark"
                ? "0 4px 20px rgba(0,0,0,0.4)"
                : "0 4px 20px rgba(0,0,0,0.1)"
          : "none",
        py: { xs: 1, md: 1.5 }, // Padding vertical añadido
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1400 }}>
        {" "}
        {/* Contenedor más ancho */}
        <Tabs
          value={selectedTab}
          onChange={onTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            minHeight: { xs: 60, md: 80 }, // Altura aumentada
            "& .MuiTabs-flexContainer": {
              gap: { xs: 1, md: 2 }, // Más espacio entre tabs
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "primary.main",
              height: 3,
              borderRadius: "3px",
            },
            "& .MuiTab-root": {
              minHeight: { xs: 60, md: 68 },
              minWidth: { xs: 160, md: 200 }, // Tabs más anchas
              padding: { xs: "8px 16px", md: "12px 24px" }, // Más padding
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              fontWeight: 500,
              textTransform: "none",
              color: "text.secondary",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1.5, // Más espacio entre icono y texto
              borderRadius: 2,
              transition: "all 0.2s ease",
              whiteSpace: "nowrap", // Evita saltos de línea
              lineHeight: 1.2, // Mejor espaciado de texto
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.04)",
                color: "primary.main",
              },
              "&.Mui-selected": {
                color: "primary.main",
                fontWeight: 600,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.04)",
                "& .MuiSvgIcon-root": {
                  color: "primary.main",
                  transform: "scale(1.1)",
                },
              },
              "& .MuiSvgIcon-root": {
                fontSize: { xs: 22, md: 24 },
                transition: "transform 0.2s ease",
              },
            },
            "& .MuiTabs-scrollButtons": {
              width: { xs: 32, md: 44 }, // Botones más grandes
              "&.Mui-disabled": {
                opacity: 0.3,
              },
              "& svg": {
                fontSize: { xs: 22, md: 26 },
              },
            },
          }}
        >
          {SERVICES_DATA.map((service) => (
            <Tab
              key={service.key}
              label={t(`services.${service.key}.title`)}
              icon={<ServiceIcon name={service.icon} />}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default ServiceTabs;
