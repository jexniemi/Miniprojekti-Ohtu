var apiController = require("./apiController");
var indexController = require("./indexController");

// Initialize all controllers
module.exports = function (app) {
    apiController(app);
    indexController(app);
}