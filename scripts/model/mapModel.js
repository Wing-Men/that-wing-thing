'use strict';
(function(module){
  var portland = {lat: 45.5163719, lng: -122.6765228};

  var AlamedaBrewCo = {lat: 45.548459, lng: -122.613639};
  var AlbertStreetPub = {lat: 45.5589999, lng: -122.6569361};

  var mapOptions = {
    center: portland,
    zoom: 10,
  }

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
