// server.js: Geçici Express.js sunucusu

// Express kütüphanesini içe aktar
const express = require('express');

// Uygulama instance'ını oluştur
const app = express();

// Sunucun dinleyeceği port
const PORT = process.env.PORT || 3001;

// Ana dizin için basit bir GET endpoint'i
app.get('/', (req, res) => {
  res.send('Backend çalışıyor!');
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});

/*
  Kullanım:
  1. Terminalde backend dizinine gidin: cd backend
  2. Express'i yükleyin: npm install express
  3. sunucuyu başlatın: node server.js
  4. Tarayıcıda http://localhost:3001/ adresine gidin ve "Backend çalışıyor!" mesajını görün.
*/