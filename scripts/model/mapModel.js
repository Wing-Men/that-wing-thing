'use strict';
// console.log('map:', latLong);
  var contentString ='<div id="content">'+
            '<h1 id="firstHeading" class="firstHeading">Red Star Tavern</h1>'+
            '<div id="markOneContent">'+
            '<h4>(503) 222-0005</h4>'+
            '<p>Red Star is serving: Slowly braised in Pork fat and champagne, these wings are topped with dill and a creamy blue cheese sauce. These wings use a delicate balance of flavors with heat and umame working to create a full body experience.</p>'+
            '</div></div>';


  var portland = {lat: 45.5163719, lng: -122.6765228};
  var mapOptions = {
    center: portland,
    zoom: 12,
  };

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
      position: { lat: 45.54845, lng: -122.613639 },
      map: map
    });

    new google.maps.Marker({
      position: { lat: 45.5589999, lng: -122.6569361 },
      map: map
    });

    new google.maps.Marker({
      position:{ lat: 45.523062, lng: -122.676482 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.523062, lng: -122.676482 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.514127, lng: -122.680055 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.528674, lng: -122.666179 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.513485, lng: -122.657946 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.469103, lng: -122.652766 },
      map: map
    });
    var markOne = new google.maps.Marker({
      position:{ lat: 45.519840, lng: -122.677259 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.524381, lng: -122.694280 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.540023, lng: -122.668411 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.504663, lng: -122.645442 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.517412, lng: -122.660375 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.526748, lng: -122.644694 },
      map: map
    });
    new google.maps.Marker({
      position:{ lat: 45.542693, lng: -122.602827  },
      map: map
    });
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    markOne.addListener('click', function() {
      infowindow.open(map, markOne);
    });
  }
  window.map = map;
  window.makeMarker = makeMarker;
  window.initMap = initMap;
