'use strict';
// console.log('map:', latLong);
(function(module){
  var portland = {lat: 45.5163719, lng: -122.6765228};
  var mapOptions = {
    center: portland,
    zoom: 10,
  };

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
      position: AlamedaBrewCo,
      map: map
    });
    new google.maps.Marker({
      position: AlbertStreetPub,
      map: map
    });

  }
  window.initMap = initMap;
})(window);
