const express = require("express");
const cors = require("cors");

const app = express();

// adicionar temporariamente no app.js
const db = require("./database/connection");

db.query("SELECT 1")
  .then(() => console.log("MySQL conectado com sucesso"))
  .catch(err => console.error(err));


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API do Simulador de Energia ativa 🚀" });
});

module.exports = app;
