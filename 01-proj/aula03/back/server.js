const express = require('express');
const cors = require('cors');

const router = require('./src/routes/setor.route');
const vende = require('./src/routes/vendedor.route');
const prod = require('./src/routes/produto.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(vende);
app.use(prod);

app.listen(3000, () => { console.log("Rodando"); })