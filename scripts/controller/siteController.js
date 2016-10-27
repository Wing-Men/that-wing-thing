'use strict';
//as silly as it might seem to have these each in their own file it's probably a better
//way to start. Mostly because in the long run you can't count on this being the only
//necessary functionality for a controller.
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
