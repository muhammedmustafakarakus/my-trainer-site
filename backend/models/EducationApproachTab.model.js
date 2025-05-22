// backend/models/EducationApproachTab.model.js
import mongoose from 'mongoose';

const EducationApproachTabSchema = new mongoose.Schema({
  tabId: { type: String, required: true, unique: true }, // 'personalized', 'methodology'
  icon: { type: String, required: true }, // MUI ikon adı
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [{ type: String }], // ['Detaylı öğrenme stili analizi', ...]
  detailsLink: { type: String }, // `/approach/personalized`
  order: { type: Number, default: 0 }
}, { timestamps: true });

// module.exports = mongoose.model('EducationApproachTab', EducationApproachTabSchema); // ESKİ
const EducationApproachTab = mongoose.model('EducationApproachTab', EducationApproachTabSchema);
export default EducationApproachTab; // YENİ