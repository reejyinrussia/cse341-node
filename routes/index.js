const routes = require('express').Router();
const names = require('../controllers/');

routes.get('/', names.displayName);

routes.get('/test', names.printName);

// routes.get('/test', (req, res) => {
//   res.send('Tanya Shannon');
// })

module.exports = routes;