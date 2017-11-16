var express = require("express");
var path = require("path");

var controllers = require("./controllers");
var database = require("./database");

var app = express();

// Setting up controllers
controllers(app);

// Enabling React front-end
app.get("/", function (req, res) {
  res.redirect("/index");
});
app.use(express.static(path.resolve(__dirname, './react-front/build')));

// Initialize database
database.connect();

// Start app
const port = process.env.PORT || 8080;
app.listen(port);
console.log("Server listening port " + port);