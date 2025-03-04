import { IconButton, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { SITE_DATA } from "../../constants/siteData";

export const WhatsAppButton = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open(SITE_DATA.social.whatsapp, "_blank");
  };

  return (
    <Tooltip title={t("contact.whatsapp")} placement="left">
      <IconButton
        onClick={handleWhatsAppClick}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          bgcolor: "#25D366",
          width: 56,
          height: 56,
          "&:hover": {
            bgcolor: "#128C7E",
            transform: "scale(1.1)",
          },
          transition: "all 0.3s ease-in-out",
          zIndex: 1000,
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)",
            },
            "70%": {
              boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)",
            },
            "100%": {
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
            },
          },
        }}
      >
        <WhatsAppIcon sx={{ color: "#fff", fontSize: 32 }} />
      </IconButton>
    </Tooltip>
  );
};
