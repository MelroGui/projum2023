const express = require('express');

const router = express.Router();

const Setor = require('../controllers/setor.controller');

router.post('/setor', Setor.create);
router.get('/setores', Setor.read);
router.put('/setor/:id', Setor.update);

module.exports = router;