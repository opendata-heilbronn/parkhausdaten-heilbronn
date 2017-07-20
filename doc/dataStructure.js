let carpark = {
    id: String,                         //id from mongoDB entry
    name: String,
    feature: String,                    //geoJSON
    location: String,                   //osm location
    openingHours: String,               //osm String
    capacity: Number,                   //lot count
    properties: {
        wheelchair: Boolean,            //is wheelchair friendly
        womenLots: Boolean,             //has women lots
        chargingStations: Boolean,      //has charging stations
        chargingStationCount: Number,   //number of charging stations (if existent)
        security: Boolean,              //has security service
        maximumHeight: Number,          //height of entry
    },
    fees: [
        {
            startTime: String,              //time of day that the tarif counts
            endTime: String,
            maximumFee: Number,           //maximum price per day
            intervals: [{
                pricePerInterval: Number,
                billingInterval: Number,    //in minutes, interval
                maxDuration: Number,        //in minutes, time before next tarif kicks in
                }]
        }
    ]
}


let wollhaus = {
    id: "asdfasdf",
    name: "Am Wollhaus",
    openingHours: "24/7",
    capacity: 666,
    properties: {
        womenLots: true,
        maximumHeight: 200
    },
    fees: [
        {
            startTime: "00:00",
            endTime: "23:59",
            maximumFee: 12.00,
            intervals: [
                {
                    pricePerInterval: 0.5,
                    billingInterval: 20,
                    maxDuration: 239
                },
                {
                    pricePerInterval: 1.5,
                    billingInterval: 60,
                    maxDuration: Number.POSITIVE_INFINITY
                }
            ]
        }
    ]
}