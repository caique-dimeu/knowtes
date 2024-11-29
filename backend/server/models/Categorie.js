const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
  categoryCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  userid: { type: String, required: true }
});

module.exports = mongoose.model('Categorie', categorieSchema);
