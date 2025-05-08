import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  useTheme,
  useMediaQuery,
  Avatar,
  Fade,
  Tabs,
  Tab,
  Chip
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const EducationApproach = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const approachContent = [
    {
      id: 'personalized',
      title: 'Kişiselleştirilmiş Eğitim',
      icon: <PersonIcon />,
      description: 'Her öğrencinin öğrenme tarzı, güçlü ve zayıf yönleri, ve akademik hedefleri farklıdır. Bu nedenle eğitim programlarımızı tamamen kişiye özel tasarlıyoruz.',
      features: [
        'Detaylı öğrenme stili analizi',
        'Bireysel öğrenme hızına göre adaptasyon',
        'Kişisel ilgi ve hedeflere göre şekillendirilen içerik',
        'Sürekli geri bildirim ve program iyileştirme'
      ]
    },
    {
      id: 'methodology',
      title: 'Modern Öğretim Metodolojisi',
      icon: <EmojiObjectsIcon />,
      description: 'Geleneksel ezber odaklı eğitimin ötesine geçerek, kavramsal öğrenme, eleştirel düşünme ve problem çözme becerilerini geliştiren yenilikçi metodlar kullanıyoruz.',
      features: [
        'Proje tabanlı öğrenme yaklaşımı',
        'İnteraktif ve uygulamalı dersler',
        'Sokratik sorgulama teknikleri',
        'Yapılandırmacı öğrenme modeli'
      ]
    },
    {
      id: 'technology',
      title: 'Teknoloji Destekli Eğitim',
      icon: <MenuBookIcon />,
      description: 'Modern teknolojinin sunduğu tüm imkanları kullanarak, öğrenme sürecini daha verimli, etkileşimli ve eğlenceli hale getiriyoruz.',
      features: [
        'Özel geliştirilen dijital öğrenme platformu',
        'Yapay zeka destekli ilerleme takibi',
        'Etkileşimli simülasyon ve animasyonlar',
        'Mobil cihazlarla her yerden erişim'
      ]
    },
    {
      id: 'support',
      title: 'Çok Yönlü Destek Sistemi',
      icon: <HeadsetMicIcon />,
      description: 'Öğrencilerimizin akademik başarısının yanı sıra, duygusal ve psikolojik gelişimlerini de destekleyerek bütünsel bir eğitim sunuyoruz.',
      features: [
        '7/24 soru-cevap destek hattı',
        'Motivasyon ve stres yönetimi koçluğu',
        'Ebeveyn-öğretmen düzenli görüşmeleri',
        'Düzenli ilerleme raporları ve geri bildirimler'
      ]
    }
  ];
  const activeContent = approachContent[activeTab];

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        background: theme.palette.mode === 'light' 
          ? `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(241, 245, 249, 0.6) 100%)`
          : `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dekoratif arka plan elementleri */}
      <Box 
        sx={{ 
          position: 'absolute',
          width: { xs: '300px', md: '600px' },
          height: { xs: '300px', md: '600px' },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}10, transparent 70%)`,
          top: '-200px',
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
          background: `radial-gradient(circle, ${theme.palette.secondary.main}10, transparent 70%)`,
          bottom: '-100px',
          right: '-100px',
          zIndex: 0
        }} 
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Chip 
            label="EĞİTİM FELSEFEMİZ" 
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
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Eğitim Yaklaşımımız
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              mb: 4
            }}
          >
            Her öğrencinin öğrenme tarzı ve hızı farklıdır. Bu nedenle, dersleri bireysel ihtiyaçlara göre özelleştiriyor,
            öğrencilerin potansiyellerini keşfetmelerine ve akademik hedeflerine ulaşmalarına yardımcı oluyoruz.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box sx={{ mt: { xs: 4, md: 0 } }}>
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange} 
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                textColor="primary"
                indicatorColor="primary"
                sx={{ 
                  mb: 4,
                  '& .MuiTab-root': {
                    minHeight: '60px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                  }
                }}
              >
                {approachContent.map((item, index) => (
                  <Tab 
                    key={item.id} 
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar 
                          sx={{ 
                            width: 28, 
                            height: 28, 
                            mr: 1, 
                            bgcolor: activeTab === index ? theme.palette.primary.main : 'transparent',
                            color: activeTab === index ? 'white' : theme.palette.text.secondary,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        {!isMobile && item.title}
                      </Box>
                    } 
                    id={`approach-tab-${index}`}
                    aria-controls={`approach-tabpanel-${index}`}
                  />
                ))}
              </Tabs>
              
              <Fade in={true} timeout={500}>
                <Box role="tabpanel" id={`approach-tabpanel-${activeTab}`}>
                  <Typography 
                    variant="h4" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        bgcolor: theme.palette.primary.main + '20', 
                        color: theme.palette.primary.main,
                        width: { xs: 40, md: 50 },
                        height: { xs: 40, md: 50 },
                        mr: 2
                      }}
                    >
                      {activeContent.icon}
                    </Avatar>
                    {activeContent.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      mb: 3, 
                      fontSize: '1.05rem',
                      lineHeight: 1.7
                    }}
                  >
                    {activeContent.description}
                  </Typography>
                  
                  <Box sx={{ mt: 3 }}>
                    {activeContent.features.map((feature, index) => (
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          mb: 2.5,
                          transition: 'all 0.3s ease',
                          transform: hoveredFeature === index ? 'translateX(10px)' : 'none',
                        }}
                        key={index}
                        onMouseEnter={() => setHoveredFeature(index)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        <CheckCircleIcon 
                          color="primary" 
                          sx={{ 
                            mr: 1.5, 
                            mt: 0.3,
                            fontSize: '1.3rem',
                            transition: 'all 0.3s ease',
                            transform: hoveredFeature === index ? 'scale(1.2)' : 'scale(1)',
                          }} 
                        />
                        <Typography 
                          variant="body1"
                          sx={{ 
                            fontWeight: hoveredFeature === index ? 600 : 400,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    component={RouterLink}
                    to={`/approach/${activeContent.id}`}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      mt: 2,
                      borderRadius: '30px',
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      boxShadow: `0 8px 20px ${theme.palette.primary.main}30`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: `0 12px 24px ${theme.palette.primary.main}40`,
                      }
                    }}
                  >
                    Daha Fazla Bilgi
                  </Button>
                </Box>
              </Fade>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};
export default EducationApproach;