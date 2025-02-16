import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Button,
  Stack,
  Chip,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ServiceIcon } from "./icons/ServiceIcons";

interface ServiceCardProps {
  service: {
    key: string;
    icon: string;
    features: string[];
    techStack: string[];
    serviceList: string[];
  };
  index: number;
  expanded: boolean;
  onExpand: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  expanded,
  onExpand,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: 2.5, sm: 3.5 },
        borderRadius: 2,
        transition: "all 0.3s ease-in-out",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%)"
            : "#FFFFFF",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 8px 32px rgba(0, 0, 0, 0.5)"
            : "0 8px 32px rgba(0, 0, 0, 0.08)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 12px 40px rgba(0, 0, 0, 0.7)"
              : "0 12px 40px rgba(0, 0, 0, 0.12)",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(145deg, #1f1f1f 0%, #151515 100%), linear-gradient(to right, rgba(0, 255, 163, 0.1), transparent)"
              : "linear-gradient(145deg, #FFFFFF 0%, #F8FAFF 100%), linear-gradient(to right, rgba(0, 128, 94, 0.1), transparent)",
          "& .service-icon": {
            transform: "scale(1.1) rotate(5deg)",
            color: theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
          },
          "& .service-title": {
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg, #FFFFFF 30%, #00FFA3 100%)"
                : "linear-gradient(90deg, #1A1A1A 30%, #00805E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Box
          className="service-icon"
          sx={{
            transition: "all 0.3s ease-in-out",
            color: "text.primary",
          }}
        >
          <ServiceIcon
            name={service.icon}
            sx={{ fontSize: { xs: 36, sm: 44 } }}
          />
        </Box>
        <Typography
          className="service-title"
          variant="h5"
          sx={{
            fontWeight: 600,
            color: theme.palette.mode === "dark" ? "white" : "text.primary",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            transition: "all 0.3s ease-in-out",
          }}
        >
          {t(`services.${service.key}.title`)}
        </Typography>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 0,
          fontSize: { xs: "0.95rem", sm: "1.1rem" },
          lineHeight: 1.7,
        }}
      >
        {t(`services.${service.key}.description`)}
      </Typography>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
            {t("services.servicesList")}:
          </Typography>
          <List dense sx={{ pt: 0 }}>
            {Object.keys(
              t(`services.${service.key}.serviceList`, { returnObjects: true })
            ).map((item, idx) => (
              <ListItem key={idx} sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleOutlineIcon
                    color="primary"
                    sx={{ fontSize: 20 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={t(`services.${service.key}.serviceList.${item}`)}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "1rem",
                      color: theme.palette.text.secondary,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Collapse>

      <Stack direction="row" spacing={1} sx={{ mt: "auto", pt: 2 }}>
        <Button
          onClick={onExpand}
          size="small"
          startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ flex: 1 }}
        >
          {expanded ? t("common.showLess") : t("common.readMore")}
        </Button>
        <Button
          component={RouterLink}
          to={`/services?tab=${index}`}
          variant="contained"
          size="small"
          sx={{ flex: 1 }}
        >
          {t("services.viewMore")}
        </Button>
      </Stack>
    </Card>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({});
  const isDesktop = useTheme().breakpoints.up("md");

  const getRowIndex = (index: number) => Math.floor(index / 3);

  const handleExpand = (index: number, key: string) => {
    if (window.innerWidth >= theme.breakpoints.values.md) {
      // Desktop behavior - expand row
      const rowIndex = getRowIndex(index);
      setExpandedRows((prev) => ({
        ...prev,
        [rowIndex]: !prev[rowIndex],
      }));
    } else {
      // Mobile/tablet behavior - expand single card
      setExpandedCards((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  const isCardExpanded = (index: number, key: string) => {
    if (window.innerWidth >= theme.breakpoints.values.md) {
      const rowIndex = getRowIndex(index);
      return expandedRows[rowIndex] || false;
    }
    return expandedCards[key] || false;
  };

  const services = [
    {
      key: "software",
      icon: "Code",
      features: ["web", "mobile", "business", "apis", "databases"],
      techStack: ["React", "Node.js", "Python", "MongoDB", "Firebase"],
      serviceList: [
        "webApps",
        "mobileApps",
        "apiDevelopment",
        "databaseDesign",
        "systemIntegration",
        "cloudMigration",
      ],
    },
    {
      key: "microcontrollers",
      icon: "Chip",
      features: ["iot", "automation", "control", "firmware", "embedded"],
      techStack: ["Arduino", "Raspberry Pi", "ESP32", "PIC", "STM32"],
      serviceList: [
        "firmwareDevelopment",
        "prototypeDevelopment",
        "sensorIntegration",
        "embeddedSystems",
        "iotDevices",
      ],
    },
    {
      key: "domotics",
      icon: "Smart",
      features: ["voice", "lighting", "climate", "security", "energy"],
      techStack: ["Home Assistant", "Zigbee", "Z-Wave", "MQTT", "KNX"],
      serviceList: [
        "smartHomeSetup",
        "automationConfig",
        "securityIntegration",
        "energyOptimization",
        "deviceIntegration",
      ],
    },
    {
      key: "electronics",
      icon: "Robot",
      features: ["pcb", "prototyping", "embedded", "iot", "sensors"],
      techStack: ["Altium", "KiCad", "Eagle", "Proteus", "Fusion 360"],
      serviceList: [
        "pcbDesign",
        "circuitPrototyping",
        "componentSelection",
        "hardwareTesting",
        "productDevelopment",
      ],
    },
    {
      key: "networks",
      icon: "Network",
      features: ["setup", "config", "security", "performance", "maintenance"],
      techStack: ["Cisco", "Ubiquiti", "pfSense", "MikroTik", "OpenWrt"],
      serviceList: [
        "networkSetup",
        "securityConfig",
        "performanceOptimization",
        "maintenance",
        "monitoring",
      ],
    },
    {
      key: "support",
      icon: "Support",
      features: [
        "hardware",
        "software",
        "optimization",
        "recovery",
        "maintenance",
      ],
      techStack: ["Windows", "Linux", "macOS", "Android", "iOS"],
      serviceList: [
        "techSupport",
        "systemMaintenance",
        "dataRecovery",
        "optimization",
        "training",
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)"
            : "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              color: theme.palette.mode === "dark" ? "white" : "text.primary",
            }}
          >
            {t("services.title")}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "text.secondary",
              mb: 8,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            {t("services.subtitle")}
          </Typography>
        </motion.div>

        <Grid container spacing={3} alignItems="stretch">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <ServiceCard
                  service={service}
                  index={index}
                  expanded={isCardExpanded(index, service.key)}
                  onExpand={() => handleExpand(index, service.key)}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
