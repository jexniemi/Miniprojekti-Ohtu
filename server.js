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


// Routes
app.get("/tips", function(req, res) {
});

app.post("/tips", function(req, res) {
  var newTip = req.body;
  
  if (!(req.body.title || req.body.writer)) {
    handleError(res, "Invalid user input", "Provide title and writer.", 400);
  }

  db.collection(TIPS_COLLECTION).insertOne(newTip, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new tip.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get("/tips/:id", function(req, res) {
});

app.put("/tips/:id", function(req, res) {
});

app.delete("/tips/:id", function(req, res) {
});

