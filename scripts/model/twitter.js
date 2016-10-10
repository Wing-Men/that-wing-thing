
'use strict';

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'HsRBsOg8VmPVv55c95BZi2Zly',
  consumer_secret:      'zVpdt5o0uQgWFtOZR7Y5536JiputpUMmGNulKNVd9Ihh3C2CuH',
  access_token:         '4635195781-kg9pLGVEChE2ZQBL46HSryzPlBELmO0Xo51hhfM',
  access_token_secret:  '93o36MNWTtIL81Ie3ORRNnKujExBphlC8a4xJD4F9Gidw'
});

T.get('search/tweets', { q: '#trailblazers', count: 5 }, function(err, data, response) {
  console.log(data);
});

// $.ajax({
//   url: 'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi',
//   method: 'GET',
//   headers: {
//     Authorization: OAuth oauth_consumer_key="HsRBsOg8VmPVv55c95BZi2Zly",
//     oauth_token="4635195781-kg9pLGVEChE2ZQBL46HSryzPlBELmO0Xo51hhfM",
//     oauth_signature_method="HMAC-SHA1",
//     oauth_timestamp="1476122976",
//     oauth_nonce="BRfcJf",
//     oauth_version="1.0",
//     oauth_signature="%2BwUj2%2BaMq4JE9yZ76Hn2pegorN0%3D"
//   },
//   success: successHandler,
//   error: errorHandler
// });
//
// function successHandler(data) {
//   console.log(data);
// }
//
// function errorHandler(error) {
//   console.log('ERROR', error);
// }
