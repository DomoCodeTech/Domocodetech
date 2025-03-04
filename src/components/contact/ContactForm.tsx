import React from "react";
import {
  TextField,
  Button,
  Stack,
  Box,
  Card,
  CardContent,
  useTheme,
  alpha,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { SITE_DATA } from "../../constants/siteData";
import { FormData } from "../../types/contact";

interface ContactFormProps {
  formData: FormData;
  loading: boolean;
  captchaValue: string | null;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setCaptchaValue: (value: string | null) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
  recaptchaRef: React.RefObject<ReCAPTCHA| null>;
}

export const ContactForm = ({
  formData,
  loading,
  captchaValue,
  handleSubmit,
  handleChange,
  setCaptchaValue,
  formRef,
  recaptchaRef,
}: ContactFormProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Card
      component="form"
      ref={formRef}
      onSubmit={handleSubmit}
      className="hover-glow"
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
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={SITE_DATA.recaptcha.siteKey}
              onChange={setCaptchaValue}
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
  );
};
