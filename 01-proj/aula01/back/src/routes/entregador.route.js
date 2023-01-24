const express = require('express');
const router = express.Router();

const Entregador = require("../controllers/entregador.controller.js");

router.post("/gestao/Entregador", Entregador.create);
router.post("/gestao/login", Entregador.login);
router.get("/gestao/Entregadores", Entregador.readAll);

module.exports = router;