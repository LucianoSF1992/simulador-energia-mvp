const express = require("express");
const multer = require("multer");
const { simularPorPdf } = require("../controllers/pdfSimulacao.controller");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage()
});

router.post("/simular-pdf", upload.single("file"), simularPorPdf);

module.exports = router;
