const express = require('express');
const authController = require('../controllers/authControllers');

const router = express.Router();

router.post('/login', authController.login);

router.get('/data', authController.verificarToken, (req, res) => {
    res.json({ mensage:  `Acesso autorizado, usuário ID: ${req.userId}` });
});

module.exports = router;
