const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

module.exports = function (query, success, error) {
    MongoClient.connect(config.mongodb.url, function (err, db) {
        if (err) {
            error(err);
            console.error(err);
        } else {
            db.collection('carpark').find(query || {}).toArray(function (err, doc) {
                success(doc);
                db.close();
            });
        }
    });
};

