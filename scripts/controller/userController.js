'use strict';
(function(module) {
  var UserController = {};

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


  UserController.checkUserLogin('Will', '123cat');

  module.UserController = UserController;
})(window);
