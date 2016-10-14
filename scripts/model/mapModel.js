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
  }

  function makeMarker(whom) {
    for (var i=0; i <= storeSites.length; i++){
      var pin =  new google.maps.Marker({
        position: storeSites[i],
        map: map
      })
    }
  };
  window.map = map;
  window.makeMarker = makeMarker;
  window.initMap = initMap;
})(window);
