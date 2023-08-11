
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Validates email format
  },
  password: {
    type: String,
    required: true,
    minlength: 4 // Minimum password length
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
