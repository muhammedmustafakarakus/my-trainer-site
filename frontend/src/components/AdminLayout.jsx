import React from 'react';
import { Outlet, Link as RouterLink, useLocation, Routes, Route } from 'react-router-dom';
import { AppBar, Tabs, Tab, Box, Toolbar, Typography, Container } from '@mui/material';

const adminTabs = [
  { label: 'Home', path: '' }, // Boş path, /admin için index route olacak
  { label: 'About', path: 'about' },
  { label: 'Lessons', path: 'lessons' },
  { label: 'Student Coach', path: 'student-coach' },
  { label: 'Contact', path: 'contact' },
];

function AdminLayout() {
  const location = useLocation();

  // Mevcut path'e göre aktif tab'ı belirle
  // Örneğin, /admin/about ise, 'about' segmentini al
  // /admin ise, '' segmentini al (index)
  const currentTabPath = location.pathname.replace('/admin', '').replace(/^\//, '');
  
  const activeTab = adminTabs.findIndex(tab => tab.path === currentTabPath);
  // Eğer path tam eşleşmiyorsa (örn. /admin/non-existent-path), ilk tabı aktif et
  const selectedTabValue = activeTab === -1 ? 0 : activeTab;


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
        </Toolbar>
        <Tabs
          value={selectedTabValue}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="admin navigation tabs"
          sx={{ backgroundColor: 'secondary.main' }} // AppBar'ın rengiyle uyumlu
        >
          {adminTabs.map((tab, index) => (
            <Tab
              key={tab.label}
              label={tab.label}
              component={RouterLink}
              to={`/admin/${tab.path}`} // Tam path'i oluştur
              value={index} // Tabs component'inin value prop'u index bekler
              sx={{ 
                color: 'white',
                '&.Mui-selected': {
                  color: 'primary.light', // Aktif tab rengi (tema içinden)
                },
              }}
            />
          ))}
        </Tabs>
      </AppBar>
      
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {/* Nested Routes için Outlet */}
        <Outlet />
      </Container>

      <Box component="footer" sx={{ py: 2, textAlign: 'center', backgroundColor: 'background.paper', borderTop: '1px solid #e0e0e0' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Admin Panel
        </Typography>
      </Box>
    </Box>
  );
}
export default AdminLayout
// AdminLayout içinde nested route'ları tanımlamak için ayrı bir component
