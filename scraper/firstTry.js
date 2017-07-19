const request = require('request');
const cheerio = require('cheerio');

const apiUrl = "https://www.heilbronn.de/allgemeine-inhalte/ajax-parkhausbelegung.html?type=1496993343";

let first = true;

request(apiUrl,(error, response, html) => {
  if (!error && response.statusCode == 200) {
    //console.log(html);
    var $ = cheerio.load(html);
    console.log($('div.carparkHead > div').text());
    $('div.carparkContent').each(function(i, element){
      //var a = $(this).prev();
      //console.log(a.text());
          first = false;
          console.log($(this).find('.carparkLocation > a').text());
          console.log($(this).children('.col-xs-5').text());
          console.log();
    });
  }
});