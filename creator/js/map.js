var map, geocoder, traces;
var coords = [];
var traces;
var myCoords = [];
var google;

function show_map(position)
{
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var myLatlng = new google.maps.LatLng(latitude, longitude);

	var mapOptions = {
		scrollwheel: true,
		zoom:17,
		center: myLatlng,
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

	var lineSymbol = {
		path: 'M 0,-1 0,1',
		strokeOpacity: 1,
		scale: 4
	};

	traces = new google.maps.Polyline({
		path: coords,
		strokeColor: '#00C7FF',
		strokeOpacity: 0.1,
		strokeWeight: 10,
		icons: [{
			icon: lineSymbol,
			offset: '0',
			repeat: '20px'
		}]
	});

	traces.setMap(map);
}

function show_map2()
{
	var latitude = 50.85;
	var longitude = 4.35;

	var myLatlng = new google.maps.LatLng(latitude, longitude);

	var mapOptions = {
		scrollwheel: true,
		zoom:17,
		center: myLatlng,
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

	var lineSymbol = {
		path: 'M 0,-1 0,1',
		strokeOpacity: 1,
		scale: 4
	};

	traces = new google.maps.Polyline({
		path: coords,
		strokeColor: '#00C7FF',
		strokeOpacity: 0.1,
		strokeWeight: 10,
		icons: [{
			icon: lineSymbol,
			offset: '0',
			repeat: '20px'
		}]
	});

	traces.setMap(map);
}

function error()
{
	alert("please position");
}

google.maps.LatLng.prototype.kmTo = function(a){ 
    var e = Math, ra = e.PI/180; 
    var b = this.lat() * ra, c = a.lat() * ra, d = b - c; 
    var g = this.lng() * ra - a.lng() * ra; 
    var f = 2 * e.asin(e.sqrt(e.pow(e.sin(d/2), 2) + e.cos(b) * e.cos 
    (c) * e.pow(e.sin(g/2), 2))); 
    return f * 6378.137; 
};

google.maps.Polyline.prototype.inKm = function(n){ 
    var a = this.getPath(n), len = a.getLength(), dist = 0; 
    for (var i=0; i < len-1; i++) { 
       dist += a.getAt(i).kmTo(a.getAt(i+1)); 
    }
    return dist; 
};
