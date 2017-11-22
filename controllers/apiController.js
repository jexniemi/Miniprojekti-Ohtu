var bodyParser = require("body-parser");
// Get the database object
var database = require("../database");

// Different routes
module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/api", function (req, res) {
        res.send("/tips for all tips, /tips/:id for a specific tip");
    });

    app.get("/api/tips", function (req, res) {
        database.getAllTips(function (err, result) {
            if (err) throw err;

            res.status(200).json(result);
        });
    });

    app.post("/api/tips", function (req, res) {
        database.postTip(req.body, function (err, result) {
            if (err) throw err;
            res.status(200).json(result)
        });
    });

    app.get("/api/tips/:id", function (req, res) {
        res.send("TODO");
    });

    app.put("/api/tips/:id", function (req, res) {
        res.send("TODO");
    });

    app.delete("/api/tips/:id", function (req, res) {
        res.send("TODO");
    });
}