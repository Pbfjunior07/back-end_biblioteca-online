const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/LivroController');

// Exemplo de rota para listar livros
router.get('/', LivroController.listar);
router.post('/', LivroController.criar);

module.exports = router;
