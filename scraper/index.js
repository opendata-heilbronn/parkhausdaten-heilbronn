process.on('unhandledRejection', event => {
    throw event;
});

let scraper = require('./scraper');

let interval = 60000;
console.log("Starting scraper with interval of", interval / 60000, "minute(s)");
let int = setInterval(() => {
    process.stdout.write("[" + new Date().toISOString() + "] ");
    scraper.doPoll();
}, interval);