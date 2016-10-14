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
				$("#locationList").append('<li><a href="'+response[item].url+'">'+ response[item].locationName +'</a></li>');
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
