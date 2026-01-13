const express = require("express");
const { simularEnergia } = require("../controllers/simulacao.controller");

const router = express.Router();

router.post("/simular", simularEnergia);

module.exports = router;
