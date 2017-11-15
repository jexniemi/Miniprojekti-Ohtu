var express = require("express");
var mongodb = require("mongodb");
var path = require("path");

let uri;
try {
  uri = require("./config").dburi;
} catch (error) {
  uri = process.env.MONGODB_URI;
}

var app = express();

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(uri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");
});

// Enabling React front-end
app.use(express.static(path.resolve(__dirname, './react-front/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + './react-front/build/index.html'));
});


// Initialize the app.
const port = process.env.PORT || 8080;
app.listen(port);
console.log("Server listening port " + port);

