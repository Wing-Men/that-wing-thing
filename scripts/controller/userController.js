'use strict';
(function(module) {
  var UserController = {};

  UserController.checkUserLogin = function(name, password) {
    webDB.execute(
      'SELECT password FROM users WHERE username = "' + name + '";', function(pass) {
        console.log('the password is', pass[0].password);
        if(password === pass[0].password) {
          console.log('The password matches the username get user info');
          User.setCurrUser(name, voteView.renderForm);
          // debugger;
        } else {
          console.log('WRONG');
        }
      }
    );
  };

  UserController.checkUserLogin('Will', '123cat');

  module.UserController = UserController;
})(window);
