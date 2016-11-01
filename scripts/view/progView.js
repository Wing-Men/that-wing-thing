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
    Restaurant.all.forEach(function(restaurant) {
      var $li = $('<li></li>').text(restaurant.name);
      if(currUser){
        if(currUser.visited.indexOf(restaurant.name) !== -1) {
          $li.addClass('visited').css('text-decoration', 'line-through');
        } else {
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
    //awesome that you threw some animations in. You may want to look into
    //handling these things with CSS as it seems to deal with it a little
    //more efficiently these days.
    $('#wing-walk').animate({width: progress + '%'},1500, 'swing');
    //I believe this whole conditional could be rewritten as:
    //markerCount = Math.floor(progress / 25);
    //
    //In cases such as these it's completely fine to have something
    //a little more verbose in order to just get it working. But keep
    //an eye out for repetetive code that has a pattern in its results
    //as you could often end up with a relatively simple answer with
    //a little refactoring.
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

  module.UserProgressView = UserProgressView;
})(window);
