const request = require('request');
const config = require('../db-api/config');

const data = require('./parkhaeuser-heilbronn'); //change data to upload here, has to be in data format specified in dataStructure.js

let opts = {
    url: 'http://127.0.0.1:' + config.api.port + '/carpark',
    headers: {
        'Content-Type': 'application/json'
    }
};

data.forEach((elem) => {
    console.log(elem.internalId);
    opts.body = JSON.stringify(elem);
    request.post(opts, (err, res, body) => {
        if(err) {
            console.error('Error uploading', elem.name, ":", err.message);
        }
        else {
            let r = JSON.parse(body);
            console.log('uploading', elem.name, r.status, r.error || "");
        }
    })
});