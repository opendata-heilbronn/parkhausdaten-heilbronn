const express = require('express');
const app = express();
const carparkSave = require("./carpark-save");
const carparkRead = require("./carpark-read");
const bodyParser = require('body-parser');
const carparkStatusSave = require('./carpark-status-save');
const config = require('./config');

app.use(bodyParser.json()); // for parsing application/json

app.post('/carpark', function (req, res) {
    carparkSave(req.body, function (result) {
        res.json({"id": result.insertedId, "status": "success"})
    }, function (err) {
        res.status(500).json({status: "error", error: err.message});
    })
});

app.get('/carpark', function (req, res) {
    carparkRead(req.query, function (doc) {
        doc.status = "success";
        res.json(doc);
    }, function (err) {
        res.status(500).json({status: "error", error: err.message});
    });
});

app.put('/carparkStatus/:id', function (req, res) {
    carparkStatusSave().write(req.params.id, req.body.freeCarPorts, req.body.timestamp, function () {
        res.status(200).json({status: "success"});
    })
});

app.listen(config.api.port, function () {
    console.log('Carpark DB-API listening on port', config.api.port);
});
