'use strict';
(function(module){
  var checkInView = {};
  checkInView.userName;
  checkInView.password;

  checkInView.handleCheckName = function() {
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

  checkInView.handleCheckName();
  module.checkInView = checkInView;
})(window);
