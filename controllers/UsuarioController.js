const { Usuario } = require('../models');

module.exports = {
  // Listar todos os usuários
  listar: async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  },

  // Criar um novo usuário
  criar: async (req, res) => {
    try {
      const usuario = await Usuario.create(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },

  // Atualizar os dados de um usuário
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      await usuario.update(req.body);
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  },

  // Excluir um usuário
  excluir: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      await usuario.destroy();
      res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
  }
};


