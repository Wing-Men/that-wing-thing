'use strict';

(function(module) {
  var mapController = {};

  mapController.reveal = function() {
    $('.tab-content').hide();
    $('#wing-map').fadeIn();
    $('#twitter').fadeIn();
  };

  module.mapController = mapController;
})(window);
