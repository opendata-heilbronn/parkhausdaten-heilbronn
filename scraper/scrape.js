const cheerio = require('cheerio');

function scrape(html) {
	result = {carparks: {}}
	let $ = cheerio.load(html);
	let time = $('div.carparkHead > div').text();
	time = time.replace("Datum: ", "").replace(" - Uhrzeit: ", " ");
	result.time = time;
    $('div.carparkContent').each(function(i, element){
	  let location = $(this).find('.carparkLocation > a').text();
	  let freeString = $(this).children('.col-xs-5').text();
	  let free = freeString.replace("Freie Parkplätze: ", "") || "-1";
	  result.carparks[location] = {free: +free};
    });
	return result;
}

module.exports = {
	scrape
}