function getR(min, max) {
	return Math.random() * (max - min) + min;
}

$(window).load(function(){

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	var map, geocoder;
	
	function show_map(position)
	{
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;


		directionsDisplay = new google.maps.DirectionsRenderer({
			polylineOptions: {
				strokeColor: "#ff6fcf",
				strokeOpacity: "0.7",
				strokeWeight: "10"
			}
		}
		);

		var myLatlng = new google.maps.LatLng(latitude, longitude);
		var targetLatlng = new google.maps.LatLng(latitude + getR(-0.01, .01), longitude + getR(-0.01, 0.01));

		var mapOptions = {
			scrollwheel: true,
			zoom:13,
			center: myLatlng,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			draggable:true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("the-map"), mapOptions);
		map.setOptions({styles: style});
		directionsDisplay.setMap(map);

		var request = {
			origin:myLatlng,
			destination:targetLatlng,
			travelMode: google.maps.TravelMode.WALKING
		};

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
			}
		});
	}

	function error(){
		alert(map.getCenter());
	}

	navigator.geolocation.getCurrentPosition(show_map, error, {maximumAge: 500});
});