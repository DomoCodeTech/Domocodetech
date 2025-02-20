import { motion } from "framer-motion";
import { Box, Typography, useTheme, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProcessFlow = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const steps = [
    {
      icon: "🎯",
      title: t("processFlow.steps.consultation.title"),
      description: t("processFlow.steps.consultation.description"),
      color: "#FF6B6B",
    },
    {
      icon: "📋",
      title: t("processFlow.steps.planning.title"),
      description: t("processFlow.steps.planning.description"),
      color: "#4ECDC4",
    },
    {
      icon: "⚙️",
      title: t("processFlow.steps.development.title"),
      description: t("processFlow.steps.development.description"),
      color: "#45B7D1",
    },
    {
      icon: "🚀",
      title: t("processFlow.steps.delivery.title"),
      description: t("processFlow.steps.delivery.description"),
      color: "#96CEB4",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          position: "relative",
          pt: { md: 3 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "63%",
            left: 0,
            right: 0,
            height: 2,                                    // Grosor de la línea
            background: theme.palette.mode === "dark"     // Color de la línea
              ? "rgba(255,255,255,0.1)"                  // Color en modo oscuro
              : "rgba(0,0,0,0.1)",                       // Color en modo claro
            zIndex: 0,                                   // Para que esté detrás de los iconos
            transform: "translateY(-50%)",               // Centra verticalmente
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 12 },
            overflowX: { xs: "auto", md: "visible" },
            overflowY: { xs: "hidden", md: "visible" },
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 2 },
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            width: "100%",
            justifyContent: { xs: "flex-start", md: "space-between" },
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: { xs: 0, md: 6 },
              right: { xs: 0, md: 6 },
              height: "100%",
              pointerEvents: "none",
              background: theme.palette.background.default,
              zIndex: -1,
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Box
                sx={{
                  flex: { xs: "0 0 auto", md: "1 1 0" },
                  width: { xs: "200px", md: "100%" },
                  maxWidth: { md: "calc(25% - 16px)" },
                  scrollSnapAlign: "center",
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: { xs: 2, md: 3 },
                  minWidth: { xs: "180px", md: "12" },
                  mt: { md: 2 },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    sx={{
                      width: { xs: 64, md: 80 },
                      height: { xs: 64, md: 80 },
                      borderRadius: "20px",
                      background:
                        theme.palette.mode === "dark"
                          ? `linear-gradient(135deg, ${step.color}30, transparent)`
                          : `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: { xs: "2rem", md: "2.25rem" },
                      position: "relative",
                      mb: 2,
                      border: "2px solid",
                      borderColor: `${step.color}40`,
                      boxShadow: `0 8px 24px ${step.color}20`,
                      transition: "all 0.3s ease",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${step.color}40, transparent)`,
                        borderRadius: "inherit",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: `0 12px 28px ${step.color}30`,
                        "&::before": {
                          opacity: 0.2,
                        },
                      },
                    }}
                  >
                    {step.icon}
                  </Box>
                </motion.div>

                <Box sx={{ maxWidth: "200px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.25rem" },
                      fontWeight: 600,
                      color: step.color,
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.7)"
                          : "text.secondary",
                      fontSize: { xs: "0.875rem", md: "0.9rem" },
                      lineHeight: 1.6,
                      display: "-webkit-box",
                      WebkitLineClamp: { xs: 3, md: 1 },
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: { md: "nowrap" },
                      maxWidth: "100%",
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>

                {/* Step Number */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 0, md: -4 },
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: step.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    boxShadow: `0 4px 12px ${step.color}40`,
                    zIndex: 2,
                  }}
                >
                  {index + 1}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProcessFlow;
