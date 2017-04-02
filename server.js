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


//Use body parser with app
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//set port
app.set('port', (process.env.PORT || 3000));

// Make public a static dir
app.use(express.static("public"));
app.use(express.static(__dirname + "/app"));
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

//Guardian API
app.post("/searchNews",function(req, res){
//  console.log(req.body.state);
  var newsAPI = {
  url: "https://content.guardianapis.com/search?q=marijuana&api-key=02d998fe-5241-46ca-b7b0-6b7f2ebd0c98"
};
  request(newsAPI, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var newsResult = JSON.parse(body);
   // console.log(politicianSearchResult);
    res.json(newsResult);

    }
  })
})

//NY Times API
app.get("/searchNYT",function(req, res){
//  console.log(req.body.state);
  var nyAPI = {
  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  qs: {
    'api-key': "89aa4e65f6644431a4fae8a763464a38",
    'q': "marijuana"
  }
};
  request(nyAPI, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var nyResult = JSON.parse(body);
   // console.log(politicianSearchResult);
    res.json(nyResult);

    }
  })
})


// Listen on port 3000
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

