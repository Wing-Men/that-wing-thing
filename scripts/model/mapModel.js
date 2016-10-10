'use strict';
(function(module){
  function initMap() {
    var portland = {lat: 45.5163719, lng: -122.6765228};
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: portland  });

    var marker = new google.maps.Marker({
      position: portland,
      map: map
    });
  }
  window.initMap = initMap;
})(window);
