import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  TextField,
  Paper,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  InputAdornment,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Chip,
  Fade,
  Snackbar,
  Alert,
  Tooltip,
  styled
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from '../../../components/Footer';

// Özel stil bileşenleri
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[800],
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}40`,
    }
  },
  '& .MuiInputLabel-root': {
    transition: 'all 0.3s ease',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInputAdornment-root': {
    color: theme.palette.text.secondary,
  }
}));


const Community = () => {
  const theme = useTheme();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada gerçekleşecek
    console.log('Form submitted:', formState);
    setFormSubmitted(true);
    setSnackbarOpen(true);
    
    // Formu sıfırla
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      inquiryType: '',
      message: ''
    });
    
    // 3 saniye sonra sıfırla
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  
  const inquiryTypes = [
    'Genel Bilgi',
    'Özel Ders',
    'Grup Eğitimleri',
    'Kurumsal Eğitim',
    'Kariyer Danışmanlığı',
    'Diğer'
  ];
  
  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 5 },
        background: theme.palette.mode === 'light' 
          ? `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(241, 245, 249, 0.8) 100%)`
          : `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dekoratif arka plan elementleri */}
      <Box 
        sx={{ 
          position: 'absolute',
          width: { xs: '300px', md: '500px' },
          height: { xs: '300px', md: '500px' },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main})`,
          bottom: '-200px',
          left: '-100px',
          zIndex: 0
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'absolute',
          width: { xs: '200px', md: '400px' },
          height: { xs: '200px', md: '400px' },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main})`,
          top: '-150px',
          right: '-100px',
          zIndex: 0
        }} 
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Chip 
            label="İLETİŞİM" 
            color="primary" 
            size="small"
            sx={{ 
              mb: 2,
              fontWeight: 600,
              borderRadius: '16px',
              px: 1,
              backgroundColor: theme.palette.primary.main + '15',
              color: theme.palette.primary.main,
              border: `1px solid ${theme.palette.primary.main}30`,
            }}
          />
          
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Bize Ulaşın
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              mb: 6
            }}
          >
            Eğitim koçluğu hizmetlerimiz hakkında sorularınız mı var? 
            Herhangi bir konuda bilgi almak için formu doldurun, uzman ekibimiz en kısa sürede size dönüş yapacaktır.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={5} 
              sx={{ 
                borderRadius: 4, 
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                background: theme.palette.background.paper,
                position: 'relative'
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '8px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }}
                />
                
                <Box sx={{ height:"55vh",p: { xs: 3, md: 4 } }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3
                    }}
                  >
                    <SchoolOutlinedIcon sx={{ mr: 1 }} /> İletişim Formu
                  </Typography>
                  
                  <Typography variant="body2" paragraph color="text.secondary" sx={{ mb: 4 }}>
                    Aşağıdaki formu doldurarak bize ulaşabilirsiniz. Eğitim danışmanlarımız en kısa sürede size geri dönüş yapacaktır.
                  </Typography>
                  
                  <Fade in={!formSubmitted}>
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <StyledTextField
                            fullWidth
                            required
                            id="name"
                            label="Adınız"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonOutlineIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <StyledTextField
                            fullWidth
                            required
                            id="email"
                            label="E-posta Adresiniz"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <EmailOutlinedIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <StyledTextField
                            fullWidth
                            id="phone"
                            label="Telefon"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PhoneOutlinedIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth variant="outlined" sx={{ borderRadius: 3 }}>
                            <InputLabel id="inquiry-type-label">İlgilendiğiniz Konu</InputLabel>
                            <Select
                              labelId="inquiry-type-label"
                              id="inquiryType"
                              name="inquiryType"
                              value={formState.inquiryType}
                              onChange={handleChange}
                              label="İlgilendiğiniz Konu"
                              sx={{ 
                                borderRadius: 3,
                                backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
                                },
                              }}
                              startAdornment={
                                <InputAdornment position="start">
                                  <SubjectIcon />
                                </InputAdornment>
                              }
                            >
                              <MenuItem value="">
                                <em>Seçiniz</em>
                              </MenuItem>
                              {inquiryTypes.map((type) => (
                                <MenuItem key={type} value={type}>
                                  {type}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <StyledTextField
                            fullWidth
                            id="subject"
                            label="Konu Başlığı"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SubjectIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <StyledTextField
                            fullWidth
                            required
                            id="message"
                            label="Mesajınız"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            multiline
                            rows={5}
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                                  <MessageOutlinedIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            endIcon={<SendIcon />}
                            sx={{ 
                              py: 1.5, 
                              px: 4, 
                              borderRadius: 3,
                              boxShadow: `0 8px 20px ${theme.palette.primary.main}40`,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-3px)',
                                boxShadow: `0 12px 28px ${theme.palette.primary.main}40`,
                              }
                            }}
                          >
                            Gönder
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Fade>
                  
                  <Fade in={formSubmitted}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: 5
                      }}
                    >
                      <CheckCircleOutlineIcon 
                        color="primary" 
                        sx={{ 
                          fontSize: '5rem',
                          mb: 2
                        }} 
                      />
                      <Typography variant="h5" gutterBottom fontWeight={600}>
                        Teşekkürler!
                      </Typography>
                      <Typography variant="body1" align="center" color="text.secondary">
                        Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={5000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Mesajınız başarıyla gönderildi!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Community;