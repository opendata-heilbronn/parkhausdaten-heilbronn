const express = require('express');
const app = express();
const carparkSave = require("./carpark-save");
const carparkRead = require("./carpark-read");
const bodyParser = require('body-parser');
const carparkStatusSave = require('./carpark-status-save');

app.use(bodyParser.json()); // for parsing application/json

app.post('/carpark', function (req, res) {
    carparkSave(req.body, function (result) {
        res.json({"id": result.insertedId})
    })
});

app.get('/carpark', function (req, res) {
    carparkRead(function (doc) {
        res.json(doc);
    })
});

app.put('/carparkStatus/:id', function (req, res) {
    carparkStatusSave().write(req.params.id, req.body.freeCarPorts, req.body.timestamp, function () {
        res.send(200);
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
