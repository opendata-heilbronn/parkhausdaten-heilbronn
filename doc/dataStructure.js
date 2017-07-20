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