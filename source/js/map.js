ymaps.ready(init);

function init() {
  var myMap;

  myMap = new ymaps.Map("map", {
    center: [34.872651, -111.760957],
    zoom: 8,
    controls: []
  });
  myMap.behaviors.disable("scrollZoom");

  myMap.controls.add("zoomControl", {
    position: { top: 15, left: 15 }
  });

  var myPlacemark = new ymaps.Placemark(
    [34.872651, -111.760957],
    {},
    {
      iconImageHref: "/source/img/icon-map-marker.svg",
      iconImageSize: [27, 27],
      iconImageOffset: [-6, -20]
    }
  );
  myMap.geoObjects.add(myPlacemark);
}
