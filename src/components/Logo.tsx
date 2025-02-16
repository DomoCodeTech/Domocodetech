import React from "react";
import { useTheme } from "@mui/material";

interface LogoProps {
  isDarkMode: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDarkMode }) => {
  const theme = useTheme();
  const accentColor = isDarkMode ? "#00E676" : "#00C853"; // Verde más brillante

  return (
    <svg
      width="260"
      height="50"
      viewBox="0 0 260 50"
      style={{
        marginRight: "2rem",
      }}
    >
      {/* Contenido principal */}
      <g>
        {/* Ícono de Casa */}
        <path
          d="M15,35v-10l8-7l8,7v10h-6v-5h-4v5z"
          fill={isDarkMode ? "#ffffff" : accentColor}
          stroke={theme.palette.text.primary}
          strokeWidth="1"
        />
        <path
          d="M23,15l12,10h-3v10h-18v-10h-3z"
          fill="none"
          stroke={theme.palette.text.primary}
          strokeWidth="1"
        />

        {/* Texto DOMO */}
        <text
          x="38"
          y="32"
          fontFamily="'Roboto Mono', monospace"
          fontSize="22"
          fontWeight="700"
          fill={theme.palette.text.primary}
        >
          DOMO
        </text>

        {/* Texto CODE con estilo código */}
        <text
          x="90"
          y="32"
          fontFamily="'Roboto Mono', monospace"
          fontSize="22"
          fontWeight="700"
          fill={accentColor}
        >
          {"<CODE/>"}
        </text>

        {/* Texto TECH con rectángulo */}
        <g transform="translate(185, 0)">
          <rect
            x="-5"
            y="12"
            width="55"
            height="28"
            fill="none"
            stroke={theme.palette.text.primary}
            strokeWidth="1"
            rx="4"
          />
          <text
            x="22"
            y="32"
            fontFamily="'Roboto Mono', monospace"
            fontSize="22"
            fontWeight="700"
            fill={theme.palette.text.primary}
            textAnchor="middle"
          >
            TECH
          </text>
        </g>

        {/* Ícono de Computadora */}
        <g transform="translate(238, 17)">
          <rect
            x="0"
            y="0"
            width="18"
            height="13"
            fill="none"
            stroke={theme.palette.text.primary}
            strokeWidth="1"
          />
          <rect
            x="6"
            y="13"
            width="6"
            height="4"
            fill="none"
            stroke={theme.palette.text.primary}
            strokeWidth="1"
          />
          <rect
            x="3"
            y="17"
            width="12"
            height="1"
            fill={theme.palette.text.primary}
          />
          <rect
            x="2"
            y="2"
            width="14"
            height="9"
            fill={accentColor}
            opacity="0.9"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
