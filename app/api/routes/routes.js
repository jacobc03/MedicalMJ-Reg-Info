// Back end router file that talks to the db by using the model

// Dependencies
var States = require('../model/model.js');
var express = require('express');
var router = express.Router();

// Routes to home page
router.get('/', function(request, response) {

    // Gets all the states' info
    States.find({}, function(error, info) {

        // Check for error getting the state info
        if (error) console.log("error getting state info", error);

        response.json(info);
    });
});

//Exports router
module.exports = router;
