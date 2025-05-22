import mongoose from 'mongoose';
const HeroHighlightSchema = new mongoose.Schema({
  icon: { type: String }, // İkon adı veya SVG içeriği
  label: { type: String, required: true },
});

const HeroSectionSchema = new mongoose.Schema({
  chipLabel: { type: String, default: "Online Eğitim Platformu" },
  title: { type: String, required: true, default: "Kaliteli Eğitimle Geleceğinizi Şekillendirin" },
  subtitle: { type: String, default: "Akademik başarınızı artırmak için birebir, kişiselleştirilmiş online dersler alın ve potansiyelinizi keşfedin." },
  highlights: [HeroHighlightSchema],
  ctaButton1Text: { type: String, default: "Dersleri Keşfet" },
  ctaButton1Link: { type: String, default: "/courses" },
  ctaButton2Text: { type: String, default: "Ücretsiz Deneme Dersi" },
  ctaButton2Link: { type: String, default: "/contact" },
  // Sağ taraftaki görsel alan için alanlar eklenebilir,
  // örneğin ana ikon, kart başlıkları ve içerikleri.
  // Veya bu kısım da ayrı bir model olabilir.
  // Şimdilik sabit olduğunu varsayalım veya frontend'den yönetilsin.
  // Eğer sağdaki kartlar dinamik olacaksa:
  // rightSideCard1Title: String,
  // rightSideCard1Subtitle: String,
  // rightSideCard1AvatarChar: String, // 'M'
  // rightSideCard2Title: String,
  // rightSideCard2Subtitle: String,
  // rightSideCard2AvatarChar: String, // 'F'
  // rightSideStat1Title: String,
  // rightSideStat1Subtitle: String,
  // rightSideStat2Title: String,
  // rightSideStat2Subtitle: String,
  // imageUrl: String, // Eğer bir ana resim varsa
  isActive: { type: Boolean, default: true } // Genellikle tek hero olur ama birden fazla olursa diye
}, { timestamps: true });

const HeroSection = mongoose.model('HeroSection', HeroSectionSchema);
export default HeroSection;