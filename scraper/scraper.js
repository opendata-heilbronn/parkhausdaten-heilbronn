const request = require('request');
const scr = require('./scrape');

const apiUrl = "http://www.heilbronn.de/allgemeine-inhalte/ajax-parkhausbelegung.html?type=1496993343";
const localApiUrl = "http://localhost:3001";

const internalIds = {
    'Am Bollwerksturm':             'hn-cp-bollwerksturm',
    'City-Parkhaus Experimenta':    'hn-cp-experimenta',
    'Harmonie':                     'hn-harmonie',
    'Käthchenhof':                  'hn-kaethchenhof',
    'Kiliansplatz':                 'hn-kiliansplatz',
    'Stadtgalerie':                 'hn-stadtgalerie',
    'Theaterforum K3':              'hn-k3',
    'Wollhaus':                     'hn-wollhaus'
};

function aRequest(url) {
    return new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
            if(!err /*&& res.statusCode == 200*/)
                resolve(body);
            else {
                reject(err);
            }
        })
    });
}

async function getMongoId(name) {
    let intId = internalIds[name];
    if(intId === undefined)
        console.error("Did the data format change? Could not find", name, "in data");
    else {
        console.log(localApiUrl + '/carpark?internalId=' + intId);
        let res = await aRequest('http://127.0.0.1:3001/carpark?internalId=' + intId);
        console.log(res);
        let carPark = JSON.parse(res);
        console.log(carPark);
        return carPark._id;
    }
}

async function doPoll() {
    let res = await aRequest(apiUrl);
    console.log(scr.scrape(res));
    getMongoId("Wollhaus");
}

doPoll();
