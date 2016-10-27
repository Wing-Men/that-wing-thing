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
//This could cause problems. Since you're setting these sites inside an async call anything that relies
//on this data being available as this array may not have it. If you want anything to use the storeSites
//array whatever deals with that information is going to have to be inside the callback for the ajax
//call. You'll probably have to pass it in as a callback.
window.storeSites = informationArray;

})(window);
