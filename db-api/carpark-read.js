const MongoClient = require('mongodb').MongoClient;

module.exports = function (success, error) {
    const url = 'mongodb://localhost:27017/carpark';
    MongoClient.connect(url, function (err, db) {
        if (err) {
            error(err);
            console.error(err);
        } else {
            db.collection('carpark').find({}).toArray(function (err, doc) {
                success(doc);
                db.close();
            });
        }
    });
};

