const sequelize = require('../config/database');

// Importando os modelos
const Livro = require('./Livro');
const Usuario = require('./Usuario');
const Emprestimo = require('./Emprestimo');

// Um Empréstimo pertence a um Livro
Emprestimo.belongsTo(Livro, { foreignKey: 'livroId' });
// Um Livro pode ter muitos Empréstimos
Livro.hasMany(Emprestimo, { foreignKey: 'livroId' });

// Um Empréstimo pertence a um Usuário
Emprestimo.belongsTo(Usuario, { foreignKey: 'usuarioId' });
// Um Usuário pode ter muitos Empréstimos
Usuario.hasMany(Emprestimo, { foreignKey: 'usuarioId' });

// Sincroniza os modelos com o banco de dados
sequelize.sync()
  .then(() => console.log('Banco de dados sincronizado.'))
  .catch(err => console.error('Erro ao sincronizar o banco:', err));

module.exports = { Livro, Usuario, Emprestimo };
