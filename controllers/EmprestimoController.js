const { Emprestimo } = require('../models');

module.exports = {
  // Listar todos os empréstimos
  listar: async (req, res) => {
    try {
      const emprestimos = await Emprestimo.findAll();
      res.json(emprestimos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar empréstimos' });
    }
  },

  // Criar um novo empréstimo
  criar: async (req, res) => {
    try {
      const emprestimo = await Emprestimo.create(req.body);
      res.status(201).json(emprestimo);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar empréstimo' });
    }
  },

  // Atualizar os dados de um empréstimo
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const emprestimo = await Emprestimo.findByPk(id);
      if (!emprestimo) {
        return res.status(404).json({ error: 'Empréstimo não encontrado' });
      }
      await emprestimo.update(req.body);
      res.json(emprestimo);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar empréstimo' });
    }
  },

  // Excluir um empréstimo
  excluir: async (req, res) => {
    try {
      const { id } = req.params;
      const emprestimo = await Emprestimo.findByPk(id);
      if (!emprestimo) {
        return res.status(404).json({ error: 'Empréstimo não encontrado' });
      }
      await emprestimo.destroy();
      res.json({ message: 'Empréstimo excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir empréstimo' });
    }
  }
};
