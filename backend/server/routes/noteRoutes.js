const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');

// Criar uma nova nota
// Rota: POST /notes
router.post('/', noteController.create);

// Buscar todas as notas
// Rota: GET /notes
router.get('/', noteController.findAll);

// Buscar notas por usuário (usuário específico)
// Rota: GET /notes/user/:userid
router.get('/user/:userid', noteController.findAllByUser);

// Buscar uma nota por ID
// Rota: GET /notes/:id
router.get('/:id', noteController.findOne);

// Atualizar uma nota por ID
// Rota: PUT /notes/:id
router.put('/:id', noteController.update);

// Deletar uma nota por ID
// Rota: DELETE /notes/:id
router.delete('/:id', noteController.delete);

module.exports = router;
