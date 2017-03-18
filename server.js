//Dependencies
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
// Listen on port 3000
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

