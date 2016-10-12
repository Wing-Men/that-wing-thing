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
        console.log(currUser);
        nextFunction();
        finalFunction();
      }
    );
  };

  webDB.execute('DROP TABLE IF EXISTS users;');
  User.createTable();
  //hard coding in dummy users

  webDB.execute(
    'INSERT INTO users (userName, password, fav, visited, totalVisited, oauth) VALUES ("Will", "123cat", "", "", 0, "");'
  );

  webDB.execute(
    'INSERT INTO users (userName, password, fav, visited, totalVisited, oauth) VALUES ("Cat", "124cat", "", "", 0, "");'
  );

  module.User = User;
})(window);
