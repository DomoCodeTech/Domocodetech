import React, { ReactElement } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  useTheme,
  alpha,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
// Importing a custom TikTok icon using SvgIcon
import { SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface SocialLink {
  name: string;
  icon: ReactElement;
  url: string;
}

interface PageLink {
  name: string;
  path: string;
}

interface Section {
  title: string;
  links: PageLink[];
}

interface FooterContent {
  company: string;
  description: string;
  sections: {
    company: Section;
    services: Section;
    support: Section;
  };
  social: {
    title: string;
    links: SocialLink[];
  };
  copyright: string;
}

const TikTokIconCustom = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 512 512" sx={{ fontSize: 24 }}>
    <path
      d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
      style={{
        transition: "all 0.2s ease",
        filter:
          props.sx?.color === "primary.main"
            ? "drop-shadow(0 0 8px rgba(0, 255, 163, 0.6))"
            : "none",
      }}
    />
  </SvgIcon>
);

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const companyName = "DomoCodeTech";
  const { t } = useTranslation();

  const content: FooterContent = {
    company: companyName,
    description: t("footer.description"),
    sections: {
      company: {
        title: t("footer.sections.company.title"),
        links: [
          { name: t("footer.sections.company.about"), path: "/about" },
          { name: t("footer.sections.company.services"), path: "/services" },
          { name: t("footer.sections.company.blog"), path: "/blog" },
          { name: t("footer.sections.company.contact"), path: "/contact" },
        ],
      },
      services: {
        title: t("footer.sections.services.title"),
        links: [
          {
            name: t("footer.sections.services.automation"),
            path: "/services?tab=2",
          },
          {
            name: t("footer.sections.services.electronics"),
            path: "/services?tab=3",
          },
          {
            name: t("footer.sections.services.robotics"),
            path: "/services?tab=4",
          },
          {
            name: t("footer.sections.services.software"),
            path: "/services?tab=5",
          },
        ],
      },
      support: {
        title: t("footer.sections.support.title"),
        links: [
          { name: t("footer.sections.support.help"), path: "/help" },
          { name: t("footer.sections.support.docs"), path: "/docs" },
          { name: t("footer.sections.support.privacy"), path: "/privacy" },
          { name: t("footer.sections.support.terms"), path: "/terms" },
        ],
      },
    },
    social: {
      title: t("footer.social.title"),
      links: [
        {
          name: "Facebook",
          icon: <FacebookIcon />,
          url: "https://www.facebook.com/profile.php?id=61555679703137&locale=es_LA",
        },
        {
          name: "Instagram",
          icon: <InstagramIcon />,
          url: "https://www.instagram.com/domocodetech/",
        },
        {
          name: "YouTube",
          icon: <YouTubeIcon />,
          url: "https://www.youtube.com/@DomoCodeTech",
        },
        {
          name: "TikTok",
          icon: <TikTokIconCustom />,
          url: "https://www.tiktok.com/@domocodetech",
        },
        {
          name: "GitHub",
          icon: <GitHubIcon />,
          url: "https://github.com/DomoCodeTech",
        },
      ],
    },
    copyright: t("footer.copyright", {
      year: currentYear,
      company: companyName,
    }),
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: alpha(theme.palette.background.paper, 0.1),
        py: { xs: 8, md: 6 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
              : "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 4 }}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                gutterBottom
                className="gradient-text"
                sx={{
                  fontWeight: 700,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                {content.company}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                paragraph
                sx={{
                  mb: 2,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                {content.description}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: { xs: "center", sm: "flex-start" },
                  mb: { xs: 3, sm: 0 },
                }}
              >
                {content.social.links.map((social) => (
                  <IconButton
                    key={social.name}
                    component={Link}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-glow"
                    sx={{
                      color: "text.secondary",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Links Sections */}
          {Object.entries(content.sections).map(([key, section], index) => (
            <Grid item xs={6} sm={6} md={2} key={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    textAlign: { xs: "left", sm: "left" },
                  }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={1.5}>
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      to={link.path}
                      color="text.secondary"
                      sx={{
                        textDecoration: "none",
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "primary.main",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: 1,
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            {content.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
