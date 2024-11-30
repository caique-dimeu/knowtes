const Note = require('../models/Note');
const mongoose = require('mongoose');

exports.create = async (req, res) => {
  try {
    const { title, content, userid } = req.body;

    if (!title || !content || !userid) {
      return res.status(400).send({ message: 'Title, content, and userId are required' });
    }

    const note = await Note.create({ title, content, userid });

    if (!mongoose.Types.ObjectId.isValid(note._id)) {
      return res.status(500).send({ message: 'Invalid ID generated for note' });
    }

    res.status(201).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error creating note' });
  }
};

exports.update = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).send({ message: 'Title and content are required' });
    }

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).send({ message: `Note not found with id ${req.params.id}` });
    }

    res.status(200).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error updating note' });
  }
};

exports.findAll = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving notes' });
  }
};

exports.findAllByUser = async (req, res) => {
  try {
    const { userid } = req.params;

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
