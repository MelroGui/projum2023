const express = require('express');
const router = express.Router();

const Tarefas = require("../controllers/tarefas.controller");

router.post("/ListaTarefa/tarefa", Tarefas.create);
router.get("/ListaTarefa/tarefas", Tarefas.readAll);
router.get("/ListaTarefa/:status", Tarefas.readStatus);
router.put("/ListaTarefa/atualiza", Tarefas.update);

module.exports = router;