'use strict';
(function(module) {
  var twitterObj = {};

  twitterObj.all = [];

  twitterObj.requestTweets = function(nextFunction) {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: successHandler,
      error: errorHandler
    });

    function successHandler(data) {
      console.log(data.statuses);
      // twitterObj.all = data;
      twitterObj.all = data.statuses.map(function(obj) {
        var tweet = {};
        tweet.text = obj.text;
        console.log(tweet);
        twitterObj.all.push(tweet);
        console.log(twitterObj.all);
      });
      nextFunction();
    }

    function errorHandler(error) {
      console.log('ERROR', error);
    }
  };


  module.twitterObj = twitterObj;
})(window);
