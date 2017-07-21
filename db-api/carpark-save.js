const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

module.exports = function (carpark, success, error) {
    MongoClient.connect(config.mongodb.url, function (err, db) {
        if (err) {
            error(err);
            console.error(err);
        } else {
            if (!carpark.internalId)
                error({message: "no internalId provided"});
            else {
                db.collection('carpark').createIndex({"internalId": 1}, {unique: true}); //set internalId as unique
                db.collection('carpark').updateOne(
                    {internalId: carpark.internalId},
                    carpark,
                    {upsert: true},
                    function (err, result) {
                        success(result);
                        db.close();
                    });
            }
        }
    });
};

