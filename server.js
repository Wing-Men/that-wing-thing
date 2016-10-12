GNU nano 2.2.6                                  File: server.js

'use strict';

var express = require('express'),
requestProxy = require('express-request-proxy'), //eslint-disable-line
port = process.env.PORT || 3000,
app = express(),
Twit = require('twit');

var proxyTwit = function(request, response) {
console.log('Routing twitter request for tweets');
var T = new Twit({
  consumer_key:         process.env.TWITTER_KEY,
  consumer_secret:      process.env.TWITTER_KEY_PRIVATE,
  access_token:         process.env.TWITTER_TOKEN,
  access_token_secret:  process.env.TWITTER_TOKEN_PRIVATE
});

T.get('search/tweets', { q: '#cats', count: 5 }, function(err, data) {
  response.json(data);
});
};

app.get('/tweets', proxyTwit);

app.use(express.static('./'));

app.get('*', function(request, response) {
console.log('New request:', request.url);
response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
console.log('Server started on port ' + port + '!');
});

var mysql = require('mysql');
var mySqlPw = process.env.MY_SQL_PASSWORD;

var con = mysql.createConnection({
host: '138.68.20.49',
user: 'root',
password: mySqlPw
});


con.connect(function(err) {
if(err) {
  console.log('Error connecting to Db:', err);
  return;
}
console.log('Connection established');
});

con.end(function(err) { //eslint-disable-line

});

//Sequelize
var Sequelize = require('sequelize');
var connection = new Sequelize('wingweek', 'root', process.env.MY_SQL_PASSWORD);

var atLocation = connection.define('restaurants', {
  id: {
    type: Sequelize.INTEGER(11), //eslint-disable-line
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true
  },
  website: {
    type: Sequelize.STRING,
    allowNull: true
  },
  rating: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  latitude: {
    type: Sequelize.STRING,
    allowNull: true
  },
  longitude: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'restaurants'
});

connection.sync().then(function () {
atLocation.findById(0).then(function(location){
  console.log('worked', location);
  });
});

connection.query('SELECT * FROM restaurants', { type:Sequelize.QueryTypes.SELECT })
      .then(function(data) {
        console.log(data);
});

// Initialize server
var server, app;
if (process.env.USE_RESTIFY) {
  var restify = require('restify');
  app = server = restify.createServer()
  app.use(restify.queryParser());
  app.use(restify.bodyParser());
} else {
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    server = http.createServer(app);
}

// Initialize epilogue
epilogue.initialize({
  app: app,
  sequelize: connection
});

// Create REST resource
var userResource = epilogue.resource({
  model: User,
  endpoints: ['/wings', '/wings/:id']
});

// Create connection and listen
connection
  .sync()
  .then(function() {
    server.listen(function() {
      var host = server.address().address,
          port = server.address().port;

      console.log('listening at http://%s:%s', host, port);
    });
  });
