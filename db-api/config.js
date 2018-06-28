module.exports = {
    influx: {
        host: process.env.INFLUX_HOST || 'localhost',
        port: process.env.INFLUX_PORT || 8086,
        protocol: process.env.INFLUX_PROTOCOL || 'https',
        database: process.env.INFLUX_DB ||'carpark',
        username: process.env.INFLUX_USER,
        password: process.env.INFLUX_PASSWORD
    },
    mongodb: {
        url: process.env.MONGODB_URL || 'mongodb://localhost:27017/carpark'
    },
    api: {
        port: process.env.API_PORT || 3001
    }
};