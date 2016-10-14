'use strict';
(function(module) {

var informationArray = [];

var getPoints = function() {
  $.ajax({
    url: "scripts/model/freshMaps.json",
    dataType: "json",
    success: function(response) {
      $.each(response, function(item) {
        informationArray.push(response[item]);
      })
    },
		error: function (request, status, error) {
			alert(request.responseText);
		}
	});
}
getPoints();
window.storeSites = informationArray;

})(window);
