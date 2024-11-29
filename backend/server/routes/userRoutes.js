const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');  // Verifique se o caminho está correto

// Rota para criar um usuário (registro)
router.post('/register', UserController.register);  // Certifique-se de que a função 'register' está no controller
// Rota para login
router.post('/login', UserController.login);  // Certifique-se de que a função 'login' está no controller
// Rota para pegar todos os usuários
router.get('/', UserController.findAll);  // Certifique-se de que a função 'findAll' está no controller
// Rota para pegar um usuário específico
router.get('/:id', UserController.findOne);  // Certifique-se de que a função 'findOne' está no controller

module.exports = router;
