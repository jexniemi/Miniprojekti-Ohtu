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

var TIPS_COLLECTION = "TIPS";

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
// app.use(express.static(path.resolve(__dirname, './react-front/build')));
app.use(express.static(path.resolve(__dirname, './react-front/build')));


// Initialize the app.
const port = process.env.PORT || 8080;
app.listen(port);
console.log("Server listening port " + port);


// Functions
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

// Routes
app.get("/tips", function (req, res) {
  db.collection(TIPS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get tips.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/tips", function (req, res) {
});

app.get("/tips/:id", function (req, res) {
});

app.put("/tips/:id", function (req, res) {
});

app.delete("/tips/:id", function (req, res) {
});

