const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://william_assis:1234@cluster0-xqxck.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());

// Principais métodos de requisições HTTP:
// GET, POST, PUT, DELETE

// Tipos de parâmetros:
// query params: req.query -  usados para filtros, ordenação, paginação...
// route params: req.params - identifica um recurso na alteração ou remoção
// body: req.body - usado para mandar informações, nos métodos post e put, criação ou alteração de um registro

// Utilizar MongoDB - banco de dados não relacional, é mais escalável

app.get('/users', (req, res) => {
    // console.log(req.query);
    // console.log(req.params);
    // console.log(req.body);
    return res.json({message: 'Hello OmniSatack'});
})

app.listen(3333, () => console.log('Aplicação rodando em http://localhost:3333'))