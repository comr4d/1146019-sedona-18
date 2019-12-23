var map;
function initMap() {
  var myLatLng = { lat: 34.86875, lng: -111.762071 };
  map = new google.maps.Map(
    document.getElementsByClassName("reservation__map")[0],
    {
      center: myLatLng,
      zoom: 7,
      streetViewControl: false,
      mapTypeControl: false
    }
  );

  var image = "img/icon-map-marker.svg";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });

  marker.setMap(map);
}
