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
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ServiceIcon } from "../icons/ServiceIcons";

interface ServiceCardProps {
  service: {
    key: string;
    icon: string;
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
      onClick={onExpand}
      sx={{
        position: "relative",
        borderRadius: 3,
        cursor: "pointer",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(145deg, rgba(31,31,31,0.8) 0%, rgba(21,21,21,0.9) 100%)"
            : "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease-in-out",
        height: expanded ? "auto" : { xs: "100px", sm: "120px" },
        border: `1px solid ${
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)"
        }`,
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 8px 30px rgba(0, 255, 163, 0.15)"
              : "0 8px 30px rgba(0, 128, 94, 0.15)",
          "& .service-icon": {
            transform: "scale(1.1)",
            color: theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
          },
        },
      }}
    >
      <Box sx={{ p: 2, height: "100%" }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: expanded ? 2 : 0 }}
        >
          <Box
            className="service-icon"
            sx={{
              p: 1.5,
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
                fontSize: { xs: 24, sm: 32 },
                color: theme.palette.mode === "dark" ? "#00FFA3" : "#00805E",
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1rem", sm: "1.25rem" },
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
        </Stack>

        <Collapse in={expanded}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 3,
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            {t(`services.${service.key}.description`)}
          </Typography>

          <Button
            component={RouterLink}
            to={`/services?tab=${index}`}
            variant="contained"
            size="small"
            fullWidth
            sx={{
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
        </Collapse>
      </Box>
    </Card>
  );
};

const services = [
  { key: "software", icon: "Code" },
  { key: "microcontrollers", icon: "Chip" },
  { key: "domotics", icon: "Smart" },
  { key: "electronics", icon: "Robot" },
  { key: "networks", icon: "Network" },
  { key: "support", icon: "Support" },
];

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
