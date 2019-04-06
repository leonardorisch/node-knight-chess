const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const msg = 'hello zzz';
  console.log(msg);
  res.send(msg);
});
const KnightController = require('./knight/KnightController');
app.use('/knight', KnightController);
module.exports = app;
