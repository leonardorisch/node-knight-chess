module.exports = {
  response: (res, status, message) => {
    res.status(status).send(message)
  }
}
