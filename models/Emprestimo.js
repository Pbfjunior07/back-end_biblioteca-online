const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Emprestimo = sequelize.define('Emprestimo', {
  dataEmprestimo: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dataDevolucao: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

module.exports = Emprestimo;
