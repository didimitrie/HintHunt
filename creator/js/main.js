function getR(min, max) {
	return Math.random() * (max - min) + min;
}

function closeControls() {
	$(".pin-details").velocity("transition.slideUpOut", {duration:400});
	$(".main").velocity({translateY:["0vh", "20vh"], scale:1}, {duration: 300});
	$(".close-input").velocity("transition.flipXOut", {delay: 0, duration:0}).velocity({scale:1}, 0);

	$(".pin-overlay").velocity({scale:1}, 200);
	
}

function openControls() {
	$(".main").velocity({translateY:["20vh", 0], scale: [2,1]}, {duration: 300});
	$(".pin-details").velocity("transition.slideDownIn", {duration:300, delay:150});
	$(".close-input").velocity("transition.flipXIn", {delay: 400}).velocity({scale: 1.6});
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
		"tip" : $(".tip-input").val()==="" ? " " : "blast", // UGLY
		"location" : map.getCenter(),
		"zoom" : map.getZoom()
	}

	myCoords.push(locationObject);
	
	$(".tip-input").val("");
}

var myFirebaseRef;

$(window).load(function(){

	myFirebaseRef = new Firebase("https://hint-hunt.firebaseio.com");
	//madness starts
	
	var state = "closed";

	
	$(".route-review").hammer().on("pandown", function(event){
		console.log(event.gesture.deltaX);
	});

	/*

	OPEN REVIEW

	*/

	$(".save-route").hammer().on("tap", function(){
		if(state==="closed") 
		{
			$(".route-review").velocity({translateY: "-100vh"}, {duration: 200});
			$(".info-stuff").velocity("transition.flipXIn", {display:null, stagger:200, delay: 300});
			state = "review";
		}
		
		//var routes = myFirebaseRef.child("routes");
		//routes.push(myCoords);
	});


	/*

	CLOSE

	*/

	$(".close-input").hammer().on("tap", function(event) {
		if(state==="open")
		{
			event.preventDefault();
			closeControls();
			addCoordsToPath();
			state = "closed";
		}
	});

	/*

	CANCEL

	*/

	$(".pin-details").hammer().on("tap", function(event) {
		if(state==="open") 
		{
			event.preventDefault();
			closeControls();
			state = "closed";
		}
	});

	/*

	OPEN

	*/

	$(".pin-overlay").hammer().on("tap", function(event) {
		$(this).velocity({scale:0.4}, 300);

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