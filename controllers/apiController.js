// Get the database object
var database = require("../database");

// Different routes
module.exports = function (app) {
    app.get("/api", function (req, res) {
        res.send("/tips for all tips, /tips/:id for a specific tip");
    });

    app.get("/api/tips", function (req, res) {
        database.getAllTips((result) => res.status(200).json(result));
    });

    app.post("api/tips", function (req, res) {
        res.send("TODO");
    });

    app.get("api/tips/:id", function (req, res) {
        res.send("TODO");
    });

    app.put("api/tips/:id", function (req, res) {
        res.send("TODO");
    });

    app.delete("api/tips/:id", function (req, res) {
        res.send("TODO");
    });
}