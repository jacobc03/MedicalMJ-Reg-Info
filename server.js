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
app.post("/searchStrains",function(req, res){
  var strainsAPI = {
  url: 'https://www.cannabisreports.com/api/v1.0/strains/search/' + req.body.strain,
  headers: {
    'X-API-Key': '2a24c7ce3bf9c09222b532aee7aef8ca45dc8541'
  }
};
  request(strainsAPI, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var strainSearchResult = JSON.parse(body);
   // console.log(strainSearchResult);
    res.json(strainSearchResult);

    }
  })
})
//Senator API
app.post("/searchSenators",function(req, res){
  console.log(req.body.state);
  var senatorAPI = {
  url: "https://api.propublica.org/congress/v1/members/senate/"+req.body.state+"/10/current.json",
  headers: {
    'X-API-Key': '2PvUNGIQHTaDhSCa3E5WD1klEX67ajkM5eLGkgkO'
  }
};
  request(senatorAPI, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var politicianSearchResult = JSON.parse(body);
    
   // console.log(politicianSearchResult);
    res.json(politicianSearchResult);

    }
  })
})
//Rep API
app.post("/searchRep",function(req, res){
//  console.log(req.body.state);
  var repAPI = {
  url: "https://api.propublica.org/congress/v1/members/house/"+req.body.state+"/current.json",
  headers: {
    'X-API-Key': '2PvUNGIQHTaDhSCa3E5WD1klEX67ajkM5eLGkgkO'
  }
};
  request(repAPI, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var politicianSearchResult = JSON.parse(body);
    
   // console.log(politicianSearchResult);
    res.json(politicianSearchResult);

    }
  })
})


//Politicians API. Had to make api call here due to Access-Control-Allow-Origin error caused by Angular
// var politiciansAPI = {
//   url: 'https://api.propublica.org/congress/v1/115/house/members.json',
//   headers: {
//     'X-API-Key': '2PvUNGIQHTaDhSCa3E5WD1klEX67ajkM5eLGkgkO'
//   }
// };
// request(politiciansAPI, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//   //  console.log(body);
//   }
// })



// Listen on port 3000
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

