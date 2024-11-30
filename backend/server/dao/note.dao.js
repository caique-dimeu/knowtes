const Note = require('../models/Note');
const Categorie = require('../models/Categorie');

exports.create = async (req, res) => {
  try {
    const { title, content, userid } = req.body;

    const noteData = { title, content, userid, categoryCode };
    const note = await Note.create(noteData);

    res.status(201).send({
      content: note.content
    });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error creating note' });
  }
};

exports.findAll = async (req, res) => {
  try {
    const notes = await Note.find().select('-userid');
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving notes' });
  }
};

exports.findAllByUser = async (req, res) => {
  try {
    const notes = await Note.find({ userid: req.params.userid }).select('-userid');
    if (notes.length === 0) {
      return res.status(404).send({ message: `No notes found for user ${req.params.userid}` });
    }
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving notes by user' });
  }
};

// Buscar uma nota por ID (sem incluir o userid)
exports.findOne = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id).select('-userid');
    if (!note) {
      return res.status(404).send({ message: `Note not found with id ${req.params.id}` });
    }
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving note' });
  }
};

// Atualizar uma nota (sem incluir o userid)
exports.update = async (req, res) => {
  try {
    const { title, content, categoryCode } = req.body;

    // Verifica se a categoria fornecida existe
    const existingCategory = await Categorie.findOne({ categoryCode });
    if (!existingCategory) {
      return res.status(400).send({ message: 'Category does not exist' });
    }

    const updateData = { title, content, categoryCode };
    const note = await Note.findByIdAndUpdate(req.params.id, updateData, { new: true }).select('-userid');
    if (!note) {
      return res.status(404).send({ message: `Note not found with id ${req.params.id}` });
    }

    res.status(200).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error updating note' });
  }
};

// Deletar uma nota (sem incluir o userid)
exports.delete = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id).select('-userid');
    if (!note) {
      return res.status(404).send({ message: `Note not found with id ${req.params.id}` });
    }
    res.status(200).send({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error deleting note' });
  }
};
