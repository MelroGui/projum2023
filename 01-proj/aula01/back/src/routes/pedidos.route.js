const express = require('express');
const router = express.Router();

const Pedido = require("../controllers/pedidos.controller.js");

router.post("/gestao/pedido", Pedido.create);
router.get("/gestao/pedidos", Pedido.readAll);
router.put("/gestao/pedidoE", Pedido.updateEntrega);
router.put("/gestao/pedidoF", Pedido.updateFim);
router.delete("/gestao/pedido/:id_pedido", Pedido.del);

module.exports = router;