const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage()
});

router.post("/upload-conta", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ erro: "Arquivo PDF não enviado" });
  }

  res.json({
    mensagem: "PDF recebido com sucesso",
    nomeArquivo: req.file.originalname
  });
});

module.exports = router;
