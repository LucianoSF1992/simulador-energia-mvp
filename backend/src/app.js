const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload.routes");
const simulacaoRoutes = require("./routes/simulacao.routes");
const pdfSimulacaoRoutes = require("./routes/pdfSimulacao.routes");

const app = express();

// adicionar temporariamente no app.js
const db = require("./database/connection");

db.query("SELECT 1")
  .then(() => console.log("MySQL conectado com sucesso"))
  .catch(err => console.error(err));


app.use(cors());
app.use(express.json());
app.use("/api", uploadRoutes);
app.use("/api", simulacaoRoutes);
app.use("/api", pdfSimulacaoRoutes);

app.get("/", (req, res) => {
  res.json({ status: "API do Simulador de Energia ativa 🚀" });
});

module.exports = app;
