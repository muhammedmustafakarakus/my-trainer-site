import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {       
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
          console.error('❌ MONGO_URI is not defined in .env file or environment variables.');
          throw new Error('MONGO_URI is not defined');
        }

        await mongoose.connect(mongoUri); // mongoUri değişkenini kullanın
        console.log("Connected to MongoDB (from connectToMongoDB.js)"); // Logu daha spesifik hale getirin
    } catch (error) {
        console.error("Error connecting to MongoDB (from connectToMongoDB.js):", error.message); // Logu daha spesifik hale getirin
        // Hatayı tekrar fırlat ki server.js'deki catch bloğu da yakalasın
        // ve process.exit(1) çalışabilsin.
        throw error;
    }
};

export default connectToMongoDB;