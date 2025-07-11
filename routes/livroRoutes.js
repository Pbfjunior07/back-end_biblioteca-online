const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/LivroController');

router.get('/', LivroController.listar);
router.post('/', LivroController.criar);
router.put('/:id', LivroController.atualizar);
router.delete('/:id', LivroController.excluir);

module.exports = router;

