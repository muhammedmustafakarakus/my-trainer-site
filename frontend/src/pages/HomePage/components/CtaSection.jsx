import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const CtaSection = () => {
  return (
    <Box sx={{ py: 3 }}>
    <Container maxWidth="md">
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          textAlign: 'center',
          backgroundColor: 'primary.main',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Eğitim Yolculuğunuza Bugün Başlayın
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ mb: 4, maxWidth: '600px', mx: 'auto', opacity: 0.9 }}
          >
            Akademik hedeflerinize ulaşmak için profesyonel desteği bekletmeyin. İlk dersinizi ücretsiz planlayın!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Ücretsiz Ders Planla
          </Button>
        </Box>
        
        {/* Dekoratif şekiller */}
        <Box sx={{ 
          position: 'absolute', 
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          top: '-60px',
          right: '-60px'
        }} />
        <Box sx={{ 
          position: 'absolute', 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          bottom: '-40px',
          left: '-40px'
        }} />
      </Paper>
    </Container>
  </Box>
  )
}

export default CtaSection
