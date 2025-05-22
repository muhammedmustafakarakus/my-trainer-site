// server/routes/home.routes.js
import express from 'express';

// Controller fonksiyonlarını import et
import {
  getHeroSection, updateHeroSection,
  getFeatures, createFeature, updateFeature, deleteFeature, updateFeaturesOrder,
  getPopularLessons, createPopularLesson, updatePopularLesson, deletePopularLesson, updatePopularLessonsOrder,
  getStatistics, createStatistic, updateStatistic, deleteStatistic, updateStatisticsOrder,
  getEducationApproachTabs,
  //createEducationApproachTab, updateEducationApproachTab, deleteEducationApproachTab, updateEducationApproachTabsOrder, // Bunları controller'a ekleyince import edin
  getCtaSection, updateCtaSection,
  getAllHomepageContent,
} from '../controllers/home.controller.js'; // .js uzantısını eklemeyi unutmayın

// Middleware'ler (auth ve resim yükleme)
// Henüz oluşturulmadıysa veya import edilmediyse yorum satırı yapın
// import { protect, authorize } from '../middleware/auth.middleware.js';
// import { uploadPopularLessonImage, uploadHeroImage } from '../middleware/upload.middleware.js';

const router = express.Router();

// --- PUBLIC ROUTES (Frontend'in anasayfa içeriğini çekmesi için) ---
router.get('/', getAllHomepageContent); // Tüm anasayfa içeriğini tek seferde getir


// --- ADMIN ROUTES (CRUD işlemleri için - yetkilendirme gerektirir) ---

// Geçici olarak middleware'leri devre dışı bırakıyorum,
// gerçek implementasyonda bunları aktif etmelisiniz.
const protect = (req, res, next) => next(); // Geçici placeholder
const authorize = (role) => (req, res, next) => next(); // Geçici placeholder
const uploadPopularLessonImage = { single: (fieldName) => (req, res, next) => next() }; // Geçici placeholder
// const uploadHeroImage = { single: (fieldName) => (req, res, next) => next() }; // Geçici placeholder


// Hero Section
router.route('/admin/hero')
  .get(protect, authorize('admin'), getHeroSection)
  .put(protect, authorize('admin'), /* uploadHeroImage.single('imageFile'), */ updateHeroSection);

// Features
router.route('/admin/features')
  .get(protect, authorize('admin'), getFeatures)
  .post(protect, authorize('admin'), createFeature);
router.put('/admin/features/order', protect, authorize('admin'), updateFeaturesOrder);
router.route('/admin/features/:id')
  // .get(protect, authorize('admin'), getFeatureById) // Controller'a eklenince aktif edin
  .put(protect, authorize('admin'), updateFeature)
  .delete(protect, authorize('admin'), deleteFeature);

// Popular Lessons
router.route('/admin/popular-lessons')
  .get(protect, authorize('admin'), getPopularLessons)
  .post(protect, authorize('admin'), uploadPopularLessonImage.single('imageFile'), createPopularLesson);
router.put('/admin/popular-lessons/order', protect, authorize('admin'), updatePopularLessonsOrder);
router.route('/admin/popular-lessons/:id')
  // .get(protect, authorize('admin'), getPopularLessonById) // Controller'a eklenince aktif edin
  .put(protect, authorize('admin'), uploadPopularLessonImage.single('imageFile'), updatePopularLesson)
  .delete(protect, authorize('admin'), deletePopularLesson);

// Statistics
router.route('/admin/statistics')
    .get(protect, authorize('admin'), getStatistics)
    .post(protect, authorize('admin'), createStatistic);
router.put('/admin/statistics/order', protect, authorize('admin'), updateStatisticsOrder);
router.route('/admin/statistics/:id')
    // .get(protect, authorize('admin'), getStatisticById) // Controller'a eklenince aktif edin
    .put(protect, authorize('admin'), updateStatistic)
    .delete(protect, authorize('admin'), deleteStatistic);

// Education Approach Tabs
router.route('/admin/education-approach')
    .get(protect, authorize('admin'), getEducationApproachTabs);
    // .post(protect, authorize('admin'), createEducationApproachTab);
// router.put('/admin/education-approach/order', protect, authorize('admin'), updateEducationApproachTabsOrder);
// router.route('/admin/education-approach/:id')
    // .get(protect, authorize('admin'), getEducationApproachTabById)
    // .put(protect, authorize('admin'), updateEducationApproachTab)
    // .delete(protect, authorize('admin'), deleteEducationApproachTab);

// CTA Section
router.route('/admin/cta')
  .get(protect, authorize('admin'), getCtaSection)
  .put(protect, authorize('admin'), updateCtaSection);

export default router; // module.exports yerine export default