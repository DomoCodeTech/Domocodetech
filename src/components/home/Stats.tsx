/**
 * Stats.tsx
 * Componente que muestra las estadísticas clave de la empresa.
 * * Mejoras UI/UX:
 * - Diseño Glassmorphism con bordes sutiles
 * - Hover con glow dinámico basado en el color del icono
 * - Animaciones fluidas tipo "spring" con Framer Motion
 * - Iconos encapsulados para mayor impacto visual
 */
import { Box, Container, Grid, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { MdWorkHistory, MdDoneAll, MdPeople, MdGroups } from "react-icons/md";

const Stats = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Extraer el número y el sufijo del string
  const parseNumberString = (str: string) => {
    const value = parseInt(str) || 0;
    const suffix = str.replace(/[0-9]/g, "");
    return { value, suffix };
  };

  const stats = t("about.stats", { returnObjects: true }) as Array<{
    number: string;
    label: string;
  }>;

  // Paleta de colores vibrantes para cada métrica
  const statIcons = [
    { Icon: MdWorkHistory, color: "#00FFA3" }, 
    { Icon: MdDoneAll, color: "#FF6B6B" }, 
    { Icon: MdPeople, color: "#4DABF7" }, 
    { Icon: MdGroups, color: "#FFD93D" }, 
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        background: "transparent",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => {
            const { value, suffix } = parseNumberString(stat.number);
            const { Icon, color } = statIcons[index];

            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      textAlign: "center",
                      p: 4,
                      borderRadius: 4,
                      // Efecto Glassmorphism
                      background: isDark
                        ? "linear-gradient(145deg, rgba(30,30,30,0.4) 0%, rgba(20,20,20,0.6) 100%)"
                        : "linear-gradient(145deg, rgba(226,236,246,0.86) 0%, rgba(214,226,238,0.95) 100%)",
                      backdropFilter: "blur(12px)",
                      border: `1px solid ${isDark ? alpha("#ffffff", 0.05) : alpha("#000000", 0.05)}`,
                      boxShadow: isDark
                        ? `0 8px 32px ${alpha("#000000", 0.4)}`
                        : `0 8px 24px ${alpha("#1E2A36", 0.12)}`,
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      
                      "&:hover": {
                        transform: "translateY(-10px)",
                        border: `1px solid ${alpha(color, 0.5)}`,
                        // Glow dinámico basado en el color del icono
                        boxShadow: `0 15px 35px ${alpha(color, 0.2)}`,
                        
                        "& .icon-container": {
                          transform: "scale(1.15) rotate(5deg)",
                          background: color,
                          color: isDark ? "#121212" : "#ffffff",
                        },
                      },
                    }}
                  >
                    {/* Borde superior de acento */}
                    <Box 
                      sx={{ 
                        position: "absolute", 
                        top: 0, left: 0, right: 0, 
                        height: 4, 
                        background: color,
                        opacity: 0.8
                      }} 
                    />

                    {/* Contenedor del Icono */}
                    <Box
                      className="icon-container"
                      sx={{
                        width: 72,
                        height: 72,
                        margin: "0 auto",
                        mb: 3,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: alpha(color, 0.15),
                        color: color,
                        transition: "all 0.4s ease-in-out",
                        "& > svg": {
                          fontSize: "2rem",
                        },
                      }}
                    >
                      <Icon />
                    </Box>

                    {/* Número y Sufijo */}
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2.5rem", md: "3rem" },
                        fontWeight: 800,
                        mb: 1,
                        // Texto con degradado
                        background: `linear-gradient(135deg, ${isDark ? '#fff' : '#111'} 0%, ${color} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-flex",
                        alignItems: "center"
                      }}
                    >
                      <CountUp end={value} duration={2.5} separator="," />
                      {suffix && (
                        <Box component="span" sx={{ color: color, ml: 0.5 }}>
                          {suffix}
                        </Box>
                      )}
                    </Typography>

                    {/* Etiqueta */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontSize: "0.875rem"
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;