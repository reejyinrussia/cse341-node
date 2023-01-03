const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Lena Shannon');
})

module.exports = routes;