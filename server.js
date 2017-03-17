var express = require('express');
var bodyParser = require("body-parser");

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

app.set('port', (process.env.PORT || 3000));

// Listen on port 3000
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

