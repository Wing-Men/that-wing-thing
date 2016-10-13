'use strict';
var currUser;

(function(module) {
  //this is used to construct the object for current user
  function User (opts) {
    Object.keys(opts).forEach(function(prop, index, keys) {
      this[prop] = opts[prop];
    },this);
  }

  User.createTable = function() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, userName VARCHAR, password VARCHAR, fav VARCHAR, visited VARCHAR, totalVisited DATE, oauth VARCHAR)',
      function() {
        console.log('Successfully set up the articles table.');
      }
    );
  };
  User.setCurrUser = function(name, nextFunction, finalFunction) {
    webDB.execute(
      'Select * FROM users WHERE username = "' + name + '";', function(row) {
        currUser = new User(row[0]);
        nextFunction();
        finalFunction();
      }
    );
  };

  User.createTable();

  module.User = User;
})(window);
