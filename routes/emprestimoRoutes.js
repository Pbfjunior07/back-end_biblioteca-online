const express = require('express');
const router = express.Router();
const EmprestimoController = require('../controllers/EmprestimoController');

router.get('/', EmprestimoController.listar);
router.post('/', EmprestimoController.criar);
router.put('/:id', EmprestimoController.atualizar);
router.delete('/:id', EmprestimoController.excluir);

module.exports = router;
