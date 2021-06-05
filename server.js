const express = require('express'),
  app = express(),
  routes = require('./src/api');

app.use('/', routes);

app.use((error, req, res, next) => {
  return res.status(500).send({ error: error.message });
});

module.exports = app;
