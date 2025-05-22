import mongoose from 'mongoose';

const CtaSectionSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "Eğitim Yolculuğunuza Bugün Başlayın" },
  subtitle: { type: String, default: "Akademik hedeflerinize ulaşmak için profesyonel desteği bekletmeyin. İlk dersinizi ücretsiz planlayın!" },
  buttonText: { type: String, default: "Ücretsiz Ders Planla" },
  buttonLink: { type: String, default: "/contact" },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// mongoose.model çağrısını bir değişkene atayıp onu export edebilirsiniz
const CtaSection = mongoose.model('CtaSection', CtaSectionSchema);
export default CtaSection; // DOĞRU (ESM için default export)