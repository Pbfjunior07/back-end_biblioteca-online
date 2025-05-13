const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Emprestimo = sequelize.define('Emprestimo', {
  // id gerado automaticamente
  dataEmprestimo: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dataPrevistaDevolucao: {
    type: DataTypes.DATE,
    allowNull: false
  }
  // Não inserimos “título emprestado” ou “nome/matrícula” diretamente,
  // pois esses dados serão acessados através dos relacionamentos.
});

module.exports = Emprestimo;

