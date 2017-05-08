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

//-------------------------------------Favorite Places-----------------------------------------------//
var granbury = //32.4421° N, 97.7942° W
var houghton = //47.1211° N, 88.5694° W
var suciaIsland = //48.7551° N, 122.9034° W
var eagleHarbor = //48.5753° N, 122.7066° W
var fairhaven = //48.7184° N, 122.5070° W