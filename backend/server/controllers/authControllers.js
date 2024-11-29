const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { login, password } = req.body;

        const user = await User.findOne({login, password});
        if (!login || !password) {
            return res.status(400).json({ mensage: 'Login e senha são obrigatórios' });
        }

        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '7d'});
        res.json({ token });
    } catch (err) {
        res.status(500).json({ mensage: 'Erro no servidor', error: err.message });
    }
};

exports.verificarToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Exemplo para pegar o token do header Authorization
   
    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.userId = decoded.userId;
        next();
    });
};
