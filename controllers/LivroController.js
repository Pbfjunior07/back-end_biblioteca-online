const { Livro } = require('../models');

module.exports = {
  // Função para listar todos os livros
  listar: async (req, res) => {
    try {
      const livros = await Livro.findAll();
      return res.json(livros);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar livros' });
    }
  },

  // Função para criar um novo livro
  criar: async (req, res) => {
    try {
      const novoLivro = await Livro.create(req.body);
      return res.status(201).json(novoLivro);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar livro' });
    }
  }
};
