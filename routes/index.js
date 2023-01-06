const routes = require('express').Router();
const names = require('../controllers/');

routes.get('/', names.displayName);

routes.get('/test', names.printName);


module.exports = routes;