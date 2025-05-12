const { Usuario } = require('../models');

module.exports = {
  listar: async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  },
  criar: async (req, res) => {
    try {
      const novoUsuario = await Usuario.create(req.body);
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
};
