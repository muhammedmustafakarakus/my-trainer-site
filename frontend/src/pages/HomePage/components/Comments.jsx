import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Avatar,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Comments = () => {

    
const testimonials = [
    {
      id: 1,
      name: 'Ayşe Yılmaz',
      role: 'Lise Öğrencisi',
      avatar: '/static/images/avatars/avatar1.jpg',
      content: 'Matematik derslerinde zorlanıyordum, ama Hoca\'nın yöntemleri sayesinde konuları çok daha iyi anlıyorum. Okul notlarım yükseldi ve sınavlarda daha başarılı oluyorum!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mehmet Demir',
      role: 'Üniversite Öğrencisi',
      avatar: '/static/images/avatars/avatar2.jpg',
      content: 'Fizik derslerindeki zorlu konuları çok net bir şekilde açıklıyor. Online dersler çok verimli geçiyor ve sorularıma anında yanıt alabiliyorum.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Zeynep Kaya',
      role: 'Yazılım Meraklısı',
      avatar: '/static/images/avatars/avatar3.jpg',
      content: 'Python derslerini almaya başladıktan sonra kendi projelerimi geliştirmeye başladım. Sabırlı ve detaylı anlatımı için çok teşekkür ederim!',
      rating: 5,
    },
  ];
  
  return (
    <Box sx={{ bgcolor: 'background.default'}}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 1 }}>
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Öğrenci Yorumları
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
          Öğrencilerimizin başarı hikayelerini ve deneyimlerini keşfedin.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item key={testimonial.id} xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box sx={{ display: 'flex', mb: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    sx={{
                      color: i < testimonial.rating ? '#FFD700' : 'grey.300',
                      fontSize: '1.2rem',
                    }}
                  />
                ))}
              </Box>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  mb: 3,
                  flexGrow: 1,
                  fontStyle: 'italic',
                }}
              >
                "{testimonial.content}"
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          component={RouterLink}
          to="/testimonials"
          variant="outlined"
          color="primary"
          endIcon={<ArrowForwardIcon />}
        >
          Tüm Yorumları Gör
        </Button>
      </Box>
    </Container>
  </Box>

  )
}

export default Comments
