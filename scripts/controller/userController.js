'use strict';
(function(module) {
  var UserController = {};

  UserController.checkUserLogin = function(name, password) {
    webDB.execute(
      'SELECT password FROM users WHERE username = "' + name + '";', function(pass) {
        console.log('the password is', pass[0].password);
        if(password === pass[0].password) {
          console.log('The password matches the username get user info');
          User.setCurrUser(name);
        } else {
          console.log('WRONG');
        }
      }
    );
  };

  module.UserController = UserController;
})(window);
