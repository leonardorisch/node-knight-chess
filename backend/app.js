const express = require('express');
const app = express();
const KnightController = require('./knight/KnightController');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/knight', KnightController);

module.exports = app;
