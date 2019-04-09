const responseHandler = require('../utils/responseHandler');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
router.post('/', (req, res, next) => {
  if (!handleData(req.body.position)) {
    responseHandler.response(res, 400, 'Check your data')
  } else {
    responseHandler.response(res, 200, 'Ok')
  }
});

function handleData(position) {
  return position.match(/^[a-hA-H][0-9]$/) !== null
}

module.exports = router;
