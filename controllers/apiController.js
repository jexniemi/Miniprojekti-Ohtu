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
            const condition = req.query.search;
            if (condition) {
                result = result.filter(book => {
                    return (book.author.includes(condition) || book.title.includes(condition));
                });
            }
            res.status(200).json(result);
        });
    });

    app.post("/api/tips", function (req, res) {
        function isEmpty(str) {
            return !str || str.trim() === "";
        }

        var { author, title, type} = req.body;
        if (isEmpty(author) || isEmpty(title) || isEmpty(type)) {
            res.status(500).send("Author, title or type should not be empty")
            return;
        }

        database.postTip(req.body, function (err, result) {
            if (err) throw err;

            res.status(200).json(result)
        });
    });

    app.put("/api/tips", function (req, res) {
        database.putTip(req.body, function (err, result) {
            if (err) throw err;

            res.status(200).json(result);
        });
    });

    app.delete("/api/tips/:id", function (req, res) {
        database.deleteTip(req.params.id, function (err, result) {
            if (err) throw err;

            res.status(200).json(result);
        });
    });
}