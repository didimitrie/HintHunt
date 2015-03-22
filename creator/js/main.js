function getR(min, max) {
	return Math.random() * (max - min) + min;
}

function closeControls() {
	$(".pin-details").velocity("transition.shrinkOut", {duration:400, easing: [200,20], delay:0});
	//$(".main").velocity({translateY:"0vh", XXXrotateX: "0deg", scale:1}, {duration: 200});

	$(".tip-input").attr({'disabled': 'disabled'});
}

function openControls() {
	//$(".main").velocity({translateY:"23vh", XXXrotateX: "45deg", scale: 1.5}, {duration: 200});
	$(".pin-details").velocity("transition.expandIn", {duration:300});
}

function addCoordsToPath(){
	var marker = new google.maps.Marker({
		position: map.getCenter(),
		map: map,
		icon: {
			path: google.maps.SymbolPath.CIRCLE,
			scale: 7
		}
	});

	google.maps.event.addListener(marker, 'click', function() {
		map.setZoom(map.getZoom());
		map.panTo(marker.getPosition());
	});

	var path = traces.getPath();
	path.push(map.getCenter());

	var locationObject = {
		"tip" : $(".tip-input").val(),
		"location" : map.getCenter(),
		"zoom" : map.getZoom()
	}

	myCoords.push(locationObject);
	console.log(myCoords);

	$(".tip-input").val("");
}

var myFirebaseRef;

$(window).load(function(){

	myFirebaseRef = new Firebase("https://hint-hunt.firebaseio.com");
	//madness starts

	$(".tip-input").hammer().on("tap", function (event) {
		$(this).removeAttr('disabled');
		$(this).focus();
	});


	$(".savebutton").hammer().on("tap", function(){
		var routes = myFirebaseRef.child("routes");
		routes.push(myCoords);

	});

	/*

	CLOSE

	*/

	var state = "closed";

	$(".close-input").hammer().on("tap", function(event) {
		if(state==="open")
		{
			closeControls();
			addCoordsToPath();
			state = "closed";
		}
	});

	/*

	CANCEL

	*/


	$("#the-map").hammer().on("tap", function(event) {
		if(state==="open") 
		{
			closeControls();
			state = "closed";
		}
	});

	/*

	OPEN

	*/

	$(".pin-overlay").hammer().on("tap", function(event) {
		$(this).velocity("callout.pulse");

		$("#waypoint-number").html("#" + (myCoords.length+1));
		$("#path-length").html("Length: " + (Math.round(traces.inKm()*100)/100)+"km" );

		if(state==="closed")
		{
			openControls();
			state = "open";
		}
	});

	show_map2();
	//navigator.geolocation.getCurrentPosition(show_map, error, {maximumAge: 500});
});