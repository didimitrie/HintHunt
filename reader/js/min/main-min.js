function getR(e,t){return Math.random()*(t-e)+e}var style=[{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"on"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"simplified"},{color:"#393939"}]},{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#bfbfbf"},{visibility:"on"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#363636"},{visibility:"on"}]},{featureType:"landscape.man_made",stylers:[{color:"#363636"},{visibility:"off"}]}],myFirebaseRef;$(window).load(function(){function e(e){var t=e.coords.latitude,s=e.coords.longitude;o=new google.maps.DirectionsRenderer({polylineOptions:{strokeColor:"#ff6fcf",strokeOpacity:"0.7",strokeWeight:"10"}});var l=new google.maps.LatLng(t,s),a=new google.maps.LatLng(t+getR(-.01,.01),s+getR(-.01,.01)),n={scrollwheel:!0,zoom:13,center:l,panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,draggable:!0,mapTypeId:google.maps.MapTypeId.ROADMAP};r=new google.maps.Map(document.getElementById("the-map"),n),r.setOptions({styles:style}),o.setMap(r);var y={origin:l,destination:a,travelMode:google.maps.TravelMode.WALKING};i.route(y,function(e,t){t==google.maps.DirectionsStatus.OK&&o.setDirections(e)})}function t(){alert(r.getCenter())}myFirebaseRef=new Firebase("https://hint-hunt.firebaseio.com");var o,i=new google.maps.DirectionsService,r,s;navigator.geolocation.getCurrentPosition(e,t,{maximumAge:500})});