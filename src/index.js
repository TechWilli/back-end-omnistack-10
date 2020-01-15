const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://william_assis:1234@cluster0-xqxck.mongodb.net/omniweek?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Aplicação rodando em http://localhost:3333'))