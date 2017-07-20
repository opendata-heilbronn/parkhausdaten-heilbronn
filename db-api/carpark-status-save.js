const Influx = require('influx');

module.exports = function () {
    const influx = new Influx.InfluxDB({
        host: 'localhost',
        database: 'carpark',
        schema: [{
            measurement: 'carpark_status',
            fields: {
                freeCarPorts: Influx.FieldType.INTEGER
            },
            tags: [
                'carparkId'
            ]
        }]
    });

    function write(carparkId, freeCarPorts, timestamp, success) {
        influx.writePoints([
            {
                measurement: 'carpark_status',
                timestamp: timestamp,
                tags: {carparkId: carparkId},
                fields: {freeCarPorts: freeCarPorts}
            }
        ], {precision: "s"}).then(success);
    }

    return {write}
};

