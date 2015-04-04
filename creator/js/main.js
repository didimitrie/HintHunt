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

function openTipInput(){
	$(".tip-input").velocity({translateY: "100%"}, {duration: 400, easing:"easeOutQuint", complete: function(){
		$("input").focus();	
	}});
}

function closeTipInput()
{
	$(".tip-input").velocity({translateY: "-100%"}, {duration: 400, easing:"easeOutQuint"});
	$("input").blur();	
}

function openTipEdit(pos){
	var myTip;
	var index;

	for(var i = 0; i<myCoords.length; i++) {
		var loc = myCoords[i].location;
		if((pos.k === loc.k)&&(pos.D===loc.D)){
			myTip = myCoords[i];
			index = i;
		}
	}

	console.log("Found! Tip #" + index);

	$("#tip-delete").velocity({translateY: "100vh"}, {duration: 600, easing:[200,20]});
}

function closeTipDelete() {
	$("#tip-delete").velocity({translateY: "-100vh"}, {duration: 600, easing:[200,20]});	
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

	var path = traces.getPath();
	path.push(map.getCenter());

	var tip = $("#add-tip").html();

	var locationObject = {
		tip : tip,
		location : map.getCenter(),
		zoom : map.getZoom()
	}

	myCoords.push(locationObject);

	google.maps.event.addListener(marker, 'click', function() {
		openTipEdit(marker.getPosition());
		map.setZoom(map.getZoom());
		map.panTo(marker.getPosition());
	});

	//update conclusions
	var kms =  traces.inKm();

	$(".stop-number").find(".round-numbers").html(myCoords.length);
	$(".length").find(".round-numbers").html( round(kms,2) );
	$(".duration").find(".round-numbers").html( round(kms/3, 2) );

	$(".tip-input-form").val("");
	$("#add-tip").html("add tip?");
}

function makeThingsStick()
{
	$("section").css("height", windowHeight + "px");
}

var myFirebaseRef;
var windowHeight;

$(window).load(function(){

	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
	//makeThingsStick();

	myFirebaseRef = new Firebase("https://hint-hunt.firebaseio.com");
	//madness starts
	
	var state = "closed";

	/*

	DELETE/EDIT location inside gmap marker handler

	*/
	
	/*

	CLOSE LOCATION INPUTa

	*/

	var drgX, drgY;

	$(".pin-details").hammer().on("pan", function(event){
		event.stopPropagation();
		
		var dragX, dragY, pX, pY;
		
		dragX = event.gesture.deltaX/10;
		dragY = event.gesture.deltaY/10;

		pX = event.gesture.pointers[0].pageX;
		pY = event.gesture.pointers[0].pageY;

		console.log(event);

		$(this).css("left", pX - windowWidth/2);
		$(this).css("top", pY - windowHeight/2);

		//var dragOffset = ((100/windowHeight)*event.gesture.deltaY) - 100;
		
		//$(this).velocity({translateX: dragX + "px", translateY: "+=" + dragY + "px"},0);
	});

	$(".pin-details").hammer().on("panend", function(event) {
	
	});

	/*

	CLOSE REVIEW

	*/

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

		//TODO: pushRefToDb();

		var routes = myFirebaseRef.child("routes");
		var myRef = routes.push(myCoords);

		$(this).html(myRef.key());
		$(this).css("font-size", "16px");

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
			//event.stopPropagation();
			//closeControls();
			//state = "closed";
		}
	});

	//$(".actions").hammer().on("tap", function(event) {event.preventDefault();});
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

	/*

	OPEN TIP INPUT

	*/

	$("#add-tip").hammer().on("tap", function(event){
		openTipInput();
	});

	/*

	HANDLE SUBMISSION OR BACK?

	*/

	$('#tip-form').on('submit', function(e) { 
		e.preventDefault();
		var data = $(".tip-input-form").val();
        console.log(data); //use the console for debugging, F12 in Chrome, not alerts
        $("#add-tip").html(data);
        closeTipInput();
    });

   	/*

	HANDLE SUBMISSION OR BACK?

	*/

	$(".close-tip-delete").hammer().on("tap", function() {
		closeTipDelete();
	});


	show_map2();
	//navigator.geolocation.getCurrentPosition(show_map, error, {maximumAge: 500});
});