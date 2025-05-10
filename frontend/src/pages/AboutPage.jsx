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
  TimelineDot,
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link as RouterLink } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AnimatedSection, { ANIMATION_TYPES } from '../components/AnimatedSection';

// Profil fotoğrafını içe aktarın
// Bu yolun projenizdeki dosya yapısına göre doğru olduğundan emin olun.
// Örneğin, eğer 'src/pages/AboutPage.js' ve 'src/assets/profilPhoto.jpeg' ise
// yol doğru olacaktır.
import profileImageFromFile from '../assets/profilPhoto.jpeg';

function AboutPage() {
  const heroImageUrl = "https://images.pexels.com/photos/8385415/pexels-photo-8385415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  // İçe aktarılan resmi kullanın
  const profileImage = profileImageFromFile;

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
      <AnimatedSection type={ANIMATION_TYPES.FADE} timeout={600}>
        <Box
          sx={{
            backgroundImage: `url(${heroImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            py: { xs: 6, md: 10 },
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.55)',
              zIndex: 1,
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={4} alignItems="center" justifyContent="space-between">
              <Grid item xs={12} md={7}>
                <AnimatedSection type={ANIMATION_TYPES.SLIDE} direction="right" timeout={900}>
                  <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    Hakkımda
                  </Typography>
                </AnimatedSection>
                <AnimatedSection type={ANIMATION_TYPES.SLIDE} direction="right" timeout={1100}>
                  <Typography
                    variant="h5"
                    component="p"
                    paragraph
                  >
                    Tutkulu bir eğitmen olarak, öğrencilerimin potansiyellerini keşfetmeleri ve başarıya ulaşmaları için onlara rehberlik ediyorum.
                  </Typography>
                </AnimatedSection>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AnimatedSection type={ANIMATION_TYPES.GROW} timeout={1300}>
                  <Avatar
                    alt="Eğitmen Adı"
                    src={profileImage} // Düzeltildi: İçe aktarılan değişkeni doğrudan kullanın
                    sx={{
                      width: { xs: 180, sm: 200, md: 240 },
                      height: { xs: 180, sm: 200, md: 240 },
                      border: '4px solid white',
                      boxShadow: '0px 6px 15px rgba(0,0,0,0.3)',
                      fontSize: '4rem', // Bu, resim yüklenemezse veya src yoksa görünecek 'EA' metni için
                      bgcolor: 'secondary.main', // Resim yüklenemezse veya src yoksa görünecek arka plan
                    }}
                  >
                    {/* Resim yüklenemezse veya src prop'u yoksa bu içerik gösterilir.
                        Eğer src ile bir resim yüklüyorsanız ve resim doğru yükleniyorsa,
                        bu 'EA' metni genellikle görünmez. */}
                    EA
                  </Avatar>
                </AnimatedSection>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </AnimatedSection>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <AnimatedSection type={ANIMATION_TYPES.SLIDE} direction="right" timeout={700}>
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
            </AnimatedSection>
            <AnimatedSection type={ANIMATION_TYPES.FADE} timeout={900}>
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
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedSection type={ANIMATION_TYPES.SLIDE} direction="left" timeout={700}>
              <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, height: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
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
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.default', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <AnimatedSection type={ANIMATION_TYPES.FADE} timeout={700}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
              Mesleki Deneyim
            </Typography>
          </AnimatedSection>

          <Timeline position="alternate">
            {experience.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <AnimatedSection type={ANIMATION_TYPES.GROW} timeout={800 + index * 100}>
                    <TimelineDot color="primary">
                      <WorkIcon />
                    </TimelineDot>
                  </AnimatedSection>
                  {index < experience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <AnimatedSection type={index % 2 === 0 ? ANIMATION_TYPES.SLIDE : ANIMATION_TYPES.SLIDE} direction={index % 2 === 0 ? "left" : "right"} timeout={900 + index * 150}>
                    <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, mb: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
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
                  </AnimatedSection>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedSection type={ANIMATION_TYPES.SLIDE} direction="right" timeout={700}>
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
            </AnimatedSection>
            <AnimatedSection type={ANIMATION_TYPES.FADE} timeout={900}>
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
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedSection type={ANIMATION_TYPES.GROW} timeout={800}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=80"
                alt="Öğretim Felsefesi"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <AnimatedSection type={ANIMATION_TYPES.FADE} timeout={700}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
              Başarı Metrikleri
            </Typography>
          </AnimatedSection>

          <Grid container spacing={4} justifyContent="center">
            {[
              { value: "500+", label: "Öğrenci" },
              { value: "%95", label: "Başarı Oranı" },
              { value: "10+", label: "Yıl Deneyim" },
              { value: "8", label: "Ders Alanı" }
            ].map((metric, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <AnimatedSection type={ANIMATION_TYPES.GROW} timeout={800 + index * 100}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" component="p" sx={{ fontWeight: 700 }}>
                      {metric.value}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {metric.label}
                    </Typography>
                  </Box>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <AnimatedSection type={ANIMATION_TYPES.FADE} timeout={700}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6 }}>
            Öğrenci Yorumları
          </Typography>
        </AnimatedSection>

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
              <AnimatedSection type={ANIMATION_TYPES.GROW} timeout={800 + index * 150}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
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
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>

        <AnimatedSection type={ANIMATION_TYPES.FADE} timeout={1000}>
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
        </AnimatedSection>
      </Container>

      <Box sx={{ bgcolor: 'background.default', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <AnimatedSection type={ANIMATION_TYPES.GROW} timeout={800}>
            <Paper
              elevation={0}
              sx={{
                p: {xs: 3, md: 6},
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
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutPage;