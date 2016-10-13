'use strict';
(function(module) {
  var UserProgressView = {};

  UserProgressView.compileItem = function(item) {
    var template = Handlebars.compile($('#site-list-template').text());
    return template(item);
  };

  UserProgressView.sitesVisitedtoArray = function() {
    currUser.visited = currUser.visited.split(',');
    currUser.visited.splice(currUser.visited.indexOf(''), 1);
  };

  UserProgressView.renderList = function() {
    Resturaunt.all.forEach(function(resturaunt) {
      // var li = UserProgressView.compileItem(resturaunt);
      // var resturauntName = li.split('<')[1].split('>')[1];
      var $li = $('<li></li>').text(resturaunt.name);
      console.log($li);
      if(currUser){
        console.log(currUser.visited.indexOf(resturaunt.name));
        if(currUser.visited.indexOf(resturaunt.name) !== -1) {
          $li.addClass('visited').css('text-decoration', 'line-through');
        } else {
          console.log('havent been here');
          $li.addClass('clickable');
        }
      }
      $('#visited-sites ul').append($li);
    });
    UserProgressView.renderProgress();
    UserProgressView.handleClick();
  };

  UserProgressView.handleClick = function() {
    $('#visited-sites ul li').on('click', function() {
      console.log('clicked');
      $(this).removeClass('clickable').addClass('visited').css('text-decoration', 'line-through');
      currUser.totalVisited += 1;
      currUser.visited.push($(this).text());
      UserController.updateInfo(currUser, 'totalVisited');
      UserController.updateInfo(currUser, 'visited');
      UserProgressView.renderProgress();
    });
  };

  UserProgressView.renderProgress = function() {
    //grab the fav total visited and list of visited from currUser
    //render some sort of chart
    var markerCount = 0;
    var progress = (currUser.totalVisited * 100 / 19).toString();
    $('#wing-walk').animate({width: progress + '%'},1500, 'swing');
    if(progress < 25) {
      markerCount = 0;
    } else if(progress >= 25 && progress < 50) {
      markerCount = 1;
    } else if(progress >= 50 && progress < 75) {
      markerCount = 2;
    } else if(progress >= 75 && progress < 100) {
      markerCount = 3;
    } else {
      markerCount = 4;
    }
    var timeInterval = 1500 / markerCount;
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
