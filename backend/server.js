import 'dotenv/config';
import express from 'express';
import path from 'path'; // path modülünü import edin
import { fileURLToPath } from 'url'; // ES Modülleri için __dirname alternatifi
import cors from 'cors'; // CORS middleware'ini import edin

import connectToMongoDB from './db/connectToMongoDB.js';
import apiRoutes from './routes/index.js'; // Oluşturacağımız ana router
// import errorHandler from './middleware/errorHandler.middleware.js'; // Opsiyonel: Genel hata yakalayıcı

// ES Modüllerinde __dirname eşdeğeri
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// --- MIDDLEWARES ---

// CORS (Cross-Origin Resource Sharing)
// Frontend'inizin farklı bir portta (örn: 3000) çalıştığını varsayarsak
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Frontend URL'nizi .env'den alın veya varsayılan kullanın
  credentials: true // Eğer cookie veya authorization header'ları kullanıyorsanız
}));

// JSON Body Parser (req.body'yi parse etmek için)
app.use(express.json());
// URL Encoded Body Parser (form verilerini parse etmek için)
app.use(express.urlencoded({ extended: false }));

// Serve static files for uploads (Yüklenen resimlere public erişim için)
// Tarayıcıdan /uploads/popularLessons/image.jpg gibi erişilebilir olacak
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// --- API ROUTES ---
// Tüm API endpoint'lerimiz /api prefix'i altında olacak
app.use('/api', apiRoutes);


// --- BASIC ROOT ROUTE (Test için) ---
app.get('/', (req, res) => {
  res.send('Merhaba Dünya! API ana dizini. API endpointleri için /api/... kullanın.');
});

// --- ERROR HANDLER (Opsiyonel ama önerilir) ---
// Tüm route'lardan sonra, en sona eklenmeli
// app.use(errorHandler);


// --- SERVER LISTENING ---
app.listen(PORT, async () => {
  try {
    await connectToMongoDB(); // Bağlantı kurmayı bekle
    console.log('✅ MongoDB bağlantısı başarılı!');
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
    console.log(`📂 Static files (uploads) served from: ${path.join(__dirname, 'uploads')}`);
  } catch (err) {
    console.error('❌ MongoDB bağlantı hatası:', err.message); // err.message daha okunaklı olabilir
    process.exit(1); // Başarısız bağlantıda uygulamayı sonlandır
  }
});