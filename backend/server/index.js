const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');  
const categorieRoutes = require('./routes/categorieRoutes'); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = 'mongodb://mongo_database:27017/mydatabase';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

app.use('/users', userRoutes);
app.use('/notes', noteRoutes);
app.use('/categories', categorieRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
