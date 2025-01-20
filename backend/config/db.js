require('dotenv').config();

const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};


module.exports = connectToMongoDB;
