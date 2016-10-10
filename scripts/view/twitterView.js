'use strict';
(function(module) {
  var twitterView = {};

  twitterView.renderTweets = function() {
    console.log('we are rendering the tweets!');
  };

  twitterObj.requestTweets(twitterView.renderTweets);

  module.twitterView = twitterView;
})(window);
