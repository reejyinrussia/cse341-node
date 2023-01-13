const routes = require('express').Router();
const names = require('../controllers/');

routes.get('/', names.displayName);

routes.get('/test', names.printName);

routes.get('/url', names.getNames);


module.exports = routes;