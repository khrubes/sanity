//mode/gameschema.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var GameSchema = new Schema({
    game_id: String,
    players: [
        { // represents a player
            player_name: String,
        }
    ],
});

//export our module to use in server.js
module.exports = mongoose.model('Game', GameSchema);
