const { Livro } = require('../models');

module.exports = {
  // Listar todos os livros
  listar: async (req, res) => {
    try {
      const livros = await Livro.findAll();
      res.json(livros);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar livros' });
    }
  },

  // Criar um novo livro
  criar: async (req, res) => {
    try {
      const livro = await Livro.create(req.body);
      res.status(201).json(livro);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar livro' });
    }
  },

  // Atualizar os dados de um livro
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const livro = await Livro.findByPk(id);
      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }
      await livro.update(req.body);
      res.json(livro);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar livro' });
    }
  },

  // Excluir um livro
  excluir: async (req, res) => {
    try {
      const { id } = req.params;
      const livro = await Livro.findByPk(id);
      if (!livro) {
        return res.status(404).json({ error: 'Livro não encontrado' });
      }
      await livro.destroy();
      res.json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir livro' });
    }
  }
};
