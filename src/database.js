const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/defaultdb';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
