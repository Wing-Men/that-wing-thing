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
        console.log('Restaurants table created');
      }
    );
  };



  Restaurant.createTable();

  // var restaurants = [];
  // var latLong = [];
  //
  // webDB.execute('SELECT * FROM restaurants ORDER BY id', function(rows) {
  //   for (var i = 0; i < rows.length; i++) {
  //     var restaurant = new Restaurant(rows[i].name, rows[i].address, rows[i].phone, rows[i].website, rows[i].longitude, rows[i].latitude);
  //     restaurants.push(restaurant);
  //   }
  //   console.log(restaurants);
  //   for (var j = 0; j < restaurants.length; j++) {
  //     latLong.push([Number(restaurants[j].latitude), Number(restaurants[j].longitude)]);
  //   }
  // });
  // console.log(latLong);

  module.Restaurant = Restaurant;
})(window);
