'use strict';
(function(module) {
  var UserController = {};

  UserController.checkForExistingUser = function(name, failFunction, nextFunction) {
    console.log(name);
    webDB.execute(
      'SELECT userName FROM users WHERE userName = "' + name + '";', function(row) {
        console.log(row[0]);
        if(row[0]) {
          failFunction();
        } else {
          nextFunction();
        }
      }
    );
  };

  UserController.checkUserLogin = function(name, password) {
    webDB.execute(
      'SELECT password FROM users WHERE username = "' + name + '";', function(pass) {
        if(password === pass[0].password) {
          User.setCurrUser(name, voteView.renderForm, UserProgressView.sitesVisitedtoArray, UserProgressView.renderList);
          $('#login-message').text('logging in as ' + name);
          $('#login').fadeOut(1000);
        } else {
          console.log('WRONG');
          $('#login-message').text('Incorrect username or password');
        }
      }
    );
  };

  UserController.addUser = function(name, password) {
    webDB.execute(
      'INSERT INTO users (userName, password, fav, visited, totalVisited, oauth) VALUES ("' + name + '", "' + password + '", "", "", 0, "");', function() {
        UserController.checkUserLogin(name, password);
      }
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

  // UserController.checkUserLogin('Will', '123cat');

  module.UserController = UserController;
})(window);
