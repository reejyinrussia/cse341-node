const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Tanya Shannon');
})

module.exports = routes;