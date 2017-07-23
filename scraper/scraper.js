const request = require('request');
const scr = require('./scrape');

const apiUrl = "http://www.heilbronn.de/allgemeine-inhalte/ajax-parkhausbelegung.html?type=1496993343";
const localApiUrl = "http://localhost:3001";

const internalIds = { //relation between names from heilbronn api to our api
    'Am Bollwerksturm': 'hn-cp-bollwerksturm',
    'City-Parkhaus Experimenta': 'hn-cp-experimenta',
    'Harmonie': 'hn-harmonie',
    'Käthchenhof': 'hn-kaethchenhof',
    'Kiliansplatz': 'hn-kiliansplatz',
    'Stadtgalerie': 'hn-stadtgalerie',
    'Theaterforum K3': 'hn-k3',
    'Wollhaus': 'hn-wollhaus'
};

function aRequest(url) { //truly asynchronous request
    return new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
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
            res = await aRequest(localApiUrl + '/carpark?internalId=' + intId);
        }
        catch (e) {
            console.error("could not establish connection to db-api, check if it's running on the correct port");
            return undefined;
        }
        let carPark = JSON.parse(res);
        if (carPark.status == 'error') {
            console.error("error getting data from database", carPark.error || "");
            return undefined;
        }
        return carPark[0]._id;
    }
}

async function postData(carParkId, timestamp, free) { //post final data to influxDB
    let opts = {
        url: localApiUrl + '/carParkStatus/' + carParkId,
        method: 'PUT',
        json: {timestamp: timestamp, freeCarPorts: free}
    };
    await request(opts, (err, res, body) => {
        if (err || res.statusCode != 200 || body.status != "success") {
            console.error('error posting carPark data', err || "", body);
        }
    })
}

async function doPoll() { //main function
    let res = await aRequest(apiUrl);
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
