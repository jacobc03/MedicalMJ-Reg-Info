// Require mongoose
var mongoose = require('mongoose');

// Require bluebird as promise because mongoose promises are deprecated
var Promise = require('bluebird');
mongoose.Promise = Promise;

// Connect to database
mongoose.connect("mongodb://heroku_9rscmq61:lhalp428lsr78cfl9bfb6puk09@ds141450.mlab.com:41450/heroku_9rscmq61");
//mongoose.connect("mongodb://localhost/StateInfo");

//Set connection to db variable
var db = mongoose.connection;

// check for any error
db.on("error", function (error) {
    console.log("database error: ", err);
});

// confirm connection
db.once("open", function () {
    console.log("mongoose db connected");
});

// exports the database
module.exports = db;