import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Tabs,
  Tab,
  Paper,
  TextField,
  Button,
  IconButton,
  Stack,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  FormControlLabel,
  Switch,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SchoolIcon from '@mui/icons-material/School'; // Example icon

// --- Mock Initial Data (mimicking what you might fetch from a DB) ---
const initialHeroData = {
  chipText: "Online Eğitim Platformu",
  title: "Kaliteli Eğitimle Geleceğinizi Şekillendirin",
  subtitle: "Akademik başarınızı artırmak için birebir, kişiselleştirilmiş online dersler alın ve potansiyelinizi keşfedin.",
  highlights: [
    { id: 'h1', icon: "PersonIcon", label: "Birebir Özel Dersler" },
    { id: 'h2', icon: "StarIcon", label: "Uzman Eğitmen" },
    { id: 'h3', icon: "VerifiedIcon", label: "Kalite Garantisi" },
  ],
  ctaButton1Text: "Dersleri Keşfet",
  ctaButton1Link: "/courses",
  ctaButton2Text: "Ücretsiz Deneme Dersi",
  ctaButton2Link: "/contact",
  rightImageSection: {
    mainIcon: "SchoolIcon",
    card1: { avatarChar: "M", title: "Matematik Dersi", subtitle: "Verimli Birebir Özel Ders" },
    card2: { avatarChar: "F", title: "Derslerimiz", subtitle: "5,6,7,8.Sınıflar ve LGS-9,10,11,12.Sınıflar ve YKS / KPSS-DGS-ALES" },
    stat1Title: "Başarıya Götüren",
    stat1Subtitle: "Planlı Dersler",
    stat2Title: "Profesyonel Koçluk ile",
    stat2Subtitle: "stratejik ilerleme"
  }
};

const initialFeaturesData = {
  title: "Neden Bizi Tercih Etmelisiniz?",
  items: [
    { id: 'f1', icon: "AccessTimeIcon", title: "Esnek Programlama", description: "Size özel oluşturulan ders programı ile istediğiniz zaman çalışabilirsiniz." },
    { id: 'f2', icon: "DevicesIcon", title: "Çevrimiçi Eğitim", description: "Modern teknoloji ile her yerden erişilebilir, interaktif online dersler." },
    { id: 'f3', icon: "EmojiEventsIcon", title: "Başarı Garantisi", description: "Öğrencilerimizin %95'i notlarını önemli ölçüde yükseltmeyi başarıyor." },
  ]
};

const initialStatisticsData = [
  { id: 's1', value: "10+", label: "Mutlu Öğrenci" },
  { id: 's2', value: "25+", label: "Ders Konusu" },
  { id: 's3', value: "2+", label: "Yıllık Deneyim" },
  { id: 's4', value: "95%", label: "Başarı Oranı" },
];

const initialPopularLessonsData = {
  title: "Popüler Dersler",
  courses: [
    { id: 'c1', title: 'Ortaokul Matematik - LGS', description: '5,6,7,8.Sınıf ortaokul matematik müfredatının temelleri...', price: '200₺/saat', rating: 4.9, reviews: 124, imagePlaceholderIcon: "SchoolIcon" },
    { id: 'c2', title: 'Lise Matematik - YKS', description: '9,10,11,12.Sınıf Lise matematik müfredatının temelleri...', price: '220₺/saat', rating: 4.8, reviews: 98, imagePlaceholderIcon: "SchoolIcon" },
    { id: 'c3', title: 'KPSS-DGS-ALES', description: 'Zorlu fizik problemlerini kolay çözmenizi sağlayacak stratejiler...', price: '220₺/saat', rating: 4.8, reviews: 98, imagePlaceholderIcon: "SchoolIcon" },
    { id: 'c4', title: 'Profesyonel Eğitim Koçluğu', description: 'Sıfırdan Python programlama dilini öğrenerek...', price: '250₺/saat', rating: 5.0, reviews: 156, imagePlaceholderIcon: "SchoolIcon" },
  ]
};

const initialCtaData = {
  title: "Eğitim Yolculuğunuza Bugün Başlayın",
  subtitle: "Akademik hedeflerinize ulaşmak için profesyonel desteği bekletmeyin. İlk dersinizi ücretsiz planlayın!",
  buttonText: "Ücretsiz Ders Planla",
  buttonLink: "/contact",
};
// --- End Mock Initial Data ---


// Helper to get a unique ID
const generateId = () => `id_${new Date().getTime()}_${Math.random().toString(36).substr(2, 9)}`;

// Generic List Item Editor Dialog
function ItemDialog({ open, onClose, itemData, onItemSave, fieldsConfig, title }) {
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    setCurrentItem(itemData || {});
  }, [itemData, open]);

  const handleChange = (field) => (event) => {
    setCurrentItem({ ...currentItem, [field]: event.target.value });
  };

  const handleSave = () => {
    onItemSave(currentItem);
    onClose();
  };

  if (!open) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {fieldsConfig.map(field => (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              value={currentItem[field.name] || ''}
              onChange={handleChange(field.name)}
              fullWidth
              multiline={field.multiline || false}
              rows={field.multiline ? 3 : 1}
            />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>İptal</Button>
        <Button onClick={handleSave} variant="contained">Kaydet</Button>
      </DialogActions>
    </Dialog>
  );
}


function AdminHomePage() {
  const [currentTab, setCurrentTab] = useState(0);

  // State for each section
  const [heroData, setHeroData] = useState(initialHeroData);
  const [featuresData, setFeaturesData] = useState(initialFeaturesData);
  const [statisticsData, setStatisticsData] = useState(initialStatisticsData);
  const [popularLessonsData, setPopularLessonsData] = useState(initialPopularLessonsData);
  const [ctaData, setCtaData] = useState(initialCtaData);

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editingListType, setEditingListType] = useState(''); // 'heroHighlights', 'featuresItems', 'statistics', 'popularCourses'
  
  // --- TODO: useEffect to fetch data from backend ---
  // useEffect(() => {
  //   // fetchHeroData().then(setHeroData);
  //   // fetchFeaturesData().then(setFeaturesData);
  //   // ... and so on
  // }, []);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleInputChange = (section, field, subField = null) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    switch (section) {
      case 'hero':
        if (subField) {
          setHeroData(prev => ({ ...prev, [field]: { ...prev[field], [subField]: value } }));
        } else {
          setHeroData(prev => ({ ...prev, [field]: value }));
        }
        break;
      case 'features':
        setFeaturesData(prev => ({ ...prev, [field]: value }));
        break;
      case 'cta':
        setCtaData(prev => ({ ...prev, [field]: value }));
        break;
      case 'popularLessons':
        setPopularLessonsData(prev => ({ ...prev, [field]: value }));
        break;
      default:
        break;
    }
  };

  const openItemDialog = (listType, item = null) => {
    setEditingListType(listType);
    setEditingItem(item ? { ...item } : { id: generateId() }); // For new item, generate ID
    setDialogOpen(true);
  };

  const closeItemDialog = () => {
    setDialogOpen(false);
    setEditingItem(null);
    setEditingListType('');
  };

  const handleSaveItem = (item) => {
    switch (editingListType) {
      case 'heroHighlights':
        setHeroData(prev => ({
          ...prev,
          highlights: prev.highlights.find(h => h.id === item.id)
            ? prev.highlights.map(h => h.id === item.id ? item : h)
            : [...prev.highlights, item]
        }));
        break;
      case 'featuresItems':
        setFeaturesData(prev => ({
          ...prev,
          items: prev.items.find(f => f.id === item.id)
            ? prev.items.map(f => f.id === item.id ? item : f)
            : [...prev.items, item]
        }));
        break;
      case 'statistics':
        setStatisticsData(prev => prev.find(s => s.id === item.id)
            ? prev.map(s => s.id === item.id ? item : s)
            : [...prev, item]
        );
        break;
      case 'popularCourses':
        setPopularLessonsData(prev => ({
            ...prev,
            courses: prev.courses.find(c => c.id === item.id)
              ? prev.courses.map(c => c.id === item.id ? item : c)
              : [...prev.courses, item]
        }));
        break;
      default:
        break;
    }
  };
  
  const handleDeleteItem = (listType, itemId) => {
    if (!window.confirm("Bu öğeyi silmek istediğinizden emin misiniz?")) return;
    switch (listType) {
      case 'heroHighlights':
        setHeroData(prev => ({ ...prev, highlights: prev.highlights.filter(h => h.id !== itemId) }));
        break;
      case 'featuresItems':
        setFeaturesData(prev => ({ ...prev, items: prev.items.filter(f => f.id !== itemId) }));
        break;
      case 'statistics':
        setStatisticsData(prev => prev.filter(s => s.id !== itemId));
        break;
      case 'popularCourses':
        setPopularLessonsData(prev => ({ ...prev, courses: prev.courses.filter(c => c.id !== itemId) }));
        break;
      default:
        break;
    }
  };

  const handleSaveSection = (sectionName) => {
    let dataToSave;
    switch (sectionName) {
      case 'hero': dataToSave = heroData; break;
      case 'features': dataToSave = featuresData; break;
      case 'statistics': dataToSave = statisticsData; break;
      case 'popularLessons': dataToSave = popularLessonsData; break;
      case 'cta': dataToSave = ctaData; break;
      default: console.error("Unknown section:", sectionName); return;
    }
    console.log(`Saving ${sectionName}:`, dataToSave);
    // Here you would typically make an API call to your backend
    alert(`${sectionName} bölümü kaydedildi (Konsolu kontrol edin).`);
  };

  const getDialogConfig = () => {
    switch (editingListType) {
      case 'heroHighlights':
        return { 
          title: editingItem?.id && heroData.highlights.find(h => h.id === editingItem.id) ? "Vurgu Düzenle" : "Yeni Vurgu Ekle",
          fields: [
            { name: 'icon', label: 'İkon Adı (örn: PersonIcon)' },
            { name: 'label', label: 'Etiket' },
          ]
        };
      case 'featuresItems':
        return {
          title: editingItem?.id && featuresData.items.find(f => f.id === editingItem.id) ? "Özellik Düzenle" : "Yeni Özellik Ekle",
          fields: [
            { name: 'icon', label: 'İkon Adı (örn: AccessTimeIcon)' },
            { name: 'title', label: 'Başlık' },
            { name: 'description', label: 'Açıklama', multiline: true },
          ]
        };
      case 'statistics':
        return {
          title: editingItem?.id && statisticsData.find(s => s.id === editingItem.id) ? "İstatistik Düzenle" : "Yeni İstatistik Ekle",
          fields: [
            { name: 'value', label: 'Değer (örn: 10+)' },
            { name: 'label', label: 'Etiket (örn: Mutlu Öğrenci)' },
          ]
        };
      case 'popularCourses':
        return {
          title: editingItem?.id && popularLessonsData.courses.find(c => c.id === editingItem.id) ? "Ders Düzenle" : "Yeni Ders Ekle",
          fields: [
            { name: 'title', label: 'Ders Başlığı' },
            { name: 'description', label: 'Açıklama', multiline: true },
            { name: 'price', label: 'Fiyat (örn: 200₺/saat)' },
            { name: 'rating', label: 'Değerlendirme (örn: 4.9)' },
            { name: 'reviews', label: 'Yorum Sayısı (örn: 124)' },
            { name: 'imagePlaceholderIcon', label: 'Resim Yerine İkon (örn: SchoolIcon)' },
          ]
        };
      default: return { title: 'Öğe Düzenle', fields: []};
    }
  };


  const renderListManagement = (title, items, listType, itemDisplayFn) => (
    <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">{title}</Typography>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => openItemDialog(listType)}
        >
          Yeni Ekle
        </Button>
      </Stack>
      <List dense>
        {items.map((item) => (
          <ListItem
            key={item.id}
            divider
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit" onClick={() => openItemDialog(listType, item)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" sx={{ ml: 1 }} onClick={() => handleDeleteItem(listType, item.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            {itemDisplayFn(item)}
          </ListItem>
        ))}
      </List>
      {items.length === 0 && <Typography variant="body2" color="text.secondary">Henüz öğe eklenmemiş.</Typography>}
    </Paper>
  );


  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Admin Ana Sayfa İçerik Yönetimi</Typography>
      
      <Paper elevation={1}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Hero Bölümü" />
          <Tab label="Özellikler (Features)" />
          <Tab label="İstatistikler" />
          <Tab label="Popüler Dersler" />
          <Tab label="CTA Bölümü" />
        </Tabs>
      </Paper>

      <Box mt={3}>
        {/* Hero Section Management */}
        {currentTab === 0 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Hero Bölümü Yönetimi</Typography>
            <Stack spacing={3}>
              <TextField
                label="Chip Metni"
                value={heroData.chipText}
                onChange={handleInputChange('hero', 'chipText')}
                fullWidth
              />
              <TextField
                label="Ana Başlık"
                value={heroData.title}
                onChange={handleInputChange('hero', 'title')}
                fullWidth
                multiline
                rows={2}
              />
              <TextField
                label="Alt Başlık / Açıklama"
                value={heroData.subtitle}
                onChange={handleInputChange('hero', 'subtitle')}
                fullWidth
                multiline
                rows={4}
              />
              
              {renderListManagement("Vurgular (Highlights)", heroData.highlights, 'heroHighlights', (item) => (
                <ListItemText primary={item.label} secondary={`İkon: ${item.icon || 'Belirtilmemiş'}`} />
              ))}

              <TextField
                label="Buton 1 Metni (Dersleri Keşfet)"
                value={heroData.ctaButton1Text}
                onChange={handleInputChange('hero', 'ctaButton1Text')}
                fullWidth
              />
              <TextField
                label="Buton 1 Linki"
                value={heroData.ctaButton1Link}
                onChange={handleInputChange('hero', 'ctaButton1Link')}
                fullWidth
              />
              <TextField
                label="Buton 2 Metni (Ücretsiz Deneme)"
                value={heroData.ctaButton2Text}
                onChange={handleInputChange('hero', 'ctaButton2Text')}
                fullWidth
              />
              <TextField
                label="Buton 2 Linki"
                value={heroData.ctaButton2Link}
                onChange={handleInputChange('hero', 'ctaButton2Link')}
                fullWidth
              />

              <Typography variant="h6" sx={{mt: 2}}>Sağ Resim Alanı İçeriği</Typography>
              <TextField label="Ana İkon (örn: SchoolIcon)" value={heroData.rightImageSection.mainIcon} onChange={handleInputChange('hero', 'rightImageSection', 'mainIcon')} fullWidth />
              <TextField label="Kart 1 Avatar Karakteri" value={heroData.rightImageSection.card1.avatarChar} onChange={handleInputChange('hero', 'rightImageSection', 'card1', 'avatarChar')} />
              <TextField label="Kart 1 Başlık" value={heroData.rightImageSection.card1.title} onChange={handleInputChange('hero', 'rightImageSection', 'card1', 'title')} fullWidth />
              <TextField label="Kart 1 Alt Başlık" value={heroData.rightImageSection.card1.subtitle} onChange={handleInputChange('hero', 'rightImageSection', 'card1', 'subtitle')} fullWidth multiline />
              <TextField label="Kart 2 Avatar Karakteri" value={heroData.rightImageSection.card2.avatarChar} onChange={handleInputChange('hero', 'rightImageSection', 'card2', 'avatarChar')} />
              <TextField label="Kart 2 Başlık" value={heroData.rightImageSection.card2.title} onChange={handleInputChange('hero', 'rightImageSection', 'card2', 'title')} fullWidth />
              <TextField label="Kart 2 Alt Başlık" value={heroData.rightImageSection.card2.subtitle} onChange={handleInputChange('hero', 'rightImageSection', 'card2', 'subtitle')} fullWidth multiline />
              <TextField label="İstatistik 1 Başlık" value={heroData.rightImageSection.stat1Title} onChange={handleInputChange('hero', 'rightImageSection', 'stat1Title')} fullWidth />
              <TextField label="İstatistik 1 Alt Başlık" value={heroData.rightImageSection.stat1Subtitle} onChange={handleInputChange('hero', 'rightImageSection', 'stat1Subtitle')} fullWidth />
              <TextField label="İstatistik 2 Başlık" value={heroData.rightImageSection.stat2Title} onChange={handleInputChange('hero', 'rightImageSection', 'stat2Title')} fullWidth />
              <TextField label="İstatistik 2 Alt Başlık" value={heroData.rightImageSection.stat2Subtitle} onChange={handleInputChange('hero', 'rightImageSection', 'stat2Subtitle')} fullWidth />


              <Button variant="contained" color="primary" onClick={() => handleSaveSection('hero')} sx={{ alignSelf: 'flex-start' }}>
                Hero Bölümünü Kaydet
              </Button>
            </Stack>
          </Paper>
        )}

        {/* Features Section Management */}
        {currentTab === 1 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Özellikler Bölümü Yönetimi</Typography>
            <Stack spacing={3}>
              <TextField
                label="Ana Başlık (Neden Bizi Tercih Etmelisiniz?)"
                value={featuresData.title}
                onChange={handleInputChange('features', 'title')}
                fullWidth
              />
              {renderListManagement("Özellik Öğeleri", featuresData.items, 'featuresItems', (item) => (
                  <ListItemText 
                    primary={`${item.title} (İkon: ${item.icon || 'Belirtilmemiş'})`} 
                    secondary={item.description} 
                  />
              ))}
              <Button variant="contained" color="primary" onClick={() => handleSaveSection('features')} sx={{ alignSelf: 'flex-start' }}>
                Özellikler Bölümünü Kaydet
              </Button>
            </Stack>
          </Paper>
        )}

        {/* Statistics Section Management */}
        {currentTab === 2 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>İstatistikler Bölümü Yönetimi</Typography>
            <Stack spacing={3}>
                {renderListManagement("İstatistik Öğeleri", statisticsData, 'statistics', (item) => (
                    <ListItemText primary={item.value} secondary={item.label} />
                ))}
              <Button variant="contained" color="primary" onClick={() => handleSaveSection('statistics')} sx={{ alignSelf: 'flex-start' }}>
                İstatistikler Bölümünü Kaydet
              </Button>
            </Stack>
          </Paper>
        )}

        {/* Popular Lessons Section Management */}
        {currentTab === 3 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Popüler Dersler Bölümü Yönetimi</Typography>
             <Stack spacing={3}>
                <TextField
                    label="Ana Başlık (Popüler Dersler)"
                    value={popularLessonsData.title}
                    onChange={handleInputChange('popularLessons', 'title')}
                    fullWidth
                />
                {renderListManagement("Dersler", popularLessonsData.courses, 'popularCourses', (item) => (
                    <ListItemText 
                        primary={`${item.title} - ${item.price}`} 
                        secondary={`Puan: ${item.rating} (${item.reviews} yorum) - Açıklama: ${item.description.substring(0,50)}...`} 
                    />
                ))}
                <Button variant="contained" color="primary" onClick={() => handleSaveSection('popularLessons')} sx={{ alignSelf: 'flex-start' }}>
                    Popüler Dersler Bölümünü Kaydet
                </Button>
            </Stack>
          </Paper>
        )}

        {/* CTA Section Management */}
        {currentTab === 4 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>CTA Bölümü Yönetimi</Typography>
            <Stack spacing={3}>
                <TextField
                    label="Başlık"
                    value={ctaData.title}
                    onChange={handleInputChange('cta', 'title')}
                    fullWidth
                    multiline
                />
                <TextField
                    label="Alt Başlık / Açıklama"
                    value={ctaData.subtitle}
                    onChange={handleInputChange('cta', 'subtitle')}
                    fullWidth
                    multiline
                    rows={3}
                />
                <TextField
                    label="Buton Metni"
                    value={ctaData.buttonText}
                    onChange={handleInputChange('cta', 'buttonText')}
                    fullWidth
                />
                 <TextField
                    label="Buton Linki"
                    value={ctaData.buttonLink}
                    onChange={handleInputChange('cta', 'buttonLink')}
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={() => handleSaveSection('cta')} sx={{ alignSelf: 'flex-start' }}>
                    CTA Bölümünü Kaydet
                </Button>
            </Stack>
          </Paper>
        )}
      </Box>

      <ItemDialog
        open={dialogOpen}
        onClose={closeItemDialog}
        itemData={editingItem}
        onItemSave={handleSaveItem}
        fieldsConfig={getDialogConfig().fields}
        title={getDialogConfig().title}
      />

    </Box>
  );
}

export default AdminHomePage;