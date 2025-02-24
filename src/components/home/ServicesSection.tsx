import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Button,
  Stack,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ServiceIcon } from "../icons/ServiceIcons";

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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      onClick={() => isMobile && onExpand()} // Hacer toda la tarjeta clickeable en mobile
      sx={{
        position: "relative",
        borderRadius: { xs: 4, sm: 3 },
        overflow: "visible",
        cursor: isMobile ? "pointer" : "default",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(145deg, rgba(31,31,31,0.8) 0%, rgba(21,21,21,0.9) 100%)"
            : "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
        backdropFilter: "blur(10px)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        // Diseño específico para mobile
        ...(isMobile && {
          minHeight: expanded ? "auto" : "100px",
          margin: "0.25rem 0", // Reducido de 0.5rem a 0.25rem
          boxShadow: expanded
            ? theme.palette.mode === "dark"
              ? "0 12px 40px rgba(0, 255, 163, 0.15)"
              : "0 12px 40px rgba(0, 128, 94, 0.15)"
            : "none",
          border: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)"
          }`,
          "&::after": {
            content: '""',
            position: "absolute",
            left: -2,
            top: "50%",
            transform: "translateY(-50%)",
            width: 4,
            height: expanded ? "80%" : "40%",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(180deg, #00FFA3 0%, #00805E 100%)"
                : "linear-gradient(180deg, #00805E 0%, #006B4F 100%)",
            borderRadius: 8,
            transition: "height 0.3s ease",
          },
        }),
        // Diseño para desktop se mantiene igual
        ...(!isMobile && {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 3.5 },
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(145deg, rgba(31,31,31,0.8) 0%, rgba(21,21,21,0.9) 100%)"
              : "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
          backdropFilter: "blur(10px)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            background: `linear-gradient(90deg, 
              ${theme.palette.primary.main}15 0%, 
              ${theme.palette.primary.main}05 100%)`,
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
          },
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 12px 40px rgba(0, 255, 163, 0.15)"
                : "0 12px 40px rgba(0, 128, 94, 0.15)",
            "&::before": {
              opacity: 1,
            },
            "& .service-icon": {
              transform: "scale(1.1) rotate(5deg)",
              color: theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
            },
          },
        }),
      }}
    >
      <Box
        sx={{
          p: isMobile ? 2 : { xs: 2, sm: 3.5 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            mb: expanded ? 2 : 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            className="service-icon"
            sx={{
              p: isMobile ? 1 : 1.5,
              borderRadius: 2,
              background:
                theme.palette.mode === "dark"
                  ? "rgba(0, 255, 163, 0.1)"
                  : "rgba(0, 128, 94, 0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <ServiceIcon
              name={service.icon}
              sx={{
                fontSize: { xs: 24, sm: 44 },
                color: theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1rem", sm: "1.5rem" },
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(90deg, #FFFFFF 30%, #00FFA3 100%)"
                    : "linear-gradient(90deg, #1A1A1A 30%, #00805E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t(`services.${service.key}.title`)}
            </Typography>
          </Box>

          {/* Indicador de expansión tanto para mobile como desktop */}
          <ExpandMoreIcon
            onClick={(e) => {
              if (!isMobile) {
                e.stopPropagation();
                onExpand();
              }
            }}
            sx={{
              transform: expanded ? "rotate(180deg)" : "none",
              transition: "transform 0.3s ease",
              color: theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
              cursor: "pointer",
              fontSize: isMobile ? 24 : 28,
            }}
          />
        </Stack>

        <Collapse
          in={expanded}
          timeout="auto"
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <Box
            sx={{
              mt: 2,
              px: isMobile ? 1 : 0,
              py: isMobile ? 2 : 0,
              background: isMobile
                ? theme.palette.mode === "dark"
                  ? "rgba(0,0,0,0.2)"
                  : "rgba(0,0,0,0.02)"
                : "transparent",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  lineHeight: 1.6,
                }}
              >
                {t(`services.${service.key}.description`)}
              </Typography>

              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1.5,
                    fontWeight: 600,
                    color:
                      theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
                  }}
                >
                  {t("services.servicesList")}:
                </Typography>
                <List dense sx={{ pt: 0 }}>
                  {Object.keys(
                    t(`services.${service.key}.serviceList`, {
                      returnObjects: true,
                    })
                  ).map((item, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        py: 0.5,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          background:
                            theme.palette.mode === "dark"
                              ? "rgba(0, 255, 163, 0.05)"
                              : "rgba(0, 128, 94, 0.05)",
                          borderRadius: 1,
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleOutlineIcon
                          sx={{
                            fontSize: 20,
                            color:
                              theme.palette.mode === "dark"
                                ? "#00FFA3"
                                : "#00805E",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={t(
                          `services.${service.key}.serviceList.${item}`
                        )}
                        sx={{
                          "& .MuiListItemText-primary": {
                            fontSize: "0.95rem",
                            color: theme.palette.text.secondary,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Button
              component={RouterLink}
              to={`/services?tab=${index}`}
              variant="contained"
              size="small"
              fullWidth
              sx={{
                mt: "auto",
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(90deg, #00FFA3 0%, #00805E 100%)"
                    : "linear-gradient(90deg, #00805E 0%, #006B4F 100%)",
                color: theme.palette.mode === "dark" ? "#000" : "#fff",
                "&:hover": {
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(90deg, #00E693 0%, #00734E 100%)"
                      : "linear-gradient(90deg, #00734E 0%, #005A40 100%)",
                },
              }}
            >
              {t("services.viewMore")}
            </Button>
          </Box>
        </Collapse>
      </Box>
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
        background: "transparent", // Cambiado a transparente
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
            component="h2"
            align="center"
            sx={{
              mb: 2,
              color: theme.palette.mode === "dark" ? "white" : "text.primary",
            }}
          >
            {t("services.title")}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            align="center"
            color="text.secondary"
            sx={{ mb: { xs: 8, md: 6 } }}
          >
            {t("services.subtitle")}
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }} // Reducido el espaciado en mobile
          alignItems="stretch"
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={service.key}
              sx={{
                mb: { xs: 1, sm: 2, md: 3 }, // Añadido margin bottom específico
              }}
            >
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
