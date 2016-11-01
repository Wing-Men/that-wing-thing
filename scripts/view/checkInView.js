'use strict';
(function(module){
  var checkInView = {};
  checkInView.userName;
  checkInView.password;

  checkInView.formView = function() {
    //you can have an if block with no else.
    if(!currUser) {
      $('#login').fadeIn(500);
    } else {
    }
  };

  checkInView.handleCheckIn = function() {
    $('#check-in-button').on('click', function(e){
      e.preventDefault();
      checkInView.userName = $('#username-input').val();
      UserController.checkForExistingUser(checkInView.userName, checkInView.userAlreadyExists, checkInView.showPasswordInput);
    });
  };

  checkInView.showPasswordInput = function() {
    $('#check-in-message').fadeIn(500).text('Set password for ' + checkInView.userName);
    $('#username-input').fadeOut(500, function() {
      $('#password-input').fadeIn(500).text('');
    });
    $('#check-in-button').attr('id', 'create-account-button');
    $('#create-account-button').text('Create account!');
    checkInView.handleCreateAccount();
  };

  checkInView.userAlreadyExists = function() {
    $('#check-in-message').fadeIn(500).text('There is already a user with that name');
  };

  checkInView.handleCreateAccount = function() {
    $('#create-account-button').on('click', function() {
      checkInView.password = $('#password-input').val();
      $('#check-in-form').fadeOut();
      $('#account-created-message').fadeIn(500).text('Checked in as ' + checkInView.userName + '!');
      UserController.addUser(checkInView.userName, checkInView.password);
    });
  };

  checkInView.handleLogin = function() {
    $('#login-button').on('click', function(e) {
      e.preventDefault();
      console.log('clicked');
      checkInView.userName = $('#login-username').val();
      checkInView.password = $('#login-password').val();
      console.log('user name', checkInView.userName, 'password', checkInView.password);
      UserController.checkUserLogin(checkInView.userName, checkInView.password);
    });
  };

  checkInView.handleCheckIn();
  checkInView.handleLogin();

  module.checkInView = checkInView;
})(window);
