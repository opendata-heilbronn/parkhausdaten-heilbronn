let experimenta = {
    internalId: "hn-cp-experimenta",
    name: "City Parkhaus experimenta",
    location: "relation/1178538",
    openingHours: "24/7",
    capacity: 500,
    properties: {
        womenLots: true,
        maximumHeight: 200
    },
    fees: [
        {
            startTime: "06:00",
            endTime: "17:59",
            maximumFee: 1200,
            intervals: [{
                pricePerInterval: 150,
                billingInterval: 60,
                maxDuration: Number.POSITIVE_INFINITY
            }]
        },
        {
            startTime: "18:00",
            endTime: "05:59",
            maximumFee: 300,
            intervals: [{
                pricePerInterval: 300,
                billingInterval: 60 * 12,
                maxDuration: Number.POSITIVE_INFINITY
            }]
        },
        /*{
         startTime: "00:00",
         endTime: "23:59",
         maximumFee: 300,
         comment: "Für Besucher der Experimenta"
         intervals: [{
         pricePerInterval: 300,
         billingInterval: 60*24,
         maxDuration: Number.POSITIVE_INFINITY
         }]
         },*/
    ],
    feeString: "Je 1,50 €/Std. \nHöchstsatz: 12 € \nAbendpauschale (18 bis 6 Uhr): 3 €\nBesucher des Science Centers experimenta (ganztägig): 3 €"
};

let bollwerksturm = {
    internalId: "hn-cp-bollwerksturm",
    name: "City Parkhaus am Bollwerksturm",
    location: "way/28989124",
    openingHours: "24/7",
    capacity: 510,
    properties: {
        womenLots: true,
        maximumHeight: 200
    },
    fees: [
        {
            startTime: "06:00",
            endTime: "17:59",
            maximumFee: 1200,
            intervals: [{
                pricePerInterval: 150,
                billingInterval: 60,
                maxDuration: Number.POSITIVE_INFINITY
            }]
        },
        {
            startTime: "18:00",
            endTime: "05:59",
            maximumFee: 300,
            intervals: [{
                pricePerInterval: 300,
                billingInterval: 60 * 12,
                maxDuration: Number.POSITIVE_INFINITY
            }]
        },
        /*{
         startTime: "00:00",
         endTime: "23:59",
         maximumFee: 50,
         comment: "Für Dauer des Badebesuchs"
         intervals: [{
         pricePerInterval: 50,
         billingInterval: 60*24,
         maxDuration: Number.POSITIVE_INFINITY
         }]
         },*/
    ],
    feeString: "Je 1,50 €/Std. \nHöchstsatz: 12 € Abendpauschale (18 bis 6 Uhr): 3 € \nBadegäste für die Dauer des Badebesuchs: 0,50 €"
};

let wollhaus = {
    internalId: "hn-wollhaus",
    name: "Am Wollhaus",
    openingHours: "24/7",
    capacity: 666,
    properties: {
        womenLots: true,
        maximumHeight: 200
    },
    fees: [{
        startTime: "00:00",
        endTime: "23:59",
        maximumFee: 1200,
        intervals: [{
            pricePerInterval: 50,
            billingInterval: 20,
            maxDuration: 240
        }, {
            pricePerInterval: 150,
            billingInterval: 60,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }],
    feeString: "je 20 Min.: 0,50 € \nab 4. Stunde: je 1,50 € \nHöchstsatz: 12 €"
};

let stadtgalerie = {
    internalId: "hn-stadtgalerie",
    name: "Stadtgalerie/Kaufhof",
    location: "way/35786608",
    openingHours: "08:00-02:00", //hopefully parses
    capacity: 660,
    properties: {
        womenLots: true,
        wheelchair: true,
        security: true,
        maximumHeight: 200
    },
    fees: [
        {
            startTime: "8:00",
            endTime: "20:59",
            intervals: [{
                pricePerInterval: 100,
                billingInterval: 60,
                maxDuration: 60
            }, {
                pricePerInterval: 120,
                billingInterval: 60,
                maxDuration: 120
            }, {
                pricePerInterval: 150,
                billingInterval: 60,
                maxDuration: Number.POSITIVE_INFINITY
            }]
        }, {
            startTime: "21:00",
            endTime: "02:00",
            maximumFee: 250,
            intervals: [{
                pricePerInterval: 250,
                billingInterval: 60 * 5,
                maxDuration: Number.POSITIVE_INFINITY
            }]
        }
    ],
    feeString: "1. Stunde 1 €, \n2. Stunde 1,20 €, \nab 3. Stunde: je 1,50 € \nNachtpauschale (21 bis 2 Uhr): 2,50 €"
};

let harmonie = {
    internalId: "hn-harmonie",
    name: "Harmonie",
    location: "node/1225517061",
    openingHours: "Mo-Sa 07:30-02:00, Su,PH 09:00-02:00",
    capacity: 644,
    properties: {
        womenLots: true,
        maximumHeight: 200
    },
    fees: [{
        startTime: "07:30",
        endTime: "17:59",
        maximumFee: 1200,
        intervals: [{
            pricePerInterval: 50,
            billingInterval: 20,
            maxDuration: 240
        }, {
            pricePerInterval: 150,
            billingInterval: 60,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }, {
        startTime: "18:00",
        endTime: "07:59",
        maximumFee: 300,
        intervals: [{
            pricePerInterval: 300,
            billingInterval: 60 * 14,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }],
    feeString: "je 20 Minuten: 0,50 € \nab 4. Stunde: je 1,50 € \nHöchstsatz: 12 € \nNachtpauschale (18 bis 8 Uhr): 3 €"
};

let kaethchenhof = {
    internalId: "hn-kaethchenhof",
    name: "Käthchenhof",
    location: "node/416063388",
    openingHours: "Mo-Sa 08:00-20:00, PH off",
    capacity: 66,
    properties: {
        maximumHeight: 220
    },
    fees: [{
        startTime: "08:00",
        endTime: "19:59",
        maximumFee: 1500,
        intervals: [{
            pricePerInterval: 50,
            billingInterval: 20,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }],
    feeString: "je 20 Minuten: 0,50 € \nTagesgebühr: 15 €"
};

let k3 = {
    internalId: "hn-k3",
    name: "Theaterforum K3",
    location: "node/318200104",
    openingHours: "Mo-Sa 06:00-02:00, Su,PH 10:00-02:00",
    capacity: 454,
    properties: {
        womenLots: true,
        chargingStations: true,
        chargingStationCount: 2,
        security: true,
        maximumHeight: 200
    },
    fees: [{
        startTime: "6:00",
        endTime: "18:59",
        maximumFee: 1300,
        intervals: [{
            pricePerInterval: 150,
            billingInterval: 60,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }, {
        startTime: "19:00",
        endTime: "06:00",
        maximumFee: 450,
        intervals: [{
            pricePerInterval: 450,
            billingInterval: 60 * 11,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }, /*{
     startTime: "18:00",
     endTime: "06:00",
     maximumFee: 450,
     comment: "Theatertarif am 18 Uhr",
     intervals: [{
     pricePerInterval: 450,
     billingInterval: 60*11,
     maxDuration: Number.POSITIVE_INFINITY
     }]
     },*/
    ],
    feeString: "je Stunde: 1,50 € \n19 bis 6 Uhr Nachttarif: 4,50 € \nTheatertarif: ab 18 Uhr: 4,50 € \nHöchstsatz: 13 €"
};

let kiliansplatz = {
    internalId: "hn-kiliansplatz",
    name: "Kiliansplatz",
    location: "way/33072126",
    openingHours: "06:00-22:00",
    capacity: 230,
    properties: {
        maximumHeight: 210
    },
    fees: [{
        startTime: "06:00",
        endTime: "19:59",
        day: "Mo-Fr, Su", //i know, wtf
        intervals: [{
            pricePerInterval: 150,
            billingInterval: 50,
            maxDuration: 100
        }, {
            pricePerInterval: 300,
            billingInterval: 100,
            maxDuration: 300
        }, {
            pricePerInterval: 150,
            billingInterval: 50,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }, {
        startTime: "06:00",
        endTime: "19:59",
        day: "Sa", //i know, wtf
        intervals: [{
            pricePerInterval: 200,
            billingInterval: 50,
            maxDuration: 100
        }, {
            pricePerInterval: 400,
            billingInterval: 100,
            maxDuration: 300
        }, {
            pricePerInterval: 200,
            billingInterval: 50,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }, {
        startTime: "20:00",
        endTime: "5:59",
        maximumFee: 500,
        intervals: [{
            pricePerInterval: 500,
            billingInterval: 60 * 10,
            maxDuration: Number.POSITIVE_INFINITY
        }]
    }],
    feeString: `Montag bis Freitag, Sonntag je 50 Minuten: 1,50 €; ab 100 Min.: 6 €; ab 200 Min.: 9 €; ab 300 Min.: je angefangene 50 Min. 1,50 €;
Samstag je 50 Min.: 2 €; ab 100 Min.: 8,00 €
ab 200 Min.: 12,00 €;
ab 300 Min.: je angef. 50 Min.: 2,00 €
Abendtarif 20 bis 6 Uhr: 5  €`
};

module.exports = [experimenta, bollwerksturm, wollhaus, stadtgalerie, harmonie, kaethchenhof, k3, kiliansplatz];