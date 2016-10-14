'use strict';

(function(module) {
  var mapController = {};
  var progressController = {};
  var aboutController = {};

  mapController.reveal = function() {
    $('.tab-content').hide();
    $('#wing-map').fadeIn();
    $('#twitter').fadeIn();
  };

  progressController.reveal = function() {
    $('.tab-content').hide();
    checkInView.formView();
    $('#user-progress').fadeIn();
  };

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.mapController = mapController;
  module.progressController = progressController;
  module.aboutController = aboutController;
})(window);
