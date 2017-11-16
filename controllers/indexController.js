var path = require("path");

module.exports = function (app) {
    app.get("/index", function (req, res) {
        // Send front-end file
        res.sendFile(path.join(__dirname, '../react-front/build/index.html'));
    });
}