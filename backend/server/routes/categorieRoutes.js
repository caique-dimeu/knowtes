const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorie.controller');

// Criar nova categoria
// Rota: POST /categorias
router.post('/', categorieController.create);

// Buscar todas as categorias associadas a um usuário
// Rota: GET /categorias/user/:userid
router.get('/:userid', categorieController.findAllByUser);

// Buscar todas as categorias (sem filtro de usuário, para testes gerais)
// Rota: GET /categorias
router.get('/', categorieController.findAll);

// Buscar uma categoria pelo código
// Rota: GET /categorias/:categoryCode
router.get('/:categoryCode', categorieController.findByCode);

// Atualizar uma categoria pelo código
// Rota: PUT /categorias/:categoryCode
router.put('/:categoryCode', categorieController.updateByCode);

// Deletar uma categoria pelo código
// Rota: DELETE /categorias/:categoryCode
router.delete('/:categoryCode', categorieController.deleteByCode);

module.exports = router;
