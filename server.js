//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Game = require('./model/gameschema');
var dotenv = require('dotenv').config({path: 'info.env'});

//and create our instances
var app = express();
var router = express.Router();

//set our port (tutorial had < process.env.API_PORT || >
var port = 3001;

//db config   
var mongoDB = process.env.DB_INFO;

mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//-- API -- //

//request: empty
//response: 4 digit game_id
router.route('/newgame')
  //post new comment to the database
  .post(function(req, res) {
    var game = new Game();
    game.game_id = makeid();

    game.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: game.game_id });
    });
  });

  //request: gamecode=<4 digit code>
  //response: the JSON object for a game
  router.route('/game')
  .get(function(req, res) {
    Game.find({'game_id': req.query.gamecode}, function (err, gameResult) {
      if (err){ 
        res.send(err);
      }
      res.json({ message: gameResult });
    }); 
  });

  router.route('/game/addplayer')
  //post new comment to the database
  .put(function(req, res) {
    //TODO finish put : https://stackoverflow.com/questions/5024787/update-model-with-mongoose-express-nodejs
    
    // Game.find({'game_id': req.query.gamecode}, function (err, gameResult) {
    //   if (err){ 
    //     res.send(err);
    //   }
    //   res.json({ message: gameResult });
    // }); 
  });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});

// makes a game id
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
