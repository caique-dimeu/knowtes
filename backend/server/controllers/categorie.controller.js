const Categorie = require('../models/Categorie');

// Criar nova categoria
exports.create = async (req, res) => {
  try {
    const { categoryCode, name, userid } = req.body;

    // Verifique se todos os campos necessários foram fornecidos
    if (!categoryCode || !name || !userid) {
      return res.status(400).send({ message: 'categoryCode, name, and userid are required' });
    }

    // Verifica se a categoria já existe para o usuário
    const existingCategory = await Categorie.findOne({ categoryCode, userid });
    if (existingCategory) {
      return res.status(400).send({ message: 'Category code already exists for this user' });
    }

    const category = new Categorie({ categoryCode, name, userid });
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error creating category' });
  }
};

// Buscar todas as categorias associadas a um usuário
exports.findAllByUser = async (req, res) => {
  try {
    const { userid } = req.params;

    // Verifica se o userid foi passado
    if (!userid) {
      return res.status(400).send({ message: 'User ID is required' });
    }

    // Encontrar todas as categorias associadas ao usuário e excluir o campo 'userid'
    const categories = await Categorie.find({ userid }).select('-userid');
    if (categories.length === 0) {
      return res.status(404).send({ message: `No categories found for user ${userid}` });
    }

    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving categories' });
  }
};

// Buscar todas as categorias (sem filtro de usuário, para testes gerais)
exports.findAll = async (req, res) => {
  try {
    // Encontrar todas as categorias e excluir o campo 'userid'
    const categories = await Categorie.find().select('-userid');
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving categories' });
  }
};

// Buscar uma categoria pelo código
exports.findByCode = async (req, res) => {
  try {
    const { categoryCode } = req.params;

    // Verifica se o categoryCode foi passado
    if (!categoryCode) {
      return res.status(400).send({ message: 'Category code is required' });
    }

    // Encontrar a categoria pelo código e excluir o campo 'userid'
    const category = await Categorie.findOne({ categoryCode }).select('-userid');
    if (!category) {
      return res.status(404).send({ message: 'Category not found' });
    }

    res.status(200).send(category);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving category' });
  }
};

// Atualizar uma categoria pelo código
exports.updateByCode = async (req, res) => {
  try {
    const { categoryCode } = req.params;
    const { name, userid } = req.body;

    // Verifica se os parâmetros necessários estão presentes
    if (!name || !userid) {
      return res.status(400).send({ message: 'name and userid are required' });
    }

    // Atualizar a categoria com os dados fornecidos
    const updatedCategory = await Categorie.findOneAndUpdate(
      { categoryCode },
      { name, userid },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).send({ message: 'Category not found' });
    }

    res.status(200).send(updatedCategory);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error updating category' });
  }
};

// Deletar uma categoria pelo código
exports.deleteByCode = async (req, res) => {
  try {
    const { categoryCode } = req.params;

    // Verifica se o categoryCode foi passado
    if (!categoryCode) {
      return res.status(400).send({ message: 'Category code is required' });
    }

    // Deletar a categoria pelo código
    const deletedCategory = await Categorie.findOneAndDelete({ categoryCode }).select('-userid');
    if (!deletedCategory) {
      return res.status(404).send({ message: 'Category not found' });
    }

    res.status(200).send({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error deleting category' });
  }
};
