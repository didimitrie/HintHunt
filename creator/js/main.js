function getR(min, max) {
	return Math.random() * (max - min) + min;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
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
	$(".close-input").velocity("transition.flipXIn", {delay: 200}).velocity({scale: 1.6}, 200);
}

function closeReview() {
	$(".route-review").velocity({translateY: "0vh"}, {duration: 400, easing:"easeOutQuint"});	
	$(".info-stuff").velocity("transition.flipXOut", {display:null,duration:0});
}

function openReview() {
	$(".route-review").velocity({translateY: "-100vh"}, {duration: 400, easing:"easeOutQuint"});
	$(".info-stuff").velocity("transition.flipXIn", {display:null, stagger:100, delay: 300});
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

	//update conclusions
	var kms =  traces.inKm();

	$(".stop-number").find(".round-numbers").html(myCoords.length);
	$(".length").find(".round-numbers").html( round(kms,2) );
	$(".duration").find(".round-numbers").html( round(kms/3, 2) );

	$(".tip-input").val("");
}

var myFirebaseRef;
var windowHeight = window.innerHeight;

$(window).load(function(){

	myFirebaseRef = new Firebase("https://hint-hunt.firebaseio.com");
	//madness starts
	
	var state = "closed";
	
	var drg = 0;

	$(".route-review").hammer().on("pandown", function(event){
		event.stopPropagation();
		var dragOffset = ((100/windowHeight)*event.gesture.deltaY) - 100;
		drg = -dragOffset;
		$(this).velocity({translateY: dragOffset+"%"},0);
	});

	$(".route-review").hammer().on("panend", function(event) {
		if(drg > 60) {
			$(this).velocity({translateY: "-100vh"}, {duration: 200});
		}
		else {
			closeReview();
			state = "closed";
		}
	});

	/*

	OPEN REVIEW

	*/

	$(".save-route").hammer().on("tap", function(){
		if(state==="closed") 
		{
			openReview();
			deltaY = 0;
			state = "review";
		}
		
		//var routes = myFirebaseRef.child("routes");
		//routes.push(myCoords);
	});



	/*

	CONFIRM ROUTE

	*/

	$(".save-share").hammer().on("tap", function() {

		var routes = myFirebaseRef.child("routes");
		var myRef = routes.push(myCoords);

		$(this).html(myRef.key());
		$(this).css("font-size", "10px");
		console.log(myRef.key());

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
			event.stopPropagation();
			closeControls();
			state = "closed";
		}
	});
	$(".actions").hammer().on("tap", function(event) {event.preventDefault();});
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