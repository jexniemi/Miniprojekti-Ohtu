var express = require("express");
var path = require("path");
var cors = require('cors')

var controllers = require("./controllers");
var database = require("./database");

var app = express();

// Enable cors
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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