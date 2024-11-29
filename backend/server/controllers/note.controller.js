const Note = require('../models/Note');
const Categorie = require('../models/Categorie');

// Criar nova nota
exports.create = async (req, res) => {
  try {
    const { title, content, userid, categoryCode } = req.body;

    // Verifica se todos os campos obrigatórios estão presentes
    if (!title || !content || !userid || !categoryCode) {
      return res.status(400).send({ message: 'Title, content, userId, and categoryCode are required' });
    }

    // Verifica se a categoria fornecida existe
    const existingCategory = await Categorie.findOne({ categoryCode });
    if (!existingCategory) {
      return res.status(400).send({ message: 'Category does not exist' });
    }

    const noteData = {
      title,
      content,
      userid,
      categoryCode,
    };

    // Cria a nova nota
    const note = await Note.create(noteData);
    res.status(201).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error creating note' });
  }
};

// Buscar todas as notas
exports.findAll = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving notes' });
  }
};

// Buscar notas por usuário
exports.findAllByUser = async (req, res) => {
  try {
    const { userid } = req.params;

    // Verifica se o userid foi passado
    if (!userid) {
      return res.status(400).send({ message: 'User ID is required' });
    }

    const notes = await Note.find({ userid });
    if (notes.length === 0) {
      return res.status(404).send({ message: `No notes found for user ${userid}` });
    }
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving notes by user' });
  }
};

// Buscar uma nota por ID
exports.findOne = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send({ message: `Note not found with id ${req.params.id}` });
    }
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving note' });
  }
};

// Atualizar uma nota
exports.update = async (req, res) => {
  try {
    const { title, content, categoryCode } = req.body;

    // Verifica se todos os campos obrigatórios estão presentes
    if (!title || !content || !categoryCode) {
      return res.status(400).send({ message: 'Title, content, and categoryCode are required' });
    }

    // Verifica se a categoria fornecida existe
    const existingCategory = await Categorie.findOne({ categoryCode });
    if (!existingCategory) {
      return res.status(400).send({ message: 'Category does not exist' });
    }

    const updateData = { title, content, categoryCode };

    const note = await Note.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!note) {
      return res.status(404).send({ message: `Note not found with id ${req.params.id}` });
    }

    res.status(200).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error updating note' });
  }
};

// Deletar uma nota
exports.delete = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).send({ message: `Note not found with id ${req.params.id}` });
    }
    res.status(200).send({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error deleting note' });
  }
};
