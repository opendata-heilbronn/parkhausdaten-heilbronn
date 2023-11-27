const request = require('request');
const scr = require('./scrape');

const apiUrl = "http://www.heilbronn.de/allgemeine-inhalte/ajax-parkhausbelegung?type=1496993343";
const localApiUrl = process.env.API_URL || "http://localhost:3001";

const internalIds = { //relation between names from heilbronn api to our api
    'Am Bollwerksturm': 'hn-cp-bollwerksturm',
    'Bildungscampus Mitte': 'hn-bildungscampus-mitte',
    'Bildungscampus Ost': 'hn-bildungscampus-ost',
    'City-Parkhaus Experimenta': 'hn-cp-experimenta',
    'Harmonie': 'hn-harmonie',
    'Käthchenhof': 'hn-kaethchenhof',
    'Kiliansplatz': 'hn-kiliansplatz',
    'Parkplatz Bahnhof': 'hn-parkplatz-bahnhof',
    'Stadtgalerie': 'hn-stadtgalerie',
    'Theaterforum K3': 'hn-k3',
    'Wollhaus': 'hn-wollhaus'
};

function aRequest(url, noProxy) { //truly asynchronous request
    return new Promise((resolve, reject) => {
        let opts = {
            uri: url,
            method: 'GET',
            proxy: noProxy ? "" : undefined
        };
        request(opts, (err, res, body) => {
            if (!err /*&& res.statusCode == 200*/)
                resolve(body);
            else {
                reject(err);
            }
        })
    });
}

async function getMongoId(name) { //return mongodb id
    let intId = internalIds[name];
    if (intId === undefined)
        console.error("Did the data format change? Could not find", name, "in data");
    else {
        let res;
        try {
            res = await aRequest(localApiUrl + '/carpark?internalId=' + intId, true);
        }
        catch (e) {
            console.error("could not establish connection to db-api, check if it's running on the correct port");
            return undefined;
        }
        let carPark;
        try {
            carPark = JSON.parse(res);
        } catch (e) {
            console.error("error during parsing of db-api answer. Expected JSON, got:");
            console.log(res);
            return undefined;
        }

        if (carPark.status == 'error') {
            console.error("error getting data from database", carPark.error || "");
            return undefined;
        }
        if(carPark.length == 0 || !carPark[0]._id) {
            console.error('carpark', name, 'not found in database');
            return undefined;
        }
        return carPark[0]._id;
    }
}

async function postData(carParkId, timestamp, free) { //post final data to influxDB
    let opts = {
        url: localApiUrl + '/carParkStatus/' + carParkId,
        method: 'PUT',
        proxy: '',
        json: {timestamp: timestamp, freeCarPorts: free}
    };
    await request(opts, (err, res, body) => {
        if (err || res.statusCode != 200 || body.status != "success") {
            console.error('error posting carPark data', err || "", body);
        }
    })
}

async function doPoll() { //main function
    let res;
    try {
        res = await aRequest(apiUrl, false);
    } catch (e) {
        console.log(e);
        return false;
    }
    res = scr.scrape(res);
    let msg = {};
    for (let name of Object.keys(res.carparks)) {
        let carpark = res.carparks[name];
        if (carpark.free > -1)
            msg[name] = carpark.free;
        let id = await getMongoId(name);
        if (carpark.free > -1 && id) //id returns undefined if error occurs
            await postData(id, res.time, carpark.free);
    }
    console.log(res.time, JSON.stringify(msg));
}

doPoll();

module.exports = {doPoll};
