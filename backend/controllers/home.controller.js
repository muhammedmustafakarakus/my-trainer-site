import HeroSection from '../models/HeroSection.model.js';
import FeatureItem from '../models/FeatureItem.model.js';
import PopularLessonItem from '../models/PopularLessonItem.model.js';
import StatisticItem from '../models/StatisticItem.model.js';
import EducationApproachTab from '../models/EducationApproachTab.model.js';
import CtaSection from '../models/CtaSection.model.js';
import asyncHandler from 'express-async-handler';

// --- Helper Function for Singleton Sections (Hero, CTA) ---
// Bu helper fonksiyonlar bu dosya içinde kullanıldığı için export edilmeyebilirler,
// ama isterseniz başka bir yerde kullanmak üzere export edebilirsiniz.
const getSingletonSection = asyncHandler(async (Model, req, res) => {
  let section = await Model.findOne({ isActive: true });
  if (!section) {
    return res.status(404).json({ success: false, message: 'Section not found' });
  }
  res.json({ success: true, data: section });
});

const updateSingletonSection = asyncHandler(async (Model, req, res) => {
  const allowedUpdates = Object.keys(Model.schema.paths);
  const updates = {};
  for (const key in req.body) {
    if (allowedUpdates.includes(key)) {
      updates[key] = req.body[key];
    }
  }
  let section = await Model.findOneAndUpdate({ isActive: true }, updates, {
    new: true,
    runValidators: true,
    upsert: true
  });
  res.json({ success: true, data: section });
});

// --- Hero Section ---
export const getHeroSection = (req, res) => getSingletonSection(HeroSection, req, res); // DOĞRU
export const updateHeroSection = (req, res) => updateSingletonSection(HeroSection, req, res); // DOĞRU

// --- Features Section ---
export const getFeatures = asyncHandler(async (req, res) => { // DOĞRU
  const features = await FeatureItem.find({}).sort({ order: 'asc' });
  res.json({ success: true, data: features });
});

export const createFeature = asyncHandler(async (req, res) => { // DOĞRU
  const { title, description, icon, order } = req.body;
  const feature = await FeatureItem.create({ title, description, icon, order });
  res.status(201).json({ success: true, data: feature });
});

export const updateFeature = asyncHandler(async (req, res) => { // DOĞRU
  const feature = await FeatureItem.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!feature) return res.status(404).json({ success: false, message: 'Feature not found' });
  res.json({ success: true, data: feature });
});

export const deleteFeature = asyncHandler(async (req, res) => { // DOĞRU
  const feature = await FeatureItem.findByIdAndDelete(req.params.id);
  if (!feature) return res.status(404).json({ success: false, message: 'Feature not found' });
  res.json({ success: true, message: 'Feature deleted' });
});

export const updateFeaturesOrder = asyncHandler(async (req, res) => { // DOĞRU
    const { orderedIds } = req.body;
    if (!Array.isArray(orderedIds)) {
        return res.status(400).json({ success: false, message: 'orderedIds must be an array' });
    }
    const bulkOps = orderedIds.map(item => ({
        updateOne: {
            filter: { _id: item.id },
            update: { $set: { order: item.order } }
        }
    }));
    if (bulkOps.length > 0) {
        await FeatureItem.bulkWrite(bulkOps);
    }
    res.json({ success: true, message: 'Features order updated' });
});

// --- Popular Lessons Section ---
export const getPopularLessons = asyncHandler(async (req, res) => { // DOĞRU
    const lessons = await PopularLessonItem.find({}).sort({ order: 'asc' }).populate('courseId', 'title slug');
    res.json({ success: true, data: lessons });
});

export const createPopularLesson = asyncHandler(async (req, res) => { 
    const { title, description, price, rating, reviews, courseLink, order, courseId } = req.body;
    let imageUrl = req.body.imageUrl;
    if (req.file) {
        imageUrl = `/uploads/popularLessons/${req.file.filename}`;
    }
    const lesson = await PopularLessonItem.create({ title, description, price, rating, reviews, courseLink, order, imageUrl, courseId });
    res.status(201).json({ success: true, data: lesson });
});

export const updatePopularLesson = asyncHandler(async (req, res) => { 
    const lesson = await PopularLessonItem.findById(req.params.id);
    if (!lesson) return res.status(404).json({ success: false, message: 'Popular lesson not found' });
    const updates = { ...req.body };
    if (req.file) {
        updates.imageUrl = `/uploads/popularLessons/${req.file.filename}`;
    }
    const updatedLesson = await PopularLessonItem.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    res.json({ success: true, data: updatedLesson });
});

export const deletePopularLesson = asyncHandler(async (req, res) => { // DOĞRU
    const lesson = await PopularLessonItem.findByIdAndDelete(req.params.id);
    if (!lesson) return res.status(404).json({ success: false, message: 'Popular lesson not found' });
    res.json({ success: true, message: 'Popular lesson deleted' });
});

export const updatePopularLessonsOrder = asyncHandler(async (req, res) => { // DOĞRU
    const { orderedIds } = req.body;
    if (!Array.isArray(orderedIds)) {
        return res.status(400).json({ success: false, message: 'orderedIds must be an array' });
    }
    const bulkOps = orderedIds.map(item => ({
        updateOne: {
            filter: { _id: item.id },
            update: { $set: { order: item.order } }
        }
    }));
    if (bulkOps.length > 0) {
        await PopularLessonItem.bulkWrite(bulkOps);
    }
    res.json({ success: true, message: 'Popular lessons order updated' });
});

// --- Statistics Section ---
export const getStatistics = asyncHandler(async (req, res) => { // DOĞRU
  const stats = await StatisticItem.find({}).sort({ order: 'asc' });
  res.json({ success: true, data: stats });
});
export const createStatistic = asyncHandler(async (req, res) => { // DOĞRU
    const statistic = await StatisticItem.create(req.body);
    res.status(201).json({ success: true, data: statistic });
});
export const updateStatistic = asyncHandler(async (req, res) => { // DOĞRU
    const statistic = await StatisticItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!statistic) return res.status(404).json({ success: false, message: 'Statistic not found' });
    res.json({ success: true, data: statistic });
});
export const deleteStatistic = asyncHandler(async (req, res) => { // DOĞRU
    const statistic = await StatisticItem.findByIdAndDelete(req.params.id);
    if (!statistic) return res.status(404).json({ success: false, message: 'Statistic not found' });
    res.json({ success: true, message: 'Statistic deleted' });
});
export const updateStatisticsOrder = asyncHandler(async (req, res) => { // DOĞRU
    const { orderedIds } = req.body;
    if (!Array.isArray(orderedIds)) {
        return res.status(400).json({ success: false, message: 'orderedIds must be an array' });
    }
    const bulkOps = orderedIds.map(item => ({
        updateOne: { filter: { _id: item.id }, update: { $set: { order: item.order } } }
    }));
    if (bulkOps.length > 0) {
        await StatisticItem.bulkWrite(bulkOps);
    }
    res.json({ success: true, message: 'Statistics order updated' });
});

// --- Education Approach Section ---
export const getEducationApproachTabs = asyncHandler(async (req, res) => { // DOĞRU
  const tabs = await EducationApproachTab.find({}).sort({ order: 'asc' });
  res.json({ success: true, data: tabs });
});
// TODO: EducationApproachTab için create, update, delete, updateOrder fonksiyonlarını ekleyin ve 'export' edin.

// --- CTA Section ---
export const getCtaSection = (req, res) => getSingletonSection(CtaSection, req, res); // DOĞRU
export const updateCtaSection = (req, res) => updateSingletonSection(CtaSection, req, res); // DOĞRU

// --- Get All Homepage Content (for frontend initial load) ---
export const getAllHomepageContent = asyncHandler(async (req, res) => { // DOĞRU
  const [
    heroSection,
    features,
    popularLessons,
    statistics,
    educationApproachTabs,
    ctaSection,
  ] = await Promise.all([
    HeroSection.findOne({ isActive: true }),
    FeatureItem.find({}).sort({ order: 'asc' }),
    PopularLessonItem.find({}).sort({ order: 'asc' }).populate('courseId', 'title slug'),
    StatisticItem.find({}).sort({ order: 'asc' }),
    EducationApproachTab.find({}).sort({ order: 'asc' }),
    CtaSection.findOne({ isActive: true }),
  ]);

  res.json({
    success: true,
    data: {
      heroSection,
      features,
      popularLessons,
      statistics,
      educationApproachTabs,
      ctaSection,
    },
  });
});