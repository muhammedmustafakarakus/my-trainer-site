import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Avatar,
  Paper,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DevicesIcon from '@mui/icons-material/Devices';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


const Features = () => {
  return (
    <Container maxWidth={false}  sx={{ py: 5,}}>
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
        Neden Bizi Tercih Etmelisiniz?
      </Typography>
    </Box>

    <Grid container spacing={4} sx={{ display:"flex",justifyContent:"center"}}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            height: '100%',
            textAlign: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              borderColor: 'primary.main',
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
              <AccessTimeIcon fontSize="large" />
            </Avatar>
          </Box>
          <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
            Esnek Programlama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Size özel oluşturulan ders programı ile istediğiniz zaman çalışabilirsiniz.
          </Typography>
        </Paper>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            height: '100%',
            textAlign: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              borderColor: 'primary.main',
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
              <DevicesIcon fontSize="large" />
            </Avatar>
          </Box>
          <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
            Çevrimiçi Eğitim
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Modern teknoloji ile her yerden erişilebilir, interaktif online dersler.
          </Typography>
        </Paper>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            height: '100%',
            textAlign: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              borderColor: 'primary.main',
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
              <EmojiEventsIcon fontSize="large" />
            </Avatar>
          </Box>
          <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
            Başarı Garantisi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Öğrencilerimizin %95'i notlarını önemli ölçüde yükseltmeyi başarıyor.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Features
