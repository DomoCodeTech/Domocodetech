import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { FloatingParticle } from "../components/contact/FloatingParticle";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";
import { WhatsAppButton } from "../components/contact/WhatsAppButton";
import TechSphere from "../components/3D/TechSphere";
import PrismaticBackground from "../components/layout/PrismaticBackground";
import { FormData } from "../types/contact";
import { SITE_DATA } from "../constants/siteData";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    reply_to: "",
    phone_number: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showNotification = (message: string, severity: "success" | "error") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      showNotification(t("contact.form.captchaRequired"), "error");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        SITE_DATA.emailjs.serviceId,
        SITE_DATA.emailjs.templateId,
        formRef.current!,
        SITE_DATA.emailjs.publicKey
      );

      showNotification(t("contact.form.success"), "success");
      setFormData({
        from_name: "",
        reply_to: "",
        phone_number: "",
        message: "",
      });
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
    } catch (error) {
      console.error(error);
      showNotification(t("contact.form.error"), "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <PrismaticBackground>
      <Box sx={{ py: 16, position: "relative", overflow: "hidden" }}>
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <FloatingParticle delay={i * 0.5} />
          </Box>
        ))}

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              order={{ xs: 1, md: 1 }}
              sx={{
                width: "100%",
                textAlign: { xs: "center", md: "left" },
                px: { xs: 2, md: 3 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 3,
                    fontWeight: "bold",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {t("contact.title")}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    textAlign: { xs: "justify", md: "justify" },
                  }}
                >
                  {t("contact.subtitle")}
                </Typography>
              </motion.div>
            </Grid>

            <Grid
              item
              md={6}
              order={{ xs: 2, md: 2 }}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                sx={{
                  height: "500px",
                  width: "100%",
                  position: "relative",
                }}
              >
                <TechSphere height="100%" />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 3, md: 3 }}>
              <ContactForm
                formData={formData}
                loading={loading}
                captchaValue={captchaValue}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setCaptchaValue={setCaptchaValue}
                formRef={formRef}
                recaptchaRef={recaptchaRef}
              />
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 4, md: 4 }}>
              <ContactInfo />
            </Grid>
          </Grid>
        </Container>

        <WhatsAppButton />

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            variant="filled"
            sx={{
              width: "100%",
              backdropFilter: "blur(10px)",
              background:
                snackbarSeverity === "success"
                  ? "linear-gradient(45deg, #00805E, #00FFA3)"
                  : "linear-gradient(45deg, #FF3D00, #FF8A65)",
            }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </PrismaticBackground>
  );
};

export default Contact;
