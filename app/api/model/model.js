// Created this model for db to be used by the router

// Require mongoose
var mongoose = require("mongoose");

// Require the connection
var db = require("../config/connection");

// Create Schema class
var Schema = mongoose.Schema;

// Create States schema
var StatesSchema = new Schema({
    state: {
        type: String
    }
});

// Create the States model with the StatesSchema
var States = mongoose.model("States", StatesSchema);

// Exports the model
module.exports = States;
