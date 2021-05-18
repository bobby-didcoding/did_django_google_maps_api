
$.getScript( "https://maps.googleapis.com/maps/api/js?key=" + google_api_key + "&libraries=places") 
.done(function( script, textStatus ) {
    google.maps.event.addDomListener(window, "load", initMap)

})

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 17;
let labelIndexc = 2;
google.maps.event.addListener(map, "click", (event) => {
  addMarker(event.latLng, map);
});
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map-route'), {
        zoom: 7,
        center: {lat: lat_a, lng: long_a}
    });
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);
    addMarkers({lat:49.44014,lng:1.08941});
    addMarkers({lat:49.087358,lng:1.510055});
    addMarkers({lat:49.28214,lng:1.003392});
    addMarker({lat:49.359123,lng:0.522731});
    addMarker({lat:49.239121,lng:1.198214}, map);
    
    function addMarker(location, map) {
      // Add the marker at the clicked location, and add the next-available label
      // from the array of alphabetical characters.
      new google.maps.Marker({
        position: location,
        label: labels[labelIndexc],
        map: map,
      });

    }

    //add marker function
    function addMarkers(coords){
        var marker = new google.maps.Marker({
            position:coords,
            map:map,
            label: labels[labelIndex],
        });  
    }
  
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);


      } else {

        alert('Directions request failed due to ' + status);
        window.location.assign("/route")
      }
    });
}
 
