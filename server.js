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

//now  we can set the route path & initialize the API
// router.get('/', function(req, res) {
//   res.json({ message: 'API Initialized!'});
// });


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

  router.route('/game')
  //post new comment to the database
  .get(function(req, res) {
    //get game w/ id
    // req.params
    var query = Game.findOne({ 'game_id': req.params.gamecode });
    
    query.exec(function (err, gameResult) {
      if (err) res.send(err);
      // Prints "Space Ghost is a talk show host."
      console.log(gameResult);
      res.json(gameResult);
    });
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
