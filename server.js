//Dependencies
var request = require('request');
var express = require('express');
var bodyParser = require("body-parser");
var mongojs = require ("mongojs");
var methodOverride = require("method-override");

//Require routes
var api = require('./app/api/routes/routes');
//Initialize Express
var app = express();

// Make public a static dir
app.use(express.static("public"));
app.use(express.static(__dirname + "/app"));

//Use body parser with app
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//set port
app.set('port', (process.env.PORT || 3000));

// use the /api directory when referencing api
app.use('/api', api);




//Strains API
var strainsAPI = {
  url: 'https://www.cannabisreports.com/api/v1.0/strains/search/blue',
  headers: {
    'X-API-Key': '2a24c7ce3bf9c09222b532aee7aef8ca45dc8541'
  }
};
request(strainsAPI, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var strainSearchResult = JSON.parse(body);
    console.log(strainSearchResult);
    console.log("Name "+strainSearchResult.data[0].name);
    console.log("URL "+strainSearchResult.data[0].url);
    console.log("image "+strainSearchResult.data[0].image);
    console.log("Seed Company Name "+strainSearchResult.data[0].seedCompany.name);
    console.log("Review Count "+strainSearchResult.data[0].reviews.count);
    console.log("Review Link "+strainSearchResult.data[0].reviews.link);
     

  }
})

//Politicians API. Had to make api call here due to Access-Control-Allow-Origin error caused by Angular
var politiciansAPI = {
  url: 'https://api.propublica.org/congress/v1/115/house/members.json',
  headers: {
    'X-API-Key': '2PvUNGIQHTaDhSCa3E5WD1klEX67ajkM5eLGkgkO'
  }
};
request(politiciansAPI, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  //  console.log(body);
  }
})
// Listen on port 3000
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

