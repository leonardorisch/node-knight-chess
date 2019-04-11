module.exports = {
  response: (res, status, message) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(status).send(message)
  }
}
