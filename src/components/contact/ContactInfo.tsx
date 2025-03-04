import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  useTheme,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SITE_DATA } from "../../constants/siteData";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const ContactInfo = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: t("contact.info.email"),
      content: SITE_DATA.company.email,
    },
    {
      icon: <PhoneIcon />,
      title: t("contact.info.phone"),
      content: SITE_DATA.company.phone,
    },
    {
      icon: <LocationOnIcon />,
      title: t("contact.info.address"),
      content: SITE_DATA.company.address,
    },
    {
      icon: <AccessTimeIcon />,
      title: t("contact.info.hours"),
      content: SITE_DATA.company.schedule,
    },
  ];

  return (
    <Card
      className="hover-glow"
      sx={{
        height: "100%",
        bgcolor: alpha(theme.palette.background.paper, 0.1),
        background: `linear-gradient(135deg, ${alpha(
          theme.palette.secondary.main,
          0.05
        )} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
        backdropFilter: "blur(10px)",
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          border: `1px solid ${theme.palette.secondary.main}`,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mb: 4,
            background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          {t("contact.info.title")}
        </Typography>
        <Stack spacing={4}>
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateX(10px)",
                    "& .contact-icon": {
                      transform: "scale(1.2) rotate(10deg)",
                    },
                  },
                }}
              >
                <Box
                  className="contact-icon"
                  sx={{
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 1,
                    borderRadius: 1,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.content}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
