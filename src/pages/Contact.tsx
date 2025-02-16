import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Stack,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";
import { SITE_DATA } from "../constants/siteData";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

interface FormData {
  from_name: string;
  reply_to: string;
  phone_number: string;
  message: string;
}

const FloatingParticle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "linear-gradient(45deg, #00FFA3, #00805E)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [-20, -60],
        x: Math.random() * 40 - 20,
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
};

const Contact: React.FC = () => {
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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
      content: t("contact.info.location"),
    },
    {
      icon: <AccessTimeIcon />,
      title: t("contact.info.hours"),
      content: t("contact.info.businessHours"),
    },
  ];

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
      showNotification("Please complete the captcha", "error");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_kdn8927", // EmailJS service ID
        "template_ua79n8j", // EmailJS template ID
        formRef.current!,
        "otjRpe6GXf8YpbFmq" // EmailJS public key
      );

      if (result.text === "OK") {
        showNotification(t("common.success"), "success");
        setFormData({
          from_name: "",
          reply_to: "",
          phone_number: "",
          message: "",
        });
        recaptchaRef.current?.reset();
        setCaptchaValue(null);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      showNotification(t("common.error"), "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: 8,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(circle at 50% 50%, rgba(0, 255, 163, 0.1) 0%, rgba(0, 0, 0, 0) 50%)"
              : "radial-gradient(circle at 50% 50%, rgba(0, 128, 94, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
          zIndex: 0,
        },
      }}
    >
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

      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background:
            theme.palette.mode === "dark"
              ? "rgba(0, 255, 163, 0.15)"
              : "rgba(0, 128, 94, 0.15)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "screen",
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            className="gradient-text"
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 3,
              fontWeight: "bold",
            }}
          >
            {t("contact.title")}
          </Typography>
          <Typography
            variant="h5"
            textAlign="justify"
            color="text.secondary"
            paragraph
            sx={{
              mb: 4,
              maxWidth: "1000px",
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              "& strong": {
                color: theme.palette.primary.main,
                fontWeight: 600,
              },
            }}
          >
            {t("contact.subtitle")}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                component="form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="hover-glow"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                sx={{
                  height: "100%",
                  bgcolor: alpha(theme.palette.background.paper, 0.1),
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.05
                  )} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  transition: "all 0.3s ease-in-out",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    border: `1px solid ${theme.palette.primary.main}`,
                    "& .send-icon": {
                      transform: "translateX(10px)",
                    },
                  },
                }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label={t("contact.form.name")}
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t("contact.form.email")}
                      name="reply_to"
                      type="email"
                      value={formData.reply_to}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t("contact.form.phone")}
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t("contact.form.message")}
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                          },
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                          },
                        },
                      }}
                    />
                    <input type="hidden" name="to_name" value="DomoCodeTech" />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LfZltgqAAAAAHbdAAFIkDlHrMb2NeLV3nVMz_oM"
                        onChange={(value) => setCaptchaValue(value)}
                        theme={theme.palette.mode}
                      />
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={loading || !captchaValue}
                      className="hover-glow"
                      endIcon={
                        <motion.div
                          className="send-icon"
                          style={{ display: "inline-flex" }}
                          animate={{ x: loading ? 0 : 10 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          {loading ? (
                            <CircularProgress size={24} color="inherit" />
                          ) : (
                            <SendIcon />
                          )}
                        </motion.div>
                      }
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "-100%",
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                          transition: "0.5s",
                        },
                        "&:hover::before": {
                          left: "100%",
                        },
                      }}
                    >
                      {t("contact.form.submit")}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                className="hover-glow"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                sx={{
                  height: "100%",
                  bgcolor: alpha(theme.palette.background.paper, 0.1),
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.secondary.main,
                    0.05
                  )} 0%, ${alpha(theme.palette.background.paper, 0.1)} 100%)`,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${alpha(
                    theme.palette.secondary.main,
                    0.1
                  )}`,
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
            </Grid>
          </Grid>
        </motion.div>
      </Container>

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
  );
};

export default Contact;
