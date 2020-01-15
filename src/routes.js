const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// async e await aqui pois a chamada à api pode demorar alguns segundos.
routes.post('/devs', DevController.store);

module.exports = routes;