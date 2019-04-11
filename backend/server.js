var app = require('./app');
var port = process.env.PORT || 8626;
var server = app.listen(port);

module.exports = server
