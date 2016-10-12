'use strict';
(function(module) {
  var UserProgressView = {};

  UserProgressView.renderProgress = function() {
    //grab the fav total visited and list of visited from currUser
    //render some sort of chart
    var progress = (currUser.totalVisited * 100/ 19).toString();
    console.log(progress);
    $('#wing-walk').animate({width: progress + '%'},1500, 'swing');
  };

  UserProgressView.updateUserProgress = function(){
    //communicate with the controller to update the model
    //cross off options of visited locations
  };


  module.UserProgressView = UserProgressView;
})(window);
