var app = require("./app");
var port = process.env.PORT || 8626;
var server = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});

module.exports = server;
