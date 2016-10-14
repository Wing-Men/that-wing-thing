'use strict';
(function(module) {

  function Restaurant(name, address, phone, website, longitude, latitude) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.longitude = longitude;
    this.latitude = latitude;
  }

  Restaurant.createTable = function() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS restaurants (id INTEGER PRIMARY KEY, name VARCHAR, address VARCHAR, phone VARCHAR, website VARCHAR, vote INTEGER, latitude VARCHAR, longitude VARCHAR)',
      function() {
      }
    );
  };

  Restaurant.fetchAll = function() {
    $.getJSON('/scripts/model/freshMaps.json', function(data) {
      data.forEach(function(obj) {
        var restaurant = new Restaurant(obj);
        restaurant.insertRecord();
      });
    });
  };
  Restaurant.fetchAll();
  Restaurant.createTable();

  module.Restaurant = Restaurant;
})(window);
