module.exports = {
    influx: {
        host: process.env.INFLUX_HOST || 'localhost',
        database: process.env.INFLUX_DB ||'carpark',
    },
    mongodb: {
        url: process.env.MONGODB_URL || 'mongodb://localhost:27017/carpark'
    },
    api: {
        port: process.env.API_PORT || 3001
    }
};