'use strict';

var express = require('express'),
  requestProxy = require('express-request-proxy'),
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
  T.get('search/tweets', { q: '#wingstop', count: 5 }, function(err, data) {
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
