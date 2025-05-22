import express from 'express';
const router = express.Router();
import homeRoutes from './home.routes.js';
// const authRoutes = require('./auth.routes'); // Eğer varsa

// router.use('/auth', authRoutes);
router.use('/homepage-content', homeRoutes); // veya sadece '/home'

export default router;