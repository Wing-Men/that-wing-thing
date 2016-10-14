'use strict';
(function(module) {

  function Restaurant(name, votes) {
    this.name = name;
    this.votes = votes;
  }

  Restaurant.all = [];

  //table for keeping track of votes on restaurants
  Restaurant.createTable = function() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS votes (id INTEGER PRIMARY KEY, name VARCHAR, votes INTEGER)',
      function() {
        console.log('Restaurants table created');
      }
    );
  };

  Restaurant.fetchAll = function() {
    webDB.execute('SELECT * FROM votes', function(rows) {
      if(rows.length) {
        Restaurant.all = rows.map(function(obj) {
          return new Restaurant(obj.name, obj.votes);
        });
      } else {
        $.getJSON('/scripts/model/freshMaps.json', function(data) {
          data.forEach(function(obj) {
            var restaurant = new Restaurant(obj.locationName, Math.floor((Math.random() * 5) + 1));
            Restaurant.all.push(restaurant);
            restaurant.insertRecord();
          });
        });
      }
    });
  };

  Restaurant.prototype.insertRecord = function () {
    webDB.execute(
      'INSERT INTO votes (name, votes) VALUES ("' + this.name + '", ' + this.votes + ');', function() {
      }
    );
  };

  Restaurant.createTable();
  Restaurant.fetchAll();

  module.Restaurant = Restaurant;
})(window);
