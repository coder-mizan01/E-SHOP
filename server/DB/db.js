require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
