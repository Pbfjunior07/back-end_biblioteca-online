const express = require('express');
const app = express ();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Importação das rotas
const livroRoutes = require('./routes/livroRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const emprestimoRoutes = require('./routes/emprestimoRoutes');

// Uso das rotas
app.use('/livros', livroRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/emprestimos', emprestimoRoutes);

app.get('/', (req, res) => {
    res.send('Olá! Bem vindo à Biblioteca online');
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});