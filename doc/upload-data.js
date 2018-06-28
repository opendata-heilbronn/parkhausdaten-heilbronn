const request = require('request');
const config = require('../db-api/config');

const data = require('./parkhaeuser-heilbronn'); //change data to upload here, has to be in data format specified in dataStructure.js

let opts = {
    url: 'https://parkhn.cfhn.it/carpark',
    proxy: '',
    headers: {
        'Content-Type': 'application/json'
    }
};

data.forEach((elem) => {
    //console.log(elem.internalId);
    opts.body = JSON.stringify(elem);
    request.post(opts, (err, res, body) => {
        if (err) {
            console.error('Error uploading', elem.name, ":", err.message);
        }
        else {
            try {
                let r = JSON.parse(body);
                console.log('uploading', elem.name, r.status, r.error || "");
            } catch (e) {
                console.log('uploading', elem.name, "failed ", body.replace(/(\r\n|\n|\r)/gm, ""))
            }

        }
    })
});