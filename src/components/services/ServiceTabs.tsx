import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Container,
  useScrollTrigger,
  useMediaQuery,
} from "@mui/material";
import { ServiceIcon } from "../icons/ServiceIcons";
import { useTranslation } from "react-i18next";
import { SERVICES_DATA } from "../../constants/siteData";
import { useTheme } from "@mui/material/styles";

interface ServiceTabsProps {
  selectedTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  return (
    <Box
      sx={{
        position: "sticky",
        top: 24,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "calc(100% - 32px)", md: "90%" },
          maxWidth: "1200px",
          borderRadius: { xs: 0, sm: "16px" },
          background:
            theme.palette.mode === "dark"
              ? "rgba(10, 10, 10, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: trigger
            ? theme.palette.mode === "dark"
              ? "0 4px 30px rgba(0, 0, 0, 0.25)"
              : "0 4px 30px rgba(42, 67, 101, 0.15)"
            : "none",
          border: { xs: "none", sm: "1px solid" },
          borderColor:
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Container maxWidth="lg" disableGutters={isMobile}>
          <Tabs
            value={selectedTab}
            onChange={onTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              minHeight: { xs: 56, md: 64 },
              "& .MuiTabs-flexContainer": {
                gap: { xs: 0.5, md: 1.5 },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "primary.main",
                height: 3,
                borderRadius: "3px",
              },
              "& .MuiTab-root": {
                minHeight: { xs: 48, md: 56 },
                minWidth: "auto",
                padding: { xs: "6px 12px", md: "8px 20px" },
                fontSize: { xs: "0.85rem", md: "0.9rem" },
                fontWeight: 500,
                textTransform: "none",
                color: "text.secondary",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                borderRadius: "12px",
                transition: "all 0.2s ease",
                mx: 0.5,
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.04)",
                  color: "primary.main",
                },
                "&.Mui-selected": {
                  color: "primary.main",
                  fontWeight: 600,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.04)",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 20, md: 22 },
                },
              },
              "& .MuiTabs-scrollButtons": {
                width: 40,
                "&.Mui-disabled": { opacity: 0.3 },
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
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
    </Box>
  );
};

export default ServiceTabs;
