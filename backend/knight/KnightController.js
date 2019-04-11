const responseHandler = require('../utils/responseHandler');
const express = require('express');
const bodyParser = require('body-parser');
const KnightService = require('./KnightService');

const router = express.Router();
router.use(bodyParser.json());
router.post('/', (req, res, next) => {
  if (!handleData(req.body.position)) {
    responseHandler.response(res, 400, 'Check your data')
  } else {
    try {
      const service = new KnightService();
      const serializedObjects = service.identifyAvailableMovements(req.body.position);
      responseHandler.response(res, 200, serializedObjects)
    } catch(error) {
      responseHandler.response(res, 422, error.message)
    }
  }
});

function handleData(position) {
  return position.match(/^[a-hA-H][0-9]$/) !== null
}

module.exports = router;
