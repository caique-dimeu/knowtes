const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Configuração de CORS
const cors = require("cors");
app.use(cors());

// Configuração de conexão com o MongoDB
const mongoURI = "mongodb://mongo_database:27017/mydatabase";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

// endpoint padrao
app.get("/", (req, res) => {
  res.send("Servidor Conectado! :D");
});

// Porta do server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
