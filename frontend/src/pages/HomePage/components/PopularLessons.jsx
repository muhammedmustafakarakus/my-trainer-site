import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardActions,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const featuredCourses = [
  {
    id: 1,
    title: 'Lise Matematik Temelleri',
    description: 'Lise matematik müfredatının temelleri, üniversite hazırlık ve sınavlar için gerekli tüm konular.',
    image: '/static/images/courses/math.jpg',
    price: '200₺/saat',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    title: 'Fizik Problem Çözme Teknikleri',
    description: 'Zorlu fizik problemlerini kolay çözmenizi sağlayacak stratejiler ve teknikler.',
    image: '/static/images/courses/physics.jpg',
    price: '220₺/saat',
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    title: 'Python Programlama Başlangıç',
    description: 'Sıfırdan Python programlama dilini öğrenerek yazılım dünyasına adım atın.',
    image: '/static/images/courses/python.jpg',
    price: '250₺/saat',
    rating: 5.0,
    reviews: 156,
  },
];

const PopularLessons = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default', py: 5 }}>
      <Container maxWidth={false}>
        {/* Header Row - Title centered and "See All" button on right */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 4,
            width: '100%',
            position: 'relative'
          }}
        >
          {/* Empty space on left to balance the layout */}
          <Box sx={{ flex: 1 }} />
          
          {/* Centered Title */}
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              textAlign: 'center',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            Popüler Dersler
          </Typography>
          
          {/* "See All" button on right */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              component={RouterLink} 
              to="/courses" 
              endIcon={<ArrowForwardIcon />}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              Tüm Dersleri Gör
            </Button>
          </Box>
        </Box>
        
        {/* Course Cards - Using Box instead of Grid */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          margin: -2 // Negative margin to offset the padding on child elements
        }}>
          {featuredCourses.map((course) => (
            <Box 
              key={course.id} 
              sx={{ 
                width: { xs: '100%', sm: '50%', md: '33.33%' }, 
                padding: 2 // Padding between cards
              }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'relative', bgcolor: 'grey.100', pt: '56.25%' }}>
                  {/* Placeholder for actual images */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'text.secondary',
                      fontSize: '3rem',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 'inherit' }} />
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle2" color="secondary">
                      {course.price}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarIcon sx={{ fontSize: '1rem', color: '#FFD700' }} />
                      <Typography variant="subtitle2" sx={{ ml: 0.5 }}>
                        {course.rating} ({course.reviews})
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    component={RouterLink}
                    to={`/courses/${course.id}`}
                  >
                    Detayları Gör
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
        
        {/* Mobile "See All" button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            component={RouterLink} 
            to="/courses" 
            variant="outlined" 
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            Tüm Dersleri Gör
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularLessons;