import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
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

  return (
    <Box sx={{ mb: { xs: 3, md: 6 } }} id="services-tabs">
      <Tabs
        value={selectedTab}
        onChange={onTabChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          mb: { xs: 2, md: 0 },
          "& .MuiTabs-indicator": {
            backgroundColor: "primary.main",
            height: 3,
            borderRadius: "3px",
          },
          "& .MuiTab-root": {
            color: "text.secondary",
            fontSize: { xs: "0.85rem", md: "1rem" },
            fontWeight: 500,
            textTransform: "none",
            minWidth: { xs: 120, md: 160 },
            px: { xs: 1.5, md: 3 },
            py: { xs: 1, md: 2 },
            "&.Mui-selected": {
              color: "primary.main",
            },
          },
          "& .MuiSvgIcon-root": {
            fontSize: { xs: 20, md: 24 },
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
    </Box>
  );
};

export default ServiceTabs;
