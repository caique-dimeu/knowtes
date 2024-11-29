const User = require('../models/User');

// Função para registrar um novo usuário
exports.register = async (req, res) => {
  try {
    const { login, password, userid } = req.body;

    // Validação dos dados recebidos
    if (!login || !password || !userid) {
      return res.status(400).send({ message: 'Missing required fields: login, password, and userid are required' });
    }

    // Verifica se o login já existe
    const existingUserByLogin = await User.findOne({ login });
    if (existingUserByLogin) {
      return res.status(400).send({ message: 'User with this login already exists' });
    }

    // Verifica se o userid já existe
    const existingUserById = await User.findOne({ userid });
    if (existingUserById) {
      return res.status(400).send({ message: 'User with this userid already exists' });
    }

    // Cria o novo usuário com a senha em texto simples
    const user = new User({ login, password, userid });

    // Salva o usuário no banco de dados
    await user.save();
    res.status(201).send({ message: 'User created successfully', user: { login, userid } });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error creating user' });
  }
};

// Função para login (simplificado, com senha em texto simples)
exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;

    // Valida se o login e senha foram fornecidos
    if (!login || !password) {
      return res.status(400).send({ message: 'Login and password are required' });
    }

    // Encontra o usuário pelo login
    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).send({ message: 'Invalid login credentials' });
    }

    // Compara a senha fornecida com a senha armazenada (sem hashing)
    if (user.password !== password) {
      return res.status(400).send({ message: 'Invalid login credentials' });
    }

    res.status(200).send({ message: 'Login successful', userid: user.userid });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error logging in' });
  }
};

// Função para pegar todos os usuários
exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving users' });
  }
};

// Função para pegar um usuário específico
exports.findOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: `User not found with id ${req.params.id}` });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving user' });
  }
};
