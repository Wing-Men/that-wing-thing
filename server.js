'use strict';

var express = require('express'),
  requestProxy = require('express-request-proxy'), //eslint-disable-line
  port = process.env.PORT || 3000,
  app = express(),
  Twit = require('twit');

var proxyTwit = function(request, response) {
  console.log('Routing twitter request for tweets');
  var T = new Twit({
    // consumer_key:         process.env.TWITTER_KEY,
    // consumer_secret:      process.env.TWITTER_KEY_PRIVATE,
    // access_token:         process.env.TWITTER_TOKEN,
    // access_token_secret:  process.env.TWITTER_TOKEN_PRIVATE
    consumer_key:         'HsRBsOg8VmPVv55c95BZi2Zly',
    consumer_secret:      'zVpdt5o0uQgWFtOZR7Y5536JiputpUMmGNulKNVd9Ihh3C2CuH',
    access_token:         '4635195781-kg9pLGVEChE2ZQBL46HSryzPlBELmO0Xo51hhfM',
    access_token_secret:  '93o36MNWTtIL81Ie3ORRNnKujExBphlC8a4xJD4F9Gidw'
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

//Database connection
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
    type: Sequelize.INTEGER(11), //eslint-disable-line
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
