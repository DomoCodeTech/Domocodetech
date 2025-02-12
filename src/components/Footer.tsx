import React, { ReactElement } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  useTheme,
  alpha,
  Link
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

interface FooterProps {
  isEnglish: boolean;
}

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

const Footer: React.FC<FooterProps> = ({ isEnglish }) => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const companyName = 'TechnoCore';

  const content: FooterContent = {
    company: companyName,
    description: isEnglish
      ? 'Innovative solutions for a smarter future'
      : 'Soluciones innovadoras para un futuro más inteligente',
    sections: {
      company: {
        title: isEnglish ? 'Company' : 'Empresa',
        links: [
          { name: isEnglish ? 'About Us' : 'Nosotros', path: '/about' },
          { name: isEnglish ? 'Services' : 'Servicios', path: '/services' },
          { name: isEnglish ? 'Blog' : 'Blog', path: '/blog' },
          { name: isEnglish ? 'Contact' : 'Contacto', path: '/contact' }
        ]
      },
      services: {
        title: isEnglish ? 'Services' : 'Servicios',
        links: [
          { name: isEnglish ? 'Home Automation' : 'Domótica', path: '/services#automation' },
          { name: isEnglish ? 'Electronics' : 'Electrónica', path: '/services#electronics' },
          { name: isEnglish ? 'Robotics' : 'Robótica', path: '/services#robotics' },
          { name: isEnglish ? 'Software' : 'Software', path: '/services#software' }
        ]
      },
      support: {
        title: isEnglish ? 'Support' : 'Soporte',
        links: [
          { name: isEnglish ? 'Help Center' : 'Centro de Ayuda', path: '/help' },
          { name: isEnglish ? 'Documentation' : 'Documentación', path: '/docs' },
          { name: isEnglish ? 'Privacy Policy' : 'Política de Privacidad', path: '/privacy' },
          { name: isEnglish ? 'Terms of Service' : 'Términos de Servicio', path: '/terms' }
        ]
      }
    },
    social: {
      title: isEnglish ? 'Follow Us' : 'Síguenos',
      links: [
        { name: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com' },
        { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com' },
        { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://linkedin.com' },
        { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com' }
      ]
    },
    copyright: isEnglish
      ? `© ${currentYear} ${companyName}. All rights reserved.`
      : `© ${currentYear} ${companyName}. Todos los derechos reservados.`
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: alpha(theme.palette.background.paper, 0.1),
        py: 6,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                gutterBottom
                className="gradient-text"
                sx={{ fontWeight: 700 }}
              >
                {content.company}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                paragraph
                sx={{ mb: 2 }}
              >
                {content.description}
              </Typography>
              <Stack direction="row" spacing={1}>
                {content.social.links.map((social) => (
                  <IconButton
                    key={social.name}
                    component={Link}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-glow"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Links Sections */}
          {(Object.entries(content.sections) as [keyof typeof content.sections, Section][]).map(([key, section], index) => (
            <Grid item xs={12} sm={6} md={2} key={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={1}>
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      to={link.path}
                      color="text.secondary"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main'
                        }
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
            mt: 8,
            pt: 4,
            borderTop: 1,
            borderColor: 'divider',
            textAlign: 'center'
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {content.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 