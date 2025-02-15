/**
 * Navbar.tsx
 * Barra de navegación principal que incluye:
 * - Logo de la empresa
 * - Menú de navegación
 * - Selector de idioma
 * - Selector de tema (claro/oscuro)
 * - Menú móvil para pantallas pequeñas
 */
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
  alpha
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleDarkMode
}) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);

  const content = {
    logo: 'TechnoCore',
    pages: [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.about'), path: '/about' },
      { name: t('nav.services'), path: '/services' },
      { name: t('nav.blog'), path: '/blog' },
      { name: t('nav.contact'), path: '/contact' }
    ],
    themeTooltip: t(isDarkMode ? 'theme.switchToLight' : 'theme.switchToDark')
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleCloseLangMenu();
  };

  return (
    <AppBar 
      position="fixed"
      elevation={0}
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'rgba(10, 10, 10, 0.5)'
          : 'rgba(240, 247, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 4px 30px rgba(0, 0, 0, 0.15)'
          : '0 4px 30px rgba(42, 67, 101, 0.1)',
        top: { xs: '16px', md: '20px' },
        left: '50%',
        transform: 'translateX(-50%)',
        width: { xs: 'calc(100% - 32px)', md: '90%' },
        maxWidth: '1200px',
        borderRadius: '16px',
        margin: '0 auto',
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters
          sx={{ 
            minHeight: { xs: '56px', sm: '64px' },
            transition: 'all 0.3s ease',
            px: { xs: 2, sm: 3 }
          }}
        >
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
              color: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.dark',
              textDecoration: 'none',
              letterSpacing: '.1rem',
              transition: 'all 0.3s ease',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            {content.logo}
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ 
            flexGrow: 0, 
            display: { xs: 'flex', md: 'none' },
            mr: 1
          }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ 
                color: theme.palette.text.primary,
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1)
                }
              }}
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
                '& .MuiPaper-root': {
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? alpha(theme.palette.background.paper, 0.95)
                    : theme.palette.background.paper,
                  boxShadow: theme.shadows[8],
                  borderRadius: '12px',
                  mt: 1,
                  minWidth: '200px',
                  backdropFilter: 'blur(8px)'
                },
                '& .MuiMenuItem-root': {
                  py: 1.5,
                  px: 2.5,
                  borderRadius: '8px',
                  mx: 1,
                  my: 0.5,
                  transition: 'all 0.2s ease',
                  '&.Mui-selected': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.25),
                    }
                  },
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1)
                  }
                },
                '& .MuiList-root': {
                  py: 1
                }
              }}
            >
              {content.pages.map((page) => (
                <MenuItem 
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  selected={location.pathname === page.path}
                >
                  <Typography 
                    sx={{ 
                      fontWeight: location.pathname === page.path ? 600 : 400,
                      color: location.pathname === page.path 
                        ? 'primary.main' 
                        : 'text.primary'
                    }}
                  >
                    {page.name}
                  </Typography>
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
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.dark',
              textDecoration: 'none',
              letterSpacing: '.1rem',
              transition: 'all 0.3s ease',
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              pointerEvents: 'none' // Evita que el logo sea clickeable en mobile
            }}
          >
            {content.logo}
          </Typography>

          {/* Añadir un espaciador para mantener el layout en mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />

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
                  },
                  backgroundColor: location.pathname === page.path ? 'rgba(0, 0, 0, 0.04)' : 'transparent'
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Selector de idioma y tema */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <IconButton 
              onClick={handleOpenLangMenu} 
              sx={{ color: theme.palette.text.primary }}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElLang}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: theme.shadows[3],
                  borderRadius: '8px',
                  mt: 1
                },
                '& .MuiMenuItem-root': {
                  py: 1,
                  px: 2,
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.05)
                  }
                }
              }}
            >
              <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage('es')}>Español</MenuItem>
            </Menu>

            <IconButton 
              onClick={toggleDarkMode} 
              sx={{ color: theme.palette.text.primary }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 