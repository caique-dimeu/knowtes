const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  datetime: { type: Date, default: Date.now },
  userid: { type: String, required: true }
});

module.exports = mongoose.model('Note', noteSchema);
