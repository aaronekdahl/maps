//---------------------------google maps code provided to initialize map with marker------------------//

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

//---------------------------lat/lon function for user on-submit action-------------------------------//

// function initCoords() {
//        var userLatLng = new google.maps.LatLng(47.606, -122.332);
//        var userOptions = {
//         	zoom: 14,
//         	center: userLatLng,
//         	mapTypeId: google.maps.MapTypeId.ROADMAP
// 				}
// 				var map = new google.maps.Map(document.getElementById("map"), userOptions);
// 			}	

//-------------------------------------Favorite Places-----------------------------------------------//

// var granbury = 32.4421, 97.7942
// var houghton = 47.1211, 88.5694
// var suciaIsland = 48.7551, 122.9034
// var eagleHarbor = 48.5753, 122.7066
// var fairhaven = 48.7184, 122.5070

function hello() {
	alert("Hello!");
}