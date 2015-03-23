function show_map(e){var o=e.coords.latitude,t=e.coords.longitude,n=new google.maps.LatLng(o,t),a={scrollwheel:!0,zoom:17,center:n,panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,draggable:!0,mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(document.getElementById("the-map"),a),map.setOptions({styles:style});var r={path:"M 0,-1 0,1",strokeOpacity:1,scale:4};traces=new google.maps.Polyline({path:coords,strokeColor:"#00C7FF",strokeOpacity:.1,strokeWeight:10,icons:[{icon:r,offset:"0",repeat:"20px"}]}),traces.setMap(map)}function show_map2(){var e=50.85,o=4.35,t=new google.maps.LatLng(e,o),n={scrollwheel:!0,zoom:17,center:t,panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,draggable:!0,mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(document.getElementById("the-map"),n),map.setOptions({styles:style});var a={path:"M 0,-1 0,1",strokeOpacity:1,scale:4};traces=new google.maps.Polyline({path:coords,strokeColor:"#00C7FF",strokeOpacity:.1,strokeWeight:10,icons:[{icon:a,offset:"0",repeat:"20px"}]}),traces.setMap(map)}function error(){alert("please position")}function getR(e,o){return Math.random()*(o-e)+e}function round(e,o){return Number(Math.round(e+"e"+o)+"e-"+o)}function closeControls(){$(".pin-details").velocity("transition.slideUpOut",{duration:400}),$(".main").velocity({translateY:["0vh","20vh"],scale:1},{duration:300}),$(".close-input").velocity("transition.flipXOut",{delay:0,duration:0}).velocity({scale:1},0),$(".pin-overlay").velocity({scale:1},200)}function openControls(){$(".main").velocity({translateY:["20vh",0],scale:[2,1]},{duration:300}),$(".pin-details").velocity("transition.slideDownIn",{duration:300,delay:150}),$(".close-input").velocity("transition.flipXIn",{delay:200}).velocity({scale:1.6},200)}function closeReview(){$(".route-review").velocity({translateY:"0vh"},{duration:400,easing:"easeOutQuint"}),$(".info-stuff").velocity("transition.flipXOut",{display:null,duration:0})}function openReview(){$(".route-review").velocity({translateY:"-100vh"},{duration:400,easing:"easeOutQuint"}),$(".info-stuff").velocity("transition.flipXIn",{display:null,stagger:100,delay:300})}function addCoordsToPath(){var e=new google.maps.Marker({position:map.getCenter(),map:map,icon:{path:google.maps.SymbolPath.CIRCLE,scale:7}});google.maps.event.addListener(e,"click",function(){map.setZoom(map.getZoom()),map.panTo(e.getPosition())});var o=traces.getPath();o.push(map.getCenter());var t={tip:""===$(".tip-input").val()?" ":"blast",location:map.getCenter(),zoom:map.getZoom()};myCoords.push(t);var n=traces.inKm();$(".stop-number").find(".round-numbers").html(myCoords.length),$(".length").find(".round-numbers").html(round(n,2)),$(".duration").find(".round-numbers").html(round(n/3,2)),$(".tip-input").val("")}var map,geocoder,traces,coords=[],traces,myCoords=[],google;google.maps.LatLng.prototype.kmTo=function(e){var o=Math,t=o.PI/180,n=this.lat()*t,a=e.lat()*t,r=n-a,s=this.lng()*t-e.lng()*t,i=2*o.asin(o.sqrt(o.pow(o.sin(r/2),2)+o.cos(n)*o.cos(a)*o.pow(o.sin(s/2),2)));return 6378.137*i},google.maps.Polyline.prototype.inKm=function(e){for(var o=this.getPath(e),t=o.getLength(),n=0,a=0;t-1>a;a++)n+=o.getAt(a).kmTo(o.getAt(a+1));return n};var style=[{stylers:[{hue:"#ff1a00"},{invert_lightness:!0},{saturation:-100},{lightness:33},{gamma:.9}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2D333C"}]}],myFirebaseRef,windowHeight=window.innerHeight;$(window).load(function(){myFirebaseRef=new Firebase("https://hint-hunt.firebaseio.com");var e="closed",o=0;$(".route-review").hammer().on("pandown",function(e){e.stopPropagation();var t=100/windowHeight*e.gesture.deltaY-100;o=-t,$(this).velocity({translateY:t+"%"},0)}),$(".route-review").hammer().on("panend",function(t){o>60?$(this).velocity({translateY:"-100vh"},{duration:200}):(closeReview(),e="closed")}),$(".save-route").hammer().on("tap",function(){"closed"===e&&(openReview(),deltaY=0,e="review")}),$(".save-share").hammer().on("tap",function(){var e=myFirebaseRef.child("routes"),o=e.push(myCoords);console.log(o.key())}),$(".close-input").hammer().on("tap",function(o){"open"===e&&(o.preventDefault(),closeControls(),addCoordsToPath(),e="closed")}),$(".pin-details").hammer().on("tap",function(o){"open"===e&&(o.stopPropagation(),closeControls(),e="closed")}),$(".actions").hammer().on("tap",function(e){e.preventDefault()}),$(".pin-overlay").hammer().on("tap",function(o){$(this).velocity({scale:.4},300),$("#waypoint-number").html("#"+(myCoords.length+1)),$("#path-length").html("Length: "+Math.round(100*traces.inKm())/100+"km"),"closed"===e&&(openControls(),e="open")}),show_map2()});