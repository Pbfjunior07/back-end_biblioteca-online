const { Emprestimo } = require('../models');

module.exports = {
  listar: async (req, res) => {
    try {
      const emprestimos = await Emprestimo.findAll();
      res.json(emprestimos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar empréstimos' });
    }
  },
  criar: async (req, res) => {
    try {
      const novoEmprestimo = await Emprestimo.create(req.body);
      res.status(201).json(novoEmprestimo);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar empréstimo' });
    }
  }
};
