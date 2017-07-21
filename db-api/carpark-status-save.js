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
            }],
            {precision: "s"})
            .then(success)
            .catch((e) => {
                if (e.res.statusCode == 404) { //if database was not found
                    influx.createDatabase(config.influx.database)
                        .then(() => {
                            write(carparkId, freeCarPorts, timestamp, success)
                        });
                }
            });
    }

    return {write}
};

