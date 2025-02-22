import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface PrismaticBackgroundProps {
  children: React.ReactNode;
}

const PrismaticBackground = ({ children }: PrismaticBackgroundProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background:
          theme.palette.mode === "dark"
            ? // Modo oscuro - efecto prismático con capas
              `linear-gradient(120deg, 
              rgba(5, 5, 5, 1) 0%,
              rgba(0, 30, 45, 0.95) 25%,
              rgba(0, 40, 35, 0.9) 50%,
              rgba(3, 22, 13, 0.66) 75%,
              rgba(5, 5, 5, 1) 100%),
            linear-gradient(240deg,
              rgba(0, 255, 163, 0.03) 0%,
              rgba(0, 198, 255, 0.03) 33%,
              rgba(163, 0, 255, 0.03) 66%,
              rgba(0, 255, 163, 0.03) 100%),
            radial-gradient(circle at 50% 50%,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 20, 19, 0.95) 100%)`
            : // Modo claro - efecto prisma suave
              `linear-gradient(120deg,
              rgba(250, 250, 250, 1) 0%,
              rgba(255, 225, 210, 0.95) 25%,
              rgba(255, 215, 220, 0.9) 50%,
              rgba(252, 233, 242, 0.66) 75%,
              rgba(250, 250, 250, 1) 100%),
            linear-gradient(240deg,
              rgba(255, 0, 92, 0.03) 0%,
              rgba(255, 57, 0, 0.03) 33%,
              rgba(92, 255, 0, 0.03) 66%,
              rgba(255, 0, 92, 0.03) 100%),
            radial-gradient(circle at 50% 50%,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 235, 236, 0.95) 100%)`,
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            theme.palette.mode === "dark"
              ? `radial-gradient(circle at 0% 0%, rgba(0, 255, 163, 0.08) 0%, transparent 50%),
               radial-gradient(circle at 100% 0%, rgba(0, 198, 255, 0.08) 0%, transparent 50%),
               radial-gradient(circle at 100% 100%, rgba(163, 0, 255, 0.08) 0%, transparent 50%),
               radial-gradient(circle at 0% 100%, rgba(255, 198, 0, 0.08) 0%, transparent 50%)`
              : `radial-gradient(circle at 0% 0%, rgba(255, 0, 92, 0.05) 0%, transparent 50%),
               radial-gradient(circle at 100% 0%, rgba(255, 57, 0, 0.05) 0%, transparent 50%),
               radial-gradient(circle at 100% 100%, rgba(92, 255, 0, 0.05) 0%, transparent 50%),
               radial-gradient(circle at 0% 100%, rgba(0, 57, 255, 0.05) 0%, transparent 50%)`,
          zIndex: 0,
          pointerEvents: "none",
          mixBlendMode: "soft-light",
          animation: "prismaticShift 15s ease-in-out infinite",
        },
        "@keyframes prismaticShift": {
          "0%, 100%": {
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            filter: "hue-rotate(30deg)",
          },
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${
            theme.palette.mode === "dark" ? "%23ffffff" : "%23000000"
          }' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
};

export default PrismaticBackground;
