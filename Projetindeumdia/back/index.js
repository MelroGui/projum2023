require('dotenv').config(); //Habilita variáveis de Ambiente
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const Tarefas = require('./src/routes/tarefas.route');

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    .use(Tarefas)

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});