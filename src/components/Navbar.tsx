import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  alpha,
  Stack,
  Tooltip,
  Switch
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TranslateIcon from '@mui/icons-material/Translate';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isEnglish: boolean;
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
  isEnglish,
  toggleLanguage
}) => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const content = {
    logo: 'TechnoCore',
    pages: [
      { name: isEnglish ? 'Home' : 'Inicio', path: '/' },
      { name: isEnglish ? 'About' : 'Nosotros', path: '/about' },
      { name: isEnglish ? 'Services' : 'Servicios', path: '/services' },
      { name: isEnglish ? 'Blog' : 'Blog', path: '/blog' },
      { name: isEnglish ? 'Contact' : 'Contacto', path: '/contact' }
    ],
    themeTooltip: isEnglish 
      ? `Switch to ${isDarkMode ? 'light' : 'dark'} mode` 
      : `Cambiar a modo ${isDarkMode ? 'claro' : 'oscuro'}`,
    languageTooltip: isEnglish
      ? 'Switch to Spanish'
      : 'Cambiar a Inglés'
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed"
      sx={{
        bgcolor: alpha(theme.palette.background.default, 0.8),
        backdropFilter: 'blur(8px)',
        boxShadow: theme.shadows[3]
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              letterSpacing: '.1rem'
            }}
          >
            {content.logo}
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {content.pages.map((page) => (
                <MenuItem 
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              letterSpacing: '.1rem'
            }}
          >
            {content.logo}
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {content.pages.map((page) => (
              <Button
                key={page.path}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  mx: 1,
                  color: 'text.primary',
                  display: 'block',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: 'primary.main',
                    transition: 'width 0.3s ease-in-out'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Theme and Language Toggles */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title={content.themeTooltip}>
              <IconButton onClick={toggleDarkMode} color="inherit">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? 'dark' : 'light'}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </motion.div>
                </AnimatePresence>
              </IconButton>
            </Tooltip>
            <Tooltip title={content.languageTooltip}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TranslateIcon sx={{ mr: 1 }} />
                <Switch
                  checked={isEnglish}
                  onChange={toggleLanguage}
                  color="primary"
                />
              </Box>
            </Tooltip>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 