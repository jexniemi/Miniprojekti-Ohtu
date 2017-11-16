var apiController = require("./apiController");

// Initialize all controllers
module.exports = function (app) {
    apiController(app);
}