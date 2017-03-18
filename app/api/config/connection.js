// Require mongoose
var mongoose = require('mongoose');

// Require bluebird as promise because mongoose promises are deprecated
var Promise = require('bluebird');
mongoose.Promise = Promise;

// Connect to database
mongoose.connect("mongodb://localhost/StateInfo");

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