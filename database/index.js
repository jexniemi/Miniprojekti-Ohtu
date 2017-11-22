var mongodb = require("mongodb");
const TIPS_COLLECTION = "TIPS";

// figure out URI for database
let uri;
try {
    uri = require("../config").dburi;
} catch (error) {
    uri = process.env.MONGODB_URI;
}

// Create a database variable outside of the database connection callback to reuse the connection pool
let db;
class database {
    // Connect to the database
    connect() {
        if (db) return;

        mongodb.MongoClient.connect(uri, function (err, database) {
            if (err) throw err;

            // Save database object from the callback for reuse
            db = database;
            console.log("Database connection ready");
        });
    }

    // Get all tips and call callback function
    getAllTips(callback) {
        db.collection(TIPS_COLLECTION).find({}).toArray(function (err, docs) {
            callback(err, docs);
        });
    }

    postTip(newPerson, callback) {
        db.collection(TIPS_COLLECTION).insertOne(newPerson, function(err, doc) {
            callback(err, doc.ops[0]);
        });
    }
}

module.exports = new database;