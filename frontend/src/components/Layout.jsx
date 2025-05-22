import React, { useState } from 'react';
// !!! EKSİK IMPORT: Outlet'i react-router-dom'dan import edin !!!
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Avatar, 
  Button, 
  Tooltip, 
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ArticleIcon from '@mui/icons-material/Article';
import StarIcon from '@mui/icons-material/Star';
// import { Link as RouterLink } from 'react-router-dom'; // Zaten yukarıda import edilmiş
import Footer from './Footer';
import headerImage from '../assets/headerImage.jpg'; // Doğru import yolu olduğundan emin olun

const pages = [
  { name: 'Ana Sayfa', path: '/', icon: <HomeIcon /> },
  { name: 'Hakkımda', path: '/about', icon: <InfoIcon /> },
  { name: 'Dersler', path: '/courses', icon: <LibraryBooksIcon /> },
  { name: 'Öğrenci Koçluğu', path: '/courses', icon: <LibraryBooksIcon /> }, // Aynı path'e sahip iki ders?
  { name: 'Kamplar ve Etkinlikler', path: '/courses', icon: <LibraryBooksIcon /> }, // Aynı path'e sahip üç ders?
  { name: 'Yorumlar', path: '/testimonials', icon: <StarIcon /> },
  { name: 'Blog', path: '/blog', icon: <ArticleIcon /> },
  { name: 'İletişim', path: '/contact', icon: <ContactSupportIcon /> },
];

const settings = [
  { name: 'Profilim', path: '/profile' },
  { name: 'Derslerim', path: '/dashboard' },
  { name: 'Çıkış', path: '/logout' }, // Çıkış işlemi için bir fonksiyon gerekebilir
];

// Layout component'i artık children prop'u almayacak.
function Layout() { 
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const isLoggedIn = false; // Normalde authentication durumunu kontrol edecek

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo için - Desktop */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                width: 45,
                height: 45,
                backgroundImage: `url(${headerImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius:50
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MATX
            </Typography>

            {/* Mobil menü butonu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <Box sx={{ py: 2, px: 2, display: 'flex', alignItems: 'center' }}>
                    <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      MATX
                    </Typography>
                  </Box>
                  <Divider />
                  <List>
                    {pages.map((page) => (
                      <ListItem 
                        key={page.name} // `button` prop'u ListItem'da doğrudan yok, sx veya component ile stil verilebilir.
                        component={RouterLink} 
                        to={page.path}
                        sx={{ '&:hover': { backgroundColor: 'action.hover' } }} // Örnek hover efekti
                      >
                        <ListItemIcon>
                          {page.icon}
                        </ListItemIcon>
                        <ListItemText primary={page.name} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
            
            {/* Logo için - Mobile */}
            <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'primary.main' }} />
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MATX
            </Typography>
            
            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  sx={{ my: 2, color: 'text.primary', display: 'block', mx: 1 }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Kullanıcı menüsü */}
            <Box sx={{ flexGrow: 0 }}>
              {isLoggedIn ? (
                <>
                  <Tooltip title="Ayarları aç">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Kullanıcı Avatar" src="/static/images/avatar/1.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting.name} component={RouterLink} to={setting.path} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Box sx={{ display: 'flex' }}>
                  <Button 
                    component={RouterLink} 
                    to="/login" 
                    sx={{ color: 'primary.main', mr: 1 }}
                  >
                    Giriş
                  </Button>
                  <Button 
                    component={RouterLink} 
                    to="/register" 
                    variant="contained" 
                    color="primary"
                  >
                    Kayıt Ol
                  </Button>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        {/* !!! DEĞİŞİKLİK BURADA: children yerine Outlet kullanın !!! */}
        <Outlet />
      </Box>
      
      <Footer />
    </Box>
  );
}

export default Layout;