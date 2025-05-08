import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
} from '@mui/material';
const Statistics = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={6} sm={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="p" sx={{ fontWeight: 700 }}>
              500+
            </Typography>
            <Typography variant="subtitle1">
              Mutlu Öğrenci
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="p" sx={{ fontWeight: 700 }}>
              25+
            </Typography>
            <Typography variant="subtitle1">
              Ders Konusu
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="p" sx={{ fontWeight: 700 }}>
              8+
            </Typography>
            <Typography variant="subtitle1">
              Yıllık Deneyim
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="p" sx={{ fontWeight: 700 }}>
              95%
            </Typography>
            <Typography variant="subtitle1">
              Başarı Oranı
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  )
}

export default Statistics
