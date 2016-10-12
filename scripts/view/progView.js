'use strict';
(function(module) {
  var UserProgressView = {};

  UserProgressView.renderProgress = function() {
    //grab the fav total visited and list of visited from currUser
    //render some sort of chart
    var markerCount = 0;
    var progress = (currUser.totalVisited * 100 / 19).toString();
    console.log(progress);
    $('#wing-walk').animate({width: progress + '%'},1500, 'swing');
    if(progress >= 25 && progress <= 49) {
      markerCount = 1;
    } else if(progress >= 50 && progress <= 74) {
      markerCount = 2;
    } else if(progress >= 75 && progress <= 99) {
      markerCount = 3;
    } else {
      markerCount = 4;
    }
    var timeInterval = 1500/markerCount
    for(var i = 1; i <= markerCount; i++) {
      var $marker = $('#marker-filled-' + i.toString());
      $marker.fadeIn(timeInterval * i);
    }
  };

  UserProgressView.updateUserProgress = function(){
    //communicate with the controller to update the model
    //cross off options of visited locations
  };


  module.UserProgressView = UserProgressView;
})(window);
