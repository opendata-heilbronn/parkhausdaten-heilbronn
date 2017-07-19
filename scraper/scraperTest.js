const request = require('request');
const scr = require('./scrape');

const apiUrl = "https://www.heilbronn.de/allgemeine-inhalte/ajax-parkhausbelegung.html?type=1496993343";

request(apiUrl,(error, response, html) => {
  if (!error && response.statusCode == 200) {
    console.log(scr.scrape(html));
  }
});