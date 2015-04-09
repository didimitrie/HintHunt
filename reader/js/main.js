function getR(min, max) {
	return Math.random() * (max - min) + min;
}

var myFirebaseUrl, locationHash;

//mapsy stuff
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map, geocoder;
var watcher;

//from firebase
var TRACK;

//which is my target?
var target;
var user;

function locationFollow(position)
{
	var myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	user.setPosition(myPos);
	map.panTo(myPos);

	console.log("wow! change!");
}

function addMarkers()
{
	var length = TRACK.length;
	for(var i = 0; i < length; i++)
	{
		var pos = new google.maps.LatLng(TRACK[i].location.k, TRACK[i].location.D);
		console.log(pos);
		var marker = new google.maps.Marker({
			position: pos,
			map: map,
		});
	}
}

function initMap(position)
{	
	var myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	var mapOptions = {
		scrollwheel: true,
		zoom:16,
		center: myPos,
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		draggable:true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("the-map"), mapOptions);
	map.setOptions({styles: style});

	target = TRACK[0].location;
	
	user = new google.maps.Marker({
		position: myPos,
		map: map,
		icon: {
			path: google.maps.SymbolPath.CIRCLE,
			scale: 5
		}
	});

	addMarkers();
}



$(window).load(function(){

	function error(){
		alert("no worky worky");
	}

	/*
	
	GET DATA FROM FIREBASE, PARSE, AND SHOW MAP

	*/

	locationHash = window.location.hash.substring(1);
	myFirebaseUrl = "https://hint-hunt.firebaseio.com/routes/"+locationHash+".json";

	$.ajax({
		url: myFirebaseUrl,
		beforeSend: function( xhr ) {
			xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
		}
	})
	.done(function(receivedData) {
		TRACK = JSON.parse(receivedData);
		
		navigator.geolocation.getCurrentPosition(initMap, error, {maximumAge: 500});

		watcher = navigator.geolocation.watchPosition(locationFollow, error, { enableHighAccuracy: true, timeout: 200, maximumAge: 0 });

	});


});