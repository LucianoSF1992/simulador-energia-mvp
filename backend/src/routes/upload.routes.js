const express = require("express");
const multer = require("multer");
const { lerPdf, extrairDadosConta } = require("../services/pdfReader.service");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage()
});

router.post("/upload-conta", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ erro: "Arquivo PDF não enviado" });
    }

    const textoPdf = await lerPdf(req.file.buffer);
    const dados = extrairDadosConta(textoPdf);

    return res.json({
      mensagem: "PDF lido com sucesso",
      dados_extraidos: dados
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao processar o PDF" });
  }
});

module.exports = router;
