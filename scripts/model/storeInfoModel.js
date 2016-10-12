'use strict';

function Restaurant(name, address, phone, website, longitude, latitude) {
  this.name = name;
  this.address = address;
  this.phone = phone;
  this.website = website;
  this.longitude = longitude;
  this.latitude = latitude;
}

var restaurants = [];
var latLong = [];

webDB.execute('SELECT * FROM restaurants ORDER BY id', function(rows) {
  for (var i = 0; i < rows.length; i++) {
    var restaurant = new Restaurant(rows[i].name, rows[i].address, rows[i].phone, rows[i].website, rows[i].longitude, rows[i].latitude);
    restaurants.push(restaurant);
  }
  console.log(restaurants);
  for (var j = 0; j < restaurants.length; j++) {
    latLong.push([Number(restaurants[j].latitude), Number(restaurants[j].longitude)]);
  }
});
console.log(latLong);
