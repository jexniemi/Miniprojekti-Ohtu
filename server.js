var express = require("express");
var mongodb = require("mongodb");
var path = require("path");
var controllers = require("./controllers");
var database = require("./database");

let uri;
try {
  uri = require("./config").dburi;
} catch (error) {
  uri = process.env.MONGODB_URI;
}

var app = express();
database.connect();

// Enabling React front-end
app.use(express.static(path.resolve(__dirname, './react-front/build')));

// Setting up controllers
controllers(app);

// Initialize the app
const port = process.env.PORT || 8080;
app.listen(port);
console.log("Server listening port " + port);