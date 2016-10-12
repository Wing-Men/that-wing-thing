'use strict';
(function(module) {
  var progressController = {};

  progressController.reveal = function() {
    $('.tab-content').hide();
    $('#user-progress').fadeIn();
  };

  module.progressController = progressController;
})(window);
