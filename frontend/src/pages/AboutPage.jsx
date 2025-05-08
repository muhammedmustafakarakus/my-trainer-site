import React from 'react';
import { 
  Box, 
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Divider,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
  } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link as RouterLink } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function AboutPage() {
  const certifications = [
    "Yüksek Lisans, Eğitim Bilimleri, ABC Üniversitesi",
    "Lisans, Matematik Öğretmenliği, XYZ Üniversitesi",
    "İleri Seviye Online Eğitmenlik Sertifikası",
    "Dijital Eğitim Metodolojisi Sertifikası",
    "Özel Eğitim İhtiyaçları Uzmanlık Sertifikası"
  ];

  const experience = [
    {
      title: "Baş Eğitmen",
      company: "Akıllı Akademi",
      period: "2018 - Şimdiki",
      description: "Lise ve üniversite öğrencileri için özel matematik ve fen derslerine liderlik etmek"
    },
    {
      title: "Matematik Öğretmeni",
      company: "XYZ Lisesi",
      period: "2014 - 2018",
      description: "Lise seviyesinde matematik dersleri vermek ve öğrencileri üniversite sınavlarına hazırlamak"
    },
    {
      title: "Eğitim Danışmanı",
      company: "ABC Eğitim Merkezi",
      period: "2012 - 2014",
      description: "Öğrenci odaklı eğitim programları geliştirmek ve uygulamak"
    }
  ];

  return (
    <Box>
      {/* Hero Bölümü */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Hakkımda
              </Typography>
              <Typography variant="h5" paragraph>
                Tutkulu bir eğitmen olarak, öğrencilerimin potansiyellerini keşfetmeleri ve başarıya ulaşmaları için onlara rehberlik ediyorum.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                sx={{ 
                  width: 240, 
                  height: 240,
                  border: '4px solid white',
                }}
              >
                {/* Burada gerçek bir profil fotoğrafı olacak */}
                <Typography variant="h1">EA</Typography>
              </Avatar>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Kişisel Bilgiler */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Merhaba, ben Eğitmen Adı!
            </Typography>
            <Typography variant="body1" paragraph>
              10 yılı aşkın deneyimim ile öğrencilerin akademik hedeflerine ulaşmalarına yardımcı oluyorum. Öğretme tutkum ve her öğrencinin kendine özgü öğrenme tarzına olan inancımla, kişiselleştirilmiş eğitim yaklaşımı sunuyorum.
            </Typography>
            <Typography variant="body1" paragraph>
              Matematik, Fizik ve Kimya alanlarında uzmanlaşmış olup, özellikle sınav hazırlığı ve akademik destek konularında başarılı bir geçmişe sahibim. Öğretim metodolojim, teorik kavramları pratik uygulamalarla birleştirerek, öğrencilerin konuları derinlemesine anlamalarını sağlamaktadır.
            </Typography>
            <Typography variant="body1" paragraph>
              Her öğrencinin potansiyelini maksimuma çıkarmasına yardımcı olmayı amaçlıyorum. Eğitim yolculuğunuzda size rehberlik etmekten mutluluk duyacağım.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
              >
                İletişime Geç
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large"
                component={RouterLink}
                to="/courses"
              >
                Dersleri Keşfet
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                Uzmanlık Alanları
              </Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="primary" sx={{ fontSize: '0.8rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Lise ve Üniversite Matematik" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="primary" sx={{ fontSize: '0.8rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Fizik ve Kimya" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="primary" sx={{ fontSize: '0.8rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Sınav Hazırlık (YKS, TYT, AYT)" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="primary" sx={{ fontSize: '0.8rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Programlama (Python, Java)" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="primary" sx={{ fontSize: '0.8rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Bilgisayar Bilimleri" />
                </ListItem>
              </List>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                Eğitim & Sertifikalar
              </Typography>
              <List>
                {certifications.map((cert, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <SchoolIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={cert} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Deneyim Bölümü */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Mesleki Deneyim
          </Typography>
          
          <Timeline position="alternate">
            {experience.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  {index < experience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={0} sx={{ p: 3, mb: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                    <Typography variant="h6" component="h3" fontWeight={600}>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary.main" gutterBottom>
                      {exp.company} | {exp.period}
                    </Typography>
                    <Typography variant="body2">
                      {exp.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* Öğretim Felsefesi */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Öğretim Felsefem
            </Typography>
            <Typography variant="body1" paragraph>
              Eğitimin sadece bilgi aktarmaktan ibaret olmadığına inanıyorum. Her öğrenci benzersizdir ve kendi öğrenme tarzına sahiptir.
            </Typography>
            <Typography variant="body1" paragraph>
              Derslerimde interaktif yöntemler kullanarak öğrencilerimin aktif katılımını sağlıyor, teorik bilgileri günlük hayattan örneklerle pekiştiriyorum. Modern eğitim teknolojilerini kullanarak görsel, işitsel ve uygulamalı öğrenme deneyimlerini bir araya getiriyorum.
            </Typography>
            <Typography variant="body1" paragraph>
              Hedefim sadece sınavlarda başarı değil, hayat boyu öğrenmeyi seven, analitik düşünebilen ve problem çözme becerilerine sahip bireyler yetiştirmektir.
            </Typography>
            
            <List sx={{ mt: 3 }}>
              <ListItem disableGutters>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Kişiselleştirilmiş Öğretim" 
                  secondary="Her öğrencinin öğrenme tarzına ve ihtiyaçlarına göre özel ders planı"
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Pratiğe Dayalı Yaklaşım" 
                  secondary="Teorik bilgileri gerçek hayat problemleriyle pekiştirme"
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Sürekli Gelişim" 
                  secondary="Düzenli geri bildirim ve ilerleme değerlendirmeleri"
                />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="/api/placeholder/600/400"
              alt="Öğretim Felsefesi"
              sx={{ 
                width: '100%', 
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Başarı Metrikleri */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Başarı Metrikleri
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="p" sx={{ fontWeight: 700 }}>
                  500+
                </Typography>
                <Typography variant="h6" component="p">
                  Öğrenci
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="p" sx={{ fontWeight: 700 }}>
                  %95
                </Typography>
                <Typography variant="h6" component="p">
                  Başarı Oranı
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="p" sx={{ fontWeight: 700 }}>
                  10+
                </Typography>
                <Typography variant="h6" component="p">
                  Yıl Deneyim
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="p" sx={{ fontWeight: 700 }}>
                  8
                </Typography>
                <Typography variant="h6" component="p">
                  Ders Alanı
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Öğrenci Yorumları */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
          Öğrenci Yorumları
        </Typography>
        
        <Grid container spacing={4}>
          {[
            {
              name: "Ahmet Y.",
              comment: "Matematik derslerinde zorlanıyordum ancak hocamızın özel yaklaşımı sayesinde konuları çok daha iyi anlamaya başladım. YKS sınavında hedefimin üzerinde bir puan aldım.",
              subject: "Matematik - YKS Hazırlık"
            },
            {
              name: "Zeynep K.",
              comment: "Fizik derslerini çok interaktif ve anlaşılır hale getiriyor. Kompleks konuları bile basit örneklerle açıklayabiliyor. Sayesinde fen bilimleri alanındaki korkumu yendim.",
              subject: "Fizik - Lise"
            },
            {
              name: "Mehmet A.",
              comment: "Programlama derslerinde sıfırdan başlayarak kısa sürede temel Java bilgilerine sahip oldum. Sabırlı ve detaylı anlatımı ile teknik konuları bile anlaşılır hale getiriyor.",
              subject: "Java Programlama"
            }
          ].map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                elevation={0} 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: '1px solid', 
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3" fontWeight={600}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {testimonial.subject}
                  </Typography>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarsIcon key={star} sx={{ color: 'warning.main', fontSize: '1.2rem' }} />
                    ))}
                  </Box>
                  <Typography variant="body2">
                    "{testimonial.comment}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            component={RouterLink}
            to="/testimonials"
            endIcon={<StarsIcon />}
          >
            Tüm Yorumları Gör
          </Button>
        </Box>
      </Container>

      {/* CTA Bölümü */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="md">
          <Paper 
            elevation={0} 
            sx={{ 
              p: 6, 
              textAlign: 'center',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'primary.main',
              boxShadow: 3
            }}
          >
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Eğitim Yolculuğunuza Başlayın
            </Typography>
            <Typography variant="h6" component="p" gutterBottom sx={{ mb: 4 }}>
              İlk ücretsiz tanışma dersimiz için hemen iletişime geçin!
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{ 
                px: 4, 
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 2
              }}
            >
              Hemen İletişime Geç
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutPage;