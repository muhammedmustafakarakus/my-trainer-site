import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper,
  Avatar,
  Chip,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import VerifiedIcon from '@mui/icons-material/Verified';
import LaptopIcon from '@mui/icons-material/Laptop';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const highlights = [
    { icon: <PersonIcon />, label: "Birebir Özel Dersler" },
    { icon: <StarIcon />, label: "Uzman Eğitmenler" },
    { icon: <VerifiedIcon />, label: "Kalite Garantisi" },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 4 },
        pb: { xs: 8, md: 4 },
      }}
    >
      {/* Dekoratif şekiller */}
      <Box sx={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
        opacity: 0.2,
        top: '-200px',
        right: '-200px',
        zIndex: 0
      }} />
      
      <Box sx={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
        opacity: 0.1,
        bottom: '-150px',
        left: '-150px',
        zIndex: 0
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Box>
              <Chip
                label="Online Eğitim Platformu"
                color="secondary"
                size="medium"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  borderRadius: '16px',
                  px: 1,
                  '& .MuiChip-label': { px: 1.5 }
                }}
              />
              
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.secondary.light} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}
              >
                Kaliteli Eğitimle Geleceğinizi Şekillendirin
              </Typography>
              
              <Typography
                variant="h5"
                component="p"
                gutterBottom
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  maxWidth: '95%'
                }}
              >
                Akademik başarınızı artırmak için uzman eğitmenlerimizle birebir, 
                kişiselleştirilmiş online dersler alın ve potansiyelinizi keşfedin.
              </Typography>
              
              <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
                {highlights.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        width: 30,
                        height: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem'
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        display: { xs: index > 0 ? 'none' : 'block', sm: 'block' }
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: { xs: 4, md: 0 } }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={RouterLink}
                  to="/courses"
                  sx={{
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.3)'
                    }
                  }}
                  startIcon={<LocalLibraryIcon />}
                >
                  Dersleri Keşfet
                </Button>
                
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: '8px',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: '2px',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                  startIcon={<LaptopIcon />}
                >
                  Ücretsiz Deneme Dersi
                </Button>
              </Stack>
            </Box>
          </Box>
          
          <Box 
            sx={{ 
              width: { xs: '100%', md: '50%' }, 
              display: { xs: 'none', md: 'block' } 
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Paper
                elevation={16}
                sx={{
                  position: 'relative',
                  height: '400px',
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 3
                }}
              >
                <Box sx={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <SchoolIcon sx={{ fontSize: '5rem', mb: 4, color: theme.palette.secondary.main }} />
                  
                  <Paper
                    elevation={6}
                    sx={{
                      p: 2,
                      borderRadius: '12px',
                      width: '80%',
                      mb: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.95)',
                      color: 'text.primary',
                      transform: 'rotate(-2deg)'
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>M</Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Matematik Dersi
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Ahmet Hoca ile Birebir Özel Ders
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                  
                  <Paper
                    elevation={6}
                    sx={{
                      p: 2,
                      borderRadius: '12px',
                      width: '80%',
                      bgcolor: 'rgba(255, 255, 255, 0.95)',
                      color: 'text.primary',
                      transform: 'rotate(2deg)'
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ bgcolor: theme.palette.primary.main }}>F</Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Fizik Dersi
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Zeynep Hoca ile Birebir Özel Ders
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
              </Paper>
              
              {/* Stats indicator */}
              <Paper
                elevation={8}
                sx={{
                  position: 'absolute',
                  right: '-30px',
                  top: '50px',
                  p: 2,
                  borderRadius: '12px',
                  bgcolor: 'white',
                  color: 'text.primary',
                  width: '180px'
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                  500+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Memnun Öğrenci
                </Typography>
              </Paper>
              
              <Paper
                elevation={8}
                sx={{
                  position: 'absolute',
                  left: '-20px',
                  bottom: '50px',
                  p: 2,
                  borderRadius: '12px',
                  bgcolor: 'white',
                  color: 'text.primary',
                  width: '180px'
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                  20+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uzman Eğitmen
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;