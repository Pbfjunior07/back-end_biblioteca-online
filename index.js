const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Permitir o uso de JSON
app.use(express.json());

// Importação das rotas
const livroRoutes = require('./routes/livroRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const emprestimoRoutes = require('./routes/emprestimoRoutes');

// Uso dos endpoints
app.use('/livros', livroRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/emprestimos', emprestimoRoutes);

// Rota raiz para teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à Biblioteca Online!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
