// backend/models/PopularLessonItem.model.js
import mongoose from 'mongoose';

const PopularLessonItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String }, // Resim dosyasının URL'si
  price: { type: String, required: true }, // "200₺/saat"
  rating: { type: Number },
  reviews: { type: Number },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }, // Eğer 'Course' modeliniz varsa
  courseLink: { type: String }, // Alternatif olarak direkt link
  order: { type: Number, default: 0 }
}, { timestamps: true });

// module.exports = mongoose.model('PopularLessonItem', PopularLessonItemSchema); // ESKİ
const PopularLessonItem = mongoose.model('PopularLessonItem', PopularLessonItemSchema);
export default PopularLessonItem; // YENİ