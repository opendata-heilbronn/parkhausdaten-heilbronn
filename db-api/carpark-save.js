const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

module.exports = function (carpark, success, error) {
    MongoClient.connect(config.mongodb.url, function (err, db) {
        if (err) {
            error(err);
            console.error(err);
        } else {
            db.collection('carpark').insertOne(carpark, function (err, result) {
                success(result);
                db.close();
            });
        }
    });
};

