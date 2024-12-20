const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userid: { type: String, required: true, unique: true }
  
});

module.exports = mongoose.model('User', userSchema);