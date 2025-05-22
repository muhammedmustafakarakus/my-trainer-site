// backend/models/FeatureItem.model.js
import mongoose from 'mongoose';

const FeatureItemSchema = new mongoose.Schema({
  icon: { type: String, required: true }, // MUI ikon adı veya SVG
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

// module.exports = mongoose.model('FeatureItem', FeatureItemSchema); // ESKİ
const FeatureItem = mongoose.model('FeatureItem', FeatureItemSchema);
export default FeatureItem; // YENİ