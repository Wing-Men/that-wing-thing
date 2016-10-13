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
        console.log('the password is', pass[0].password);
        if(password === pass[0].password) {
          console.log('The password matches the username get user info');
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

  // UserController.checkUserLogin('Will', '123cat');

  module.UserController = UserController;
})(window);
