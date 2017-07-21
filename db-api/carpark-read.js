const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const config = require('./config');

module.exports = function (query, success, error) {
    MongoClient.connect(config.mongodb.url, function (err, db) {
        if (err) {
            error(err);
            console.error(err);
        } else {

            try{
                if(query._id)
                    query._id = new ObjectId(query._id); //parse mongo id string to object
            }
            catch(e) {} //do nothing, id will remain string and give no result
            db.collection('carpark').find(query || {}).toArray(function (err, doc) {
                success(doc);
                db.close();
            });
        }
    });
};

