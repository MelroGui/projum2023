const express = require('express');

const router = express.Router();

const Funcionarios = require('../controllers/Funcionarios.js');

router.get('/funcionarios', Funcionarios.read); 
router.get('/funcionarios/:id_funcionario', Funcionarios.readFunc);
router.post('/funcionario', Funcionarios.create);
router.put('/funcionario/:id_funcionario', Funcionarios.update);
router.delete('/funcionario/:id_funcionario', Funcionarios.remove);

module.exports = router;