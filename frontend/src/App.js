import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import TestimonialsPage from './pages/TestimonialsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import Layout from './components/Layout'; // Genel sayfalar için Layout
import ProfilePage from './pages/ProfilePage';
import BookingPage from './pages/BookingPage';
import SuccessPage from './pages/SuccessPage';
import AdminRoutes from './AdminRoutes'; // Admin route'larını içeren component

// Theme oluşturma (önceki kodunuzdan)
const theme = createTheme({
  palette: {
    primary: {
      main: '#00695C',
      light: '#4DB6AC', // Aktif tab için daha açık bir ton
      dark: '#00564B',
    },
    secondary: {
      main: '#004D40',
      light: '#4D9CAF',
      dark: '#00221F',
    },
    third: {
      main: '#00695C',
      light: '#757de8',
      dark: '#13971B',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 600, fontSize: '1.75rem' },
    h4: { fontWeight: 600, fontSize: '1.5rem' },
    h5: { fontWeight: 500, fontSize: '1.25rem' },
    h6: { fontWeight: 500, fontSize: '1rem' },
    button: { fontWeight: 500, textTransform: 'none' },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Genel Layout'u kullanan sayfalar */}
          {/* Layout bileşeni bir 'element' prop'u olarak verilir ve içindeki <Outlet /> child route'ları render eder. */}
          <Route element={<Layout />}>
            {/* Ana sayfa için 'index' route'u. Bu, parent route'un path'i ('/') ile eşleştiğinde HomePage'i render eder. */}
            <Route index element={<HomePage />} />
            {/* Alternatif olarak path="/" de kullanılabilirdi, ancak parent <Route> pathsiz ise index daha doğrudur. */}
            {/* <Route path="/" element={<HomePage />} /> */}

            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/booking/:courseId" element={<BookingPage />} />
            <Route path="/booking/success" element={<SuccessPage />} />
          </Route>

          {/* Admin Paneli Route'ları */}
          {/* /admin ile başlayan tüm yollar AdminRoutes component'i tarafından yönetilecek */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* İsteğe bağlı: 404 Not Found sayfası */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;