// server/index.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

// Configuração de conexão com o MongoDB
const mongoURI = 'mongodb://mongo_database:27017/mydatabase';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Definir esquema e modelo para a coleção "user"
const userSchema = new mongoose.Schema({
  login: String,
  password: String,
  userid: String
});
const User = mongoose.model('User', userSchema);

// Definir esquema e modelo para a coleção "notes"
const notesSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
  datetime: Date,
  userid: String
});
const Note = mongoose.model('Note', notesSchema);

app.get('/', (req, res) => {
  res.send('Servidor está rodando');
});

// Rota para testar conexão e visualizar alguns dados
app.get('/test-connection', async (req, res) => {
  try {
    // Exemplo de inserção de um documento na coleção "user"
    await User.create({ login: 'testuser', password: 'testpass', userid: '1' });

    // Exemplo de inserção de um documento na coleção "notes"
    await Note.create({ id: '1', title: 'Example Note', content: 'This is a test note', datetime: new Date(), userid: '1' });

    // Buscar todos os documentos da coleção "user"
    const users = await User.find();
    // Buscar todos os documentos da coleção "notes"
    const notes = await Note.find();

    res.json({
      message: 'Conexão com o MongoDB bem-sucedida!',
      users,
      notes
    });
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ message: 'Erro ao buscar dados', error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
