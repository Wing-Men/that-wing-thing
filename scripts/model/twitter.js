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
        tweet.name = obj.user.name;
        tweet.screenName = obj.user.screen_name;
        tweet.userImg = obj.user.profile_image_url;
        tweet.retweets = obj.retweet_count;
        tweet.likes = obj.favorite_count;
        if(obj.entities.media) {
          tweet.img = obj.entities.media[0].media_url;
          console.log(tweet.img);
        }
        tweet.date = obj.created_at;
        console.log(tweet);
        // twitterObj.all.push(tweet);
        return tweet;
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
