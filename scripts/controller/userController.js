'use strict';
(function(module) {
  var UserController = {};

  UserController.checkForExistingUser = function(name, failFunction, nextFunction) {
    console.log(name);
    webDB.execute(
      'SELECT userName FROM users WHERE userName = "' + name + '";', function(row) {
        console.log(row[0]);
        if(row[0]) {
          console.log('there is a row');
          //show message that username is taken
          failFunction();
        } else {
          console.log('there isnt');
          //show the box for password
          nextFunction();
        }
      }
    );
  };

  UserController.checkUserLogin = function(name, password) {
    webDB.execute(
      'SELECT password FROM users WHERE username = "' + name + '";', function(pass) {
        if(password === pass[0].password) {
          User.setCurrUser(name, voteView.renderForm, UserProgressView.sitesVisitedtoArray);
        } else {
          console.log('WRONG');
        }
      }
    );
  };

  UserController.addUser = function(name, password) {
    webDB.execute(
      'INSERT INTO users (userName, password, fav, visited, totalVisited, oauth) VALUES ("' + name + '", "' + password + '", "", "", 0, "");'
    );
  };

  UserController.updateInfo = function(user, paramString) {
    var param;
    if(Array.isArray(user[paramString])) {
      param = '"' + user[paramString].toString() + '"';
    } else if(isNaN(user[paramString])) {
      param = '"' + user[paramString] + '"';
    } else {
      param = user[paramString];
    }
    webDB.execute(
      'UPDATE users SET ' + paramString + ' = ' + param + ' WHERE userName = "' + user.userName + '";'
    );
  };

  module.UserController = UserController;
})(window);
