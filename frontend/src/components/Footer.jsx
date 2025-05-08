import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper,
  useTheme,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const ContactInfoCard = ({ icon, title, content, link }) => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  
  return (
    <Card 
      elevation={hover ? 4 : 1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ 
        borderRadius: 3,
        transition: 'all 0.3s ease',
        transform: hover ? 'translateY(-5px)' : 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible',
        position: 'relative',
        borderLeft: hover ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-20px',
          left: '20px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          transform: hover ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
        }}
      >
        {icon}
      </Box>
      
      <CardContent sx={{ pt: 4 }}>
        <Typography variant="subtitle1" component="h3" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          component="a" 
          href={link} 
          sx={{ 
            textDecoration: 'none',
            color: 'inherit',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: theme.palette.primary.main
            }
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

function Footer() {
  const theme=useTheme();
  return (
  
    <Grid item xs={12} md={5}>
    <Box sx={{ height: '100%' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
        }}
      >
        <Box 
          sx={{ 
            p: { xs: 3, md: 4 },
            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
            color: 'white',
          }}
        >
          <Typography variant="h5" fontWeight={700} gutterBottom>
            İletişim Bilgilerimiz
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            Aşağıdaki iletişim kanallarından bize ulaşabilir veya merkezimizi ziyaret edebilirsiniz.
          </Typography>
        </Box>
        
        <Box sx={{ p: 3, flexGrow: 1, position: 'relative' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ContactInfoCard 
                icon={<LocationOnOutlinedIcon />}
                title="Adres"
                content="Atatürk Bulvarı No:123, Kızılay, Ankara"
                link="https://maps.google.com"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ContactInfoCard 
                icon={<PhoneOutlinedIcon />}
                title="Telefon"
                content="+90 212 123 45 67"
                link="tel:+902121234567"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ContactInfoCard 
                icon={<EmailOutlinedIcon />}
                title="E-posta"
                content="info@edumentor.com"
                link="mailto:info@edumentor.com"
              />
            </Grid>
            <Grid item xs={12}>
              <ContactInfoCard 
                icon={<AccessTimeIcon />}
                title="Çalışma Saatleri"
                content="Hafta içi: 09:00 - 18:00, Cumartesi: 10:00 - 14:00"
                link="#"
              />
            </Grid>
          </Grid>
        </Box>
        
        <Divider />
        
        <Box sx={{ p: 3, bgcolor: theme.palette.grey[50] }}>
          <Typography variant="subtitle2" fontWeight={600} gutterBottom>
            Sosyal Medyada Bizi Takip Edin
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <Tooltip title="Facebook">
              <IconButton 
                color="primary" 
                sx={{ 
                  bgcolor: theme.palette.primary.main + '15',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main + '25',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
              <IconButton 
                color="primary" 
                sx={{ 
                  bgcolor: theme.palette.primary.main + '15',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main + '25',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton 
                color="primary" 
                sx={{ 
                  bgcolor: theme.palette.primary.main + '15',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main + '25',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton 
                color="primary" 
                sx={{ 
                  bgcolor: theme.palette.primary.main + '15',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main + '25',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="WhatsApp">
              <IconButton 
                color="primary" 
                sx={{ 
                  bgcolor: theme.palette.primary.main + '15',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main + '25',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Paper>
    </Box>
  </Grid>
  );
}

export default Footer;