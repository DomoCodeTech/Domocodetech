import { motion } from "framer-motion";
import { Box, Typography, useTheme, Grid } from "@mui/material";
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
    <Box sx={{ py: 8 }}>
      <Box sx={{ position: "relative" }}>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{
                    y: -5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      position: "relative",
                      p: { xs: 1, md: 3 },
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.02)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      },
                      "&::after": {
                        content: index < steps.length - 1 ? '""' : "none",
                        position: "absolute",
                        top: { xs: "85%", md: "40%" },
                        right: { xs: "50%", md: "-25%" },
                        width: { xs: "2px", md: "50%" },
                        height: { xs: "50%", md: "2px" },
                        background:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.1)",
                        zIndex: 0,
                        transition: "all 0.3s ease",
                        transform: { xs: "translateX(50%)", md: "none" },
                      },
                      "&:hover::after": {
                        background: step.color,
                        height: { xs: "50%", md: "3px" },
                        width: { xs: "3px", md: "50%" },
                        transform: {
                          xs: "translateX(50%) scaleY(1.1)",
                          md: "scaleX(1.1)",
                        },
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 60, sm: 70, md: 80 },
                          height: { xs: 60, sm: 70, md: 80 },
                          borderRadius: "50%",
                          mx: "auto",
                          mb: { xs: 1, md: 2 },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                          background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`,
                          boxShadow: `0 8px 32px ${step.color}33`,
                          position: "relative",
                          zIndex: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.1)",
                            boxShadow: `0 12px 40px ${step.color}66`,
                          },
                        }}
                      >
                        {step.icon}
                      </Box>
                    </motion.div>
                    <Typography
                      variant="h6"
                      gutterBottom
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: step.color,
                        },
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProcessFlow;
