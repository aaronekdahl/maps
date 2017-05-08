// var googleMap = new google.maps.Map( $('#google-map')[0] );

// googleMap.setCenter( { lat: 47.6205, lng: -122.3493 } );
// googleMap.setZoom( 16 );

// var marker = new google.maps.Marker( {
//         position: { lat: 47.6205, lng: -122.3493 }
//     } );
// marker.setMap( googleMap );

// var infoWindow = new google.maps.InfoWindow( {
//         content: 'The Space Needle'
//     } );
// marker.addListener( 'click', function( ) {
//         infoWindow.open( googleMap, marker );
//     } );

function initMap() {
        var seattle = {lat: 47.606, lng: -122.332};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: seattle
        });
        var marker = new google.maps.Marker({
          position: seattle,
          map: map
        });
      }