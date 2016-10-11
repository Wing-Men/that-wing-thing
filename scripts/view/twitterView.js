'use strict';
(function(module) {
  var twitterView = {};


  twitterView.renderTweet = function(tweet) {
    var template = Handlebars.compile($('#tweet-template').text());
    return template(tweet);
  };

  twitterView.renderFeed = function() {
    twitterObj.all.forEach(function(tweet) {
      $('#twitter').append(twitterView.renderTweet(tweet));
    });
  };

  twitterObj.requestTweets(twitterView.renderFeed);

  module.twitterView = twitterView;
})(window);
