require('dotenv').config(); //Habilita variáveis de Ambiente
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const Pedido = require('./src/routes/pedidos.route');
const Entregador = require('./src/routes/entregador.route');

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    .use(Pedido)
    .use(Entregador);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});