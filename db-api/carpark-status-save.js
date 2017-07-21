const Influx = require('influx');
const config = require('./config');

module.exports = function () {
    let influxConf = config.influx;
    influxConf.schema = [{
        measurement: 'carpark_status',
        fields: {
            freeCarPorts: Influx.FieldType.INTEGER
        },
        tags: [
            'carparkId'
        ]
    }];
    const influx = new Influx.InfluxDB(influxConf);

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

