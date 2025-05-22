// backend/models/StatisticItem.model.js
import mongoose from 'mongoose';

const StatisticItemSchema = new mongoose.Schema({
  value: { type: String, required: true }, // "10+", "95%"
  label: { type: String, required: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

// module.exports = mongoose.model('StatisticItem', StatisticItemSchema); // ESKİ
const StatisticItem = mongoose.model('StatisticItem', StatisticItemSchema);
export default StatisticItem; // YENİ