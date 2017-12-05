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

    // Get all tips
    getAllTips(callback) {
        db.collection(TIPS_COLLECTION).find({}).toArray(function (err, docs) {
            callback(err, docs);
        });
    }

    // Create a new tip
    postTip(newTip, callback) {
        db.collection(TIPS_COLLECTION).insertOne(newTip, function (err, doc) {
            callback(err, doc.ops[0]);
        });
    }

    // Put/update a tip
    putTip(updatedTip, callback) {
        var _id = mongodb.ObjectID(updatedTip._id);
        delete updatedTip._id;
        db.collection(TIPS_COLLECTION).updateOne({ _id: _id }, { $set: updatedTip },
            function (err, result) {
                callback(err, result);
            });
    }

    // Delete a tip
    deleteTip(_id, callback) {
        _id = mongodb.ObjectID(_id);
        db.collection(TIPS_COLLECTION).deleteOne({_id: _id}, function (err, result) {
            callback(err, result);
        });
    }
}

module.exports = new database;